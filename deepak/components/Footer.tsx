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
    <footer className="mt-auto border-t border-[#192434]/[0.08] bg-[#F4F7FA] text-[#192434]">
      {/* Top Banner Bar */}
      <div className="max-w-7xl mx-auto border-x border-[#192434]/[0.08]">
        {/* Big CTA Section */}
        <div className="px-6 sm:px-10 py-12 sm:py-16 md:py-20 border-b border-[#192434]/[0.08]">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-light leading-[1.18] uppercase tracking-tight text-[#192434]">
            WANT TO START
            <br />
            A PROJECT?
            <br />
            <span className="text-[#0B46A3] font-normal">[LET&apos;S COLLABORATE.]</span>
          </h2>

          <div className="mt-8 sm:mt-10">
            <a
              href="mailto:mdeepakkumar443@gmail.com"
              className="group inline-flex items-center gap-3 text-2xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-light text-[#192434] hover:text-[#0B46A3] transition-colors tracking-tight"
            >
              <span>mdeepakkumar443@gmail.com</span>
              <ArrowUpRight className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-[#0B46A3] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 shrink-0" />
            </a>
          </div>
        </div>

        {/* 4-Column Swiss Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#192434]/[0.08] text-xs font-mono">
          {/* NAV Column */}
          <div className="p-6 sm:p-8 space-y-4">
            <span className="text-[#192434]/40 uppercase tracking-widest text-[11px] block">
              NAV
            </span>
            <ul className="space-y-2.5 text-xs text-[#192434]/80">
              <li>
                <Link
                  href="/works"
                  className="hover:text-[#0B46A3] transition-colors"
                >
                  Work
                </Link>
              </li>
              <li>
                <Link
                  href="/research"
                  className="hover:text-[#0B46A3] transition-colors"
                >
                  Research
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-[#0B46A3] transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#0B46A3] transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* SOCIALS Column */}
          <div className="p-6 sm:p-8 space-y-4">
            <span className="text-[#192434]/40 uppercase tracking-widest text-[11px] block">
              SOCIALS
            </span>
            <ul className="space-y-3 text-xs text-[#192434]/80">
              <li>
                <a
                  href="https://github.com/deepakkumarmajhi-git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#0B46A3] transition-colors flex items-center justify-between group"
                >
                  <span className="flex items-center gap-2">
                    <GithubIcon className="w-3.5 h-3.5 text-[#192434]/60 group-hover:text-[#0B46A3]" />
                    <span>GitHub</span>
                  </span>
                  <ArrowUpRight className="w-3 h-3 text-[#192434]/40 group-hover:text-[#0B46A3]" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/deepakmajhihello/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#0B46A3] transition-colors flex items-center justify-between group"
                >
                  <span className="flex items-center gap-2">
                    <LinkedinIcon className="w-3.5 h-3.5 text-[#192434]/60 group-hover:text-[#0B46A3]" />
                    <span>LinkedIn</span>
                  </span>
                  <ArrowUpRight className="w-3 h-3 text-[#192434]/40 group-hover:text-[#0B46A3]" />
                </a>
              </li>
              <li>
                <a
                  href="https://leetcode.com/u/hello_deepak"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#0B46A3] transition-colors flex items-center justify-between group"
                >
                  <span className="flex items-center gap-2">
                    <LeetcodeIcon className="w-3.5 h-3.5 text-[#192434]/60 group-hover:text-[#0B46A3]" />
                    <span>LeetCode</span>
                  </span>
                  <ArrowUpRight className="w-3 h-3 text-[#192434]/40 group-hover:text-[#0B46A3]" />
                </a>
              </li>
              <li>
                <a
                  href="mailto:mdeepakkumar443@gmail.com"
                  className="hover:text-[#0B46A3] transition-colors flex items-center justify-between group"
                >
                  <span className="flex items-center gap-2">
                    <MailIcon className="w-3.5 h-3.5 text-[#192434]/60 group-hover:text-[#0B46A3]" />
                    <span>Email</span>
                  </span>
                  <ArrowUpRight className="w-3 h-3 text-[#192434]/40 group-hover:text-[#0B46A3]" />
                </a>
              </li>
            </ul>
          </div>

          {/* DETAILS Column */}
          <div className="p-6 sm:p-8 space-y-4">
            <span className="text-[#192434]/40 uppercase tracking-widest text-[11px] block">
              LOCATION &amp; TIME
            </span>
            <div className="space-y-2 text-xs text-[#192434]/80 leading-relaxed">
              <p className="text-[#192434] font-medium">Bhubaneswar, Odisha, India</p>
              <p>Local time: {timeString}</p>
              <p className="text-[#192434]/50 text-[11px]">UTC+05:30 / IST</p>
            </div>
          </div>

          {/* COPYRIGHT & BACK TO TOP Column */}
          <div className="p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-2">
              <span className="text-[#192434]/40 uppercase tracking-widest text-[11px] block">
                COPYRIGHT
              </span>
              <p className="text-xs text-[#192434]/70 leading-relaxed">
                © 2026 Deepak Kumar Majhi. All rights reserved.
              </p>
            </div>

            <div>
              <button
                type="button"
                onClick={scrollToTop}
                className="group inline-flex items-center gap-1.5 text-xs text-[#192434] hover:text-[#0B46A3] transition-colors font-mono tracking-wider"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer >
  );
}
