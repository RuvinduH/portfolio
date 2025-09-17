"use client";
import { useEffect, useState } from "react";

export type BP = "base" | "sm" | "md" | "lg" | "xl";

const BP_WIDTHS = { sm: 375, md: 768, lg: 1200, xl: 1920 } as const;

export function useBreakpoint(): BP {
  const [bp, setBp] = useState<BP>("base");

  useEffect(() => {
    const onResize = () => {
      const w = window.innerWidth;
      setBp(
        w >= BP_WIDTHS.xl ? "xl" :
        w >= BP_WIDTHS.lg ? "lg" :
        w >= BP_WIDTHS.md ? "md" :
        w >= BP_WIDTHS.sm ? "sm" : "base"
      );
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return bp;
}