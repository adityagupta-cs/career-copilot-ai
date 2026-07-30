import {
  Brain,
  FileText,
  BriefcaseBusiness,
} from "lucide-react";

import FeatureCard from "./FeatureCard";

function Features() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-24">

      <h2 className="text-4xl font-bold text-center mb-16">
        Everything You Need
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        <FeatureCard
          icon={<Brain size={40} />}
          title="AI Mock Interviews"
          description="Practice company-specific interviews and receive instant AI feedback."
        />

        <FeatureCard
          icon={<FileText size={40} />}
          title="Resume Analyzer"
          description="Improve your resume with personalized AI suggestions and scoring."
        />

        <FeatureCard
          icon={<BriefcaseBusiness size={40} />}
          title="Job Tracker"
          description="Track applications, interviews, offers, and upcoming deadlines."
        />

      </div>

    </section>
  );
}

export default Features;