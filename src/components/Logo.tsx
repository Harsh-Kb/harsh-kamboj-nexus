import { motion } from "framer-motion";

const Logo = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="relative"
    >
      <div className="w-10 h-10 bg-gradient-hero rounded-lg shadow-glow flex items-center justify-center">
        <span className="text-white font-display font-bold text-lg">HK</span>
      </div>
      <motion.div
        className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full shadow-crimson"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      />
    </motion.div>
  );
};

export default Logo;