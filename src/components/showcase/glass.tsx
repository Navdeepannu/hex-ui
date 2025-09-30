import React from "react";
import { motion } from "motion/react";
const Glass = ({ layers = 10, baseSize = 100 }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-80 h-[500px] bg-black text-white rounded-2xl p-6  flex flex-col justify-between shadow-lg relative overflow-hidden">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-semibold">7</h1>
          <p className="text-lg">System</p>
          <p className="text-sm text-gray-400">Coordinates</p>
        </div>

        {/* Layered Squares with Depth Effect */}
        <div
          className="flex justify-center items-center relative h-60"
          style={{ perspective: "1000px" }}
        >
          <div className="relative" style={{ transformStyle: "preserve-3d" }}>
            {[...Array(layers)].map((_, i) => {
              const size = baseSize - i * 8; // Decrease size as we go deeper
              const depth = i * 15; // Z-axis depth
              const rotation = i * 3; // Slight rotation for each layer
              const opacity = 1 - i * 0.08; // Fade towards back

              return (
                <motion.div
                  key={i}
                  className="absolute border border-white/70"
                  style={{
                    width: `${size}px`,
                    height: `${size}px`,
                    left: "50%",
                    top: "50%",
                    transform: `
                      translate(-50%, -50%) 
                      translateZ(${-depth}px) 
                      rotateX(${rotation}deg) 
                      rotateY(${rotation * 0.5}deg)
                      rotateZ(${rotation * 0.3}deg)
                    `,
                    backgroundColor: `rgba(255, 255, 255, ${opacity * 0.05})`,
                    borderColor: `rgba(255, 255, 255, ${opacity * 0.7})`,
                    borderWidth: "1px",
                    borderRadius: "4px",
                  }}
                  initial={{
                    scale: 0,
                    rotateZ: 180,
                    opacity: 0,
                  }}
                  animate={{
                    scale: 1,
                    rotateZ: rotation * 0.3,
                    opacity: opacity,
                  }}
                  transition={{
                    delay: i * 0.05,
                    duration: 0.8,
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                  }}
                />
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div>
          <p className="text-md font-medium">Orientation</p>
          <p className="text-sm text-gray-400">
            Orbit around to see the depth of the card.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Glass;
