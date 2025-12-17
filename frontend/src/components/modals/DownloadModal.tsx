import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { X } from "lucide-react";
import ebookCover from "@/assets/ebook-cover.jpg";
import { delayApiCall, ErrorMessage, SuccessMessage } from "@/lib/utils";
import ApiLoader from "../ApiLoader";
import { downloadsService } from "@/services/downloads.service";

export const DownloadModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false)
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email.trim() || !formData.firstName.trim() || !formData.lastName) return ErrorMessage('Please fill out all fields')
    setIsOpen(false);
    setLoading(true)
    try {
      const response = await downloadsService.createDownload(formData)
      if (response.status === 'success') {
        await delayApiCall(2000)
        SuccessMessage(response.message)
      }
    } catch (error) {
      console.error('download error:', error);
    } finally {
      setLoading(false)
    }

  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const dateNow = new Date()
  const month = dateNow.toLocaleDateString('default', { month: 'long' });

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <ApiLoader isLoading={loading} message="downloading e-book" />

      <DialogContent className="max-w-4xl w-[95vw] md:w-full p-5 gap-0 overflow-hidden animate-slide-in-right max-h-[90vh]  overflow-y-auto">


        <div className="grid md:grid-cols-2 gap-0">
          {/* Left side - eBook cover */}
          <div className="bg-primary/10 p-4 md:p-8 flex items-center justify-center">
            <img
              src={ebookCover}
              alt="I AM LAND: THE POWER OF PLACE"
              className="w-full max-w-[150px] md:max-w-sm rounded-lg shadow-lg"
            />
          </div>

          {/* Right side - Form */}
          <div className="p-4 md:p-8 bg-background">
            <DialogHeader className="mb-4 md:mb-6">
              <DialogTitle className="text-lg md:text-2xl font-bold text-foreground">
                Download Optimarz's e-Magazine ({month} Edition)
              </DialogTitle>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
              <div>
                <Label htmlFor="firstName" className="text-foreground text-sm">
                  First Name
                </Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  required
                  className="mt-1 h-10 md:h-11"
                />
              </div>

              <div>
                <Label htmlFor="lastName" className="text-foreground text-sm">
                  Last Name
                </Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  required
                  className="mt-1 h-10 md:h-11"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-foreground text-sm">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                  className="mt-1 h-10 md:h-11"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-5 md:py-6 text-base md:text-lg mt-4"
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