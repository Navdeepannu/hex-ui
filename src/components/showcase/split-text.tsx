"use client";
import { cn } from "@/lib/utils";
import { motion, Variants } from "motion/react";
import React from "react";

type AnimationType =
  | "fadeUp"
  | "fadeDown"
  | "slideLeft"
  | "slideRight"
  | "scale"
  | "rotate"
  | "blur";

interface SplitTextProps {
  text: string;
  className?: string;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  staggerDelay?: number;
  by?: "character" | "word";
  once?: boolean;
}

const SplitText: React.FC<SplitTextProps> = ({
  text,
  className,
  animation = "fadeUp",
  delay = 0,
  duration = 0.5,
  staggerDelay = 0.03,
  by = "character",
  once = true,
}) => {
  // Animation variants
  const animations: Record<AnimationType, Variants> = {
    fadeUp: {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    },
    fadeDown: {
      hidden: { opacity: 0, y: -20 },
      visible: { opacity: 1, y: 0 },
    },
    slideLeft: {
      hidden: { opacity: 0, x: 20 },
      visible: { opacity: 1, x: 0 },
    },
    slideRight: {
      hidden: { opacity: 0, x: -20 },
      visible: { opacity: 1, x: 0 },
    },
    scale: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 },
    },
    rotate: {
      hidden: { opacity: 0, rotate: -10 },
      visible: { opacity: 1, rotate: 0 },
    },
    blur: {
      hidden: { opacity: 0, filter: "blur(4px)" },
      visible: { opacity: 1, filter: "blur(0px)" },
    },
  };

  // child animations
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: delay,
        staggerChildren: staggerDelay,
      },
    },
  };

  // Split text by character or word
  const splitText = by === "character" ? text.split("") : text.split(" ");

  return (
    <motion.div
      className={cn(
        "inline-flex",
        by === "word" ? "flex-wrap gap-x-2" : "",
        className
      )}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      viewport={{ once }}
    >
      {splitText.map((char, index) => (
        <motion.span
          key={index}
          variants={animations[animation]}
          transition={{
            duration,
            ease: "easeOut",
          }}
          className={cn(
            "inline-block",
            by === "character" && char === " " ? "w-2" : "",
            by === "word" ? "whitespace-nowrap" : ""
          )}
        >
          {by === "character" && char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  );
};

// Pre-configured variants
// Common Use Cases
export const SplitTextFadeUp: React.FC<Omit<SplitTextProps, "animation">> = (
  props
) => <SplitText {...props} animation="fadeUp" />;

export const SplitTextSlideIn: React.FC<Omit<SplitTextProps, "animation">> = (
  props
) => <SplitText {...props} animation="slideLeft" />;

export const SplitTextScale: React.FC<Omit<SplitTextProps, "animation">> = (
  props
) => <SplitText {...props} animation="scale" />;

export const SplitTextWords: React.FC<Omit<SplitTextProps, "by">> = (props) => (
  <SplitText {...props} by="word" />
);

export default SplitText;
