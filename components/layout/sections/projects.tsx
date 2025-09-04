import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ProjectItem {
  title: string;
  description: string;
  tags: string[];
}

const projects: ProjectItem[] = [
  {
    title: "Instalaciones eléctricas",
    description:
      "Diseño e implementación en baja y media tensión. Tableros y distribución para operación confiable.",
    tags: ["BT/MT", "Tableros", "Distribución"],
  },
  {
    title: "Terracerías",
    description:
      "Preparación y estabilización de terreno con estándares que garantizan la base del proyecto.",
    tags: ["Movimiento de tierra", "Compactación"],
  },
  {
    title: "Alumbrados",
    description:
      "Soluciones de iluminación industrial y exterior enfocadas en seguridad y eficiencia.",
    tags: ["Eficiencia", "Seguridad"],
  },
  {
    title: "Extractores de aire",
    description:
      "Instalación de sistemas de ventilación para mejorar condiciones industriales y salud ocupacional.",
    tags: ["Ventilación", "Industrial"],
  },
  {
    title: "Subestaciones eléctricas",
    description:
      "Montaje, puesta en marcha y mantenimiento preventivo/correctivo.",
    tags: ["MT", "Protecciones"],
  },
];

export const ProjectsSection = () => {
  return (
    <section id="proyectos" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Proyectos
      </h2>
      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Experiencia que impulsa resultados
      </h2>
      <h3 className="md:w-2/3 mx-auto text-xl text-center text-muted-foreground mb-8">
        Hemos realizado obras como instalaciones eléctricas, terracerías, alumbrados, extractores de aire y subestaciones eléctricas.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map(({ title, description, tags }) => (
          <Card key={title} className="bg-muted/50 dark:bg-card h-full">
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-3">{description}</p>
              <div className="flex gap-2 flex-wrap">
                {tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
