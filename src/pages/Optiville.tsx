import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import PageLayout from "@/components/layouts/PageLayout";
import gainesvilleHero from "@/assets/gainesville-hero.jpg";
import landImage from "@/assets/land-1.jpg";

const Optiville = () => {
  return (
    <>
      <Helmet>
        <title>Invest in Prime Land Opportunities | Optimarz Properties</title>
        <meta
          name="description"
          content="Discover prime land investment opportunities with Optimarz Properties. Explore strategic locations with high growth potential and excellent ROI."
        />
      </Helmet>
      <PageLayout>
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${gainesvilleHero})` }}
          >
            <div className="absolute inset-0 bg-black/50" />
          </div>

          <div className="relative z-10 container mx-auto px-4 text-center text-white animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Invest in Prime Land – Exceptional Opportunities Await
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed">
              Optimarz Properties is excited to announce a new land acquisition project in strategic locations across thriving markets. We invite investors to join us in securing prime land parcels in these rapidly growing areas.
            </p>
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 text-lg px-8"
            >
              Learn More
            </Button>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            {/* Why Invest Section */}
            <div className="mb-20 animate-slide-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
                Why Invest in Prime Land Opportunities?
              </h2>

              <Card className="mb-8">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-foreground">
                    Strategic Location & Accessibility
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Our featured properties are strategically located with easy access to major highways and metropolitan areas. This proximity combines the charm of open land with metropolitan convenience, making it ideal for investors seeking growth near major urban centers.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    The areas we focus on border several key regions and counties, enriching the regional community with nearby towns and cities that provide essential amenities and services.
                  </p>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold mb-4 text-foreground">
                      Population & Growth Trends
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      The areas we serve are experiencing steady growth, driven by economic development, quality of life, and infrastructure improvements, supporting strong land value appreciation.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Growing populations and expanding communities create increasing demand for residential, commercial, and agricultural land use.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold mb-4 text-foreground">
                      Amenities & Public Services
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li><strong>Parks & Recreation:</strong> Local parks, lakes, and recreational facilities offer fishing, boating, hiking, and camping opportunities.</li>
                      <li><strong>Schools:</strong> Served by quality school districts with multiple educational options and nearby higher education institutions.</li>
                      <li><strong>Healthcare:</strong> Comprehensive healthcare services including emergency care and medical centers.</li>
                      <li><strong>Shopping & Services:</strong> Historic downtown areas and nearby retail hubs provide convenient access to shopping and dining.</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="mb-12">
                <img
                  src={landImage}
                  alt="Prime land investment opportunity"
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
              </div>

              <Card className="mb-8">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-foreground">
                    Recent Developments & Economic Growth
                  </h3>
                  <div className="space-y-4 text-muted-foreground">
                    <div>
                      <h4 className="font-bold text-foreground mb-2">Infrastructure</h4>
                      <p className="leading-relaxed">
                        Expansion of major highways and local roads enhances connectivity and land desirability throughout our target markets.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-2">Economic Incentives</h4>
                      <p className="leading-relaxed">
                        Local economic development corporations offer tax abatements, grants, and workforce training to attract businesses, creating new opportunities for land investors.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-2">Business & Industrial Growth</h4>
                      <p className="leading-relaxed">
                        New commercial and industrial projects create jobs and increase demand for residential and commercial land throughout the region.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-2">Agribusiness</h4>
                      <p className="leading-relaxed">
                        Our target areas remain key agri-business hubs, supporting diverse land use and investment opportunities across multiple sectors.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-primary/5">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-foreground">
                    ROI Projection Based on Market Data
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Land markets near major metros have shown strong appreciation, with many counties posting annual land value increases of 10-40%+ in recent years. While some areas are more rural, they benefit from spillover growth and infrastructure improvements.
                  </p>
                  <div className="space-y-3 text-muted-foreground">
                    <div>
                      <h4 className="font-bold text-foreground mb-1">Property Values</h4>
                      <p>Average property values in our target markets have increased by 5-8% year-over-year, with continued growth expected.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">Land Appreciation</h4>
                      <p>Based on regional trends and infrastructure projects, investors can expect annual land appreciation rates between 8-15% over the next 3-5 years.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">Market Liquidity</h4>
                      <p>Our markets offer a balanced environment with growing demand and attractive entry prices, ideal for both medium- and long-term investors.</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    This ROI projection combines historical appreciation rates, current market trends, and emerging development profiles, offering a compelling investment opportunity.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Why Invest with Optimarz */}
            <div className="mb-20 animate-slide-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-foreground">
                Why Invest with Optimarz Properties?
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card>
                  <CardContent className="p-6 text-center">
                    <h3 className="text-lg font-bold mb-3 text-foreground">
                      Comprehensive Due Diligence
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Title searches, zoning, and environmental assessments ensure clear, market-ready land.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <h3 className="text-lg font-bold mb-3 text-foreground">
                      Local Market Expertise
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Deep knowledge of local real estate trends and emerging opportunities.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <h3 className="text-lg font-bold mb-3 text-foreground">
                      Transparent Communication
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Regular updates and support throughout your investment journey.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <h3 className="text-lg font-bold mb-3 text-foreground">
                      Flexible Investment Options
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Tailored opportunities for first-time and seasoned investors alike.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center py-16 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg animate-slide-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Ready to Invest in Growing Markets?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Secure your place in one of the fastest-growing land markets. Whether for residential, commercial, or agricultural land, Optimarz Properties offers unmatched potential.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8">
                  Contact Us Today
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Join the VIP Waitlist
                </Button>
              </div>
              <p className="mt-6 text-muted-foreground">
                Email us: <a href="mailto:info@optimarzproperties.com" className="text-primary hover:underline">info@optimarzproperties.com</a>
              </p>
            </div>
          </div>
        </section>
      </PageLayout>
    </>
  );
};

export default Optiville;
