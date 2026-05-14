import { cva, type VariantProps } from "class-variance-authority";

const dotStyles = cva("size-2 shrink-0 rounded-full", {
  variants: {
    color: {
      orange: "bg-brand-orange",
      teal: "bg-brand-teal",
      purple: "bg-brand-purple",
    },
  },
});

const checkStyles = cva("shrink-0 font-bold", {
  variants: {
    color: {
      orange: "text-brand-orange",
      teal: "text-brand-teal",
      purple: "text-brand-purple",
    },
  },
});

const itemStyles = cva("flex items-center gap-2.5 py-1 font-mono text-sm", {
  variants: {
    primary: {
      true: "font-bold text-ink",
      false: "font-medium text-ink-soft",
    },
  },
  defaultVariants: { primary: false },
});

type SkillItem = {
  text: string;
  primary?: boolean;
};

type SkillGroupProps = Required<VariantProps<typeof dotStyles>> & {
  title: string;
  items: readonly SkillItem[];
};

export function SkillGroup({ title, color, items }: SkillGroupProps) {
  return (
    <div className="rounded-lg border-[1.5px] border-ink bg-white p-[22px] shadow-[3px_3px_0_var(--ink)]">
      <h3 className="mb-4 flex items-center gap-2 border-b-2 border-ink pb-2.5 font-mono text-[11px] font-bold tracking-[0.12em] text-ink">
        <span aria-hidden className={dotStyles({ color })} />
        {title}
      </h3>
      <ul className="flex flex-col gap-2">
        {items.map((item) => (
          <li key={item.text} className={itemStyles({ primary: item.primary })}>
            <span aria-hidden className={checkStyles({ color })}>
              ✓
            </span>
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
