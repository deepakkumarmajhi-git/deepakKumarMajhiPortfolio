"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function VisualFrame() {
  const [activeNode, setActiveNode] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % 5);
    }, 1800);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-full min-h-[460px] lg:min-h-[580px] bg-[#101722] text-[#F4F7FA] overflow-hidden flex flex-col justify-between p-4 sm:p-6 select-none font-mono">
      {/* Subtle blueprint grid overlay */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: '24px 24px'
        }}
      />

      {/* Top Header of Frame */}
      <div className="relative z-10 flex items-center justify-between text-[11px] text-white/50 tracking-wider border-b border-white/10 pb-3">
        <span className="flex items-center gap-1.5 text-white/80">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0B46A3] ring-2 ring-[#0B46A3]/30"></span>
          IMG_REF_04
        </span>
        <span className="text-white/40">+09. 2007.16</span>
      </div>

      {/* Center Architectural Illustration / Network Topology */}
      <div className="relative z-10 my-auto py-6 flex flex-col items-center justify-center">
        {/* Model Training Network HUD Card */}
        <div className="w-full max-w-md bg-[#16202E]/90 border border-white/10 p-5 shadow-2xl backdrop-blur-md">
          {/* Card Topline */}
          <div className="flex items-center justify-between text-[10px] text-white/40 border-b border-white/10 pb-2 mb-4">
            <span className="text-white/70">Model Training Network</span>
            <span className="text-[#38BDF8]">EPOCH 128 / 500 • CONVERGED</span>
          </div>

          {/* SVG Neural Architecture Diagram */}
          <svg
            viewBox="0 0 340 130"
            className="w-full h-auto text-white/80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Connection Lines */}
            <path d="M 40 30 L 100 45 L 180 35 L 260 50 L 310 65" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="2 2" />
            <path d="M 40 65 L 100 45 L 180 75 L 260 50 L 310 65" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
            <path d="M 40 100 L 100 85 L 180 75 L 260 80 L 310 65" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="3 3" />
            <path d="M 100 45 L 180 35 L 260 80" stroke="rgba(11, 70, 163, 0.4)" strokeWidth="1.5" />
            <path d="M 100 85 L 180 75 L 260 50" stroke="rgba(11, 70, 163, 0.4)" strokeWidth="1.5" />

            {/* Input Nodes Layer */}
            <g>
              <rect x="25" y="18" width="30" height="24" rx="2" fill="#1C293A" stroke="rgba(255,255,255,0.2)" />
              <text x="40" y="34" fontSize="8" fill="#94A3B8" textAnchor="middle" fontFamily="monospace">x₁</text>

              <rect x="25" y="53" width="30" height="24" rx="2" fill="#1C293A" stroke="rgba(255,255,255,0.2)" />
              <text x="40" y="69" fontSize="8" fill="#94A3B8" textAnchor="middle" fontFamily="monospace">x₂</text>

              <rect x="25" y="88" width="30" height="24" rx="2" fill="#1C293A" stroke="rgba(255,255,255,0.2)" />
              <text x="40" y="104" fontSize="8" fill="#94A3B8" textAnchor="middle" fontFamily="monospace">x₃</text>
            </g>

            {/* Hidden Layer 1 - Tensor Projections */}
            <g>
              <rect x="90" y="32" width="22" height="26" rx="2" fill="#1E2E42" stroke={activeNode === 1 ? "#38BDF8" : "rgba(255,255,255,0.2)"} />
              <text x="101" y="48" fontSize="8" fill="#E2E8F0" textAnchor="middle" fontFamily="monospace">H₁</text>

              <rect x="90" y="72" width="22" height="26" rx="2" fill="#1E2E42" stroke={activeNode === 2 ? "#38BDF8" : "rgba(255,255,255,0.2)"} />
              <text x="101" y="88" fontSize="8" fill="#E2E8F0" textAnchor="middle" fontFamily="monospace">H₂</text>
            </g>

            {/* Latent Attention Multi-Head */}
            <g>
              <rect x="165" y="20" width="32" height="30" rx="3" fill="#1E293B" stroke="#0B46A3" strokeWidth="1.5" />
              <text x="181" y="38" fontSize="8" fill="#38BDF8" textAnchor="middle" fontFamily="monospace">MHA</text>

              <rect x="165" y="62" width="32" height="30" rx="3" fill="#1E293B" stroke="rgba(255,255,255,0.2)" />
              <text x="181" y="80" fontSize="8" fill="#94A3B8" textAnchor="middle" fontFamily="monospace">FFN</text>
            </g>

            {/* Residual / Feedforward */}
            <g>
              <rect x="245" y="35" width="28" height="28" rx="2" fill="#1C293A" stroke={activeNode === 3 ? "#38BDF8" : "rgba(255,255,255,0.2)"} />
              <text x="259" y="52" fontSize="8" fill="#E2E8F0" textAnchor="middle" fontFamily="monospace">LN</text>

              <rect x="245" y="70" width="28" height="28" rx="2" fill="#1C293A" stroke={activeNode === 4 ? "#38BDF8" : "rgba(255,255,255,0.2)"} />
              <text x="259" y="87" fontSize="8" fill="#E2E8F0" textAnchor="middle" fontFamily="monospace">RMS</text>
            </g>

            {/* Output Projection */}
            <g>
              <circle cx="310" cy="65" r="14" fill="#0B46A3" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
              <text x="310" y="68" fontSize="8" fill="#FFFFFF" textAnchor="middle" fontFamily="monospace">ŷ</text>
            </g>
          </svg>

          {/* Telemetry Readout */}
          <div className="grid grid-cols-3 gap-2 mt-4 pt-3 border-t border-white/10 text-[9px] text-white/50">
            <div>
              <span className="block text-white/30">LOSS</span>
              <span className="text-white font-mono">0.0142</span>
            </div>
            <div>
              <span className="block text-white/30">TFLOPS</span>
              <span className="text-white font-mono">312.4</span>
            </div>
            <div>
              <span className="block text-white/30">KV_CACHE</span>
              <span className="text-[#38BDF8] font-mono">OPTIMAL</span>
            </div>
          </div>
        </div>

        {/* Minimal Workstation Preview Representation */}
        <div className="w-full max-w-md mt-4 grid grid-cols-2 gap-3">
          {/* Monitor 1: Code / Architecture view */}
          <div className="bg-[#141C28] border border-white/10 p-3 h-28 flex flex-col justify-between">
            <div className="flex items-center justify-between text-[8px] text-white/40 pb-1.5 border-b border-white/5">
              <span>main.py • inference</span>
              <span className="text-[#38BDF8]">READY</span>
            </div>
            <div className="space-y-1 font-mono text-[9px] text-white/60 leading-tight">
              <p className="text-white/40">// tensor dispatch</p>
              <p><span className="text-blue-400">fn</span> <span className="text-amber-300">dispatch_kv</span>(&mut self) &#123;</p>
              <p className="pl-2 text-white/70">self.engine.eval(tensor);</p>
              <p>&#125;</p>
            </div>
            <div className="text-[8px] text-white/30">p99: 14.2ms</div>
          </div>

          {/* Monitor 2: Cluster telemetry view */}
          <div className="bg-[#141C28] border border-white/10 p-3 h-28 flex flex-col justify-between">
            <div className="flex items-center justify-between text-[8px] text-white/40 pb-1.5 border-b border-white/5">
              <span>cluster_04 // telemetry</span>
              <span className="text-blue-400">LIVE</span>
            </div>
            <div className="space-y-1.5">
              <div className="flex justify-between text-[9px]">
                <span className="text-white/40">NODE_01</span>
                <span className="text-white/80 font-mono">87% GPU</span>
              </div>
              <div className="w-full bg-white/10 h-1">
                <div className="bg-[#0B46A3] h-1 w-[87%]"></div>
              </div>
              <div className="flex justify-between text-[9px]">
                <span className="text-white/40">NODE_02</span>
                <span className="text-white/80 font-mono">92% GPU</span>
              </div>
              <div className="w-full bg-white/10 h-1">
                <div className="bg-[#0B46A3] h-1 w-[92%]"></div>
              </div>
            </div>
            <div className="text-[8px] text-white/30">H100 SXM5 x8</div>
          </div>
        </div>
      </div>

      {/* Frame Bottom Section */}
      <div className="relative z-10 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] text-white/60">
        <span className="text-white/80 tracking-wider">
          SYSTEMS • DEEP LEARNING • DISTRIBUTED ARCHITECTURE
        </span>
        {/* Animated Audio / Telemetry Signal Bars */}
        <div className="flex items-end gap-0.5 h-3">
          <motion.span 
            animate={{ height: ["4px", "12px", "6px", "10px"] }}
            transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
            className="w-0.5 bg-white/80" 
          />
          <motion.span 
            animate={{ height: ["10px", "4px", "12px", "7px"] }}
            transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
            className="w-0.5 bg-white/80" 
          />
          <motion.span 
            animate={{ height: ["6px", "12px", "4px", "11px"] }}
            transition={{ repeat: Infinity, duration: 1.1, ease: "easeInOut" }}
            className="w-0.5 bg-white/80" 
          />
          <motion.span 
            animate={{ height: ["12px", "8px", "11px", "5px"] }}
            transition={{ repeat: Infinity, duration: 1.3, ease: "easeInOut" }}
            className="w-0.5 bg-[#0B46A3]" 
          />
        </div>
      </div>
    </div>
  );
}

