"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import {
  IconBrandFigma,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTiktok,
  IconBrandX,
  IconBrandYoutubeFilled,
  IconHexagonLetterN,
} from "@tabler/icons-react";

type SocialMedia = {
  name: string;
  url: string;
  icon: React.ReactNode;
  color: string;
};

type HexagonProps = React.ComponentProps<"div"> & {
  size?: number;
  margin?: number;
  socialMedia?: SocialMedia;
};

function Hexagon({
  size = 100,
  className,
  style,
  socialMedia,
  ...props
}: HexagonProps) {
  const [showTooltip, setShowTooltip] = React.useState(false);

  const handleClick = () => {
    if (socialMedia?.url) {
      window.open(socialMedia.url, "_blank");
    }
  };

  return (
    <div
      {...props}
      style={{
        width: size,
        height: size * 1.1,
        transformOrigin: "center center",
        ...style,
      }}
      className={cn(
        "group relative overflow-visible drop-shadow-lg transition-all duration-300 hover:drop-shadow-2xl",
        "z-10 hover:z-50 hover:scale-105",
        "transform-gpu",
        "[clip-path:polygon(50%_0%,_100%_25%,_100%_75%,_50%_100%,_0%_75%,_0%_25%)]",
        "before:absolute before:top-0 before:left-0 before:h-full before:w-full before:content-['']",
        "before:bg-gradient-to-br before:from-neutral-700/80 before:to-neutral-800/90",
        "dark:before:bg-gradient-to-br dark:before:from-neutral-800/80 dark:before:to-neutral-900/90",
        "before:opacity-100 before:transition-all before:duration-300",
        "after:absolute after:inset-[2px] after:content-['']",
        "after:bg-gradient-to-br after:from-neutral-900/95 after:to-black/95",
        "dark:after:bg-gradient-to-br dark:after:from-neutral-900/95 dark:after:to-black",
        "after:transition-all after:duration-300",
        "after:[clip-path:polygon(50%_0%,_100%_25%,_100%_75%,_50%_100%,_0%_75%,_0%_25%)]",
        "hover:before:from-neutral-600/90 hover:before:to-neutral-700/95 hover:before:shadow-lg",
        "dark:hover:before:from-neutral-700/90 dark:hover:before:to-neutral-800/95",
        "hover:after:from-neutral-800/98 hover:after:to-neutral-900/98",
        "dark:hover:after:from-neutral-800/98 dark:hover:after:to-black/98",
        socialMedia && "cursor-pointer",
        className,
      )}
      onClick={handleClick}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {socialMedia && (
        <div
          className={cn(
            "absolute inset-0 z-10 flex items-center justify-center rounded-full",
          )}
        >
          <div className="relative flex flex-col items-center justify-center gap-3 text-neutral-400 drop-shadow-sm transition-all duration-300 group-hover:text-white group-hover:drop-shadow-md dark:text-neutral-400 dark:group-hover:text-white">
            <div className="transition-transform duration-300">
              {socialMedia.icon}
            </div>
            {socialMedia && showTooltip && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 5,
                  scale: 0.9,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                transition={{
                  ease: "easeInOut",
                  duration: 0.4,
                }}
                className="rounded-md border border-white/10 bg-black/80 px-2 py-1 text-sm font-medium text-white/90 backdrop-blur-sm"
              >
                {socialMedia.name}
              </motion.div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function HexagonCluster({
  size = 100,
  className,
  ...props
}: {
  size?: number;
  className?: string;
} & React.ComponentProps<"div">) {
  const hexWidth = size;
  const spacing = size * 0.85; // vertical offset between rows
  const margin = 5; // spacing between individual hexagons

  // Social media data matching the screenshot
  const socialMediaData: SocialMedia[] = [
    {
      name: "Hex UI",
      url: "#",
      icon: <IconHexagonLetterN size={30} />,
      color: "multi",
    },
    {
      name: "YouTube",
      url: "https://youtube.com",
      icon: <IconBrandYoutubeFilled size={30} />,
      color: "red",
    },
    {
      name: "Instagram",
      url: "https://instagram.com",
      icon: <IconBrandInstagram size={30} />,
      color: "purple",
    },
    {
      name: "TikTok",
      url: "https://tiktok.com",
      icon: <IconBrandTiktok size={30} />,
      color: "black",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com",
      icon: <IconBrandLinkedin size={30} />,
      color: "blue",
    },
    {
      name: "X (Twitter)",
      url: "https://x.com/navdeepannu0",
      icon: <IconBrandX size={30} />,
      color: "black",
    },
    {
      name: "Design Tool",
      url: "https://figma.com",
      icon: <IconBrandFigma size={30} />,
      color: "yellow",
    },
  ];

  // 7 hexagons in a honeycomb cluster with proper spacing
  const positions = [
    { x: 0, y: 0, index: 0 }, // center - ClubHouse
    { x: hexWidth + margin, y: 0, index: 1 }, // right - Instagram
    { x: -(hexWidth + margin), y: 0, index: 2 }, // left - TikTok
    { x: (hexWidth + margin) / 2, y: -spacing, index: 3 }, // top-right - YouTube
    { x: -(hexWidth + margin) / 2, y: -spacing, index: 4 }, // top-left - Design Tool
    { x: (hexWidth + margin) / 2, y: spacing, index: 5 }, // bottom-right - X
    { x: -(hexWidth + margin) / 2, y: spacing, index: 6 }, // bottom-left - LinkedIn
  ];

  return (
    <div
      className={cn(
        "relative flex h-full w-full items-center justify-center overflow-visible",
        className,
      )}
      {...props}
    >
      {/* Subtle ambient glow effect */}
      <div className="bg-gradient-radial absolute inset-0 from-neutral-700/10 via-transparent to-transparent" />

      {/* Hexagon cluster container */}
      <div className="relative overflow-visible">
        <style>{`:root { --hexagon-margin: 3px; }`}</style>
        {positions.map((pos) => (
          <Hexagon
            key={pos.index}
            size={size}
            socialMedia={socialMediaData[pos.index]}
            className={pos.index === 0 ? "hover:z-[60]" : ""}
            style={{
              position: "absolute",
              transform: `translate(${pos.x - size / 2}px, ${pos.y - size / 2}px)`,
              zIndex: pos.index === 0 ? 20 : 10,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export { HexagonCluster };
