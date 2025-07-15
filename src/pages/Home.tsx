import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Hero3D from "@/components/Hero3D";
import Avatar from "@/components/Avatar";
import TypingAnimation from "@/components/TypingAnimation";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* 3D Background */}
        <div className="absolute inset-0 z-0">
          <Hero3D />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center space-y-8 px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <Avatar />
            
            <div className="space-y-4">
              <TypingAnimation
                text="My mind is a lab. My life, the experiment. My vision, inevitable."
                className="text-xl md:text-2xl font-display text-muted-foreground max-w-3xl mx-auto"
              />
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 0.8 }}
                className="text-4xl md:text-6xl lg:text-7xl font-display font-bold gradient-text"
              >
                Harsh Kamboj
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.5, duration: 0.8 }}
                className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
              >
                I design systems, stories & self.
              </motion.p>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center space-y-2 text-muted-foreground"
          >
            <span className="text-sm font-medium">Scroll to explore</span>
            <ChevronDown className="h-5 w-5" />
          </motion.div>
        </motion.div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <QuickLinkCard
              title="Projects"
              description="Explore my latest work in AI, mobile apps, and fiction"
              href="/projects"
              delay={0}
            />
            <QuickLinkCard
              title="About"
              description="Learn about my journey in tech and creative pursuits"
              href="/about"
              delay={0.2}
            />
            <QuickLinkCard
              title="Contact"
              description="Let's connect and build something amazing together"
              href="/contact"
              delay={0.4}
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

interface QuickLinkCardProps {
  title: string;
  description: string;
  href: string;
  delay: number;
}

const QuickLinkCard = ({ title, description, href, delay }: QuickLinkCardProps) => {
  return (
    <motion.a
      href={href}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      whileHover={{ y: -5 }}
      className="group block p-6 bg-card rounded-lg border border-border hover:shadow-glow transition-all duration-300"
    >
      <h3 className="text-xl font-display font-semibold mb-3 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-muted-foreground group-hover:text-foreground transition-colors">
        {description}
      </p>
    </motion.a>
  );
};

export default Home;