import {
  MapPin,
  Navigation,
  Plane,
  Train,
  Bus,
  Car,
  ArrowUpRight,
  Clock3,
  Route,
  Hotel,
  Utensils,
} from "lucide-react";

import { venueData } from "../data/venueData";


// Icon mapping based exactly on venueData.js
const iconMap = {
  plane: Plane,
  train: Train,
  bus: Bus,
  car: Car,
};


export default function Venue() {
  return (
    <main className="min-h-screen bg-paper text-ink">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden border-b border-line">

        <div className="absolute inset-0 bg-grid opacity-25" />

        <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-teal/[0.08] blur-3xl" />

        <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-blue/[0.05] blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-5 pb-20 pt-28 sm:pb-24 sm:pt-32">

          <div className="max-w-4xl">

            {/* Eyebrow */}

            <div className="inline-flex items-center gap-3 rounded-full border border-teal/20 bg-teal/[0.04] px-4 py-2">

              <span className="relative flex h-2.5 w-2.5">

                <span className="absolute inset-0 animate-ping rounded-full bg-teal/40" />

                <span className="relative h-2.5 w-2.5 rounded-full bg-teal" />

              </span>

              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-teal">
                Venue & Travel
              </span>

            </div>


            {/* Heading */}

            <h1
              className="
                mt-7
                font-display
                text-4xl
                font-semibold
                leading-[1.02]
                tracking-tight
                sm:text-5xl
                lg:text-6xl
              "
            >

              Venue, Directions

              <br />

              <span className="text-teal">
                & Travel Information.
              </span>

            </h1>


            {/* Description */}

            <p
              className="
                mt-7
                max-w-2xl
                font-body
                text-base
                leading-7
                text-ink/60
                sm:text-lg
                sm:leading-8
              "
            >

              Access essential information for attending the IEEE IES Industrial Innovation Conclave 2026, 
              including the official venue, interactive location map, and recommended travel routes 
              from major transportation hubs.


            </p>


            {/* Bottom label */}

            <div className="mt-9 flex items-center gap-4">

              <div className="h-px w-14 bg-teal/50" />

              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/35">
                Arrive · Connect · Innovate
              </span>

            </div>

          </div>

        </div>

      </section>



      {/* =====================================================
          VENUE + MAP
      ===================================================== */}

      <section className="mx-auto max-w-6xl px-5 py-16 sm:py-20">

        <div className="grid overflow-hidden rounded-2xl border border-line bg-paper lg:grid-cols-[0.8fr_1.2fr]">

          {/* Venue information */}

          <div className="p-7 sm:p-10 lg:p-12">

            <span className="inline-flex rounded-md border border-teal/20 bg-teal/10 px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-teal">
              Official Event Venue
            </span>


            <h2 className="mt-6 font-display text-2xl font-semibold leading-snug sm:text-3xl">
              {venueData.venueName}
            </h2>


            <div className="mt-7 flex gap-4">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal/10 text-teal">
                <MapPin size={19} />
              </div>


              <div>

                <p className="font-medium">
                  Location
                </p>

                <p className="mt-1 max-w-sm text-sm leading-relaxed text-ink/60">
                  {venueData.address}
                </p>

              </div>

            </div>


            <a
              href={venueData.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-8
                inline-flex
                items-center
                gap-2
                rounded-md
                bg-ink
                px-5
                py-3
                text-sm
                font-medium
                text-paper
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-teal
                hover:shadow-lg
              "
            >

              <Navigation size={16} />

              Get Directions

              <ArrowUpRight size={15} />

            </a>

          </div>


          {/* Google Maps */}

          <div className="min-h-[420px] bg-ink/5">

            <iframe
              title="Event Venue Location"
              src={venueData.mapEmbedUrl}
              width="100%"
              height="420"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />

          </div>

        </div>

      </section>



      {/* =====================================================
          HOW TO REACH
      ===================================================== */}

      <section className="border-y border-line bg-ink/[0.025]">

        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">

          <div className="max-w-2xl">

            <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal">
              Travel Information
            </p>

            <h2 className="mt-4 font-display text-3xl font-semibold sm:text-4xl">
              How to Reach
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-ink/60 sm:text-base">
              Convenient travel options from the airport, railway
              station, bus stand, and major road connections.
            </p>

          </div>


          {/* Direction cards */}

          <div className="mt-10 grid gap-5 sm:grid-cols-2">

            {venueData.directions.map((item) => {

              const Icon = iconMap[item.icon] || Navigation;

              return (
                <div
                  key={item.code}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-xl
                    border
                    border-line
                    bg-paper
                    p-6
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-teal/40
                    hover:shadow-xl
                  "
                >

                  <div className="flex items-start justify-between">

                    <div
                      className="
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-lg
                        bg-teal/10
                        text-teal
                        transition-all
                        duration-300
                        group-hover:bg-teal
                        group-hover:text-white
                      "
                    >

                      <Icon size={20} />

                    </div>


                    <span className="font-mono text-xs text-ink/25">
                      {item.code}
                    </span>

                  </div>


                  <h3 className="mt-6 font-display text-xl font-semibold">
                    {item.title}
                  </h3>


                  <div className="mt-5 flex flex-wrap gap-4 text-xs text-ink/50">

                    <div className="flex items-center gap-1.5">
                      <Route size={14} className="text-teal" />
                      {item.distance}
                    </div>


                    <div className="flex items-center gap-1.5">
                      <Clock3 size={14} className="text-teal" />
                      {item.time}
                    </div>

                  </div>


                  <p className="mt-5 text-sm leading-relaxed text-ink/60">
                    {item.description}
                  </p>


                  <a
                    href={item.location}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      mt-6
                      inline-flex
                      items-center
                      gap-2
                      text-sm
                      font-medium
                      text-teal
                      transition-all
                      duration-300
                      group-hover:gap-3
                    "
                  >

                    View Route

                    <ArrowUpRight size={15} />

                  </a>


                  <div
                    className="
                      absolute
                      bottom-0
                      left-0
                      h-1
                      w-0
                      bg-teal
                      transition-all
                      duration-500
                      group-hover:w-full
                    "
                  />

                </div>
              );

            })}

          </div>

        </div>

      </section>



      {/* =====================================================
          NEARBY
      ===================================================== */}

      <section className="mx-auto max-w-6xl px-5 py-16 sm:py-20">

      <div className="max-w-2xl">

      <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal">
         Around the Venue
      </p>

      <h2 className="mt-4 font-display text-3xl font-semibold sm:text-4xl">
          Plan Your Stay
      </h2>

    <p className="mt-4 text-sm leading-relaxed text-ink/60">
      Useful information to help you plan your visit and stay
      around the event venue.
    </p>

  </div>

  <div className="mt-10 grid gap-5 md:grid-cols-3">

    {venueData.nearby.map((item, index) => {

      const nearbyIcons = [
        Hotel,
        Utensils,
        Navigation,
      ];

      const Icon = nearbyIcons[index] || Navigation;

      return (
        <a
          key={item.title}
          href={item.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="
            group
            block
            rounded-xl
            border
            border-line
            bg-paper
            p-7
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-teal/40
            hover:bg-teal/[0.03]
            hover:shadow-lg
          "
        >

          <div
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-lg
              bg-teal/10
              text-teal
              transition-all
              duration-300
              group-hover:bg-teal
              group-hover:text-white
            "
          >
            <Icon size={21} />
          </div>

          <h3 className="mt-5 font-display text-lg font-semibold">
            {item.title}
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-ink/60">
            {item.description}
          </p>

          <div
            className="
              mt-5
              flex
              items-center
              gap-2
              text-xs
              font-medium
              text-teal
              transition-all
              duration-300
              group-hover:gap-3
            "
          >
            View on Google Maps
            <Navigation size={14} />
          </div>

        </a>
      );

    })}

  </div>

</section>



      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="border-t border-line bg-ink text-paper">

        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">

          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">

            <div className="max-w-2xl">

              <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal">
                Plan Your Visit
              </p>

              <h2 className="mt-4 font-display text-3xl font-semibold sm:text-4xl">
                Your journey starts here.
              </h2>

              <p className="mt-4 text-sm leading-relaxed text-paper/60">
                Check the venue, choose your preferred route, and
                plan your journey to the IEEE IES Industrial Innovation
                Conclave 2026.
              </p>

            </div>


            <a
              href={venueData.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                w-fit
                items-center
                gap-2
                rounded-md
                bg-teal
                px-6
                py-3.5
                text-sm
                font-semibold
                text-white
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
              "
            >

              Open in Google Maps

              <ArrowUpRight size={16} />

            </a>

          </div>

        </div>

      </section>

    </main>
  );
}