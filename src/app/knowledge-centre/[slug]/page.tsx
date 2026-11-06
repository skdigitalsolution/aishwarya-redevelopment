import Link from "@/components/resources/ResourceLink";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { ClientImage } from "@/components/ui/ClientImage";
import { ResourceReveal } from "@/components/resources/ResourceReveal";
import { pageMetadata } from "@/lib/seo";
import { articles, articleImage } from "../knowledge-data";
import "@/components/resources/resources.css";

export const dynamicParams = false;
export function generateStaticParams() { return articles.map(({ slug }) => ({ slug })); }
type ArticleProps = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: ArticleProps) {
  const { slug } = await params;
  const article = articles.find(item => item.slug === slug);
  if (!article) notFound();
  return pageMetadata(`/knowledge-centre/${slug}`, article.title, article.summary);
}

export default async function KnowledgeArticlePage({ params }: ArticleProps) {
  const { slug } = await params;
  const article = articles.find(item => item.slug === slug);
  if (!article) notFound();
  const index = articles.indexOf(article);
  const related = [articles[(index + 1) % articles.length], articles[(index + 2) % articles.length]];
  return <><Navbar /><main id="main-content" tabIndex={-1} className="resource-page resource-article" data-motion-owned>
    <section className="resource-articleHero" aria-labelledby="article-title"><Container><Link href="/knowledge-centre/" className="resource-textLink"><ArrowLeft size={16} aria-hidden="true" />Back to Knowledge Centre</Link><ResourceReveal className="resource-articleIntro"><div><p className="resource-eyebrow">Educational overview</p><h1 id="article-title">{article.title}</h1><p>{article.summary}</p><span className="resource-sourceDate">Source review date: {article.reviewed}</span></div><ClientImage id={articleImage(slug)} dark aspect="aspect-[16/10]" /></ResourceReveal></Container></section>
    <Container className="resource-readingLayout"><aside className="resource-contents" aria-label="Guide contents"><h2>In this guide</h2><ol>{article.sections.map((section, number) => <li key={section.title}><a href={`#section-${number + 1}`}>{section.title}</a></li>)}</ol></aside>
      <article className="resource-readingBody" aria-label={article.title}>{article.sections.map((section, number) => <section id={`section-${number + 1}`} key={section.title}><ResourceReveal><h2>{section.title}</h2><p>{section.body}</p></ResourceReveal></section>)}
        <aside className="resource-officialReference"><h2>Official resource</h2><a href={article.source.url} target="_blank" rel="noopener noreferrer">{article.source.title} <ArrowUpRight size={16} aria-hidden="true" /></a><p>General educational information, not a property-specific legal, technical or financial opinion. Check current official rules and obtain qualified advice before making commitments.</p></aside>
        <div className="resource-articleActions"><Link href="/knowledge-centre/" className="resource-textLink"><ArrowLeft size={16} aria-hidden="true" />Back to Knowledge Centre</Link><Link href="/contact/" className="resource-button">Discuss a consultation <ArrowUpRight size={16} aria-hidden="true" /></Link></div>
      </article>
    </Container>
    <section className="resource-section resource-related" aria-labelledby="related-title"><Container><p className="resource-eyebrow">Continue reading</p><h2 id="related-title" className="resource-heading">Related <em>guides.</em></h2><div>{related.map(item => <Link key={item.slug} href={`/knowledge-centre/${item.slug}/`}><h3>{item.title}</h3><p>{item.summary}</p><span>Read guide <ArrowUpRight size={15} aria-hidden="true" /></span></Link>)}</div></Container></section>
  </main><Footer /></>;
}
