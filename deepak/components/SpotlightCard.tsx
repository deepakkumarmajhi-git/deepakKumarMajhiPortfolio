"use client";

import React, { useRef } from "react";

export function SpotlightCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`group relative flex h-full flex-col justify-between overflow-hidden border border-[#192434]/10 bg-[#F4F7FA] transition-all duration-300 ease-out hover:-translate-y-[2px] hover:bg-white/75 hover:shadow-[0_10px_30px_-15px_rgba(11,70,163,0.14)] ${className}`}
    >
      {/* Subtle Surface Radial Glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(480px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(11, 70, 163, 0.05), transparent 40%)",
        }}
      />

      {/* Crisp 1px Directional Cobalt Blue Border Spotlight */}
      <div
        className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          padding: "1px",
          background:
            "radial-gradient(260px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(11, 70, 163, 0.85), transparent 100%)",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />

      {/* Card Content */}
      <div className="relative z-20 flex h-full flex-col justify-between">
        {children}
      </div>
    </div>
  );
}

export default SpotlightCard;

