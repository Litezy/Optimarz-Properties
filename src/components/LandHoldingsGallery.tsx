import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Maximize2, CheckCircle2 } from "lucide-react";
import { landHoldings } from "@/data/landHoldings";
import { Link } from "react-router-dom";

export const LandHoldingsGallery = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "available":
        return "bg-primary text-white";
      case "pending":
        return "bg-yellow-500 text-white";
      case "sold":
        return "bg-gray-500 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Land Holdings</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our curated selection of prime land opportunities. Each property has been 
            carefully vetted for quality, location, and investment potential.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {landHoldings.map((property, index) => (
            <Card
              key={property.id}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                <Badge className={`absolute top-4 right-4 ${getStatusColor(property.status)}`}>
                  {property.status.charAt(0).toUpperCase() + property.status.slice(1)}
                </Badge>
              </div>

              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-foreground">{property.title}</h3>
                    <div className="flex items-center gap-2 text-muted-foreground mb-2">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{property.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-primary font-semibold">
                      <Maximize2 className="w-4 h-4" />
                      <span>{property.acreage}</span>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {property.description}
                </p>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {property.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-1 text-xs bg-primary/10 text-primary px-3 py-1 rounded-full"
                      >
                        <CheckCircle2 className="w-3 h-3" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t">
                  <div>
                    <p className="text-sm text-muted-foreground">Price Range</p>
                    <p className="text-lg font-bold text-primary">{property.price}</p>
                  </div>
                  <Button asChild>
                    <Link to="/contact">Learn More</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
