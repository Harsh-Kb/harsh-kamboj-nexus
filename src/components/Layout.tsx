import { motion } from "framer-motion";
import Navigation from "./Navigation";
import CustomCursor from "./CustomCursor";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background cursor-custom">
      <CustomCursor />
      <Navigation />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        {children}
      </motion.main>
      
      {/* Footer */}
      <footer className="border-t border-border py-8 mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <p className="text-sm text-muted-foreground">
              © 2024 Harsh Kamboj. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">
              Designed & built with passion for the future
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;