import Button from "./Button";

function CTA() {
  return (
    <section className="max-w-7xl mx-auto py-20 px-8">
      <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-700 p-12 text-center">

        <h2 className="text-4xl font-bold">
          Ready to Boost Your Career?
        </h2>

        <p className="mt-6 text-lg text-blue-100 max-w-2xl mx-auto">
          Prepare for interviews, improve your resume, track your progress,
          and achieve your dream job with CareerCopilot AI.
        </p>

        <div className="mt-10 flex justify-center">
          <Button text="Get Started Free" />
        </div>

      </div>
    </section>
  );
}

export default CTA;