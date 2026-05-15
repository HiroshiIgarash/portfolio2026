import { HandHighlight } from "./HandHighlight";

const TOGETHER_CIRCLE = {
  viewBox: "0 0 300 80",
  path: "M 56 64 Q 14 48, 12 26 Q 28 8, 96 6 Q 200 4, 268 18 Q 290 32, 286 56 Q 270 72, 196 74 Q 76 76, 56 64 Q 44 56, 64 54",
} as const;

type ContactCard = {
  label: string;
  value: string;
  href: string;
  external?: boolean;
};

const CONTACTS: readonly ContactCard[] = [
  {
    label: "GITHUB",
    value: "@HiroshiIgarash",
    href: "https://github.com/HiroshiIgarash",
    external: true,
  },
  {
    label: "X (TWITTER)",
    value: "@jappaann_web",
    href: "https://x.com/jappaann_web",
    external: true,
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="relative mt-10 overflow-hidden bg-ink px-5 py-16 text-paper md:px-8"
    >
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="relative z-10 mx-auto w-full max-w-[1120px]">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-brand-orange">
          — Let&apos;s talk
        </p>
        <h2 className="mb-4 font-sans text-[clamp(40px,6vw,72px)] font-black leading-none tracking-tight text-paper">
          Let&apos;s build
          <br />
          something{" "}
          <HandHighlight circle={TOGETHER_CIRCLE}>together.</HandHighlight>
        </h2>
        <p className="mb-9 font-hand text-[26px] leading-snug text-paper/70">
          ご連絡は以下までお願いします。
        </p>

        <ul className="grid max-w-[600px] grid-cols-1 gap-4 sm:grid-cols-2">
          {CONTACTS.map((card) => (
            <li key={card.href}>
              <a
                href={card.href}
                target={card.external ? "_blank" : undefined}
                rel={card.external ? "noopener noreferrer" : undefined}
                className="block rounded-lg border-[1.5px] border-white/15 bg-white/[0.04] p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-orange hover:bg-brand-orange/15"
              >
                <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.15em] text-paper/50">
                  {card.label}
                </p>
                <p className="break-all font-mono text-sm font-medium text-paper">
                  {card.value}
                </p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
