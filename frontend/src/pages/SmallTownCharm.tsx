import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import PageLayout from "@/components/layouts/PageLayout";
import { Link } from "react-router-dom";
import wolfecityHero from "@/assets/wolfecity-hero.jpg";
import landImage from "@/assets/land-2.jpg";

const SmallTownCharm = () => {
  return (
    <>
      <Helmet>
        <title>Small Town Charm - Wolfe City, TX | Optimarz Properties</title>
        <meta
          name="description"
          content="Invest in Wolfe City, TX – Small town charm meets rising opportunity. Discover affordable land investments in Hunt County with Optimarz Properties."
        />
      </Helmet>
      <PageLayout>
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${wolfecityHero})` }}
          >
            <div className="absolute inset-0 bg-black/60" />
          </div>

          <div className="relative z-10 container mx-auto px-4 text-center text-white animate-fade-in">
            <h1 className="text-3xl !text-white max-w-5xl mx-auto md:text-5xl font-bold mb-6">
              Wolfe City, Texas – Small town charm & rising opportunity
            </h1>
            <h2 className="text-2xl md:text-3xl mb-6">A heritage town, poised for growth</h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed">
              Discover the small-town charm of Wolfe City, where friendly faces and welcoming communities await. Once centered around small farms, local commerce, and an active civic life, Wolfe City is now seeing subtle but meaningful growth in property demand, development interest, and investor attention. From quaint Main Street storefronts to emerging residential lot opportunities, it's a place where heritage meets potential.
            </p>
            <Button
              size="lg"
              className="bg-white text-[#253019] font-bold hover:bg-white/90 text-lg px-8"
              asChild
            >
              <a href="#more">Learn More</a>
            </Button>
          </div>
        </section>

        {/* Main Content */}
        <section id="more" className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="mb-20 animate-slide-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
                Market overview & investment potential
              </h2>

              <Card className="mb-8">
                <CardContent className="p-8">
                  <div className="space-y-4 text-muted-foreground">
                    <div>
                      <h4 className="font-bold text-foreground mb-2">Housing market trends</h4>
                      <p className="leading-relaxed">
                        In the past 12 months, Wolfe City has seen approximately 62 residential properties sold, with a median single-family home price around $226,100.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-2">Price growth</h4>
                      <p className="leading-relaxed">
                        From October 2023 to October 2024, median listed home prices increased to approximately $267,450, with a rise of over $158 per square foot, representing more than 40% growth.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-2">Cost of living & affordability</h4>
                      <p className="leading-relaxed">
                        Wolfe City remains significantly more affordable than many metro areas. Housing, utilities, and groceries often run well below national averages, making it attractive for families and investors seeking value.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="mb-12 bg-primary/5">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-foreground">
                    ROI expectations
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Given current market trends, investors might expect annual appreciation in the range of 5-10% for established or well-located lots and homes over 3-5 years, particularly where new infrastructure or desirable amenities are nearby. Land and lots in development zones or near major highways could yield more on shorter timeframes if supply is tight and demand rises.
                  </p>
                </CardContent>
              </Card>

              <div className="mb-12">
                <img
                  src={landImage}
                  alt="Wolfe City Texas land investment opportunity"
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
              </div>

              <Card className="mb-8">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-foreground">
                    Amenities & lifestyle
                  </h3>
                  <div className="space-y-4 text-muted-foreground">
                    <div>
                      <h4 className="font-bold text-foreground mb-2">Community character</h4>
                      <p className="leading-relaxed">
                        Wolfe City maintains authentic small-town Texas character with community events, local businesses, and strong civic engagement. Residents value neighborly connections and quality of life over urban congestion.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-2">Education</h4>
                      <p className="leading-relaxed">
                        Wolfe City Independent School District serves the community with dedication to student success, while nearby universities in Commerce and Greenville expand educational opportunities.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-2">Recreation</h4>
                      <p className="leading-relaxed">
                        Local parks, nearby lakes including Lake Tawakoni and Cooper Lake, and open countryside provide abundant opportunities for outdoor recreation, fishing, and family activities.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-2">Accessibility</h4>
                      <p className="leading-relaxed">
                        Strategic location with access to US-82 and State Highway 11, connecting to Greenville (25 miles), Commerce (15 miles), and the Dallas-Fort Worth metroplex (approximately 70 miles).
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold mb-4 text-foreground">
                      Economic factors
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li><strong>Agricultural base:</strong> Farming and ranching remain economic pillars, supporting land value stability.</li>
                      <li><strong>Small business growth:</strong> Local entrepreneurs opening shops, restaurants, and service businesses.</li>
                      <li><strong>Commuter appeal:</strong> Affordable alternative for workers commuting to larger nearby cities.</li>
                      <li><strong>Regional development:</strong> Benefits from growth in neighboring Hunt County markets.</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold mb-4 text-foreground">
                      Investment advantages
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li><strong>Entry pricing:</strong> Significantly lower land and property costs compared to urban markets.</li>
                      <li><strong>Growth trajectory:</strong> Early-stage appreciation cycle offering better risk-reward balance.</li>
                      <li><strong>Multiple strategies:</strong> Suitable for buy-and-hold, development, or agricultural use.</li>
                      <li><strong>Low competition:</strong> Less crowded market provides negotiating advantages for investors.</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-gradient-to-r from-primary/5 to-secondary/5">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-foreground">
                    Why now is the time
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Wolfe City represents a rare opportunity to invest before broader market discovery. As North Texas continues expanding and remote work reshapes location preferences, small towns offering affordability, character, and connectivity are positioned for meaningful appreciation.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    The recent 40%+ price growth demonstrates accelerating interest, but Wolfe City remains accessible compared to already-discovered markets. Early investors who recognize value before the mainstream will be best positioned for long-term returns.
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
                      Value discovery
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      We identify emerging markets before mainstream recognition, maximizing upside potential.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <h3 className="text-lg font-bold mb-3 text-foreground">
                      Local knowledge
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Deep understanding of small-town dynamics, community relationships, and growth patterns.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <h3 className="text-lg font-bold mb-3 text-foreground">
                      Flexible options
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Parcels sized and priced for various investment strategies and budgets.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <h3 className="text-lg font-bold mb-3 text-foreground">
                      Long-term perspective
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Patient capital approach focused on sustainable appreciation and community benefit.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center py-16 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg animate-slide-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Discover Wolfe City opportunities
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Invest in authentic Texas small-town living with real growth potential. Contact us to learn about available properties in Wolfe City.
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

export default SmallTownCharm;
