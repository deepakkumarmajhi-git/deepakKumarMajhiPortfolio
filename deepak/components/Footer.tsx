"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import {
  GithubIcon,
  LinkedinIcon,
  LeetcodeIcon,
  MailIcon,
  InstagramIcon,
} from "@/components/SocialIcons";

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

  return (
    <footer className="mt-auto w-full bg-[#0D131D] text-[#F4F7FA]">
      {/* Top Banner Bar */}
      <div className="max-w-7xl mx-auto">
        {/* Big CTA Section */}
        <div className="px-5 sm:px-10 py-10 sm:py-16 md:py-20 border-b border-white/10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-light leading-[1.18] uppercase tracking-tight text-[#F4F7FA]">
            WANT TO START
            <br />
            A PROJECT?
            <br />
            <span className="text-[#3B82F6] font-normal">
              LET&apos;S COLLABORATE.
            </span>
          </h2>

          <div className="mt-6 sm:mt-10">
            <a
              href="mailto:mdeepakkumar443@gmail.com"
              className="group inline-flex items-center gap-2 sm:gap-3 text-lg xs:text-xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-light text-[#F4F7FA] hover:text-[#3B82F6] transition-colors tracking-tight break-all sm:break-normal"
            >
              <span>mdeepakkumar443@gmail.com</span>
              <ArrowUpRight className="w-5 h-5 sm:w-8 sm:h-8 md:w-10 md:h-10 text-[#3B82F6] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 shrink-0" />
            </a>
          </div>
        </div>

        {/* 4-Column Grid (Adaptive 2-column layout on mobile) */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 text-xs font-mono">
          {/* NAV Column */}
          <div className="p-5 sm:p-8 space-y-3 sm:space-y-4">
            <span className="text-[10px] text-[#F4F7FA]/40 uppercase tracking-widest block sm:hidden">
              PAGES
            </span>
            <ul className="space-y-2 sm:space-y-2.5 text-xs text-[#F4F7FA]/80">
              <li>
                <Link
                  href="/works"
                  className="hover:text-[#3B82F6] transition-colors py-1 inline-block"
                >
                  Works
                </Link>
              </li>
              <li>
                <Link
                  href="/research"
                  className="hover:text-[#3B82F6] transition-colors py-1 inline-block"
                >
                  Research
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-[#3B82F6] transition-colors py-1 inline-block"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/resume"
                  className="hover:text-[#3B82F6] transition-colors py-1 inline-block"
                >
                  Resume
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#3B82F6] transition-colors py-1 inline-block"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* SOCIALS & CONNECTIONS Column */}
          <div className="p-5 sm:p-8 space-y-3 sm:space-y-4">
            <span className="text-[10px] text-[#F4F7FA]/40 uppercase tracking-widest block sm:hidden">
              CONNECT
            </span>
            <ul className="space-y-2.5 sm:space-y-3 text-xs text-[#F4F7FA]/80">
              <li>
                <a
                  href="https://www.linkedin.com/in/deepakmajhihello/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#3B82F6] transition-colors flex items-center justify-between group py-1"
                >
                  <span className="flex items-center gap-2">
                    <LinkedinIcon className="w-3.5 h-3.5 text-[#F4F7FA]/60 group-hover:text-[#3B82F6] shrink-0" />
                    <span>LinkedIn</span>
                  </span>
                  <ArrowUpRight className="w-3 h-3 text-[#F4F7FA]/40 group-hover:text-[#3B82F6] shrink-0" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/deepakkumarmajhi-git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#3B82F6] transition-colors flex items-center justify-between group py-1"
                >
                  <span className="flex items-center gap-2">
                    <GithubIcon className="w-3.5 h-3.5 text-[#F4F7FA]/60 group-hover:text-[#3B82F6] shrink-0" />
                    <span>GitHub</span>
                  </span>
                  <ArrowUpRight className="w-3 h-3 text-[#F4F7FA]/40 group-hover:text-[#3B82F6] shrink-0" />
                </a>
              </li>
              <li>
                <a
                  href="https://leetcode.com/u/hello_deepak"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#3B82F6] transition-colors flex items-center justify-between group py-1"
                >
                  <span className="flex items-center gap-2">
                    <LeetcodeIcon className="w-3.5 h-3.5 text-[#F4F7FA]/60 group-hover:text-[#3B82F6] shrink-0" />
                    <span>LeetCode</span>
                  </span>
                  <ArrowUpRight className="w-3 h-3 text-[#F4F7FA]/40 group-hover:text-[#3B82F6] shrink-0" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/maverick.dpk273"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#3B82F6] transition-colors flex items-center justify-between group py-1"
                >
                  <span className="flex items-center gap-2">
                    <InstagramIcon className="w-3.5 h-3.5 text-[#F4F7FA]/60 group-hover:text-[#3B82F6] shrink-0" />
                    <span>Instagram</span>
                  </span>
                  <ArrowUpRight className="w-3 h-3 text-[#F4F7FA]/40 group-hover:text-[#3B82F6] shrink-0" />
                </a>
              </li>
              <li>
                <a
                  href="mailto:mdeepakkumar443@gmail.com"
                  className="hover:text-[#3B82F6] transition-colors flex items-center justify-between group py-1"
                >
                  <span className="flex items-center gap-2">
                    <MailIcon className="w-3.5 h-3.5 text-[#F4F7FA]/60 group-hover:text-[#3B82F6] shrink-0" />
                    <span>Email</span>
                  </span>
                  <ArrowUpRight className="w-3 h-3 text-[#F4F7FA]/40 group-hover:text-[#3B82F6] shrink-0" />
                </a>
              </li>
            </ul>
          </div>

          {/* LOCATION & TIME Column */}
          <div className="col-span-2 sm:col-span-1 lg:col-span-1 p-5 sm:p-8 space-y-2 sm:space-y-4 flex flex-col justify-center items-center text-center border-t border-white/5 sm:border-t-0">
            <div className="space-y-1.5 sm:space-y-2 text-xs text-[#F4F7FA]/80 leading-relaxed">
              <p className="text-[#F4F7FA] font-medium">
                Bhubaneswar, Odisha, India
              </p>
              <p className="text-[11px] sm:text-xs text-[#F4F7FA]/60 font-mono">
                Local time: {timeString}
              </p>
            </div>
          </div>

          {/* COPYRIGHT Column */}
          <div className="col-span-2 sm:col-span-1 lg:col-span-1 p-5 sm:p-8 space-y-2 sm:space-y-4 flex flex-col justify-center items-center text-center border-t border-white/5 sm:border-t-0">
            <p className="text-[11px] sm:text-xs text-[#F4F7FA]/60 leading-relaxed">
              © 2026 Deepak Kumar Majhi. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}