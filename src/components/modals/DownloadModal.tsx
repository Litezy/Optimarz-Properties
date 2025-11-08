import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { X } from "lucide-react";
import ebookCover from "@/assets/ebook-cover.jpg";

export const DownloadModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  useEffect(() => {
    // Show modal after 5 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic will be added later
    console.log("Form submitted:", formData);
    setIsOpen(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-4xl p-0 gap-0 overflow-hidden animate-slide-in-right">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground z-10"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>
        
        <div className="grid md:grid-cols-2 gap-0">
          {/* Left side - eBook cover */}
          <div className="bg-primary/10 p-8 flex items-center justify-center">
            <img
              src={ebookCover}
              alt="I AM LAND: THE POWER OF PLACE"
              className="w-full max-w-sm rounded-lg shadow-lg"
            />
          </div>

          {/* Right side - Form */}
          <div className="p-8 bg-background">
            <DialogHeader className="mb-6">
              <DialogTitle className="text-2xl md:text-3xl font-bold text-foreground">
                Download Optimarz's e-Magazine (October Edition)
              </DialogTitle>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="firstName" className="text-foreground">
                  First Name
                </Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  required
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="lastName" className="text-foreground">
                  Last Name
                </Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  required
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-foreground">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                  className="mt-1"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 text-lg"
                size="lg"
              >
                Download EBook
              </Button>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
