"use client";

import Link from "next/link";
import { ArrowUpRight, Cpu, Layers, GitBranch, ArrowRight, Server, ShieldCheck, Zap } from "lucide-react";
import VisualFrame from "@/components/VisualFrame";
import { motion } from "framer-motion";

export default function Home() {
  const corePrinciples = [
    {
      num: "01",
      tag: "DISTRIBUTED CONSENSUS",
      title: "Fault-Tolerant State Replication",
      desc: "Architecting high-throughput data pipelines and event-driven backends capable of sub-millisecond p99 latencies under extreme concurrent load.",
    },
    {
      num: "02",
      tag: "TENSOR ACCELERATION",
      title: "Low-Latency Model Serving",
      desc: "Optimizing multi-node LLM and multimodal inference clusters using custom CUDA kernels, dynamic continuous batching, and vLLM / TensorRT-LLM.",
    },
    {
      num: "03",
      tag: "DETERMINISTIC EVALUATION",
      title: "Autonomous Agentic Pipelines",
      desc: "Designing verifiable cognitive architectures with strict safety guardrails, schema enforcement, and reproducible embedding retrieval.",
    },
  ];

  const highlights = [
    {
      id: "01",
      category: "GENAI & INTERVIEW PLATFORM",
      title: "Resume Analyzer + AI Interview Coach",
      stat: "OpenAI GPT-4o",
      desc: "AI-powered resume evaluation and interview simulation platform providing real-time ATS optimization, role-specific question generation, and structured feedback.",
    },
    {
      id: "02",
      category: "AI & SMART AGRICULTURE",
      title: "AI-Powered Agriculture Monitoring System",
      stat: "FastAPI & ML",
      desc: "Multilingual agricultural platform featuring deep learning crop disease diagnostics, weather-driven schedule forecasting, and smart irrigation recommendations.",
    },
  ];

  return (
    <div className="w-full">
      {/* =========================================================================
          HERO SECTION (Swiss Grid Frame)
          ========================================================================= */}
      <section className="border-b border-[#192434]/[0.08] bg-[#F4F7FA]">
        <div className="max-w-7xl mx-auto border-x border-[#192434]/[0.08]">
          {/* Main Hero Split Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[#192434]/[0.08]">
            {/* Left Hero Column: Typography & Action */}
            <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 xl:p-16 flex flex-col justify-between space-y-10">
              <div className="space-y-6">
                <h1 className="text-3xl sm:text-4xl md:text-[2.75rem] font-light leading-[1.12] uppercase tracking-tight text-[#192434]">
                  ENGINEERING
                  <br />
                  ROBUST SYSTEMS
                  <br />
                  <span className="text-[#0B46A3] font-normal">
                    [AND MACHINE
                    <br />
                    INTELLIGENCE.]
                  </span>
                </h1>

                <p className="text-sm sm:text-base font-light text-[#192434]/80 max-w-xl leading-relaxed pt-2">
                  Focusing on distributed systems, machine learning pipelines, and production-grade intelligent architectures. Bridging the gap between scalable software and cognitive models.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link
                  href="/works"
                  className="group inline-flex items-center gap-2 px-5 py-2.5 text-xs font-mono uppercase tracking-wider text-[#192434] bg-white border border-[#192434]/25 hover:border-[#0B46A3] hover:text-[#0B46A3] transition-all duration-200 shadow-sm"
                >
                  <span>Case Studies</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/research"
                  className="group inline-flex items-center gap-2 px-5 py-2.5 text-xs font-mono uppercase tracking-wider text-[#192434] hover:text-[#0B46A3] border border-transparent hover:border-[#192434]/15 transition-all duration-200"
                >
                  <span>Read Publications</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#0B46A3] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>

              {/* Status Readouts Footer Row */}
              <div className="pt-8 border-t border-[#192434]/[0.08] grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-mono text-[#192434]/60">
                <div>
                  <span className="text-[10px] text-[#192434]/40 uppercase tracking-widest block">
                    STATUS READOUTS
                  </span>
                  <span className="text-[#192434] font-medium mt-0.5 block">
                    ALL SYSTEMS NOMINAL
                  </span>
                </div>
                <div>
                  <span className="text-[10px] text-[#192434]/40 uppercase tracking-widest block">
                    DATA INGEST
                  </span>
                  <span className="text-[#192434] font-medium mt-0.5 block">
                    STREAM BUFFER 99.8%
                  </span>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <span className="text-[10px] text-[#192434]/40 uppercase tracking-widest block">
                    SPECIALIZATIONS
                  </span>
                  <span className="text-[#0B46A3] font-medium mt-0.5 block">
                    Systems &amp; Machine Intelligence
                  </span>
                </div>
              </div>
            </div>

            {/* Right Hero Column: Visual Frame */}
            <div className="lg:col-span-5 flex flex-col justify-between bg-[#101722]">
              <VisualFrame />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          ARCHITECTURAL FOCUS & CAPABILITIES (Swiss 3-Column Grid)
          ========================================================================= */}
      <section className="border-b border-[#192434]/[0.08] bg-[#F4F7FA]">
        <div className="max-w-7xl mx-auto border-x border-[#192434]/[0.08]">
          {/* Section Sub-header */}
          <div className="flex items-center justify-between px-6 py-3.5 border-b border-[#192434]/[0.08] text-xs font-mono">
            <span className="text-[#192434]/70 uppercase tracking-wider">
              Core Capabilities &amp; Specializations
            </span>
            <span className="text-[#192434]/40">PRECISION ENGINEERING</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#192434]/[0.08]">
            {corePrinciples.map((item) => (
              <div
                key={item.num}
                className="p-6 sm:p-8 flex flex-col justify-between space-y-6 hover:bg-white/60 transition-colors"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-[#0B46A3] font-medium">{item.num}</span>
                    <span className="text-[10px] text-[#192434]/40 uppercase tracking-wider">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-light text-[#192434] tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-light text-[#192434]/70 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#192434]/[0.06] text-[11px] font-mono text-[#192434]/50 flex items-center justify-between">
                  <span>SUBSYSTEM READY</span>
                  <span className="text-[#0B46A3]">↗</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          FEATURED SYSTEM BLUEPRINTS (Grid Showcase)
          ========================================================================= */}
      <section className="border-b border-[#192434]/[0.08] bg-[#F4F7FA]">
        <div className="max-w-7xl mx-auto border-x border-[#192434]/[0.08]">
          <div className="flex items-center justify-between px-6 py-3.5 border-b border-[#192434]/[0.08] text-xs font-mono">
            <span className="text-[#192434]/70 uppercase tracking-wider">
              Selected Systems &amp; Architectures
            </span>
            <Link
              href="/works"
              className="text-[#0B46A3] hover:underline flex items-center gap-1"
            >
              <span>View All Projects</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#192434]/[0.08]">
            {highlights.map((proj) => (
              <div
                key={proj.id}
                className="p-6 sm:p-10 space-y-6 hover:bg-white/70 transition-colors flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-[#192434]/50">{proj.id}. {proj.category}</span>
                    <span className="px-2 py-0.5 border border-[#0B46A3]/30 text-[#0B46A3] text-[10px] bg-[#0B46A3]/5">
                      {proj.stat}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-light text-[#192434] tracking-tight leading-snug">
                    {proj.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-light text-[#192434]/75 leading-relaxed">
                    {proj.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#192434]/[0.08] flex items-center justify-between text-xs font-mono">
                  <Link
                    href="/works"
                    className="inline-flex items-center gap-1.5 text-[#192434] hover:text-[#0B46A3] transition-colors"
                  >
                    <span>Read System Architecture</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#0B46A3]" />
                  </Link>
                  <span className="text-[10px] text-[#192434]/40">PROD_DEPLOYED</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          TECHNICAL RUNTIME SPECIFICATION (Live Hardware / Stack Readout)
          ========================================================================= */}
      <section className="bg-[#F4F7FA]">
        <div className="max-w-7xl mx-auto border-x border-[#192434]/[0.08]">
          <div className="p-6 sm:p-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-xs font-mono">
            <div className="space-y-1">
              <span className="text-[10px] text-[#192434]/40 uppercase tracking-widest block">
                COMPUTE FABRIC
              </span>
              <p className="text-[#192434] font-medium">NVIDIA H100 / Grace Hopper</p>
              <p className="text-[11px] text-[#192434]/60">NVLink 900 GB/s Interconnect</p>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] text-[#192434]/40 uppercase tracking-widest block">
                INFERENCE STACK
              </span>
              <p className="text-[#192434] font-medium">TensorRT-LLM / vLLM / Triton</p>
              <p className="text-[11px] text-[#192434]/60">PagedAttention &amp; FP8 Quant</p>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] text-[#192434]/40 uppercase tracking-widest block">
                SYSTEMS CODING
              </span>
              <p className="text-[#192434] font-medium">Rust / C++ / PyTorch / Go</p>
              <p className="text-[11px] text-[#192434]/60">Zero-allocation paradigms</p>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] text-[#192434]/40 uppercase tracking-widest block">
                ORCHESTRATION
              </span>
              <p className="text-[#192434] font-medium">Kubernetes / Ray Core / Terraform</p>
              <p className="text-[11px] text-[#192434]/60">Multi-region distributed mesh</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
