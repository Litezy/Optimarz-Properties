import PageLayout from "@/components/layouts/PageLayout";
import { Helmet } from "react-helmet";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Calculator, FileText, TrendingUp, BookOpen, MapPin } from "lucide-react";
import resourceGuide from "@/assets/resource-guide.jpg";

const resources = [
  {
    icon: FileText,
    title: "Land investment guide",
    description: "Comprehensive guide covering everything from due diligence to closing deals.",
    action: "Download PDF",
  },
  {
    icon: Calculator,
    title: "ROI calculator",
    description: "Calculate potential returns on your land investments with our interactive tool.",
    action: "Use calculator",
  },
  {
    icon: TrendingUp,
    title: "Market reports",
    description: "Quarterly market analysis and trends in land investment across all regions.",
    action: "View reports",
  },
  {
    icon: BookOpen,
    title: "Investment glossary",
    description: "Essential terminology and concepts every land investor should know.",
    action: "Read more",
  },
  {
    icon: MapPin,
    title: "Location guides",
    description: "Detailed profiles of investment hotspots and emerging markets.",
    action: "Explore locations",
  },
];

const Resources = () => {
  return (
    <>
      <Helmet>
        <title>Texas Land Investment Resources & Guides | Optimarz Properties</title>
        <meta name="description" content="Free guides, ROI calculators, and market reports for North Texas land investors. Learn to evaluate, buy, and profit from land in Bonham, Gainesville & Honey Grove, TX." />
        <meta name="keywords" content="Texas land investment guide, North Texas real estate resources, land investment ROI calculator, how to buy land Texas, Texas land market report, land investment glossary, North Texas investment guide, land due diligence Texas" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://optimarzproperties.com/resources" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Optimarz Properties" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:url" content="https://optimarzproperties.com/resources" />
        <meta property="og:title" content="Texas Land Investment Resources & Guides | Optimarz Properties" />
        <meta property="og:description" content="Free guides, ROI calculators, and market reports for North Texas land investors. Learn to evaluate, buy, and profit from land in Bonham, Gainesville & Honey Grove, TX." />
        <meta property="og:image" content="https://optimarzproperties.com/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Texas Land Investment Resources & Guides | Optimarz Properties" />
        <meta name="twitter:description" content="Free guides, ROI calculators, and market reports for North Texas land investors. Learn to evaluate, buy, and profit from Texas land opportunities." />
        <meta name="twitter:image" content="https://optimarzproperties.com/logo.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": "https://optimarzproperties.com/resources",
          "url": "https://optimarzproperties.com/resources",
          "name": "Texas Land Investment Resources & Guides | Optimarz Properties",
          "description": "Free guides, ROI calculators, and market reports for North Texas land investors.",
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://optimarzproperties.com" },
              { "@type": "ListItem", "position": 2, "name": "Resources", "item": "https://optimarzproperties.com/resources" }
            ]
          }
        })}</script>
      </Helmet>
      <PageLayout>
        <div className="py-20">
          <div className="container mx-auto px-4">
            <div className="mb-12 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Resources</h1>
              <p className="text-xl text-muted-foreground max-w-3xl">
                Access our comprehensive collection of resources, guides, and tools designed to help 
                you make informed land investment decisions.
              </p>
            </div>

            {/* Featured Resource */}
            <Card className="mb-12 overflow-hidden animate-slide-up">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto">
                  <img
                    src={resourceGuide}
                    alt="Investment Guide"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <CardTitle className="text-3xl mb-4">
                    Complete land investment guide 2024
                  </CardTitle>
                  <CardDescription className="text-lg mb-6">
                    Our most comprehensive resource yet. This 50-page guide covers everything from 
                    market analysis to negotiation strategies, helping you navigate every step of 
                    your land investment journey.
                  </CardDescription>
                  <Button size="lg" className="w-fit">
                    <Download className="w-4 h-4 mr-2" />
                    Download free guide
                  </Button>
                </CardContent>
              </div>
            </Card>

            {/* Resource Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources.map((resource, index) => {
                const Icon = resource.icon;
                return (
                  <Card
                    key={index}
                    className="hover:shadow-lg transition-shadow duration-300 animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardHeader>
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{resource.title}</CardTitle>
                      <CardDescription>{resource.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="outline" className="w-full">
                        {resource.action}
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* CTA Section */}
            <Card className="mt-12 bg-primary text-primary-foreground animate-slide-up">
              <CardContent className="p-8 text-center">
                <h2 className="text-3xl font-bold mb-4">Need personalized guidance?</h2>
                <p className="text-lg mb-6 opacity-90">
                  Our team of experts is ready to help you navigate your land investment journey. 
                  Schedule a free consultation today.
                </p>
                <Button size="lg" variant="secondary">
                  Schedule consultation
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </PageLayout>
    </>
  );
};

export default Resources;
