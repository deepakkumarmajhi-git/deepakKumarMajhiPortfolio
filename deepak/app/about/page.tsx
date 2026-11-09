"use client";

import { ArrowUpRight, Award, GraduationCap, Briefcase, Code, MapPin, Mail, Phone } from "lucide-react";
import Link from "next/link";
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from "@/components/SocialIcons";

export default function AboutPage() {
  const experiences = [
    {
      period: "JUNE 2026 — AUGUST 2026",
      role: "Junior Developer Intern",
      company: "Upskalor Technologies LLP",
      location: "Remote / Hybrid",
      description:
        "Developed scalable backend solutions for real-world client projects by translating business requirements into functional code. Gained hands-on experience in software engineering and practical industry skills while working in a fast-paced, collaborative team environment.",
    },
    {
      period: "JUNE 2025 — JULY 2025",
      role: "AI Intern",
      company: "Edunet Foundation",
      location: "Virtual",
      description:
        "Completed a virtual internship focused on AI and Azure technologies, gaining hands-on experience in developing AI applications, prompt engineering, and understanding real-world deployment practices.",
    },
  ];

  const education = [
    {
      period: "2023 — 2027",
      degree: "Bachelor of Technology (B. Tech) in Computer Science & Engineering (AIML)",
      institution: "Gandhi Engineering College, Bhubaneswar",
      grade: "CGPA: 9.34",
    },
    {
      period: "2022",
      degree: "Higher Secondary Certificate (12th Grade)",
      institution: "Council of Higher Secondary Education, Odisha",
      grade: "Score: 73.16%",
    },
  ];

  const skillCategories = [
    {
      category: "PROGRAMMING LANGUAGES",
      items: ["Python", "SQL", "JavaScript", "TypeScript"],
    },
    {
      category: "APPLIED AI & INTEGRATIONS",
      items: ["GenAI", "Prompt Engineering", "LangChain / LangGraph", "RAG Systems", "OpenAI APIs"],
    },
    {
      category: "WEB TECHNOLOGIES",
      items: ["Next.js", "React.js", "HTML5", "CSS3", "Tailwind CSS"],
    },
    {
      category: "BACKEND & SYSTEM DEV",
      items: ["FastAPI", "RESTful APIs", "Node.js", "Microservices"],
    },
    {
      category: "DATABASES & CACHING",
      items: ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
    },
    {
      category: "DEVOPS & TOOLS",
      items: ["Git", "GitHub", "Docker", "Linux"],
    },
  ];

  const achievements = [
    {
      title: "First Place Winner — GEC Hackathon 2026",
      desc: "Won first prize developing an innovative technology solution in an intensive 24-hour hackathon.",
    },
    {
      title: "Finalist / Active Participant — Smart India Hackathon (SIH)",
      desc: "Selected as finalist for nationwide competitive technical problem-solving.",
    },
    {
      title: "GDG HackFest & BPUT Hackathon",
      desc: "Active participant and finalist building cutting-edge software and machine learning applications.",
    },
  ];

  return (
    <div className="w-full bg-[#F4F7FA]">
      <div className="max-w-7xl mx-auto border-x border-[#192434]/[0.08]">
        {/* Bio Hero Section */}
        <div className="px-6 sm:px-10 py-12 sm:py-16 md:py-20 border-b border-[#192434]/[0.08]">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-light leading-[1.12] uppercase tracking-tight text-[#192434]">
              Deepak Kumar Majhi
              <br />
              <span className="text-[#0B46A3] font-normal">[Software, AI &amp; Problem Solving.]</span>
            </h1>
            <p className="text-base sm:text-lg font-light text-[#192434]/80 leading-relaxed pt-2">
              Aspiring AI Engineer with a strong interest in software development, AI, and problem-solving. Developed a strong foundation in programming, web technologies, machine learning, databases, and problem-solving through academic coursework, hands-on projects, and internships. Eager to apply these skills to building impactful technology solutions.
            </p>
            <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-[#192434]/70 pt-2">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#0B46A3]" />
                Bhubaneswar, Odisha, India
              </span>
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#0B46A3]" />
                mdeepakkumar443@gmail.com
              </span>
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#0B46A3]" />
                +91 7847827737
              </span>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="p-6 sm:p-10 border-b border-[#192434]/[0.08]">
          <div className="max-w-2xl mb-8 space-y-2">

            <h2 className="text-2xl sm:text-3xl font-light text-[#192434] uppercase tracking-tight">
              Education
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu, idx) => (
              <div
                key={idx}
                className="border border-[#192434]/[0.08] p-6 bg-white/40 hover:bg-white/80 transition-colors space-y-3"
              >
                <div className="flex items-center justify-between text-xs font-mono text-[#192434]/60">
                  <span className="text-[#0B46A3] font-medium">{edu.period}</span>
                  <span className="px-2 py-0.5 border border-[#192434]/15 bg-white text-[#192434]">
                    {edu.grade}
                  </span>
                </div>
                <h4 className="text-base sm:text-lg font-light text-[#192434]">
                  {edu.degree}
                </h4>
                <p className="text-xs font-mono text-[#192434]/60">
                  {edu.institution}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Experience & Career Milestones */}
        <div className="p-6 sm:p-10 border-b border-[#192434]/[0.08]">
          <div className="max-w-2xl mb-8 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-light text-[#192434] uppercase tracking-tight">
              Internships
            </h2>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="border border-[#192434]/[0.08] p-6 sm:p-8 bg-white/40 hover:bg-white/80 transition-colors space-y-3"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono border-b border-[#192434]/[0.06] pb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-[#0B46A3] font-medium">{exp.period}</span>
                    <span className="text-[#192434]/40">•</span>
                    <span className="text-[#192434] font-medium">{exp.role}</span>
                  </div>
                  <span className="text-[#192434]/50">{exp.location}</span>
                </div>

                <div className="space-y-2">
                  <h4 className="text-lg font-light text-[#192434]">
                    {exp.company}
                  </h4>
                  <p className="text-sm font-light text-[#192434]/75 leading-relaxed max-w-4xl">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Capabilities Matrix */}
        <div className="p-6 sm:p-10 border-b border-[#192434]/[0.08]">
          <div className="max-w-2xl mb-8 space-y-2">

            <h2 className="text-2xl sm:text-3xl font-light text-[#192434] uppercase tracking-tight">
              Skills &amp; Technologies
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((group) => (
              <div
                key={group.category}
                className="border border-[#192434]/[0.08] p-5 bg-white/30 space-y-3"
              >
                <span className="text-[10px] font-mono text-[#0B46A3] uppercase tracking-widest block border-b border-[#192434]/[0.06] pb-2">
                  {group.category}
                </span>
                <ul className="space-y-1.5 text-xs font-mono text-[#192434]/80">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center gap-1.5">
                      <span className="text-[#0B46A3]">›</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div className="p-6 sm:p-10 border-b border-[#192434]/[0.08]">
          <div className="max-w-2xl mb-8 space-y-2">

            <h2 className="text-2xl sm:text-3xl font-light text-[#192434] uppercase tracking-tight">
              Achievements
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((item, idx) => (
              <div
                key={idx}
                className="border border-[#192434]/[0.08] p-6 bg-white/40 hover:bg-white/80 transition-colors space-y-2"
              >
                <div className="flex items-center gap-2 text-xs font-mono text-[#0B46A3]">
                  <Award className="w-4 h-4 text-[#0B46A3]" />
                  <span>HONOR</span>
                </div>
                <h4 className="text-base font-light text-[#192434]">
                  {item.title}
                </h4>
                <p className="text-xs font-light text-[#192434]/70 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA note */}
        <div className="p-6 sm:p-10 bg-[#192434]/[0.02] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono">
          <div>
            <span className="text-[#0B46A3] font-medium">Open to Full-Time, Internship &amp; Project Collaborations</span>
            <p className="text-[11px] text-[#192434]/70 mt-1">
              Interested in collaborating or discussing AI and software engineering opportunities?
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1 px-4 py-2 border border-[#192434]/20 hover:border-[#0B46A3] hover:text-[#0B46A3] text-[#192434] transition-colors"
          >
            <span>Initiate Contact</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#0B46A3]" />
          </Link>
        </div>
      </div>
    </div>
  );
}
