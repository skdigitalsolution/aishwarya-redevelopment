import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { WHATSAPP_CONTACT } from "@/lib/contact";
import { companyName, organization, siteConfig } from "@/lib/seo";
import { EditorialMotion } from "@/components/ui/EditorialMotion";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl ?? "http://localhost:3000"),
  title: { default: companyName, template: `%s | ${companyName}` },
  robots: { index: siteConfig.indexable, follow: siteConfig.indexable },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${plusJakarta.variable} scroll-smooth antialiased`}
    >
      {/* Extensions may inject body attributes such as cz-shortcut-listen before hydration. */}
      <body
        suppressHydrationWarning
        className={`min-h-screen bg-ivory font-sans text-charcoal flex flex-col${WHATSAPP_CONTACT.confirmed ? " pb-24" : ""}`}
      >
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization).replace(/</g, "\\u003c") }} />
        {children}
        <EditorialMotion />
        <WhatsAppButton />
      </body>
    </html>
  );
}
