export default function MensSchedulePage() {
  const games = [
    
  ];

  return (
    <section className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold mb-6 text-center">High School Schedule — Spring 2026</h1>

      <div className="space-y-4">Schedule coming soon!
        {/* {games.map((g, i) => (
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
        ))} */}
      </div>
    </section>
  );
}