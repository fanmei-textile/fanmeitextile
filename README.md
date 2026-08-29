# Fanmei Textile B2B Website

English B2B website for HAINING FANMEI TEXTILE TECHNOLOGY CO., LTD.

## Main routes

- `/` — manufacturer overview and conversion landing page
- `/products` — product series overview
- `/products/[slug]` — product details and specification guidance
- `/about` — company profile
- `/factory` — manufacturing process and production photos
- `/contact` — verified contact methods and RFQ form
- `/rfq` — WhatsApp/email RFQ preparation flow

## Local development

```bash
pnpm install
pnpm dev
```

Run checks before deployment:

```bash
pnpm lint
pnpm typecheck
pnpm build
```

## Inquiry flow

The site intentionally does not claim to store RFQs without a configured backend. The RFQ form prepares a structured message for the buyer to review and send through the verified WhatsApp number or email address.

## Production

The `main` branch deploys to Vercel. The confirmed production and indexing URL is `https://www.fanmeitextile.com`; the apex domain redirects permanently to the `www` host.
