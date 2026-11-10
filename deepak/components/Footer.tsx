"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUpRight, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetcodeIcon, MailIcon } from "@/components/SocialIcons";

export default function Footer() {
  const [timeString, setTimeString] = useState<string>("7:15 PM");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeString(
        now.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="mt-auto w-full border-t border-white/10 bg-[#0D131D] text-[#F4F7FA]">
      {/* Top Banner Bar */}
      <div className="max-w-7xl mx-auto border-x border-white/10">
        {/* Big CTA Section */}
        <div className="px-6 sm:px-10 py-12 sm:py-16 md:py-20 border-b border-white/10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-light leading-[1.18] uppercase tracking-tight text-[#F4F7FA]">
            WANT TO START
            <br />
            A PROJECT?
            <br />
            <span className="text-[#3B82F6] font-normal">[LET&apos;S COLLABORATE.]</span>
          </h2>

          <div className="mt-8 sm:mt-10">
            <a
              href="mailto:mdeepakkumar443@gmail.com"
              className="group inline-flex items-center gap-3 text-xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-light text-[#F4F7FA] hover:text-[#3B82F6] transition-colors tracking-tight break-all sm:break-normal"
            >
              <span>mdeepakkumar443@gmail.com</span>
              <ArrowUpRight className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-[#3B82F6] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 shrink-0" />
            </a>
          </div>
        </div>

        {/* 4-Column Swiss Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/10 text-xs font-mono">
          {/* NAV Column */}
          <div className="p-6 sm:p-8 space-y-4">
            <span className="text-[#F4F7FA]/40 uppercase tracking-widest text-[11px] block">
              NAV
            </span>
            <ul className="space-y-2.5 text-xs text-[#F4F7FA]/80">
              <li>
                <Link
                  href="/works"
                  className="hover:text-[#3B82F6] transition-colors"
                >
                  Works
                </Link>
              </li>
              <li>
                <Link
                  href="/research"
                  className="hover:text-[#3B82F6] transition-colors"
                >
                  Research
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-[#3B82F6] transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#3B82F6] transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* SOCIALS & CONNECTIONS Column */}
          <div className="p-6 sm:p-8 space-y-4">
            <span className="text-[#F4F7FA]/40 uppercase tracking-widest text-[11px] block">
              SOCIALS &amp; CONNECTIONS
            </span>

            {/* Highlighted LinkedIn CTA Button (No brackets, no arrow, single LinkedIn link) */}
            <div className="pt-0.5 pb-1">
              <a
                href="https://www.linkedin.com/in/deepakmajhihello/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-[3px] bg-[#1D63DC] hover:bg-[#2563EB] px-3.5 py-2 text-[11px] font-medium uppercase tracking-wider text-[#F4F7FA] shadow-[0_0_20px_rgba(29,99,220,0.35)] transition-all duration-200 hover:-translate-y-[1px]"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-[#F4F7FA]" />
                <span>Connect on LinkedIn</span>
              </a>
            </div>

            <ul className="space-y-3 text-xs text-[#F4F7FA]/80">
              <li>
                <a
                  href="https://github.com/deepakkumarmajhi-git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#3B82F6] transition-colors flex items-center justify-between group"
                >
                  <span className="flex items-center gap-2">
                    <GithubIcon className="w-3.5 h-3.5 text-[#F4F7FA]/60 group-hover:text-[#3B82F6]" />
                    <span>GitHub</span>
                  </span>
                  <ArrowUpRight className="w-3 h-3 text-[#F4F7FA]/40 group-hover:text-[#3B82F6]" />
                </a>
              </li>
              <li>
                <a
                  href="https://leetcode.com/u/hello_deepak"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#3B82F6] transition-colors flex items-center justify-between group"
                >
                  <span className="flex items-center gap-2">
                    <LeetcodeIcon className="w-3.5 h-3.5 text-[#F4F7FA]/60 group-hover:text-[#3B82F6]" />
                    <span>LeetCode</span>
                  </span>
                  <ArrowUpRight className="w-3 h-3 text-[#F4F7FA]/40 group-hover:text-[#3B82F6]" />
                </a>
              </li>
              <li>
                <a
                  href="mailto:mdeepakkumar443@gmail.com"
                  className="hover:text-[#3B82F6] transition-colors flex items-center justify-between group"
                >
                  <span className="flex items-center gap-2">
                    <MailIcon className="w-3.5 h-3.5 text-[#F4F7FA]/60 group-hover:text-[#3B82F6]" />
                    <span>Email</span>
                  </span>
                  <ArrowUpRight className="w-3 h-3 text-[#F4F7FA]/40 group-hover:text-[#3B82F6]" />
                </a>
              </li>
            </ul>
          </div>

          {/* LOCATION & TIME Column */}
          <div className="p-6 sm:p-8 space-y-4">
            <span className="text-[#F4F7FA]/40 uppercase tracking-widest text-[11px] block">
              LOCATION &amp; TIME
            </span>
            <div className="space-y-2 text-xs text-[#F4F7FA]/80 leading-relaxed">
              <p className="text-[#F4F7FA] font-medium">Bhubaneswar, Odisha, India</p>
              <p>Local time: {timeString}</p>
              <p className="text-[#F4F7FA]/45 text-[11px]">UTC+05:30 / IST</p>
            </div>
          </div>

          {/* COPYRIGHT & BACK TO TOP Column */}
          <div className="p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-[#F4F7FA]/40 uppercase tracking-widest text-[11px] block">
                COPYRIGHT
              </span>
              <p className="text-xs text-[#F4F7FA]/75 leading-relaxed">
                © 2026 Deepak Kumar Majhi. All rights reserved.
              </p>
            </div>

            <div>
              <button
                type="button"
                onClick={scrollToTop}
                className="group inline-flex items-center gap-1.5 text-xs text-[#F4F7FA] hover:text-[#3B82F6] transition-colors font-mono tracking-wider"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}