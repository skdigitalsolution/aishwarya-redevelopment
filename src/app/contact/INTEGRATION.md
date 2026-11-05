# Contact integration

- No enquiry backend, email provider or storage is configured. The public form only validates and prepares a local summary; it never reports delivery.
- Integration point: `ContactForm` accepts a `DeliverContactEnquiry` adapter defined in `src/lib/contact.ts`. Connect it through a client wrapper or a server action after configuring a real server-side delivery service. Validate all fields server-side, add abuse protection and keep provider credentials on the server. Return `delivered: true` only after delivery is confirmed.
- The global WhatsApp component is mounted in the root layout but hidden while `WHATSAPP_CONTACT.confirmed` is false. Confirm that +91 70218 92236 accepts WhatsApp enquiries before changing this flag. The encoded URL uses the exact requested number and message.
- No office street address, email address, hours, social account or map coordinates have been supplied. The location section is the future insertion point for a verified address and map; none is currently embedded.
- Shared consultation forms also validate locally and explicitly state that nothing is delivered. They offer a working call alternative and do not promise a callback.

## Required before enabling online enquiries

1. Obtain client approval for a delivery provider and costs, recipient mailbox, sender address/domain and personal-data handling/retention policy. No provider has been installed.
2. Configure the approved provider credentials in server-only deployment environment variables (never `NEXT_PUBLIC_*`), and verify the sender domain as required by that provider. No credentials or recipient address are supplied in this repository.
3. Implement a server action or secure API route with server-side field/length validation, request size limits, rate limiting and abuse protection. Avoid recording personal details in application logs.
4. Wire all three forms: `ContactForm`, `ConsultationCTA` and `PortfolioEnquiry`. The latter two currently have no delivery adapter. Keep their local validation and entered values on failure; do not merely change their button text.
5. Test actual receipt in the approved inbox, provider rejection, timeout, duplicate submission and validation failure. Only show a delivery success after a confirmed provider response; provider acceptance alone does not guarantee inbox receipt. Update public wording only after this verification.
