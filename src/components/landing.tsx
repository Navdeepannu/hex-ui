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
          width="800px"
          height="800px"
          viewBox="0 0 256 256"
          version="1.1"
          preserveAspectRatio="xMidYMid"
          className="size-10"
        >
          <g>
            <path
              d="M119.616813,0.0688905149 C119.066276,0.118932037 117.314565,0.294077364 115.738025,0.419181169 C79.3775171,3.69690087 45.3192571,23.3131775 23.7481916,53.4631946 C11.7364614,70.2271045 4.05395894,89.2428829 1.15112414,109.384595 C0.12512219,116.415429 0,118.492153 0,128.025062 C0,137.557972 0.12512219,139.634696 1.15112414,146.665529 C8.10791789,194.730411 42.3163245,235.11392 88.7116325,250.076335 C97.0197458,252.753556 105.778299,254.580072 115.738025,255.680985 C119.616813,256.106338 136.383187,256.106338 140.261975,255.680985 C157.453763,253.779407 172.017986,249.525878 186.382014,242.194795 C188.584164,241.068861 189.00958,240.768612 188.709286,240.518404 C188.509091,240.36828 179.124927,227.782837 167.86393,212.570214 L147.393939,184.922273 L121.743891,146.965779 C107.630108,126.098464 96.0187683,109.034305 95.9186706,109.034305 C95.8185728,109.009284 95.7184751,125.873277 95.6684262,146.465363 C95.5933529,182.52028 95.5683284,183.971484 95.1178886,184.82219 C94.4672532,186.048207 93.9667644,186.548623 92.915738,187.099079 C92.114956,187.499411 91.4142717,187.574474 87.6355816,187.574474 L83.3063539,187.574474 L82.1552297,186.848872 C81.4044966,186.373477 80.8539589,185.747958 80.4785924,185.022356 L79.9530792,183.896422 L80.0031281,133.729796 L80.0782014,83.5381493 L80.8539589,82.5623397 C81.25435,82.0369037 82.1051808,81.3613431 82.7057674,81.0360732 C83.7317693,80.535658 84.1321603,80.4856165 88.4613881,80.4856165 C93.5663734,80.4856165 94.4172043,80.6857826 95.7434995,82.1369867 C96.1188661,82.5373189 110.007429,103.454675 126.623656,128.650581 C143.239883,153.846488 165.962072,188.250034 177.122972,205.139048 L197.392766,235.839522 L198.418768,235.163961 C207.502639,229.259062 217.112023,220.852086 224.719453,212.09482 C240.910264,193.504394 251.345455,170.835585 254.848876,146.665529 C255.874878,139.634696 256,137.557972 256,128.025062 C256,118.492153 255.874878,116.415429 254.848876,109.384595 C247.892082,61.3197135 213.683675,20.9362052 167.288368,5.97379012 C159.105376,3.32158945 150.396872,1.49507389 140.637341,0.394160408 C138.234995,0.143952798 121.693842,-0.131275573 119.616813,0.0688905149 L119.616813,0.0688905149 Z M172.017986,77.4831252 C173.219159,78.0836234 174.195112,79.2345784 174.545455,80.435575 C174.74565,81.0861148 174.795699,94.9976579 174.74565,126.348671 L174.670577,171.336 L166.73783,159.17591 L158.780059,147.01582 L158.780059,114.313685 C158.780059,93.1711423 158.880156,81.2862808 159.030303,80.7108033 C159.430694,79.3096407 160.306549,78.2087272 161.507722,77.5581875 C162.533724,77.0327515 162.909091,76.98271 166.837928,76.98271 C170.541544,76.98271 171.19218,77.0327515 172.017986,77.4831252 Z"
              fill="#000000"
            ></path>
          </g>
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
        <HexagonBackground interactive={true} className="absolute inset-0" />
        {/* Enhanced faded mask with subtle blue tint */}
        <div className="via-background/30 to-background pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent" />
        <div className="from-background via-background/80 pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t to-transparent" />
        <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r to-transparent" />
        <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl">
        {/* Main heading animation */}
        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.1,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
          className="mx-auto items-center bg-gradient-to-b from-neutral-700 via-neutral-800 to-neutral-900 bg-clip-text text-center text-4xl font-semibold tracking-tight text-transparent [text-shadow:0px_2px_4px_rgba(0,0,0,0.15)] md:text-4xl lg:max-w-4xl lg:text-7xl lg:[text-shadow:0px_3px_6px_rgba(0,0,0,0.2)] dark:from-white dark:via-neutral-50 dark:to-neutral-200 dark:[text-shadow:0px_2px_4px_rgba(255,255,255,0.2)] lg:dark:[text-shadow:0px_3px_6px_rgba(255,255,255,0.25)]"
        >
          Build websites{" "}
          <span className="bg-gradient-to-r from-[#cde0fe] via-[#b8d4ff] to-[#a3c7ff] bg-clip-text text-transparent text-shadow-2xs">
            fast
          </span>{" "}
          with beautiful UI components
        </motion.h1>

        {/* Description animation */}
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.2,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
          className="mx-auto mt-6 max-w-3xl text-center text-xl leading-normal tracking-tight text-neutral-600 [text-shadow:0px_1px_3px_rgba(0,0,0,0.08)] lg:[text-shadow:0px_2px_4px_rgba(0,0,0,0.1)] dark:text-neutral-300 dark:[text-shadow:0px_1px_3px_rgba(255,255,255,0.1)] lg:dark:[text-shadow:0px_2px_4px_rgba(255,255,255,0.12)]"
        >
          Discover a collection of beautifully crafted React components with
          smooth animations. Create stunning UI with our carefully crafted
          components and templates.
        </motion.p>

        {/* Buttons animation */}
        <motion.div
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.3,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
          className="mt-12 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4"
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
            <button className="inline-flex items-center justify-center rounded-2xl border border-zinc-200 bg-white px-6 py-2 text-base text-zinc-700 shadow-[0_10px_20px_rgba(0,_0,_0,_.1),0_3px_6px_rgba(0,_0,_0,_.05)] transition-transform duration-150 hover:bg-white hover:opacity-80 hover:shadow-[rgba(0,_1,_0,_.2)_0_2px_8px] active:outline-none dark:text-black">
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
            <button className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-b from-[#464d55] to-[#25292e] px-6 py-2 text-base text-white shadow-[0_10px_20px_rgba(0,_0,_0,_.1),0_3px_6px_rgba(0,_0,_0,_.05)] transition duration-150 hover:opacity-90 hover:shadow-[rgba(0,_1,_0,_.2)_0_2px_8px] active:outline-none">
              <Link href="/components/fade-text">Browse Components</Link>
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
