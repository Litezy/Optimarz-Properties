import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import PageLayout from "@/components/layouts/PageLayout";
import { Link } from "react-router-dom";
import landImage from "@/assets/projects/bonham/featured.png";
import YouTubeEmbed from "@/components/YouTubeEmbed";
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
              Bonham, Texas Strategic Growth, Economic Momentum & Investor
              Opportunity Analysis
            </h1>
            <h2 className="text-2xl md:text-3xl mb-6">
              A historic city, reimagined
            </h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed">
              The Bonham Renaissance is a transformative initiative designed to
              preserve the city's historic charm while ushering in new waves of
              growth and prosperity. Just over an hour from Dallas, Bonham is
              becoming one of North Texas's most exciting destinations for
              families, businesses, and investors.
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
            <div className="pb-16 pt-8">
              <YouTubeEmbed
                url="https://youtu.be/6TTTfAEPSy8"
                title="Bonham Renaissance — Overview"
                className="max-w-[700px] mx-auto"
              />
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
                        Bonham is becoming one of the emerging investment
                        destinations in North Texas because it combines
                        affordable land prices, major infrastructure growth,
                        expanding recreational development, and proximity to the
                        Dallas-Fort Worth economic corridor.
                      </p>
                      <p>
                        Unlike heavily developed North Texas cities where land
                        prices have already surged, Bonham is still in an early
                        growth phase, giving investors the opportunity to enter
                        before large-scale appreciation fully occurs.
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
                  <div className="space-y-16">
                    <div className="rounded-[28px] border border-border bg-gradient-to-br from-primary/5 via-background to-secondary/10 p-8 shadow-sm md:p-10">
                      <div className="max-w-3xl">
                        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-primary">
                          Why Bonham?
                        </p>
                        <h3 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                          A growth market with clear economic drivers and room
                          to enter early
                        </h3>
                        <p className="text-sm leading-7 text-muted-foreground md:text-base">
                          Bonham pairs strategic access, new infrastructure,
                          recreational expansion, and large-scale development
                          activity in a way that feels investable, not
                          speculative. The city is still early enough for
                          value-oriented buyers, but it already has the kind of
                          catalysts that usually shape long-term demand.
                        </p>
                      </div>

                      <div className="mt-8 grid gap-4 md:grid-cols-3">
                        <div className="rounded-2xl border border-border/70 bg-background/90 p-5">
                          <p className="text-3xl font-bold text-foreground">
                            60 minutes
                          </p>
                          <p className="mt-2 text-sm leading-6 text-muted-foreground">
                            From the Dallas metro area, with direct highway
                            connectivity into the wider North Texas corridor.
                          </p>
                        </div>
                        <div className="rounded-2xl border border-border/70 bg-background/90 p-5">
                          <p className="text-3xl font-bold text-foreground">
                            16,500+
                          </p>
                          <p className="mt-2 text-sm leading-6 text-muted-foreground">
                            Acres of water surface at Bois d&apos;Arc Lake,
                            supporting recreation, tourism, and long-horizon
                            regional growth.
                          </p>
                        </div>
                        <div className="rounded-2xl border border-border/70 bg-background/90 p-5">
                          <p className="text-3xl font-bold text-foreground">
                            3,000
                          </p>
                          <p className="mt-2 text-sm leading-6 text-muted-foreground">
                            Planned homes at Powder Creek Ranch, signaling
                            sustained confidence in Bonham&apos;s residential
                            future.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="grid gap-6 lg:grid-cols-3 lg:items-stretch">
                      <Card className="h-full border-border bg-card/80 shadow-sm">
                        <CardContent className="flex h-full flex-col p-7">
                          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                            01
                          </p>
                          <h4 className="mb-4 text-xl font-semibold text-foreground">
                            Strategic Location in the North Texas Growth
                            Corridor
                          </h4>
                          <div className="space-y-4 text-sm leading-7 text-muted-foreground md:text-base">
                            <p>
                              Bonham sits at the intersection of U.S. Highway
                              82, State Highway 121, and State Highway 56,
                              connecting it directly to Dallas-Fort Worth,
                              McKinney, Sherman, Paris, and Southern Oklahoma.
                            </p>
                            <p>
                              Its accessibility supports residential expansion,
                              logistics, commercial retail, industrial
                              investment, and workforce housing.
                            </p>
                            <p>
                              Proximity to Sherman&apos;s industrial momentum
                              adds another practical layer of long-term demand.
                            </p>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="h-full border-border bg-card/80 shadow-sm">
                        <CardContent className="flex h-full flex-col p-7">
                          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                            02
                          </p>
                          <h4 className="mb-4 text-xl font-semibold text-foreground">
                            Bois d&apos;Arc Lake Is Transforming the Region
                          </h4>
                          <div className="space-y-4 text-sm leading-7 text-muted-foreground md:text-base">
                            <p>
                              The first major reservoir built in Texas in nearly
                              30 years is creating real momentum around
                              waterfront development, tourism, short-term
                              rentals, RV parks, and recreational businesses.
                            </p>
                            <p>
                              The lake supports water supply for more than 2
                              million North Texans and adds a major long-term
                              infrastructure advantage to the region.
                            </p>
                            <p>
                              Projects of this scale have a strong history of
                              lifting nearby land values over time.
                            </p>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="h-full border-border bg-card/80 shadow-sm">
                        <CardContent className="flex h-full flex-col p-7">
                          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                            03
                          </p>
                          <h4 className="mb-4 text-xl font-semibold text-foreground">
                            Major Residential &amp; Commercial Development
                          </h4>
                          <div className="space-y-4 text-sm leading-7 text-muted-foreground md:text-base">
                            <p>
                              Bonham is moving beyond potential and into
                              organized growth, led by projects like Powder
                              Creek Ranch, its first master-planned mixed-use
                              community.
                            </p>
                            <p>
                              Planned homes, retail, restaurants, trails,
                              offices, and recreational amenities all point to
                              stronger housing demand and broader commercial
                              expansion.
                            </p>
                            <p>
                              The development timeline extending through 2035
                              reinforces the market&apos;s long runway.
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
                      <div className="space-y-6">
                        <div>
                          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-primary">
                            Amenities &amp; Public Services
                          </p>
                          <h3 className="text-2xl font-bold text-foreground md:text-3xl">
                            A city that supports both lifestyle appeal and
                            practical expansion
                          </h3>
                        </div>

                        <div className="grid gap-6">
                          <Card className="border-border bg-card/70 shadow-sm">
                            <CardContent className="p-6">
                              <h4 className="mb-4 text-lg font-semibold text-foreground">
                                Outdoor &amp; Recreational Amenities
                              </h4>
                              <p className="mb-4 text-sm leading-7 text-muted-foreground md:text-base">
                                Bonham offers several recreational attractions
                                including Bonham State Park, Bois d&apos;Arc
                                Lake, Lake Bonham, Caddo National Grasslands,
                                historic downtown, and strong boating, fishing,
                                hiking, and camping access.
                              </p>
                              <ul className="grid gap-2 text-sm leading-7 text-muted-foreground md:grid-cols-2 md:text-base">
                                <li>Tourism growth</li>
                                <li>Vacation property demand</li>
                                <li>Retirement living</li>
                                <li>Recreational business opportunities</li>
                              </ul>
                            </CardContent>
                          </Card>

                          <Card className="border-border bg-card/70 shadow-sm">
                            <CardContent className="p-6">
                              <h4 className="mb-4 text-lg font-semibold text-foreground">
                                Public Services &amp; Infrastructure
                              </h4>
                              <p className="mb-4 text-sm leading-7 text-muted-foreground md:text-base">
                                Bonham continues expanding the systems needed
                                for long-term growth, including utilities,
                                public safety, schools, healthcare, broadband,
                                airport access, and local economic development
                                programs.
                              </p>
                              <ul className="grid gap-2 text-sm leading-7 text-muted-foreground md:grid-cols-2 md:text-base">
                                <li>Infrastructure upgrades</li>
                                <li>Industrial development</li>
                                <li>Downtown revitalization</li>
                                <li>Public parks</li>
                                <li>Commercial expansion</li>
                              </ul>
                            </CardContent>
                          </Card>
                        </div>
                      </div>

                      <Card className="overflow-hidden border-border bg-primary/[0.04] shadow-sm">
                        <CardContent className="p-0">
                          <img
                            src={landThree}
                            alt="Bonham landscape with open green space"
                            className="h-64 w-full object-cover"
                          />
                          <div className="p-7">
                            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                              Regional Snapshot
                            </p>
                            <h4 className="mb-4 text-xl font-semibold text-foreground">
                              The fundamentals behind Bonham&apos;s appeal are
                              easy to read
                            </h4>
                            <div className="space-y-4 text-sm leading-7 text-muted-foreground md:text-base">
                              <p>
                                Recreational assets bring visibility and visitor
                                traffic, while public investment improves daily
                                livability and development readiness.
                              </p>
                              <p>
                                That balance matters: buyers are not just
                                betting on future potential, they&apos;re
                                entering a market with visible momentum and
                                expanding civic support.
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="rounded-[28px] border border-border bg-muted/20 p-8 md:p-10">
                      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                        <div className="max-w-2xl">
                          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-primary">
                            Investment Opportunities
                          </p>
                          <h3 className="text-2xl font-bold uppercase tracking-tight text-foreground md:text-3xl">
                            Multiple ways to participate in Bonham&apos;s next
                            phase
                          </h3>
                        </div>
                        <p className="max-w-xl text-sm leading-7 text-muted-foreground md:text-base">
                          The opportunity set spans both appreciation-driven
                          land plays and more active residential, commercial,
                          and recreational development strategies.
                        </p>
                      </div>

                      <div className="grid gap-6 lg:grid-cols-2">
                        <Card className="h-full border-border bg-card/80 shadow-sm">
                          <CardContent className="p-6">
                            <h4 className="mb-3 text-lg font-semibold text-foreground">
                              1. Residential Development
                            </h4>
                            <p className="mb-4 text-sm leading-7 text-muted-foreground md:text-base">
                              Growing demand for affordable housing creates
                              opportunities in single-family communities,
                              multifamily housing, build-to-rent projects, and
                              manufactured housing.
                            </p>
                            <p className="text-sm leading-7 text-muted-foreground md:text-base">
                              Bonham&apos;s affordability relative to larger
                              North Texas markets makes it attractive for
                              workforce relocation.
                            </p>
                          </CardContent>
                        </Card>

                        <Card className="h-full border-border bg-card/80 shadow-sm">
                          <CardContent className="p-6">
                            <h4 className="mb-3 text-lg font-semibold text-foreground">
                              2. Land Banking
                            </h4>
                            <p className="mb-4 text-sm leading-7 text-muted-foreground md:text-base">
                              Bonham remains an early-stage appreciation market
                              where investors can secure undeveloped land before
                              full urban expansion takes hold.
                            </p>
                            <ul className="grid gap-2 text-sm leading-7 text-muted-foreground md:grid-cols-2 md:text-base">
                              <li>Long-term holding</li>
                              <li>Future subdivision development</li>
                              <li>Agricultural transition land</li>
                              <li>Highway frontage investment</li>
                            </ul>
                          </CardContent>
                        </Card>

                        <Card className="h-full border-border bg-card/80 shadow-sm">
                          <CardContent className="p-6">
                            <h4 className="mb-3 text-lg font-semibold text-foreground">
                              3. Lakefront &amp; Recreational Real Estate
                            </h4>
                            <p className="mb-4 text-sm leading-7 text-muted-foreground md:text-base">
                              Properties near Bois d&apos;Arc Lake are seeing
                              increasing demand for vacation homes, RV resorts,
                              Airbnb developments, marina-related uses, and
                              fishing tourism services.
                            </p>
                            <p className="text-sm leading-7 text-muted-foreground md:text-base">
                              Recent acreage projects are already being
                              positioned toward long-term investment and
                              recreation-focused buyers.
                            </p>
                          </CardContent>
                        </Card>

                        <Card className="h-full border-border bg-card/80 shadow-sm">
                          <CardContent className="p-6">
                            <h4 className="mb-3 text-lg font-semibold text-foreground">
                              4. Commercial Investment
                            </h4>
                            <p className="mb-4 text-sm leading-7 text-muted-foreground md:text-base">
                              Population growth is expected to support
                              restaurants, retail centers, medical offices,
                              hotels, convenience stores, and everyday service
                              businesses.
                            </p>
                            <p className="text-sm leading-7 text-muted-foreground md:text-base">
                              Corridors near Highway 121 and Highway 82 are
                              especially well-positioned.
                            </p>
                          </CardContent>
                        </Card>

                        <Card className="border-border bg-card/80 shadow-sm lg:col-span-2">
                          <CardContent className="p-6">
                            <h4 className="mb-3 text-lg font-semibold text-foreground">
                              5. Industrial &amp; Logistics Development
                            </h4>
                            <p className="mb-4 text-sm leading-7 text-muted-foreground md:text-base">
                              Bonham&apos;s highway access and lower operating
                              costs create a strong case for warehousing,
                              distribution centers, agricultural processing, and
                              light manufacturing.
                            </p>
                            <ul className="grid gap-2 text-sm leading-7 text-muted-foreground md:grid-cols-2 md:text-base">
                              <li>Warehousing</li>
                              <li>Distribution centers</li>
                              <li>Agricultural processing</li>
                              <li>Light manufacturing</li>
                            </ul>
                          </CardContent>
                        </Card>
                      </div>
                    </div>

                    <div className="grid gap-6 lg:grid-cols-3">
                      <Card className="h-full border-border bg-card/70 shadow-sm">
                        <CardContent className="p-6">
                          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                            Geographical Advantage
                          </p>
                          <h4 className="mb-3 text-lg font-semibold text-foreground">
                            Water Security
                          </h4>
                          <p className="text-sm leading-7 text-muted-foreground md:text-base">
                            With Bois d&apos;Arc Lake supplying major North
                            Texas demand, Bonham gains a long-term development
                            advantage through stronger water infrastructure,
                            economic sustainability, and population support
                            capacity.
                          </p>
                        </CardContent>
                      </Card>

                      <Card className="h-full border-border bg-card/70 shadow-sm">
                        <CardContent className="p-6">
                          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                            Geographical Advantage
                          </p>
                          <h4 className="mb-3 text-lg font-semibold text-foreground">
                            Lower Cost Entry Compared to DFW
                          </h4>
                          <p className="text-sm leading-7 text-muted-foreground md:text-base">
                            Compared with Collin, Denton, and Rockwall County
                            markets, Bonham still offers lower land costs, lower
                            development costs, more acreage, and less saturation
                            for investors who want upside before full pricing
                            catches up.
                          </p>
                        </CardContent>
                      </Card>

                      <Card className="h-full border-border bg-card/70 shadow-sm">
                        <CardContent className="p-6">
                          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                            Geographical Advantage
                          </p>
                          <h4 className="mb-3 text-lg font-semibold text-foreground">
                            Current Growth Momentum
                          </h4>
                          <p className="text-sm leading-7 text-muted-foreground md:text-base">
                            Population migration from Dallas suburbs,
                            infrastructure investment, recreational tourism, new
                            residential development, and growing traffic
                            activity all reinforce Bonham&apos;s current
                            expansion cycle.
                          </p>
                        </CardContent>
                      </Card>
                    </div>

                    <Card className="overflow-hidden border-border bg-gradient-to-r from-primary/10 via-background to-secondary/10 shadow-sm">
                      <CardContent className="p-8 md:p-10">
                        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
                          <div>
                            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-primary">
                              Conclusion
                            </p>
                            <h3 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">
                              Bonham stands out as an emerging North Texas
                              market with balanced upside
                            </h3>
                            <p className="text-sm leading-7 text-muted-foreground md:text-base">
                              Strategic location, affordable land, lake-driven
                              infrastructure, and visible development activity
                              combine to make Bonham compelling for both
                              long-term holders and active builders.
                            </p>
                          </div>

                          <div className="grid gap-3 sm:grid-cols-2">
                            <div className="rounded-2xl border border-border/70 bg-background/90 px-4 py-3 text-sm text-foreground">
                              Strategic location
                            </div>
                            <div className="rounded-2xl border border-border/70 bg-background/90 px-4 py-3 text-sm text-foreground">
                              Affordable land prices
                            </div>
                            <div className="rounded-2xl border border-border/70 bg-background/90 px-4 py-3 text-sm text-foreground">
                              Major lake development
                            </div>
                            <div className="rounded-2xl border border-border/70 bg-background/90 px-4 py-3 text-sm text-foreground">
                              Infrastructure expansion
                            </div>
                            <div className="rounded-2xl border border-border/70 bg-background/90 px-4 py-3 text-sm text-foreground">
                              Recreational appeal
                            </div>
                            <div className="rounded-2xl border border-border/70 bg-background/90 px-4 py-3 text-sm text-foreground">
                              Long-term appreciation potential
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Second Video */}
                  <div className="mb-20 animate-slide-up">
                    <div className="text-center mb-8">
                      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-primary">
                        See It for Yourself
                      </p>
                      <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                        Bonham in motion
                      </h2>
                    </div>
                    <YouTubeEmbed
                      url="https://youtu.be/cJSIBpg0jds"
                      title="Bonham Texas — Land & Lifestyle"
                      className="max-w-[700px] mx-auto"
                    />
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
                      Developments that honor Bonham's heritage while embracing
                      modern design and amenities.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <h3 className="text-lg font-bold mb-3 text-foreground">
                      Community partnerships
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Close collaboration with city leaders and stakeholders
                      ensures mutually beneficial development.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <h3 className="text-lg font-bold mb-3 text-foreground">
                      Proven track record
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Successful projects across North Texas demonstrate our
                      ability to deliver results.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <h3 className="text-lg font-bold mb-3 text-foreground">
                      Full-service approach
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      From acquisition to development to property management, we
                      handle every detail.
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
                Join us in shaping the future of this historic city. Discover
                investment opportunities that combine heritage, growth, and
                exceptional returns.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8" asChild>
                  <Link to="/contact">Contact us today</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8"
                  asChild
                >
                  <Link to="/waitlist">Join the VIP waitlist</Link>
                </Button>
              </div>
              <p className="mt-6 text-muted-foreground">
                Email us:{" "}
                <a
                  href="mailto:info@optimarzproperties.com"
                  className="text-primary hover:underline"
                >
                  info@optimarzproperties.com
                </a>
              </p>
            </div>
          </div>
        </section>
      </PageLayout>
    </>
  );
};

export default BonhamRenaissance;
