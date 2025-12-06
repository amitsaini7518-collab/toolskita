import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import ToolsGrid from "@/components/home/ToolsGrid";
import AdBanner from "@/components/layout/AdBanner";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <div className="container">
          <AdBanner size="leaderboard" className="mb-8" />
        </div>
        <ToolsGrid />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
