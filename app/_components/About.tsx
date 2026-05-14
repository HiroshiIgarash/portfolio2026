import { ProfileCard } from "./ProfileCard";
import { SectionHeader } from "./SectionHeader";

const ABOUT_HEADER = {
  num: "01 /",
  prefix: "About ",
  highlight: "me",
  circle: {
    viewBox: "0 0 120 80",
    path: "M 18 70 Q 8 64, 8 52 Q 4 32, 14 18 Q 28 4, 60 4 Q 92 6, 110 18 Q 122 34, 114 52 Q 102 68, 64 72 Q 26 76, 14 66 Q 10 60, 26 56",
  },
  meta: "自己紹介",
} as const;

export function About() {
  return (
    <section id="about" className="relative px-5 py-10 md:px-8 md:py-14">
      <div className="mx-auto w-full max-w-[1120px]">
        <SectionHeader {...ABOUT_HEADER} />

        <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-[1.4fr_1fr]">
          <div className="space-y-[18px] leading-[1.9] text-ink-soft">
            <p className="text-[17px]">
              東京を拠点に活動するWeb系エンジニアです。
              <strong className="bg-highlight px-1 font-bold text-ink">
                最初のキャリアは塾講師
              </strong>
              (中3〜高2の数学を担当、進路相談・三者面談も)で、その後
              <strong className="bg-highlight px-1 font-bold text-ink">
                Web制作からエンジニアキャリアをスタート
              </strong>
              。現在はWebサービスの開発・運用に軸を移しています。コーポレートサイトの制作と、エンドユーザーが日々利用するプロダクトの開発・保守、どちらも経験があります。
            </p>
            <p>
              得意なのはフロントエンド（Next.js / TypeScript / React）ですが、
              <strong className="bg-highlight px-1 font-bold text-ink">
                「タスクを完遂するためなら領域を選ばない」
              </strong>
              のがスタンスです。GraphQLリゾルバの追加、ビジネスロジックのSQL修正など、
              <strong className="bg-highlight px-1 font-bold text-ink">
                設計から実装まで一貫して
              </strong>
              担当してきました。
            </p>
            <p>
              2年前にはAIなしで個人サービスを2ヶ月かけて作り、最近はClaude
              Codeと協働で別のサービスを1週間で公開しました。前職の業務でも、
              <strong className="bg-highlight px-1 font-bold text-ink">
                TDDのサイクルにClaudeを組み込んで開発
              </strong>
              を回しており、AIを単なる補完ではなく実装パートナーとして活用しています。
              <strong className="bg-highlight px-1 font-bold text-ink">
                「速く作れる」より、「速さと品質を両立できる」使い方
              </strong>
              を意識しています。
            </p>
          </div>

          <ProfileCard />
        </div>
      </div>
    </section>
  );
}
