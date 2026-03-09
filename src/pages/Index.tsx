import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Definition from "@/components/Definition";
import Services from "@/components/Services";
import Timeline from "@/components/Timeline";
// import AppSection from "@/components/AppSection";
// import FAQ from "@/components/FAQ";
// import DualCTA from "@/components/DualCTA";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";

const Index = () => (
  <>
    <Navbar />
    <Hero />
    <Definition />
    <Services />
    <Timeline />
    {/* <AppSection /> */}
    {/* <FAQ /> */}
    {/* <DualCTA /> */}
    <LeadForm />
    <Footer />
  </>
);

export default Index;
