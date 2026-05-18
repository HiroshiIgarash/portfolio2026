"use client";

import { cva, type VariantProps } from "class-variance-authority";

import { useInView } from "../_hooks/useInView";
import { type ShotData } from "./Shot";
import { ShotsGallery } from "./ShotsGallery";

const tagStyles = cva(
  "absolute -top-3.5 right-6 rotate-2 rounded border-2 border-ink px-3 py-1.5 font-mono text-[11px] font-bold tracking-[0.1em] text-white",
  {
    variants: {
      variant: {
        "work-current": "bg-brand-orange",
        "work-past": "bg-brand-teal",
        personal: "bg-brand-purple",
      },
    },
  },
);

type ProjectLink = {
  url: string;
  label: string;
  icon: "external" | "github";
};

type ProjectCardProps = Required<VariantProps<typeof tagStyles>> & {
  tag: string;
  title: string;
  titleHref?: string;
  subtitle: string;
  meta: readonly string[];
  techStack: ReadonlyArray<{ text: string; hot?: boolean }>;
  role?: string;
  highlight?: string;
  links?: readonly ProjectLink[];
  shots?: readonly ShotData[];
  index?: number;
  children: React.ReactNode;
};

export function ProjectCard({
  variant,
  tag,
  title,
  titleHref,
  subtitle,
  meta,
  techStack,
  role,
  highlight,
  links,
  shots,
  index = 0,
  children,
}: ProjectCardProps) {
  const { ref, inView } = useInView<HTMLElement>();
  const isReverse = index % 2 === 1;
  const initialTransform = isReverse
    ? "translate-x-8 translate-y-5 rotate-2"
    : "-translate-x-8 translate-y-5 -rotate-2";

  return (
    <article
      ref={ref}
      className={`relative rounded-lg border-2 border-ink bg-white p-7 shadow-[6px_6px_0_var(--ink)] transition-all duration-700 ease-[cubic-bezier(0.34,1.2,0.64,1)] md:p-8 ${
        inView
          ? "translate-x-0 translate-y-0 rotate-0 opacity-100"
          : `opacity-0 ${initialTransform}`
      }`}
    >
      <span className={tagStyles({ variant })}>{tag}</span>

      <header className="mb-3 flex flex-wrap items-start justify-between gap-x-6 gap-y-2">
        <div>
          <h3 className="font-sans text-[26px] font-black leading-tight tracking-tight text-ink md:text-[30px]">
            {titleHref ? (
              <a
                href={titleHref}
                target="_blank"
                rel="noopener noreferrer"
                className="border-b-[3px] border-highlight transition-colors hover:border-brand-orange"
              >
                {title}
              </a>
            ) : (
              title
            )}
          </h3>
          <p className="mt-1 font-jp text-[15px] font-medium leading-relaxed text-ink-soft">
            {subtitle}
          </p>
        </div>

        <ul className="flex flex-shrink-0 items-center gap-3.5 pt-1.5 font-mono text-xs text-ink-dim">
          {meta.map((item, index) => (
            <li key={item} className="inline-flex items-center gap-2.5">
              {index > 0 && (
                <span
                  aria-hidden
                  className="size-1.5 rounded-full bg-ink-dim"
                />
              )}
              {item}
            </li>
          ))}
        </ul>
      </header>

      {shots && shots.length > 0 && <ShotsGallery shots={shots} />}

      <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-[1.5fr_1fr]">
        <div className="space-y-3.5 text-[14.5px] leading-[1.85] text-ink-soft [&_ul]:my-2 [&_ul]:list-none [&_ul>li]:relative [&_ul>li]:py-1 [&_ul>li]:pl-5 [&_ul>li]:text-[14px] [&_ul>li]:before:absolute [&_ul>li]:before:left-0 [&_ul>li]:before:font-bold [&_ul>li]:before:text-brand-orange [&_ul>li]:before:content-['→']">
          {children}
        </div>

        <aside className="space-y-3.5">
          <SidebarBlock label="TECH STACK">
            <ul className="flex flex-wrap gap-1.5">
              {techStack.map((t) => (
                <li
                  key={t.text}
                  className={`rounded border border-ink px-2 py-1 font-mono text-[11px] font-medium ${
                    t.hot ? "bg-ink text-paper" : "bg-white text-ink"
                  }`}
                >
                  {t.text}
                </li>
              ))}
            </ul>
          </SidebarBlock>

          {role && (
            <SidebarBlock label="MY ROLE">
              <p className="text-[13px] leading-[1.7] text-ink-soft">{role}</p>
            </SidebarBlock>
          )}

          {highlight && (
            <SidebarBlock label="HIGHLIGHT">
              <p className="text-[13px] leading-[1.7] text-ink-soft">
                {highlight}
              </p>
            </SidebarBlock>
          )}

          {links && links.length > 0 && (
            <SidebarBlock label="LINKS">
              <ul className="flex flex-col gap-1">
                {links.map((l) => (
                  <li key={l.url}>
                    <a
                      href={l.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 break-all rounded px-2 py-1.5 font-mono text-[12px] text-ink transition-colors hover:bg-highlight"
                    >
                      {l.icon === "github" ? (
                        <GithubIcon />
                      ) : (
                        <ExternalLinkIcon />
                      )}
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </SidebarBlock>
          )}
        </aside>
      </div>
    </article>
  );
}

function SidebarBlock({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-md border-[1.5px] border-dashed border-rule-strong bg-paper p-[18px]">
      <h4 className="mb-2.5 font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-ink-dim">
        {label}
      </h4>
      {children}
    </div>
  );
}

function ExternalLinkIcon() {
  return (
    <svg
      aria-hidden
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="shrink-0"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg
      aria-hidden
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="shrink-0"
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}
