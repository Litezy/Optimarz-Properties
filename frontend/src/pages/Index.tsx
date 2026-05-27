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
        <title>Optimarz Properties | Land Investment Opportunities in North Texas</title>
        <meta name="description" content="North Texas land investment with Optimarz Properties. Prime acreage in Bonham, Gainesville, Honey Grove & Wolfe City — affordable land near Dallas, TX with strong growth potential." />
        <meta name="keywords" content="land investment Texas, buy land North Texas, Texas land for sale, land near Dallas TX, Optimarz Properties, North Texas acreage, Texas real estate investment, affordable land Texas, land banking Texas, investment property Texas, rural land Texas, Fannin County land, Cooke County land, Hunt County land" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://optimarzproperties.com" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Optimarz Properties" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:url" content="https://optimarzproperties.com" />
        <meta property="og:title" content="Optimarz Properties | Land Investment Opportunities in North Texas" />
        <meta property="og:description" content="North Texas land investment with Optimarz Properties. Prime acreage in Bonham, Gainesville, Honey Grove & Wolfe City — affordable land near Dallas, TX." />
        <meta property="og:image" content="https://optimarzproperties.com/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Optimarz Properties | Land Investment Opportunities in North Texas" />
        <meta name="twitter:description" content="North Texas land investment with Optimarz Properties. Prime acreage in Bonham, Gainesville, Honey Grove & Wolfe City — affordable land near Dallas, TX." />
        <meta name="twitter:image" content="https://optimarzproperties.com/logo.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": "https://optimarzproperties.com/#organization",
              "name": "Optimarz Properties",
              "url": "https://optimarzproperties.com",
              "logo": {
                "@type": "ImageObject",
                "url": "https://optimarzproperties.com/logo.png",
                "width": 512,
                "height": 512
              },
              "description": "Premier land investment company offering curated acreage and property opportunities across North Texas — Bonham, Gainesville, Honey Grove, and Wolfe City.",
              "areaServed": [
                { "@type": "City", "name": "Bonham", "containedInPlace": { "@type": "State", "name": "Texas" } },
                { "@type": "City", "name": "Gainesville", "containedInPlace": { "@type": "State", "name": "Texas" } },
                { "@type": "City", "name": "Honey Grove", "containedInPlace": { "@type": "State", "name": "Texas" } },
                { "@type": "City", "name": "Wolfe City", "containedInPlace": { "@type": "State", "name": "Texas" } }
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "sales",
                "email": "info@optimarzproperties.com",
                "availableLanguage": "English"
              }
            },
            {
              "@type": "WebSite",
              "@id": "https://optimarzproperties.com/#website",
              "url": "https://optimarzproperties.com",
              "name": "Optimarz Properties",
              "description": "Land investment opportunities in North Texas",
              "publisher": { "@id": "https://optimarzproperties.com/#organization" }
            }
          ]
        })}</script>
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
        {/* <DownloadModal /> */}
      </div>
    </>
  );
};

export default Index;
