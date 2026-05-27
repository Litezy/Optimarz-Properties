import PageLayout from "@/components/layouts/PageLayout";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ErrorMessage } from "@/lib/utils";
import { waitlistService } from "@/services/waitlist.service";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import ApiLoader from "@/components/ApiLoader";

const Waitlist = () => {
  const [form, setForm] = useState({
     firstName: "", lastName: "", email: "",phoneNumber:''
   })
   const [loading, setIsLoading] = useState(false)
 
   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
     setForm({
       ...form,
       [e.target.name]: e.target.value,
     });
   };
   const handleSubmitWaitlist = async (e: React.FormEvent) => {
     e.preventDefault();
     const isValid = Object.values(form).every(value => value.trim() !== "");
     if (!isValid) {
       ErrorMessage("Please fill all fields");
       return;
     }
     setIsLoading(true)
 
     try {
       const response = await waitlistService.createWaitlist(form)
       if (response.status === 'success')
         setForm({ firstName: "", lastName: "", email: "",phoneNumber:''})
       toast({
         title: "Success",
         description: "Message sentsuccessfully.",
         variant: "default",
       });
     } catch (error) {
       console.log(error)
     }finally{
       setIsLoading(false)
     }
 
   };

  return (
    <>
      <Helmet>
        <title>Join VIP Waitlist | Exclusive North Texas Land Investment Deals</title>
        <meta name="description" content="Get first access to pre-market land deals in Bonham, Gainesville & across North Texas. Join the Optimarz Properties VIP waitlist — limited early-access spots available." />
        <meta name="keywords" content="Texas land investment waitlist, exclusive land deals Texas, early access land investment, VIP land investment Texas, pre-market land deals North Texas, Optimarz Properties waitlist, buy land early Texas" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://optimarzproperties.com/waitlist" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Optimarz Properties" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:url" content="https://optimarzproperties.com/waitlist" />
        <meta property="og:title" content="Join VIP Waitlist | Exclusive North Texas Land Investment Deals" />
        <meta property="og:description" content="Get first access to pre-market land deals in Bonham, Gainesville & across North Texas. Join the Optimarz Properties VIP waitlist — limited early-access spots available." />
        <meta property="og:image" content="https://optimarzproperties.com/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Join VIP Waitlist | Exclusive North Texas Land Investment Deals" />
        <meta name="twitter:description" content="Get first access to pre-market land deals in Bonham, Gainesville & across North Texas. Limited early-access spots — join the Optimarz Properties VIP waitlist." />
        <meta name="twitter:image" content="https://optimarzproperties.com/logo.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": "https://optimarzproperties.com/waitlist",
          "url": "https://optimarzproperties.com/waitlist",
          "name": "Join VIP Waitlist | Exclusive North Texas Land Investment Deals",
          "description": "Get first access to pre-market land deals in North Texas. Limited early-access spots.",
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://optimarzproperties.com" },
              { "@type": "ListItem", "position": 2, "name": "VIP Waitlist", "item": "https://optimarzproperties.com/waitlist" }
            ]
          }
        })}</script>
      </Helmet>
      <PageLayout>
        <div className="py-20">
           <ApiLoader isLoading={loading} message="Submitting..."/>
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
                <form onSubmit={handleSubmitWaitlist} className="space-y-6">
                  <div>
                    <Label htmlFor="firstName">First name</Label>
                    <Input name="firstName" value={form.firstName} onChange={handleChange} placeholder="John" required />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last name</Label>
                    <Input name="lastName" value={form.lastName} onChange={handleChange} placeholder="Doe" required />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input name="email" value={form.email} onChange={handleChange} type="email" placeholder="john@example.com" required />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone number</Label>
                    <Input name="phoneNumber" value={form.phoneNumber} onChange={handleChange} type="tel" placeholder="+1 (555) 000-0000" />
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
