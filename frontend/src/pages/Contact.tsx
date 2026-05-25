import PageLayout from "@/components/layouts/PageLayout";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MailIcon, MapPin, PhoneCall } from "lucide-react";
import { useState } from "react";
import { ErrorMessage } from "@/lib/utils";
import { toast } from "@/hooks/use-toast";
import { contactService } from "@/services/contact.service";
import ApiLoader from "@/components/ApiLoader";

const Contact = () => {
  const [form, setForm] = useState({
    name: "", email: "", message: ""
  })
  const [loading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const isValid = Object.values(form).every(value => value.trim() !== "");
    if (!isValid) {
      ErrorMessage("Please fill all fields");
      return;
    }
    setIsLoading(true)

    try {
      const response = await contactService.sendContactMessage(form)
      if (response.status === 'success')
        setForm({ name: "", email: "", message: "" })
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

  const contact = [
    {
      icon: <PhoneCall className="w-8 h-8 text-primary" />,
      title: "Phone",
      details: "+1 (214) 509-7441"
    },
    {
      icon: <MailIcon className="w-8 h-8 text-primary" />,
      title: "Email",
      details: "info@optimarzproperties.com"
    },
    {
      icon: <MapPin className="w-8 h-8 text-primary" />,
      title: "Address",
      details: "1308 Teasley lane, Denton, Texas 76205"
    }
  ]
  return (
    <>
      <Helmet>
        <title>Contact Us - Optimarz Properties</title>
        <meta name="description" content="Get in touch with Optimarz Properties for inquiries about land investment opportunities." />
      </Helmet>
      <PageLayout>
        <div className="py-20 lg:py-12">
          <ApiLoader isLoading={loading} message="Sending message..."/>
          <div className="container mx-auto px-4 w-11/12 ">
            <div className="flex items-center flex-col justify-center">
              <h1 className="text-4xl md:text-5xl text-center font-bold mb-6 animate-fade-in">Contact us</h1>
              <p className="text-xl max-w-3xl text-center text-muted-foreground mb-12 animate-slide-up">
                Have questions about our projects or services? We'd love to hear from you.
                Fill out the form below and we'll get back to you shortly.
              </p>
            </div>

            <div className="flex items-start flex-col lg:flex-row gap-10">
              <form onSubmit={handleSubmit} className="space-y-6 w-full lg:w-1/2 animate-slide-up">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input name="name" value={form.name} onChange={handleChange} placeholder="Your name" required />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input name="email" value={form.email} onChange={handleChange} type="email" placeholder="your@email.com" required />
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell us how we can help..." rows={6} required />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  Send message
                </Button>
              </form>
              <div className="w-full lg:w-1/2">
                <h2 className="text-2xl font-bold text-primary">Contact Details</h2>
                <div className="w-full flex items-start flex-col gap-3">
                  {contact.map((item, index) => (
                    <div key={index} className="flex items-center gap-4 mt-6">
                      {item.icon}
                      <div>
                        <h3 className="text-foreground font-semibold">{item.title}</h3>
                        <p className="text-lg text-muted-foreground">{item.details}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageLayout>
    </>
  );
};

export default Contact;
