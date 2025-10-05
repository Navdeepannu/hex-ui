"use client";
import React, { useState, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "motion/react";
import { useDrag } from "@use-gesture/react";
import { cn } from "@/lib/utils";

const images = [
  "https://images.unsplash.com/photo-1563388705-c240527afb77?q=80&w=1409&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1557559681-09dcd1e8a06e?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1595330107628-ad6afc84f36e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  // Add more images as needed
];

export default function StackedTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);

  // Animated position for drag interaction
  const x = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 18 });

  // Gesture handling
  const bind = useDrag(
    ({ movement: [mx], direction: [dx], down, cancel }) => {
      const threshold = 100;

      // Cancel the drag if we're at the boundaries to prevent unwanted behavior
      if (
        (dx > 0 && activeIndex === 0) ||
        (dx < 0 && activeIndex === images.length - 1)
      ) {
        cancel();
      }

      if (!down && Math.abs(mx) > threshold) {
        if (mx > 0) {
          // Swipe right - go to previous
          if (activeIndex > 0) {
            setActiveIndex(activeIndex - 1);
          }
        } else {
          // Swipe left - go to next
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
    },
  );
  return (
    <div
      className="relative mx-auto h-[360px] w-full overflow-hidden rounded-3xl sm:w-[720px]"
      ref={containerRef}
    >
      <div className="flex h-full w-full" {...bind()}>
        {images.map((img, idx) => {
          const isActive = idx === activeIndex;
          return (
            <motion.div
              key={img}
              layout
              animate={{
                flex: isActive ? 4 : 1,
                opacity: isActive ? 1 : 0.98,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
                duration: 0.3,
              }}
              className={cn(
                "relative h-full cursor-pointer overflow-hidden rounded-3xl first:ml-0",
                isActive ? "z-20" : "",
                // Adjusted margins to ensure visibility
                !isActive && idx < activeIndex ? "-ml-12" : "", // Images to the left of active (lighter overlap)
                !isActive && idx > activeIndex ? "-ml-8" : "", // Images to the right of active (minimal overlap)
              )}
              style={{
                minWidth: isActive ? "50%" : "120px",
                maxWidth: isActive ? "100%" : "160px",
                zIndex: isActive ? 20 : 10 + idx,
              }}
              onClick={() => setActiveIndex(idx)}
              tabIndex={0}
              role="button"
              aria-label={`Show image ${idx + 1}`}
            >
              <motion.img
                src={img}
                alt={`image ${idx + 1}`}
                className="h-full w-full object-cover"
                draggable={false}
              />
              {isActive && (
                <motion.div
                  className="absolute inset-0 flex flex-col justify-end p-8"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5 }}
                >
                  <div>
                    <h3 className="mb-3 text-3xl font-light text-white">
                      Crafted for adventure, built to last a lifetime of
                      exploration
                    </h3>
                    <div className="flex space-x-4">
                      <button className="rounded-full border border-white/50 px-5 py-2 text-base font-medium text-white transition hover:border-white">
                        Shop Adventure
                      </button>
                      <button className="rounded-full border border-white/50 px-5 py-2 text-base font-medium text-white transition hover:border-white">
                        View Stories
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>
      {/* Drag overlay for mobile (optional visual) */}
      <AnimatePresence>
        <motion.div
          style={{ x: springX }}
          className="pointer-events-none absolute inset-0"
        />
      </AnimatePresence>
    </div>
  );
}
