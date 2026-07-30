const stats = [
  {
    number: "5+",
    title: "AI Powered Features",
  },
  {
    number: "10+",
    title: "Career Tools",
  },
  {
    number: "24/7",
    title: "AI Assistance",
  },
  {
    number: "100%",
    title: "Responsive Design",
  },
];

function Stats() {
  return (
    <section className="max-w-7xl mx-auto py-20 px-8">
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold text-white">
          Everything You Need to Accelerate Your Career
        </h2>

        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          CareerCopilot AI combines powerful AI tools and career resources into
          one platform to help students prepare for interviews, improve resumes,
          and track their learning journey.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center hover:-translate-y-2 hover:border-blue-500 transition-all duration-300 shadow-lg"
          >
            <h2 className="text-5xl font-bold text-blue-500">
              {item.number}
            </h2>

            <p className="text-gray-400 mt-4 text-lg">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;