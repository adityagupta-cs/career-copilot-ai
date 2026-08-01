import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    name: "Ankit Singh",
    role: "Computer Science Student",
    review:
      "CareerCopilot AI made interview preparation much more structured and easy to follow.",
  },
  {
    name: "Aditya Gupta",
    role: "Btech CS AI Student",
    review: "CareerCopilot AI is helping me learn React and MERN from the fundamentals while building a real project."
  },
  {
    name: "Ankit Roy",
    role: "Frontend Developer",
    review:
      "The resume analysis feature gave me useful suggestions that improved my resume.",
  },
  {
    name: "Rohan Singh",
    role: "Software Engineer",
    review:
      "The clean interface and AI guidance helped me prepare with confidence.",
  },
];

function Testimonials() {
  return (
    <section className="max-w-7xl mx-auto py-20 px-8">

      <div className="text-center mb-14">

        <h2 className="text-4xl font-bold">
          What People Say
        </h2>

        <p className="text-gray-400 mt-4">
          Sample testimonials demonstrating the future experience of CareerCopilot AI.
        </p>

      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {testimonials.map((person, index) => (

          <TestimonialCard
            key={index}
            name={person.name}
            role={person.role}
            review={person.review}
          />

        ))}

      </div>

    </section>
  );
}

export default Testimonials;