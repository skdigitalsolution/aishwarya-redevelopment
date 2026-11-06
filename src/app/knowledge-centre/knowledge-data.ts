import articleData from "./data/articles.json";
import faqData from "./data/faqs.json";
import type { ClientImageId } from "@/lib/client-images";

/** Source text is imported verbatim. Local images supply contextual illustrations only. */
export const articles = articleData;
export const faqs = faqData;
export type KnowledgeArticle = (typeof articles)[number];
const imageIds: ClientImageId[] = [9, 14, 10, 8, 21, 18, 10, 11, 14, 19];
export function articleImage(slug: string): ClientImageId {
  return imageIds[Math.max(0, articles.findIndex(article => article.slug === slug))];
}
