import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { WHATSAPP_CONTACT } from "@/lib/contact";

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
  title: "Aishwarya Redevelopment Advisory | Strategic Real Estate Advisory",
  description:
    "Distinguished redevelopment advisory and strategic consulting for premier housing societies and landowners.",
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
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
