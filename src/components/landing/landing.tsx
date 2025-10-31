"use client";

import * as React from "react";
import { Hero } from "./Hero";
import { ComponentShowcase } from "./ComponentShowcase";
import { Features } from "./Features";
import { TemplateShowcase } from "./TemplateShowcase";
import { Footer } from "./Footer";
import { Navbar } from "./navbar";

export default function LandingPage() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <Navbar />
      <Hero />
      <ComponentShowcase />
      <Features />
      <TemplateShowcase />
      <Footer />
    </main>
  );
}
