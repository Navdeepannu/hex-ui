"use client"

import { motion } from "motion/react"
import { ArrowRight } from "lucide-react"

export function Hero01() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-950 dark:to-neutral-900">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />

      {/* Gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="inline-block"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-200 bg-white/50 backdrop-blur-sm dark:border-neutral-800 dark:bg-neutral-900/50">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
              </span>
              <span className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                Introducing Hex UI v2.0
              </span>
            </div>
          </motion.div>

          {/* Main heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-neutral-900 dark:text-white">
            Modern Solutions for
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Customer Engagement
            </span>
          </h1>

          {/* Description */}
          <p className="max-w-2xl mx-auto text-lg text-neutral-600 dark:text-neutral-400">
            Highly customizable components for building modern websites and
            applications that look and feel the way you meant it.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="group inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-neutral-900 text-white font-semibold hover:bg-neutral-800 transition-all dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100">
              Start Building
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="inline-flex items-center gap-2 px-8 py-3 rounded-lg border border-neutral-200 bg-white text-neutral-900 font-semibold hover:border-neutral-300 hover:shadow-md transition-all dark:border-neutral-800 dark:bg-neutral-900 dark:text-white dark:hover:border-neutral-700">
              Request a demo
            </button>
          </div>

          {/* Stats or social proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-8 pt-8 text-sm text-neutral-600 dark:text-neutral-400"
          >
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full border-2 border-white dark:border-neutral-950 bg-gradient-to-br from-blue-500 to-purple-500" />
                <div className="w-8 h-8 rounded-full border-2 border-white dark:border-neutral-950 bg-gradient-to-br from-purple-500 to-pink-500" />
                <div className="w-8 h-8 rounded-full border-2 border-white dark:border-neutral-950 bg-gradient-to-br from-pink-500 to-orange-500" />
              </div>
              <span className="font-medium">Trusted by 10k+ developers</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="font-medium">⭐ 4.9/5 rating</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
