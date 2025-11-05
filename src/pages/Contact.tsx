import { Header } from "@/components/layouts/Header";
import { Footer } from "@/components/layouts/Footer";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic will be added later
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - LandWise</title>
        <meta name="description" content="Get in touch with LandWise for inquiries about land investment opportunities." />
      </Helmet>
      <div className="min-h-screen">
        <Header />
        <main className="pt-24 pb-20">
          <div className="container mx-auto px-4 max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Contact Us</h1>
            <p className="text-xl text-muted-foreground mb-12 animate-slide-up">
              Have questions about our projects or services? We'd love to hear from you. 
              Fill out the form below and we'll get back to you shortly.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6 animate-slide-up">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your name" required />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your@email.com" required />
              </div>
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" type="tel" placeholder="Your phone number" />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Tell us how we can help..." rows={6} required />
              </div>
              <Button type="submit" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
