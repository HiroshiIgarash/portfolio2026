import { SectionHeader } from "./SectionHeader";
import { SkillGroup } from "./SkillGroup";

const SKILLS_HEADER = {
  num: "02 /",
  prefix: "What I ",
  highlight: "use",
  circle: {
    viewBox: "0 0 140 80",
    path: "M 20 64 Q 6 48, 14 26 Q 28 8, 66 8 Q 108 8, 128 22 Q 142 40, 132 60 Q 118 74, 78 74 Q 32 76, 18 64 Q 12 58, 26 56",
  },
  meta: "skills & stack",
} as const;

const FRONTEND = {
  title: "FRONTEND",
  color: "orange",
  items: [
    { text: "TypeScript", primary: true },
    { text: "Next.js (App Router)", primary: true },
    { text: "React", primary: true },
    { text: "Tailwind / shadcn/ui" },
    { text: "urql (GraphQL Client)" },
    { text: "HTML / CSS / SCSS" },
  ],
} as const;

const BACKEND = {
  title: "BACKEND",
  color: "teal",
  items: [
    { text: "Node.js / Express", primary: true },
    { text: "GraphQL (Apollo Server)", primary: true },
    { text: "Prisma", primary: true },
    { text: "PostgreSQL (Neon)" },
  ],
} as const;

const INFRA = {
  title: "INFRA / TESTING / TOOLS",
  color: "purple",
  items: [
    { text: "AWS", primary: true },
    { text: "Claude Code (業務でTDD運用)", primary: true },
    { text: "Vitest / Playwright / Storybook / Chromatic" },
    { text: "Contentful · next-intl (i18n)" },
    { text: "Vercel / Docker / Git / GitHub" },
    { text: "応用情報技術者試験 合格(2025)" },
  ],
} as const;

export function Skills() {
  return (
    <section id="skills" className="relative px-5 py-10 md:px-8 md:py-14">
      <div className="mx-auto w-full max-w-[1120px]">
        <SectionHeader {...SKILLS_HEADER} />

        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          <SkillGroup {...FRONTEND} index={0} />
          <SkillGroup {...BACKEND} index={1} />
          <SkillGroup {...INFRA} index={2} />
        </div>

        <div className="relative -rotate-[0.3deg] rounded-lg border-[1.5px] border-dashed border-ink bg-highlight-teal px-[22px] py-[18px] font-hand text-[22px] leading-snug text-ink">
          <span className="absolute -top-2.5 left-4 bg-paper px-2 font-mono text-[10px] font-bold tracking-[0.15em] text-ink">
            NOTE
          </span>
          <strong className="bg-highlight px-1 font-bold">
            フロントエンドとバックエンドの垣根を意識せず
          </strong>
          、機能を完成させるために、領域を選ばず取り組むスタンスです。
        </div>
      </div>
    </section>
  );
}
