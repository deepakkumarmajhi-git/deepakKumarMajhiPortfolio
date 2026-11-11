"use client";

import React, { useState } from "react";
import { Layers, Compass, Sparkles } from "lucide-react";

export function IcebergDiagram() {
  const [hoveredZone, setHoveredZone] = useState<"top" | "bottom" | null>(null);

  return (
    <div className="w-full max-w-lg mx-auto border border-[#192434]/15 bg-white/70 p-5 sm:p-6 shadow-[0_4px_24px_rgba(25,36,52,0.03)] font-mono">
      {/* Header Bar */}
      <div className="flex items-center justify-between pb-4 border-b border-[#192434]/10 text-xs">
        <div className="flex items-center gap-2 text-[#192434]">
          <Layers className="w-4 h-4 text-[#0B46A3]" />
          <span className="font-semibold uppercase tracking-wider text-[11px] sm:text-xs">
            ARCHITECTURAL CROSS-SECTION // DEPTH MAP
          </span>
        </div>
        <span className="text-[10px] text-[#0B46A3] bg-[#0B46A3]/5 px-2 py-0.5 border border-[#0B46A3]/20">
          SYS_BLUEPRINT
        </span>
      </div>

      {/* SVG Diagram Stage */}
      <div className="relative my-4 w-full h-[320px] sm:h-[350px] bg-[#F4F7FA]/70 border border-[#192434]/10 overflow-hidden select-none">
        {/* Subtle Background Grid Pattern */}
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(#192434 0.75px, transparent 0.75px)",
            backgroundSize: "12px 12px",
          }}
        />

        {/* CAD Corner Ticks */}
        <span className="absolute top-1 left-1.5 text-[9px] text-[#192434]/30">+</span>
        <span className="absolute top-1 right-1.5 text-[9px] text-[#192434]/30">+</span>
        <span className="absolute bottom-1 left-1.5 text-[9px] text-[#192434]/30">+</span>
        <span className="absolute bottom-1 right-1.5 text-[9px] text-[#192434]/30">+</span>

        {/* SVG Drawing */}
        <svg
          viewBox="0 0 400 320"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient id="icebergTop" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0B46A3" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#0B46A3" stopOpacity="0.08" />
            </linearGradient>
            <linearGradient id="icebergBottom" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#192434" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#192434" stopOpacity="0.03" />
            </linearGradient>
          </defs>

          {/* Above-Water Peak Polygon */}
          <polygon
            points="200,28 238,98 162,98"
            fill="url(#icebergTop)"
            stroke="#0B46A3"
            strokeWidth="1.5"
            strokeLinejoin="round"
            className="cursor-pointer transition-all duration-300 hover:opacity-90"
            onMouseEnter={() => setHoveredZone("top")}
            onMouseLeave={() => setHoveredZone(null)}
          />

          {/* Below-Water Mass Faceted Polygons */}
          <g
            className="cursor-pointer transition-all duration-300"
            onMouseEnter={() => setHoveredZone("bottom")}
            onMouseLeave={() => setHoveredZone(null)}
          >
            <polygon
              points="162,98 238,98 275,190 200,285 125,190"
              fill="url(#icebergBottom)"
              stroke="#192434"
              strokeWidth="1.5"
              strokeLinejoin="round"
              strokeDasharray={hoveredZone === "bottom" ? "none" : "none"}
            />
            {/* Geometric Facet Lines */}
            <line
              x1="200"
              y1="98"
              x2="200"
              y2="285"
              stroke="#192434"
              strokeWidth="1"
              strokeOpacity="0.25"
              strokeDasharray="3 3"
            />
            <line
              x1="162"
              y1="98"
              x2="200"
              y2="190"
              stroke="#192434"
              strokeWidth="1"
              strokeOpacity="0.25"
            />
            <line
              x1="238"
              y1="98"
              x2="200"
              y2="190"
              stroke="#192434"
              strokeWidth="1"
              strokeOpacity="0.25"
            />
            <line
              x1="125"
              y1="190"
              x2="200"
              y2="190"
              stroke="#192434"
              strokeWidth="1"
              strokeOpacity="0.25"
            />
            <line
              x1="275"
              y1="190"
              x2="200"
              y2="190"
              stroke="#192434"
              strokeWidth="1"
              strokeOpacity="0.25"
            />
          </g>

          {/* Waterline Horizontal Divider Line */}
          <line
            x1="15"
            y1="98"
            x2="385"
            y2="98"
            stroke="#0B46A3"
            strokeWidth="1.25"
            strokeDasharray="4 4"
          />

          {/* Waterline Annotation */}
          <text
            x="20"
            y="92"
            fill="#0B46A3"
            fontSize="9"
            fontWeight="600"
            fontFamily="monospace"
            letterSpacing="0.05em"
          >
            Y=0.00 // WATERLINE (PERCEPTION THRESHOLD)
          </text>
        </svg>

        {/* Floating Callout 1: Top (20%) */}
        <div
          className={`absolute top-4 right-3 max-w-[155px] p-2 bg-white/95 border transition-all duration-200 text-[10px] leading-tight ${
            hoveredZone === "top"
              ? "border-[#0B46A3] ring-1 ring-[#0B46A3]/30 shadow-md"
              : "border-[#0B46A3]/30 shadow-xs"
          }`}
        >
          <div className="flex items-center gap-1 font-bold text-[#0B46A3] pb-1 border-b border-[#0B46A3]/15">
            <Sparkles className="w-2.5 h-2.5" />
            <span>VISIBLE // 20%</span>
          </div>
          <ul className="pt-1.5 space-y-1 text-[#192434]/80 text-[9px]">
            <li>• Clean Minimalist UI</li>
            <li>• Sub-Second Responses</li>
            <li>• Working Live Demos</li>
          </ul>
        </div>

        {/* Floating Callout 2: Bottom Deep Craft (80%) */}
        <div
          className={`absolute bottom-3 left-3 max-w-[210px] p-2.5 bg-white/95 border transition-all duration-200 text-[10px] leading-tight ${
            hoveredZone === "bottom"
              ? "border-[#192434] ring-1 ring-[#192434]/30 shadow-md"
              : "border-[#192434]/25 shadow-xs"
          }`}
        >
          <div className="flex items-center gap-1 font-bold text-[#192434] pb-1 border-b border-[#192434]/15">
            <Compass className="w-2.5 h-2.5 text-[#0B46A3]" />
            <span>THE REAL CRAFT // 80%</span>
          </div>
          <ul className="pt-1.5 space-y-1 text-[#192434]/80 text-[9px]">
            <li>• Curiosity &amp; Deep Technical Reading</li>
            <li>• 3 AM Hackathon Debugging Grit</li>
            <li>• Dataset Cleaning &amp; Model Fine-Tuning</li>
            <li>• 60-Day Unscripted Speaking Discipline</li>
            <li>• Endless Coffee &amp; Systems Sketchbooks</li>
          </ul>
        </div>
      </div>

      {/* Footer Legend */}
      <div className="flex items-center justify-between text-[10px] text-[#192434]/60 pt-1">
        <span>RATIO: 1:4 OUTPUT DEPTH</span>
        <span className="text-[#0B46A3]">HOVER ZONES TO HIGHLIGHT</span>
      </div>
    </div>
  );
}

