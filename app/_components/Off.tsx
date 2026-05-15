import { AizuIcon } from "./icons/AizuIcon";
import { MicIcon } from "./icons/MicIcon";
import { WalkIcon } from "./icons/WalkIcon";
import { OffCard } from "./OffCard";
import { SectionHeader } from "./SectionHeader";

const OFF_HEADER = {
  num: "05 /",
  prefix: "Off the ",
  highlight: "keyboard",
  circle: {
    viewBox: "0 0 260 80",
    path: "M 22 60 Q 6 44, 14 24 Q 32 8, 90 6 Q 180 4, 232 18 Q 252 32, 246 54 Q 230 72, 156 74 Q 60 76, 22 64 Q 12 56, 28 54",
  },
  meta: "仕事の外で",
} as const;

export function Off() {
  return (
    <section id="off" className="relative px-5 py-10 md:px-8 md:py-14">
      <div className="mx-auto w-full max-w-[1120px]">
        <SectionHeader {...OFF_HEADER} />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          <OffCard
            index={0}
            label="— From"
            title="会津若松、出身です。"
            rotation="-rotate-1"
            icon={<AizuIcon />}
          >
            福島県・<strong>会津若松</strong>
            で生まれ育ちました。山と城下町と雪深い冬の記憶が、いまの自分のどこかにあります。
          </OffCard>

          <OffCard
            index={1}
            label="— Loving"
            title="にじさんじの沼、8年目。"
            rotation="rotate-[0.5deg]"
            icon={<MicIcon />}
          >
            VTuberグループ「<strong>にじさんじ</strong>
            」を2018年の始動時から推し続けて、気づけば<strong>8年目</strong>
            です。好きが高じて<strong>コレミナ</strong>
            を作り、その技術的興味の延長で
            <strong>ホロライブコメント検索</strong>も作りました。
          </OffCard>

          <OffCard
            index={2}
            label="— Doing"
            title="遠くまで、歩く。"
            rotation="-rotate-[0.8deg]"
            icon={<WalkIcon />}
          >
            長距離の徒歩が趣味で、<strong>16時間かけて温泉</strong>に行ったり、
            <strong>3日間かけて日光東照宮まで歩いた</strong>
            こともあります。淡々と続ける時間が、考えごとには一番いい。
          </OffCard>
        </div>
      </div>
    </section>
  );
}
