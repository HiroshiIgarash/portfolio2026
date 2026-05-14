export function WalkIcon() {
  return (
    <svg viewBox="0 0 56 56" fill="none" className="size-full">
      <line
        x1="4"
        y1="44"
        x2="52"
        y2="44"
        stroke="var(--ink)"
        strokeWidth="2"
        strokeDasharray="3 4"
        strokeLinecap="round"
      />
      <circle
        cx="18"
        cy="14"
        r="4"
        fill="#ffd6a8"
        stroke="var(--ink)"
        strokeWidth="1.6"
      />
      <path
        d="M 18 18 L 18 32 M 18 22 L 12 28 M 18 22 L 24 26 M 18 32 L 14 42 M 18 32 L 22 42"
        stroke="var(--ink)"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <line
        x1="46"
        y1="44"
        x2="46"
        y2="20"
        stroke="var(--ink)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M 46 20 L 54 24 L 46 28 Z"
        fill="var(--brand-orange)"
        stroke="var(--ink)"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}
