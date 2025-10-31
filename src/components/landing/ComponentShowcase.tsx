"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import {
  IconClick,
  IconCursorText,
  IconLoader,
  IconLayoutGrid,
} from "@tabler/icons-react";

interface ComponentCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  preview: React.ReactNode;
  delay?: number;
}

function ComponentCard({
  title,
  description,
  icon,
  preview,
  delay = 0,
}: ComponentCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.5, delay }}
      className="group relative rounded-2xl border border-border bg-card p-6 hover:border-foreground/20 transition-all duration-300"
    >
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={false}
      />

      <div className="relative">
        <div className="flex items-start justify-between mb-4">
          <motion.div
            className="p-3 rounded-xl bg-muted/50 text-foreground"
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            {icon}
          </motion.div>
        </div>

        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-6">{description}</p>

        <motion.div
          className="rounded-xl bg-muted/30 p-6 border border-border/50"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {preview}
        </motion.div>
      </div>
    </motion.div>
  );
}

export function ComponentShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const components = [
    {
      title: "Buttons",
      description: "Interactive buttons with smooth animations and variants",
      icon: <IconClick className="h-5 w-5" />,
      preview: (
        <div className="flex flex-wrap gap-3">
          <Button size="sm">Primary</Button>
          <Button size="sm" variant="outline">
            Outline
          </Button>
          <Button size="sm" variant="ghost">
            Ghost
          </Button>
        </div>
      ),
    },
    {
      title: "Inputs",
      description: "Form inputs with elegant focus states and validation",
      icon: <IconCursorText className="h-5 w-5" />,
      preview: (
        <div className="space-y-3">
          <Input placeholder="Email address" className="bg-background" />
          <Input
            placeholder="Password"
            type="password"
            className="bg-background"
          />
        </div>
      ),
    },
    {
      title: "Skeletons",
      description: "Loading states that match your design system",
      icon: <IconLoader className="h-5 w-5" />,
      preview: (
        <div className="space-y-3">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
        </div>
      ),
    },
    {
      title: "Cards",
      description: "Flexible card layouts for any content",
      icon: <IconLayoutGrid className="h-5 w-5" />,
      preview: (
        <div className="space-y-2">
          <div className="h-20 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 border border-border/50" />
          <div className="space-y-1">
            <Skeleton className="h-3 w-2/3" />
            <Skeleton className="h-2 w-1/2" />
          </div>
        </div>
      ),
    },
  ];

  return (
    <section ref={ref} className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/20 to-transparent -z-10" />

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
            Components
          </motion.span>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Everything you need
            <br />
            <span className="bg-gradient-to-b from-foreground/80 to-foreground/40 bg-clip-text text-transparent">
              to build faster
            </span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            50+ meticulously crafted components. Each one designed for
            production with accessibility and performance in mind.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {components.map((component, index) => (
            <ComponentCard
              key={component.title}
              {...component}
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
          <Button size="lg" variant="outline" className="rounded-xl">
            View All Components
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
