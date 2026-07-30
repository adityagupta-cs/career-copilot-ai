import { ArrowRight } from "lucide-react";

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-blue-500 hover:-translate-y-2 transition duration-300">

      <div className="text-blue-500 mb-5">
        {icon}
      </div>

      <h3 className="text-2xl font-bold mb-4">
        {title}
      </h3>

      <p className="text-gray-400 leading-7">
        {description}
      </p>

      <button className="flex items-center gap-2 text-blue-500 mt-6">
        Learn More
        <ArrowRight size={18} />
      </button>

    </div>
  );
}

export default FeatureCard;