import Hero from "./components/Hero";
import Process from "./components/Process";
import StartShippingSection from "./components/StartShippingSection";
import Footer from "./components/Footer";
import StructuredData from "./components/StructuredData";
import Second from "./components/Second";
import GlassNavbar from "./components/GlassNavbar";
import Test from "./components/Test";
import BlogsSection from "./components/BlogsSection";
import RocketFlight from "@/components/ui/RocketFlight";
import PriceSection from "./components/PriceSection";
import ComparisonTable from "./components/ComparisonTable";
import Services from "./components/Services";

export default function Home() {
  return (
    <>
      <StructuredData />
      <div className="w-full">
        {/* <RocketFlight /> */}
        <GlassNavbar />
        <Hero />
        <Second />
        <Services />
        <ComparisonTable />
        <Process />
        <PriceSection />
        <Test />
        <BlogsSection />
        <StartShippingSection />
        <Footer />
      </div>
    </>
  );
}
