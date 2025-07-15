import { motion } from "framer-motion";
import { Mail, Instagram, Twitter, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "harshxkamboj@gmail.com",
    href: "mailto:harshxkamboj@gmail.com"
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@harsh_kb3",
    href: "https://instagram.com/harsh_kb3"
  },
  {
    icon: Twitter,
    label: "Twitter/X",
    value: "@harsh_kb3",
    href: "https://x.com/harsh_kb3"
  }
];

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted");
  };

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
              Contact
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Let's connect and build something amazing together
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <h2 className="text-2xl font-display font-bold mb-6">Get in Touch</h2>
              
              <div className="space-y-6">
                {contactLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:shadow-lg transition-all duration-300 hover:border-primary/50 group"
                  >
                    <link.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                    <div>
                      <p className="text-sm text-muted-foreground">{link.label}</p>
                      <p className="text-foreground font-medium">{link.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-card border border-border rounded-lg p-8"
            >
              <h2 className="text-2xl font-display font-bold mb-6">Send a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input 
                      id="name" 
                      type="text" 
                      required 
                      className="mt-1"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      required 
                      className="mt-1"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    required
                    className="mt-1 min-h-[120px]"
                    placeholder="Tell me about your project or just say hello..."
                  />
                </div>
                
                <Button type="submit" className="w-full">
                  Send Message
                  <Send className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;