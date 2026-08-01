function TestimonialCard({ name, role, review }) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-blue-500 hover:-translate-y-2 transition-all duration-300">

      <div className="flex items-center gap-4">

        <div className="w-14 h-14 rounded-full bg-blue-500 flex items-center justify-center text-xl font-bold">
          {name.charAt(0)}
        </div>

        <div>
          <h3 className="text-xl font-semibold">
            {name}
          </h3>

          <p className="text-gray-400">
            {role}
          </p>
        </div>

      </div>

      <div className="text-yellow-400 text-xl mt-4">
        ⭐⭐⭐⭐⭐
      </div>

      <p className="text-gray-300 mt-4 leading-7">
        "{review}"
      </p>

    </div>
  );
}

export default TestimonialCard;