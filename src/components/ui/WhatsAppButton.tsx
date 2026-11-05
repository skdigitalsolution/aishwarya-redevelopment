import { MessageCircle } from "lucide-react";
import { WHATSAPP_CONTACT, whatsappContactUrl } from "@/lib/contact";

/** Globally mounted; intentionally hidden until channel ownership is confirmed. */
export function WhatsAppButton() {
  if (!WHATSAPP_CONTACT.confirmed) return null;

  return (
    <aside aria-label="WhatsApp contact" className="pointer-events-none fixed inset-x-0 bottom-0 z-40 flex justify-end p-4 pb-[max(1rem,env(safe-area-inset-bottom))] sm:p-6 print:hidden">
      <a href={whatsappContactUrl} target="_blank" rel="noopener noreferrer" aria-label="Contact Aishwarya on WhatsApp (opens in a new tab)" className="pointer-events-auto inline-flex min-h-12 items-center gap-3 rounded-full border border-gold/70 bg-navy px-4 py-3 text-xs font-medium text-ivory shadow-lg motion-safe:transition-colors hover:bg-navy-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold in-[body:has(input:focus)]:hidden in-[body:has(textarea:focus)]:hidden in-[body:has(select:focus)]:hidden">
        <MessageCircle size={21} strokeWidth={1.5} aria-hidden="true" /><span className="hidden sm:inline">WhatsApp</span>
      </a>
    </aside>
  );
}
