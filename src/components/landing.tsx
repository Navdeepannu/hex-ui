"use client";
import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { HexagonBackground } from "./showcase/hexagon-background";

const Landing = () => {
  const logos = [
    {
      component: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
          className="size-10"
        >
          <rect width="256" height="256" fill="none"></rect>
          <line
            x1="208"
            y1="128"
            x2="128"
            y2="208"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="32"
          ></line>
          <line
            x1="192"
            y1="40"
            x2="40"
            y2="192"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="32"
          ></line>
        </svg>
      ),
      alt: "ShadCN UI",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/images/ui/tailwind-icon.svg",
      alt: "Tailwind CSS",
      className: "size-10",
    },
    {
      component: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1103 386"
          width="1em"
          height="1em"
          className="h-8 w-8"
        >
          <path
            fill="currentColor"
            d="M416.473 0 198.54 385.66H0L170.17 84.522C196.549 37.842 262.377 0 317.203 0Zm486.875 96.415c0-53.249 44.444-96.415 99.27-96.415 54.826 0 99.27 43.166 99.27 96.415 0 53.248-44.444 96.415-99.27 96.415-54.826 0-99.27-43.167-99.27-96.415ZM453.699 0h198.54L434.306 385.66h-198.54Zm234.492 0h198.542L716.56 301.138c-26.378 46.68-92.207 84.522-147.032 84.522h-99.27Z"
          ></path>
        </svg>
      ),
      alt: "motion",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/images/ui/react-icon.svg",
      alt: "React",
      className: "size-10",
    },
    {
      component: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-10 stroke-1 text-black dark:text-white"
        >
          <path d="M9 15v-6l7.745 10.65a9 9 0 1 1 2.255 -1.993"></path>
          <path d="M15 12v-3"></path>
        </svg>
      ),
      alt: "Next.js",
      className: "size-10",
    },
  ];

  return (
    <div className="flex min-h-[80vh] w-full flex-col items-center justify-center">
      {/* Hexagon background - constrained to header area only */}
      <div className="absolute top-0 right-0 left-0 h-[65vh] overflow-hidden">
        <HexagonBackground
          interactive={true}
          className="opacity- absolute inset-0"
        />
        <div className="from-background pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b to-transparent" />
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-40"
          style={{
            background:
              "linear-gradient(to right, var(--background), color-mix(in oklch, var(--background) 70%, transparent) 40%, transparent)",
          }}
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(80% 50% at 50% 22%, var(--background) 0%, color-mix(in oklch, var(--background) 50%, transparent) 35%, transparent 60%)",
          }}
        />
        <div className="via-background/30 to-background pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent" />
        <div className="from-background via-background/80 pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t to-transparent" />
        <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl px-10">
        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.1,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
          className="tracking-tifont-medium parent mx-auto items-center bg-gradient-to-br from-zinc-700 via-zinc-800 to-zinc-900 bg-clip-text text-center text-4xl font-semibold [text-shadow:0px_2px_4px_rgba(0,0,0,0.15)] md:text-4xl lg:max-w-4xl lg:text-7xl lg:[text-shadow:0px_3px_6px_rgba(0,0,0,0.2)] dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-400 dark:[text-shadow:0px_2px_4px_rgba(255,255,255,0.2)] lg:dark:[text-shadow:0px_3px_6px_rgba(255,255,255,0.25)]"
        >
          Build beautiful interfaces faster and easier
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.2,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
          className="mx-auto mt-6 max-w-2xl text-center text-sm leading-normal tracking-tight text-neutral-600 [text-shadow:0px_1px_3px_rgba(0,0,0,0.08)] md:text-xl lg:[text-shadow:0px_2px_4px_rgba(0,0,0,0.1)] dark:text-neutral-400 dark:[text-shadow:0px_1px_3px_rgba(255,255,255,0.1)] lg:dark:[text-shadow:0px_2px_4px_rgba(255,255,255,0.12)]"
        >
          A comprehensive set of reusable, accessible React components made for
          rapid development, and smooth integration with Tailwind and ShadCN.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.3,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
          className="mt-12 flex items-center justify-center gap-4 sm:flex-row"
        >
          <motion.div
            initial={{ opacity: 0, x: -4 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.4,
              delay: 0.4,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
          >
            <button className="inline-flex items-center justify-center rounded-2xl border border-zinc-200 bg-white px-6 py-2 text-base text-zinc-700 transition-transform duration-150 hover:bg-white hover:shadow-[0_10px_20px_rgba(0,_0,_0,_.1),0_3px_6px_rgba(0,_0,_0,_.05)] focus-visible:ring-2 focus-visible:ring-zinc-400/40 focus-visible:outline-none dark:border-neutral-800 dark:bg-transparent dark:text-neutral-200 dark:hover:bg-white/5 dark:hover:opacity-100 dark:focus-visible:ring-neutral-700/50">
              <Link href="/docs/introduction">Documentation</Link>
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 4 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.4,
              delay: 0.5,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
          >
            <button className="inline-flex items-center justify-center rounded-2xl border border-transparent bg-gradient-to-b from-zinc-800 via-zinc-700 to-zinc-900 px-6 py-2 text-base text-white transition duration-150 hover:shadow-[0_10px_20px_rgba(0,_0,_0,_.1),0_3px_6px_rgba(0,_0,_0,_.05)] focus-visible:ring-2 focus-visible:ring-zinc-400/40 focus-visible:outline-none dark:border-neutral-800 dark:bg-transparent dark:from-neutral-50 dark:via-neutral-50 dark:to-neutral-500 dark:text-black dark:hover:bg-white/5 dark:focus-visible:ring-neutral-700/50">
              <Link href="/components/animated-text/fade-text">
                Browse Components
              </Link>
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Logo animation */}
      <div className="z-100 mt-10 flex flex-wrap items-center justify-center gap-8 md:gap-4 lg:gap-10">
        {logos.map((logo, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 4,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.4,
              delay: 0.5 + index * 0.05,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
            className={`group flex items-center justify-center rounded-2xl p-2`}
          >
            <div className="transition-transform duration-200">
              {logo.component ? (
                logo.component
              ) : (
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={100}
                  height={100}
                  className={logo.className}
                />
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Landing;
