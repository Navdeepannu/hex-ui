import CodePreview from "@/components/code-preview/code-preview";
import InstallationTabs from "@/components/code-preview/installation-tabs";
import { PropsTable, type PropItem } from "@/components/ui/props-table";
import { ComponentNavigation } from "@/components/ui/component-navigation";
import React from "react";
import { TextEffect } from "@/components/showcase/animations/animated-text";

export const metadata = {
  title: "Animated Text - Hex UI",
  description:
    "A powerful text animation component with 5 preset effects (fade, slide, blur, fade-in-blur, scale) and support for word, character, and line-based animations. Fully customizable with advanced Framer Motion controls.",
};

const page = () => {
  const CODE = `import { TextEffect } from "@/components/showcase/animations/animated-text";

export default function AnimatedTextDemo() {
  return (
    <div className="space-y-8">
      {/* Fade Effect */}
      <TextEffect
        preset="fade"
        className="text-3xl font-semibold"
      >
        Smooth fade animation
      </TextEffect>

      {/* Slide Effect */}
      <TextEffect
        preset="slide"
        per="word"
        speedReveal={1.2}
        className="text-3xl font-bold"
      >
        Words slide up smoothly
      </TextEffect>

      {/* Blur Effect */}
      <TextEffect
        preset="blur"
        per="char"
        speedReveal={2}
        className="text-3xl font-bold"
      >
        Blur into focus
      </TextEffect>

      {/* Fade-in-Blur Effect */}
      <TextEffect
        preset="fade-in-blur"
        per="word"
        delay={0.1}
        className="text-3xl font-bold"
      >
        Fade and blur combined
      </TextEffect>

      {/* Scale Effect */}
      <TextEffect
        preset="scale"
        per="word"
        speedReveal={1.5}
        className="text-3xl font-bold"
      >
        Scale up animation
      </TextEffect>

      {/* Character by Character */}
      <TextEffect
        preset="slide"
        per="char"
        speedReveal={3}
        className="text-3xl font-mono font-bold"
      >
        Character by character
      </TextEffect>
    </div>
  );
}`;

  const CLICODE = {
    npm: `npx shadcn@latest add https://hex-ui.com/r/animated-text.json`,
    bun: `bunx --bun shadcn@latest add https://hex-ui.com/r/animated-text.json`,
    pnpm: `pnpm dlx shadcn@latest add https://hex-ui.com/r/animated-text.json`,
    yarn: `yarn dlx shadcn@latest add https://hex-ui.com/r/animated-text.json`,
  };

  const MANUALCODE = `'use client';

import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'motion/react';
import type {
  TargetAndTransition,
  Transition,
  Variant,
  Variants,
} from 'motion/react';
import React from 'react';

// ============================================================================
// Types
// ============================================================================

export type AnimationPreset = 'blur' | 'fade-in-blur' | 'scale' | 'fade' | 'slide';
export type AnimationUnit = 'word' | 'char' | 'line';

export interface TextEffectProps {
  children: string;
  per?: AnimationUnit;
  as?: keyof React.JSX.IntrinsicElements;
  variants?: {
    container?: Variants;
    item?: Variants;
  };
  className?: string;
  preset?: AnimationPreset;
  delay?: number;
  speedReveal?: number;
  speedSegment?: number;
  trigger?: boolean;
  onAnimationComplete?: () => void;
  onAnimationStart?: () => void;
  segmentWrapperClassName?: string;
  containerTransition?: Transition;
  segmentTransition?: Transition;
  style?: React.CSSProperties;
}

interface AnimationSegmentProps {
  segment: string;
  variants: Variants;
  unit: AnimationUnit;
  wrapperClassName?: string;
}

// ============================================================================
// Animation Configuration
// ============================================================================

const STAGGER_TIMING: Record<AnimationUnit, number> = {
  char: 0.03,
  word: 0.05,
  line: 0.1,
} as const;

const BASE_CONTAINER_VARIANTS: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
  exit: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
} as const;

const BASE_ITEM_VARIANTS: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
} as const;

// ============================================================================
// Preset Animation Variants
// ============================================================================

const ANIMATION_PRESETS: Record<
  AnimationPreset,
  { container: Variants; item: Variants }
> = {
  fade: {
    container: BASE_CONTAINER_VARIANTS,
    item: BASE_ITEM_VARIANTS,
  },
  blur: {
    container: BASE_CONTAINER_VARIANTS,
    item: {
      hidden: { opacity: 0, filter: 'blur(12px)' },
      visible: { opacity: 1, filter: 'blur(0px)' },
      exit: { opacity: 0, filter: 'blur(12px)' },
    },
  },
  'fade-in-blur': {
    container: BASE_CONTAINER_VARIANTS,
    item: {
      hidden: { opacity: 0, y: 20, filter: 'blur(12px)' },
      visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
      exit: { opacity: 0, y: 20, filter: 'blur(12px)' },
    },
  },
  scale: {
    container: BASE_CONTAINER_VARIANTS,
    item: {
      hidden: { opacity: 0, scale: 0 },
      visible: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0 },
    },
  },
  slide: {
    container: BASE_CONTAINER_VARIANTS,
    item: {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 20 },
    },
  },
} as const;

// ============================================================================
// Helper Functions
// ============================================================================

function splitTextByUnit(text: string, unit: AnimationUnit): string[] {
  if (unit === 'line') return text.split('\\n');
  return text.split(/(\\s+)/);
}

function isVariantWithTransition(
  variant?: Variant
): variant is TargetAndTransition & { transition?: Transition } {
  return Boolean(
    variant && typeof variant === 'object' && 'transition' in variant
  );
}

function mergeVariantsWithTransition(
  baseVariants: Variants,
  transition?: Transition & { exit?: Transition }
): Variants {
  if (!transition) return baseVariants;

  const { exit: exitTransition, ...mainTransition } = transition;

  return {
    ...baseVariants,
    visible: {
      ...baseVariants.visible,
      transition: {
        ...(isVariantWithTransition(baseVariants.visible)
          ? baseVariants.visible.transition
          : {}),
        ...mainTransition,
      },
    },
    exit: {
      ...baseVariants.exit,
      transition: {
        ...(isVariantWithTransition(baseVariants.exit)
          ? baseVariants.exit.transition
          : {}),
        ...mainTransition,
        staggerDirection: -1,
      },
    },
  };
}

// ============================================================================
// Animation Segment Component
// ============================================================================

const AnimatedSegment = React.memo<AnimationSegmentProps>(
  ({ segment, variants, unit, wrapperClassName }) => {
    const renderContent = () => {
      switch (unit) {
        case 'line':
          return (
            <motion.span variants={variants} className='block'>
              {segment}
            </motion.span>
          );

        case 'word':
          return (
            <motion.span
              aria-hidden='true'
              variants={variants}
              className='inline-block whitespace-pre'
            >
              {segment}
            </motion.span>
          );

        case 'char':
          return (
            <motion.span className='inline-block whitespace-pre'>
              {segment.split('').map((char, index) => (
                <motion.span
                  key={\`char-\${index}\`}
                  aria-hidden='true'
                  variants={variants}
                  className='inline-block whitespace-pre'
                >
                  {char}
                </motion.span>
              ))}
            </motion.span>
          );
      }
    };

    const content = renderContent();

    if (!wrapperClassName) {
      return content;
    }

    const baseClassName = unit === 'line' ? 'block' : 'inline-block';

    return (
      <span className={cn(baseClassName, wrapperClassName)}>{content}</span>
    );
  }
);

AnimatedSegment.displayName = 'AnimatedSegment';

// ============================================================================
// Main Text Effect Component
// ============================================================================

export function TextEffect({
  children,
  per = 'word',
  as = 'p',
  variants: customVariants,
  className,
  preset = 'fade',
  delay = 0,
  speedReveal = 1,
  speedSegment = 1,
  trigger = true,
  onAnimationComplete,
  onAnimationStart,
  segmentWrapperClassName,
  containerTransition,
  segmentTransition,
  style,
}: TextEffectProps) {
  const textSegments = splitTextByUnit(children, per);
  const MotionElement = motion[as as keyof typeof motion] as typeof motion.div;

  const baseAnimationVariants = preset
    ? ANIMATION_PRESETS[preset]
    : { container: BASE_CONTAINER_VARIANTS, item: BASE_ITEM_VARIANTS };

  const staggerDelay = STAGGER_TIMING[per] / speedReveal;
  const animationDuration = 0.3 / speedSegment;

  const containerVisible = customVariants?.container?.visible;
  const customStagger = isVariantWithTransition(containerVisible)
    ? containerVisible.transition?.staggerChildren
    : undefined;

  const customDelayChildren = isVariantWithTransition(containerVisible)
    ? containerVisible.transition?.delayChildren
    : undefined;

  const finalVariants = {
    container: mergeVariantsWithTransition(
      customVariants?.container ?? baseAnimationVariants.container,
      {
        staggerChildren: customStagger ?? staggerDelay,
        delayChildren: customDelayChildren ?? delay,
        ...containerTransition,
        exit: {
          staggerChildren: customStagger ?? staggerDelay,
          staggerDirection: -1,
        },
      }
    ),
    item: mergeVariantsWithTransition(
      customVariants?.item ?? baseAnimationVariants.item,
      {
        duration: animationDuration,
        ...segmentTransition,
      }
    ),
  };

  return (
    <AnimatePresence mode='popLayout'>
      {trigger && (
        <MotionElement
          initial='hidden'
          animate='visible'
          exit='exit'
          variants={finalVariants.container}
          className={className}
          onAnimationComplete={onAnimationComplete}
          onAnimationStart={onAnimationStart}
          style={style}
        >
          {per !== 'line' && <span className='sr-only'>{children}</span>}
          {textSegments.map((segment, index) => (
            <AnimatedSegment
              key={\`\${per}-\${index}-\${segment}\`}
              segment={segment}
              variants={finalVariants.item}
              unit={per}
              wrapperClassName={segmentWrapperClassName}
            />
          ))}
        </MotionElement>
      )}
    </AnimatePresence>
  );
}`;

  const propsData: PropItem[] = [
    {
      name: "children",
      type: "string",
      default: "",
      description: "The text content to be animated.",
    },
    {
      name: "preset",
      type: '"blur" | "fade-in-blur" | "scale" | "fade" | "slide"',
      default: '"fade"',
      description:
        'Animation preset style: "fade", "slide", "blur", "fade-in-blur", or "scale".',
    },
    {
      name: "per",
      type: '"word" | "char" | "line"',
      default: '"word"',
      description:
        'Animation unit: "word" (animates word by word), "char" (animates character by character), or "line" (animates line by line).',
    },
    {
      name: "className",
      type: "string",
      default: "",
      description:
        "Additional CSS classes to apply to the text container. Use for styling text size, color, font, etc.",
    },
    {
      name: "delay",
      type: "number",
      default: "0",
      description:
        "Delay before animation starts in seconds. Applies to the entire text animation sequence.",
    },
    {
      name: "speedReveal",
      type: "number",
      default: "1",
      description:
        "Controls the stagger speed between animated units. Higher values = faster reveal. Multiplier applied to default stagger timing.",
    },
    {
      name: "speedSegment",
      type: "number",
      default: "1",
      description:
        "Controls the animation duration of each segment. Higher values = faster individual animations.",
    },
    {
      name: "trigger",
      type: "boolean",
      default: "true",
      description:
        "Whether the animation should play. Set to false to unmount/hide the animation.",
    },
    {
      name: "as",
      type: "keyof React.JSX.IntrinsicElements",
      default: '"p"',
      description:
        "HTML element to render as (e.g., h1, h2, p, span, div). Useful for semantic markup and accessibility.",
    },
    {
      name: "variants",
      type: "{ container?: Variants; item?: Variants }",
      default: "undefined",
      description:
        "Custom Framer Motion variants for advanced animation control. Overrides preset animations.",
    },
    {
      name: "onAnimationComplete",
      type: "() => void",
      default: "undefined",
      description: "Callback function triggered when the animation completes.",
    },
    {
      name: "onAnimationStart",
      type: "() => void",
      default: "undefined",
      description: "Callback function triggered when the animation starts.",
    },
    {
      name: "segmentWrapperClassName",
      type: "string",
      default: "undefined",
      description:
        "Additional CSS classes to apply to each animated segment wrapper. Useful for fine-grained styling control.",
    },
    {
      name: "containerTransition",
      type: "Transition",
      default: "undefined",
      description:
        "Custom Framer Motion transition configuration for the container element. Overrides default transition timing.",
    },
    {
      name: "segmentTransition",
      type: "Transition",
      default: "undefined",
      description:
        "Custom Framer Motion transition configuration for each animated segment. Allows per-segment animation customization.",
    },
    {
      name: "style",
      type: "React.CSSProperties",
      default: "undefined",
      description:
        "Inline CSS styles to apply to the container element. Use for dynamic styling that can't be achieved with className.",
    },
  ];

  return (
    <div className="mx-auto max-w-4xl">
      {/* Header Section */}
      <div className="mb-12">
        <div className="mb-4">
          <h1 className="mb-2 text-3xl font-bold tracking-tight md:text-4xl">
            Animated Text
          </h1>
          <p className="text-muted-foreground text-sm md:text-lg">
            A powerful text animation component with 5 preset effects (fade,
            slide, blur, fade-in-blur, scale) and support for word, character,
            and line-based animations. Fully customizable with advanced Framer
            Motion controls and TypeScript support.
          </p>
        </div>
      </div>

      {/* Demo Section */}
      <div className="mb-12">
        <CodePreview demoCode={CODE} fileName="animated-text-demo.tsx">
          <div className="relative flex min-h-[800px] w-full flex-col items-center justify-center gap-8 bg-gradient-to-br from-neutral-50 to-neutral-100 p-8 dark:from-neutral-950 dark:to-neutral-900">
            {/* Fade Effect */}
            <div className="text-center">
              <TextEffect
                preset="fade"
                className="bg-gradient-to-br from-neutral-800 via-neutral-800 to-neutral-700 bg-clip-text text-3xl font-semibold text-transparent dark:from-neutral-200 dark:via-neutral-100 dark:to-neutral-300"
              >
                Smooth fade animation
              </TextEffect>
            </div>

            {/* Slide Effect */}
            <div className="text-center">
              <TextEffect
                preset="slide"
                per="word"
                speedReveal={1.2}
                className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-3xl font-bold text-transparent"
              >
                Words slide up smoothly
              </TextEffect>
            </div>

            {/* Blur Effect */}
            <div className="text-center">
              <TextEffect
                preset="blur"
                per="char"
                speedReveal={2}
                className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-3xl font-bold text-transparent"
              >
                Blur into focus
              </TextEffect>
            </div>

            {/* Fade-in-Blur Effect */}
            <div className="text-center">
              <TextEffect
                preset="fade-in-blur"
                per="word"
                delay={0.1}
                className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-3xl font-bold text-transparent"
              >
                Fade and blur combined
              </TextEffect>
            </div>

            {/* Scale Effect */}
            <div className="text-center">
              <TextEffect
                preset="scale"
                per="word"
                speedReveal={1.5}
                className="bg-gradient-to-br from-violet-600 via-fuchsia-600 to-pink-600 bg-clip-text text-3xl font-bold text-transparent"
              >
                Scale up animation
              </TextEffect>
            </div>

            {/* Character by Character */}
            <div className="text-center">
              <TextEffect
                preset="slide"
                per="char"
                speedReveal={3}
                className="font-mono text-3xl font-bold text-neutral-800 dark:text-neutral-200"
              >
                Character by character
              </TextEffect>
            </div>
          </div>
        </CodePreview>
      </div>

      {/* Installation Section */}
      <div className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold tracking-tight">
          Installation
        </h2>
        <InstallationTabs
          cliCodes={CLICODE}
          manualCode={MANUALCODE}
          fileName="animated-text.tsx"
        />
      </div>

      {/* Props Section */}
      <div className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold tracking-tight">Props</h2>
        <p className="text-muted-foreground mb-6">
          The{" "}
          <code className="bg-muted rounded px-2 py-1 text-sm">TextEffect</code>{" "}
          component accepts the following props:
        </p>
        <PropsTable data={propsData} />
      </div>

      {/* Navigation */}
      <ComponentNavigation
        previous={{
          title: "Hexagon Background",
          href: "/components/background-ripple-effect",
        }}
        next={{
          title: "Button Components",
          href: "/components/buttons",
        }}
      />
    </div>
  );
};

export default page;
