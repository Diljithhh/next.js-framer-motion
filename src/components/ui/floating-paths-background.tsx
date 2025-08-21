"use client";

import { motion } from "framer-motion";
import { useMemo, memo } from "react";

interface FloatingPathsProps {
  position: number;
}

const FloatingPaths = memo(({ position }: FloatingPathsProps) => {
  // Memoize path data for better performance
  const paths = useMemo(() => Array.from({ length: 18 }, (_, index) => ({
    id: index,
    pathData: `M-${380 - index * 5 * position} -${189 + index * 6}C-${
      380 - index * 5 * position
    } -${189 + index * 6} -${312 - index * 5 * position} ${216 - index * 6} ${
      152 - index * 5 * position
    } ${343 - index * 6}C${616 - index * 5 * position} ${470 - index * 6} ${
      684 - index * 5 * position
    } ${875 - index * 6} ${684 - index * 5 * position} ${875 - index * 6}`,
    // Enhanced visibility colors - adjust these RGB values for different colors
    strokeColor: `rgba(59, 130, 246, ${0.3 + index * 0.03})`, // Blue color with better opacity progression
    strokeWidth: 0.8 + index * 0.08, // More varied line thickness
  })), [position]); // Dependency array for useMemo

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg
        className="w-full h-full text-white/80"
        viewBox="0 0 696 316"
        fill="none"
      >
        <title>Floating Background Paths</title>
        {paths.map((pathConfig) => (
          <motion.path
            key={pathConfig.id}
            d={pathConfig.pathData}
            stroke={pathConfig.strokeColor} // Use custom color instead of currentColor
            strokeWidth={pathConfig.strokeWidth}
            strokeOpacity={0.5 + pathConfig.id * 0.03} // Optimized opacity for fewer paths
            initial={{ pathLength: 0.3, opacity: 0 }}
            animate={{
              pathLength: 1,
              opacity: [0.4, 0.8, 0.4], // Higher opacity range for better visibility
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 15 + (pathConfig.id % 8) * 2, // Faster, more varied timing for fewer paths
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              delay: 1.5 + pathConfig.id * 0.15, // Slightly faster start with more stagger
            }}
          />
        ))}
      </svg>
    </div>
  );
});

FloatingPaths.displayName = "FloatingPaths";

interface FloatingPathsBackgroundProps {
  className?: string;
}

export const FloatingPathsBackground = memo(({
  className = "",
}: FloatingPathsBackgroundProps) => {
  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      {/* Animated background paths only */}
      <div className="absolute inset-0">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>
    </div>
  );
});

FloatingPathsBackground.displayName = "FloatingPathsBackground";

export default FloatingPathsBackground;
