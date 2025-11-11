import PageLayout from "@/components/layouts/PageLayout";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Waitlist = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic will be added later
  };

  return (
    <>
      <Helmet>
        <title>Join VIP Waitlist - Optimarz Properties</title>
        <meta name="description" content="Join our VIP waitlist for exclusive early access to premium land investment opportunities." />
      </Helmet>
      <PageLayout>
        <div className="py-20">
          <div className="container mx-auto px-4 max-w-2xl">
            <Card className="animate-slide-up">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl md:text-4xl mb-2">Join the VIP waitlist</CardTitle>
                <CardDescription className="text-lg">
                  Get exclusive early access to our premium land investment opportunities. 
                  Be the first to know about new projects and special offers.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="firstName">First name</Label>
                    <Input id="firstName" placeholder="John" required />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last name</Label>
                    <Input id="lastName" placeholder="Doe" required />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" required />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone number</Label>
                    <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    Join waitlist
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </PageLayout>
    </>
  );
};

export default Waitlist;
