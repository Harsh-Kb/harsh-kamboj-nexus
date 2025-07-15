import { motion } from "framer-motion";

const Protocol = () => {
  return (
    <div className="min-h-screen pt-20 bg-black text-green-400 font-mono">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="space-y-6"
          >
            <div className="text-center space-y-4">
              <h1 className="text-2xl font-bold glitch">PROTOCOL ACTIVATED</h1>
              <p className="text-sm">Hidden lore and terminal access</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Protocol;