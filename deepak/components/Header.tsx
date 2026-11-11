"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Works", href: "/works" },
    { name: "Research", href: "/research" },
    { name: "About", href: "/about" },
    { name: "Resume", href: "/resume" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#F4F7FA]/95 backdrop-blur-sm border-b border-[#192434]/[0.08]">
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

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-6 text-xs sm:text-[13px] font-mono uppercase tracking-wider text-[#192434]/70">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-colors py-1 rounded-none ${
                    isActive
                      ? "text-[#0B46A3] font-medium border-b border-[#0B46A3]"
                      : "hover:text-[#192434]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden sm:flex items-center">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider text-[#192434] border border-[#192434]/20 hover:border-[#0B46A3] hover:text-[#0B46A3] transition-all duration-200 bg-transparent"
            >
              <span>{pathname === "/contact" ? "Let's Build" : "Get in touch"}</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#0B46A3]" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex sm:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-[#192434] hover:text-[#0B46A3] focus:outline-none border border-[#192434]/15"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-4 h-4" />
              ) : (
                <Menu className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-t border-[#192434]/[0.08] bg-[#F4F7FA] px-4 pt-3 pb-5 space-y-3">
          <nav className="flex flex-col space-y-2 text-xs font-mono uppercase tracking-wider">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-2 px-3 border-l-2 transition-colors ${
                    isActive
                      ? "border-[#0B46A3] text-[#0B46A3] bg-[#0B46A3]/5"
                      : "border-transparent text-[#192434]/70 hover:text-[#192434]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
          <div className="pt-2">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between w-full px-3 py-2 text-xs font-mono uppercase tracking-wider text-[#192434] border border-[#192434]/20 hover:border-[#0B46A3] hover:text-[#0B46A3]"
            >
              <span>Get in touch</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#0B46A3]" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

