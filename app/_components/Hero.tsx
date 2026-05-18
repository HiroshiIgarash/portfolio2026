import { Avatar } from "./Avatar";

const HIROSHI = "Hiroshi";
const IGARASHI = "Igarashi";
const LETTER_STEP = 0.05;
const TITLE_START_DELAY = 0.15;

function SplitText({
  text,
  startDelay,
}: {
  text: string;
  startDelay: number;
}) {
  return (
    <>
      {Array.from(text).map((char, index) => (
        <span
          key={`${char}-${index}`}
          aria-hidden
          className="inline-block animate-hero-letter-drop opacity-0"
          style={{ animationDelay: `${startDelay + index * LETTER_STEP}s` }}
        >
          {char}
        </span>
      ))}
    </>
  );
}

export function Hero() {
  const igarashiDelay = TITLE_START_DELAY + HIROSHI.length * LETTER_STEP;

  return (
    <section className="relative px-5 pb-10 pt-14 md:px-8 md:pb-14 md:pt-20">
      <div className="mx-auto grid w-full max-w-[1120px] grid-cols-1 items-center gap-8 md:grid-cols-[1.5fr_1fr] md:gap-14">
        <div className="order-1 min-w-0 md:order-none">
          <span className="inline-block animate-hero-tape-drop bg-highlight px-[18px] py-2 font-hand text-xl text-ink opacity-0 shadow-[2px_3px_0_rgba(0,0,0,0.08)]">
            Hello, I&apos;m a web engineer.
          </span>

          <h1
            aria-label="Hiroshi Igarashi"
            className="mt-6 font-sans text-[clamp(44px,6.8vw,86px)] font-black leading-tight tracking-tight text-ink sm:whitespace-nowrap sm:leading-none"
          >
            <span className="relative inline-block">
              <SplitText text={HIROSHI} startDelay={TITLE_START_DELAY} />{" "}
              <SplitText text={IGARASHI} startDelay={igarashiDelay} />
              <svg
                aria-hidden
                viewBox="0 0 1400 50"
                preserveAspectRatio="none"
                className="pointer-events-none absolute -bottom-1.5 -left-[1%] h-[0.32em] w-[102%]"
              >
                <path
                  d="M 8 28 Q 120 18, 240 24 T 480 30 Q 620 22, 780 28 T 1060 30 Q 1200 25, 1390 32"
                  fill="none"
                  stroke="var(--brand-orange)"
                  strokeWidth="14"
                  strokeLinecap="round"
                  opacity="0.85"
                  strokeDasharray="1400"
                  strokeDashoffset="1400"
                  className="animate-hero-underline-draw"
                />
              </svg>
            </span>
          </h1>

          <p className="mt-4 origin-left -rotate-[0.5deg] font-hand text-[clamp(24px,3vw,36px)] text-ink-soft sm:whitespace-nowrap">
            I build products, carefully.
            <span className="ml-3 whitespace-nowrap font-jp text-[0.7em] font-medium text-ink-dim">
              — 五十嵐 大士
            </span>
          </p>

          <p className="mt-7 max-w-[640px] text-base leading-[1.85] text-ink-soft">
            31歳、Web系エンジニア(フロントエンド + バックエンド)。
            <strong>
              Web制作で2年半、Web開発で1年半
            </strong>
            、合計約4年の経験があります。フロントエンドを中心に、業務では
            <strong>
              バックエンドも横断
            </strong>
            して開発してきました。インフラは個人開発で AWS を組んだ経験などがあり、業務でも機会があれば関わっていきたい領域です。
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2.5 rounded-lg border-2 border-ink bg-ink px-5 py-3 font-mono text-[13px] font-bold tracking-wider text-paper transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:border-brand-orange hover:bg-brand-orange hover:shadow-[4px_4px_0_var(--ink)]"
            >
              <svg
                aria-hidden
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              >
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
              SEE PROJECTS
            </a>
          </div>
        </div>

        <div className="order-2 flex items-center justify-center md:order-none">
          <Avatar />
        </div>
      </div>
    </section>
  );
}
