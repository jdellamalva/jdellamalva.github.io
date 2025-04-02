"use client";

import { useEffect, useState, RefObject } from "react";

type useScrollOptions = {
  buffer?: number;
};

export function useScroll<T extends HTMLElement>(
  ref: RefObject<T | null>,
  { buffer = 16 }: useScrollOptions = {}
): boolean {
  const [ready, setReady] = useState(false);

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
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setReady(true);
        });
      });

    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, [ref, buffer]);

  return ready;
}
