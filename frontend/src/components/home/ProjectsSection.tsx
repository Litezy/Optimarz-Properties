import { Card, CardContent } from "@/components/ui/card";
import project1 from "@/assets/opti4.jpg";
import project2 from "@/assets/opti5.jpg";
import project3 from "@/assets/opti6.jpg";

const projects = [
  {
    id: 1,
    title: "Fannin County",
    description: "Explore the enchanting beauty of Fannin County, where rolling hills meet picturesque landscapes and explore the historical significance that makes Fannin County a true treasure for investors.",
    image: project1,
  },
  {
    id: 2,
    title: "Hunt Springs",
    description: "Discover Hunt County serenity meets modern growth. Explore curated projects and investment opportunities with strong potential for prosperity.",
    image: project2,
  },
  {
    id: 3,
    title: "Cooke County",
    description: "Discover Cooke County, where North Texas beauty meets a thriving economy. Positioned at the Texas–Oklahoma gateway, it offers prime investment opportunities and lasting prosperity.",
    image: project3,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Projects
          </h2>
          <p className="text-primary text-lg font-semibold">Explore North Texas</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className="overflow-hidden hover:shadow-xl transition-shadow duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6 bg-primary/5">
                <h3 className="text-2xl font-bold mb-3 text-primary">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-lg leading-relaxed">
                  {project.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
