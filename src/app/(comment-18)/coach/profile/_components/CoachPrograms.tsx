const programs = [
  {
    title: "QB Fundamentals Program",
    img: "/p1.jpg",
    athletes: 25,
    rating: 4.9,
  },
  {
    title: "Speed & Agility Training",
    img: "/p2.jpg",
    athletes: 18,
    rating: 4.9,
  },
  { title: "Mental Performance", img: "/p3.jpg", athletes: 3400, rating: 4.9 },
];

export default function CoachPrograms() {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">
        Programs by Coach Michael Thompson
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {programs.map((p) => (
          <div
            key={p.title}
            className="bg-white rounded-xl shadow overflow-hidden"
          >
            <img src={p.img} className="h-40 w-full object-cover" />
            <div className="p-4">
              <h3 className="font-semibold">{p.title}</h3>
              <p className="text-sm text-gray-500">
                {p.athletes} athletes trained
              </p>

              <button className="mt-3 w-full px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700">
                Join Program
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
