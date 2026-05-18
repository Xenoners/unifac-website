interface Props {
  eyebrow?: string
  title: string
  subtitle?: string
}

export default function PageHeader({ eyebrow, title, subtitle }: Props) {
  return (
    <div className="bg-surface border-b border-white/[0.06] py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {eyebrow && (
          <span className="text-[11px] tracking-[0.22em] text-gold uppercase font-semibold block mb-4">
            {eyebrow}
          </span>
        )}
        <h1 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight">{title}</h1>
        {subtitle && (
          <p className="text-white/50 text-lg mt-5 max-w-2xl leading-relaxed">{subtitle}</p>
        )}
      </div>
    </div>
  )
}
