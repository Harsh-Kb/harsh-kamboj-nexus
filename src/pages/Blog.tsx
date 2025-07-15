import { motion } from "framer-motion";

const Blog = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold gradient-text">
              Blog
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Thoughts on design, systems thinking, and self-mastery
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;