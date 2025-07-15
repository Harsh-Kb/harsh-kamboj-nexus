import { motion } from "framer-motion";

const Avatar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="relative mx-auto"
    >
      <div className="w-32 h-32 rounded-full bg-gradient-hero shadow-glow overflow-hidden">
        <div className="w-full h-full flex items-center justify-center text-white text-4xl font-display font-bold">
          HK
        </div>
      </div>
      <motion.div
        className="absolute -bottom-2 -right-2 w-6 h-6 bg-accent rounded-full shadow-crimson"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </motion.div>
  );
};

export default Avatar;