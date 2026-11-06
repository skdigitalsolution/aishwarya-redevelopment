"use client";

import { premiumMotion } from "@/components/ui/premium-motion";
import { useState } from "react";
import Link from "@/components/resources/ResourceLink";
import { Search, ArrowUpRight } from "lucide-react";
import Image from "@/components/ui/SiteImage";
import { PerspectiveCard } from "@/components/ui/PerspectiveCard";
import { ResourceReveal } from "@/components/resources/ResourceReveal";
import { clientImages } from "@/lib/client-images";
import { articles, articleImage } from "./knowledge-data";

export function GuideLibrary() {
  const [query, setQuery] = useState("");
  const matches = articles.filter(article => `${article.title} ${article.summary}`.toLowerCase().includes(query.toLowerCase().trim()));
  return <>
    <div className="resource-libraryBar"><div><label htmlFor="knowledge-search">Search educational guides</label><div className="resource-search"><Search size={19} aria-hidden="true" /><input id="knowledge-search" type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder="Search by topic" /></div></div><p role="status">{matches.length} {matches.length === 1 ? "guide" : "guides"} available</p></div>
    <div className="resource-guideGrid">{matches.map(article => {
      const id = articleImage(article.slug);
      return <ResourceReveal key={article.slug} delay={(articles.indexOf(article) % 3) * premiumMotion.stagger}><PerspectiveCard as="article" className="resource-guideCard">
        <Link href={`/knowledge-centre/${article.slug}/`} className="resource-guideLink">
          <div className="resource-guideImage"><Image src={`/images/${id}.jpeg`} alt={clientImages[id].alt} fill loading="lazy" sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw" /></div>
          <div className="resource-guideCopy"><span className="resource-eyebrow">Educational guide</span><h3>{article.title}</h3><p>{article.summary}</p><span className="resource-readLink">Read guide <ArrowUpRight size={17} aria-hidden="true" /></span></div>
        </Link>
      </PerspectiveCard></ResourceReveal>;
    })}</div>
    {!matches.length && <div className="resource-empty"><p>No matching guides. Try another topic or clear the search.</p><button type="button" onClick={() => setQuery("")}>Clear search</button></div>}
  </>;
}
