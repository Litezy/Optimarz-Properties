import PageLayout from "@/components/layouts/PageLayout";
import { Helmet } from "react-helmet";

const SummerProgram = () => {
  return (
    <>
      <Helmet>
        <title>Summer Land Investment Program | North Texas | Optimarz Properties</title>
        <meta name="description" content="Join Optimarz Properties' exclusive summer land investment program. Explore opportunities across North Texas and learn proven acquisition strategies from expert advisors." />
        <meta name="keywords" content="Texas land investment program, summer land investment, learn land investing Texas, North Texas investment program, Optimarz Properties summer, land investment education Texas" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://optimarzproperties.com/summer-program" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Optimarz Properties" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:url" content="https://optimarzproperties.com/summer-program" />
        <meta property="og:title" content="Summer Land Investment Program | North Texas | Optimarz Properties" />
        <meta property="og:description" content="Join Optimarz Properties' exclusive summer land investment program. Explore North Texas opportunities and learn proven acquisition strategies from expert advisors." />
        <meta property="og:image" content="https://optimarzproperties.com/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Summer Land Investment Program | North Texas | Optimarz Properties" />
        <meta name="twitter:description" content="Join Optimarz Properties' exclusive summer land investment program. Explore North Texas opportunities and learn strategies from expert advisors." />
        <meta name="twitter:image" content="https://optimarzproperties.com/logo.png" />
      </Helmet>
      <PageLayout>
        <div className="py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Summer program</h1>
            <p className="text-xl text-muted-foreground max-w-3xl animate-slide-up">
              Join our exclusive summer program and immerse yourself in the world of land investment. 
              Learn from experts and discover unique opportunities.
            </p>
          </div>
        </div>
      </PageLayout>
    </>
  );
};

export default SummerProgram;
