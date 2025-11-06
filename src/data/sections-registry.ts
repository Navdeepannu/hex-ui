import { ComponentType } from "react";
import { Hero01 } from "@/components/sections/hero/hero-01/hero-01";
import { Hero02 } from "@/components/sections/hero/hero-02/hero-02";
import { Hero03 } from "@/components/sections/hero/hero-03";
import { Features01 } from "@/components/sections/features/features-01";
import { Pricing01 } from "@/components/sections/pricing/pricing-01";
import { CTA01 } from "@/components/sections/cta/cta-01";
import { Testimonials01 } from "@/components/sections/testimonials/testimonials-01";
import { FAQ01 } from "@/components/sections/faq/faq-01";

export type SectionCategory =
  | "hero"
  | "features"
  | "pricing"
  | "cta"
  | "testimonials"
  | "faq"
  | "content";

export interface CodeFile {
  id: string;
  name: string;
  language: string;
  code: string;
  path?: string; // Optional path for organizing in folders
}

export interface Section {
  id: string;
  name: string;
  category: SectionCategory;
  component: ComponentType;
  description: string;
  dependencies: string[];
  installCommand: string;
  tags: string[];
  featured?: boolean;
  files?: CodeFile[]; // Optional array of code files for this section
}

export const sections: Section[] = [
  {
    id: "hero-01",
    name: "Hero Section 01",
    category: "hero",
    component: Hero01,
    description:
      "A modern hero section with animated grid background, gradient orb, and engaging call-to-action buttons. Perfect for landing pages.",
    dependencies: ["framer-motion", "lucide-react"],
    installCommand: "npx shadcn@latest add https://hex-ui.com/r/hero-01",
    tags: ["gradient", "animated", "centered", "modern"],
    featured: true,
    // Files are auto-generated from the actual component source files
    // Run `npm run generate:section-code` to update
  },
  {
    id: "hero-02",
    name: "Hero Section 02",
    category: "hero",
    component: Hero02,
    description:
      "Split layout hero with hexagon pattern background and dashboard mockup. Ideal for SaaS products and showcasing features.",
    dependencies: ["framer-motion", "lucide-react"],
    installCommand: "npx shadcn@latest add https://hex-ui.com/r/hero-02",
    tags: ["split-layout", "mockup", "stats", "hexagon"],
    featured: true,
  },
  {
    id: "hero-03",
    name: "Hero Section 03",
    category: "hero",
    component: Hero03,
    description:
      "Dark-themed hero with animated gradients and bold typography. Great for making a strong first impression.",
    dependencies: ["framer-motion", "lucide-react"],
    installCommand: "npx shadcn@latest add https://hex-ui.com/r/hero-03",
    tags: ["dark", "gradient", "bold", "animated"],
    featured: true,
  },
  {
    id: "features-01",
    name: "Feature Grid",
    category: "features",
    component: Features01,
    description:
      "Clean feature grid with icons and hover effects. Perfect for showcasing your product's key features.",
    dependencies: ["framer-motion", "lucide-react"],
    installCommand: "npx shadcn@latest add https://hex-ui.com/r/features-01",
    tags: ["grid", "icons", "animated", "modern"],
    featured: true,
  },
  {
    id: "pricing-01",
    name: "Pricing Cards",
    category: "pricing",
    component: Pricing01,
    description:
      "Beautiful pricing cards with feature comparison and highlighted tier. Includes all the essentials for a pricing page.",
    dependencies: ["framer-motion", "lucide-react"],
    installCommand: "npx shadcn@latest add https://hex-ui.com/r/pricing-01",
    tags: ["cards", "comparison", "highlighted", "modern"],
    featured: true,
  },
  {
    id: "cta-01",
    name: "Call to Action",
    category: "cta",
    component: CTA01,
    description:
      "Eye-catching CTA section with gradient background and animated buttons. Perfect for conversion.",
    dependencies: ["framer-motion", "lucide-react"],
    installCommand: "npx shadcn@latest add https://hex-ui.com/r/cta-01",
    tags: ["gradient", "animated", "conversion", "dark"],
    featured: true,
  },
  {
    id: "testimonials-01",
    name: "Testimonial Grid",
    category: "testimonials",
    component: Testimonials01,
    description:
      "Customer testimonials with ratings and avatar images. Build trust with social proof.",
    dependencies: ["framer-motion", "lucide-react"],
    installCommand: "npx shadcn@latest add https://hex-ui.com/r/testimonials-01",
    tags: ["grid", "ratings", "social-proof", "modern"],
    featured: true,
  },
  {
    id: "faq-01",
    name: "FAQ Accordion",
    category: "faq",
    component: FAQ01,
    description:
      "Elegant FAQ section with smooth accordion animations. Answer common questions effectively.",
    dependencies: ["framer-motion", "lucide-react"],
    installCommand: "npx shadcn@latest add https://hex-ui.com/r/faq-01",
    tags: ["accordion", "animated", "collapsible", "modern"],
    featured: true,
  },
];

export const sectionCategories: { value: SectionCategory; label: string }[] = [
  { value: "hero", label: "Hero Sections" },
  { value: "features", label: "Features" },
  { value: "pricing", label: "Pricing" },
  { value: "cta", label: "Call to Action" },
  { value: "testimonials", label: "Testimonials" },
  { value: "faq", label: "FAQ" },
  { value: "content", label: "Content" },
];

// Helper function to get sections by category
export function getSectionsByCategory(category: SectionCategory): Section[] {
  return sections.filter((section) => section.category === category);
}

// Helper function to get section by id
export function getSectionById(id: string): Section | undefined {
  return sections.find((section) => section.id === id);
}

// Helper function to get featured sections
export function getFeaturedSections(): Section[] {
  return sections.filter((section) => section.featured);
}
