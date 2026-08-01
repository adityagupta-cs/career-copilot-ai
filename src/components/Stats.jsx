import { motion } from "framer-motion";

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
    <section className="max-w-7xl mx-auto py-24 px-8">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold">
          Why Choose CareerCopilot AI?
        </h2>

        <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
          Powerful AI tools designed to help students prepare smarter,
          learn faster, and build successful careers.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {stats.map((item, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
            }}
            viewport={{ once: true }}
            whileHover={{
              y: -10,
              scale: 1.05,
            }}
            className="
              group
              relative
              overflow-hidden
              rounded-3xl
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              p-8
              text-center
              transition-all
              duration-500
              hover:border-blue-500/50
              hover:shadow-[0_0_40px_rgba(59,130,246,0.3)]
            "
          >
            {/* Glow */}
            <div
              className="
                absolute
                -top-20
                -right-20
                h-40
                w-40
                rounded-full
                bg-blue-500/10
                blur-3xl
                transition-all
                duration-500
                group-hover:bg-blue-500/20
              "
            />

            <h2 className="text-5xl font-bold text-blue-400">
              {item.number}
            </h2>

            <p className="text-gray-300 mt-5 text-lg">
              {item.title}
            </p>

          </motion.div>

        ))}

      </div>

    </section>
  );
}

export default Stats;