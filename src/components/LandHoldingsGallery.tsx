import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Maximize2 } from "lucide-react";
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
          <h4 className="text-xl my-2">Discover North Texas Gems: Projects and Landmarks</h4>
          <p className="text-lg text-mute max-w-4xl mx-auto">
            Explore the unique charm and promising opportunities of Bonham, Honey Grove, Wolfe City, Greenville, Celeste, and the pristine lakes of Bois d'Arc, Lake Ralph, Lake Bonham, and Lake Moss. Dive deeper into each location and uncover the wealth of possibilities that await you in these vibrant communities and scenic destinations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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
                {/* <Badge className={`absolute top-4 right-4 ${getStatusColor(property.status)}`}>
                  {property.status.charAt(0).toUpperCase() + property.status.slice(1)}
                </Badge> */}
              </div>

              <CardContent className="p-4">
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

                <Button asChild>
                  <Link to={property.url}>Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
