import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";
import ts from "typescript";

// Reserved .example origin is a test fixture, never a published site setting.
const origin = "https://company.example";
const routes = ["/", "/about", "/services", "/redevelopment", "/land-banking", "/projects", "/founder", "/our-team", "/contact"];
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

function load(file, env, cache = new Map()) {
  if (cache.has(file)) return cache.get(file);
  const result = {};
  cache.set(file, result);
  const compiled = ts.transpileModule(fs.readFileSync(path.join(root, file), "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
  }).outputText;
  vm.runInNewContext(compiled, {
    exports: result,
    process: { env },
    URL,
    require(name) {
      assert.ok(name.startsWith("@/lib/"), "Unexpected runtime import: " + name);
      return load("src/" + name.slice(2) + ".ts", env, cache);
    },
  }, { filename: file });
  return result;
}

const launch = { NODE_ENV: "production", NEXT_PUBLIC_SITE_URL: origin, SITE_DEPLOYMENT_ENV: "production", SITE_INDEXING_ENABLED: "true" };
const config = load("src/lib/site-config.ts", {});
assert.equal(config.getSiteConfig({}).siteUrl, undefined);
assert.equal(config.getSiteConfig({}).indexable, false);
assert.equal(config.getSiteConfig(launch).indexable, true);

for (const override of [
  { SITE_INDEXING_ENABLED: "false" }, { SITE_DEPLOYMENT_ENV: "preview" },
  { NODE_ENV: "development" }, { VERCEL_ENV: "preview" },
  { CONTEXT: "deploy-preview" }, { CONTEXT: "branch-deploy" },
]) {
  const env = { ...launch, ...override };
  assert.equal(config.getSiteConfig(env).indexable, false, JSON.stringify(override));
  assert.equal(load("src/app/sitemap.ts", env).default().length, 0);
  assert.equal(load("src/app/robots.ts", env).default().rules.disallow, "/");
}

for (const url of ["", "not a URL", "http://company.example", "https://localhost", "https://test.local", "https://127.0.0.1", "https://[::1]", origin + "/subpath", origin + "?key=value", "https://user:pass@company.example", origin + ":8443"]) {
  assert.equal(config.getSiteConfig({ NEXT_PUBLIC_SITE_URL: url }).siteUrl, undefined, url);
  assert.throws(() => config.getSiteConfig({ ...launch, NEXT_PUBLIC_SITE_URL: url }), /approved, public HTTPS origin/);
}

const seo = load("src/lib/seo.ts", launch);
for (const route of routes) {
  const metadata = seo.pageMetadata(route, "Test page", "Accurate description");
  assert.equal(route === "/" ? metadata.title.absolute : metadata.title, route === "/" ? "Test page | Aishwarya Redevelopment Advisory Company" : "Test page");
  assert.equal(metadata.alternates.canonical, new URL(route, origin).href);
  assert.equal(metadata.openGraph.url, metadata.alternates.canonical);
  assert.equal(metadata.twitter.card, "summary");
}
const local = load("src/lib/seo.ts", {});
assert.equal(local.pageMetadata("/", "Home", "Description").alternates, undefined);
assert.equal(local.pageMetadata("/", "Home", "Description").openGraph.url, undefined);
assert.equal(local.organization.url, undefined);
assert.equal(local.organization.telephone, "+91 70218 92236");
assert.deepEqual(Object.keys(local.organization.address).sort(), ["@type", "addressCountry", "addressLocality", "addressRegion"]);
const sitemap = load("src/app/sitemap.ts", launch).default();
assert.equal(JSON.stringify(sitemap.map(entry => entry.url)), JSON.stringify(routes.map(route => new URL(route, origin).href)));
assert.equal(load("src/app/robots.ts", launch).default().sitemap, origin + "/sitemap.xml");
console.log("SEO configuration passed: default/preview guards, invalid origins, nine launch URLs, canonical/social metadata and verified-only Organization fields.");
