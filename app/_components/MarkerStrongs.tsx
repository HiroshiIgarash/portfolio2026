"use client";

import { useEffect } from "react";

const STAGGER_MS = 120;

export function MarkerStrongs() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const target = entry.target;
          const parent = target.parentElement;
          const siblings = parent
            ? Array.from(parent.querySelectorAll("strong"))
            : [target];
          const index = siblings.indexOf(target as HTMLElement);
          window.setTimeout(
            () => target.classList.add("lit"),
            Math.max(0, index * STAGGER_MS),
          );
          observer.unobserve(target);
        });
      },
      { threshold: 0.6, rootMargin: "0px 0px -10% 0px" },
    );

    const targets = document.querySelectorAll("section strong");
    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, []);

  return null;
}
