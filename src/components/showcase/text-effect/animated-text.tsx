"use client";

import { motion, HTMLMotionProps, Variants } from "motion/react";
import { ReactNode } from "react";

type AnimationPreset =
  | "fade-in-blur"
  | "slide-up"
  | "slide-down"
  | "slide-left"
  | "slide-right"
  | "pop"
  | "zoom-in"
  | "zoom-out"
  | "fade-in"
  | "stagger-words-blur";

interface AnimatedTextProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: ReactNode;
  preset?: AnimationPreset;
  delay?: number;
  speed?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
  className?: string;
  staggerDelay?: number;
}

const presetAnimations = {
  "fade-in-blur": {
    initial: { opacity: 0, filter: "blur(5px)" },
    animate: { opacity: 1, filter: "blur(0px)" },
  },
  "slide-up": {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  },
  "slide-down": {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
  },
  "slide-left": {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
  },
  "slide-right": {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
  },
  pop: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
  },
  "zoom-in": {
    initial: { opacity: 0, scale: 0.5 },
    animate: { opacity: 1, scale: 1 },
  },
  "zoom-out": {
    initial: { opacity: 0, scale: 1.5 },
    animate: { opacity: 1, scale: 1 },
  },
  "fade-in": {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  },
  "stagger-words-blur": {
    initial: { opacity: 0, filter: "blur(8px)", y: 5 },
    animate: { opacity: 1, filter: "blur(0px)", y: 0 },
  },
};

export function AnimatedText({
  children,
  preset = "fade-in-blur",
  delay = 0,
  speed = 0.7,
  as = "div",
  className,
  staggerDelay = 0.03,
  ...props
}: AnimatedTextProps) {
  const animation = presetAnimations[preset];
  const MotionComponent = motion[as];

  // Handle stagger words animation
  if (preset === "stagger-words-blur" && typeof children === "string") {
    const words = children.split(" ");

    const containerVariants: Variants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: staggerDelay,
          delayChildren: delay,
        },
      },
    };

    const wordVariants: Variants = {
      hidden: animation.initial,
      visible: {
        ...animation.animate,
        transition: {
          duration: speed,
          ease: "easeOut",
        },
      },
    };

    return (
      <MotionComponent
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className={className}
        {...props}
      >
        {words.map((word, index) => (
          <motion.span
            key={`${word}-${index}`}
            variants={wordVariants}
            style={{ display: "inline-block", marginRight: "0.25em" }}
          >
            {word}
          </motion.span>
        ))}
      </MotionComponent>
    );
  }

  // Default animation for other presets
  return (
    <MotionComponent
      initial={animation.initial}
      animate={animation.animate}
      transition={{
        duration: speed,
        delay,
        ease: "easeOut",
      }}
      className={className}
      {...props}
    >
      {children}
    </MotionComponent>
  );
}
