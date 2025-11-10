import { MapPin, TrendingUp, Landmark } from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Strategic Location",
    description: "Situated in prime areas of Texas, North Texas offers strategic proximity to major cities and transportation hubs, making it ideal for both residential and commercial development.",
  },
  {
    icon: TrendingUp,
    title: "Thriving Economy",
    description: "Benefit from North Texas' thriving economy driven by diverse industries including agriculture, technology, and manufacturing. Explore endless possibilities for growth.",
  },
  {
    icon: Landmark,
    title: "Historic Significance",
    description: "Experience rich history and cultural heritage of North Texas through our curated selection of historic landmarks, North Texas is steeped in history waiting to be explored.",
  },
];

export const WhyChooseSection = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-slide-up">
         Why Choose North Texas?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="text-center p-6 bg-white  rounded-md animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
