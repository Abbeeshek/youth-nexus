import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-24 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Our Vision
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-foreground mb-6">
              Empowering the <span className="text-gradient">Next Generation</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass rounded-3xl p-8 sm:p-12"
          >
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                <span className="text-foreground font-semibold">Metakart's Youth Association</span> is a global platform built to empower the next generation. We bring together young innovators, creators, dreamers, and future leaders — giving them real opportunities to grow, earn, and build their identity in the digital and real world.
              </p>
              
              <div className="py-6 border-y border-border/50">
                <p className="text-xl sm:text-2xl font-display text-foreground text-center italic">
                  "Our mission is simple: To create a network where youth can learn, collaborate, build businesses, participate in global events, and unlock unlimited possibilities."
                </p>
              </div>
              
              <p>
                From leadership development to digital skills, from startup building to global networking — this association opens doors to careers, opportunities, and entrepreneurship for every young mind worldwide.
              </p>
              
              <p className="text-foreground font-medium text-xl">
                The future belongs to those who take the first step.
                <br />
                <span className="text-gradient font-bold">This is where the journey begins.</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
