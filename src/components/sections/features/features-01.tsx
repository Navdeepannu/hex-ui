"use client";

import * as React from "react";
import { motion } from "motion/react";
import { Zap, Shield, Sparkles, Rocket, Code, Layers } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized for performance with fast load times and smooth animations.",
  },
  {
    icon: Shield,
    title: "Secure by Default",
    description: "Built with security best practices and regular updates.",
  },
  {
    icon: Sparkles,
    title: "Beautiful Design",
    description: "Pixel-perfect components with attention to every detail.",
  },
  {
    icon: Rocket,
    title: "Easy to Use",
    description: "Simple API and comprehensive documentation to get started quickly.",
  },
  {
    icon: Code,
    title: "Developer Friendly",
    description: "TypeScript support, excellent DX, and extensive customization options.",
  },
  {
    icon: Layers,
    title: "Fully Responsive",
    description: "Works perfectly on all devices from mobile to desktop.",
  },
];

export function Features01() {
  return (
    <section className="relative overflow-hidden border-b border-neutral-200 bg-white py-20 dark:border-neutral-800 dark:bg-neutral-950 lg:py-32">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-4 inline-block rounded-full border border-neutral-200 bg-neutral-50 px-4 py-1.5 dark:border-neutral-800 dark:bg-neutral-900">
              <span className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                Features
              </span>
            </div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl dark:text-white">
              Everything you need to succeed
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              Powerful features designed to help you build better products faster.
            </p>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl border border-neutral-200 bg-white p-8 transition-all hover:border-neutral-300 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-neutral-700"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-100 text-neutral-900 transition-colors group-hover:bg-neutral-900 group-hover:text-white dark:bg-neutral-800 dark:text-neutral-100 dark:group-hover:bg-white dark:group-hover:text-neutral-900">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-neutral-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
