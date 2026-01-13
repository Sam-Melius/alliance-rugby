import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 my-5">
      {/* HERO */}
      <section className="flex flex-col items-center gap-8 py-12 md:flex-row md:py-16">
        <div className="flex-1">
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Built on{" "}
            <span className="text-yellow-400">grit, discipline,</span> and{" "}
            brotherhood.
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-gray-300 sm:text-base">
            The Alliance Black Knights are a local rugby club committed to
            developing tough, smart players on and off the pitch. From first
            tackles to match-winning conversions, we play fast, physical, and
            together!
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="#schedule"
              className="rounded-md bg-yellow-400 px-5 py-2 text-sm font-semibold text-black shadow hover:bg-yellow-300"
            >
              View Schedule &amp; Results
            </Link>
            <Link
              href="#contact"
              className="rounded-md border border-gray-600 px-5 py-2 text-sm font-semibold text-white hover:border-yellow-400 hover:text-yellow-400"
            >
              Join the Knights
            </Link>
          </div>

          <p className="mt-4 text-xs font-medium uppercase tracking-[0.25em] text-gray-400">
            Fortes Fortuna Juvat
          </p>
        </div>

        <div className="flex-1">
          <div className="relative mx-auto h-64 w-64 max-w-xs md:h-80 md:w-80">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-yellow-500/20 via-gray-700/40 to-black blur-2xl" />
            <div className="relative flex h-full items-center justify-center rounded-3xl border border-gray-700 bg-gradient-to-b from-gray-900 to-black shadow-xl">
              <Image
                src="/alliance-logo.png"
                alt="Alliance Black Knights Rugby logo"
                fill
                className="object-contain p-4"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* SCHEDULE SECTION – like "2025 Match Schedules & Results" */}
      <section id="schedule" className="border-t border-gray-800 py-12">
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Match Schedules &amp; Results
          </h2>
          <p className="mt-2 text-sm text-gray-400">
            Stay locked in on upcoming fixtures and how the Knights are doing
            this season.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-3 place-items-center">

          {[
            {
              label: "VARSITY",
              href: "/schedule/varsity",
              blurb: "Top-division fixtures and results.",
            },
            {
              label: "JV",
              href: "/schedule/jv",
              blurb: "Development squad matches.",
            },
            {
              label: "MIDDLE SCHOOL",
              href: "/schedule/middle-school",
              blurb: "Future Knights learning the game.",
            },
          ].map((card) => (
<div key={card.label} className="flex flex-col items-center gap-3 text-center">
  <Link
    href={card.href}
    className="group flex flex-col items-center justify-center rounded-full border border-gray-800 bg-gradient-to-b from-gray-900 to-black h-64 w-64 shadow hover:border-yellow-400 hover:scale-105 transition relative"
  >
    <div className="relative h-20 w-20">
      <Image
        src="/alliance-shield.png"
        alt="Alliance Shield Logo"
        fill
        className="object-contain"
        sizes="80px"
        priority
      />
    </div>

    <h3 className="mt-2 text-sm font-semibold text-yellow-400">
      {card.label}
    </h3>
  </Link>

  <p className="max-w-[12rem] text-xs text-gray-400 leading-relaxed">
    {card.blurb}
  </p>

  <Link
    href={card.href}
    className="text-xs font-semibold uppercase tracking-wide text-yellow-400 hover:underline"
  >
    View Details →
  </Link>
</div>




          ))}
        </div>
      </section>

      {/* TEAM SECTION (placeholder for now) */}
      <section id="team" className="border-t border-gray-800 py-12">
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">Our Team</h2>
          <p className="mt-2 text-sm text-gray-400">
            Coaches, leaders, and players who set the tone for Black Knights
            rugby.
          </p>
        </div>

        <p className="text-center text-sm text-gray-500">
          Team bios and photos coming soon.
        </p>
      </section>

      {/* SPONSORS */}
      <section id="sponsors" className="border-t border-gray-800 py-12">
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">Our Sponsors</h2>
          <p className="mt-2 text-sm text-gray-400">
            Alliance is built on support from local businesses and families.
          </p>
        </div>

        <div className="grid gap-4 text-center text-sm text-gray-400 sm:grid-cols-3">
          <div className="rounded-lg border border-gray-800 bg-gray-900/40 p-4">
            Sponsor Logo
          </div>
          <div className="rounded-lg border border-gray-800 bg-gray-900/40 p-4">
            Sponsor Logo
          </div>
          <div className="rounded-lg border border-gray-800 bg-gray-900/40 p-4">
            Sponsor Logo
          </div>
        </div>

        <p className="mt-4 text-center text-xs text-gray-500">
          Want to sponsor the Black Knights?{" "}
          <a href="#contact" className="text-yellow-400 underline">
            Get in touch
          </a>
          .
        </p>
      </section>

      {/* CONTACT + PRACTICE INFO */}
      <section id="contact" className="border-t border-gray-800 py-12">
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">Get in Touch</h2>
          <p className="mt-2 text-sm text-gray-400">
            Have questions about joining, volunteering, or sponsoring the club?
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Contact form (front-end only for now) */}
          <div className="rounded-xl border border-gray-800 bg-gray-900/40 p-6">
            <form className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
                  Name
                </label>
                <input
                  className="mt-1 w-full rounded-md border border-gray-700 bg-black px-3 py-2 text-sm text-white outline-none focus:border-yellow-400"
                  placeholder="Your name"
                  type="text"
                  name="name"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
                  Email
                </label>
                <input
                  className="mt-1 w-full rounded-md border border-gray-700 bg-black px-3 py-2 text-sm text-white outline-none focus:border-yellow-400"
                  placeholder="you@example.com"
                  type="email"
                  name="email"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
                  Message
                </label>
                <textarea
                  className="mt-1 h-28 w-full resize-none rounded-md border border-gray-700 bg-black px-3 py-2 text-sm text-white outline-none focus:border-yellow-400"
                  placeholder="Tell us how we can help."
                  name="message"
                />
              </div>

              <button
                type="button"
                className="rounded-md bg-yellow-400 px-4 py-2 text-sm font-semibold text-black hover:bg-yellow-300"
              >
                Send Message (Coming Soon)
              </button>
            </form>
          </div>

          {/* Practice location & times */}
          <div className="space-y-4 text-sm text-gray-300">
            <div>
              <h3 className="text-lg font-semibold text-white">
                Practice Location
              </h3>
              <p className="mt-1 text-gray-400">
                [Your field name here] <br />
                [Street address] <br />
                [City, State, ZIP]
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white">
                Training Schedule
              </h3>
              <div className="mt-2 grid grid-cols-2 gap-1 text-xs text-gray-400">
                <span>Mon</span>
                <span>04:30 pm – 06:30 pm</span>
                <span>Tue</span>
                <span>04:30 pm – 06:30 pm</span>
                <span>Wed</span>
                <span>Off</span>
                <span>Thu</span>
                <span>04:30 pm – 06:30 pm</span>
                <span>Fri</span>
                <span>Off</span>
                <span>Sat</span>
                <span>By appointment</span>
                <span>Sun</span>
                <span>Off</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL STRIP */}
    <section className="w-full bg-yellow-400 py-12">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <h3 className="mb-6 text-3xl sm:text-4xl font-bold uppercase tracking-wide text-black">
          Follow the Black Knights
        </h3>

        <div className="flex justify-center gap-10 text-4xl text-black">
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:scale-110"
          >
            <FaInstagram />
          </a>
          <a
            href="https://facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:scale-110"
          >
            <FaFacebook />
          </a>
          <a
            href="https://youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:scale-110"
          >
            <FaYoutube />
          </a>
        </div>
      </div>
    </section>


    </div>
  );
}
