"use client";

import { useState, useEffect } from "react";
import { ArrowUpRight, CheckCircle2, AlertCircle } from "lucide-react";
import DatacenterGraphic from "@/components/DatacenterGraphic";
import { GithubIcon, LinkedinIcon, LeetcodeIcon, MailIcon } from "@/components/SocialIcons";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "dispatched" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [localTime, setLocalTime] = useState<string>("18:00:00");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setLocalTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage("Please complete all required fields.");
      setStatus("error");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setStatus("error");
        setErrorMessage(
          data.error || "Failed to dispatch message via mail gateway. Please try again."
        );
        return;
      }

      setStatus("dispatched");
      setFormData({ name: "", email: "", message: "" });
    } catch (err: any) {
      console.error("Submission error:", err);
      setStatus("error");
      setErrorMessage(
        "Network connection interrupted. Please try again or reach out directly at mdeepakkumar443@gmail.com."
      );
    }
  };

  return (
    <div className="w-full bg-[#F4F7FA]">
      <div className="max-w-7xl mx-auto border-x border-[#192434]/[0.08]">
        {/* 2-Column Swiss Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[#192434]/[0.08]">
          {/* =========================================================================
              LEFT COLUMN: Header & Minimalist Form
              ========================================================================= */}
          <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between space-y-10">
            <div className="space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-[2.6rem] font-light leading-[1.14] uppercase tracking-tight text-[#192434]">
                INITIATE A PROJECT
                <br />
                <span className="text-[#0B46A3] font-normal">
                  [OR DISCUSS INTELLIGENT
                  <br />
                  SYSTEMS.]
                </span>
              </h1>
            </div>

            {/* Status Notifications */}
            {status === "dispatched" ? (
              <div className="p-8 border border-[#192434]/15 bg-white space-y-4 my-8">
                <div className="flex items-center gap-2 text-[#0B46A3] font-mono text-xs">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Message dispatched successfully</span>
                </div>
                <p className="text-sm font-light text-[#192434]">
                  Thank you. Deepak Kumar Majhi has received your inquiry directly. A response will be dispatched to your email address shortly.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setStatus("idle");
                    setErrorMessage("");
                  }}
                  className="text-xs font-mono text-[#0B46A3] hover:underline"
                >
                  Dispatch another message &rarr;
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8 my-6">
                {/* Error Banner */}
                {status === "error" && errorMessage && (
                  <div className="p-4 border border-rose-500/30 bg-rose-50/60 text-xs font-mono text-rose-800 flex items-start gap-2.5">
                    <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <p className="font-medium">Transmission Error</p>
                      <p className="text-[11px] text-rose-700/90">{errorMessage}</p>
                    </div>
                  </div>
                )}

                {/* Field 01: Name */}
                <div className="space-y-1 group">
                  <label className="block text-xs font-mono text-[#192434]/60 group-focus-within:text-[#0B46A3] transition-colors">
                    01. Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Engineering Lead / Collaborator"
                    className="w-full bg-transparent border-b border-[#192434]/20 py-2.5 text-base sm:text-lg font-light text-[#192434] placeholder:text-[#192434]/30 focus:outline-none focus:border-[#0B46A3] transition-colors"
                  />
                </div>

                {/* Field 02: Email */}
                <div className="space-y-1 group">
                  <label className="block text-xs font-mono text-[#192434]/60 group-focus-within:text-[#0B46A3] transition-colors">
                    02. Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="name@domain.com"
                    className="w-full bg-transparent border-b border-[#192434]/20 py-2.5 text-base sm:text-lg font-light text-[#192434] placeholder:text-[#192434]/30 focus:outline-none focus:border-[#0B46A3] transition-colors"
                  />
                </div>

                {/* Field 03: Message / Scope */}
                <div className="space-y-1 group">
                  <label className="block text-xs font-mono text-[#192434]/60 group-focus-within:text-[#0B46A3] transition-colors">
                    03. What are we building?
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Specify project scope, software engineering requirements, GenAI / RAG pipeline, or full-stack architecture..."
                    className="w-full bg-transparent border-b border-[#192434]/20 py-2.5 text-sm sm:text-base font-light text-[#192434] placeholder:text-[#192434]/30 focus:outline-none focus:border-[#0B46A3] transition-colors resize-none"
                  />
                </div>

                {/* Submit button */}
                <div className="pt-2 flex items-center gap-4">
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="group inline-flex items-center gap-2 px-5 py-2.5 text-xs font-mono uppercase tracking-wider text-[#192434] border border-[#192434]/30 hover:border-[#0B46A3] hover:text-[#0B46A3] transition-all duration-200 bg-white shadow-sm disabled:opacity-50 cursor-pointer"
                  >
                    <span>
                      {status === "submitting" ? "Dispatching Message..." : "Dispatch Message"}
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#0B46A3] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>

                  {status === "submitting" && (
                    <span className="text-xs font-mono text-[#192434]/50 animate-pulse">
                      Contacting mail gateway...
                    </span>
                  )}
                </div>
              </form>
            )}
          </div>

          {/* =========================================================================
              RIGHT COLUMN: Direct Route, Network & Source, Infra Status, Datacenter
              ========================================================================= */}
          <div className="lg:col-span-5 divide-y divide-[#192434]/[0.08] flex flex-col justify-between">
            {/* DIRECT ROUTE Panel */}
            <div className="p-6 sm:p-8 space-y-3">
              <span className="text-xs font-mono text-[#192434]/50 uppercase tracking-widest block">
                Direct Route
              </span>
              <a
                href="mailto:mdeepakkumar443@gmail.com"
                className="block text-lg sm:text-xl font-light text-[#192434] hover:text-[#0B46A3] transition-colors"
              >
                mdeepakkumar443@gmail.com
              </a>
              <p className="text-xs font-mono text-[#192434]/60">
                Direct Line: +91 7847827737
              </p>
            </div>

            {/* NETWORK & SOURCE Panel */}
            <div className="p-6 sm:p-8 space-y-4">
              <span className="text-xs font-mono text-[#192434]/50 uppercase tracking-widest block">
                Network &amp; Source
              </span>
              <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                <a
                  href="https://github.com/deepakkumarmajhi-git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-[#192434] hover:text-[#0B46A3] transition-colors py-1 group"
                >
                  <span className="flex items-center gap-1.5">
                    <GithubIcon className="w-3.5 h-3.5 text-[#192434]/60 group-hover:text-[#0B46A3]" />
                    <span>GitHub</span>
                  </span>
                  <ArrowUpRight className="w-3 h-3 text-[#192434]/40 group-hover:text-[#0B46A3]" />
                </a>
                <a
                  href="https://www.linkedin.com/in/deepakmajhihello/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-[#192434] hover:text-[#0B46A3] transition-colors py-1 group"
                >
                  <span className="flex items-center gap-1.5">
                    <LinkedinIcon className="w-3.5 h-3.5 text-[#192434]/60 group-hover:text-[#0B46A3]" />
                    <span>LinkedIn</span>
                  </span>
                  <ArrowUpRight className="w-3 h-3 text-[#192434]/40 group-hover:text-[#0B46A3]" />
                </a>
                <a
                  href="https://leetcode.com/u/hello_deepak"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-[#192434] hover:text-[#0B46A3] transition-colors py-1 group"
                >
                  <span className="flex items-center gap-1.5">
                    <LeetcodeIcon className="w-3.5 h-3.5 text-[#192434]/60 group-hover:text-[#0B46A3]" />
                    <span>LeetCode</span>
                  </span>
                  <ArrowUpRight className="w-3 h-3 text-[#192434]/40 group-hover:text-[#0B46A3]" />
                </a>
                <a
                  href="mailto:mdeepakkumar443@gmail.com"
                  className="flex items-center justify-between text-[#192434] hover:text-[#0B46A3] transition-colors py-1 group"
                >
                  <span className="flex items-center gap-1.5">
                    <MailIcon className="w-3.5 h-3.5 text-[#192434]/60 group-hover:text-[#0B46A3]" />
                    <span>Email</span>
                  </span>
                  <ArrowUpRight className="w-3 h-3 text-[#192434]/40 group-hover:text-[#0B46A3]" />
                </a>
              </div>
            </div>

            {/* INFRASTRUCTURE STATUS Panel */}
            <div className="p-6 sm:p-8 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[#192434]/50 uppercase tracking-widest">Location &amp; Local Time</span>
                <span className="text-[#192434]/60 font-medium">{localTime}</span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-base sm:text-lg font-light text-[#192434]">
                    Bhubaneswar, Odisha, India
                  </h4>
                  <p className="text-xs font-mono text-[#192434]/60 mt-0.5">
                    Available for Remote &amp; On-Site Opportunities
                  </p>
                </div>
                <span className="text-[11px] font-mono px-2.5 py-0.5 border border-[#192434]/15 text-[#192434]/70 bg-white">
                  Available
                </span>
              </div>
            </div>

            {/* Architectural Visual Diagram: Datacenter Schematic */}
            <div className="p-6 sm:p-8">
              <DatacenterGraphic />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
