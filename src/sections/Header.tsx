"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LINKS = [
  { id: "home", label: "Home", href: "#", hideMd: false },
  { id: "skills", label: "Qualifications", href: "#skills", hideMd: true }, // hidden on mobile
  {
    id: "experiences",
    label: "Experience",
    href: "#experiences",
    hideMd: false,
  },
  {
    id: "testimonials",
    label: "Testimonials",
    href: "#testimonials",
    hideMd: true,
  }, // hidden on mobile
  { id: "projects", label: "Projects", href: "#projects", hideMd: false },
  { id: "about", label: "About", href: "#about", hideMd: false },
  { id: "contact", label: "Contact", href: "#contact", hideMd: true }, // hidden on mobile
];

export const Header = () => {
  const [active, setActive] = useState<string>("home");
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    type Entry = { id: string; el: HTMLElement; top: number };
    let entries: Entry[] = [];
    let raf = 0;

    const mdMin = 768; // Tailwind md breakpoint
    const headerOffset = () => (navRef.current?.offsetHeight ?? 56) + 32;

    const getVisibleIds = () => {
      const isMdUp = window.innerWidth >= mdMin;
      return LINKS.map((l) => l.id).filter((id, i) => {
        const link = LINKS[i];
        return isMdUp ? true : !link.hideMd; // on mobile, exclude hidden
      });
    };

    const computeEntries = () => {
      entries = LINKS.filter((l) => l.id !== "home") // "home" has no element
        .map((l) => {
          const el = document.querySelector<HTMLElement>(l.href);
          if (!el) return null;
          const top = el.getBoundingClientRect().top + window.scrollY;
          return { id: l.id, el, top };
        })
        .filter(Boolean) as Entry[];
      entries.sort((a, b) => a.top - b.top);
    };

    const pickActive = (y: number) => {
      const visibleIds = getVisibleIds();

      // 1) Find the last section whose top <= y
      let idx = -1;
      for (let i = 0; i < entries.length; i++) {
        if (y >= entries[i].top) idx = i;
        else break;
      }

      // 2) If none -> "home"
      if (idx < 0) return "home";

      // 3) If that section is hidden on this viewport, walk backward
      let chosen = entries[idx].id;
      if (!visibleIds.includes(chosen)) {
        for (let j = idx - 1; j >= 0; j--) {
          if (visibleIds.includes(entries[j].id)) {
            chosen = entries[j].id;
            break;
          }
        }
        // If still not found, fall back to "home"
        if (!visibleIds.includes(chosen)) return "home";
      }
      return chosen;
    };

    const updateActive = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY + headerOffset();
        let current = pickActive(y);

        // If at very bottom, choose the last VISIBLE link (not "contact" on mobile)
        const docHeight = document.documentElement.scrollHeight;
        if (y + window.innerHeight >= docHeight - 1) {
          const visibleIds = getVisibleIds();
          current = visibleIds[visibleIds.length - 1] || "home";
        }

        setActive(current);
      });
    };

    const handleResize = () => {
      computeEntries();
      updateActive();
    };

    // Recompute when sections resize (images/fonts load)
    const ro = new ResizeObserver(() => {
      computeEntries();
      updateActive();
    });

    // Init
    computeEntries();
    entries.forEach((e) => ro.observe(e.el));
    updateActive();

    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", handleResize);
    window.addEventListener("load", handleResize);

    return () => {
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("load", handleResize);
      ro.disconnect();
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      className="flex justify-center items-center fixed top-3 w-full z-10"
      ref={navRef}
    >
      <nav className="relative flex gap-0.5 md:gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        {LINKS.map(({ id, label, href, hideMd }) => {
          const isActive = active === id;
          return (
            <a
              key={id}
              href={href}
              className={`nav-item relative ${
                hideMd ? "hidden md:block" : ""
              } ${isActive ? "text-gray-900" : ""}`}
              aria-current={isActive ? "page" : undefined}
            >
              {/* animated pill */}
              <AnimatePresence>
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-white"
                    transition={{ type: "spring", stiffness: 500, damping: 40 }}
                  />
                )}
              </AnimatePresence>

              {/* label sits above the pill */}
              <span className="relative z-10 font-semibold">{label}</span>
            </a>
          );
        })}
      </nav>
    </div>
  );
};
