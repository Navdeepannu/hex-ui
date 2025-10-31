"use client";

import * as React from "react";
import { motion } from "motion/react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-neutral-50 px-6 dark:bg-neutral-950">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md text-center"
      >
        <div className="mb-8 text-8xl font-bold text-neutral-200 dark:text-neutral-800">
          404
        </div>
        <h1 className="mb-4 text-3xl font-bold text-neutral-900 dark:text-white">
          Page not found
        </h1>
        <p className="mb-8 text-neutral-600 dark:text-neutral-400">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been
          moved or deleted.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="rounded-lg bg-neutral-900 px-6 py-3 font-semibold text-white transition-all hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100"
          >
            Go Home
          </Link>
          <Link
            href="/templates"
            className="rounded-lg border border-neutral-200 bg-white px-6 py-3 font-semibold text-neutral-900 transition-all hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950 dark:text-white dark:hover:bg-neutral-900"
          >
            Browse Components
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
