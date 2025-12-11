import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeaturesSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Youth Association – Where Young Minds Rise | Metakart</title>
        <meta 
          name="description" 
          content="Join Metakart's Youth Association - A global platform empowering young innovators, creators, and future leaders with real opportunities to grow, earn, and build." 
        />
        <meta property="og:title" content="Youth Association – Where Young Minds Rise | Metakart" />
        <meta 
          property="og:description" 
          content="A global platform empowering the next generation of innovators, creators, dreamers, and future leaders." 
        />
      </Helmet>
      
      <main className="min-h-screen bg-background overflow-x-hidden">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <CTASection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
