import { motion } from "framer-motion";
import Logo from "./Logo";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 px-4 py-4"
    >
      <div className="container mx-auto">
        <div className="glass rounded-2xl px-6 py-3 flex items-center justify-between">
          <Logo />
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
              About
            </a>
            <a href="#mission" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
              Mission
            </a>
            <a href="#opportunities" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
              Opportunities
            </a>
          </div>

          <Button variant="hero" size="sm">
            Join Now
          </Button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
