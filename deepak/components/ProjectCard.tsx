"use client";

import { ArrowUpRight } from "lucide-react";
import React from "react";

function GithubIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export interface ProjectData {
  id: string;
  index: string;
  category: string;
  title: string;
  description: string;
  architectureDetails?: string;
  metrics?: { label: string; value: string }[];
  tags: string[];
  caseStudyUrl?: string;
  githubUrl?: string;
  status?: string;
}

interface ProjectCardProps {
  project: ProjectData;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group border border-[#192434]/[0.08] bg-[#F4F7FA] hover:bg-white/80 transition-all duration-300 flex flex-col justify-between">
      {/* Card Header / Meta Bar */}
      <div className="flex items-center justify-between px-6 py-3.5 border-b border-[#192434]/[0.08] text-xs font-mono">
        <div className="flex items-center gap-2 text-[#192434]/60">
          <span className="text-[#0B46A3] font-medium">{project.index}.</span>
          <span className="uppercase tracking-wider text-[11px]">{project.category}</span>
        </div>
        {project.status && (
          <span className="text-[10px] uppercase tracking-widest px-2 py-0.5 border border-[#192434]/15 text-[#192434]/70">
            {project.status.replace(/_/g, " ")}
          </span>
        )}
      </div>

      {/* Main Content Area */}
      <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
        <div className="space-y-3">
          <h3 className="text-xl sm:text-2xl font-light tracking-tight text-[#192434] group-hover:text-[#0B46A3] transition-colors leading-snug">
            {project.title}
          </h3>
          <p className="text-sm font-light text-[#192434]/75 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Optional Metrics / System Telemetry */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 py-3 px-4 bg-[#192434]/[0.02] border border-[#192434]/[0.06] text-xs font-mono">
            {project.metrics.map((m, idx) => (
              <div key={idx}>
                <span className="block text-[10px] text-[#192434]/40 uppercase tracking-wider">
                  {m.label}
                </span>
                <span className="text-xs font-medium text-[#192434]">
                  {m.value}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-mono px-2.5 py-1 border border-[#192434]/10 text-[#192434]/70 bg-white/40"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Action Links Bar */}
      <div className="flex items-center justify-between px-6 py-4 border-t border-[#192434]/[0.08] text-xs font-mono bg-white/30">
        <div className="flex items-center gap-4">
          {project.caseStudyUrl && (
            <a
              href={project.caseStudyUrl}
              className="group/link inline-flex items-center gap-1 text-[#192434] hover:text-[#0B46A3] transition-colors"
            >
              <span>Case Study</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#0B46A3] transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link inline-flex items-center gap-1 text-[#192434]/70 hover:text-[#192434] transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5 text-[#192434]/50" />
              <span>View Github</span>
              <ArrowUpRight className="w-3 h-3 text-[#192434]/40 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
