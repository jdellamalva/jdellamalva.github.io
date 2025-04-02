"use client";

import { useEffect, RefObject } from "react";

type useScrollOptions = {
  buffer?: number;
  resetScrollOnDeps?: any[];
};

export function useScroll<T extends HTMLElement>(
  ref: RefObject<T | null>,
  { buffer = 16, resetScrollOnDeps = [] }: useScrollOptions = {}
) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const updateHeight = () => {
      const top = el.getBoundingClientRect().top;
      const height = window.innerHeight - top - buffer;
      el.style.maxHeight = `${height}px`;
    };

    el.scrollTop = 0;
    
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, resetScrollOnDeps);
}
