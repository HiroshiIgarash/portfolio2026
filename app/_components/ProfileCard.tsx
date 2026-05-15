"use client";

import { useInView } from "../_hooks/useInView";

const PROFILE = [
  {
    label: "Name",
    primary: "五十嵐 大士",
    secondary: "HIROSHI IGARASHI",
  },
  { label: "Age", primary: "31" },
  { label: "Based", primary: "Tokyo, Japan" },
  {
    label: "Experience",
    primary: "~4 years",
    secondary: "制作 2.5y + 開発 1.5y",
  },
  {
    label: "Role",
    primary: "Frontend + Backend",
    secondary: "Web Engineer",
  },
  { label: "Status", primary: "▸ Open to work" },
] as const;

export function ProfileCard() {
  const { ref, inView } = useInView<HTMLElement>();

  return (
    <aside
      ref={ref}
      className={`relative rounded-md border-2 border-ink bg-white p-7 shadow-[6px_6px_0_var(--ink)] transition-all duration-700 ease-[cubic-bezier(0.34,1.4,0.64,1)] ${
        inView
          ? "translate-y-0 rotate-[0.8deg] opacity-100"
          : "translate-y-5 rotate-[8deg] opacity-0"
      }`}
    >
      <span
        aria-hidden
        className="absolute -top-3.5 left-1/2 size-7 -translate-x-1/2 rounded-full border-2 border-ink bg-brand-orange shadow-[0_2px_0_rgba(0,0,0,0.15)]"
      />
      <h3 className="mb-[18px] border-b border-dashed border-ink/40 pb-3 text-center font-hand text-3xl font-bold text-ink">
        profile card
      </h3>
      <dl className="grid grid-cols-[100px_1fr] gap-x-4 gap-y-2.5 text-sm">
        {PROFILE.map((row) => {
          const isStatus = row.label === "Status";
          return (
            <div key={row.label} className="contents">
              <dt className="pt-0.5 font-mono text-[11px] uppercase tracking-wider text-ink-dim">
                {row.label}
              </dt>
              <dd
                className={`font-medium ${
                  isStatus ? "font-bold text-brand-orange" : "text-ink"
                }`}
              >
                {row.primary}
                {"secondary" in row && row.secondary && (
                  <>
                    <br />
                    <span className="font-mono text-[11px] text-ink-dim">
                      {row.secondary}
                    </span>
                  </>
                )}
              </dd>
            </div>
          );
        })}
      </dl>
    </aside>
  );
}
