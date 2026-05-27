import PageLayout from "@/components/layouts/PageLayout";
import { Helmet } from "react-helmet";
import bg from '@/assets/hero-landscape-2.jpg'
import { CompanyName } from "./Index";
import { BookMarkedIcon, Handshake, Lock, ChevronLeft, ChevronRight } from "lucide-react";
import project1 from "@/assets/opti4.jpg";
import project2 from "@/assets/opti5.jpg";
import project3 from "@/assets/opti6.jpg";
import { useState } from "react";

const About = () => {

  const CoreValues = [
    {
      icon: <Handshake className="w-8 h-8 text-primary" />,
      title: "Integrity",
      description: "Integrity is the foundation of our work. We operate with honesty and transparency, ensuring that every client understands the opportunities because we believe that true partnerships are built on openness and trust."
    },
    {
      icon: <Lock className="w-8 h-8 text-primary" />,
      title: "Diligence",
      description: "We also place great emphasis on Diligence. Behind every deal we present lies hours of research, economic studies, and city growth projections. We don’t just sell land; we study its future, so our clients can invest with confidence and peace of mind."
    },
    {
      icon: <BookMarkedIcon className="w-8 h-8 text-primary" />,
      title: "Excellence",
      description: "We also place great emphasis on Diligence. Behind every deal we present lies hours of research, economic studies, and city growth projections. We don’t just sell land; we study its future, so our clients can invest with confidence and peace of mind."
    }
  ]

  const landMatters = [
    {
      title: "Land is Legacy",
      desc: 'It carries value across generations, creating a foundation for family and future.'
    },
    {
      title: "Land is Security",
      desc: 'A lasting anchor in a world that changes fast.'
    },
    {
      title: "Land is Opportunity",
      desc: 'Every parcel holds potential for growth, wealth, and freedom.'
    },
  ]


  const images = [
    project1,
    project2,
    project3
  ]
  const [currentImage, setCurrentImage] = useState(0);

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };
  return (
    <>
      <Helmet>
        <title>About Optimarz Properties | North Texas Land Investment Company</title>
        <meta name="description" content="Optimarz Properties helps investors find prime land in North Texas — Bonham, Gainesville, Honey Grove & Wolfe City. Learn our story, mission, and investment philosophy." />
        <meta name="keywords" content="Optimarz Properties, North Texas land investment company, Texas land investment firm, land investment company Texas, North Texas real estate company, buy land Texas, Texas acreage investment" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://optimarzproperties.com/about" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Optimarz Properties" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:url" content="https://optimarzproperties.com/about" />
        <meta property="og:title" content="About Optimarz Properties | North Texas Land Investment Company" />
        <meta property="og:description" content="Optimarz Properties helps investors find prime land in North Texas — Bonham, Gainesville, Honey Grove & Wolfe City. Learn our story, mission, and investment philosophy." />
        <meta property="og:image" content="https://optimarzproperties.com/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Optimarz Properties | North Texas Land Investment Company" />
        <meta name="twitter:description" content="Optimarz Properties helps investors find prime land in North Texas — Bonham, Gainesville, Honey Grove & Wolfe City. Our mission, values, and investment philosophy." />
        <meta name="twitter:image" content="https://optimarzproperties.com/logo.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "AboutPage",
              "@id": "https://optimarzproperties.com/about",
              "url": "https://optimarzproperties.com/about",
              "name": "About Optimarz Properties | North Texas Land Investment Company",
              "description": "Learn about Optimarz Properties — a North Texas land investment company dedicated to helping investors find prime acreage in Bonham, Gainesville, Honey Grove, and Wolfe City.",
              "breadcrumb": {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://optimarzproperties.com" },
                  { "@type": "ListItem", "position": 2, "name": "About", "item": "https://optimarzproperties.com/about" }
                ]
              }
            },
            {
              "@type": "Organization",
              "@id": "https://optimarzproperties.com/#organization",
              "name": "Optimarz Properties",
              "url": "https://optimarzproperties.com",
              "logo": { "@type": "ImageObject", "url": "https://optimarzproperties.com/logo.png" },
              "description": "Premier land investment company offering curated acreage opportunities across North Texas — operating with integrity, diligence, and excellence.",
              "foundingLocation": { "@type": "Place", "name": "Texas, United States" }
            }
          ]
        })}</script>
      </Helmet>
      <PageLayout>
        <div className="w-full">
          <section className="relative lg:h-screen min-h-[50dvh] flex items-center justify-center overflow-hidden">
            {/* Background Images with Transition */}
            <div
              className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 `}
              style={{ backgroundImage: `url(${bg})` }}
            >
              <div className="absolute inset-0 bg-black/50" />
            </div>
            <h1 className="text-4xl text-white absolute left-1/2 -translate-x-1/2 top-1/2 md:text-5xl font-bold mb-6 animate-fade-in">About Us</h1>
          </section>
          <div className=" mt-10">

            <div className="w-11/12 mx-auto space-y-5 animate-slide-up">
              <h1 className="font-bold text-2xl lg:text-4xl">Empowering communities through land and knowledge.</h1>
              <div className="space-y-4 text-lg leading-18">
                <p>As the foremost partner for land education and investment in North Texas, Akingbade Akinfenwa founded Optimarz Properties LLC nearly 5 years ago with a vision far beyond simply selling land. What began with a degree in Land survey and Geomatics, professional experience in real estate finance, and a recognition of critical gaps in the land investment industry, grew into a mission: to bridge knowledge with opportunity.
                  From his own journey as a land investor, Akinfenwa discovered that communities and investors alike needed more than transactions; they needed guidance, research-driven insights, and education to make informed decisions. This passion led to the creation of Optimarz Properties, built on diligence, integrity, and excellence.</p>
                <p>Today, Opt LLC continues to thrive as an educational and informative land investment company. Our work goes beyond buying and selling land; we analyze the economic development of cities, project future land values, and provide investors with time-tested opportunities that create lasting wealth.</p>
                <p>Grounded in our founding principles of integrity, transparency, and excellence, {CompanyName} is expanding its reach while staying true to its core mission: making land ownership a reality for everyone and empowering investors and communities worldwide with the knowledge to succeed.</p>
              </div>
            </div>

            <div className="Ceo section"></div>

            <div className="space-y-5 my-10">
              <div className="flex items-center flex-col gap-3">
                <h1 className="font-bold text-2xl lg:text-4xl ">Our Values in Action</h1>
                <p className="w-11/12 mx-auto text-lg">
                  At {CompanyName}, our values are more than guiding words; they are the heartbeat of everything we do. They shape how we research, how we serve, and how we help families and investors turn land into legacy.
                </p>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  {CoreValues.map((value, index) => (
                    <div
                      key={index}
                      className="p-6 m-4 border border-primary/20 rounded-lg text-center animate-slide-up"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="w-full flex items-center justify-center ">
                        <div className="mb-4 p-5 rounded-full border border-primary w-fit flex items-center justify-center">
                          {value.icon}
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold mb-2 text-primary">{value.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                    </div>
                  ))}
                </div>

                <div className="space-y-4 text-center w-11/12 mx-auto text-lg leading-tight">
                  <p>Supporting these pillars are two principles that define our unique approach. We are Customer-Centric, always putting the needs and goals of our clients first. For us, success is measured not by the number of acres sold, but by the satisfaction and growth of the families and investors we serve. We also embrace Innovation, leveraging technology, data, and creative strategies to uncover opportunities that others might overlook. This allows us to offer superior service and keep our investors ahead of the curve.</p>
                  <p>These commitments reflect our promise: to educate, empower, and deliver land investments that stand the test of time.</p>
                </div>

                <div className="w-full bg-card border border-border p-8 mt-10 rounded-lg">
                  <h2 className="text-3xl font-bold text-center mb-3 text-card-foreground">Why Land Matters</h2>
                  <h3 className="text-center fair text-lg text-muted-foreground">At {CompanyName}, we believe land is more than property- it's a possibility </h3>
                  <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3">
                    {landMatters.map((item, index) => (
                      <div
                        key={index}
                        className="p-6 m-4 border border-primary/20 rounded-lg text-center animate-slide-up"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <h3 className="text-2xl font-bold mb-2 text-primary">{item.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-center text-muted-foreground">We help you see it's worth, unlock it's promises and turn acres into lasting impact</p>
                </div>
              </div>
            </div>

            <div className="my-10 w-11/12 mx-auto flex flex-col lg:flex-row items-start gap-5">
              <div className="w-full lg:w-1/2 relative overflow-hidden rounded-lg">
                {/* Image */}
                <img
                  key={currentImage}
                  src={images[currentImage]}
                  alt={`Project ${currentImage + 1}`}
                  className="w-full h-auto object-cover rounded-lg transition-opacity duration-700 ease-in-out opacity-100 z-10 relative"
                />

                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 rounded-full p-2 transition-colors z-30"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>

                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 rounded-full p-2 transition-colors z-30"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>
              </div>
              <div className="w-full lg:w-1/2 flex flex-col space-y-4 justify-center">
              <h1 className="text-2xl lg:text-4xl">Community Impact</h1>
              <div className="space-y-3 text-lg leading-18">
                <p>At {CompanyName}, we believe true impact goes beyond acres and transactions; it’s about people, education, and community growth. Over time, we have had the privilege of serving 40+ families and counting and guiding investments beyond 600+ acres of North Texas land. Each milestone reflects lives empowered and futures secured.</p>
                <p>Our commitment to the next gen is clear in our Summer Internship Program, an annual 4-week immersive experience that equips young leaders with real-world knowledge in land investment, real estate, and financial literacy.</p>
                <p>We also host quarterly educational webinars, including Land, Wealth & North Texas and the Gainesville Info Session. These sessions bring together both new and seasoned investors, creating space to learn, connect, and explore opportunities in a growing market.</p>
                <p>At {CompanyName}, we measure success not only in land sold but in the knowledge shared and communities strengthened. This is because when people grow, communities thrive.</p>
              </div>
              </div>
            </div>

          </div>
        </div>
      </PageLayout>
    </>
  );
};

export default About;
