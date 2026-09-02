import { areasOfInterest } from '../data'
import SectionTag from './SectionTag'

export default function AreasOfInterest() {
  return (
    <section id="areas" className="mx-auto max-w-6xl px-5 py-20">
      <SectionTag>Areas of Interest</SectionTag>
      <h2 className="mt-4 max-w-none text-balance font-display text-3xl font-semibold text-ink sm:text-4xl">
        8 Key Areas Shaping the Future of Industry
      </h2>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {areasOfInterest.map((a) => (
          <div
          key={a.code}
          className="
          group relative overflow-hidden
          rounded-xl
          border border-line
          bg-paper
          p-6
          transition-all duration-300 ease-out
          hover:-translate-y-1
          hover:border-teal/40
          hover:bg-teal/[0.035]
          hover:shadow-lg
        "
      >
      {/* Hover accent */}
    <div
    className="
      absolute left-0 top-0 h-full w-1
      bg-teal
      opacity-0
      transition-opacity duration-300
      group-hover:opacity-100
    "
    />

    {/* Number / Code */}
    <div className="flex items-center justify-between">
      <span
        className="
          inline-flex items-center
          rounded-md
          border border-line
          bg-ink/[0.03]
          px-2.5 py-1
          font-mono text-[11px]
          font-medium tracking-wider
          text-ink/40
          transition-all duration-300
          group-hover:border-teal/30
          group-hover:bg-teal/10
          group-hover:text-teal
        "
      >
      {a.code}
      </span>

    {/* Arrow */}
    <span
      className="
        text-ink/20
        transition-all duration-300
        group-hover:translate-x-1
        group-hover:text-teal
      "
    >
      →
    </span>
  </div>

  {/* Title */}
  <p
    className="
      mt-5
      max-w-[260px]
      font-display
      text-base
      font-semibold
      leading-snug
      text-ink
      transition-colors duration-300
      group-hover:text-teal
    "
  >
    {a.label}
  </p>

  {/* Bottom accent */}
  <div
    className="
      mt-6
      h-px
      w-8
      bg-teal/30
      transition-all duration-300
      group-hover:w-16
      group-hover:bg-teal
    "
  />
</div>
    ))}
      </div>
    </section>
  )
}
