type OffCardProps = {
  label: string;
  title: string;
  rotation: string;
  icon: React.ReactNode;
  children: React.ReactNode;
};

export function OffCard({
  label,
  title,
  rotation,
  icon,
  children,
}: OffCardProps) {
  return (
    <div
      className={`relative rounded-md border-2 border-ink bg-white px-[22px] py-6 shadow-[5px_5px_0_var(--ink)] transition-transform duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[8px_8px_0_var(--ink)] ${rotation}`}
    >
      <p className="mb-3 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-brand-orange">
        {label}
      </p>
      <div className="mb-3.5 size-14" aria-hidden>
        {icon}
      </div>
      <h3 className="mb-3 font-jp text-xl font-extrabold leading-[1.4] tracking-tight text-ink">
        {title}
      </h3>
      <p className="text-sm leading-[1.75] text-ink-soft [&_strong]:bg-highlight [&_strong]:px-[3px] [&_strong]:font-bold [&_strong]:text-ink">
        {children}
      </p>
    </div>
  );
}
