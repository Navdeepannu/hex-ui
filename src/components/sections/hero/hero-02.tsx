"use client"

import { motion } from "motion/react"
import { ArrowRight, Play } from "lucide-react"

export function Hero02() {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden bg-white dark:bg-neutral-950">
      {/* Hexagon pattern background */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="hexagons"
              width="50"
              height="43.4"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M25 0l12.5 7.2v14.4L25 28.9 12.5 21.6V7.2z"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexagons)" />
        </svg>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-200 bg-blue-50 dark:border-blue-900 dark:bg-blue-950">
              <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                NEW
              </span>
              <span className="text-xs text-blue-700 dark:text-blue-300">
                AI-Powered Components
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-neutral-900 dark:text-white">
              Build faster with{" "}
              <span className="relative">
                <span className="relative z-10">Hex UI</span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-blue-200 dark:bg-blue-900 -z-0" />
              </span>
            </h1>

            <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-lg">
              Production-ready components built with React, TypeScript, and
              Tailwind CSS. Copy, paste, and customize to your needs.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-neutral-900 text-white font-semibold hover:bg-neutral-800 transition-all shadow-lg hover:shadow-xl dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100">
                Get Started Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group inline-flex items-center gap-3 px-6 py-4 text-neutral-900 dark:text-white font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-neutral-100 dark:bg-neutral-900 group-hover:bg-blue-100 dark:group-hover:bg-blue-950 transition-colors">
                  <Play className="w-5 h-5 ml-0.5" />
                </div>
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-neutral-200 dark:border-neutral-800">
              <div>
                <div className="text-3xl font-bold text-neutral-900 dark:text-white">
                  50+
                </div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400">
                  Components
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-neutral-900 dark:text-white">
                  10k+
                </div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400">
                  Developers
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-neutral-900 dark:text-white">
                  99%
                </div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400">
                  Satisfaction
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right content - Dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 shadow-2xl">
              {/* Mockup content */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="text-xs text-neutral-500">Dashboard</div>
                </div>
                <div className="space-y-3">
                  {[60, 80, 40, 70].map((width, i) => (
                    <motion.div
                      key={i}
                      initial={{ width: 0 }}
                      animate={{ width: `${width}%` }}
                      transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                      className="h-12 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500"
                    />
                  ))}
                </div>
              </div>

              {/* Floating card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute -right-6 -bottom-6 w-48 p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-xl"
              >
                <div className="space-y-2">
                  <div className="text-xs text-neutral-500 dark:text-neutral-400">
                    Total Users
                  </div>
                  <div className="text-2xl font-bold text-neutral-900 dark:text-white">
                    24,891
                  </div>
                  <div className="flex items-center gap-1 text-xs text-green-600 dark:text-green-400">
                    <span>↑ 12.5%</span>
                    <span className="text-neutral-500">vs last month</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Gradient glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
