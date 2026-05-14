import { SectionHeader } from "./SectionHeader";

const CAREER_HEADER = {
  num: "04 /",
  prefix: "My ",
  highlight: "path",
  circle: {
    viewBox: "0 0 150 80",
    path: "M 16 60 Q 4 42, 14 22 Q 30 6, 70 6 Q 120 6, 140 20 Q 152 38, 142 56 Q 126 72, 86 74 Q 36 76, 16 64 Q 8 56, 22 54",
  },
  meta: "career timeline",
} as const;

type CareerItem = {
  period: string;
  title: string;
  description: string;
  current?: boolean;
  handNote?: string;
};

const CAREER_ITEMS: readonly CareerItem[] = [
  {
    period: "NOW · 2026",
    title: "Open to new opportunities",
    handNote: "← here!",
    current: true,
    description:
      "自社プロダクトを持つ会社で、腰を据えてプロダクトに関わりたい。\n領域横断のスタイルを活かせる環境を探しています。",
  },
  {
    period: "2026",
    title: "ホロライブコメント検索 公開",
    description:
      "Claude Codeとの協働開発を本格的に試した個人プロジェクト。1週間で公開、運用継続中。",
  },
  {
    period: "2025",
    title: "応用情報技術者試験 合格",
    description: "基礎知識を体系化する目的で取得。実務との往復で土台を強くした。",
  },
  {
    period: "2024 — 2026",
    title: "Web開発会社にて · タテマンガ投稿サービス開発",
    description:
      "大手出版社のタテマンガ投稿サービスを受託開発・保守。フロント中心にバックエンドも横断。並行して在籍企業のコーポレートサイトリニューアル(多言語化対応)も担当。",
  },
  {
    period: "2024",
    title: "コレミナ 公開",
    description:
      "Next.js + Prisma + Neonを独学で構築。AIなしで2ヶ月かけて作りきった、初の本格個人プロダクト。",
  },
  {
    period: "2022 — 2024",
    title: "Web制作会社にてコーディング · 2年半",
    description:
      "数十〜数百ページ規模のコーポレートサイト制作、WordPress構築、後輩指導。マークアップとデザイン実装の地力を固めた時期。",
  },
  {
    period: "2019 — 2022",
    title: "塾講師 · 2年半",
    description:
      "中3〜高2の数学を集団授業で担当。進路相談・三者面談も。人に教える経験は、その後のレビュー文化や後輩指導にも繋がっています。",
  },
];

export function Career() {
  return (
    <section id="career" className="relative px-5 py-10 md:px-8 md:py-14">
      <div className="mx-auto w-full max-w-[1120px]">
        <SectionHeader {...CAREER_HEADER} />

        <ol className="relative pl-8 before:absolute before:bottom-2 before:left-2 before:top-2 before:w-0.5 before:bg-ink">
          {CAREER_ITEMS.map((item, index) => (
            <li
              key={`${item.period}-${item.title}`}
              className={`relative ${
                index === CAREER_ITEMS.length - 1 ? "" : "pb-8"
              }`}
            >
              <span
                aria-hidden
                className={`absolute -left-[30px] top-1.5 size-[18px] rounded-full border-[3px] border-ink ${
                  item.current
                    ? "bg-brand-orange shadow-[0_0_0_5px_rgba(255,107,53,0.2)]"
                    : "bg-paper"
                }`}
              />
              <p className="mb-1 font-mono text-xs font-bold tracking-wider text-ink-dim">
                {item.period}
              </p>
              <h3 className="mb-1.5 font-sans text-xl font-extrabold leading-snug text-ink">
                {item.title}
                {item.handNote && (
                  <span className="ml-2 font-hand text-[22px] font-bold text-brand-orange">
                    {item.handNote}
                  </span>
                )}
              </h3>
              <p className="whitespace-pre-line text-sm leading-[1.7] text-ink-soft">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
