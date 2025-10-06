// Source code for SplitText component
export const sourceTsx = `"use client";
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

  // Container variants for orchestrating child animations
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
          {by === "character" && char === " " ? "\\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default SplitText;`;

export const sourceJsx = `"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import React from "react";

const SplitText = ({
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
  const animations = {
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

  // Container variants for orchestrating child animations
  const containerVariants = {
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
          {by === "character" && char === " " ? "\\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default SplitText;`;

// Usage examples for different animations
export const fadeUsageTsx = `import SplitText from "@/components/showcase/split-text";

export default function FadeExample() {
  return (
    <div className="space-y-8">
      {/* Fade Up */}
      <SplitText
        text="Fade up animation"
        animation="fadeUp"
        className="text-4xl font-bold"
        staggerDelay={0.05}
      />
      
      {/* Fade Down */}
      <SplitText
        text="Fade down animation"
        animation="fadeDown"
        className="text-4xl font-bold"
        staggerDelay={0.05}
      />
    </div>
  );
}`;

export const fadeUsageJsx = `import SplitText from "@/components/showcase/split-text";

export default function FadeExample() {
  return (
    <div className="space-y-8">
      {/* Fade Up */}
      <SplitText
        text="Fade up animation"
        animation="fadeUp"
        className="text-4xl font-bold"
        staggerDelay={0.05}
      />
      
      {/* Fade Down */}
      <SplitText
        text="Fade down animation"
        animation="fadeDown"
        className="text-4xl font-bold"
        staggerDelay={0.05}
      />
    </div>
  );
}`;

export const slideUsageTsx = `import SplitText from "@/components/showcase/split-text";

export default function SlideExample() {
  return (
    <div className="space-y-8">
      {/* Slide Left */}
      <SplitText
        text="Slide left animation"
        animation="slideLeft"
        className="text-4xl font-bold"
        staggerDelay={0.04}
      />
      
      {/* Slide Right */}
      <SplitText
        text="Slide right animation"
        animation="slideRight"
        className="text-4xl font-bold"
        staggerDelay={0.04}
      />
    </div>
  );
}`;

export const slideUsageJsx = `import SplitText from "@/components/showcase/split-text";

export default function SlideExample() {
  return (
    <div className="space-y-8">
      {/* Slide Left */}
      <SplitText
        text="Slide left animation"
        animation="slideLeft"
        className="text-4xl font-bold"
        staggerDelay={0.04}
      />
      
      {/* Slide Right */}
      <SplitText
        text="Slide right animation"
        animation="slideRight"
        className="text-4xl font-bold"
        staggerDelay={0.04}
      />
    </div>
  );
}`;

export const transformUsageTsx = `import SplitText from "@/components/showcase/split-text";

export default function TransformExample() {
  return (
    <div className="space-y-8">
      {/* Scale */}
      <SplitText
        text="Scale animation"
        animation="scale"
        className="text-4xl font-bold"
        staggerDelay={0.06}
      />
      
      {/* Rotate */}
      <SplitText
        text="Rotate animation"
        animation="rotate"
        className="text-4xl font-bold"
        staggerDelay={0.05}
      />
    </div>
  );
}`;

export const transformUsageJsx = `import SplitText from "@/components/showcase/split-text";

export default function TransformExample() {
  return (
    <div className="space-y-8">
      {/* Scale */}
      <SplitText
        text="Scale animation"
        animation="scale"
        className="text-4xl font-bold"
        staggerDelay={0.06}
      />
      
      {/* Rotate */}
      <SplitText
        text="Rotate animation"
        animation="rotate"
        className="text-4xl font-bold"
        staggerDelay={0.05}
      />
    </div>
  );
}`;

export const blurUsageTsx = `import SplitText from "@/components/showcase/split-text";

export default function BlurExample() {
  return (
    <div className="text-center">
      <SplitText
        text="Blur focus animation"
        animation="blur"
        className="text-4xl font-bold"
        staggerDelay={0.08}
      />
    </div>
  );
}`;

export const blurUsageJsx = `import SplitText from "@/components/showcase/split-text";

export default function BlurExample() {
  return (
    <div className="text-center">
      <SplitText
        text="Blur focus animation"
        animation="blur"
        className="text-4xl font-bold"
        staggerDelay={0.08}
      />
    </div>
  );
}`;

export const wordUsageTsx = `import SplitText from "@/components/showcase/split-text";

export default function WordExample() {
  return (
    <div className="text-center">
      <SplitText
        text="Word by word animation effect"
        animation="fadeUp"
        by="word"
        className="text-3xl font-semibold"
        staggerDelay={0.15}
      />
    </div>
  );
}`;

export const wordUsageJsx = `import SplitText from "@/components/showcase/split-text";

export default function WordExample() {
  return (
    <div className="text-center">
      <SplitText
        text="Word by word animation effect"
        animation="fadeUp"
        by="word"
        className="text-3xl font-semibold"
        staggerDelay={0.15}
      />
    </div>
  );
}`;
