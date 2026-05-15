import { ProjectCard } from "./ProjectCard";
import { SectionHeader } from "./SectionHeader";
import { type ShotData } from "./Shot";

const HOLO_SHOTS: readonly ShotData[] = [
  {
    src: "/projects/holo/01.png",
    caption: "ホロライブコメント検索 · 検索結果（「かわいい」）",
    url: "holo-comment.com",
    fileLabel: "holo/01.png",
  },
  {
    src: "/projects/holo/02.png",
    caption: "ホロライブコメント検索 · 動画詳細",
    url: "holo-comment.com",
    fileLabel: "holo/02.png",
  },
  {
    src: "/projects/holo/03.png",
    caption: "ホロライブコメント検索 · チャット一覧",
    url: "holo-comment.com",
    fileLabel: "holo/03.png",
  },
];

const KOREMINA_SHOTS: readonly ShotData[] = [
  {
    src: "/projects/koremina/01.png",
    caption: "コレミナ · トップページ",
    url: "koremina.vercel.app",
    fileLabel: "koremina/01.png",
  },
  {
    src: "/projects/koremina/02.png",
    caption: "コレミナ · 動画詳細",
    url: "koremina.vercel.app",
    fileLabel: "koremina/02.png",
  },
  {
    src: "/projects/koremina/03.png",
    caption: "コレミナ · マイページ",
    url: "koremina.vercel.app",
    fileLabel: "koremina/03.png",
  },
];

const PROJECTS_HEADER = {
  num: "03 /",
  prefix: "My ",
  highlight: "projects",
  circle: {
    viewBox: "0 0 240 80",
    path: "M 32 66 Q 8 50, 14 28 Q 30 8, 90 6 Q 170 4, 214 18 Q 232 30, 228 52 Q 218 70, 160 74 Q 70 76, 32 66 Q 22 60, 38 56",
  },
  meta: "05 works",
} as const;

