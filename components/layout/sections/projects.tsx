import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";
import Image from "next/image";

interface ProjectItem {
  title: string;
  description: string;
  tags: string[];
  icon: string;
  highlight?: boolean;
}

const projects: ProjectItem[] = [
  {
    title: "Instalaciones eléctricas industriales",
    description:
      "Diseño e implementación de sistemas eléctricos en baja y media tensión. Tableros de distribución y control para operación confiable y segura.",
    tags: ["BT/MT", "Tableros", "Distribución", "Control"],
    icon: "Zap",
    highlight: true,
  },
  {
    title: "Subestaciones eléctricas",
    description:
      "Montaje, puesta en marcha y mantenimiento preventivo/correctivo de subestaciones. Protecciones y sistemas de control avanzados.",
    tags: ["Media Tensión", "Protecciones", "Mantenimiento"],
    icon: "Battery",
    highlight: true,
  },
  {
    title: "Obra civil y terracerías",
    description:
      "Preparación y estabilización de terreno con estándares que garantizan la base sólida de cada proyecto industrial.",
    tags: ["Movimiento de tierra", "Compactación", "Cimentación"],
    icon: "Mountain",
  },
  {
    title: "Sistemas de alumbrado",
    description:
      "Soluciones de iluminación industrial y exterior enfocadas en seguridad, eficiencia energética y cumplimiento normativo.",
    tags: ["LED", "Eficiencia", "Seguridad"],
    icon: "Lightbulb",
  },
  {
    title: "Sistemas de ventilación",
    description:
      "Instalación de extractores de aire y sistemas de ventilación para mejorar condiciones industriales y salud ocupacional.",
    tags: ["Ventilación", "Industrial", "Salud ocupacional"],
    icon: "Wind",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="proyectos" className="py-24 sm:py-32 bg-muted/20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-lg text-primary mb-2 tracking-wider font-medium">
            Proyectos
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Experiencia que impulsa resultados
          </h3>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hemos realizado más de <span className="text-primary font-semibold">500 proyectos</span> exitosos 
            en instalaciones eléctricas, obra civil, alumbrado y sistemas industriales especializados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map(({ title, description, tags, icon, highlight }) => (
            <Card 
              key={title} 
              className={`relative h-full transition-all duration-300 hover:shadow-lg hover:scale-[1.02] ${
                highlight 
                  ? 'bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20' 
                  : 'bg-card hover:bg-accent/5'
              }`}
            >
              {highlight && (
                <div className="absolute -top-2 -right-2">
                  <Badge variant="default" className="bg-primary text-primary-foreground">
                    Destacado
                  </Badge>
                </div>
              )}
              
              <CardHeader className="pb-4">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg ${highlight ? 'bg-primary/15' : 'bg-muted'}`}>
                    <Icon
                      name={icon as keyof typeof icons}
                      size={24}
                      className={highlight ? 'text-primary' : 'text-muted-foreground'}
                    />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg leading-tight">{title}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-4 leading-relaxed">{description}</p>
                <div className="flex gap-2 flex-wrap">
                  {tags.map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="secondary" 
                      className="text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <a href="/#contacto">
              <Button size="lg" className="font-semibold">
                Consulta tu proyecto
              </Button>
            </a>
            <a href="/#nosotros">
              <Button variant="outline" size="lg" className="font-semibold">
                Conoce más sobre nosotros
              </Button>
            </a>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Cada proyecto es único. Agenda una consulta gratuita para discutir tus necesidades específicas.
          </p>
        </div>
      </div>
    </section>
  );
};