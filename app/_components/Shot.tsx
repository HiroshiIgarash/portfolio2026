"use client";

import Image from "next/image";
import { useState } from "react";

export type ShotData = {
  src: string;
  caption: string;
  url: string;
  fileLabel: string;
};

type ShotProps = {
  shot: ShotData;
  onOpen: () => void;
  rotation: string;
};

export function Shot({ shot, onOpen, rotation }: ShotProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`${shot.caption} を拡大表示`}
      className={`group relative flex aspect-[16/10] flex-col overflow-hidden rounded-md border-[1.5px] border-ink bg-paper text-left shadow-[3px_3px_0_var(--ink)] transition-transform duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_var(--ink)] ${rotation}`}
    >
      <div className="flex flex-shrink-0 items-center gap-1.5 border-b border-ink bg-paper-edge px-2 py-1.5">
        <span aria-hidden className="size-[7px] rounded-full bg-brand-orange" />
        <span aria-hidden className="size-[7px] rounded-full bg-brand-amber" />
        <span aria-hidden className="size-[7px] rounded-full bg-brand-teal" />
        <span className="ml-1.5 truncate font-mono text-[9px] tracking-[0.04em] text-ink-dim">
          {shot.url}
        </span>
      </div>

      <div className="relative flex flex-1 items-center justify-center overflow-hidden bg-gradient-to-br from-white to-paper-edge">
        {!hasError ? (
          <Image
            src={shot.src}
            alt=""
            fill
            sizes="(min-width: 640px) 33vw, 100vw"
            className="object-cover"
            onError={() => setHasError(true)}
          />
        ) : (
          <div className="px-2 text-center font-mono text-[10px] leading-relaxed tracking-[0.15em] text-ink-dim">
            <span className="mb-1 block text-[9px] font-bold text-ink-fade">
              {shot.fileLabel}
            </span>
            public/projects/ に画像を配置
          </div>
        )}
      </div>

      <span
        aria-hidden
        className="pointer-events-none absolute right-2 top-2 size-5 opacity-0 transition-opacity group-hover:opacity-60"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%231a1a1a' stroke-width='2.5' stroke-linecap='round'><path d='M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7'/></svg>\")",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      />
    </button>
  );
}
