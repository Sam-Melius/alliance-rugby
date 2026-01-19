import Image from "next/image";

export default function HighschoolSchedulePage() {
  const games = [
    { date: "Sat 1/17", opponent: "TBA (Preseason)", time: "2:30 PM", location: "Las Colinas / Plano", note: "Preseason" },
    { date: "Fri 1/23", opponent: "Dallas Jesuit", time: "TBA", location: "@ Jesuit / Plano" },
    { date: "Sat 2/7", opponent: "Westlake", time: "1:00 PM", location: "@ Westlake" },
    { date: "Fri 2/13", note: "Bye" },
    { date: "Sat 2/14", note: "ACT Testing" },
    { date: "Sat 2/21", opponent: "Strake", time: "11:00 AM", location: "Home" },
    { date: "Fri 2/27", opponent: "Waco", time: "7:00 PM", location: "Home" },
    { date: "Fri 3/6", opponent: "Martin", time: "7:00 PM", location: "Home" },
    { date: "Fri 3/13", opponent: "Dallas Jesuit", time: "7:00 PM", location: "@ Jesuit" },
    { date: "Fri 3/20", note: "Spring Break" },
    { date: "Sat 3/28", opponent: "FFA", time: "TBA", location: "@ FFA" },
    { date: "Fri 4/3", note: "Easter — Makeups" },
    { date: "Fri 4/10", note: "Makeups — Gareth Jones (uncommitted)" },
    { date: "Fri 4/17", note: "Semifinals" },
    { date: "Fri 4/24", note: "Finals" },
  ];

  const photos = [
    "/game-1.jpeg",
    "/game-2.jpeg",
    "/game-3.jpeg",
    // add more as you have them
  ];

  return (
    <section className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="mb-6 text-center text-3xl font-bold">
        High School Schedule — Spring 2026
      </h1>

      {/* Schedule list */}
      <div className="space-y-4">
        {games.map((g, i) => (
          <div
            key={i}
            className="flex flex-col rounded-lg border border-gray-800 bg-gray-900/40 p-4 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="font-semibold text-yellow-400">{g.date}</div>

            {g.opponent ? (
              <div className="text-gray-200">
                vs {g.opponent}
                {g.location && (
                  <span className="ml-2 text-gray-400">({g.location})</span>
                )}
              </div>
            ) : (
              <div className="font-medium text-gray-200">{g.note}</div>
            )}

            {g.time && (
              <div className="mt-1 text-gray-300 sm:mt-0">{g.time}</div>
            )}
          </div>
        ))}
      </div>

      {/* Game photos section */}
      <section className="mt-12 border-t border-gray-800 pt-8">
        <h2 className="mb-4 text-center text-2xl font-bold">
          Game Day Photos
        </h2>
        <p className="mb-6 text-center text-sm text-gray-400">
          A look at the Black Knights in action this season.
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {photos.map((src, idx) => (
            <div
              key={src}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg border border-gray-800 bg-gray-900/40"
            >
              <Image
                src={src}
                alt={`Alliance Black Knights rugby - game photo ${idx + 1}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
