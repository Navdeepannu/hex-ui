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
function HexagonShape({
  size = 100,
  className,
  style,
  socialMedia,
  ...props
}: HexagonProps) {
  const [showTooltip, setShowTooltip] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);

  const handleClick = () => {
    if (socialMedia?.url) window.open(socialMedia.url, "_blank");
  };

  return (
    <div
      {...props}
      onClick={handleClick}
      onMouseEnter={() => {
        setIsHovered(true);
        setShowTooltip(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        setShowTooltip(false);
      }}
      style={{
        width: size,
        height: size * 1.1,
        transformOrigin: "center",
        pointerEvents: "auto",
        ...style,
      }}
      className={cn(
        "group relative transform-gpu overflow-visible transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
        "will-change-transform",
        "[clip-path:polygon(50%_0%,_100%_25%,_100%_75%,_50%_100%,_0%_75%,_0%_25%)]",
        "origin-center hover:scale-[1.09]",
        socialMedia && "cursor-pointer",
        isHovered && "scale-110",
        className,
      )}
    >
      <div
        className={cn(
          "absolute inset-0 rounded-none before:absolute before:inset-0 before:content-['']",
          "before:bg-gradient-to-br before:from-neutral-200/80 before:to-neutral-300/80",
          "dark:before:from-neutral-900 dark:before:to-neutral-900/90",
          "after:absolute after:inset-[1px] after:bg-gradient-to-br after:content-['']",
          "after:from-white after:to-neutral-400 dark:after:from-neutral-900/95 dark:after:to-black",
          "after:[clip-path:polygon(50%_0%,_100%_25%,_100%_75%,_50%_100%,_0%_75%,_0%_25%)]",
          "before:[clip-path:polygon(50%_0%,_100%_25%,_100%_75%,_50%_100%,_0%_75%,_0%_25%)]",
        )}
      ></div>

      {socialMedia && (
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="text-muted-foreground relative flex flex-col items-center justify-center gap-3 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:drop-shadow-md dark:text-neutral-400 dark:group-hover:text-white">
            <div className="origin-center transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform group-hover:scale-[1.1]">
              {socialMedia.icon}
            </div>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="text-foreground/80 text-sm font-normal shadow-sm"
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
function HexagonCluster({
  size = 150,
  className,
  ...props
}: {
  size?: number;
  className?: string;
} & React.ComponentProps<"div">) {
  const hexWidth = size;
  const spacing = size * 0.85;
  const margin = 3;

  const positions = [
    { x: 0, y: 0, index: 0 },
    { x: hexWidth + margin, y: 0, index: 1 },
    { x: -(hexWidth + margin), y: 0, index: 2 },
    { x: (hexWidth + margin) / 2, y: -spacing, index: 3 },
    { x: -(hexWidth + margin) / 2, y: -spacing, index: 4 },
    { x: (hexWidth + margin) / 2, y: spacing, index: 5 },
    { x: -(hexWidth + margin) / 2, y: spacing, index: 6 },
  ];

  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  return (
    <div
      className={cn(
        "relative flex h-full w-full items-center justify-center overflow-visible",
        className,
      )}
      {...props}
    >
      <div className="relative overflow-visible">
        {positions.map((pos) => (
          <div
            key={pos.index}
            style={{
              position: "absolute",
              left: pos.x,
              top: pos.y,
              transform: "translate(-50%, -50%)",
              zIndex: hoveredIndex === pos.index ? 99 : 10,
            }}
            onMouseEnter={() => setHoveredIndex(pos.index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <HexagonShape
              size={size}
              socialMedia={socialMediaData[pos.index]}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export { HexagonCluster };
