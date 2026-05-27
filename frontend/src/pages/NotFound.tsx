import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Optimarz Properties</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="text-center px-4">
          <h1 className="mb-4 text-6xl font-bold text-foreground">404</h1>
          <p className="mb-8 text-2xl text-muted-foreground">Oops! Page not found</p>
          <Button asChild size="lg">
            <Link to="/">Return to home</Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default NotFound;
