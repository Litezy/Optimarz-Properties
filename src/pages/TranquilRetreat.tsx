import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import PageLayout from "@/components/layouts/PageLayout";
import { Link } from "react-router-dom";
import honeygrooveHero from "@/assets/honeygroove-hero.jpg";
import landImage from "@/assets/land-5.jpg";

const TranquilRetreat = () => {
  return (
    <>
      <Helmet>
        <title>Tranquil Retreat - Honey Grove, TX | Optimarz Properties</title>
        <meta
          name="description"
          content="Invest in Honey Grove, TX – High-growth land opportunities in Fannin County with Optimarz Properties. Discover the sweetest investment in North Texas."
        />
      </Helmet>
      <PageLayout>
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${honeygrooveHero})` }}
          >
            <div className="absolute inset-0 bg-black/60" />
          </div>

          <div className="relative z-10 container mx-auto px-4 text-center text-white animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Invest in Honey Grove, TX – High-growth land opportunities in Fannin County
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed">
              Optimarz Properties proudly introduces Tranquil Retreat, a premier land acquisition project in the "Sweetest Town in Texas." This is your exclusive chance to invest in well-located parcels in one of North Texas's hottest emerging markets.
            </p>
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 text-lg px-8"
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
                Why invest in Honey Grove and Fannin County?
              </h2>

              <Card className="mb-8">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-foreground">
                    Strategic location & accessibility
                  </h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li><strong>Proximity to Bois d'Arc Lake:</strong> Honey Grove is just 8 miles from the new Bois d'Arc Lake, North Texas's first major reservoir in 30 years, set to drive significant regional growth and property value appreciation.</li>
                    <li><strong>Access to major highways:</strong> Easy connections via US-82 and State Highway 50 to larger markets including Paris, TX, Sherman, and the Dallas-Fort Worth metroplex (about 80 miles south).</li>
                    <li><strong>Small-town charm with big potential:</strong> Combines peaceful rural living with strategic positioning near emerging infrastructure and recreational amenities.</li>
                  </ul>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold mb-4 text-foreground">
                      Population & growth trends
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Fannin County has a population of approximately 35,000, with Honey Grove serving as a charming small-town anchor of roughly 1,700 residents. The area benefits from steady growth driven by new infrastructure development and increasing interest from investors and families seeking affordable land near Dallas-Fort Worth.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      The completion of Bois d'Arc Lake is expected to accelerate population growth and land demand throughout the region.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold mb-4 text-foreground">
                      Amenities & lifestyle
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li><strong>Recreation:</strong> Bois d'Arc Lake, Pat Mayse Lake, and Cooper Lake offer world-class fishing, boating, hiking, and camping.</li>
                      <li><strong>Education:</strong> Quality schools served by local independent school districts.</li>
                      <li><strong>Healthcare:</strong> Paris Regional Medical Center and other facilities provide comprehensive care within 20 miles.</li>
                      <li><strong>Shopping:</strong> Historic downtown Honey Grove, with larger retail options in nearby Paris and Sherman.</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="mb-12">
                <img
                  src={landImage}
                  alt="Prime land investment opportunity in Honey Grove"
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
              </div>

              <Card className="mb-8">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-foreground">
                    Economic development & infrastructure
                  </h3>
                  <div className="space-y-4 text-muted-foreground">
                    <div>
                      <h4 className="font-bold text-foreground mb-2">Bois d'Arc Lake impact</h4>
                      <p className="leading-relaxed">
                        The new reservoir is transforming the region, attracting outdoor enthusiasts, tourism, and residential development. Property values near major lakes typically see 15-25% appreciation in the first 5 years post-completion.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-2">Agricultural heritage</h4>
                      <p className="leading-relaxed">
                        Fannin County maintains a strong agricultural base with cattle ranching, hay production, and specialty crops, supporting diverse land investment opportunities.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-2">Growing business sector</h4>
                      <p className="leading-relaxed">
                        Local economic development initiatives are attracting small businesses and entrepreneurs, creating jobs and increasing demand for both residential and commercial properties.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-primary/5">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-foreground">
                    Investment outlook & ROI potential
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Honey Grove represents an exceptional opportunity for early investors to capitalize on emerging growth trends before broader market recognition drives prices higher.
                  </p>
                  <div className="space-y-3 text-muted-foreground">
                    <div>
                      <h4 className="font-bold text-foreground mb-1">Land appreciation forecast</h4>
                      <p>With Bois d'Arc Lake development and regional infrastructure improvements, expect annual appreciation of 12-20% over the next 3-5 years for well-positioned parcels.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">Market positioning</h4>
                      <p>Currently undervalued compared to similar markets near major lakes and metros, offering significant upside potential for strategic investors.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">Multiple exit strategies</h4>
                      <p>Hold for long-term appreciation, develop for residential or recreational use, or position for sale to future developers as the market matures.</p>
                    </div>
                  </div>
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
                      Early market access
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Secure prime parcels before widespread market recognition drives prices higher.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <h3 className="text-lg font-bold mb-3 text-foreground">
                      Comprehensive research
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Detailed market analysis, infrastructure planning, and growth projections inform every investment.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <h3 className="text-lg font-bold mb-3 text-foreground">
                      Clear title guarantee
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Professional title work and closing services ensure worry-free transactions.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <h3 className="text-lg font-bold mb-3 text-foreground">
                      Ongoing support
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      From acquisition through holding period, we're your partner in maximizing investment returns.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center py-16 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg animate-slide-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Ready to invest in Honey Grove?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Don't miss this opportunity to invest in one of North Texas's most promising emerging markets. Contact us today to learn about available parcels.
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

export default TranquilRetreat;
