import { highlights } from '../data'
import SectionTag from './SectionTag'

export default function Highlights() {
  return (
    <section className="bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <SectionTag tone="dark">Key Highlights & Opportunities</SectionTag>
        <h2 className="mt-4 max-w-none font-display text-3xl font-semibold sm:text-4xl lg:whitespace-nowrap">
         What to Expect from the Conclave
        </h2>

        <ul className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((h) => (
            <li
              key={h}
              className="
                  flex items-center gap-3
                  rounded-sm
                  border border-white/10
                  bg-white/[0.03]
                  px-4 py-3.5
                  text-sm text-paper/85
                  transition-all duration-300 ease-out
                  hover:-translate-y-1
                  hover:scale-[1.01]
                  hover:border-teal/40
                  hover:bg-white/[0.06]
                  hover:shadow-lg
                "
            >
              <span className="via shrink-0" />
              {h}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
