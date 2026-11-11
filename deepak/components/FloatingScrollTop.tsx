"use client";

import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function FloatingScrollTop() {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsVisible(latest > 280);
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.9 }}
          whileHover={{ y: -3, scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 320, damping: 24 }}
          className="cursor-pointer group fixed bottom-5 right-5 sm:bottom-8 sm:right-8 z-50 flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-[#0D131D]/95 backdrop-blur-md text-[#F4F7FA] border border-white/15 shadow-[0_12px_32px_-8px_rgba(25,36,52,0.4)] transition-colors duration-300 hover:bg-[#0B46A3] hover:border-[#0B46A3]"
        >
          {/* Dual-Slot Vertical Launch Arrow */}
          <div className="relative h-4 w-4 overflow-hidden">
            <ArrowUp className="h-4 w-4 text-[#F4F7FA] transition-transform duration-300 ease-out group-hover:-translate-y-5" />
            <ArrowUp className="absolute top-5 left-0 h-4 w-4 text-[#F4F7FA] transition-transform duration-300 ease-out group-hover:-translate-y-5" />
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
