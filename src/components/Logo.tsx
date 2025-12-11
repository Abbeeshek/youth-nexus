import { motion } from "framer-motion";

const Logo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center gap-2"
    >
      <div className="relative">
        <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center glow-primary">
          <span className="font-display font-bold text-primary-foreground text-lg">YA</span>
        </div>
        <div className="absolute -inset-1 rounded-lg bg-gradient-primary opacity-30 blur-sm -z-10" />
      </div>
      <div className="hidden sm:block">
        <span className="font-display font-bold text-foreground text-lg tracking-tight">
          Youth<span className="text-gradient">Association</span>
        </span>
      </div>
    </motion.div>
  );
};

export default Logo;
