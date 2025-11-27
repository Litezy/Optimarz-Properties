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
        <title>Join VIP Waitlist - Optimarz Properties</title>
        <meta name="description" content="Join our VIP waitlist for exclusive early access to premium land investment opportunities." />
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
