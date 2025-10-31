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

function TemplateCard({
  title,
  description,
  category,
  icon,
  image,
  delay = 0,
}: TemplateCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay }}
      className="group relative rounded-2xl border border-border bg-card overflow-hidden hover:border-foreground/20 transition-all duration-300"
    >
      <motion.div
        className="relative aspect-[16/10] overflow-hidden bg-muted"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          {image}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </motion.div>

      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <div className="p-2 rounded-lg bg-muted text-muted-foreground">
            {icon}
          </div>
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
            {category}
          </span>
        </div>

        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>

        <motion.button
          whileHover={{ x: 4 }}
          className="flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-foreground"
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
      description:
        "Complete admin dashboard with charts, tables, and data visualization",
      category: "Dashboard",
      icon: <IconDashboard className="h-4 w-4" />,
      image: (
        <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 p-8">
          <div className="bg-background/80 backdrop-blur-sm rounded-lg p-4 space-y-3">
            <div className="flex gap-2">
              <div className="h-2 w-16 bg-primary/50 rounded" />
              <div className="h-2 w-12 bg-muted rounded" />
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="h-12 bg-muted rounded" />
              <div className="h-12 bg-muted rounded" />
              <div className="h-12 bg-muted rounded" />
            </div>
            <div className="h-20 bg-gradient-to-br from-primary/30 to-primary/10 rounded" />
          </div>
        </div>
      ),
    },
    {
      title: "E-commerce Store",
      description:
        "Full-featured online store with cart, checkout, and product pages",
      category: "E-commerce",
      icon: <IconShoppingCart className="h-4 w-4" />,
      image: (
        <div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-8">
          <div className="bg-background/80 backdrop-blur-sm rounded-lg p-4 space-y-3">
            <div className="grid grid-cols-2 gap-2">
              <div className="aspect-square bg-gradient-to-br from-primary/40 to-primary/20 rounded" />
              <div className="aspect-square bg-gradient-to-br from-primary/30 to-primary/10 rounded" />
            </div>
            <div className="space-y-1">
              <div className="h-2 w-full bg-muted rounded" />
              <div className="h-2 w-3/4 bg-muted rounded" />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Profile & Settings",
      description:
        "User profile pages with settings, preferences, and account management",
      category: "User",
      icon: <IconUser className="h-4 w-4" />,
      image: (
        <div className="w-full h-full bg-gradient-to-br from-green-500/20 to-emerald-500/20 p-8">
          <div className="bg-background/80 backdrop-blur-sm rounded-lg p-4 space-y-3">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary/50 to-primary/30" />
              <div className="space-y-1 flex-1">
                <div className="h-2 w-24 bg-muted rounded" />
                <div className="h-2 w-16 bg-muted/50 rounded" />
              </div>
            </div>
            <div className="space-y-2">
              <div className="h-8 bg-muted rounded" />
              <div className="h-8 bg-muted rounded" />
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section ref={ref} className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-transparent to-transparent -z-10" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
          >
            Templates
          </motion.span>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Complete page templates
            <br />
            <span className="bg-gradient-to-b from-foreground/80 to-foreground/40 bg-clip-text text-transparent">
              ready to deploy
            </span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Full-page templates for common use cases. Copy the entire page or
            pick individual sections.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {templates.map((template, index) => (
            <TemplateCard
              key={template.title}
              {...template}
              delay={index * 0.1}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-border bg-card font-medium hover:border-foreground/20 transition-colors"
          >
            <IconTemplate className="h-5 w-5" />
            Explore All Templates
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
