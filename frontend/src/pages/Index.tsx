import { Header } from "@/components/layouts/Header";
import { Footer } from "@/components/layouts/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { ProjectsSection } from "@/components/home/ProjectsSection";
import { WhyChooseSection } from "@/components/home/WhyChooseSection";
import { LandHoldingsGallery } from "@/components/LandHoldingsGallery";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CTASection } from "@/components/home/CTASection";
import { DownloadModal } from "@/components/modals/DownloadModal";
import { Helmet } from "react-helmet";

export const CompanyName = "Optimarz Properties";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Optimarz Properties - Premier Land Investment Opportunities</title>
        <meta name="description" content="Discover prime land investment opportunities with Optimarz Properties. Explore curated properties, historical landmarks, and promising projects for your future." />
      </Helmet>
      <div className="min-h-screen w-full overflow-x-hidden">
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
        <DownloadModal />
      </div>
    </>
  );
};

export default Index;
