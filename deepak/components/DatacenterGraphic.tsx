"use client";

export default function DatacenterGraphic() {
  return (
    <div className="relative w-full bg-[#101722] text-[#F4F7FA] p-4 font-mono select-none overflow-hidden border border-[#192434]/15">
      {/* Top telemetry bar */}
      <div className="flex items-center justify-between text-[10px] text-white/50 border-b border-white/10 pb-2 mb-3">
        <span className="text-white/80 uppercase">Datacenter Runtime</span>
        <div className="flex items-end gap-0.5 h-2.5">
          <span className="w-0.5 h-1.5 bg-white/40"></span>
          <span className="w-0.5 h-2.5 bg-white/70"></span>
          <span className="w-0.5 h-2 bg-[#0B46A3]"></span>
        </div>
      </div>

      {/* Isometric Server Rack Schematic */}
      <div className="relative py-2 flex items-center justify-center">
        <svg
          viewBox="0 0 320 120"
          className="w-full h-auto text-white/70"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Isometric Rack 1 */}
          <g transform="translate(40, 10)">
            {/* Top Face */}
            <polygon points="50,10 90,25 50,40 10,25" fill="#1A2433" stroke="rgba(255,255,255,0.3)" strokeWidth="0.8" />
            {/* Right Face */}
            <polygon points="90,25 90,85 50,100 50,40" fill="#141C28" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8" />
            {/* Left Face (Front) */}
            <polygon points="10,25 50,40 50,100 10,85" fill="#1C2838" stroke="rgba(255,255,255,0.3)" strokeWidth="0.8" />
            
            {/* Server Chassis Units */}
            <line x1="14" y1="36" x2="46" y2="48" stroke="rgba(255,255,255,0.25)" strokeWidth="0.7" />
            <line x1="14" y1="46" x2="46" y2="58" stroke="rgba(255,255,255,0.25)" strokeWidth="0.7" />
            <line x1="14" y1="56" x2="46" y2="68" stroke="rgba(255,255,255,0.25)" strokeWidth="0.7" />
            <line x1="14" y1="66" x2="46" y2="78" stroke="rgba(255,255,255,0.25)" strokeWidth="0.7" />
            <line x1="14" y1="76" x2="46" y2="88" stroke="rgba(255,255,255,0.25)" strokeWidth="0.7" />

            {/* LED Status Indicators (Neutral & Cobalt) */}
            <circle cx="18" cy="38" r="1" fill="#38BDF8" />
            <circle cx="21" cy="39" r="1" fill="#64748B" />
            <circle cx="18" cy="48" r="1" fill="#38BDF8" />
            <circle cx="18" cy="58" r="1" fill="#94A3B8" />
            <circle cx="18" cy="68" r="1" fill="#0B46A3" />
            <circle cx="18" cy="78" r="1" fill="#38BDF8" />
          </g>

          {/* Isometric Rack 2 (Adjacent Node) */}
          <g transform="translate(140, 10)">
            <polygon points="50,10 90,25 50,40 10,25" fill="#1A2433" stroke="rgba(255,255,255,0.3)" strokeWidth="0.8" />
            <polygon points="90,25 90,85 50,100 50,40" fill="#141C28" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8" />
            <polygon points="10,25 50,40 50,100 10,85" fill="#1C2838" stroke="rgba(255,255,255,0.3)" strokeWidth="0.8" />

            <line x1="14" y1="36" x2="46" y2="48" stroke="rgba(255,255,255,0.25)" strokeWidth="0.7" />
            <line x1="14" y1="46" x2="46" y2="58" stroke="rgba(255,255,255,0.25)" strokeWidth="0.7" />
            <line x1="14" y1="56" x2="46" y2="68" stroke="rgba(255,255,255,0.25)" strokeWidth="0.7" />
            <line x1="14" y1="66" x2="46" y2="78" stroke="rgba(255,255,255,0.25)" strokeWidth="0.7" />
            <line x1="14" y1="76" x2="46" y2="88" stroke="rgba(255,255,255,0.25)" strokeWidth="0.7" />

            <circle cx="18" cy="38" r="1" fill="#94A3B8" />
            <circle cx="18" cy="48" r="1" fill="#38BDF8" />
            <circle cx="21" cy="49" r="1" fill="#64748B" />
            <circle cx="18" cy="58" r="1" fill="#38BDF8" />
            <circle cx="18" cy="68" r="1" fill="#0B46A3" />
            <circle cx="18" cy="78" r="1" fill="#94A3B8" />
          </g>

          {/* Optical Bus Interconnect Lines */}
          <path d="M 100 70 L 140 70" stroke="#0B46A3" strokeWidth="1" strokeDasharray="3 2" />
          <path d="M 100 80 L 140 80" stroke="rgba(56, 189, 248, 0.6)" strokeWidth="0.8" />
        </svg>
      </div>

      {/* Telemetry bottom row */}
      <div className="flex items-center justify-between text-[9px] text-white/40 pt-2 border-t border-white/5">
        <span>INFRASTRUCTURE WORKLOADS</span>
        <span className="text-white/60">UPTIME: 99.994%</span>
      </div>
    </div>
  );
}
