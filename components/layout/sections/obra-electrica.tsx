import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

export const ObraElectricaSection = () => {
  const solutions = [
    {
      icon: "Zap",
      title: "Desarrollo de Ingeniería y Administración de Proyectos",
      description:
        "Diseño, cálculo, estimaciones, presupuestos, control de obra y gestión integral de entregables con cumplimiento normativo.",
    },
    {
      icon: "HardHat",
      title: "Construcción de obra especializada",
      description:
        "Ejecución de instalaciones eléctricas industriales: tableros, distribución, canalizaciones, alumbrado y sistemas de protección.",
    },
  ];

  return (
    <section id="obra-electrica" className="py-24 sm:py-32 bg-gradient-to-br from-slate-50 via-slate-100 to-blue-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container">
        {/* Encabezado principal */}
        <div className="text-center mb-16">
          <h2 className="text-lg text-slate-600 dark:text-slate-400 mb-2 tracking-wider font-medium uppercase">
            Desarrollo de Obra Eléctrica
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 dark:text-slate-100 leading-tight">
            Nos especializamos en el desarrollo de infraestructura eléctrica en baja, media y alta tensión
          </h3>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Transformamos proyectos eléctricos complejos en soluciones confiables y eficientes, 
            desde el diseño hasta la puesta en marcha con los más altos estándares de seguridad.
          </p>
        </div>

        {/* Nuestros servicios */}
        <div className="mb-8">
          <h4 className="text-2xl font-bold text-center mb-12 text-slate-800 dark:text-slate-200 tracking-wide">
            NUESTROS SERVICIOS
          </h4>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {solutions.map(({ icon, title, description }, index) => (
              <Card key={title} className="group h-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-slate-200/50 dark:border-slate-700/50 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:bg-white dark:hover:bg-slate-800">
                <CardHeader className="text-center pb-6">
                  <div className="relative mb-6 mx-auto w-fit">
                    <div className="bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-600 p-5 rounded-2xl group-hover:from-blue-50 group-hover:to-blue-100 dark:group-hover:from-blue-900/50 dark:group-hover:to-blue-800/50 transition-all duration-500">
                      <Icon
                        name={icon as keyof typeof icons}
                        size={40}
                        className="text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-500"
                      />
                    </div>
                    <div className="absolute -inset-2 bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-600 dark:to-slate-700 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10"></div>
                  </div>
                  <CardTitle className="text-xl leading-tight text-slate-800 dark:text-slate-200 px-4">
                    {title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center px-6">
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                    {description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Texto de cierre */}
        <div className="text-center">
          <p className="text-slate-500 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Cada proyecto eléctrico es único. Diseñamos soluciones a medida que cumplen con las normativas 
            más exigentes y optimizan el rendimiento de tu infraestructura industrial.
          </p>
        </div>
      </div>
    </section>
  );
};