import { speakers } from '../data'
import SectionTag from './SectionTag'
import Avatar from './Avatar'

export default function Speakers() {
  return (
    <section id="speakers" className="bg-white/50 border-y border-line">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <SectionTag>Distinguished Speakers</SectionTag>
        <h2 className="mt-4 max-w-xl text-balance font-display text-3xl font-semibold text-ink sm:text-4xl">
          Voices from Industry & Research
        </h2>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {speakers.map((s) => (
            <div key={s.name} className="rounded-sm border border-line bg-paper p-5">
              <Avatar image={s.image} size={100} />
              <h3 className="mt-4 font-display text-[15px] font-semibold leading-snug text-ink">{s.name}</h3>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-wide text-blue">{s.role}</p>
              <p className="mt-1.5 font-body text-[13px] leading-snug text-ink/55">{s.org}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
