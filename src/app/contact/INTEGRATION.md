# Contact integration

- No enquiry backend, email provider or storage is configured. The public form only validates and prepares a local summary; it never reports delivery.
- Integration point: `ContactForm` accepts a `DeliverContactEnquiry` adapter defined in `src/lib/contact.ts`. Connect it through a client wrapper or a server action after configuring a real server-side delivery service. Validate all fields server-side, add abuse protection and keep provider credentials on the server. Return `delivered: true` only after delivery is confirmed.
- The global WhatsApp component is mounted in the root layout but hidden while `WHATSAPP_CONTACT.confirmed` is false. Confirm that +91 70218 92236 accepts WhatsApp enquiries before changing this flag. The encoded URL uses the exact requested number and message.
- No office street address, email address, hours, social account or map coordinates have been supplied. The location section is the future insertion point for a verified address and map; none is currently embedded.
- Shared consultation forms also validate locally and explicitly state that nothing is delivered. They offer a working call alternative and do not promise a callback.
