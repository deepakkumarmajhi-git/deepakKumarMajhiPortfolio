"use client";

import React, { useState, useEffect } from "react";
import { motion, PanInfo } from "framer-motion";

export interface CarouselSlide {
  id: string;
  image: string;
  title: string;
}

const SLIDES: CarouselSlide[] = [
  {
    id: "summit-delhi",
    image: "/images/memories/summit-1.jpg",
    title: "AI Impact Summit",
  },
  {
    id: "hackfest-gec",
    image: "/images/memories/gdg-1.jpg",
    title: "GEC Hackathon 2026",
  },

  {
    id: "gdg-hackfest",
    image: "/images/memories/gec-1.jpg",
    title: "GDG HackFest",
  },
  {
    id: "summit-collab",
    image: "/images/memories/office-1.jpg",
    title: "Team Collaboration",
  },
  {
    id: "gdg-sprint",
    image: "/images/memories/gdg-2.jpg",
    title: "Sprint Prototype",
  },
];

export default function EventCarouselVideoFrame() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const total = SLIDES.length;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  // Smooth auto-advancing carousel loop with pause-on-hover
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 3600);
    return () => clearInterval(timer);
  }, [isPaused, total]);

  // Touch & drag gestures
  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const swipeThreshold = 40;
    if (info.offset.x < -swipeThreshold || info.velocity.x < -300) {
      nextSlide();
    } else if (info.offset.x > swipeThreshold || info.velocity.x > 300) {
      prevSlide();
    }
  };

  return (
    <div
      className="relative w-full py-2 select-none flex flex-col items-center justify-center overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Coverflow Perspective Stage with true optical depth */}
      <div className="relative w-full h-[270px] sm:h-[310px] md:h-[330px] flex items-center justify-center [perspective:1000px]">
        {SLIDES.map((slide, index) => {
          // Calculate circular offset relative to currentIndex (-2, -1, 0, 1, 2)
          let offset = index - currentIndex;
          if (offset > total / 2) offset -= total;
          if (offset < -total / 2) offset += total;

          const isActive = offset === 0;
          const isImmediateNeighbor = Math.abs(offset) === 1;

          // Only render cards within visible range (-2 to +2)
          if (Math.abs(offset) > 2) return null;

          // Physically accurate spatial displacement matching reference
          let xPercent = 0;
          let scale = 1;
          let zIndex = 30;
          let opacity = 1;
          let rotateY = 0;

          if (offset === 0) {
            xPercent = 0;
            scale = 1.04;
            zIndex = 30;
            opacity = 1;
            rotateY = 0;
          } else if (offset === -1) {
            xPercent = -56;
            scale = 0.88;
            zIndex = 20;
            opacity = 0.82;
            rotateY = 4;
          } else if (offset === 1) {
            xPercent = 56;
            scale = 0.88;
            zIndex = 20;
            opacity = 0.82;
            rotateY = -4;
          } else if (offset === -2) {
            xPercent = -98;
            scale = 0.76;
            zIndex = 10;
            opacity = 0.45;
            rotateY = 8;
          } else if (offset === 2) {
            xPercent = 98;
            scale = 0.76;
            zIndex = 10;
            opacity = 0.45;
            rotateY = -8;
          }

          return (
            <motion.div
              key={slide.id}
              onClick={() => {
                if (!isActive) setCurrentIndex(index);
              }}
              drag={isActive ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={isActive ? handleDragEnd : undefined}
              style={{
                zIndex,
                transformStyle: "preserve-3d",
              }}
              animate={{
                x: `${xPercent}%`,
                scale,
                opacity,
                rotateY,
              }}
              transition={{
                x: { type: "spring", stiffness: 180, damping: 24, mass: 0.8 },
                scale: { type: "spring", stiffness: 180, damping: 24, mass: 0.8 },
                rotateY: { type: "spring", stiffness: 180, damping: 24, mass: 0.8 },
                opacity: { duration: 0.35, ease: "easeOut" },
              }}
              className={`absolute top-0 bottom-0 my-auto w-[165px] sm:w-[195px] md:w-[215px] h-[235px] sm:h-[280px] md:h-[305px] rounded-2xl sm:rounded-[22px] overflow-hidden cursor-pointer border-0 transition-[box-shadow] duration-500 will-change-transform ${isActive
                  ? "shadow-[0_24px_50px_-12px_rgba(0,0,0,0.45),0_12px_24px_-8px_rgba(0,0,0,0.25),0_2px_6px_rgba(0,0,0,0.12)] cursor-grab active:cursor-grabbing"
                  : isImmediateNeighbor
                    ? "shadow-[0_14px_30px_-10px_rgba(0,0,0,0.25),0_4px_12px_-4px_rgba(0,0,0,0.15)] hover:opacity-95"
                    : "shadow-[0_6px_18px_-6px_rgba(0,0,0,0.18)]"
                }`}
            >
              {/* Pure Photographic Content with zero artificial borders or glows */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={slide.image}
                alt={slide.title}
                draggable={false}
                className="w-full h-full object-cover pointer-events-none select-none transition-transform duration-700 ease-out hover:scale-105"
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
