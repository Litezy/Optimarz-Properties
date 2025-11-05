import { Header } from "@/components/layouts/Header";
import { Footer } from "@/components/layouts/Footer";
import { Helmet } from "react-helmet";
import { LandHoldingsGallery } from "@/components/LandHoldingsGallery";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, MapPin, TrendingUp, Users } from "lucide-react";
import { Link } from "react-router-dom";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const projectAreas = [
  {
    title: "Heritage County",
    description: "Delve into enchanting beauty where rolling hills meet picturesque landscapes and explore the historical significance that makes this area a true treasure for investors.",
    image: project1,
    features: ["Historic Districts", "Growing Economy", "Excellent Schools", "Low Tax Rates"],
    growth: "+12% annually",
  },
  {
    title: "Valley Springs",
    description: "Discover where rural serenity meets modern growth. Explore curated projects and investment opportunities with strong potential for prosperity.",
    image: project2,
    features: ["Tech Hub Growth", "Infrastructure Expansion", "Commercial Development", "Job Growth"],
    growth: "+15% annually",
  },
  {
    title: "Coastal Meadows",
    description: "Discover where natural beauty meets a thriving economy. Positioned at a prime gateway, it offers premier investment opportunities and lasting prosperity.",
    image: project3,
    features: ["Waterfront Access", "Tourism Industry", "Resort Development", "Premium Location"],
    growth: "+18% annually",
  },
];

const Projects = () => {
  return (
    <>
      <Helmet>
        <title>Projects - LandWise</title>
        <meta name="description" content="Explore our curated land projects and investment opportunities across prime locations." />
      </Helmet>
      <div className="min-h-screen">
        <Header />
        <main className="pt-24 pb-20">
          <div className="container mx-auto px-4">
            <div className="mb-12 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Projects</h1>
              <p className="text-xl text-muted-foreground max-w-3xl">
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
                        <div className="absolute top-4 right-4 bg-primary text-white px-4 py-2 rounded-lg font-bold">
                          <TrendingUp className="w-4 h-4 inline mr-2" />
                          {area.growth}
                        </div>
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
                  <h3 className="text-3xl font-bold text-primary mb-2">50+</h3>
                  <p className="text-muted-foreground">Active Projects</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-3xl font-bold text-primary mb-2">500+</h3>
                  <p className="text-muted-foreground">Happy Investors</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-3xl font-bold text-primary mb-2">$50M+</h3>
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
