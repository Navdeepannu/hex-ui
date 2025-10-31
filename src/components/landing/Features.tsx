"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import {
  IconCopy,
  IconPalette,
  IconBolt,
  IconAccessible,
  IconDeviceMobile,
  IconBrandFramer,
} from "@tabler/icons-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
  delay?: number;
  className?: string;
}

function FeatureCard({
  title,
  description,
  icon,
  gradient,
  delay = 0,
  className = "",
}: FeatureCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay }}
      className={`group relative rounded-2xl border border-border bg-card overflow-hidden ${className}`}
    >
      <div className={`absolute inset-0 opacity-5 ${gradient}`} />

      <motion.div
        className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${gradient}`}
        initial={false}
      />

      <div className="relative p-8 h-full flex flex-col">
        <motion.div
          className="mb-6 p-4 rounded-2xl bg-background/80 backdrop-blur-sm w-fit"
          whileHover={{ scale: 1.05, rotate: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {icon}
        </motion.div>

        <h3 className="text-2xl font-semibold mb-3">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}

export function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      title: "Copy & Paste",
      description:
        "No npm installs. No build steps. Just copy the code and paste it into your project. Own your components.",
      icon: <IconCopy className="h-7 w-7" />,
      gradient: "bg-gradient-to-br from-blue-500 to-cyan-500",
    },
    {
      title: "Customizable",
      description:
        "Built with Tailwind CSS and CSS variables. Change colors, spacing, and styles to match your brand perfectly.",
      icon: <IconPalette className="h-7 w-7" />,
      gradient: "bg-gradient-to-br from-purple-500 to-pink-500",
    },
    {
      title: "Performant",
      description:
        "Optimized for speed and bundle size. Tree-shakeable, zero dependencies where possible, and production-ready.",
      icon: <IconBolt className="h-7 w-7" />,
      gradient: "bg-gradient-to-br from-yellow-500 to-orange-500",
    },
    {
      title: "Accessible",
      description:
        "WCAG compliant with proper ARIA labels, keyboard navigation, and screen reader support out of the box.",
      icon: <IconAccessible className="h-7 w-7" />,
      gradient: "bg-gradient-to-br from-green-500 to-emerald-500",
    },
    {
      title: "Responsive",
      description:
        "Mobile-first design that looks great on all devices. From phones to ultrawide monitors.",
      icon: <IconDeviceMobile className="h-7 w-7" />,
      gradient: "bg-gradient-to-br from-red-500 to-rose-500",
    },
    {
      title: "Animated",
      description:
        "Smooth, purposeful animations using Framer Motion. Delightful interactions without sacrificing performance.",
      icon: <IconBrandFramer className="h-7 w-7" />,
      gradient: "bg-gradient-to-br from-indigo-500 to-violet-500",
    },
  ];

  return (
    <section ref={ref} className="py-32 px-6 relative">
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
            Features
          </motion.span>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Built for
            <br />
            <span className="bg-gradient-to-b from-foreground/80 to-foreground/40 bg-clip-text text-transparent">
              modern development
            </span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every component is crafted with attention to detail. From
            accessibility to animations, we&apos;ve thought of everything.
          </p>
        </motion.div>

        {/* Bento grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              {...feature}
              delay={index * 0.1}
              className={
                index === 0
                  ? "md:col-span-2 lg:col-span-1"
                  : index === 3
                    ? "lg:col-span-2"
                    : ""
              }
            />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 relative rounded-3xl border border-border bg-gradient-to-br from-card via-card to-muted/30 p-12 text-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),transparent)]" />

          <div className="relative">
            <h3 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to start building?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of developers who are shipping faster with HexUI.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-xl bg-primary text-primary-foreground font-medium shadow-lg"
              >
                Get Started
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-xl border border-border bg-background font-medium"
              >
                View Documentation
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
