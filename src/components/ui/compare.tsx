"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { SparklesCore } from "./Sparkles";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";
import { IconDotsVertical } from "@tabler/icons-react";

interface CompareProps {
  firstImage?: string;
  secondImage?: string;
  className?: string;
  firstImageClassName?: string;
  secondImageClassname?: string;
  initialSliderPercentage?: number;
  slideMode?: "hover" | "drag";
  showHandlebar?: boolean;
  autoplay?: boolean;
  autoplayDuration?: number;
}

export const Compare = ({
  firstImage = "",
  secondImage = "",
  className,
  firstImageClassName,
  secondImageClassname,
  initialSliderPercentage = 50,
  slideMode = "hover",
  showHandlebar = true,
  autoplay = false,
  autoplayDuration = 5000,
}: CompareProps) => {
  const [sliderXPercent, setSliderXPercent] = useState(initialSliderPercentage);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoplay = useCallback(() => {
    if (!autoplay) return;
    const startTime = Date.now();
    const animate = () => {
      const elapsedTime = Date.now() - startTime;
      const progress = (elapsedTime % (autoplayDuration * 2)) / autoplayDuration;
      const percentage = progress <= 1 ? progress * 100 : (2 - progress) * 100;
      setSliderXPercent(percentage);
      autoplayRef.current = setTimeout(animate, 16);
    };
    animate();
  }, [autoplay, autoplayDuration]);

  const stopAutoplay = useCallback(() => {
    if (autoplayRef.current) {
      clearTimeout(autoplayRef.current);
      autoplayRef.current = null;
    }
  }, []);

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, [startAutoplay, stopAutoplay]);

  const handleMove = useCallback((clientX: number) => {
    if (!sliderRef.current) return;
    if (slideMode === "hover" || (slideMode === "drag" && isDragging)) {
      const rect = sliderRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const percent = (x / rect.width) * 100;
      requestAnimationFrame(() => {
        setSliderXPercent(Math.max(0, Math.min(100, percent)));
      });
    }
  }, [slideMode, isDragging]);

  return (
    <div
      ref={sliderRef}
      className={cn("w-[400px] h-[400px] overflow-hidden rounded-3xl shadow-2xl  dark:border-neutral-800", className)}
      style={{
        position: "relative",
        cursor: slideMode === "drag" ? "grab" : "col-resize",
      }}
      onMouseMove={(e) => handleMove(e.clientX)}
      onMouseLeave={() => {
        if (slideMode === "hover") setSliderXPercent(initialSliderPercentage);
        setIsDragging(false);
        startAutoplay();
      }}
      onMouseEnter={stopAutoplay}
      onMouseDown={(e) => slideMode === "drag" && setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onTouchStart={(e) => !autoplay && slideMode === "drag" && setIsDragging(true)}
      onTouchEnd={() => setIsDragging(false)}
      onTouchMove={(e) => !autoplay && handleMove(e.touches[0].clientX)}
    >
      {/* Percentage Indicator - Glassmorphism */}
      <div className="absolute bottom-4 left-4 z-50 bg-white/10 backdrop-blur-md px-5 py-1.5 rounded-xl border border-white/20 shadow-xl pointer-events-none">
        <span className="text-[#BCA88D] text-[14px] font-mono font-bold tracking-tighter drop-shadow-md">
          {Math.round(sliderXPercent)}%
        </span>
      </div>

      <AnimatePresence initial={false}>
        <motion.div
          className="h-full w-px absolute  top-0 m-auto z-30 bg-gradient-to-b from-transparent  to-transparent"
          style={{ left: `${sliderXPercent}%`, zIndex: 40 }}
          transition={{ duration: 0 }}
        >
          <div className="w-10 h-3/4 top-1/2 -translate-y-1/2 absolute -right-10 [mask-image:radial-gradient(100px_at_left,white,transparent)]">
            <MemoizedSparklesCore background="transparent" minSize={0.4} maxSize={1} particleDensity={1200} className="w-full h-full" particleColor="#FFFFFF" />
          </div>
          {showHandlebar && (
            <div className="h-5 w-5 rounded-md top-1/2 -translate-y-1/2 bg-white z-30 -right-2.5 absolute flex items-center justify-center shadow-lg">
              <IconDotsVertical className="h-4 w-4 text-black" />
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* First Image Container */}
      <div className="overflow-hidden w-full h-full relative z-20 pointer-events-none">
        {firstImage && (
          <motion.div
            className={cn("absolute inset-0 z-20 w-full h-full select-none overflow-hidden", firstImageClassName)}
            style={{ clipPath: `inset(0 ${100 - sliderXPercent}% 0 0)` }}
            transition={{ duration: 0 }}
          >
            <img 
              alt="First" 
              src={firstImage} 
              className="absolute inset-0 w-full h-full " 
              draggable={false} 
            />
          </motion.div>
        )}
      </div>

      {/* Second Image (Base Layer) */}
      {secondImage && (
        <img 
          alt="Second" 
          src={secondImage} 
          className={cn("absolute top-0 left-0 z-[19] w-full h-full select-none ", secondImageClassname)} 
          draggable={false} 
        />
      )}
    </div>
  );
};

const MemoizedSparklesCore = React.memo(SparklesCore);