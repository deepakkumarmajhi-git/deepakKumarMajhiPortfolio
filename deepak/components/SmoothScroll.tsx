"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import React, { useEffect } from "react";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Enable smooth anchor link scrolling
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      if (anchor && anchor.hash && anchor.origin === window.location.origin) {
        const targetElement = document.querySelector(anchor.hash);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, []);

  return (
    <>
      {/* Top micro progress line for precision architectural feel */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-[#0B46A3] origin-left z-[100]"
        style={{ scaleX }}
      />
      {children}
    </>
  );
}

