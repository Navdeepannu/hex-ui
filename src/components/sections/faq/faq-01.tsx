"use client";

import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is Hex UI?",
    answer: "Hex UI is a collection of beautiful, production-ready UI components built with React, Next.js, Tailwind CSS, and Framer Motion. It's designed to help developers build modern interfaces quickly.",
  },
  {
    question: "Can I use Hex UI in commercial projects?",
    answer: "Yes! The MIT license allows you to use Hex UI in both personal and commercial projects. For additional features like priority support and custom components, check out our Pro and Enterprise plans.",
  },
  {
    question: "Do I need to credit Hex UI?",
    answer: "With the free license, attribution is appreciated. Pro and Enterprise licenses include the right to use components without attribution.",
  },
  {
    question: "How do I install components?",
    answer: "Simply browse our component library, copy the code you need, and paste it into your project. Make sure you have the required dependencies installed (React, Tailwind CSS, Framer Motion, etc.).",
  },
  {
    question: "Are the components accessible?",
    answer: "Yes! All components follow WCAG 2.1 guidelines and include proper ARIA labels, keyboard navigation, and screen reader support.",
  },
  {
    question: "Do you offer refunds?",
    answer: "Yes, we offer a 30-day money-back guarantee. If you're not satisfied with your purchase, contact us for a full refund, no questions asked.",
  },
  {
    question: "Will I receive updates?",
    answer: "All paid plans include lifetime updates. We regularly add new components and improve existing ones based on user feedback.",
  },
  {
    question: "Can I request custom components?",
    answer: "Pro license holders can request up to 2 custom components per year. Enterprise license holders get unlimited custom component requests.",
  },
];

export function FAQ01() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <section className="relative overflow-hidden border-b border-neutral-200 bg-neutral-50 py-20 dark:border-neutral-800 dark:bg-neutral-900/50 lg:py-32">
      <div className="relative mx-auto max-w-3xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-4 inline-block rounded-full border border-neutral-200 bg-white px-4 py-1.5 dark:border-neutral-800 dark:bg-neutral-950">
              <span className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                FAQ
              </span>
            </div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl dark:text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              Everything you need to know about Hex UI. Can&apos;t find what you&apos;re looking for?{" "}
              <a href="#" className="font-medium text-neutral-900 underline dark:text-white">
                Contact us
              </a>
              .
            </p>
          </motion.div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="overflow-hidden rounded-xl border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-900"
                aria-expanded={openIndex === index}
              >
                <span className="text-lg font-semibold text-neutral-900 dark:text-white">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="h-5 w-5 text-neutral-600 dark:text-neutral-400" />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="border-t border-neutral-200 px-6 py-5 text-neutral-700 dark:border-neutral-800 dark:text-neutral-300">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
