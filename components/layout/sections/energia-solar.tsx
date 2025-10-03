import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

export const EnergiaSolarSection = () => {
  const services = [
    {
      icon: "Wrench",
      title: "Ingeniería y diseño de sistemas fotovoltaicos",
      description: "Desarrollamos soluciones personalizadas según la demanda y operación de cada cliente.",
    },
    {
      icon: "ClipboardList",
      title: "Gestión y administración de proyectos solares",
      description: "Coordinamos cada etapa del proyecto asegurando tiempos, calidad y cumplimiento normativo.",
    },
    {
      icon: "Building2",
      title: "Instalación y construcción especializada",
      description: "Ejecutamos instalaciones con los más altos estándares de seguridad y desempeño técnico.",
    },
    {
      icon: "Settings",
      title: "Monitoreo, mantenimiento y operación (O&M)",
      description: "Brindamos servicios postventa para garantizar el rendimiento continuo del sistema.",
    },
    {
      icon: "TrendingUp",
      title: "Análisis de rentabilidad y retorno de inversión (ROI)",
      description: "Te ayudamos a visualizar los beneficios financieros de migrar a energía solar.",
    },
  ];

  return (
    <section id="energia-solar" className="py-24 scroll-mt-20  sm:py-32 bg-gradient-to-br from-amber-50/50 via-orange-50/30 to-yellow-50/50 dark:from-slate-900 dark:via-orange-950/20 dark:to-slate-800">
      <div className="container ">
        {/* Encabezado principal */}
        <div className="text-center mb-16 -mt-12">
          <h2 className="text-lg text-amber-600 dark:text-amber-400 mb-2 tracking-wider font-medium uppercase">
            Energía Solar
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 dark:text-slate-100 leading-tight">
            Impulsamos el futuro con soluciones fotovoltaicas a la medida
          </h3>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Transformamos la energía del sol en soluciones rentables y sostenibles para tu industria, 
            con tecnología de vanguardia y servicios integrales.
          </p>
        </div>

        {/* Servicios */}
        <div className="mb-8">
          <h4 className="text-2xl font-bold text-center mb-12 text-slate-800 dark:text-slate-200 tracking-wide">
             NUESTROS SERVICIOS
          </h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {services.map(({ icon, title, description }) => (
              <Card key={title} className="group h-full bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border-orange-100 dark:border-slate-700 hover:shadow-xl transition-all duration-500 hover:scale-[1.02]">
                <CardHeader className="text-center pb-4">
                  <div className="relative mb-4 mx-auto w-fit">
                    <div className="bg-gradient-to-br from-amber-100 to-orange-100 dark:from-orange-900/30 dark:to-amber-900/30 p-4 rounded-xl group-hover:from-amber-200 group-hover:to-orange-200 dark:group-hover:from-orange-800/50 dark:group-hover:to-amber-800/50 transition-all duration-500">
                      <Icon
                        name={icon as keyof typeof icons}
                        size={32}
                        className="text-amber-600 dark:text-amber-400 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-500"
                      />
                    </div>
                  </div>
                  <CardTitle className="text-xl leading-tight text-slate-800 dark:text-slate-200 px-2">
                    {title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center px-4">
                  <p className="text-slate-600 dark:text-slate-300  text-lg leading-relaxed">
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
            Analizamos tu consumo energético y diseñamos la solución solar más eficiente para reducir costos 
            y contribuir a un futuro más sostenible.
          </p>
        </div>
      </div>
    </section>
  );
};