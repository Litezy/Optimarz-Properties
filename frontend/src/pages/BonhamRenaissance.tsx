import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import PageLayout from "@/components/layouts/PageLayout";
import { Link } from "react-router-dom";
import bonhamHero from "@/assets/bonham-hero.jpg";
import landImage from "@/assets/projects/bonham/featured.png";
import youtubeImg from "@/assets/projects/youtube.png"
import ImageGallery from "@/components/ImageGallery";
import landOne from "@/assets/projects/bonham/bon-gallery1.png";
import landTwo from "@/assets/projects/bonham/bon-gallery2.png";
import landThree from "@/assets/projects/bonham/bon-gallery3.png";
import landFour from "@/assets/projects/bonham/bon-gallery4.png";
import landFive from "@/assets/projects/bonham/bon-gallery5.png";

const bonhamGalleryImages = [
  {
    src: landOne,
    alt: "Bonham countryside at golden hour",
  },
  {
    src: landTwo,
    alt: "Open Bonham land with water feature",
  },
  {
    src: landThree,
    alt: "Green Bonham field under a bright sky",
  },
  {
    src: landFour,
    alt: "Expansive Bonham acreage with tree line",
  },
  {
    src: landFive,
    alt: "Bonham grassland at sunset",
  },
  {
    src: landImage,
    alt: "Bonham investment land with wide-open views",
  },
];

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
            style={{ backgroundImage: `url(${landTwo})` }}
          >
            <div className="absolute inset-0 bg-black/60" />
          </div>

          <div className="relative z-10 container mx-auto px-4 text-center text-white animate-fade-in">
            <h1 className="text-3xl !text-white max-w-5xl mx-auto md:text-5xl font-bold mb-6">
             Bonham, Texas Strategic Growth, Economic Momentum & Investor Opportunity Analysis
            </h1>
            <h2 className="text-2xl md:text-3xl mb-6">A historic city, reimagined</h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed">
              The Bonham Renaissance is a transformative initiative designed to preserve the city's historic charm while ushering in new waves of growth and prosperity. Just over an hour from Dallas, Bonham is becoming one of North Texas's most exciting destinations for families, businesses, and investors.
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
            <div className="pb-16 pt-8 flex items-center justify-center">
             <img src={youtubeImg} alt="Bonham Renaissance YouTube video" />
            </div>
            <div className="mb-20 animate-slide-up">
              

              <div className="">
                <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
                  <div>
                    <h3 className="mb-5 text-2xl font-bold text-foreground md:text-3xl">
                      Why Invest in Bonham, Texas?
                    </h3>
                    <div className="space-y-5 text-sm leading-7 text-muted-foreground md:text-base">
                      <p>
                        Imagine a landscape where quiet, golden prairies meet the unstoppable
                        gravity of global capital. Less than an hour from the high-tech
                        &quot;Silicon Prairie&quot; and minutes from the state&apos;s newest blue-gold
                        reservoir, you stand on ground that is being redefined in real time.
                      </p>
                      <p>
                        This is Roxton, Texas. Here, every acre is caught in a
                        &quot;billion-dollar squeeze.&quot; To your west, a $50B+ industrial engine
                        is erupting out of Sherman. To your east, a $1.6B recreational
                        economy is rising from the waters of Bois d&apos;Arc Lake and Lake Ralph
                        Hall. Roxton is the strategic center, the undervalued &quot;nexus&quot; where
                        industry meets leisure. Discerning investors are not waiting for the
                        headlines; they are securing the ground before the 2026 water delivery
                        begins.
                      </p>
                    </div>
                  </div>

                  <div className="overflow-hidden rounded-2xl border border-border bg-background shadow-lg">
                    <img
                      src={landImage}
                      alt="Bonham Texas land investment opportunity"
                      className="h-full min-h-[260px] w-full object-cover"
                    />
                  </div>
                </div>

                <div className="mt-12 space-y-10">
                  <div>
                    <h3 className="mb-4 text-2xl font-bold text-foreground">Why Bonham?</h3>
                    <ul className="space-y-3 pl-5 text-sm leading-7 text-muted-foreground marker:text-primary md:text-base">
                      <li>
                        The &quot;Hole in the Donut&quot; appreciation: while the edges of Fannin
                        County surge, Bonham remains one of the last undervalued entry
                        points with median home prices still offering room for strong upside.
                      </li>
                      <li>
                        The Silicon Prairie ripple: Sherman&apos;s advanced manufacturing
                        expansion is creating a 3,000+ high-tech jobs pipeline, sending
                        demand outward into connected North Texas towns like Bonham.
                      </li>
                      <li>
                        The Blue Gold catalyst: sandwiched between Bois d&apos;Arc Lake and
                        the upcoming Lake Ralph Hall, Bonham is transitioning from a rural
                        agriculture corridor into a premier live-work-play hub.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="mb-4 text-2xl font-bold text-foreground">
                      Amenities &amp; Public Services
                    </h3>
                    <ul className="space-y-3 pl-5 text-sm leading-7 text-muted-foreground marker:text-primary md:text-base">
                      <li>
                        Education: families benefit from strong school access and nearby
                        higher-learning opportunities that support long-term residential
                        stability and workforce growth.
                      </li>
                      <li>
                        Healthcare: regional medical coverage, specialty care access, and
                        expanding support infrastructure continue to improve the area&apos;s
                        quality-of-life appeal.
                      </li>
                      <li>
                        Recreation and community life: from Bonham State Park to the lake
                        corridor, the area blends outdoor living, event-driven tourism, and
                        a heritage-rich downtown experience.
                      </li>
                      <li>
                        Utilities and public works: road improvements, utility expansion,
                        and water-linked planning are laying the groundwork for accelerated
                        future development.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="mb-4 text-2xl font-bold uppercase tracking-tight text-foreground">
                      Investment Opportunities
                    </h3>
                    <p className="mb-4 text-sm leading-7 text-muted-foreground md:text-base">
                      Bonham represents the convergence of the industrial commuter and the
                      lake entrepreneur. High-potential avenues include:
                    </p>
                    <ul className="space-y-3 pl-5 text-sm leading-7 text-muted-foreground marker:text-primary md:text-base">
                      <li>
                        Legacy estates: from 1-acre tracts for multi-generational family
                        holdings to larger buy-and-hold positions poised for future demand.
                      </li>
                      <li>
                        Lake-proxy portfolios: land plays tied to recreation growth and
                        waterfront spillover without the premium of direct shoreline pricing.
                      </li>
                      <li>
                        Tech-commuter housing: residential parcels positioned for the
                        high-income workforce flowing out of the Silicon Prairie.
                      </li>
                      <li>
                        Ag-exempt holds: low-carrying-cost land banking strategies built
                        for the next phase of regional expansion.
                      </li>
                    </ul>
                    <p className="mt-4 text-sm leading-7 text-muted-foreground md:text-base">
                      Geography is destiny. The maps are being redrawn. Your name on the new
                      one?
                    </p>
                  </div>
                </div>
              </div>
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

            <ImageGallery
              className="mb-20 animate-slide-up"
              title="Gallery"
              description="A closer look at the landscapes, open tracts, and wide-sky character that make Bonham a compelling long-term opportunity."
              images={bonhamGalleryImages}
            />

            {/* CTA Section */}
            <div className="text-center py-16 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl animate-slide-up">
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
