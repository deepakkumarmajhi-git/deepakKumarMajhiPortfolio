"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Camera } from "lucide-react";

export interface PhotoCardItem {
  id: string;
  src?: string;
  caption?: string;
  tag?: string;
  aspect?: string;
  rotation: number;
  offsetX: number;
  offsetY: number;
  fannedRotation?: number;
  fannedX?: number;
  fannedY?: number;
}

interface PhotoCollageFrameProps {
  photos: PhotoCardItem[];
  className?: string;
}

export function ArchitecturalPhotoCard({
  photo,
  isActive,
  isHovered,
  onClick,
  zIndex,
}: {
  photo: PhotoCardItem;
  isActive: boolean;
  isHovered: boolean;
  onClick: () => void;
  zIndex: number;
}) {
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    setImgError(false);
  }, [photo.src]);

  // Dynamic transforms based on hover/fanned state
  const rot = isHovered ? (photo.fannedRotation ?? photo.rotation * 1.5) : photo.rotation;
  const x = isHovered ? (photo.fannedX ?? photo.offsetX * 1.4) : photo.offsetX;
  const y = isHovered ? (photo.fannedY ?? photo.offsetY * 1.2) : photo.offsetY;

  return (
    <motion.div
      layout
      onClick={onClick}
      style={{ zIndex }}
      initial={{ rotate: photo.rotation, x: photo.offsetX, y: photo.offsetY }}
      animate={{
        rotate: rot,
        x,
        y,
        scale: isActive ? 1.03 : 1,
      }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className={`absolute w-[240px] sm:w-[280px] cursor-pointer select-none rounded-[2px] bg-white p-2 border transition-shadow duration-300 ${
        isActive
          ? "border-[#0B46A3] shadow-[0_16px_36px_-10px_rgba(11,70,163,0.22)] ring-1 ring-[#0B46A3]/30"
          : "border-[#192434]/20 shadow-[0_10px_25px_-10px_rgba(25,36,52,0.12)] hover:border-[#192434]/40"
      }`}
    >
      {/* Photo / Blueprint Placeholder Stage */}
      <div
        className={`relative w-full ${photo.aspect || "aspect-[4/3]"} overflow-hidden border border-[#192434]/15 bg-[#F4F7FA]`}
      >
        {photo.src && !imgError ? (
          // Real Image if loaded
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={photo.src}
            alt={photo.caption || "Photo"}
            onError={() => setImgError(true)}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        ) : (
          /* Blueprint Placeholder */
          <div className="relative w-full h-full flex flex-col items-center justify-center p-3 bg-[#F4F7FA] select-none">
            {/* Subtle Grid */}
            <div
              className="absolute inset-0 pointer-events-none opacity-40"
              style={{
                backgroundImage:
                  "radial-gradient(#192434 0.75px, transparent 0.75px)",
                backgroundSize: "10px 10px",
              }}
            />

            {/* Corner Ticks */}
            <span className="absolute top-1 left-1.5 font-mono text-[10px] text-[#192434]/40 leading-none">+</span>
            <span className="absolute top-1 right-1.5 font-mono text-[10px] text-[#192434]/40 leading-none">+</span>
            <span className="absolute bottom-1 left-1.5 font-mono text-[10px] text-[#192434]/40 leading-none">+</span>
            <span className="absolute bottom-1 right-1.5 font-mono text-[10px] text-[#192434]/40 leading-none">+</span>

            <div className="relative z-10 flex flex-col items-center text-center px-1 my-auto">
              <div className="w-8 h-8 rounded-full border border-[#0B46A3]/30 bg-white/80 flex items-center justify-center text-[#0B46A3] shadow-xs">
                <Camera className="w-4 h-4 text-[#0B46A3]" />
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export function PhotoCollageFrame({
  photos,
  className = "",
}: PhotoCollageFrameProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [activeCardId, setActiveCardId] = useState<string>(
    photos[0]?.id ?? ""
  );

  return (
    <div
      className={`relative w-full max-w-[440px] h-[360px] sm:h-[400px] flex items-center justify-center p-4 border border-[#192434]/10 bg-white/40 shadow-xs ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(!isHovered)}
    >
      {/* Corner Ticks */}
      <span className="absolute -top-1.5 -left-1.5 font-mono text-xs text-[#0B46A3] font-bold">+</span>
      <span className="absolute -top-1.5 -right-1.5 font-mono text-xs text-[#0B46A3] font-bold">+</span>
      <span className="absolute -bottom-1.5 -left-1.5 font-mono text-xs text-[#0B46A3] font-bold">+</span>
      <span className="absolute -bottom-1.5 -right-1.5 font-mono text-xs text-[#0B46A3] font-bold">+</span>

      {/* Stacked Cards Container */}
      <div className="relative w-[260px] sm:w-[280px] h-[260px] sm:h-[280px] flex items-center justify-center">
        {photos.map((photo, index) => {
          const isActive = photo.id === activeCardId;
          const zIndex = isActive ? 30 : index + 1;
          return (
            <ArchitecturalPhotoCard
              key={photo.id}
              photo={photo}
              isActive={isActive}
              isHovered={isHovered}
              onClick={() => setActiveCardId(photo.id)}
              zIndex={zIndex}
            />
          );
        })}
      </div>
    </div>
  );
}
