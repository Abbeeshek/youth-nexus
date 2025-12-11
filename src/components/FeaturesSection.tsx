import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  GraduationCap, 
  Lightbulb, 
  Briefcase, 
  Globe2, 
  Users2, 
  TrendingUp 
} from "lucide-react";

const features = [
  {
    icon: GraduationCap,
    title: "Leadership Development",
    description: "Build essential leadership skills through mentorship programs and hands-on experiences.",
  },
  {
    icon: Lightbulb,
    title: "Digital Skills Training",
    description: "Master cutting-edge technologies and digital tools to thrive in the modern economy.",
  },
  {
    icon: Briefcase,
    title: "Startup Building",
    description: "Transform your ideas into reality with resources, funding guidance, and expert support.",
  },
  {
    icon: Globe2,
    title: "Global Networking",
    description: "Connect with like-minded youth from 120+ countries and expand your horizons.",
  },
  {
    icon: Users2,
    title: "Community Events",
    description: "Participate in hackathons, workshops, summits, and exclusive networking events.",
  },
  {
    icon: TrendingUp,
    title: "Career Opportunities",
    description: "Access job placements, internships, and entrepreneurial opportunities worldwide.",
  },
];

const FeaturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="opportunities" ref={ref} className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            What We Offer
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-foreground mb-4">
            Unlock Your <span className="text-gradient-accent">Potential</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover endless opportunities to learn, grow, and succeed in our comprehensive ecosystem.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full glass rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:glow-soft hover:border-primary/30">
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display font-bold text-xl text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
