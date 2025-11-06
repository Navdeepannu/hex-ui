"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import {
  IconArrowRight,
  IconTemplate,
  IconShoppingCart,
  IconUser,
  IconDashboard,
} from "@tabler/icons-react";

interface TemplateCardProps {
  title: string;
  description: string;
  category: string;
  icon: React.ReactNode;
  image: React.ReactNode;
  delay?: number;
}

function TemplateCard({ title, description, category, icon, image, delay = 0 }: TemplateCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay }}
      className="group border-border bg-card hover:border-foreground/20 relative overflow-hidden rounded-2xl border transition-all duration-300"
    >
      <motion.div
        className="bg-muted relative aspect-16/10 overflow-hidden"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <div className="absolute inset-0 flex items-center justify-center">{image}</div>
        <div className="from-background absolute inset-0 bg-linear-to-t via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </motion.div>

      <div className="p-6">
        <div className="mb-3 flex items-center gap-2">
          <div className="bg-muted text-muted-foreground rounded-lg p-2">{icon}</div>
          <span className="text-muted-foreground text-xs font-medium tracking-wide uppercase">
            {category}
          </span>
        </div>

        <h3 className="group-hover:text-primary mb-2 text-xl font-semibold transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground mb-4 text-sm">{description}</p>

        <motion.button
          whileHover={{ x: 4 }}
          className="text-foreground/80 hover:text-foreground flex items-center gap-2 text-sm font-medium"
        >
          Preview Template
          <IconArrowRight className="h-4 w-4" />
        </motion.button>
      </div>
    </motion.div>
  );
}

export function TemplateShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const templates = [
    {
      title: "Dashboard Pro",
      description: "Complete admin dashboard with charts, tables, and data visualization",
      category: "Dashboard",
      icon: <IconDashboard className="h-4 w-4" />,
      image: (
        <div className="bg-linerar-to-br h-full w-full from-blue-500/20 to-cyan-500/20 p-8">
          <div className="bg-background/80 space-y-3 rounded-lg p-4 backdrop-blur-sm">
            <div className="flex gap-2">
              <div className="bg-primary/50 h-2 w-16 rounded" />
              <div className="bg-muted h-2 w-12 rounded" />
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-muted h-12 rounded" />
              <div className="bg-muted h-12 rounded" />
              <div className="bg-muted h-12 rounded" />
            </div>
            <div className="from-primary/30 to-primary/10 h-20 rounded bg-linear-to-br" />
          </div>
        </div>
      ),
    },
    {
      title: "E-commerce Store",
      description: "Full-featured online store with cart, checkout, and product pages",
      category: "E-commerce",
      icon: <IconShoppingCart className="h-4 w-4" />,
      image: (
        <div className="h-full w-full bg-linear-to-br from-purple-500/20 to-pink-500/20 p-8">
          <div className="bg-background/80 space-y-3 rounded-lg p-4 backdrop-blur-sm">
            <div className="grid grid-cols-2 gap-2">
              <div className="from-primary/40 to-primary/20 aspect-square rounded bg-linear-to-br" />
              <div className="from-primary/30 to-primary/10 aspect-square rounded bg-linear-to-br" />
            </div>
            <div className="space-y-1">
              <div className="bg-muted h-2 w-full rounded" />
              <div className="bg-muted h-2 w-3/4 rounded" />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Profile & Settings",
      description: "User profile pages with settings, preferences, and account management",
      category: "User",
      icon: <IconUser className="h-4 w-4" />,
      image: (
        <div className="h-full w-full bg-gradient-to-br from-green-500/20 to-emerald-500/20 p-8">
          <div className="bg-background/80 space-y-3 rounded-lg p-4 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="from-primary/50 to-primary/30 h-12 w-12 rounded-full bg-gradient-to-br" />
              <div className="flex-1 space-y-1">
                <div className="bg-muted h-2 w-24 rounded" />
                <div className="bg-muted/50 h-2 w-16 rounded" />
              </div>
            </div>
            <div className="space-y-2">
              <div className="bg-muted h-8 rounded" />
              <div className="bg-muted h-8 rounded" />
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section ref={ref} className="relative overflow-hidden px-6 py-32">
      <div className="from-muted/20 absolute inset-0 -z-10 bg-gradient-to-b via-transparent to-transparent" />

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            className="bg-primary/10 text-primary mb-4 inline-block rounded-full px-4 py-1.5 text-sm font-medium"
          >
            Templates
          </motion.span>

          <h2 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Complete page templates
            <br />
            <span className="from-foreground/80 to-foreground/40 bg-gradient-to-b bg-clip-text text-transparent">
              ready to deploy
            </span>
          </h2>

          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Full-page templates for common use cases. Copy the entire page or pick individual
            sections.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {templates.map((template, index) => (
            <TemplateCard key={template.title} {...template} delay={index * 0.1} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-border bg-card hover:border-foreground/20 inline-flex items-center gap-2 rounded-xl border px-8 py-4 font-medium transition-colors"
          >
            <IconTemplate className="h-5 w-5" />
            Explore All Templates
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
