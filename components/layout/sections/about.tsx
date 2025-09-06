import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Icon } from "@/components/ui/icon";
import { Shield, Award, Users, Target, Zap, CheckCircle } from "lucide-react";
import Image from "next/image";

export const AboutSection = () => {
  const values = [
    {
      icon: Shield,
      title: "Seguridad",
      description: "Cumplimiento normativo garantizado en cada proyecto"
    },
    {
      icon: Award,
      title: "Calidad",
      description: "Estándares internacionales y procesos certificados"
    },
    {
      icon: Zap,
      title: "Eficiencia",
      description: "Soluciones optimizadas para máximo rendimiento"
    },
    {
      icon: Users,
      title: "Compromiso",
      description: "Equipo especializado enfocado en resultados"
    }
  ];

  const achievements = [
    { number: "500+", label: "Proyectos completados", sublabel: "En toda la república" },
    { number: "15+", label: "Años de experiencia", sublabel: "En el sector industrial" },
    { number: "98%", label: "Satisfacción del cliente", sublabel: "Calidad comprobada" },
    { number: "24/7", label: "Soporte técnico", sublabel: "Disponibilidad continua" }
  ];

  const differentiators = [
    "Enfoque integral: desde diseño hasta entrega",
    "Experiencia especializada en BT/MT y obra civil",
    "Gestión de proyectos con metodologías probadas",
    "Cumplimiento estricto de normativas vigentes",
    "Equipo multidisciplinario certificado",
    "Soporte técnico post-entrega"
  ];

  return (
    <section id="nosotros" className="py-24 sm:py-32">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          <div>
            <h2 className="text-lg text-primary mb-2 tracking-wider font-medium">Nosotros</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Construimos el futuro de tu industria
            </h3>
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              <span className="text-foreground font-semibold">CONFÍA</span> en quien construye tu futuro. 
              En Grupo Crateck llevamos más de 15 años haciendo realidad proyectos que generan 
              <span className="text-primary font-semibold"> valor</span>, 
              <span className="text-accent font-semibold"> seguridad</span> y 
              <span className="text-primary font-semibold"> crecimiento</span> para nuestros clientes.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Desde el diseño hasta la entrega, cuidamos cada detalle para garantizar resultados comprobados. 
              Potenciamos la industria con soluciones eléctricas y civiles confiables, eficientes y 
              alineadas a la normativa más exigente.
            </p>

            {/* CTA buttons */}
            

            {/* Badges de certificación */}
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="text-xs">
                ISO 9001
              </Badge>
              <Badge variant="secondary" className="text-xs">
                NOM Certificado
              </Badge>
              <Badge variant="secondary" className="text-xs">
                Especialistas BT/MT
              </Badge>
            </div>
          </div>

          <div className="space-y-6">
            {/* Estadísticas */}
            <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  Nuestros logros
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold text-primary mb-1">
                        {achievement.number}
                      </div>
                      <div className="text-sm font-medium text-foreground">
                        {achievement.label}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {achievement.sublabel}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Valores */}
            <Card className="bg-card">
              <CardHeader>
                <CardTitle>Nuestros valores</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {values.map((value, index) => (
                    <div key={index} className="flex flex-col items-center text-center p-3">
                      <div className="p-2 bg-primary/10 rounded-lg mb-2">
                        <value.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="font-medium text-sm mb-1">{value.title}</div>
                      <div className="text-xs text-muted-foreground">{value.description}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Por qué elegirnos */}
        <Card className="bg-muted/50">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">¿Por qué elegir Grupo Crateck?</CardTitle>
            <p className="text-muted-foreground">
              Diferenciadores que nos posicionan como líderes en soluciones industriales
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {differentiators.map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-background rounded-lg">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};