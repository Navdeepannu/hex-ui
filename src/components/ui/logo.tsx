"use client";
import React from "react";
import { motion } from "motion/react";

const LogoHexagon = ({
  className = "",
  size = 32,
}: {
  className?: string;
  size?: number;
}) => {
  return (
    <div
      className={`relative inline-block ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Bottom hexagon - darkest */}
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        className="absolute inset-0 text-neutral-400 dark:text-neutral-600"
        style={{
          transform: "rotate(5deg) scale(1.1)",
          transformOrigin: "center",
        }}
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
          delay: 0.2,
        }}
      >
        <path
          d="M10.425 1.414l-6.775 3.996a3.21 3.21 0 0 0 -1.65 2.807v7.285a3.226 3.226 0 0 0 1.678 2.826l6.695 4.237c1.034 .57 2.22 .57 3.2 .032l6.804 -4.302c.98 -.537 1.623 -1.618 1.623 -2.793v-7.284l-.005 -.204a3.223 3.223 0 0 0 -1.284 -2.39l-.107 -.075l-.007 -.007a1.074 1.074 0 0 0 -.181 -.133l-6.776 -3.995a3.33 3.33 0 0 0 -3.216 0z"
          fill="currentColor"
        />
      </motion.svg>

      {/* Middle hexagon - medium */}
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        className="absolute inset-0 text-neutral-300 dark:text-neutral-500"
        style={{
          transform: "rotate(-3deg) scale(1.05) translateY(-1px)",
          transformOrigin: "center",
        }}
        initial={{ scale: 1, y: 0 }}
        animate={{ scale: 1.05, y: -2 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
          delay: 0.1,
        }}
      >
        <path
          d="M10.425 1.414l-6.775 3.996a3.21 3.21 0 0 0 -1.65 2.807v7.285a3.226 3.226 0 0 0 1.678 2.826l6.695 4.237c1.034 .57 2.22 .57 3.2 .032l6.804 -4.302c.98 -.537 1.623 -1.618 1.623 -2.793v-7.284l-.005 -.204a3.223 3.223 0 0 0 -1.284 -2.39l-.107 -.075l-.007 -.007a1.074 1.074 0 0 0 -.181 -.133l-6.776 -3.995a3.33 3.33 0 0 0 -3.216 0z"
          fill="currentColor"
        />
      </motion.svg>

      {/* Top hexagon - lightest */}
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        className="relative text-white dark:text-neutral-200 drop-shadow-sm"
        style={{
          transform: "rotate(2deg) translateY(-2px)",
          transformOrigin: "center",
        }}
        initial={{ y: 0 }}
        animate={{ y: -4 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
      >
        <path
          d="M10.425 1.414l-6.775 3.996a3.21 3.21 0 0 0 -1.65 2.807v7.285a3.226 3.226 0 0 0 1.678 2.826l6.695 4.237c1.034 .57 2.22 .57 3.2 .032l6.804 -4.302c.98 -.537 1.623 -1.618 1.623 -2.793v-7.284l-.005 -.204a3.223 3.223 0 0 0 -1.284 -2.39l-.107 -.075l-.007 -.007a1.074 1.074 0 0 0 -.181 -.133l-6.776 -3.995a3.33 3.33 0 0 0 -3.216 0z"
          fill="currentColor"
        />
      </motion.svg>

      {/* Optional: Add a subtle glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-200/20 via-transparent to-purple-200/20 rounded-lg blur-sm -z-10 dark:from-blue-400/10 dark:to-purple-400/10" />
    </div>
  );
};

// Alternative compact version for smaller spaces
export const LogoCompact = ({
  className = "",
  size = 24,
}: {
  className?: string;
  size?: number;
}) => {
  return (
    <div
      className={`relative inline-block ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Simplified 3-layer stack without animation for performance */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        className="absolute inset-0"
      >
        {/* Bottom layer */}
        <path
          d="M10.425 1.414l-6.775 3.996a3.21 3.21 0 0 0 -1.65 2.807v7.285a3.226 3.226 0 0 0 1.678 2.826l6.695 4.237c1.034 .57 2.22 .57 3.2 .032l6.804 -4.302c.98 -.537 1.623 -1.618 1.623 -2.793v-7.284l-.005 -.204a3.223 3.223 0 0 0 -1.284 -2.39l-.107 -.075l-.007 -.007a1.074 1.074 0 0 0 -.181 -.133l-6.776 -3.995a3.33 3.33 0 0 0 -3.216 0z"
          fill="currentColor"
          className="text-neutral-400 dark:text-neutral-600"
          transform="rotate(4 12 12) scale(1.08)"
        />
        {/* Middle layer */}
        <path
          d="M10.425 1.414l-6.775 3.996a3.21 3.21 0 0 0 -1.65 2.807v7.285a3.226 3.226 0 0 0 1.678 2.826l6.695 4.237c1.034 .57 2.22 .57 3.2 .032l6.804 -4.302c.98 -.537 1.623 -1.618 1.623 -2.793v-7.284l-.005 -.204a3.223 3.223 0 0 0 -1.284 -2.39l-.107 -.075l-.007 -.007a1.074 1.074 0 0 0 -.181 -.133l-6.776 -3.995a3.33 3.33 0 0 0 -3.216 0z"
          fill="currentColor"
          className="text-neutral-300 dark:text-neutral-500"
          transform="rotate(-2 12 12) scale(1.04)"
        />
        {/* Top layer */}
        <path
          d="M10.425 1.414l-6.775 3.996a3.21 3.21 0 0 0 -1.65 2.807v7.285a3.226 3.226 0 0 0 1.678 2.826l6.695 4.237c1.034 .57 2.22 .57 3.2 .032l6.804 -4.302c.98 -.537 1.623 -1.618 1.623 -2.793v-7.284l-.005 -.204a3.223 3.223 0 0 0 -1.284 -2.39l-.107 -.075l-.007 -.007a1.074 1.074 0 0 0 -.181 -.133l-6.776 -3.995a3.33 3.33 0 0 0 -3.216 0z"
          fill="currentColor"
          className="text-white dark:text-neutral-200 drop-shadow-sm"
          transform="rotate(1 12 12)"
        />
      </svg>
    </div>
  );
};

export default LogoHexagon;
