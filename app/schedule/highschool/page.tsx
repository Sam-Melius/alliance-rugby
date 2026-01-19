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

  return (
    <section className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold mb-6 text-center">High School Schedule — Spring 2026</h1>

      <div className="space-y-4">
        {games.map((g, i) => (
          <div
            key={i}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between rounded-lg border border-gray-800 bg-gray-900/40 p-4"
          >
            <div className="text-yellow-400 font-semibold">
              {g.date}
            </div>
            {g.opponent ? (
              <div className="text-gray-200">
                vs {g.opponent}
                {g.location && (
                  <span className="text-gray-400 ml-2">({g.location})</span>
                )}
              </div>
            ) : (
              <div className="text-gray-200 font-medium">{g.note}</div>
            )}
            {g.time && <div className="text-gray-300">{g.time}</div>}
          </div>
        ))}
      </div>
    </section>
  );
}
