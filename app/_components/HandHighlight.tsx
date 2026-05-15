type HandHighlightProps = {
  children: React.ReactNode;
  circle: {
    viewBox: string;
    path: string;
  };
};

export function HandHighlight({ children, circle }: HandHighlightProps) {
  return (
    <span className="relative ml-1 inline-block -rotate-2 px-[0.4em] py-[0.05em] align-baseline font-hand font-bold leading-none text-brand-orange [-webkit-text-stroke:1px_currentColor]">
      {children}
      <svg
        aria-hidden
        viewBox={circle.viewBox}
        preserveAspectRatio="none"
        className="pointer-events-none absolute -inset-x-[0.05em] -inset-y-[0.15em] -z-10 h-[calc(100%+0.3em)] w-[calc(100%+0.1em)] overflow-visible"
      >
        <path
          d={circle.path}
          fill="none"
          stroke="var(--brand-orange)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.95"
        />
      </svg>
    </span>
  );
}
