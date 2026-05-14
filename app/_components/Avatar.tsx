"use client";

import Image from "next/image";
import { useState } from "react";

const FRONT_SRC = "/avatar/front.png";
const BACK_SRC = "/avatar/back.png";

export function Avatar() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="relative h-[560px] w-[220px] md:h-[710px] md:w-[280px]">
      <button
        type="button"
        onClick={() => setIsFlipped((value) => !value)}
        aria-pressed={isFlipped}
        aria-label={
          isFlipped ? "アバターを元に戻す" : "アバターをクリックして切り替え"
        }
        className="relative block size-full cursor-pointer select-none"
      >
        <AvatarFace src={FRONT_SRC} visible={!isFlipped} fileLabel="front.png" />
        <AvatarFace src={BACK_SRC} visible={isFlipped} fileLabel="back.png" />
      </button>

      <span
        aria-hidden
        className="pointer-events-none absolute -right-4 top-7 rotate-[10deg] font-hand text-3xl font-bold leading-none text-brand-orange sm:text-[36px]"
      >
        Click
        <br />
        Me!
      </span>
    </div>
  );
}

function AvatarFace({
  src,
  visible,
  fileLabel,
}: {
  src: string;
  visible: boolean;
  fileLabel: string;
}) {
  const [hasError, setHasError] = useState(false);

  return (
    <div
      aria-hidden={!visible}
      className={`absolute inset-0 ${visible ? "opacity-100" : "opacity-0"}`}
    >
      {hasError ? (
        <div className="flex size-full flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-ink/30 px-6 text-center">
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-ink-dim">
            {fileLabel}
          </span>
          <span className="font-mono text-[11px] leading-relaxed text-ink-fade">
            public/avatar/ に画像を配置
          </span>
        </div>
      ) : (
        <Image
          src={src}
          alt=""
          fill
          sizes="(min-width: 768px) 280px, 220px"
          priority
          className="object-contain drop-shadow-[3px_4px_0_rgba(0,0,0,0.08)]"
          onError={() => setHasError(true)}
        />
      )}
    </div>
  );
}
