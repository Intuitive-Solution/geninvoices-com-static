
# give me a design prd that I can use in cursor

**Mercury-Inspired Website: UI Design PRD (Product Requirements Document) for Cursor**

***

**1. Overview**
Design a modern, high-trust business banking homepage, inspired by Mercury.com, with a focus on clear information hierarchy, conversion-focused CTAs, accessibility, and visually distinctive accents.

***

**2. Goals**

- Build user trust instantly (fintech/business-grade feel)
- Drive user conversion with prominent CTAs above the fold
- Deliver an uncluttered, accessible experience (mobile and desktop)
- Demonstrate major product features/services in logical, scannable sections

***

**3. Key Pages**

- **Homepage (main focus)**
- Pricing page
- Features page(s)
- Contact/Open Account page

***

**4. Branding**

- **Fonts:**
    - Mercury Text or modern serif (for large headings)
    - Inter (body, navigation, UI text; fallback: system-ui sans-serif)
- **Color Palette:**
    - Primary: White (\#FFFFFF), Violet (\#412B76), Cyan (\#2EE8B6)
    - Accents: Deep Graphite (\#18181B), Light Grey (\#F2EEEB), Muted Violet (\#313963)

***

**5. Main Layout (Homepage Wireframe Spec)**

- **Header:** Sticky, with nav links (Products, Pricing, Features, Resources, Company), secondary CTA (“Contact”), and primary CTA (“Open Account”), outlined or filled.
- **Hero Section:**
    - Large headline (bold serif)
    - 1–2 line explainer (body font)
    - Prominent email or signup input, main action button
    - Optional: Abstract illustration or SVG icon at right/above text
- **Feature Blocks:**
    - Multi-section scroll (Cards for “Banking”, “Payments”, “Cards”, “Expense Management”, etc.)
    - Each section: icon or abstract art, heading, supportive bullets, CTA link
    - Alt-colored or shadowed cards
- **Testimonials:**
    - Headshot/photo, quote text (in styled block), affiliation
- **Pricing Table Preview:**
    - Three columns: Mercury, Plus, Pro
    - Features checklist \& per-month pricing
    - “Open Account”/“Contact” CTA for each
- **Footer:**
    - Multi-column link groups, social icons, small legal text

***

**6. Interaction \& Accessibility**

- Button hover/focus states (high-contrast)
- Forms: minimal, accessible, and with clear error/empty states
- Headings properly structured (use h1, h2, h3)
- Tab/keyboard navigable, all texts high-contrast ratio

***

**7. Components (describe for dev/UI work in Cursor)**

- Header/Navbar component (with sticky/fixed and responsive modes)
- HeroSection component (with title, subtitle, action, optional artwork)
- FeatureSection component (reusable, takes props for heading, points, icon)
- PricingTable component
- TestimonialCard component
- Footer component

***

**8. Visual References \& Resources**

- Art direction: Mix of whitespace, custom illustrations, geometric shapes, and bold accent blocks for emphasis.
- Image/Illustration: Use SVG icons or abstract graphics (not stock photos).
- Example code snippets:

```css
body {
  font-family: "Inter", "system-ui", sans-serif;
  color: #18181B;
  background: #FFFFFF;
}
.btn-primary {
  background: #412B76;
  color: #FFF;
  border-radius: 8px;
}
.btn-primary:hover { background: #2EE8B6; color: #18181B; }
```

(expand for each UI component as needed)

***

**9. Out-of-Scope**

- User auth, dashboard (focus is static/info design and high-conv homepage MVP)
- Transaction/fintech backend flows

***

**10. Acceptance Criteria**

- Responsive: Fully functional on desktop/mobile
- All sections clearly demoed and well-separated
- Fonts/colors accurately reflect design spec above
- Accessibility: passes Axe or Lighthouse accessibility audits

***

**Use this as a spec to structure and build your pages/components in Cursor, and easily collaborate between design and dev. If you want, I can generate Figma-style visual references or component code as a next step!**

