'use client';

import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'motion/react';
import type {
  TargetAndTransition,
  Transition,
  Variant,
  Variants,
} from 'motion/react';
import React from 'react';

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

/**
 * Splits text based on the specified animation unit
 */
function splitTextByUnit(text: string, unit: AnimationUnit): string[] {
  if (unit === 'line') return text.split('\n');
  return text.split(/(\s+)/);
}

/**
 * Type guard to check if a variant has transition properties
 */
function isVariantWithTransition(
  variant?: Variant
): variant is TargetAndTransition & { transition?: Transition } {
  return Boolean(
    variant && typeof variant === 'object' && 'transition' in variant
  );
}

/**
 * Merges base variants with custom transition timing
 */
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
    // Render based on animation unit
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
                  key={`char-${index}`}
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

    // Apply wrapper className if provided
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
  // Split text into segments based on animation unit
  const textSegments = splitTextByUnit(children, per);

  // Get the appropriate motion component for the HTML element
  const MotionElement = motion[as as keyof typeof motion] as typeof motion.div;

  // Select base animation variants from preset or defaults
  const baseAnimationVariants = preset
    ? ANIMATION_PRESETS[preset]
    : { container: BASE_CONTAINER_VARIANTS, item: BASE_ITEM_VARIANTS };

  // Calculate timing values
  const staggerDelay = STAGGER_TIMING[per] / speedReveal;
  const animationDuration = 0.3 / speedSegment;

  // Extract custom timing from user-provided variants
  const containerVisible = customVariants?.container?.visible;
  const customStagger = isVariantWithTransition(containerVisible)
    ? containerVisible.transition?.staggerChildren
    : undefined;

  const customDelayChildren = isVariantWithTransition(containerVisible)
    ? containerVisible.transition?.delayChildren
    : undefined;

  // Build final animation variants
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
          {/* Screen reader accessible text */}
          {per !== 'line' && <span className='sr-only'>{children}</span>}

          {/* Animated segments */}
          {textSegments.map((segment, index) => (
            <AnimatedSegment
              key={`${per}-${index}-${segment}`}
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
}
