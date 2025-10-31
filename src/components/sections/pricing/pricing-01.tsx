"use client";

import * as React from "react";
import { motion } from "motion/react";
import { Check, X } from "lucide-react";

const tiers = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for getting started",
    features: [
      { name: "All components with attribution", included: true },
      { name: "Regular updates", included: true },
      { name: "Community support", included: true },
      { name: "Personal projects", included: true },
      { name: "Priority support", included: false },
      { name: "Custom components", included: false },
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$199",
    description: "For professional developers",
    features: [
      { name: "All components without attribution", included: true },
      { name: "Lifetime updates", included: true },
      { name: "Priority email support", included: true },
      { name: "Commercial use", included: true },
      { name: "Early access to new components", included: true },
      { name: "2 custom component requests/year", included: true },
    ],
    cta: "Buy Pro",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "$999",
    description: "For teams and agencies",
    features: [
      { name: "Everything in Pro", included: true },
      { name: "Dedicated support channel", included: true },
      { name: "Unlimited custom components", included: true },
      { name: "Private Slack/Discord", included: true },
      { name: "White-label options", included: true },
      { name: "Team training session", included: true },
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

export function Pricing01() {
  return (
    <section className="relative overflow-hidden border-b border-neutral-200 bg-neutral-50 py-20 dark:border-neutral-800 dark:bg-neutral-900/50 lg:py-32">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-4 inline-block rounded-full border border-neutral-200 bg-white px-4 py-1.5 dark:border-neutral-800 dark:bg-neutral-950">
              <span className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                Pricing
              </span>
            </div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl dark:text-white">
              Choose your plan
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              Start free and upgrade as you grow. All plans include lifetime access.
            </p>
          </motion.div>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-8 lg:grid-cols-3">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col rounded-2xl border bg-white p-8 shadow-sm dark:bg-neutral-950 ${
                tier.highlighted
                  ? "border-neutral-900 ring-2 ring-neutral-900 dark:border-white dark:ring-white lg:scale-105"
                  : "border-neutral-200 dark:border-neutral-800"
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-neutral-900 px-4 py-1 text-sm font-medium text-white dark:bg-white dark:text-neutral-900">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">
                  {tier.name}
                </h3>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                  {tier.description}
                </p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-5xl font-bold tracking-tight text-neutral-900 dark:text-white">
                    {tier.price}
                  </span>
                  {tier.price !== "$0" && (
                    <span className="ml-2 text-neutral-600 dark:text-neutral-400">
                      one-time
                    </span>
                  )}
                </div>
              </div>

              <ul className="mb-8 flex-1 space-y-4">
                {tier.features.map((feature) => (
                  <li key={feature.name} className="flex items-start gap-3">
                    {feature.included ? (
                      <Check className="h-5 w-5 shrink-0 text-green-600 dark:text-green-500" />
                    ) : (
                      <X className="h-5 w-5 shrink-0 text-neutral-400 dark:text-neutral-600" />
                    )}
                    <span
                      className={
                        feature.included
                          ? "text-neutral-900 dark:text-white"
                          : "text-neutral-500 dark:text-neutral-500"
                      }
                    >
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full rounded-lg px-6 py-3 text-center font-semibold transition-all ${
                  tier.highlighted
                    ? "bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100"
                    : "border border-neutral-200 bg-white text-neutral-900 hover:border-neutral-300 hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950 dark:text-white dark:hover:border-neutral-700 dark:hover:bg-neutral-900"
                }`}
              >
                {tier.cta}
              </button>
            </motion.div>
          ))}
        </div>

        {/* FAQ Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center text-sm text-neutral-600 dark:text-neutral-400"
        >
          All prices are in USD. One-time payment, lifetime access. No subscriptions.
        </motion.p>
      </div>
    </section>
  );
}