export function Projects() {
  return (
    <section id="projects" className="relative px-5 py-10 md:px-8 md:py-14">
      <div className="mx-auto w-full max-w-[1120px]">
        <SectionHeader {...PROJECTS_HEADER} />

        <div className="grid gap-10">
          <ProjectCard
            index={0}
            variant="work-current"
            tag="業務 · 2024-2026"
            title="タテマンガ投稿Webサービス · 開発と保守"
            subtitle="大手出版社のタテマンガ投稿サービス · Web開発会社の一員として受託開発"
            meta={["業務 · 約1.5年", "受託開発"]}
            techStack={[
              { text: "Next.js", hot: true },
              { text: "TypeScript", hot: true },
              { text: "GraphQL" },
              { text: "urql" },
              { text: "Apollo Server" },
              { text: "Prisma" },
              { text: "PostgreSQL" },
              { text: "Tailwind" },
              { text: "shadcn/ui" },
              { text: "Storybook" },
              { text: "Chromatic" },
              { text: "Vitest" },
              { text: "Playwright" },
              { text: "Contentful" },
              { text: "AWS (CDK)" },
              { text: "Vercel" },
              { text: "Claude (TDD)" },
            ]}
            role="フロント主担当 + GraphQLリゾルバ追加 + DBスキーマ設計変更 + 機能設計 + AI活用での開発 + CloudWatchでの監視・ログ調査 + AWS CDK Pipelinesによるデプロイ"
          >
            <p>
              所属していたWeb開発会社が大手出版社から受託したタテマンガ投稿サービスの開発に参画。リリース後のフェーズから機能拡張・運用改善を担当し、
              <strong>フロントエンドとバックエンドを横断</strong>
              して開発してきました。インフラ構成は
              <strong>バックエンドはAWS、フロントエンドはVercelにデプロイ</strong>
              。
            </p>
            <ul>
              <li>
                <strong>URL限定公開機能の実装</strong>{" "}
                — URLを知っているユーザーのみ閲覧可能とする仕様で、設計から実装まで一貫して担当。DBに公開用キーのカラムを追加、GraphQL
                APIでキー検証してデータを返却制御、フロントは
                URLパラメータから取得しリクエストヘッダで連携。
              </li>
              <li>
                <strong>App Router化のリファクタリング</strong> — Pages Router
                から App Router
                への移行を実施。サーバーコンポーネントへの分離、データフェッチ戦略の見直し。
              </li>
              <li>
                <strong>漫画賞コンテストのLP・結果発表ページ制作</strong> —
                Contentful
                を活用して非エンジニアでも編集できる構造で構築。期間限定機能の応募フロー・管理画面の構築も担当。
              </li>
              <li>
                <strong>不正対策の実装</strong> —
                同一IPアドレスからのいいね重複カウントを防ぐロジックを設計・実装。
              </li>
              <li>
                <strong>編集部おすすめ作品の表示ロジック改修</strong> —
                既存のビジネスロジックを読み解き、運用課題に合わせて設計を見直した改修。
              </li>
              <li>
                運用中サービスでのスキーマ変更・マイグレーション、不具合対応、パフォーマンス改善を継続的に実施。
              </li>
            </ul>
            <p className="rounded-md border-l-[3px] border-brand-teal bg-highlight-teal px-3.5 py-3 text-[13px] leading-[1.7]">
              <strong>AIを組み込んだ業務開発：</strong>
              日々の開発に Claude を組み込み、
              <strong>TDDのサイクルでテストファースト</strong>
              に進めるルールで運用。機能実装をagenticに任せる、設計・アーキテクチャの壁打ち、リファクタリング相談、バグ調査、テストコード作成まで、用途に応じて活用しています。
            </p>
          </ProjectCard>

          <ProjectCard
            index={1}
            variant="work-current"
            tag="業務 · 2025"
            title="在籍企業のコーポレートサイトリニューアル"
            subtitle="所属していたWeb開発会社のコーポレートサイト制作 · 多言語化対応"
            meta={["業務 · 並行案件", "社内案件"]}
            techStack={[
              { text: "Next.js", hot: true },
              { text: "TypeScript", hot: true },
              { text: "next-intl" },
              { text: "Contentful" },
              { text: "Vercel" },
            ]}
            highlight="制作と開発、両方の文脈を持つ強みが活きた案件"
          >
            <p>
              メインプロジェクトの開発と並行して、
              <strong>所属していたWeb開発会社のコーポレートサイト</strong>
              リニューアルを担当。プロダクト開発と制作系の業務を行き来できる柔軟さを活かして関わりました。
            </p>
            <ul>
              <li>
                Headless CMS（Contentful）を採用し、
                <strong>非エンジニアでも更新できる運用</strong>を実現。
              </li>
              <li>
                <strong>多言語化(i18n)対応の実装</strong> —{" "}
                <code className="rounded-sm bg-black/5 px-1.5 py-0.5 font-mono text-[0.85em]">
                  next-intl
                </code>{" "}
                を採用し、ルーティング・コンテンツの両面で日本語・英語の出し分けを実装。
              </li>
              <li>
                デザインの忠実な再現、レスポンシブ対応、表示パフォーマンスのチューニング。
              </li>
              <li>
                Web制作で培ったマークアップ・ピクセルパーフェクトな実装力と、Webサービス開発で培ったコンポーネント設計を両立した実装。
              </li>
            </ul>
          </ProjectCard>

          <ProjectCard
            index={2}
            variant="work-past"
            tag="業務 · 2022-2024"
            title="Web制作期 · コーポレートサイト多数"
            subtitle="Web制作会社にて · 数十〜数百ページ規模の案件"
            meta={["業務 · 2年半", "受託制作"]}
            techStack={[
              { text: "HTML / CSS", hot: true },
              { text: "SCSS", hot: true },
              { text: "JavaScript" },
              { text: "EJS" },
              { text: "Webpack" },
              { text: "WordPress" },
              { text: "Docker" },
            ]}
            highlight="マークアップ・ピクセルパーフェクトな実装の地力を作った時期"
          >
            <p>
              キャリア最初のエンジニア職として、
              <strong>Web制作会社で2年半</strong>
              従事。新規コーディング・保守改修・後輩指導を担当しました。
            </p>
            <ul>
              <li>
                <strong>数十〜数百ページ規模のコーポレートサイト制作</strong>
                を多数担当。デザインの忠実な再現とアクセシビリティの両立。
              </li>
              <li>
                <strong>WordPress を含むサイト構築</strong> —
                テーマ開発、カスタム投稿タイプ設計、Docker
                を活用したローカル開発環境の整備。
              </li>
              <li>
                <strong>制作フローの効率化</strong> — EJS / Webpack / SCSS
                の構成でテンプレート化、複数案件で再利用可能な土台を作った。
              </li>
              <li>
                <strong>後輩指導</strong> —
                コードレビューや実装方針の助言、教える立場としての経験(塾講師時代の素地が活きた)。
              </li>
            </ul>
          </ProjectCard>

          <ProjectCard
            index={3}
            variant="personal"
            tag="個人開発 · 2026"
            title="ホロライブコメント検索"
            titleHref="https://www.holo-comment.com/"
            subtitle="配信ライブチャットの横断検索サービス · Claude Codeと協働で1週間"
            meta={["個人開発 · 1 week", "公開・運用中"]}
            shots={HOLO_SHOTS}
            techStack={[
              { text: "Next.js", hot: true },
              { text: "TypeScript", hot: true },
              { text: "AWS", hot: true },
              { text: "OpenSearch" },
              { text: "Lambda" },
              { text: "API Gateway" },
              { text: "Cloudflare" },
              { text: "YouTube API" },
              { text: "Claude Code" },
            ]}
            links={[
              {
                url: "https://www.holo-comment.com/",
                label: "holo-comment.com",
                icon: "external",
              },
            ]}
          >
            <p>
              ホロライブ所属メンバーのYouTube配信ライブチャットを横断キーワード検索できるファンメイドツール。
              <strong>Claude Codeとの協働で1週間で立ち上げ</strong>
              、運用中も改善を続けています。
            </p>
            <ul>
              <li>
                <strong>AWS + Cloudflare 構成の設計と実装</strong> —
                バックエンドは OpenSearch を中心に Lambda + API Gateway
                で検索API・データ取得処理を構築、フロントエンドは Cloudflare
                にデプロイ。個人プロジェクトでもインフラまで自分で組んだ。
              </li>
              <li>
                <strong>検索パフォーマンス改善をAIと協働</strong> —
                レスポンスを早くするためのインデックス設計・クエリ最適化を、Claude
                Codeと議論しながら反復改善。
              </li>
              <li>
                <strong>盛り上がりハイライトの自動抽出</strong> —
                配信ごとにコメント密度が最も集中した瞬間 TOP 5 を抽出する仕組み。
              </li>
              <li>
                <strong>コメント密度ヒートマップ</strong> —
                配信全体の盛り上がりを時系列で可視化。
              </li>
              <li>
                期間・チャンネル絞り込み、時刻クリックで該当箇所へジャンプ、独自ドメイン運用、支援導線の設計まで。
              </li>
            </ul>
            <p className="rounded-md border-l-[3px] border-brand-teal bg-highlight-teal px-3.5 py-2.5 text-[13px] leading-[1.7]">
              <strong>AI協働開発のリアルケース：</strong>
              2年前の個人開発（コレミナ）と比較して、立ち上げ速度・実装範囲の両面で
              <strong>大幅な変化</strong>
              を実感したプロジェクト。AIをどう使うかの感覚を実プロダクトで養った。
            </p>
          </ProjectCard>

          <ProjectCard
            index={4}
            variant="personal"
            tag="個人開発 · 2024"
            title="コレミナ"
            titleHref="https://koremina.vercel.app/"
            subtitle="にじさんじ非公式・おすすめ動画共有サービス"
            meta={["個人開発 · 2 months", "1,400件超の投稿"]}
            shots={KOREMINA_SHOTS}
            techStack={[
              { text: "Next.js", hot: true },
              { text: "TypeScript", hot: true },
              { text: "Prisma" },
              { text: "Neon (PostgreSQL)" },
              { text: "Auth.js" },
              { text: "shadcn/ui" },
              { text: "Vercel" },
            ]}
            links={[
              {
                url: "https://koremina.vercel.app/",
                label: "koremina.vercel.app",
                icon: "external",
              },
              {
                url: "https://github.com/HiroshiIgarash/koremina",
                label: "github.com/HiroshiIgarash/koremina",
                icon: "github",
              },
            ]}
          >
            <p>
              にじさんじ所属ライバーのおすすめ動画を、ファン同士で共有するためのWebサービス。
              <strong>
                エンジニア歴1年半時点、AIなしで自力で2ヶ月かけて作りきった
              </strong>
              初の本格的な個人プロダクトです。
            </p>
            <ul>
              <li>
                <strong>Auth.js (旧 NextAuth.js) でログイン機能を実装</strong>
                。投稿・リアクション・ブックマーク・推しライバーの設定等のユーザー固有機能を構築。
              </li>
              <li>
                動画投稿、ライバーでの絞り込み、ワード検索、ランダム表示、リアクション機能、ブックマーク機能を実装。
              </li>
              <li>
                <strong>Pick Up!（12時間ごと更新）</strong>
                、誕生日ライバーの自動表示、新着投稿のメール通知など、運用視点の機能を継続追加。
              </li>
              <li>
                当時は{" "}
                <strong>
                  Next.js / Prisma / shadcn/ui を公式ドキュメントを読み込みながら独学
                </strong>
                。AIに頼らず自力で構築したことで、フレームワークの動作原理を深く理解できた。
              </li>
              <li>
                公開後も継続運用中、コミュニティ内で利用され続けているプロダクト。
              </li>
            </ul>
          </ProjectCard>
        </div>
      </div>
    </section>
  );
}
