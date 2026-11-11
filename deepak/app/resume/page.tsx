"use client";

import { ArrowUpRight, ArrowDown, FileText } from "lucide-react";

export default function ResumePage() {
  return (
    <div className="w-full min-h-screen bg-[#F4F7FA]">
      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <div className="w-full border border-[#192434]/10 bg-white shadow-[0_4px_24px_rgba(25,36,52,0.03)] overflow-hidden">
          {/* Action Toolbar Header */}
          <div className="px-4 sm:px-6 py-2.5 sm:py-3 border-b border-[#192434]/10 bg-[#F4F7FA]/60 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-[#0B46A3]" />
              <span className="text-xs sm:text-sm font-mono uppercase tracking-wider text-[#192434] font-medium">
                Resume
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2">
              <a
                href="/Deepak_Kumar_Majhi_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-mono uppercase tracking-wider text-[#192434] bg-white border border-[#192434]/25 hover:border-[#0B46A3] hover:text-[#0B46A3] transition-colors cursor-pointer"
              >
                <span>Open PDF</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#0B46A3]" />
              </a>

              <a
                href="/Deepak_Kumar_Majhi_Resume.pdf"
                download="Deepak_Kumar_Majhi_Resume.pdf"
                className="inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider text-[#F4F7FA] bg-[#0B46A3] hover:bg-[#192434] border border-[#0B46A3] hover:border-[#192434] transition-colors shadow-sm cursor-pointer"
              >
                <span>Download Resume</span>
                <ArrowDown className="w-3.5 h-3.5 text-[#F4F7FA]" />
              </a>
            </div>
          </div>

          {/* Embedded PDF Viewer */}
          <div className="w-full h-[84vh] min-h-[640px]">
            <iframe
              src="/Deepak_Kumar_Majhi_Resume.pdf#toolbar=0&navpanes=0"
              className="w-full h-full border-0"
              title="Deepak Kumar Majhi Resume PDF"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
