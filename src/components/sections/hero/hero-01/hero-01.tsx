"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { StripedBackground } from "./striped-background";
import { Header } from "./header";
import Image from "next/image";
import { AnimatedText } from "@/components/showcase/text-effect";

const brandLogos = [
  { src: "/brand_logos/openai_logo.svg", alt: "OpenAI logo", invert: "invert dark:invert-0" },
  { src: "/brand_logos/figma_logo.svg", alt: "Figma logo", invert: "dark:invert" },
  { src: "/brand_logos/google_Logo.svg", alt: "Google logo", invert: "invert dark:invert-0" },
  { src: "/brand_logos/notion_logo.svg", alt: "Notion logo", invert: "invert dark:invert-0" },
  { src: "/brand_logos/hubspot_logo.svg", alt: "Stripe logo", invert: "invert dark:invert-0" },
  { src: "/brand_logos/shopify_logo.svg", alt: "Shopify logo", invert: "invert dark:invert-0" },
];

export function Hero01() {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <StripedBackground position="both" />
        <div className="relative z-10 flex flex-col items-center justify-center gap-12 px-4 pt-40 pb-32 text-center md:gap-16 md:pt-44">
          <div className="space-y-8 md:space-y-10">
            <AnimatedText
              as="h1"
              preset="stagger-words-blur"
              delay={0}
              speed={0.4}
              staggerDelay={0.065}
              className="mx-auto max-w-4xl text-5xl font-medium tracking-tight text-balance text-neutral-900 md:text-7xl xl:text-[5.25rem] dark:text-neutral-100"
            >
              Strategy and growth for modern teams
            </AnimatedText>
            <AnimatedText
              as="p"
              preset="stagger-words-blur"
              delay={0.4}
              staggerDelay={0.035}
              speed={0.45}
              className="mx-auto max-w-xl text-sm font-normal text-balance text-neutral-600 md:max-w-2xl md:text-lg dark:text-neutral-400"
            >
              HexUI partners with startups to streamline operations, elevate team performance, and
              build a foundation for lasting success.
            </AnimatedText>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
            className="flex items-center justify-center gap-4 pt-2"
          >
            <Button
              asChild
              size="lg"
              className="group relative gap-4 overflow-hidden rounded-full px-2 pl-3 text-sm font-medium md:text-base"
            >
              <Link href="#">
                <span className="inline-flex items-center gap-4">
                  <span className="text-nowrap whitespace-nowrap">Get started</span>
                  <span className="relative inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-neutral-900 shadow dark:bg-neutral-950 dark:text-neutral-50">
                    <ArrowRight
                      size={16}
                      className="absolute inset-0 m-auto opacity-100 transition-transform duration-500 group-hover:translate-x-6 group-hover:opacity-0"
                    />
                    <ArrowRight
                      size={16}
                      className="absolute inset-0 m-auto -translate-x-6 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100"
                    />
                  </span>
                </span>
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full border border-neutral-300 bg-transparent px-5 text-sm font-medium text-neutral-700 hover:bg-neutral-50 md:text-base dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-900"
            >
              <Link href="#">
                <span className="text-nowrap">Contact us</span>
              </Link>
            </Button>
          </motion.div>

          {/* App Preview Section */}
          <div className="z-10 w-full max-w-6xl mask-b-from-70% pt-8 md:pt-12">
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.9, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
              className="border-accent relative overflow-visible rounded-2xl border bg-neutral-50 p-2 shadow-[inset_0_1px_2px_#ffffff50] md:rounded-3xl md:p-3 dark:bg-neutral-950"
            >
              <div className="relative aspect-16/10 w-full overflow-hidden rounded-xl md:rounded-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1702479744181-2d6b58941583?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2670"
                  alt="App preview"
                  fill
                  className="object-cover object-top shadow-2xl"
                  priority
                />
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 2.0 }}
            className="space-y-1"
          >
            <AnimatedText
              as="h1"
              preset="fade-in-blur"
              delay={2.1}
              speed={0.5}
              className="text-lg font-medium text-neutral-900 dark:text-neutral-100"
            >
              Trusted by teams shaping the future
            </AnimatedText>
            <AnimatedText
              as="p"
              preset="fade-in-blur"
              delay={2.3}
              speed={0.5}
              className="text-sm font-normal text-neutral-500 md:text-base dark:text-neutral-500"
            >
              Used by those who set the standard
            </AnimatedText>

            <div className="mt-10 grid grid-cols-3 gap-x-12 gap-y-10 md:gap-x-30 md:gap-y-12">
              {brandLogos.map((logo, index) => (
                <motion.div
                  key={logo.alt}
                  initial={{ opacity: 0, filter: "blur(5px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  transition={{ duration: 0.5, delay: 2.5 + 0.08 * index, ease: "easeOut" }}
                >
                  <Link
                    href="#"
                    target="_blank"
                    className="flex items-center justify-center select-none"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width="100"
                      height="100"
                      className={`h-auto w-12 cursor-pointer opacity-50 duration-200 ease-in-out hover:opacity-90 md:w-20 ${logo.invert}`}
                    />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
    </>
  );
}
