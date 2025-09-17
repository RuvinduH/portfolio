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
    let raf = 0;
    const mdMin = 768; // Tailwind md

    const docTop = (el: HTMLElement) =>
      el.getBoundingClientRect().top + window.scrollY;

    const visibleLinks = () => {
      const isMdUp = window.innerWidth >= mdMin;
      return LINKS.filter((l) => (isMdUp ? true : !l.hideMd));
    };

    type Threshold = { id: string; top: number; el?: HTMLElement | null };

    const buildThresholds = (): Threshold[] => {
      const vis = visibleLinks();
      const list: Threshold[] = vis.map((l) => {
        if (l.id === "home" || l.href === "#") {
          return { id: "home", top: 0, el: null };
        }
        const el = document.querySelector<HTMLElement>(l.href);
        if (!el) return { id: l.id, top: Number.POSITIVE_INFINITY, el: null };
        return { id: l.id, top: docTop(el), el };
      });

      // remove items whose target isn't in the DOM (except home)
      const filtered = list.filter(
        (t) => t.id === "home" || Number.isFinite(t.top)
      );
      filtered.sort((a, b) => a.top - b.top);
      return filtered;
    };

    const headerOffset = () => (navRef.current?.offsetHeight ?? 56) + 32;

    let thresholds = buildThresholds();

    const pickActive = (y: number) => {
      // last visible threshold whose top <= y
      let current = thresholds[0]?.id ?? "home";
      for (let i = 0; i < thresholds.length; i++) {
        if (y >= thresholds[i].top) current = thresholds[i].id;
        else break;
      }
      return current;
    };

    const updateActive = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY + headerOffset();
        let current = pickActive(y);

        // bottom of page -> last VISIBLE nav item for this viewport
        const docHeight = document.documentElement.scrollHeight;
        if (y + window.innerHeight >= docHeight - 1) {
          current = thresholds[thresholds.length - 1]?.id ?? current;
        }
        setActive(current);
      });
    };

    const recompute = () => {
      thresholds = buildThresholds();
      updateActive();
    };

    // Observe only real sections (skip home/#)
    const ro = new ResizeObserver(recompute);
    thresholds.forEach((t) => {
      if (t.el) ro.observe(t.el);
    });

    // init + listeners
    recompute();
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", recompute);
    window.addEventListener("load", recompute);

    return () => {
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", recompute);
      window.removeEventListener("load", recompute);
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
              <AnimatePresence>
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-white"
                    transition={{ type: "spring", stiffness: 500, damping: 40 }}
                  />
                )}
              </AnimatePresence>
              <span className="relative z-10 font-semibold">{label}</span>
            </a>
          );
        })}
      </nav>
    </div>
  );
};
