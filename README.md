# Archject — Visual Approval & Decision Log for Design Projects

This project was created with ScopesFlow automation.

## Build and run

```bash
npm install
npm run build
npm run dev    # development server
```

## Landing page

The public marketing landing page lives at `/` and is built from modular components under `src/components/landing/`:

| Component | Purpose |
|-----------|---------|
| `NavigationHeader` | Sticky header with pill nav (Features, How it works, Templates, Pricing), Log in, and Start free CTAs. Mobile drawer. |
| `HeroBlock` | Hero with title, subtitle, primary/secondary CTAs, optional media (image/video). |
| `FeatureCardGrid` | Responsive grid of feature cards (icons, titles, descriptions). |
| `HowItWorksSection` | Horizontal step flow with icons and connectors. |
| `TemplatesGallery` | Template tiles with thumbnails; click opens lightbox/modal. |
| `PricingPreview` | Tier comparison cards with CTAs to signup/billing. |
| `LogosTestimonials` | Logo strip and testimonial quotes. |
| `CTABar` | Inline CTA section with primary/secondary buttons. |
| `Footer` | Footer links (About, Help, Privacy, Terms, Contact) and social icons. |
| `ModalSignInDemo` | Optional modal for demo request form (email, company, message). |

Content and copy are centralized in `src/components/landing/landing-data.tsx` (hero, features, steps, templates, pricing, logos, testimonials). Replace placeholder template/logo URLs with real assets when ready.

**Routes:** `/` (landing), `/signup`, `/login`, `/demo-request`, `/pricing`. CTAs align with Login/Signup and Billing flows; primary actions use deep green (`#195C4A`).
