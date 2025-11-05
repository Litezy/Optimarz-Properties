import { Header } from "@/components/layouts/Header";
import { Footer } from "@/components/layouts/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { ProjectsSection } from "@/components/home/ProjectsSection";
import { WhyChooseSection } from "@/components/home/WhyChooseSection";
import { LandHoldingsGallery } from "@/components/LandHoldingsGallery";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CTASection } from "@/components/home/CTASection";
import { Helmet } from "react-helmet";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>LandWise - Premier Land Investment Opportunities</title>
        <meta name="description" content="Discover prime land investment opportunities with LandWise. Explore curated properties, historical landmarks, and promising projects for your future." />
      </Helmet>
      <div className="min-h-screen">
        <Header />
        <main className="pt-16">
          <HeroSection />
          <ProjectsSection />
          <WhyChooseSection />
          <LandHoldingsGallery />
          <TestimonialsSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
