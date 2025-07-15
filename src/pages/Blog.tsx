import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    id: 1,
    title: "Designing with Systems Thinking",
    preview: "How I approach design problems through the lens of interconnected systems, patterns, and emergent behaviors. Every interface is an ecosystem.",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Design Philosophy"
  },
  {
    id: 2,
    title: "Why I Think in Protocols",
    preview: "Protocols are more than rules—they're the invisible architecture that shapes reality. From social interactions to code, everything follows patterns.",
    date: "2024-01-08",
    readTime: "7 min read",
    category: "Philosophy"
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6 mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold gradient-text">
              Blog
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Thoughts on design, systems thinking, and self-mastery
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-all duration-300 hover:border-primary/50"
              >
                <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </div>
                  <span>•</span>
                  <span>{post.readTime}</span>
                  <span>•</span>
                  <span className="text-primary">{post.category}</span>
                </div>
                
                <h2 className="text-2xl font-display font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {post.preview}
                </p>
                
                <Button variant="ghost" className="group-hover:bg-primary/10 transition-colors">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;