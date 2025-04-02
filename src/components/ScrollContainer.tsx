"use client";

import styles from "./ScrollContainer.module.css";
import { useRef, PropsWithChildren } from "react";
import { useScroll } from "@/hooks/useScroll";

type ScrollContainerProps = {
  buffer?: number;
  className?: string;
};

export default function ScrollContainer({
  buffer = 16,
  className = "",
  children,
}: PropsWithChildren<ScrollContainerProps>) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isReady = useScroll(scrollRef, { buffer });

  return (
    <div
      ref={scrollRef}
      className={[styles.scrollable, isReady && styles.ready, className]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}
