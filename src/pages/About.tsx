import { motion } from "framer-motion";
import { Code, Palette, BookOpen, Zap } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-surface">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold gradient-text">
              About Me
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              I'm Harsh Kamboj — a B.Tech AI/ML student at Chandigarh University, with a passion for building future-forward systems through AI, fiction, and design.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h2 className="text-3xl font-display font-bold">
                  Building the Future
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I believe in the convergence of technology and creativity. My work spans across artificial intelligence, mobile development, and storytelling — each project is an experiment in pushing boundaries and exploring new possibilities.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-display font-semibold">Education</h3>
                <div className="p-4 bg-card rounded-lg border border-border">
                  <h4 className="font-semibold text-primary">B.Tech CSE (Hons.) in AI/ML</h4>
                  <p className="text-muted-foreground">Chandigarh University</p>
                  <p className="text-sm text-muted-foreground">Current</p>
                </div>
              </div>
            </motion.div>

            {/* Right Content - Interests */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h2 className="text-3xl font-display font-bold">Interests & Expertise</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <InterestCard
                  icon={<Code className="h-6 w-6" />}
                  title="AI & ML"
                  description="Exploring the frontiers of artificial intelligence and machine learning"
                />
                <InterestCard
                  icon={<Palette className="h-6 w-6" />}
                  title="UI/UX Design"
                  description="Creating intuitive and beautiful user experiences"
                />
                <InterestCard
                  icon={<BookOpen className="h-6 w-6" />}
                  title="Storytelling"
                  description="Crafting narratives that inspire and connect"
                />
                <InterestCard
                  icon={<Zap className="h-6 w-6" />}
                  title="Digital Architecture"
                  description="Building scalable and innovative digital systems"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            <h2 className="text-3xl font-display font-bold">Philosophy</h2>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
              <PhilosophyCard
                title="Systems Thinking"
                description="Every problem is part of a larger system. Understanding the connections leads to better solutions."
                delay={0}
              />
              <PhilosophyCard
                title="Discipline"
                description="Consistency in small actions compounds into extraordinary results over time."
                delay={0.2}
              />
              <PhilosophyCard
                title="Self-Awareness"
                description="Knowing yourself is the beginning of all wisdom and the foundation of growth."
                delay={0.4}
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

interface InterestCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const InterestCard = ({ icon, title, description }: InterestCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="p-6 bg-card rounded-lg border border-border hover:shadow-glow transition-all duration-300"
    >
      <div className="flex items-start space-x-4">
        <div className="p-2 bg-primary/10 rounded-lg text-primary">
          {icon}
        </div>
        <div>
          <h3 className="font-display font-semibold mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

interface PhilosophyCardProps {
  title: string;
  description: string;
  delay: number;
}

const PhilosophyCard = ({ title, description, delay }: PhilosophyCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      className="text-center space-y-4"
    >
      <h3 className="text-xl font-display font-semibold text-primary">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  );
};

export default About;