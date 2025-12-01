import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface ScrollArrowProps {
  sections: string[]; // Lista de IDs del DOM en orden
}

export default function ScrollArrow({ sections }: ScrollArrowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Detectar sección visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sections.indexOf(entry.target.id);
            if (index !== -1) setCurrentIndex(index);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  const isLast = currentIndex === sections.length - 1;

  const nextSectionId = !isLast ? sections[currentIndex + 1] : null;

  if (isLast || !nextSectionId) return null;

  return (
    <a
      href={`#${nextSectionId}`}
      className="fixed left-1/2 -translate-x-1/2 bottom-8 z-50 cursor-pointer"
    >
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        className="w-14 h-14 flex items-center justify-center rounded-full
                   bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl
                   hover:scale-110 transition-all duration-300"
        style={{
          boxShadow:
            "0 0 20px rgba(0, 119, 182, 0.6), inset 0 0 12px rgba(0,119,182,0.5)"
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="#80A2CE"
          className="w-7 h-7 drop-shadow-[0_0_8px_rgba(0,119,182,0.8)]"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </motion.div>
    </a>
  );
}
