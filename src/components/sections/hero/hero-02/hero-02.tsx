"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useSpring, useTransform } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import BrandMarquee from "./brand-marquee";
import { Header } from "./header-02";
import { AnimatedText } from "@/components/showcase/text-effect";

// Animated counter component
function AnimatedCounter({ value, suffix = "", delay = 0 }: { value: number; suffix?: string; delay?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const springValue = useSpring(0, { duration: 2000, bounce: 0 });
  const display = useTransform(springValue, (latest) => Math.floor(latest).toLocaleString());

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        springValue.set(value);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [isInView, springValue, value, delay]);

  return (
    <span ref={ref}>
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  );
}

export function Hero02() {
  return (
    <div className="overflow-hidden">
      <Header />
      <section className="relative pt-24 md:pt-36">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-20 md:grid-cols-2 md:gap-6">
            <div className="flex flex-col items-start justify-around gap-8">
              {/* Heading */}
              <div className="space-y-4">
                <motion.div className="space-y-2">
                  <AnimatedText
                    as="h1"
                    preset="fade-in-blur"
                    delay={0}
                    speed={0.4}
                    staggerDelay={0.5}
                    className="text-3xl leading-[1.1] font-bold tracking-tight text-neutral-900 xl:text-5xl dark:text-white"
                  >
                    Your metrics, beautifully{" "}
                    <span className="font-extrabold text-neutral-400 text-shadow-2xs dark:text-neutral-700">
                      Visualized
                    </span>
                  </AnimatedText>
                  <AnimatedText
                    as="p"
                    preset="stagger-words-blur"
                    delay={0.4}
                    staggerDelay={0.035}
                    speed={0.45}
                    className="max-w-xl text-sm leading-relaxed text-neutral-500 md:text-base dark:text-neutral-400"
                  >
                    Measure productivity, track tasks, and celebrate progress - all in one place.
                  </AnimatedText>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  initial={{
                    opacity: 0,
                    filter: "blue(8px)",
                    y: 10,
                  }}
                  animate={{
                    opacity: 1,
                    filter: "blue(0px)",
                    y: 0,
                  }}
                  transition={{
                    duration: 0.3,
                    delay: 0.4,
                    ease: "linear",
                  }}
                  viewport={{
                    once: true,
                  }}
                  className="flex flex-row items-start gap-4"
                >
                  <Button asChild size="lg" className="group">
                    <Link href="#" className="inline-flex items-center gap-2 rounded-none">
                      Start free trial
                      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-rotate-45" />
                    </Link>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="group hover:bg-background cursor-pointer rounded-none shadow-[inset_0px_1px_2px_#ffffff70,0px_1px_2px_#00000030,0px_2px_4px_#00000015] transition-shadow duration-200 hover:shadow-2xs dark:shadow-none"
                  >
                    <Link href="#" className="inline-flex items-center gap-2">
                      Book a Demo
                    </Link>
                  </Button>
                </motion.div>
              </div>

              {/* Stats */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.15,
                      delayChildren: 0.6,
                    },
                  },
                }}
                className="border-border grid grid-cols-3 gap-4"
              >
                <motion.div
                  variants={{
                    hidden: { opacity: 0, x: -40 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: {
                        duration: 0.5,
                        ease: [0.16, 1, 0.3, 1],
                      },
                    },
                  }}
                  className="border-border relative border border-dashed p-4"
                >
                  <span className="absolute -top-px -left-px h-2 w-2 border-t border-l border-neutral-400" />
                  <span className="absolute -bottom-px -left-px h-2 w-2 border-b border-l border-neutral-400" />
                  <span className="absolute -right-px -bottom-px h-2 w-2 border-r border-b border-neutral-400" />
                  <span className="absolute -top-px -right-px h-2 w-2 border-t border-r border-neutral-400" />
                  <div className="text-xl font-bold tracking-tight text-neutral-900 dark:text-white">
                    <AnimatedCounter value={10} suffix="K+" delay={800} />
                  </div>
                  <div className="text-sm text-neutral-600 dark:text-neutral-400">Active users</div>
                </motion.div>

                <motion.div
                  variants={{
                    hidden: { opacity: 0, x: -40 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: {
                        duration: 0.5,
                        ease: [0.16, 1, 0.3, 1],
                      },
                    },
                  }}
                  className="border-border relative border border-dashed p-4"
                >
                  <span className="absolute -top-px -left-px h-2 w-2 border-t border-l border-neutral-400" />
                  <span className="absolute -bottom-px -left-px h-2 w-2 border-b border-l border-neutral-400" />
                  <span className="absolute -right-px -bottom-px h-2 w-2 border-r border-b border-neutral-400" />
                  <span className="absolute -top-px -right-px h-2 w-2 border-t border-r border-neutral-400" />

                  <div className="text-xl font-bold tracking-tight text-neutral-900 dark:text-white">
                    <AnimatedCounter value={99} suffix="%" delay={950} />
                  </div>
                  <div className="text-sm text-neutral-600 dark:text-neutral-400">
                    Customer satisfaction
                  </div>
                </motion.div>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, x: -40 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: {
                        duration: 0.5,
                        ease: [0.16, 1, 0.3, 1],
                      },
                    },
                  }}
                  className="border-border relative border border-dashed p-4"
                >
                  <span className="absolute -top-px -left-px h-2 w-2 border-t border-l border-neutral-400" />
                  <span className="absolute -bottom-px -left-px h-2 w-2 border-b border-l border-neutral-400" />
                  <span className="absolute -right-px -bottom-px h-2 w-2 border-r border-b border-neutral-400" />
                  <span className="absolute -top-px -right-px h-2 w-2 border-t border-r border-neutral-400" />
                  <div className="text-xl font-bold tracking-tight text-neutral-900 dark:text-white">
                    <AnimatedCounter value={150} suffix="+" delay={1100} />
                  </div>
                  <div className="text-sm text-neutral-600 dark:text-neutral-400">Countries</div>
                </motion.div>
              </motion.div>
            </div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative order-last"
            >
              <div className="group relative aspect-4/3 overflow-hidden border border-neutral-400 dark:border-neutral-600">
                <Image
                  src="/brand_logos/Dashboard.png"
                  alt="Product dashboard showcasing analytics and insights"
                  fill
                  priority
                  quality={95}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                  className="transition-800 object-cover p-0.5 transition-transform ease-in-out group-hover:scale-102"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <BrandMarquee />
    </div>
  );
}
