"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, Phone } from "lucide-react";

const inputClass = "mt-2 min-h-12 w-full border border-navy/50 bg-white/70 px-4 py-3 text-base sm:text-sm text-navy placeholder:text-charcoal/65 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold";
const fields = [
  { name: "name", label: "Full Name", type: "text", autoComplete: "name", required: true, maxLength: 120 },
  { name: "phone", label: "Contact Number", type: "tel", autoComplete: "tel", required: true, pattern: "[+0-9\\(\\) .\\-]{7,25}", title: "Enter a contact number with 7–15 digits, using spaces, +, parentheses or hyphens if needed.", maxLength: 25 },
  { name: "email", label: "Email (optional)", type: "email", autoComplete: "email", required: false, maxLength: 254 },
  { name: "location", label: "Property Location", type: "text", required: true, maxLength: 240 },
  { name: "acres", label: "Total Acres", type: "number", required: true, min: "0.0001", step: "any" },
  { name: "road", label: "Road Access Width", type: "text", required: true, placeholder: "e.g. 12 metres, or access to be confirmed", maxLength: 120 },
  { name: "price", label: "Target Pricing", type: "text", required: true, placeholder: "Include currency and per-acre or total basis", maxLength: 160 },
];

export function PortfolioEnquiry() {
  const [summary, setSummary] = useState("");

  function prepareEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    for (const field of fields) {
      const input = form.elements.namedItem(field.name) as HTMLInputElement;
      const value = String(data.get(field.name) ?? "").trim();
      input.setCustomValidity(field.required && !value ? "Please complete this field." : "");
      if (field.name === "phone" && !/^\d{7,15}$/.test(value.replace(/\D/g, ""))) {
        input.setCustomValidity("Please enter a phone number with 7–15 digits.");
      }
    }
    if (!form.reportValidity()) return;
    const labels = [...fields.map(({ name, label }) => [name, label]), ["zoning", "Zoning Status"], ["notes", "Additional Notes"]];
    setSummary(labels.map(([name, label]) => `${label}: ${String(data.get(name) ?? "").trim() || "Not provided"}`).join("\n"));
  }

  return (
    <form onSubmit={prepareEnquiry} onChange={() => { if (summary) setSummary(""); }} className="border border-navy/15 bg-ivory p-6 sm:p-10">
      <p id="enquiry-status" className="mb-8 border-l-2 border-gold pl-4 text-sm leading-7 text-charcoal/80">Prepare your details for a discussion. This form does not send or save an enquiry. Call our team to discuss your property; no online submission is available.</p>
      <a href="tel:+917021892236" className="mb-6 inline-flex min-h-12 items-center gap-3 border-b border-gold text-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"><Phone size={16} aria-hidden="true" />Call +91 70218 92236</a>
      <div className="grid gap-6 sm:grid-cols-2">
        {fields.map(({ name, label, ...attributes }) => <div key={name} className={name === "price" ? "sm:col-span-2" : ""}><label htmlFor={`land-${name}`} className="text-sm font-medium">{label}{attributes.required && <span aria-hidden="true"> *</span>}</label><input id={`land-${name}`} name={name} {...attributes} onInput={(event) => event.currentTarget.setCustomValidity("")} className={inputClass} /></div>)}
        <div className="sm:col-span-2"><label htmlFor="land-zoning" className="text-sm font-medium">Zoning Status <span aria-hidden="true">*</span></label><select id="land-zoning" name="zoning" required defaultValue="" className={inputClass}><option value="" disabled>Select the known status</option><option>Agricultural</option><option>Non-agricultural</option><option>Residential</option><option>Commercial</option><option>Industrial</option><option>Mixed use</option><option>Other / to be reviewed</option><option>Unknown / needs verification</option></select></div>
        <div className="sm:col-span-2"><label htmlFor="land-notes" className="text-sm font-medium">Additional Notes (optional)</label><textarea id="land-notes" name="notes" rows={4} maxLength={3000} className={inputClass} placeholder="Share the ownership context, access details and any questions. Please do not include sensitive documents." /></div>
      </div>
      <p className="mt-5 text-xs text-charcoal/65">* Required to prepare a summary. Unconfirmed property details can be discussed with our team.</p>
      <button type="submit" aria-describedby="enquiry-status" className="mt-6 inline-flex min-h-12 items-center gap-3 bg-navy px-6 py-4 text-xs font-medium text-ivory hover:bg-navy-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold">Prepare enquiry summary <ArrowUpRight size={16} aria-hidden="true" /></button>
      <div role="status" aria-live="polite" className="mt-5 text-xs leading-6 text-charcoal/75">{summary ? "Your summary is ready below. Nothing has been sent. Copy it for your records and call us to discuss the next step." : ""}</div>
      {summary && <div className="mt-4"><label htmlFor="land-summary" className="text-sm font-medium">Your enquiry summary — select and copy</label><textarea id="land-summary" readOnly value={summary} rows={12} className={inputClass} /><a href="tel:+917021892236" className="mt-5 inline-flex min-h-12 items-center gap-3 border-b border-gold text-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"><Phone size={16} aria-hidden="true" />Discuss with us: +91 70218 92236</a></div>}
    </form>
  );
}
