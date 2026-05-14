const NAV_LINKS = [
  { href: "#about", label: "about" },
  { href: "#skills", label: "skills" },
  { href: "#projects", label: "projects" },
  { href: "#career", label: "career" },
  { href: "#off", label: "off" },
] as const;

export function Nav() {
  return (
    <nav
      aria-label="Primary navigation"
      className="sticky top-0 z-50 border-b border-border bg-paper/90 backdrop-blur supports-[backdrop-filter]:bg-paper/75"
    >
      <div className="mx-auto flex max-w-[1120px] items-center justify-between gap-6 px-8 py-3.5 max-[900px]:px-5 max-[900px]:py-3">
        <a
          href="#top"
          className="font-hand text-[26px] font-bold leading-none tracking-tight text-ink max-[560px]:text-[22px]"
        >
          Hiroshi.
        </a>

        <div className="hidden items-center gap-1 font-mono text-xs tracking-wide md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded px-3 py-1.5 text-ink-soft transition-colors hover:bg-highlight hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="rounded-md bg-ink px-3.5 py-2 font-mono text-xs font-bold tracking-wider text-paper transition-transform duration-150 ease-out hover:-translate-x-px hover:-translate-y-px hover:bg-brand-orange"
        >
          Contact me →
        </a>
      </div>
    </nav>
  );
}
