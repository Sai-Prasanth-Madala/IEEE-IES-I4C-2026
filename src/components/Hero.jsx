import { REGISTRATION_URL } from '../data'
import SectionTag from './SectionTag'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-paper">
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-blue/10 blur-3xl" />
      <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-teal/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-5 pt-14 pb-20 md:pt-20">
        <SectionTag>Advancing Electrification · Automation · AI · Renewable Energy · Smart Mobility</SectionTag>

        <div className="mt-8 grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-start">
          <div>
             <h1
             className="
             group relative
             max-w-4xl
             pb-8
             font-display text-4xl font-semibold
             leading-[1.05] tracking-[-0.035em]
             text-ink
             sm:text-5xl
             lg:text-6xl
             xl:text-7xl
             "
             >
            {/* Line 1 */}
            <span className="block">
              IEEE IES Industrial
            </span>

            {/* Line 2 */}
            <span className="block">
              Innovation Conclave
            </span>

            {/* Line 3 */}
            <span className="block text-blue">
             2026
            </span>

             {/* Continuous radiant line */}
             <span
               aria-hidden="true"
               className="
                  pointer-events-none
                  absolute
                  left-0
                  bottom-0
                  h-[2px]
                  w-full
                  overflow-hidden
                  rounded-full
                  bg-gradient-to-r
                  from-transparent
                  via-blue/50
                  to-transparent
                 "
              >
              {/* Moving light */}
              <span
                className="
                  absolute
                  left-[-25%]
                  top-0
                  h-full
                  w-1/4
                  rounded-full
                  bg-gradient-to-r
                  from-transparent
                  via-teal-400
                  to-transparent
                  shadow-[0_0_12px_rgba(23,184,166,0.8)]
                  animate-radiant-line
                "
                />
                </span>
              </h1>
            <p className="mt-5 max-w-xl font-body text-[15px] leading-relaxed text-ink/70">
              A two-day forum bringing together industry leaders, researchers, experts, and students 
              to explore emerging technologies and foster meaningful collaboration.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={REGISTRATION_URL}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-md bg-blue px-6 py-3 font-mono text-sm uppercase tracking-wide text-paper shadow-[0_6px_0_0_#0A1E3D] transition-transform hover:-translate-y-0.5 active:translate-y-0 active:shadow-none"
              >
                Register Now
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform group-hover:translate-x-1">
                  <path d="M2 7 H12 M12 7 L8 3 M12 7 L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="#about"
                className="font-mono text-sm uppercase tracking-wide text-ink/70 underline decoration-line underline-offset-4 hover:text-blue"
              >
                Explore the conclave
              </a>
            </div>
          </div>

          {/* Right-side event information */}
          <div className="flex flex-col gap-5">
  
          {/* Event Details */}
          <div
          className="
          fiducial
          rounded-sm
          border border-line
          bg-white/70
          p-5
          font-mono text-[13px]
         text-blue
         backdrop-blur-sm
         "
        >
        <div
          className="
          mb-3 flex items-center justify-between
          text-[11px] uppercase
          tracking-[0.18em] text-ink/50
        "
        >
        <span>Event Details</span>
        <span>I4C&#8209;2026</span>
        </div>

        <dl className="space-y-2.5">
          <Row label="Date" value="22–23 Sept 2026" />
          <Row label="Venue" value="ESCI, Gachibowli, Hyderabad" />
          <Row label="Format" value="Talks · Workshops · Expo" />
          <Row label="Host" value="IEEE IES Hyderabad Hubs & Nodes" />
          <Row label="Status" value="Registration Open" highlight />
        </dl>
      </div>

      {/* Image below Event Details */}
      <div
       className="
        overflow-hidden
        rounded-sm
        border border-line
        bg-white/70
        shadow-sm
       "
      >
      <img
        src="../../ESCI-Hyd.jpeg"
        alt="IEEE IES Industrial Innovation Conclave"
        className="
          h-auto
          w-full
          object-cover
          transition-transform
          duration-500
          hover:scale-[1.02]
        "
      />
    </div>

    </div>
        </div>
      </div>
    </section>
  )
}

function Row({ label, value, highlight }) {
  return (
    <div className="flex items-baseline justify-between gap-3 border-t border-line pt-2.5 first:border-t-0 first:pt-0">
      <dt className="text-ink/45">{label}</dt>
      <dd className={highlight ? 'text-teal' : 'text-ink'}>{value}</dd>
    </div>
  )
}
