import { Header } from "@/components/layouts/Header";
import { Footer } from "@/components/layouts/Footer";
import { Helmet } from "react-helmet";
import { LandHoldingsGallery } from "@/components/LandHoldingsGallery";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, MapPin, TrendingUp, Users } from "lucide-react";
import { Link } from "react-router-dom";
import project1 from "@/assets/opti4.jpg";
import project2 from "@/assets/opti5.jpg";
import project3 from "@/assets/opti6.jpg";

const projectAreas = [
  {
    title: "Fannin County",
    description: "Explore the enchanting beauty of Fannin County, where rolling hills meet picturesque landscapes and explore the historical significance that makes Fannin County a true treasure for investors.",
    image: project1,
    features: ["Historic Districts", "Growing Economy", "Excellent Schools", "Low Tax Rates"]
  },
  {
    title: "Hunt Springs",
    description: "Discover Hunt County serenity meets modern growth. Explore curated projects and investment opportunities with strong potential for prosperity.",
    image: project2,
    features: ["Tech Hub Growth", "Infrastructure Expansion", "Commercial Development", "Job Growth"]
  },
  {
    title: "Cooke County",
    description: "Discover Cooke County, where North Texas beauty meets a thriving economy. Positioned at the Texas–Oklahoma gateway, it offers prime investment opportunities and lasting prosperity.",
    image: project3,
    features: ["Waterfront Access", "Tourism Industry", "Resort Development", "Premium Location"]
  },
];

const Projects = () => {
  return (
    <>
      <Helmet>
        <title>Investment Land Projects in North Texas | Optimarz Properties</title>
        <meta name="description" content="Explore curated land investment projects in Bonham, Gainesville, Honey Grove & Wolfe City, TX. Affordable North Texas acreage near the DFW corridor with strong appreciation potential." />
        <meta name="keywords" content="Texas land investment projects, North Texas land for sale, buy land near Dallas, Bonham TX land, Gainesville TX land, Honey Grove TX land, Wolfe City TX, Fannin County land, Cooke County land, Hunt County Texas land, North Texas investment properties, rural land Texas" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://optimarzproperties.com/projects" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Optimarz Properties" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:url" content="https://optimarzproperties.com/projects" />
        <meta property="og:title" content="Investment Land Projects in North Texas | Optimarz Properties" />
        <meta property="og:description" content="Explore curated land investment projects in Bonham, Gainesville, Honey Grove & Wolfe City, TX. Affordable North Texas acreage near DFW with strong appreciation potential." />
        <meta property="og:image" content="https://optimarzproperties.com/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Investment Land Projects in North Texas | Optimarz Properties" />
        <meta name="twitter:description" content="Explore curated land investment projects in Bonham, Gainesville, Honey Grove & Wolfe City, TX. Affordable North Texas acreage near DFW with strong appreciation." />
        <meta name="twitter:image" content="https://optimarzproperties.com/logo.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://optimarzproperties.com/projects",
              "url": "https://optimarzproperties.com/projects",
              "name": "Investment Land Projects in North Texas | Optimarz Properties",
              "description": "Curated land investment projects across North Texas — Fannnin County, Hunt County, and Cooke County.",
              "breadcrumb": {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://optimarzproperties.com" },
                  { "@type": "ListItem", "position": 2, "name": "Projects", "item": "https://optimarzproperties.com/projects" }
                ]
              }
            },
            {
              "@type": "ItemList",
              "name": "North Texas Land Investment Projects",
              "description": "Curated land investment opportunities across North Texas",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Bonham Renaissance — Bonham, TX",
                  "url": "https://optimarzproperties.com/projects/bonham-renaissance",
                  "description": "Prime land in Bonham, TX — 60 min from Dallas, adjacent to Bois d'Arc Lake and Powder Creek Ranch"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Heritage Bloom — Gainesville, TX",
                  "url": "https://optimarzproperties.com/projects/heritage-bloom",
                  "description": "Prime land in Gainesville, TX — Cooke County seat on the I-35 corridor"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Tranquil Retreat — Honey Grove, TX",
                  "url": "https://optimarzproperties.com/projects/tranquil-retreat",
                  "description": "Affordable land in Honey Grove, TX — 8 miles from Bois d'Arc Lake in Fannin County"
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "name": "Small Town Charm — Wolfe City, TX",
                  "url": "https://optimarzproperties.com/projects/small-town-charm",
                  "description": "Affordable land in Wolfe City, TX — Hunt County's rising heritage market"
                }
              ]
            }
          ]
        })}</script>
      </Helmet>
      <div className="min-h-screen">
        <Header />
        <main className="pt-24 pb-20">
          <div className="container mx-auto px-4">
            <div className="mb-12 pt-8 flex items-center justify-center flex-col animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Projects</h1>
              <p className="text-xl text-center text-muted-foreground max-w-3xl">
                Discover our carefully curated land investment projects across premium locations.
                Each project is selected for its unique potential and investment value.
              </p>
            </div>

            {/* Project Areas */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold mb-8 animate-slide-up">Featured Investment Areas</h2>
              <div className="space-y-12">
                {projectAreas.map((area, index) => (
                  <Card
                    key={index}
                    className="overflow-hidden animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="grid md:grid-cols-2 gap-0">
                      <div className={`relative h-80 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                        <img
                          src={area.image}
                          alt={area.title}
                          className="w-full h-full object-cover"
                        />

                      </div>
                      <CardContent className={`p-8 flex flex-col justify-center ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                        <h3 className="text-3xl font-bold mb-4 text-primary">{area.title}</h3>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {area.description}
                        </p>
                        <div className="grid grid-cols-2 gap-3 mb-6">
                          {area.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm">
                              <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                        <Button asChild className="w-fit">
                          <Link to="/contact">Request Information</Link>
                        </Button>
                      </CardContent>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 animate-slide-up">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-3xl font-bold text-primary mb-2">30+</h3>
                  <p className="text-muted-foreground">Active Projects</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-3xl font-bold text-primary mb-2">200+</h3>
                  <p className="text-muted-foreground">Happy Investors</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-3xl font-bold text-primary mb-2">$500k+</h3>
                  <p className="text-muted-foreground">Total Investment Value</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Land Holdings Gallery */}
          <LandHoldingsGallery />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Projects;
