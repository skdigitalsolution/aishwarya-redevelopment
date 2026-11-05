export const WHATSAPP_CONTACT = {
  // Set true only after the client confirms that this number accepts WhatsApp enquiries.
  confirmed: false,
  number: "917021892236",
  message: "Hello Aishwarya Redevelopment Advisory Company, I would like to enquire about your redevelopment and real estate advisory services.",
} as const;

export const whatsappContactUrl = `https://wa.me/${WHATSAPP_CONTACT.number}?text=${encodeURIComponent(WHATSAPP_CONTACT.message)}`;

export const enquiryTypes = [
  "Society Redevelopment",
  "Self-Redevelopment",
  "Legal & Title Advisory",
  "Land Banking & Brokerage",
  "Developer / Business Partnership",
  "General Consultation",
] as const;

export interface ContactEnquiry {
  fullName: string;
  mobile: string;
  email: string;
  enquiryType: string;
  location: string;
  message: string;
}

/** Adapter contract for a future delivery service. Confirm delivery server-side. */
export type DeliverContactEnquiry = (enquiry: ContactEnquiry) => Promise<{ delivered: boolean }>;
