"use client";

import { useEffect, useState } from "react";
import { useMediaQuery } from "@/components/site/hooks";

export function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [hidden, setHidden] = useState(false);
  const mobile = useMediaQuery("(max-width: 767px)");

  useEffect(() => {
    if (mobile) {
      return;
    }

    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const onOver = (e: Event) => {
      const target = e.target as HTMLElement;
      setHovered(Boolean(target.closest("a, button, input, textarea, select, .magnetic")));
      setHidden(Boolean(target.closest("canvas")));
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
    };
  }, [mobile]);

  if (mobile) {
    return null;
  }

  return (
    <div className={`cursor-wrap ${hidden ? "is-hidden" : ""}`}>
      <span className="cursor-dot" style={{ transform: `translate3d(${pos.x}px, ${pos.y}px, 0)` }} />
      <span
        className={`cursor-ring ${hovered ? "is-hovered" : ""}`}
        style={{ transform: `translate3d(${pos.x}px, ${pos.y}px, 0)` }}
      />
    </div>
  );
}
