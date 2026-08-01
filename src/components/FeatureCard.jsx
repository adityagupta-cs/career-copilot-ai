import { motion } from "framer-motion";

function FeatureCard({ icon, title, description }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.6,
      }}
      viewport={{ once: true }}
      whileHover={{
        y: -10,
        scale: 1.03,
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
        transition-all
        duration-500
        hover:border-blue-500/50
        hover:shadow-[0_0_40px_rgba(59,130,246,0.25)]
      "
    >
      {/* Glow Effect */}
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

      {/* Icon */}
      <div
        className="
          mb-6
          inline-flex
          rounded-2xl
          bg-blue-500/10
          p-4
          text-blue-400
          transition-transform
          duration-300
          group-hover:scale-110
          group-hover:rotate-6
        "
      >
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold text-white mb-4">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-400 leading-7">
        {description}
      </p>
    </motion.div>
  );
}

export default FeatureCard;