import { REGISTRATION_URL } from '../data'
import SectionTag from './SectionTag'

export default function Register() {
  return (
     <section className="relative overflow-hidden bg-paper">
  {/* Background grid */}
  <div className="absolute inset-0 bg-grid opacity-40" />

  {/* Animated ambient glows */}
  <div
    className="
      pointer-events-none absolute -left-32 top-1/2
      h-72 w-72 -translate-y-1/2
      rounded-full bg-blue/10 blur-3xl
      transition-transform duration-1000
      hover:scale-125
    "
  />

  <div
    className="
      pointer-events-none absolute -right-32 top-1/2
      h-72 w-72 -translate-y-1/2
      rounded-full bg-teal/10 blur-3xl
    "
  />

  <div className="relative mx-auto max-w-6xl px-5 py-20 sm:py-24">
    <div
      className="
        group relative overflow-hidden
        rounded-xl border border-line
        bg-white
        shadow-[0_12px_40px_rgba(10,30,61,0.07)]
        transition-all duration-500 ease-out

        hover:-translate-y-2
        hover:border-blue/30
        hover:shadow-[0_25px_70px_rgba(10,30,61,0.14)]
      "
    >
      {/* Animated top gradient line */}
      <div
        className="
          absolute inset-x-0 top-0 h-[3px]
          origin-left scale-x-75
          bg-gradient-to-r from-blue via-teal to-blue
          transition-transform duration-700 ease-out
          group-hover:scale-x-100
        "
      />

      {/* Decorative moving circle */}
      <div
        className="
          pointer-events-none absolute
          -right-20 -top-20
          h-48 w-48
          rounded-full border border-blue/10
          transition-all duration-700 ease-out

          group-hover:right-[-10px]
          group-hover:top-[-10px]
          group-hover:scale-110
          group-hover:border-blue/20
        "
      />

      <div
        className="
          pointer-events-none absolute
          right-8 top-8
          h-16 w-16
          rounded-full border border-teal/10
          transition-all duration-700

          group-hover:scale-125
          group-hover:rotate-45
          group-hover:border-teal/25
        "
      />

      <div className="relative grid gap-10 p-7 sm:p-10 md:grid-cols-[1fr_auto] md:items-center md:p-14">

        {/* Content */}
        <div className="max-w-2xl">
          <SectionTag>Registration Open</SectionTag>

          <h2
            className="
              mt-5 max-w-2xl
              font-display text-3xl font-semibold
              leading-[1.1] tracking-tight text-ink
              transition-transform duration-500 ease-out
              group-hover:translate-x-1
              sm:text-4xl lg:text-[2.75rem]
            "
          >
            Reserve your seat at{" "}
            <span
              className="
                bg-gradient-to-r from-blue to-teal
                bg-clip-text text-transparent
                transition-all duration-500
                group-hover:tracking-tight
              "
            >
              I4C 2026.
            </span>
          </h2>

          <p
            className="
              mt-5 max-w-xl
              font-body text-sm leading-7 text-ink/60
              transition-all duration-500
              group-hover:text-ink/75
              sm:text-base
            "
          >
            Free registration for students, researchers, academicians, and industry
            professionals. Limited seats for hands-on workshops.
          </p>

          {/* Technical label */}
          <div className="mt-7 flex items-center gap-3">
            <span
              className="
                h-px w-10 bg-blue/40
                transition-all duration-500
                group-hover:w-16
                group-hover:bg-teal
              "
            />

            <span
              className="
                font-mono text-[10px]
                uppercase tracking-[0.2em] text-ink/40
                transition-colors duration-500
                group-hover:text-blue
              "
            >
              IEEE IES · I4C 2026
            </span>
          </div>
        </div>

        {/* CTA */}
        <div className="relative flex md:justify-end">
          <a
            href={REGISTRATION_URL}
            target="_blank"
            rel="noreferrer"
            className="
              group/button relative
              inline-flex items-center justify-center
              gap-3 overflow-hidden
              rounded-md
              bg-blue
              px-8 py-4
              font-mono text-sm uppercase tracking-wide
              text-paper

              shadow-[0_6px_0_0_#0A1E3D]

              transition-all duration-300 ease-out

              hover:-translate-y-1
              hover:scale-[1.03]
              hover:bg-[#0D2B58]
              hover:shadow-[0_11px_0_0_#0A1E3D]

              active:translate-y-[4px]
              active:scale-[0.98]
              active:shadow-none
            "
          >
            {/* Moving shine */}
            <span
              className="
                pointer-events-none absolute
                inset-y-0 -left-[120%]
                w-[60%]
                skew-x-[-20deg]
                bg-gradient-to-r
                from-transparent
                via-white/25
                to-transparent

                transition-all duration-700 ease-out

                group-hover/button:left-[140%]
              "
            />

            <span className="relative">
              Register Now
            </span>

            <svg
              width="15"
              height="15"
              viewBox="0 0 14 14"
              fill="none"
              className="
                relative
                transition-all duration-300 ease-out
                group-hover/button:translate-x-1
                group-hover/button:scale-110
              "
            >
              <path
                d="M2 7 H12 M12 7 L8 3 M12 7 L8 11"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Bottom hover accent */}
      <div
        className="
          absolute bottom-0 left-1/2
          h-[2px] w-0
          -translate-x-1/2
          bg-gradient-to-r from-blue to-teal
          transition-all duration-700 ease-out
          group-hover:w-full
        "
      />
    </div>
  </div>
</section>
  )
}
