import { Avatar } from "./Avatar";

export function Hero() {
  return (
    <section className="relative px-5 pb-10 pt-14 md:px-8 md:pb-14 md:pt-20">
      <div className="mx-auto grid w-full max-w-[1120px] grid-cols-1 items-center gap-8 md:grid-cols-[1.5fr_1fr] md:gap-14">
        <div className="order-1 min-w-0 md:order-none">
          <span className="inline-block -rotate-2 bg-highlight px-[18px] py-2 font-hand text-xl text-ink shadow-[2px_3px_0_rgba(0,0,0,0.08)]">
            Hello, I&apos;m a web engineer.
          </span>

          <h1 className="mt-6 font-sans text-[clamp(44px,6.8vw,86px)] font-black leading-tight tracking-tight text-ink sm:whitespace-nowrap sm:leading-none">
            Hiroshi{" "}
            <span className="relative inline-block">
              Igarashi
              <svg
                aria-hidden
                viewBox="0 0 820 50"
                preserveAspectRatio="none"
                className="pointer-events-none absolute -bottom-1.5 -left-[2%] h-[0.32em] w-[104%]"
              >
                <path
                  d="M 8 28 Q 60 18, 130 25 T 280 30 Q 380 22, 470 28 T 640 30 Q 720 25, 810 32"
                  fill="none"
                  stroke="var(--brand-orange)"
                  strokeWidth="14"
                  strokeLinecap="round"
                  opacity="0.85"
                />
              </svg>
            </span>
            <span className="text-brand-orange">.</span>
          </h1>

          <p className="mt-4 origin-left -rotate-[0.5deg] font-hand text-[clamp(24px,3vw,36px)] text-ink-soft sm:whitespace-nowrap">
            I build products, carefully.
            <span className="ml-3 whitespace-nowrap font-jp text-[0.7em] font-medium text-ink-dim">
              — 五十嵐 大士
            </span>
          </p>

          <p className="mt-7 max-w-[640px] text-base leading-[1.85] text-ink-soft">
            31歳、Web系エンジニア(フロントエンド + バックエンド)。
            <strong className="bg-highlight px-1 font-bold text-ink">
              Web制作で2年半、Web開発で1年半
            </strong>
            、合計約4年の経験があります。フロントエンドを中心に、業務では
            <strong className="bg-highlight px-1 font-bold text-ink">
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
