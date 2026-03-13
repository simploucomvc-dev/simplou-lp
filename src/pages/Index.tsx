import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Definition from "@/components/Definition";
import Services from "@/components/Services";
import Timeline from "@/components/Timeline";
import AppSection from "@/components/AppSection";
import FAQ from "@/components/FAQ";
import DualCTA from "@/components/DualCTA";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

const Index = () => (
  <>
    <Navbar />
    <Hero />
    <AppSection />
    <Definition />
    <Services />
    <Timeline />
    <DualCTA />
    <FAQ />
    <Footer />
    <FloatingCTA />
  </>
);

export default Index;
