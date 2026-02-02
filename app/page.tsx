import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 my-5">
      {/* HERO */}
<section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden px-4 pt-24 pb-16 md:pt-32">
  {/* Background image */}
  <div className="absolute inset-0 -z-10">
    <Image
      src="/rugby-hero.png"
      alt="Rugby background"
      fill
      priority
      className="object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/80" />
  </div>

  {/* Centered content */}
  <div className="flex flex-col items-center text-center max-w-3xl mx-auto gap-4 mb-16">
    {/* Logo */}
    <div className="relative h-48 w-48 md:h-96 md:w-96">
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-yellow-500/20 via-gray-700/40 to-black blur-2xl" />
      <div className="relative flex h-full items-center justify-center ">
        <Image
          src="/alliance-logo.png"
          alt="Alliance Black Knights Rugby logo"
          fill
          className="object-contain p-4"
          priority
        />
      </div>
    </div>

    <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
      Built on{" "}
      <span className="text-yellow-400">grit, discipline,</span> and{" "}
      <span className="text-yellow-400">brotherhood</span>.
    </h1>

    <p className="mt-2 max-w-xl text-sm leading-relaxed text-gray-300 sm:text-base">
      The Alliance Black Knights are a local rugby club committed to
      developing tough, smart players on and off the pitch. From first
      tackles to match-winning conversions, we play fast, physical, and
      together!
    </p>

    <div className="mt-4 flex flex-wrap justify-center gap-3">
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

    <p className="mt-4 text-xs font-medium uppercase tracking-[0.25em] text-gray-300">
      Fortes Fortuna Juvat
    </p>
  </div>
