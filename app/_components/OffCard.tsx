"use client";

import { useInView } from "../_hooks/useInView";

type OffCardProps = {
  label: string;
  title: string;
  rotation: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  index?: number;
};

export function OffCard({
  label,
  title,
  rotation,
  icon,
  children,
  index = 0,
}: OffCardProps) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const delay = `${100 + index * 150}ms`;

  return (
    <div
      ref={ref}
      className={`relative rounded-md border-2 border-ink bg-white px-[22px] py-6 shadow-[5px_5px_0_var(--ink)] transition-all duration-[600ms] ease-[cubic-bezier(0.34,1.4,0.64,1)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[8px_8px_0_var(--ink)] ${
        inView ? `translate-y-0 opacity-100 ${rotation}` : "-rotate-[4deg] translate-y-6 opacity-0"
      }`}
      style={{ transitionDelay: inView ? delay : undefined }}
    >
      <p className="mb-3 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-brand-orange">
        {label}
      </p>
      <div className="mb-3.5 size-14" aria-hidden>
        {icon}
      </div>
      <h3 className="mb-3 font-jp text-xl font-extrabold leading-[1.4] tracking-tight text-ink">
        {title}
      </h3>
      <p className="text-sm leading-[1.75] text-ink-soft">
        {children}
      </p>
    </div>
  );
}
