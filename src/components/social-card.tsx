"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import React, { useState } from "react";

// Reusable Hexagon Shape Component
const HexagonShape = ({
  children,
  className,
  isHovered,
  onHover,
  onLeave,
  hoverColor = "rgba(255, 255, 255, 0.1)",
  strokeColor = "rgba(156, 163, 175, 0.4)",
}: {
  children?: React.ReactNode;
  className?: string;
  isHovered?: boolean;
  onHover?: () => void;
  onLeave?: () => void;
  hoverColor?: string;
  strokeColor?: string;
}) => {
  return (
    <motion.div
      className={cn("relative cursor-pointer", className)}
      onHoverStart={onHover}
      onHoverEnd={onLeave}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2, ease: "easeOut" },
      }}
      animate={{
        scale: isHovered ? 1.05 : 1,
      }}
      transition={{ duration: 0.2 }}
    >
      {/* Hexagon Background */}
      <motion.div
        className="w-20 h-20 flex items-center justify-center relative"
        style={{
          clipPath:
            "polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)",
        }}
        animate={{
          backgroundColor: isHovered ? hoverColor : "rgba(30, 30, 30, 0.8)",
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Inner border */}
        <motion.div
          className="absolute inset-1"
          style={{
            clipPath:
              "polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)",
          }}
          animate={{
            borderColor: isHovered ? strokeColor : "rgba(75, 85, 99, 0.6)",
            borderWidth: "1px",
            borderStyle: "solid",
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center">
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
};

const CardDemo = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  // Social media icons data
  const socialMediaIcons = [
    {
      id: "youtube",
      name: "YouTube",
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-white"
        >
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
      hoverColor: "rgba(255, 0, 0, 0.2)",
      strokeColor: "rgb(255, 60, 60)",
    },
    {
      id: "instagram",
      name: "Instagram",
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-white"
        >
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
      hoverColor: "rgba(225, 48, 108, 0.2)",
      strokeColor: "rgb(225, 48, 108)",
    },
    {
      id: "tiktok",
      name: "TikTok",
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-white"
        >
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
        </svg>
      ),
      hoverColor: "rgba(37, 244, 238, 0.2)",
      strokeColor: "rgb(37, 244, 238)",
    },
    {
      id: "colorful",
      name: "Design",
      icon: (
        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 shadow-lg"></div>
      ),
      hoverColor: "rgba(168, 85, 247, 0.2)",
      strokeColor: "rgb(168, 85, 247)",
    },
    {
      id: "compass",
      name: "Navigate",
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-white"
        >
          <circle cx="12" cy="12" r="10" />
          <polygon points="16.24,7.76 14.12,14.12 7.76,16.24 9.88,9.88 16.24,7.76" />
        </svg>
      ),
      hoverColor: "rgba(156, 163, 175, 0.2)",
      strokeColor: "rgb(156, 163, 175)",
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-white"
        >
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      hoverColor: "rgba(10, 102, 194, 0.2)",
      strokeColor: "rgb(10, 102, 194)",
    },
    {
      id: "x",
      name: "X.com",
      icon: (
        <div className="flex flex-col items-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-white"
          >
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
          <span className="text-xs text-gray-400 mt-1">X.COM</span>
        </div>
      ),
      hoverColor: "rgba(255, 255, 255, 0.1)",
      strokeColor: "rgb(255, 255, 255)",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black h-100 w-100 rounded-3xl relative overflow-hidden flex items-center justify-center">
      {/* Background subtle pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(120,119,198,0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,119,198,0.2),transparent_50%)]" />
      </div>

      {/* Hexagon Grid Layout */}
      <div className="relative grid grid-cols-3 gap-2 items-center justify-center">
        {/* Top Row - 2 hexagons offset */}
        <div className="col-start-1 col-span-1 flex justify-end">
          <HexagonShape
            isHovered={hoveredId === "youtube"}
            onHover={() => setHoveredId("youtube")}
            onLeave={() => setHoveredId(null)}
            hoverColor={socialMediaIcons[0].hoverColor}
            strokeColor={socialMediaIcons[0].strokeColor}
          >
            {socialMediaIcons[0].icon}
          </HexagonShape>
        </div>

        <div className="col-start-3 col-span-1 flex justify-start">
          <HexagonShape
            isHovered={hoveredId === "instagram"}
            onHover={() => setHoveredId("instagram")}
            onLeave={() => setHoveredId(null)}
            hoverColor={socialMediaIcons[1].hoverColor}
            strokeColor={socialMediaIcons[1].strokeColor}
          >
            {socialMediaIcons[1].icon}
          </HexagonShape>
        </div>

        {/* Middle Row - 3 hexagons */}
        <div className="col-span-1 flex justify-center">
          <HexagonShape
            isHovered={hoveredId === "tiktok"}
            onHover={() => setHoveredId("tiktok")}
            onLeave={() => setHoveredId(null)}
            hoverColor={socialMediaIcons[2].hoverColor}
            strokeColor={socialMediaIcons[2].strokeColor}
          >
            {socialMediaIcons[2].icon}
          </HexagonShape>
        </div>

        <div className="col-span-1 flex justify-center">
          <HexagonShape
            isHovered={hoveredId === "colorful"}
            onHover={() => setHoveredId("colorful")}
            onLeave={() => setHoveredId(null)}
            hoverColor={socialMediaIcons[3].hoverColor}
            strokeColor={socialMediaIcons[3].strokeColor}
          >
            {socialMediaIcons[3].icon}
          </HexagonShape>
        </div>

        <div className="col-span-1 flex justify-center">
          <HexagonShape
            isHovered={hoveredId === "compass"}
            onHover={() => setHoveredId("compass")}
            onLeave={() => setHoveredId(null)}
            hoverColor={socialMediaIcons[4].hoverColor}
            strokeColor={socialMediaIcons[4].strokeColor}
          >
            {socialMediaIcons[4].icon}
          </HexagonShape>
        </div>

        {/* Bottom Row - 2 hexagons offset */}
        <div className="col-start-1 col-span-1 flex justify-end">
          <HexagonShape
            isHovered={hoveredId === "linkedin"}
            onHover={() => setHoveredId("linkedin")}
            onLeave={() => setHoveredId(null)}
            hoverColor={socialMediaIcons[5].hoverColor}
            strokeColor={socialMediaIcons[5].strokeColor}
          >
            {socialMediaIcons[5].icon}
          </HexagonShape>
        </div>

        <div className="col-start-3 col-span-1 flex justify-start">
          <HexagonShape
            isHovered={hoveredId === "x"}
            onHover={() => setHoveredId("x")}
            onLeave={() => setHoveredId(null)}
            hoverColor={socialMediaIcons[6].hoverColor}
            strokeColor={socialMediaIcons[6].strokeColor}
          >
            {socialMediaIcons[6].icon}
          </HexagonShape>
        </div>
      </div>

      {/* Subtle connecting lines (optional) */}
      <svg
        className="absolute inset-0 pointer-events-none opacity-20"
        width="100%"
        height="100%"
      >
        <defs>
          <pattern
            id="hexGrid"
            x="0"
            y="0"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 20 0 L 35 10 L 35 30 L 20 40 L 5 30 L 5 10 Z"
              fill="none"
              stroke="rgba(75, 85, 99, 0.1)"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hexGrid)" />
      </svg>
    </div>
  );
};

export default CardDemo;
