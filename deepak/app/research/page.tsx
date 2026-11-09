"use client";

import { ArrowUpRight, BookOpen, Download, FileText } from "lucide-react";

export default function ResearchPage() {
  const papers = [
    {
      id: "01",
      year: "2026",
      venue: "IEEE Systems • arXiv preprint",
      title: "Sub-Millisecond Token Streaming via Partitioned KV-Cache Topologies",
      authors: "Deepak Kumar Majhi, AI & Systems Group",
      abstract:
        "Investigates tensor-parallel partitioning of key-value memory blocks across discrete PCIe / NVLink topologies. Proposes an asynchronous cache eviction and rehydration protocol reducing time-to-first-token (TTFT) by 42% on 70B parameter models.",
      tags: ["Distributed Systems", "vLLM", "Memory Hierarchy", "CUDA"],
      metrics: "TTFT: -42% • GPU MEM: -28%",
      doi: "10.48550/arXiv.2026.04112",
    },
    {
      id: "02",
      year: "2025",
      venue: "ACM Distributed Computing Review",
      title: "Zero-Copy Serialization Tradeoffs in Real-Time Vector Ingestion: Apache Arrow vs. Protobuf",
      authors: "Deepak Kumar Majhi, Data Infrastructure Research",
      abstract:
        "Empirical benchmarking of binary column-oriented buffers against row-based protobuf messages across high-throughput embeddings pipelines. Documents CPU cycle reduction and memory throughput saturation on 100GbE NICs.",
      tags: ["Apache Arrow", "Network I/O", "Serialization", "Zero-Copy"],
      metrics: "THROUGHPUT: 1.4M msg/s • CPU LOAD: -35%",
      doi: "10.1145/3678912.2025.109",
    },
    {
      id: "03",
      year: "2025",
      venue: "Workshop on Cognitive Safety & Verification",
      title: "Deterministic Safety Guardrails in Autonomous Multi-Agent Workflows",
      authors: "Deepak Kumar Majhi, AI Verification Group",
      abstract:
        "Presents a formal grammars approach to constraining generative model outputs. Guarantees deterministic state transitions and zero syntax degradation in autonomous code generation and API orchestration.",
      tags: ["Formal Methods", "LLM Guardrails", "State Machines"],
      metrics: "VERIFICATION PASS: 100% • LATENCY PENALTY: < 2ms",
      doi: "10.1145/3699100.2025.042",
    },
    {
      id: "04",
      year: "2024",
      venue: "Systems & Cloud Infrastructure Symposium",
      title: "Cross-Region Replicated State Machines Under Asymmetric Network Partitions",
      authors: "Deepak Kumar Majhi",
      abstract:
        "Analysis of quorum degradation and leader election stability during deep fiber cuts across transcontinental clusters. Introduces a hybrid heartbeat lease mechanism preventing split-brain states.",
      tags: ["Raft Consensus", "Fault Tolerance", "High Availability"],
      metrics: "FAILOVER: 1.2s • DATA LOSS: 0",
      doi: "10.1109/SCIS.2024.9810",
    },
  ];

  return (
    <div className="w-full bg-[#F4F7FA]">
      <div className="max-w-7xl mx-auto border-x border-[#192434]/[0.08]">
        {/* Page Title & Intro */}
        <div className="px-6 sm:px-10 py-12 sm:py-16 border-b border-[#192434]/[0.08]">
          <div className="max-w-2xl space-y-4">
            <span className="text-xs font-mono text-[#0B46A3] uppercase tracking-widest block">
              PUBLICATIONS &amp; EMPIRICAL FINDINGS
            </span>
            <h1 className="text-3xl sm:text-4xl font-light tracking-tight text-[#192434] uppercase leading-tight">
              Systems Research &amp; Whitepapers
            </h1>
            <p className="text-sm font-light text-[#192434]/75 leading-relaxed">
              Peer-reviewed papers, preprint architectures, and benchmark evaluations exploring distributed consensus, high-throughput memory hierarchies, and generative model serving.
            </p>
          </div>
        </div>

        {/* Publications List in Swiss Grid */}
        <div className="divide-y divide-[#192434]/[0.08]">
          {papers.map((paper) => (
            <div
              key={paper.id}
              className="p-6 sm:p-10 hover:bg-white/70 transition-colors flex flex-col justify-between space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono border-b border-[#192434]/[0.06] pb-3">
                <div className="flex items-center gap-2">
                  <span className="text-[#0B46A3] font-medium">{paper.id}.</span>
                  <span className="text-[#192434]/70 uppercase tracking-wider">
                    {paper.venue}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="px-2 py-0.5 border border-[#0B46A3]/20 text-[#0B46A3] text-[10px] bg-[#0B46A3]/5">
                    {paper.metrics}
                  </span>
                  <span className="text-[#192434]/50">{paper.year}</span>
                </div>
              </div>

              <div className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-light text-[#192434] tracking-tight leading-snug">
                  {paper.title}
                </h2>
                <p className="text-xs font-mono text-[#192434]/60">
                  {paper.authors}
                </p>
                <p className="text-sm font-light text-[#192434]/75 leading-relaxed max-w-4xl">
                  {paper.abstract}
                </p>
              </div>

              {/* Tags & Actions */}
              <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {paper.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono px-2 py-0.5 border border-[#192434]/10 text-[#192434]/70 bg-white/50"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 text-xs font-mono">
                  <span className="text-[#192434]/40 text-[11px] hidden md:inline">
                    DOI: {paper.doi}
                  </span>
                  <a
                    href="#"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-[#192434]/20 hover:border-[#0B46A3] hover:text-[#0B46A3] text-[#192434] transition-colors"
                  >
                    <span>Read Paper</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#0B46A3]" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

