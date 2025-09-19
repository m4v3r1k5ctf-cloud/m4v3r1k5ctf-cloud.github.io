import { Navbar } from "@/components/ui/navbar";
import { RoadmapSection } from "@/components/roadmap-section";
import { Footer } from "@/components/footer";

const Roadmap = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <RoadmapSection />
      <Footer />
    </div>
  );
};

export default Roadmap;
