"use client";

import { useState } from "react";
import ProjectCard, { ProjectData } from "@/components/ProjectCard";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/SocialIcons";

export default function WorksPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");

  const categories = [
    "ALL",
    "AI & WEB APPLICATIONS",
    "APPLIED AI & IOT",
    "BACKEND & SYSTEM ARCHITECTURE",
    "GENERATIVE AI & AGENTS",
  ];

  const projects: ProjectData[] = [
    {
      id: "proj-01",
      index: "01",
      category: "AI & WEB APPLICATIONS",
      title: "Resume Analyzer + AI Interview Coach",
      description:
        "Developed an AI-powered resume analysis and interview preparation platform that reviews resumes, provides ATS-friendly improvement suggestions, generates role-specific interview questions, and delivers personalized feedback to enhance job readiness.",
      metrics: [
        { label: "Scoring Engine", value: "ATS Compatibility" },
        { label: "AI Integration", value: "OpenAI GPT-4o" },
        { label: "Architecture", value: "Next.js & MongoDB" },
      ],
      tags: ["Next.js", "MongoDB", "OpenAI API", "REST APIs", "TypeScript", "Tailwind CSS"],
      caseStudyUrl: "#",
      githubUrl: "https://github.com/deepakkumarmajhi-git",
      status: "FEATURED_PROJECT",
    },
    {
      id: "proj-02",
      index: "02",
      category: "APPLIED AI & IOT",
      title: "AI-Powered Smart Agriculture Monitoring System",
      description:
        "Developed an AI-powered agriculture platform for crop disease detection, weather-based planning, soil and crop recommendations, smart irrigation, and multilingual farmer support.",
      metrics: [
        { label: "ML Diagnostics", value: "Computer Vision" },
        { label: "Backend API", value: "FastAPI & Python" },
        { label: "Capability", value: "Multilingual Support" },
      ],
      tags: ["Next.js", "MongoDB", "FastAPI", "AI/ML", "Python", "Tailwind CSS"],
      caseStudyUrl: "#",
      githubUrl: "https://github.com/deepakkumarmajhi-git",
      status: "FEATURED_PROJECT",
    },
    {
      id: "proj-03",
      index: "03",
      category: "BACKEND & SYSTEM ARCHITECTURE",
      title: "Scalable Client Backend Microservices Architecture",
      description:
        "Production-grade backend architecture built during Upskalor Technologies internship. Engineered scalable RESTful services, database caching, and containerized microservice workflows for client applications.",
      metrics: [
        { label: "Throughput", value: "High Concurrency" },
        { label: "Caching", value: "Redis Layer" },
        { label: "Container", value: "Docker / Linux" },
      ],
      tags: ["FastAPI", "PostgreSQL", "Redis", "Docker", "RESTful APIs", "Python"],
      caseStudyUrl: "#",
      githubUrl: "https://github.com/deepakkumarmajhi-git",
      status: "INDUSTRY_DEPLOYED",
    },
    {
      id: "proj-04",
      index: "04",
      category: "GENERATIVE AI & AGENTS",
      title: "Agentic RAG & Semantic Retrieval Engine",
      description:
        "Multi-step document retrieval engine built with LangChain and LangGraph. Features vector database semantic search, dense context reranking, and deterministic prompt chaining.",
      metrics: [
        { label: "Pipeline", value: "LangGraph State Machine" },
        { label: "Retrieval", value: "Vector Similarity" },
        { label: "Accuracy", value: "Context Grounding" },
      ],
      tags: ["Python", "LangChain", "LangGraph", "Vector DB", "GenAI", "FastAPI"],
      caseStudyUrl: "#",
      githubUrl: "https://github.com/deepakkumarmajhi-git",
      status: "RESEARCH_ENGINE",
    },
  ];

  const filteredProjects =
    selectedCategory === "ALL"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="w-full bg-[#F4F7FA]">
      <div className="max-w-7xl mx-auto border-x border-[#192434]/[0.08]">
        {/* Header & Intro */}
        <div className="px-6 sm:px-10 py-12 sm:py-16 border-b border-[#192434]/[0.08]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-4 max-w-2xl">
              <span className="text-xs font-mono text-[#0B46A3] uppercase tracking-widest block">
                PORTFOLIO &amp; ENGINEERING REPOSITORIES
              </span>
              <h1 className="text-3xl sm:text-4xl font-light tracking-tight text-[#192434] uppercase leading-tight">
                Software &amp; AI Projects
              </h1>
              <p className="text-sm font-light text-[#192434]/75 leading-relaxed">
                Featured software engineering and applied AI projects by Deepak Kumar Majhi, highlighting full-stack Next.js applications, FastAPI backend services, GenAI integrations, and machine learning systems.
              </p>
            </div>

            <div className="text-xs font-mono text-[#192434]/60">
              <span className="block text-[10px] uppercase tracking-widest text-[#192434]/40">
                TOTAL ARCHIVES
              </span>
              <span className="text-lg font-light text-[#192434]">
                {projects.length} REPOSITORIES
              </span>
            </div>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="border-b border-[#192434]/[0.08] overflow-x-auto">
          <div className="flex items-center min-w-max px-4 sm:px-6 divide-x divide-[#192434]/[0.08] text-xs font-mono">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`py-3.5 px-5 transition-colors whitespace-nowrap uppercase tracking-wider ${
                    isSelected
                      ? "text-[#0B46A3] font-medium bg-[#0B46A3]/5 border-b-2 border-[#0B46A3]"
                      : "text-[#192434]/60 hover:text-[#192434]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Asymmetric Grid */}
        <div className="p-6 sm:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        {/* GitHub Organization CTA */}
        <div className="p-6 sm:p-10 border-t border-[#192434]/[0.08] bg-[#192434]/[0.02] text-xs font-mono text-[#192434]/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-[#0B46A3] font-medium">Explore More on GitHub</span>
            <p className="text-[11px] text-[#192434]/70">
              Find source repositories, algorithmic problem-solving, and ongoing experiments on GitHub.
            </p>
          </div>
          <a
            href="https://github.com/deepakkumarmajhi-git"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs text-[#192434] hover:text-[#0B46A3] transition-colors"
          >
            <GithubIcon className="w-4 h-4 text-[#0B46A3]" />
            <span>github.com/deepakkumarmajhi-git</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
