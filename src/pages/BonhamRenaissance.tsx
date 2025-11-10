import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import PageLayout from "@/components/layouts/PageLayout";
import { Link } from "react-router-dom";
import bonhamHero from "@/assets/bonham-hero.jpg";
import landImage from "@/assets/land-6.jpg";

const BonhamRenaissance = () => {
  return (
    <>
      <Helmet>
        <title>Bonham Renaissance - Bonham, TX | Optimarz Properties</title>
        <meta
          name="description"
          content="Invest in Bonham, TX – A historic city reimagined. Discover prime land opportunities in one of North Texas's most exciting destinations with Optimarz Properties."
        />
      </Helmet>
      <PageLayout>
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${bonhamHero})` }}
          >
            <div className="absolute inset-0 bg-black/60" />
          </div>

          <div className="relative z-10 container mx-auto px-4 text-center text-white animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Bonham, Texas – The Bonham Renaissance
            </h1>
            <h2 className="text-2xl md:text-3xl mb-6">A historic city, reimagined</h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed">
              The Bonham Renaissance is a transformative initiative designed to preserve the city's historic charm while ushering in new waves of growth and prosperity. Just over an hour from Dallas, Bonham is becoming one of North Texas's most exciting destinations for families, businesses, and investors.
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
                Why invest in Bonham?
              </h2>

              <Card className="mb-8">
                <CardContent className="p-8">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Bonham has seen steady growth, with median home prices rising nearly 18% year-over-year and strong demand fueled by new infrastructure and regional economic expansion. Investors can expect attractive returns, with projected residential appreciation of 5–8% annually over the next 3–5 years and even higher upside in premium developments.
                  </p>
                </CardContent>
              </Card>

              <div className="mb-12">
                <img
                  src={landImage}
                  alt="Bonham Texas land investment opportunity"
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
              </div>

              <Card className="mb-8">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-foreground">
                    Amenities and lifestyle
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    From a vibrant downtown filled with shops, restaurants, and historic landmarks, to natural escapes like Bonham State Park, Lake Bonham, and the brand-new Bois d'Arc Lake, the city offers both quality of life and recreation. Residents enjoy small-town warmth with easy access to modern conveniences, cultural attractions, and outdoor adventure.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-foreground">
                    Legacy developments
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Optimarz Properties is proud to introduce landmark developments in Bonham that showcase the city's transformation. These carefully planned communities combine modern amenities with respect for Bonham's rich heritage, offering residents and investors alike a unique opportunity to be part of the city's renaissance.
                  </p>
                  <div className="space-y-4 text-muted-foreground">
                    <div>
                      <h4 className="font-bold text-foreground mb-2">Master-planned communities</h4>
                      <p className="leading-relaxed">
                        Thoughtfully designed neighborhoods featuring parks, walking trails, and community spaces that promote an active, connected lifestyle.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-2">Mixed-use opportunities</h4>
                      <p className="leading-relaxed">
                        Prime locations near downtown combining residential, retail, and office spaces to create vibrant, walkable districts.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-2">Lake-adjacent properties</h4>
                      <p className="leading-relaxed">
                        Strategic parcels near Bois d'Arc Lake positioned to capitalize on waterfront recreation and tourism growth.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold mb-4 text-foreground">
                      Economic development
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li><strong>Business incentives:</strong> Tax abatements and development grants attracting new employers.</li>
                      <li><strong>Infrastructure investment:</strong> Major highway improvements and utility upgrades supporting growth.</li>
                      <li><strong>Education hub:</strong> Grayson College presence creates workforce development opportunities.</li>
                      <li><strong>Tourism growth:</strong> Historic sites and new lake amenities drawing visitors year-round.</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold mb-4 text-foreground">
                      Location advantages
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li><strong>Highway access:</strong> US-82 and State Highway 121 connect to major markets.</li>
                      <li><strong>DFW proximity:</strong> Just 70 miles from Dallas, 60 miles from Plano.</li>
                      <li><strong>Regional hub:</strong> Serves Fannin County as county seat and commercial center.</li>
                      <li><strong>Fiber connectivity:</strong> High-speed internet infrastructure supports remote work.</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-primary/5">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-foreground">
                    Investment potential
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Bonham's renaissance is creating exceptional opportunities for investors who recognize value before the broader market. With steady growth, improving infrastructure, and strategic location, the city offers compelling returns across multiple property types.
                  </p>
                  <div className="space-y-3 text-muted-foreground">
                    <div>
                      <h4 className="font-bold text-foreground mb-1">Residential appreciation</h4>
                      <p>Current trends suggest 5-8% annual appreciation for residential properties, with premium developments seeing higher returns.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">Commercial opportunities</h4>
                      <p>Downtown revitalization and new development creating demand for retail, office, and mixed-use properties.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">Land banking</h4>
                      <p>Strategic land parcels positioned for future development as the city expands toward lake amenities.</p>
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
                      Historic preservation
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Developments that honor Bonham's heritage while embracing modern design and amenities.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <h3 className="text-lg font-bold mb-3 text-foreground">
                      Community partnerships
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Close collaboration with city leaders and stakeholders ensures mutually beneficial development.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <h3 className="text-lg font-bold mb-3 text-foreground">
                      Proven track record
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Successful projects across North Texas demonstrate our ability to deliver results.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <h3 className="text-lg font-bold mb-3 text-foreground">
                      Full-service approach
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      From acquisition to development to property management, we handle every detail.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center py-16 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg animate-slide-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Be part of the Bonham Renaissance
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join us in shaping the future of this historic city. Discover investment opportunities that combine heritage, growth, and exceptional returns.
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

export default BonhamRenaissance;
