"use client";

import { useInView } from "../_hooks/useInView";
import { HandHighlight } from "./HandHighlight";

type HandCircle = {
  viewBox: string;
  path: string;
};

type SectionHeaderProps = {
  num: string;
  prefix: string;
  highlight: string;
  circle: HandCircle;
  meta: string;
};

const UNDERLINE_DASH = 1200;

export function SectionHeader({
  num,
  prefix,
  highlight,
  circle,
  meta,
}: SectionHeaderProps) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className="relative mb-10 flex flex-wrap items-baseline gap-x-6 gap-y-3 pb-4"
    >
      <span className="font-mono text-[13px] font-bold tracking-wider text-ink-fade">
        {num}
      </span>
      <h2 className="font-sans text-[clamp(32px,4vw,48px)] font-black leading-none tracking-tight text-ink">
        {prefix}
        <HandHighlight circle={circle}>{highlight}</HandHighlight>
      </h2>
      <span className="ml-auto font-mono text-xs text-ink-fade">{meta}</span>
      <svg
        aria-hidden
        viewBox="0 0 1200 12"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-x-0 -bottom-1 h-3 w-full"
      >
        <path
          d="M 4 7 Q 100 4, 220 7 T 460 8 Q 600 5, 780 7 T 1010 8 Q 1100 6, 1196 7"
          fill="none"
          stroke="var(--ink)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.7"
          strokeDasharray={UNDERLINE_DASH}
          strokeDashoffset={inView ? 0 : UNDERLINE_DASH}
          style={{
            transition:
              "stroke-dashoffset 1s cubic-bezier(0.55, 0.085, 0.68, 0.53)",
          }}
        />
      </svg>
    </div>
  );
}
