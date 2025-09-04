import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface SolutionProps {
  icon: string;
  title: string;
  bullets: string[];
}

const solutions: SolutionProps[] = [
  {
    icon: "Blueprint",
    title: "Desarrollo de ingeniería",
    bullets: [
      "Diseño y cálculo con normativas vigentes",
      "Estimaciones, presupuesto y memorias técnicas",
      "Planos ejecutivos y documentación",
    ],
  },
  {
    icon: "Building2",
    title: "Obra civil",
    bullets: [
      "Terracerías con estándares de calidad",
      "Cimentaciones y estructuras para industria",
      "Construcción de naves y adecuaciones",
    ],
  },
  {
    icon: "Bolt",
    title: "Obra eléctrica",
    bullets: [
      "Instalaciones industriales en BT/MT",
      "Tableros, distribución y alumbrado",
      "Mantenimiento y eficiencia energética",
    ],
  },
  {
    icon: "ClipboardList",
    title: "Administración de proyectos",
    bullets: [
      "Planeación y control de obra",
      "Supervisión, seguridad y cumplimiento",
      "Aseguramiento de calidad y entregables",
    ],
  },
];

export const SolutionsSection = () => {
  return (
    <section id="soluciones" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Soluciones
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Ingeniería, obra civil y eléctrica para resultados comprobados
      </h2>

      <h3 className="md:w-2/3 mx-auto text-xl text-center text-muted-foreground mb-8">
        “La electricidad mueve al mundo, y en Grupo Crateck nos aseguramos de que fluya de manera segura y eficiente.”
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {solutions.map(({ icon, title, bullets }) => (
          <Card key={title} className="h-full bg-muted/50 dark:bg-card">
            <CardHeader className="flex items-center text-center">
              <div className="bg-primary/15 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                <Icon
                  name={icon as keyof typeof icons}
                  size={28}
                  color="hsl(var(--primary))"
                  className="text-primary"
                />
              </div>
              <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <ul className="list-disc pl-5 space-y-1">
                {bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
