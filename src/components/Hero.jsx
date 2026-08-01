import { motion } from "framer-motion";
import Button from "./Button";

function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-24 overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-blue-400 font-semibold uppercase tracking-[0.2em] mb-4">
            AI Powered Career Platform
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            Ace Every
            <span className="text-blue-500"> Interview </span>
            With AI
          </h1>

          <p className="text-gray-400 text-lg mt-8 leading-8 max-w-xl">
            CareerCopilot AI helps students prepare for interviews,
            improve resumes, track job applications, and receive
            personalized AI career guidance.
          </p>

          <div className="flex gap-5 mt-10">
            <Button text="Get Started" />
            <Button text="Watch Demo" />
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0.3,
          }}
          className="flex justify-center"
        >
          <motion.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              relative
              w-96
              h-96
              rounded-full
              bg-gradient-to-br
              from-blue-500
              via-cyan-500
              to-indigo-600
              flex
              items-center
              justify-center
              text-8xl
              shadow-[0_0_80px_rgba(59,130,246,0.45)]
            "
          >
            🤖

            {/* Glow Ring */}
            <div
              className="
                absolute
                inset-0
                rounded-full
                border
                border-blue-400/30
                animate-ping
              "
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;