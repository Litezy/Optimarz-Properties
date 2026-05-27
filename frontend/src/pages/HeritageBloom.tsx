import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import PageLayout from "@/components/layouts/PageLayout";
import { Link } from "react-router-dom";
import gainesvilleHero from "@/assets/gainesville-hero.jpg";
import landImage from "@/assets/land-1.jpg";

const HeritageBloom = () => {
  return (
    <>
      <Helmet>
        <title>Land for Sale in Gainesville, TX | Cooke County | Optimarz Properties</title>
        <meta name="description" content="Buy prime land in Gainesville, TX — county seat of Cooke County on the I-35 corridor. Affordable North Texas acreage with DFW growth spillover and strong long-term appreciation." />
        <meta name="keywords" content="land for sale Gainesville TX, Gainesville Texas real estate, Cooke County land investment, buy acreage Gainesville Texas, I-35 corridor land Texas, North Texas land for sale, Cooke County property Texas, land near DFW Texas, Gainesville TX investment property, North Texas acreage" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://optimarzproperties.com/projects/heritage-bloom" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Optimarz Properties" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:url" content="https://optimarzproperties.com/projects/heritage-bloom" />
        <meta property="og:title" content="Land for Sale in Gainesville, TX | Cooke County | Optimarz Properties" />
        <meta property="og:description" content="Buy prime land in Gainesville, TX — Cooke County seat on the I-35 corridor. Affordable North Texas acreage with DFW growth spillover and strong long-term appreciation potential." />
        <meta property="og:image" content="https://optimarzproperties.com/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Land for Sale in Gainesville, TX | Cooke County | Optimarz Properties" />
        <meta name="twitter:description" content="Buy prime land in Gainesville, TX — Cooke County seat on the I-35 corridor. Affordable North Texas acreage with DFW growth spillover and strong appreciation potential." />
        <meta name="twitter:image" content="https://optimarzproperties.com/logo.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://optimarzproperties.com/projects/heritage-bloom",
              "url": "https://optimarzproperties.com/projects/heritage-bloom",
              "name": "Land for Sale in Gainesville, TX | Cooke County | Optimarz Properties",
              "description": "Prime land investment opportunity in Gainesville, Texas — county seat of Cooke County on the I-35 corridor.",
              "breadcrumb": {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://optimarzproperties.com" },
                  { "@type": "ListItem", "position": 2, "name": "Projects", "item": "https://optimarzproperties.com/projects" },
                  { "@type": "ListItem", "position": 3, "name": "Heritage Bloom — Gainesville TX", "item": "https://optimarzproperties.com/projects/heritage-bloom" }
                ]
              }
            },
            {
              "@type": "RealEstateListing",
              "name": "Heritage Bloom — Land Investment in Gainesville, TX",
              "description": "Prime land parcels in Gainesville, Texas — the county seat of Cooke County. Positioned on the I-35 corridor with direct access to the Dallas-Fort Worth metro and strong long-term growth fundamentals.",
              "url": "https://optimarzproperties.com/projects/heritage-bloom",
              "provider": {
                "@type": "RealEstateAgent",
                "name": "Optimarz Properties",
                "url": "https://optimarzproperties.com"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Gainesville",
                "addressRegion": "TX",
                "postalCode": "76240",
                "addressCountry": "US"
              }
            }
          ]
        })}</script>
      </Helmet>
      <PageLayout>
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${gainesvilleHero})` }}
          >
            <div className="absolute inset-0 bg-black/60" />
          </div>

          <div className="relative z-10 container mx-auto px-4 text-center text-white animate-fade-in">
            <h1 className="text-3xl !text-white max-w-5xl mx-auto md:text-5xl font-bold mb-6">
              Invest in Gainesville, TX – Prime Land Opportunities in Cooke County
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed">
              Optimarz Properties is excited to announce a new land acquisition project in Gainesville, Texas, the vibrant county seat of Cooke County. We invite investors to join us in securing prime land parcels in this rapidly growing North Texas market.
            </p>
            <Button
              size="lg"
              className="bg-white text-[#253019] hover:bg-white/90 text-lg px-8"
              asChild
            >
              <a href="#more">Learn More</a>
            </Button>
          </div>
        </section>

        {/* Main Content */}
        <section id="more" className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            {/* Why Invest Section */}
            <div className="mb-20 animate-slide-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
                Why invest in Gainesville and Cooke County?
              </h2>

              <Card className="mb-8">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-foreground">
                    Strategic location & accessibility
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Gainesville is located just 71 miles north of Dallas along Interstate 35 (I-35) and U.S. Highway 82, offering easy access to the Dallas-Fort Worth metroplex. This proximity combines small-town charm with metropolitan convenience, making it ideal for investors seeking growth near a major urban center.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Cooke County borders several counties, including Love County, Oklahoma (~18 miles north), enriching the regional community with nearby towns and cities that provide essential amenities and services.
                  </p>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold mb-4 text-foreground">
                      Population & growth trends
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Cooke County has experienced steady growth, with a population of approximately 41,668 as of the 2020 Census. Gainesville itself is home to around 17,394 residents, driven by economic development, quality of life, and infrastructure improvements, supporting strong land value appreciation.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Growing populations and expanding communities create increasing demand for residential, commercial, and agricultural land use.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold mb-4 text-foreground">
                      Amenities & public services
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li><strong>Parks & recreation:</strong> Leonard Park, Depot Park, Lake Kiowa, and Red River offer fishing, boating, hiking, and camping opportunities.</li>
                      <li><strong>Schools:</strong> Served by Gainesville Independent School District with multiple educational options and nearby North Central Texas College.</li>
                      <li><strong>Healthcare:</strong> North Texas Medical Center provides comprehensive healthcare services including emergency care.</li>
                      <li><strong>Shopping & services:</strong> Historic downtown Gainesville and nearby retail hubs provide convenient access to shopping and dining.</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="mb-12">
                <img
                  src={landImage}
                  alt="Prime land investment opportunity in Gainesville"
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
              </div>

              <Card className="mb-8">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-foreground">
                    Recent developments & economic growth
                  </h3>
                  <div className="space-y-4 text-muted-foreground">
                    <div>
                      <h4 className="font-bold text-foreground mb-2">Infrastructure</h4>
                      <p className="leading-relaxed">
                        Expansion of Interstate 35 and local roads enhances connectivity and land desirability throughout Cooke County.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-2">Economic incentives</h4>
                      <p className="leading-relaxed">
                        The Gainesville Economic Development Corporation offers tax abatements, grants, and workforce training to attract businesses, creating new opportunities for land investors.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-2">Business & industrial growth</h4>
                      <p className="leading-relaxed">
                        New commercial and industrial projects create jobs and increase demand for residential and commercial land throughout the region.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-2">Agribusiness</h4>
                      <p className="leading-relaxed">
                        Cooke County remains a key agri-business hub, supporting diverse land use and investment opportunities across multiple sectors.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-primary/5">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-foreground">
                    ROI projection based on market data
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Land markets near major metros have shown strong appreciation, with many North Texas counties posting annual land value increases of 10-40%+ in recent years. Cooke County, while more rural, benefits from spillover growth and infrastructure improvements.
                  </p>
                  <div className="space-y-3 text-muted-foreground">
                    <div>
                      <h4 className="font-bold text-foreground mb-1">Property values</h4>
                      <p>Average property values in Gainesville have increased by 5-8% year-over-year, with continued growth expected.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">Land appreciation</h4>
                      <p>Based on regional trends and infrastructure projects, investors can expect annual land appreciation rates between 8-15% over the next 3-5 years.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">Market liquidity</h4>
                      <p>Gainesville offers a balanced environment with growing demand and attractive entry prices, ideal for both medium- and long-term investors.</p>
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
                Why invest with Optimarz Properties?
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card>
                  <CardContent className="p-6 text-center">
                    <h3 className="text-lg font-bold mb-3 text-foreground">
                      Comprehensive due diligence
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Title searches, zoning, and environmental assessments ensure clear, market-ready land.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <h3 className="text-lg font-bold mb-3 text-foreground">
                      Local market expertise
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Deep knowledge of local real estate trends and emerging opportunities.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <h3 className="text-lg font-bold mb-3 text-foreground">
                      Transparent communication
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Regular updates and support throughout your investment journey.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <h3 className="text-lg font-bold mb-3 text-foreground">
                      Flexible investment options
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
                Ready to invest in Gainesville?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Secure your place in one of North Texas's fastest-growing land markets. Whether for residential, commercial, or agricultural land, Optimarz Properties offers unmatched potential.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8" asChild>
                  <Link to="/contact">Contact us today</Link>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8" asChild>
                  <Link to="/waitlist">Join the VIP waitlist</Link>
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

export default HeritageBloom;
