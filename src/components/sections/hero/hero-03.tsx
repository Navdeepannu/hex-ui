"use client"

import { motion } from "motion/react"
import { Check } from "lucide-react"

export function Hero03() {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden bg-neutral-950">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Noise texture */}
      <div className="absolute inset-0 opacity-20 mix-blend-overlay">
        <svg className="w-full h-full">
          <filter id="noise">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.8"
              numOctaves="4"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm font-medium text-white">
              Now in public beta
            </span>
          </div>

          {/* Main heading */}
          <div className="space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight"
            >
              <span className="block text-white">Ship products</span>
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                10x faster
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="max-w-3xl mx-auto text-xl text-neutral-300"
            >
              The most powerful component library for building modern web
              applications. Beautiful, accessible, and production-ready.
            </motion.p>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col items-center gap-6"
          >
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button className="group px-8 py-4 rounded-xl bg-white text-neutral-900 font-semibold hover:bg-neutral-100 transition-all shadow-lg hover:shadow-xl hover:scale-105">
                Start Building Now
              </button>
              <button className="px-8 py-4 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/5 transition-all backdrop-blur-sm">
                View Documentation
              </button>
            </div>

            {/* Features list */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-neutral-300">
              {[
                "No credit card required",
                "Free forever",
                "Open source",
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <div className="flex items-center justify-center w-5 h-5 rounded-full bg-green-500/20">
                    <Check className="w-3 h-3 text-green-400" />
                  </div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="pt-12"
          >
            <div className="text-sm text-neutral-400 mb-6">
              Trusted by teams at
            </div>
            <div className="flex flex-wrap items-center justify-center gap-12">
              {["Company A", "Company B", "Company C", "Company D"].map(
                (company) => (
                  <div
                    key={company}
                    className="text-xl font-bold text-white/40 hover:text-white/60 transition-colors"
                  >
                    {company}
                  </div>
                )
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
