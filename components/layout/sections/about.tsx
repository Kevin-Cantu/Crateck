import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Icon } from "@/components/ui/icon";
import { Shield, Award, Users, Target, Zap, CheckCircle, Eye, Compass } from "lucide-react";

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
    <section id="nosotros" className="py-24  bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-gray-900">
      <div className="container">
        
        {/* Presentación principal */}
        <div className="text-center mb-16 ">
          <h2 className="text-3xl sm:text-4xl text-slate-600 dark:text-slate-400 mb-4 tracking-wider font-medium uppercase">Nosotros</h2>
          <h3 className="text-xl md:text-3xl font-bold mb-6 text-slate-900 dark:text-slate-100">
            Líderes en proyectos de ingeniería y construcción
          </h3>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Grupo Crateck es una empresa líder en proyectos de ingeniería y construcción con un 
            firme compromiso hacia la innovación, la calidad y la sostenibilidad. Fundada con la visión de 
            transformar ideas en realidades tangibles que generan valor para nuestros clientes.
          </p>
        </div>

        {/* Misión y Visión */}
        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          
          {/* Nuestra Misión */}
          <Card className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-500">
            <CardHeader className="text-center pb-4">
              <div className="bg-blue-100 dark:bg-blue-900/50 p-4 rounded-full mb-4 mx-auto w-fit">
                <Compass className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <CardTitle className="text-2xl text-slate-800 dark:text-slate-200">Nuestra Misión</CardTitle>
            </CardHeader>
            <CardContent className="text-center px-6">
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                Diseñar y ejecutar proyectos de ingeniería y construcción de alta calidad, priorizando la 
                seguridad, la innovación y la satisfacción del cliente. Nos comprometemos a ofrecer 
                soluciones sostenibles y eficientes que superen las expectativas y contribuyan al 
                desarrollo de las comunidades donde operamos.
              </p>
            </CardContent>
          </Card>

          {/* Nuestra Visión */}
          <Card className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-500">
            <CardHeader className="text-center pb-4">
              <div className="bg-green-100 dark:bg-green-900/50 p-4 rounded-full mb-4 mx-auto w-fit">
                <Eye className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <CardTitle className="text-2xl text-slate-800 dark:text-slate-200">Nuestra Visión</CardTitle>
            </CardHeader>
            <CardContent className="text-center px-6">
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                Ser líderes en el sector de ingeniería y construcción, reconocidos por nuestra 
                excelencia operativa, enfoque en la sostenibilidad y capacidad para transformar ideas 
                innovadoras en realidades tangibles. Aspiramos a crecer estableciendo estándares de 
                calidad y seguridad que inspiren confianza.
              </p>
            </CardContent>
          </Card>
        </div>

   

        {/* Características distintivas */}
        <Card className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">¿Por qué elegir Grupo Crateck?</CardTitle>
            <p className="text-muted-foreground">
              Diferenciadores que nos posicionan como líderes en soluciones industriales
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3">
              {differentiators.map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700/50 transition-colors duration-300">
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