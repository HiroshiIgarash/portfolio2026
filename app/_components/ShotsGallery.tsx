"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { Dialog as DialogPrimitive } from "radix-ui";

import {
  Dialog,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
} from "@/components/ui/dialog";

import { Shot, type ShotData } from "./Shot";

const ROTATIONS = ["-rotate-1", "rotate-[0.4deg]", "-rotate-[0.6deg]"] as const;

type ShotsGalleryProps = {
  shots: readonly ShotData[];
};

export function ShotsGallery({ shots }: ShotsGalleryProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const isOpen = openIndex !== null;

  const close = useCallback(() => setOpenIndex(null), []);
  const navigate = useCallback(
    (direction: 1 | -1) => {
      setOpenIndex((prev) => {
        if (prev === null) return prev;
        const next = prev + direction;
        if (next < 0 || next >= shots.length) return prev;
        return next;
      });
    },
    [shots.length],
  );

  useEffect(() => {
    if (!isOpen) return;
    const handler = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") navigate(-1);
      else if (event.key === "ArrowRight") navigate(1);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, navigate]);

  return (
    <>
      <div className="mb-6 grid grid-cols-1 gap-3.5 sm:grid-cols-3">
        {shots.map((shot, index) => (
          <Shot
            key={shot.src}
            shot={shot}
            onOpen={() => setOpenIndex(index)}
            rotation={ROTATIONS[index % ROTATIONS.length]}
          />
        ))}
      </div>

      <Lightbox
        open={isOpen}
        shots={shots}
        index={openIndex}
        onClose={close}
        onNavigate={navigate}
      />
    </>
  );
}

type LightboxProps = {
  open: boolean;
  shots: readonly ShotData[];
  index: number | null;
  onClose: () => void;
  onNavigate: (direction: 1 | -1) => void;
};

function Lightbox({
  open,
  shots,
  index,
  onClose,
  onNavigate,
}: LightboxProps) {
  const current = index !== null ? shots[index] : null;

  return (
    <Dialog open={open} onOpenChange={(o) => !o && onClose()}>
      <DialogPortal>
        <DialogOverlay className="bg-black/[0.92] supports-backdrop-filter:backdrop-blur-none" />
        <DialogPrimitive.Content
          data-slot="dialog-content"
          className="fixed left-1/2 top-1/2 z-50 grid w-fit max-w-[95vw] -translate-x-1/2 -translate-y-1/2 gap-3 bg-transparent p-0 outline-none data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0"
        >
          <DialogTitle className="sr-only">
            {current?.caption ?? "Screenshot"}
          </DialogTitle>

          {current && (
            <ShotImage
              key={current.src}
              src={current.src}
              caption={current.caption}
              fileLabel={current.fileLabel}
            />
          )}

          <p className="text-center font-mono text-[11px] tracking-[0.15em] text-white/70">
            {current?.caption}
          </p>

          <LightboxNavButton
            direction="prev"
            onClick={() => onNavigate(-1)}
            disabled={index === 0}
          />
          <LightboxNavButton
            direction="next"
            onClick={() => onNavigate(1)}
            disabled={index !== null && index >= shots.length - 1}
          />
          <LightboxCloseButton onClick={onClose} />
        </DialogPrimitive.Content>
      </DialogPortal>
    </Dialog>
  );
}

type LightboxNavButtonProps = {
  direction: "prev" | "next";
  onClick: () => void;
  disabled: boolean;
};

function LightboxNavButton({
  direction,
  onClick,
  disabled,
}: LightboxNavButtonProps) {
  const isPrev = direction === "prev";
  const position = isPrev
    ? "max-md:left-2 md:-left-16"
    : "max-md:right-2 md:-right-16";

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={
        isPrev ? "前のスクリーンショット" : "次のスクリーンショット"
      }
      className={`absolute top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full border border-white/30 bg-white/10 text-white transition-colors hover:border-white/60 hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-25 ${position}`}
    >
      {isPrev ? <ChevronLeft /> : <ChevronRight />}
    </button>
  );
}

function LightboxCloseButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="閉じる"
      className="absolute -top-12 right-0 grid size-9 place-items-center rounded-full border border-white/30 text-white transition-colors hover:border-white/60 hover:bg-white/15"
    >
      <CloseIcon />
    </button>
  );
}

function ShotImage({
  src,
  caption,
  fileLabel,
}: {
  src: string;
  caption: string;
  fileLabel: string;
}) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="grid aspect-[16/10] w-[min(72vw,900px)] place-items-center rounded-md border-2 border-white bg-paper-edge px-8 text-center font-mono text-[12px] leading-[1.8] tracking-[0.15em] text-ink-dim">
        画像がまだ設定されていません
        <span className="mt-2 block text-[10px] opacity-70">
          {fileLabel} を配置してください
        </span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={caption}
      width={1100}
      height={720}
      priority
      onError={() => setHasError(true)}
      sizes="(min-width: 1024px) 90vw, 95vw"
      className="block h-auto max-h-[84vh] w-auto max-w-[90vw] rounded-md border-2 border-white bg-paper-edge shadow-[0_12px_60px_rgba(0,0,0,0.6)]"
    />
  );
}

function ChevronLeft() {
  return (
    <svg
      aria-hidden
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg
      aria-hidden
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function CloseIcon() {
  return (
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
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}
