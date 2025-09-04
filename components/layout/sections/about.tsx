import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const AboutSection = () => {
  return (
    <section id="nosotros" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-16">
        <div>
          <h2 className="text-lg text-primary mb-2 tracking-wider">Nosotros</h2>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Construimos el futuro de tu industria
          </h2>
          <p className="text-xl text-muted-foreground mb-6">
            CONFÍA en quien construye tu futuro. En Grupo Crateck llevamos años haciendo realidad proyectos que generan valor, seguridad y crecimiento para nuestros clientes.
          </p>
          <p className="text-muted-foreground mb-6">
            Desde el diseño hasta la entrega, cuidamos cada detalle para garantizar resultados comprobados. Potenciamos la industria con soluciones eléctricas y civiles confiables, eficientes y alineadas a la normativa.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="#contacto">
              <Button className="font-semibold shadow-sm shadow-black/10">Hablemos de tu proyecto</Button>
            </a>
            <a href="#proyectos">
              <Button variant="outline" className="font-semibold">Ver proyectos</Button>
            </a>
          </div>
        </div>

        <Card className="bg-muted/50 dark:bg-card w-full">
          <CardHeader>
            <CardTitle>Por qué elegirnos</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>Enfoque en seguridad, eficiencia y cumplimiento.</li>
              <li>Experiencia en industria: BT/MT, terracerías, alumbrados, subestaciones.</li>
              <li>Gestión integral: planeación, supervisión y aseguramiento de calidad.</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
