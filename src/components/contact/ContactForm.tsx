"use client";

import { useRef, useState, type FormEvent } from "react";
import { ArrowUpRight, Phone } from "lucide-react";
import { enquiryTypes, type ContactEnquiry, type DeliverContactEnquiry } from "@/lib/contact";

type Field = keyof ContactEnquiry;
type Errors = Partial<Record<Field, string>>;
const fields: Field[] = ["fullName", "mobile", "email", "enquiryType", "location", "message"];
const control = "mt-2 min-h-12 w-full border border-navy/50 bg-white/80 px-4 py-3 text-base sm:text-sm text-navy placeholder:text-charcoal/65 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold aria-invalid:border-red-700";

/** Pass a delivery adapter only when a real, validated backend has been configured. */
export function ContactForm({ deliverEnquiry }: { deliverEnquiry?: DeliverContactEnquiry }) {
  const [errors, setErrors] = useState<Errors>({});
  const [state, setState] = useState<"idle" | "ready" | "sending" | "delivered" | "error">("idle");
  const [review, setReview] = useState<ContactEnquiry | null>(null);
  const statusRef = useRef<HTMLDivElement>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (state === "sending") return;
    const form = event.currentTarget;
    const formData = new FormData(form);
    const enquiry = Object.fromEntries(fields.map((field) => [field, String(formData.get(field) ?? "").trim()])) as unknown as ContactEnquiry;
    const nextErrors: Errors = {};
    if (enquiry.fullName.length < 2 || enquiry.fullName.length > 120) nextErrors.fullName = "Enter your full name (2–120 characters).";
    if (!/^[+\d\s().-]+$/.test(enquiry.mobile) || !/^\d{7,15}$/.test(enquiry.mobile.replace(/\D/g, ""))) nextErrors.mobile = "Enter a valid contact number with 7–15 digits, including the country code if applicable.";
    const emailInput = form.elements.namedItem("email") as HTMLInputElement;
    if (enquiry.email && !emailInput.validity.valid) nextErrors.email = "Enter a valid email address, or leave this field empty.";
    if (!(enquiryTypes as readonly string[]).includes(enquiry.enquiryType)) nextErrors.enquiryType = "Choose an enquiry type.";
    if (enquiry.message.length < 10 || enquiry.message.length > 3000) nextErrors.message = "Please describe your enquiry in 10–3,000 characters.";
    setErrors(nextErrors);
    setReview(null);
    if (Object.keys(nextErrors).length) {
      setState("idle");
      const first = fields.find((field) => nextErrors[field]);
      if (first) (form.elements.namedItem(first) as HTMLElement)?.focus();
      return;
    }
    if (!deliverEnquiry) {
      setReview(enquiry);
      setState("ready");
      requestAnimationFrame(() => statusRef.current?.focus());
      return;
    }
    setState("sending");
    try {
      const result = await deliverEnquiry(enquiry);
      if (!result.delivered) throw new Error("Delivery not confirmed");
      setState("delivered");
      form.reset();
    } catch {
      setState("error");
    }
    requestAnimationFrame(() => statusRef.current?.focus());
  }

  function a11y(field: Field) {
    return { "aria-invalid": !!errors[field], "aria-describedby": errors[field] ? `contact-${field}-error` : undefined };
  }
  function error(field: Field) {
    return errors[field] ? <p id={`contact-${field}-error`} className="mt-2 text-xs leading-5 text-red-800">{errors[field]}</p> : null;
  }

  return (
    <form noValidate onSubmit={handleSubmit} onChange={() => { if (state !== "sending") { setState("idle"); setReview(null); } }} aria-describedby="contact-form-note" className="border border-navy/15 bg-ivory p-6 sm:p-10">
      <p id="contact-form-note" className="mb-8 border-l-2 border-gold pl-4 text-sm leading-7 text-charcoal/80">{deliverEnquiry ? "Tell us how we can help. Fields marked * are required." : "Online enquiry delivery is not yet available. Use this form to prepare your details, then call us to discuss them. Your details are not sent or saved. Fields marked * are required."}</p>
      <a href="tel:+917021892236" className="mb-6 inline-flex min-h-12 items-center gap-3 border-b border-gold text-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"><Phone size={16} aria-hidden="true" />Call +91 70218 92236</a>
      <fieldset disabled={state === "sending"} className="grid min-w-0 gap-6 sm:grid-cols-2">
        <legend className="sr-only">Your enquiry details</legend>
        <div><label htmlFor="contact-fullName" className="text-sm font-medium">Full Name *</label><input id="contact-fullName" name="fullName" autoComplete="name" required minLength={2} maxLength={120} {...a11y("fullName")} className={control} />{error("fullName")}</div>
        <div><label htmlFor="contact-mobile" className="text-sm font-medium">Mobile Number *</label><input id="contact-mobile" name="mobile" type="tel" inputMode="tel" autoComplete="tel" required maxLength={25} {...a11y("mobile")} className={control} />{error("mobile")}</div>
        <div><label htmlFor="contact-email" className="text-sm font-medium">Email (optional)</label><input id="contact-email" name="email" type="email" autoComplete="email" maxLength={254} {...a11y("email")} className={control} />{error("email")}</div>
        <div><label htmlFor="contact-enquiryType" className="text-sm font-medium">Enquiry Type *</label><select id="contact-enquiryType" name="enquiryType" required defaultValue="" {...a11y("enquiryType")} className={control}><option value="" disabled>Select your enquiry</option>{enquiryTypes.map((type) => <option key={type}>{type}</option>)}</select>{error("enquiryType")}</div>
        <div className="sm:col-span-2"><label htmlFor="contact-location" className="text-sm font-medium">Property / Society Location (optional)</label><input id="contact-location" name="location" maxLength={240} {...a11y("location")} className={control} placeholder="Area, locality or city" /></div>
        <div className="sm:col-span-2"><label htmlFor="contact-message" className="text-sm font-medium">Message *</label><textarea id="contact-message" name="message" required minLength={10} maxLength={3000} rows={5} {...a11y("message")} className={control} placeholder="Tell us about your property, priorities and the guidance you need. Please avoid sharing sensitive documents here." />{error("message")}</div>
      </fieldset>
      {Object.keys(errors).length > 0 && <p role="alert" className="mt-5 text-xs text-red-800">Please review the highlighted fields before continuing.</p>}
      <button type="submit" disabled={state === "sending"} className="mt-7 inline-flex min-h-12 items-center justify-center gap-3 bg-navy px-6 py-4 text-xs font-medium text-ivory hover:bg-navy-800 disabled:cursor-wait disabled:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold">{state === "sending" ? "Sending enquiry…" : deliverEnquiry ? "Send enquiry" : "Review enquiry details"}<ArrowUpRight size={16} aria-hidden="true" /></button>
      <div ref={statusRef} tabIndex={-1} role="status" aria-live="polite" className="mt-5 text-sm leading-7 focus-visible:outline-2 focus-visible:outline-gold">
        {state === "ready" && <><p className="font-medium">Your details are ready to review. Nothing has been sent.</p><p className="mt-2 text-xs text-charcoal/75">Call our team to discuss your enquiry. You can select and copy the summary for your records.</p></>}
        {state === "delivered" && <p>Your enquiry has been delivered. Thank you for contacting Aishwarya.</p>}
        {state === "error" && <p className="text-red-800">We could not confirm delivery. Your details remain in the form. Please try again or call +91 70218 92236.</p>}
      </div>
      {state === "ready" && review && <div className="mt-5"><label htmlFor="contact-summary" className="text-sm font-medium">Enquiry summary</label><textarea id="contact-summary" readOnly rows={10} className={control} value={`Name: ${review.fullName}\nMobile: ${review.mobile}\nEmail: ${review.email || "Not provided"}\nEnquiry: ${review.enquiryType}\nLocation: ${review.location || "Not provided"}\n\n${review.message}`} /><a href="tel:+917021892236" className="mt-4 inline-flex min-h-12 items-center gap-3 border-b border-gold text-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"><Phone size={16} aria-hidden="true" />Call +91 70218 92236</a></div>}
    </form>
  );
}
