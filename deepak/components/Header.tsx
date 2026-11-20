"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { GithubIcon, LinkedinIcon, MailIcon, InstagramIcon } from "@/components/SocialIcons";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close mobile drawer when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Complete page freeze, blur, and click prevention when menu is open
  useEffect(() => {
    const mainEl = document.querySelector("main");
    const footerEl = document.querySelector("footer");

    if (mobileMenuOpen) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";

      if (mainEl) {
        mainEl.style.filter = "blur(8px)";
        mainEl.style.pointerEvents = "none";
        mainEl.style.userSelect = "none";
        mainEl.style.transition = "filter 0.25s ease-out";
      }
      if (footerEl) {
        footerEl.style.filter = "blur(8px)";
        footerEl.style.pointerEvents = "none";
        footerEl.style.userSelect = "none";
        footerEl.style.transition = "filter 0.25s ease-out";
      }
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      document.body.style.touchAction = "";

      if (mainEl) {
        mainEl.style.filter = "";
        mainEl.style.pointerEvents = "";
        mainEl.style.userSelect = "";
      }
      if (footerEl) {
        footerEl.style.filter = "";
        footerEl.style.pointerEvents = "";
        footerEl.style.userSelect = "";
      }
    }

    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      document.body.style.touchAction = "";

      if (mainEl) {
        mainEl.style.filter = "";
        mainEl.style.pointerEvents = "";
        mainEl.style.userSelect = "";
      }
      if (footerEl) {
        footerEl.style.filter = "";
        footerEl.style.pointerEvents = "";
        footerEl.style.userSelect = "";
      }
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Works", href: "/works" },
    { name: "Research", href: "/research" },
    { name: "About", href: "/about" },
    { name: "Resume", href: "/resume" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 bg-[#F4F7FA]/95 backdrop-blur-md border-b border-[#192434]/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {/* Brand Logo */}
            <div className="flex items-center">
              <Link
                href="/"
                className="group flex items-center gap-1.5 focus:outline-none"
                title="Deepak Kumar Majhi"
              >
                <span className="font-serif text-xl sm:text-2xl tracking-tight text-[#192434] transition-colors group-hover:text-[#0B46A3]">
                  DM.
                </span>
              </Link>
            </div>

            {/* Desktop Nav Links (Visible on md and up) */}
            <nav className="hidden md:flex items-center space-x-6 text-xs sm:text-[13px] font-mono uppercase tracking-wider text-[#192434]/70">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`transition-colors py-1 rounded-none ${isActive
                      ? "text-[#0B46A3] font-medium border-b border-[#0B46A3]"
                      : "hover:text-[#192434]"
                      }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* CTA Button (Desktop) */}
            <div className="hidden md:flex items-center">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider text-[#192434] border border-[#192434]/20 hover:border-[#0B46A3] hover:text-[#0B46A3] transition-all duration-200 bg-transparent cursor-pointer"
              >
                <span>{pathname === "/contact" ? "Let's Build" : "Get in touch"}</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#0B46A3]" />
              </Link>
            </div>

            {/* Mobile Menu Toggle Button (Visible on screens < md, hidden while menu is open) */}
            <div className="flex md:hidden items-center">
              {!mobileMenuOpen && (
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(true)}
                  className="w-10 h-10 flex items-center justify-center text-[#192434] hover:text-[#0B46A3] focus:outline-none border border-[#192434]/15 active:bg-[#192434]/5 transition-all cursor-pointer rounded-[2px]"
                  aria-label="Open navigation menu"
                >
                  <Menu className="w-5 h-5 text-[#192434]" />
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Portaled Mobile Menu Overlay & Drawer (Attached directly to document.body to prevent any CSS containment or clipping) */}
      {mounted &&
        createPortal(
          <AnimatePresence>
            {mobileMenuOpen && (
              <div className="fixed inset-0 z-[9999] md:hidden">
                {/* Full-Screen Glass Blur & Dark Dim Backdrop (Blocks all page interactions) */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  onClick={() => setMobileMenuOpen(false)}
                  onTouchMove={(e) => e.preventDefault()}
                  className="fixed inset-0 bg-[#0D131D]/60 backdrop-blur-md touch-none select-none pointer-events-auto"
                  aria-hidden="true"
                />

                {/* Slide-down Drawer */}
                <motion.div
                  initial={{ opacity: 0, y: -16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.24, ease: "easeOut" }}
                  className="relative z-10 w-full bg-[#F4F7FA] border-b border-[#192434]/15 shadow-2xl"
                >
                  {/* Top Bar inside Drawer */}
                  <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="flex items-center justify-between h-14 sm:h-16 border-b border-[#192434]/[0.08]">
                      <span className="font-serif text-xl sm:text-2xl tracking-tight text-[#192434]">
                        DM.
                      </span>
                      {/* Empty right placeholder keeping logo alignment clean */}
                      <div className="w-10 h-10" />
                    </div>
                  </div>

                  {/* Inner content scroll area */}
                  <div className="px-5 pt-4 pb-6 space-y-4 max-h-[calc(100dvh-9rem)] overflow-y-auto overscroll-contain">
                    {/* Nav Links with touch-friendly tap targets */}
                    <nav className="flex flex-col space-y-1.5">
                      {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                          <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className={`flex items-center justify-center py-3.5 px-4 text-sm sm:text-[15px] font-mono uppercase tracking-widest text-center transition-all rounded-[2px] ${isActive
                              ? "bg-[#0B46A3]/10 text-[#0B46A3] font-semibold"
                              : "text-[#192434]/80 hover:text-[#192434] hover:bg-[#192434]/5 active:bg-[#192434]/10"
                              }`}
                          >
                            <span>{link.name}</span>
                          </Link>
                        );
                      })}
                    </nav>

                    {/* Mobile CTA Button */}
                    <div className="pt-2 border-t border-[#192434]/10">
                      <Link
                        href="/contact"
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center justify-center gap-2 w-full py-3.5 px-4 text-xs font-mono uppercase tracking-widest text-[#F4F7FA] bg-[#192434] hover:bg-[#0B46A3] active:bg-[#0B46A3] transition-all shadow-sm rounded-[2px]"
                      >
                        <span>{pathname === "/contact" ? "Let's Build" : "Get in touch"}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#F4F7FA]" />
                      </Link>
                    </div>

                    {/* Quick Social Icons inside mobile drawer */}
                    <div className="pt-2 flex items-center justify-center gap-6 text-[#192434]/60">
                      <a
                        href="https://github.com/deepakkumarmajhi-git"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="p-2 hover:text-[#0B46A3] active:scale-90 transition-all"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/deepakmajhihello/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="p-2 hover:text-[#0B46A3] active:scale-90 transition-all"
                      >
                        <LinkedinIcon className="w-4 h-4" />
                      </a>
                      <a
                        href="https://www.instagram.com/maverick.dpk273"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="p-2 hover:text-[#0B46A3] active:scale-90 transition-all"
                      >
                        <InstagramIcon className="w-4 h-4" />
                      </a>
                      <a
                        href="mailto:mdeepakkumar443@gmail.com"
                        aria-label="Email"
                        className="p-2 hover:text-[#0B46A3] active:scale-90 transition-all"
                      >
                        <MailIcon className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  {/* Floating Cross Action Icon cleanly hovering under the menu drawer */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: -8 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: -8 }}
                    transition={{ delay: 0.05, duration: 0.2 }}
                    className="absolute left-1/2 -bottom-16 -translate-x-1/2 z-50 pointer-events-auto"
                  >
                    <button
                      type="button"
                      onClick={() => setMobileMenuOpen(false)}
                      className="group flex items-center justify-center w-12 h-12 rounded-full bg-[#192434] hover:bg-[#0B46A3] text-white shadow-[0_14px_30px_rgba(0,0,0,0.5)] border border-white/25 active:scale-90 transition-all duration-200 cursor-pointer"
                      aria-label="Close navigation menu"
                      title="Close menu"
                    >
                      <X className="w-5 h-5 text-[#F4F7FA] transition-transform duration-200 group-hover:rotate-90" />
                    </button>
                  </motion.div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
}
