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
    </div>
  );
};

export default Layout;