</section>



      {/* SCHEDULE SECTION – like "2025 Match Schedules & Results" */}
      <section id="schedule" className="border-t border-gray-800 py-12">
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Match Schedules &amp; Results
          </h2>
          <p className="mt-2 text-sm text-gray-300">
            Stay locked in on upcoming fixtures and how the Knights are doing
            this season.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-3 place-items-center">

          {[
            {
              label: "MENS",
              href: "/schedule/mens",
              blurb: "Top-division fixtures and results.",
            },
            {
              label: "HIGH SCHOOL",
              href: "/schedule/highschool",
              blurb: "Development squad matches.",
            },
            {
              label: "YOUTH",
              href: "/schedule/youth",
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
                    src="/favicon.ico"
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

              <p className="max-w-[12rem] text-xs text-gray-300 leading-relaxed">
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

      {/* TEAM SECTION */}
      <section id="team" className="border-t border-gray-800 py-12">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">Our Team</h2>
          <p className="mt-2 text-sm text-gray-300 max-w-2xl mx-auto">
            Elite coaching, real pathways, and a culture built on work rate,
            toughness, and character. The Alliance Black Knights staff brings
            top-level playing and coaching experience back to our community.
          </p>
        </div>

        {/* Coaches */}

<div className="mx-auto grid max-w-5xl gap-6 px-4 md:grid-cols-2">
  {/* Doug */}
  {/* Doug */}
  <article className="coach-shield flex flex-col items-center text-center px-20 pt-12 pb-10">
    <div className="coach-avatar relative mb-4">
      <div className="flex h-full w-full items-center justify-center text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-gray-300">
        Photo Coming Soon
      </div>
      {/* Later you can replace the inner div with an <Image> */}
      {/*
      <Image
        src="/doug.jpg"
        alt="Doug Neubauer"
        fill
        className="object-cover"
      />
      */}
    </div>

    <h3 className="text-lg font-semibold text-yellow-400">Doug Neubauer</h3>
    <p className="mt-1 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-gray-300">
      High School Head Coach
    </p>
    <p className="mt-2 text-sm text-gray-200 leading-relaxed">
      Doug is a three-time state champion coach with experience at the highest
      levels of American rugby. He has coached at the University of Oklahoma
      and previously served as the Alliance men&apos;s head coach before
      retiring. Doug returns this fall to lead the Black Knights high school
      program.
    </p>
  </article>

  {/* PJ */}
  <article className="coach-shield flex flex-col items-center text-center px-20 pt-12 pb-10">
    <div className="coach-avatar relative mb-4">
      <div className="flex h-full w-full items-center justify-center text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-gray-300">
        Photo Coming Soon
      </div>
      {/*
      <Image
        src="/pj.jpg"
        alt="Pj Eteaki"
        fill
        className="object-cover"
      />
      */}
    </div>

    <h3 className="text-lg font-semibold text-yellow-400">Pj Eteaki</h3>
    <p className="mt-1 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-gray-300">
      Director of Rugby
    </p>
    <p className="mt-2 text-sm text-gray-200 leading-relaxed">
      Pj is capped for USA 7s, the USA Islanders, and the USA Classic Eagles.
      A dual-sport collegiate athlete, he played professional rugby and also
      spent time at OTAs with the New York Giants. As Director of Rugby, Pj
      oversees the vision, standards, and development pathways for the entire
      Alliance program.
    </p>
  </article>

</div>


        {/* Pathway blurb */}
        <div className="mx-auto mt-8 max-w-3xl px-4">
          <div className="rounded-2xl border border-yellow-500/40 bg-gradient-to-r from-yellow-500/10 via-transparent to-yellow-500/10 p-6 text-center">
            <p className="text-sm text-gray-200 leading-relaxed">
              With an extremely talented coaching group in place, Alliance will
              have clear pathways for players to reach the next level of rugby –
              from high school and youth development to collegiate, elite, and
              professional opportunities.
            </p>
          </div>
        </div>
      </section>


      {/* SPONSORS */}
      <section id="sponsors" className="border-t border-gray-800 py-12">
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">Our Sponsors</h2>
          <p className="mt-2 text-sm text-gray-300">
            Alliance is built on support from local businesses and families.
          </p>
        </div>

        <div className="grid gap-4 text-center text-sm text-gray-300 sm:grid-cols-3">
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

        <p className="mt-4 text-center text-xs text-gray-300">
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
    <h2 className="text-2xl font-bold sm:text-3xl">Get In Touch</h2>
    <p className="mt-2 text-sm text-gray-300">
      Training, recruitment, and program info
    </p>
  </div>

  <div className="mx-auto grid max-w-5xl gap-8 px-4 md:grid-cols-2">
    {/* Contact Card */}
    <div className="rounded-xl border border-gray-800 bg-gray-900/40 p-6">
      <h3 className="text-lg font-semibold text-yellow-400">Contact</h3>
      {/* <p className="mt-2 text-sm text-gray-300">
        Coach Doug &quot;Neuby&quot; Neubauer
      </p>
      <p className="text-sm text-gray-300">
        <a
          href="tel:18173605368"
          className="hover:text-yellow-400"
        >
          817-360-5368
        </a>
      </p> */}

      <p className="mt-3 text-sm text-gray-300">
        Email:&nbsp;
        <a
          href="mailto:aaron@sublime.day"
          className="text-yellow-400 hover:underline"
        >
          aaron@sublime.day
        </a>
      </p>

      <a
        href="mailto:aaron@sublime.day"
        className="mt-5 inline-block rounded-md bg-yellow-400 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-black hover:bg-yellow-300"
      >
        Email an Inquiry
      </a>

      <p className="mt-4 text-xs text-gray-300 leading-relaxed">
        Interested in joining the Knights? Reach out for details on training,
        season registration, or development pathways.
      </p>
    </div>

    {/* Location + Practice Times */}
    <div className="rounded-xl border border-gray-800 bg-gray-900/40 p-6">
      <h3 className="text-lg font-semibold text-yellow-400">Training Schedule</h3>
      <div className="mt-3 space-y-1 text-sm text-gray-300">
        <div className="flex justify-between">
          <span className="text-gray-300">Tuesday</span>
          <span>6:30 pm – 8:00 pm</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-300">Thursday</span>
          <span>6:30 pm – 8:00 pm</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-300">Saturday</span>
          <span>10:00 am – 12:00 pm</span>
        </div>
      </div>

      <h3 className="mt-6 text-lg font-semibold text-white">Location</h3>
      <p className="mt-2 text-sm text-gray-300">
        Bear Creek Park <br />
        Keller, TX
      </p>
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
