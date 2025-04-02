import styles from './ScrollContainer.module.css'

import { useRef, PropsWithChildren } from "react";
import { useScroll } from "@/hooks/useScroll";

type ScrollContainerProps = {
    buffer?: number;
    resetScrollOnDeps?: unknown[];
    className?: string; // allows local overrides
  };

  export default function ScrollContainer({
    buffer = 16,
    resetScrollOnDeps = [],
    className = "",
    children,
  }: PropsWithChildren<ScrollContainerProps>) {
    const scrollRef = useRef<HTMLDivElement>(null);
  
    useScroll<HTMLDivElement>(scrollRef, { buffer, resetScrollOnDeps });
  
    return (
      <div ref={scrollRef} className={`${styles.scrollable} ${className}`}>
        {children}
      </div>
    );
  }