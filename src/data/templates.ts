export interface Template {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  demoUrl?: string;
  cliCommand: string;
  tags: string[];
  isNew?: boolean;
}

export const templateCategories = [
  "All",
  "Hero Section",
  "Logo Cloud",
  "Features",
  "Integrations",
  "Content",
  "Stats",
  "Team",
  "Testimonials",
  "Call To Action",
  "Footer",
  "Pricing",
];

export const templates: Template[] = [
  {
    id: "hero-section-1",
    title: "Modern Hero Section",
    description: "A clean and modern hero section with gradient background and call-to-action buttons.",
    category: "Hero Section",
    image: "/templates/hero-1.png",
    demoUrl: "/templates/hero-section-1",
    cliCommand: "npx shadcn add https://hexui.com/r/hero-section-1",
    tags: ["gradient", "cta", "modern"],
    isNew: true,
  },
  {
    id: "logo-cloud-1",
    title: "Animated Logo Cloud",
    description: "Showcase your partners and clients with a beautiful animated logo cloud.",
    category: "Logo Cloud",
    image: "/templates/logo-cloud-1.png",
    demoUrl: "/templates/logo-cloud-1",
    cliCommand: "npx shadcn add https://hexui.com/r/logo-cloud-1",
    tags: ["animation", "logos", "partners"],
  },
  {
    id: "features-grid",
    title: "Feature Grid",
    description: "Display your product features in a clean grid layout with icons.",
    category: "Features",
    image: "/templates/features-grid.png",
    demoUrl: "/templates/features-grid",
    cliCommand: "npx shadcn add https://hexui.com/r/features-grid",
    tags: ["grid", "icons", "features"],
  },
  {
    id: "pricing-cards",
    title: "Pricing Cards",
    description: "Modern pricing cards with feature comparison and highlighted tier.",
    category: "Pricing",
    image: "/templates/pricing-cards.png",
    demoUrl: "/templates/pricing-cards",
    cliCommand: "npx shadcn add https://hexui.com/r/pricing-cards",
    tags: ["pricing", "cards", "comparison"],
    isNew: true,
  },
  {
    id: "testimonials-carousel",
    title: "Testimonials Carousel",
    description: "Showcase customer testimonials with an elegant carousel design.",
    category: "Testimonials",
    image: "/templates/testimonials.png",
    demoUrl: "/templates/testimonials-carousel",
    cliCommand: "npx shadcn add https://hexui.com/r/testimonials-carousel",
    tags: ["carousel", "reviews", "social-proof"],
  },
  {
    id: "cta-section",
    title: "Call to Action",
    description: "Eye-catching CTA section with gradient background and compelling copy.",
    category: "Call To Action",
    image: "/templates/cta.png",
    demoUrl: "/templates/cta-section",
    cliCommand: "npx shadcn add https://hexui.com/r/cta-section",
    tags: ["cta", "conversion", "gradient"],
  },
];
