export default function Footer() {
  return (
     <footer className="relative overflow-hidden bg-ink text-paper/70">
  {/* Subtle background grid */}
  <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
    <div className="absolute inset-0 bg-grid" />
  </div>

  {/* Top accent */}
  <div className="relative h-px bg-gradient-to-r from-transparent via-blue/60 to-transparent" />

  <div className="relative mx-auto max-w-6xl px-5 py-14 sm:py-16">

    {/* Main footer grid */}
    <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">

      {/* ───────────────── Brand ───────────────── */}
      <div>
        <div className="flex items-center gap-3">

          {/* IES Logo */}
          <div className="group relative flex items-center justify-center">
            <div
              className="
                relative flex h-12 w-12 items-center justify-center
                overflow-hidden rounded-xl
                border border-white/10
                bg-white
                shadow-[0_4px_20px_rgba(0,0,0,0.18)]
                transition-all duration-300 ease-out
                group-hover:-translate-y-1
                group-hover:border-blue/40
                group-hover:shadow-[0_8px_30px_rgba(0,0,0,0.28)]
              "
            >
              <div
                className="
                  pointer-events-none absolute inset-0
                  rounded-xl bg-blue/5
                  opacity-0 transition-opacity duration-300
                  group-hover:opacity-100
                "
              />

              <img
                src="../../IES-Logo.jpg"
                alt="IEEE Industrial Electronics Society"
                className="
                  relative z-10 h-8 w-8 object-contain
                  transition-transform duration-300
                  group-hover:scale-110
                "
              />
            </div>
          </div>

          <div>
            <p className="font-display text-lg font-semibold tracking-tight text-paper">
              I4C 2026
            </p>
            <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-paper/35">
              IEEE IES Industrial Innovation Conclave
            </p>
          </div>
        </div>

        <p className="mt-5 max-w-md font-body text-sm leading-7 text-paper/55">
          Advancing Electrification, Automation, AI, Renewable Energy &
          Smart Mobility through innovation, collaboration, and industry
          engagement.
        </p>

        {/* Footer identifier */}
        <div className="mt-6 flex items-center gap-3">
          <span className="h-px w-8 bg-blue/60" />
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-paper/35">
            Hyderabad · India · 2026
          </span>
        </div>
      </div>


      {/* ───────────────── Venue ───────────────── */}
      <div>
        <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper/35">
          Event Details
        </h4>

        <div className="mt-5 space-y-5">

          {/* Venue */}
          <div className="flex gap-3">
            <div
              className="
                mt-0.5 flex h-8 w-8 shrink-0
                items-center justify-center
                rounded-lg border border-white/10
                bg-white/[0.03]
                text-blue
              "
            >
              {/* Location icon */}
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <circle
                  cx="12"
                  cy="9"
                  r="2.2"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </div>

            <div>
              <p className="font-mono text-[10px] uppercase tracking-wider text-paper/35">
                Venue
              </p>
              <p className="mt-1 font-body text-sm leading-6 text-paper/65">
                Engineering Staff College of India (ESCI)
                <br />
                Gachibowli, Hyderabad
              </p>
            </div>
          </div>

          {/* Date */}
          <div className="flex gap-3">
            <div
              className="
                mt-0.5 flex h-8 w-8 shrink-0
                items-center justify-center
                rounded-lg border border-white/10
                bg-white/[0.03]
                text-teal
              "
            >
              {/* Calendar icon */}
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
              >
                <rect
                  x="3"
                  y="5"
                  width="18"
                  height="16"
                  rx="2"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M16 3v4M8 3v4M3 10h18"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <div>
              <p className="font-mono text-[10px] uppercase tracking-wider text-paper/35">
                Date
              </p>
              <p className="mt-1 font-body text-sm text-paper/65">
                22–23 September 2026
              </p>
            </div>
          </div>

        </div>
      </div>


      {/* ───────────────── Connect ───────────────── */}
      <div>
        <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper/35">
          Connect With Us
        </h4>

        <p className="mt-4 max-w-xs font-body text-sm leading-6 text-paper/55">
          Follow I4C 2026 for announcements, speaker updates, registration
          information, and event highlights.
        </p>

        {/* Social icons */}
        <div className="mt-6 flex flex-wrap gap-2">

          {/* LinkedIn */}
          <a
            href="#"
            aria-label="LinkedIn"
            className="
              group/social flex h-10 w-10 items-center justify-center
              rounded-lg border border-white/10
              bg-white/[0.03]
              text-paper/50
              transition-all duration-300
              hover:-translate-y-1
              hover:border-blue/40
              hover:bg-blue/10
              hover:text-blue
            "
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.5 8.5H3V21h3.5V8.5ZM4.75 3A2.05 2.05 0 1 0 4.75 7.1 2.05 2.05 0 0 0 4.75 3ZM21 13.85c0-3.76-2-5.51-4.67-5.51-2.15 0-3.11 1.18-3.65 2.01V8.5H9.18V21h3.5v-6.19c0-1.63.31-3.2 2.33-3.2 1.99 0 2.01 1.86 2.01 3.3V21H21v-7.15Z" />
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="#"
            aria-label="Instagram"
            className="
              group/social flex h-10 w-10 items-center justify-center
              rounded-lg border border-white/10
              bg-white/[0.03]
              text-paper/50
              transition-all duration-300
              hover:-translate-y-1
              hover:border-pink-400/40
              hover:bg-pink-400/10
              hover:text-pink-300
            "
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
              <rect
                x="3"
                y="3"
                width="18"
                height="18"
                rx="5"
                stroke="currentColor"
                strokeWidth="1.7"
              />
              <circle
                cx="12"
                cy="12"
                r="4"
                stroke="currentColor"
                strokeWidth="1.7"
              />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
            </svg>
          </a>

          {/* X */}
          <a
            href="#"
            aria-label="X"
            className="
              group/social flex h-10 w-10 items-center justify-center
              rounded-lg border border-white/10
              bg-white/[0.03]
              text-paper/50
              transition-all duration-300
              hover:-translate-y-1
              hover:border-white/30
              hover:bg-white/10
              hover:text-white
            "
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.9 2H22l-6.77 7.74L23.2 22h-6.24l-4.89-6.39L6.49 22H3.38l7.24-8.28L2.8 2h6.4l4.42 5.84L18.9 2Zm-1.1 17.9h1.73L8.27 4.01H6.41L17.8 19.9Z" />
            </svg>
          </a>
        </div>
      </div>
    </div>


    {/* Bottom bar */}
    <div
      className="
        mt-12 flex flex-col gap-4
        border-t border-white/10
        pt-6
        text-[11px] text-paper/35
        sm:flex-row sm:items-center sm:justify-between
      "
    >
      <span>
        © 2026 IEEE Industrial Electronics Society — Hyderabad, India.
      </span>

      <span className="font-mono tracking-wide">
        IES Hubs & Nodes · Globally Connected, Locally Empowered
      </span>
    </div>

  </div>
</footer>
  )
}
