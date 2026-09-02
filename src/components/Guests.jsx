import { chiefGuests } from '../data'
import SectionTag from './SectionTag'
import Avatar from './Avatar'

export default function Guests() {
  return (
    <section id="guests" className="mx-auto max-w-6xl px-5 py-20">
      <SectionTag>Chief Guests</SectionTag>
      <h2 className="mt-4 max-w-xl text-balance font-display text-3xl font-semibold text-ink sm:text-4xl">
        Distinguished Leaders of IEEE IES
      </h2>

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {chiefGuests.map((g) => (
          <div key={g.name} className="flex gap-4 rounded-sm border border-line bg-white/60 p-6">
            <Avatar image={g.image} size={120} />
            <div>
              <h3 className="font-display text-lg font-semibold leading-snug text-ink">{g.name}</h3>
              <p className="mt-1 font-mono text-[12px] uppercase tracking-wide text-blue">{g.role}</p>
              <p className="mt-2 font-body text-sm leading-relaxed text-ink/60">{g.org}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
