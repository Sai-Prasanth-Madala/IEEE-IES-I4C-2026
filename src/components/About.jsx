import { tracks } from '../data'
import SectionTag from './SectionTag'

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-20">
      <SectionTag>About I4C</SectionTag>
      <h2 className="mt-4 max-w-2xl text-balance font-display text-3xl font-semibold text-ink sm:text-4xl">
        Two days of industrial innovation, emerging technologies, and meaningful connections.
      </h2>
      <p className="mt-4 max-w-2xl font-body text-[15px] leading-relaxed text-ink/70">
        I4C 2026 brings industry leaders, researchers, and students together for expert
        talks, hands-on workshops, panel discussions, and industry tours — centered on
        AI, automation, electrification, renewable energy, and smart mobility.
      </p>

      <div className="mt-12 grid gap-4 md:grid-cols-3">
      {tracks.map((t) => (
        <div
            key={t.n}
            className="
            group
            rounded-xl
            border border-line
           bg-paper
           p-7
           shadow-sm
           transition-all
           duration-300
           ease-out
           hover:-translate-y-1
           hover:border-blue/30
           hover:bg-blue/5
           hover:shadow-lg
          "
        >
      <span
        className="
          inline-flex
          rounded-md
          bg-blue/10
          px-2.5
          py-1
          font-mono
          text-xs
          font-medium
          text-blue
          transition-colors
          duration-300
          group-hover:bg-blue/15
        "
      >
        {t.n}
      </span>

      <h3
        className="
          mt-5
          font-display
          text-xl
          font-semibold
          text-ink
          transition-colors
          duration-300
          group-hover:text-blue
        "
      >
        {t.title}
      </h3>

      <p
        className="
          mt-3
          font-body
          text-sm
          leading-relaxed
          text-ink/65
          transition-colors
          duration-300
          group-hover:text-ink/80
        "
      >
        {t.body}
      </p>

      <div
        className="
          mt-6
          h-px
          w-0
          bg-blue
          transition-all
          duration-300
          group-hover:w-12
        "
      />
      </div>
    ))}
    </div>
    </section>
  )
}
