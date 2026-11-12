"use client";

import { useState } from "react";
import { ArrowUpRight, CheckCircle2, AlertCircle } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "dispatched" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

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
    } catch (err: unknown) {
      console.error("Submission error:", err);
      setStatus("error");
      setErrorMessage(
        "Network connection interrupted. Please try again or reach out directly at mdeepakkumar443@gmail.com."
      );
    }
  };

  return (
    <div className="w-full bg-[#F4F7FA]">
      <div className="max-w-7xl mx-auto border-x border-[#192434]/10">
        {/* 2-Column Swiss Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* =========================================================================
              LEFT COLUMN: Editorial Header Block
              ========================================================================= */}
          <div className="lg:col-span-5 p-6 sm:p-10 lg:p-16 border-b lg:border-b-0 lg:border-r border-[#192434]/10 flex flex-col justify-between">
            <div>
              {/* Two-line Display Heading */}
              <h1 className="mt-4 text-3xl sm:text-4xl lg:text-[2.85rem] font-light uppercase leading-[1.14] tracking-tight text-[#192434]">
                LET&apos;S CONNECT
                <br />
                <span className="font-normal text-[#0B46A3]">AND BUILD TOGETHER.</span>
              </h1>

              {/* Concise Subtitle */}
              <p className="mt-5 text-sm sm:text-base font-light leading-relaxed text-[#192434]/70 max-w-md">
                Whether you&apos;re hiring for a Software &amp; AI Engineer role, scaling a backend system, or just want to say hello—my inbox is open.
              </p>
            </div>

            {/* Direct Channel Telemetry Footer */}
            <div className="pt-8 mt-10 lg:mt-16 border-t border-[#192434]/10 text-xs font-mono text-[#192434]/60 space-y-1.5">
              <span className="text-[10px] text-[#192434]/40 uppercase tracking-widest block">
                DIRECT INBOX
              </span>
              <a
                href="mailto:mdeepakkumar443@gmail.com"
                className="text-sm font-medium text-[#192434] hover:text-[#0B46A3] transition-colors block"
              >
                mdeepakkumar443@gmail.com
              </a>
              <p className="text-[11px] text-[#192434]/50">
                Bhubaneswar, Odisha
              </p>
            </div>
          </div>

          {/* =========================================================================
              RIGHT COLUMN: Contact Form
              ========================================================================= */}
          <div className="lg:col-span-7 p-6 sm:p-10 lg:p-16 bg-white/40 flex flex-col justify-center">
            {/* Success Confirmation State */}
            {status === "dispatched" ? (
              <div className="p-8 border border-[#192434]/15 bg-white space-y-4 shadow-sm max-w-2xl">
                <div className="flex items-center gap-2 text-[#0B46A3] font-mono text-xs uppercase tracking-wider">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Message dispatched successfully</span>
                </div>
                <p className="text-sm font-light text-[#192434] leading-relaxed">
                  Thank you. Deepak Kumar Majhi has received your inquiry directly. A response will be dispatched to your email address shortly.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setStatus("idle");
                    setErrorMessage("");
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#0B46A3] hover:underline pt-2 cursor-pointer"
                >
                  <span>Dispatch another message</span>
                  <span>&rarr;</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl">
                {/* Error Banner */}
                {status === "error" && errorMessage && (
                  <div className="p-4 border border-rose-500/30 bg-rose-50/70 text-xs font-mono text-rose-800 flex items-start gap-2.5">
                    <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <p className="font-medium">Transmission Error</p>
                      <p className="text-[11px] text-rose-700/90">{errorMessage}</p>
                    </div>
                  </div>
                )}

                {/* Field 01: Name */}
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="block text-[11px] font-mono uppercase tracking-widest text-[#192434]/60"
                  >
                    YOUR NAME
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="e.g., Arjun Mehta"
                    className="w-full bg-[#F4F7FA]/80 border border-[#192434]/15 px-4 py-3.5 text-base sm:text-sm text-[#192434] placeholder:text-[#192434]/35 focus:border-[#0B46A3] focus:bg-white focus:outline-none transition-colors"
                  />
                </div>

                {/* Field 02: Email */}
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-[11px] font-mono uppercase tracking-widest text-[#192434]/60"
                  >
                    YOUR EMAIL
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="arjun@acme.ai"
                    className="w-full bg-[#F4F7FA]/80 border border-[#192434]/15 px-4 py-3.5 text-base sm:text-sm text-[#192434] placeholder:text-[#192434]/35 focus:border-[#0B46A3] focus:bg-white focus:outline-none transition-colors"
                  />
                </div>

                {/* Field 03: Message */}
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="block text-[11px] font-mono uppercase tracking-widest text-[#192434]/60"
                  >
                    WHAT ARE WE BUILDING?
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tell me about the role, project architecture, timeline, or idea you'd like to collaborate on..."
                    className="w-full bg-[#F4F7FA]/80 border border-[#192434]/15 px-4 py-3.5 text-base sm:text-sm text-[#192434] placeholder:text-[#192434]/35 focus:border-[#0B46A3] focus:bg-white focus:outline-none transition-colors resize-none"
                  />
                </div>

                {/* Submit Button & Feedback */}
                <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4">
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0B46A3] hover:bg-[#192434] text-[#F4F7FA] px-8 py-3.5 font-mono text-xs uppercase tracking-widest transition-colors shadow-sm disabled:opacity-50 cursor-pointer"
                  >
                    <span>
                      {status === "submitting" ? "Dispatching Message..." : "Dispatch Message"}
                    </span>
                    {status === "submitting" ? (
                      <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#F4F7FA]" />
                    )}
                  </button>

                  {status === "submitting" && (
                    <span className="text-xs font-mono text-[#192434]/50 animate-pulse text-center sm:text-left">
                      Contacting mail gateway...
                    </span>
                  )}
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
