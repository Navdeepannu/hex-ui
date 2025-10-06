"use client";
import React, { useState, useRef, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "motion/react";
import { useDrag } from "@use-gesture/react";
import { cn } from "@/lib/utils";

const images = [
  {
    src: "https://images.unsplash.com/photo-1563388705-c240527afb77?q=80&w=1409&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Crafted for adventure, built to last a lifetime of exploration",
    buttons: ["Shop Adventure", "View Stories"],
  },
  {
    src: "https://images.unsplash.com/photo-1557559681-09dcd1e8a06e?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Sustainable, innovative design for conscious travelers",
    buttons: ["Explore Collection", "Learn More"],
  },
  {
    src: "https://images.unsplash.com/photo-1595330107628-ad6afc84f36e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Adventure awaits, gear up for the journey ahead",
    buttons: ["Shop Now", "View Guide"],
  },
];

export default function StackedTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);

  // Handle window resize and initial mobile detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Check on mount
    checkMobile();

    // Add resize listener
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const x = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 18 });

  // Gesture handling
  const bind = useDrag(
    ({ movement: [mx], direction: [dx], down, cancel }) => {
      const threshold = 100;

      if (
        (dx > 0 && activeIndex === 0) ||
        (dx < 0 && activeIndex === images.length - 1)
      ) {
        cancel();
      }

      const mobileThreshold = isMobile ? 50 : threshold;

      if (!down && Math.abs(mx) > mobileThreshold) {
        if (mx > 0) {
          // Swipe right
          if (activeIndex > 0) {
            setActiveIndex(activeIndex - 1);
          }
        } else {
          // Swipe left
          if (activeIndex < images.length - 1) {
            setActiveIndex(activeIndex + 1);
          }
        }
      }

      springX.set(down ? mx : 0);
    },
    {
      axis: "x",
      bounds: { left: -300, right: 300 },
      threshold: 10,
      // Enhanced mobile support
      filterTaps: false,
      pointer: { touch: true },
    },
  );

  const buttonWidth = 96;
  const mobileButtonWidth = 64; // Smaller width for mobile
  const currentButtonWidth = isMobile ? mobileButtonWidth : buttonWidth;
  const inactiveTabsWidth = (images.length - 1) * currentButtonWidth;

  return (
    <div
      className="relative mx-auto h-[280px] w-full max-w-[500px] touch-pan-x overflow-hidden rounded-2xl sm:h-[350px] sm:max-w-[600px] md:h-[400px] md:max-w-[700px] md:rounded-3xl"
      ref={containerRef}
      style={
        {
          "--button-width": `${currentButtonWidth}px`,
          "--total-tabs": images.length,
          "--active-index": activeIndex,
          "--inactive-tabs-width": `${inactiveTabsWidth}px`,
          touchAction: "pan-x",
        } as React.CSSProperties
      }
      {...bind()}
    >
      {/* Panels */}
      <div className="flex h-full">
        {images.map((image, idx) => {
          const isActive = idx === activeIndex;
          const isLeftOfActive = idx < activeIndex;
          const isRightOfActive = idx > activeIndex;

          let zIndex;
          if (isActive) {
            zIndex = 20;
          } else if (isLeftOfActive) {
            zIndex = 10 + idx;
          } else {
            zIndex = 10 + (images.length - idx);
          }

          return (
            <motion.div
              key={idx}
              className={cn(
                "relative h-full cursor-pointer overflow-hidden",
                isActive ? "cursor-default" : "cursor-grab",
              )}
              style={{
                zIndex: zIndex,
                marginLeft: idx > 0 ? "-24px" : "0",
              }}
              animate={{
                width: isActive
                  ? `calc(100% - ${inactiveTabsWidth}px)`
                  : `${currentButtonWidth}px`,
              }}
              initial={false}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 35,
                mass: 0.8,
                duration: 0.3,
              }}
              onClick={(e) => {
                e.stopPropagation();
                setActiveIndex(idx);
              }}
              onPointerDown={(e) => {
                e.stopPropagation();
              }}
              role="button"
              tabIndex={0}
              aria-label={`Show slide ${idx + 1}`}
            >
              {/* Panel Control */}
              <div
                className={cn(
                  "absolute top-0 bottom-0 overflow-hidden border-2 border-white/20",
                  isActive && "right-0 left-0 rounded-[2rem]",

                  !isActive && {
                    // Images to the left of active
                    "right-0 rounded-l-[2rem]": isLeftOfActive,
                    // Images to the right of active
                    "left-0 rounded-r-[2rem]": isRightOfActive,
                  },
                )}
                style={{
                  width: isActive ? "100%" : `${currentButtonWidth}px`,
                  ...(isActive
                    ? {}
                    : {
                        left: isLeftOfActive ? "0" : "auto",
                        right: isRightOfActive ? "0" : "auto",
                      }),
                }}
              >
                <img
                  src={image.src}
                  alt={`Slide ${idx + 1}`}
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Content */}
                {isActive && (
                  <motion.div
                    className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 md:p-8"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.2,
                    }}
                  >
                    <div className="text-content">
                      <motion.h3
                        className="mb-3 text-lg leading-tight font-light text-white sm:mb-4 sm:text-xl md:mb-6 md:text-3xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.4,
                          delay: 0.3,
                        }}
                      >
                        {image.title}
                      </motion.h3>
                      <motion.div
                        className="flex flex-col gap-2 sm:flex-row sm:gap-3 md:gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.4,
                          delay: 0.4,
                        }}
                      >
                        {image.buttons.map((buttonText, buttonIdx) => (
                          <button
                            key={buttonIdx}
                            className="rounded-full border-2 border-white bg-transparent px-3 py-1.5 text-xs font-medium text-white transition-all hover:bg-white hover:text-black sm:px-4 sm:py-2 sm:text-sm md:px-6"
                          >
                            {buttonText}
                          </button>
                        ))}
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      <AnimatePresence>
        <motion.div
          style={{ x: springX }}
          className="pointer-events-none absolute inset-0"
        />
      </AnimatePresence>
    </div>
  );
}
