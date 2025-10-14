import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

export const ObraCivilSection = () => {
  const solutions = [
    {
      icon: "Mountain",
      title: "Terracerías",
      description: "Cortes, rellenos y conformación de estructuras de terracería con estándares de calidad y compactación óptimos.",
    },
    {
      icon: "Layers",
      title: "Muros precolados",
      description: "Preparación e instalación de muros prefabricados sólidos y ligeros para construcción industrial.",
    },
    {
      icon: "Building",
      title: "Obra civil en general",
      description: "Todo tipo de construcciones de obra civil con enfoque en seguridad, calidad y satisfacción del cliente.",
    },
  ];

  return (
    <section id="obra-civil" className="py-24   bg-gradient-to-br from-stone-100 via-slate-100 to-gray-100 dark:from-slate-800 dark:via-slate-900 dark:to-gray-900">
      <div className="container">
        {/* Encabezado principal */}
        <div className="text-center mb-16 ">
          <h2 className="text-4xl text-stone-600 dark:text-stone-400 mb-2 tracking-wider font-medium uppercase">
            Obra Civil
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-slate-900 dark:text-slate-100 leading-tight">
            Cimientos sólidos para proyectos industriales exitosos
          </h3>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto mb-6 leading-relaxed">
            Nuestro compromiso se centra en la seguridad, calidad y satisfacción del cliente. 
            Priorizamos la comunicación y responsabilidad durante todo el proceso.
          </p>
        </div>

        {/* Soluciones */}
        <div className="mb-8">
          <h4 className="text-2xl font-bold text-center mb-12 text-slate-800 dark:text-slate-200 tracking-wide">
            SOLUCIONES
          </h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8 max-w-6xl mx-auto">
            {solutions.map(({ icon, title, description }) => (
              <Card key={title} className="group h-full bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm border-stone-200 dark:border-slate-700 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
                <CardHeader className="text-center pb-6">
                  <div className="relative mb-6 mx-auto w-fit">
                    <div className="bg-gradient-to-br  from-stone-200 to-gray-200 dark:from-slate-700 dark:to-gray-700 p-5 rounded-2xl group-hover:from-stone-300 group-hover:to-gray-300 dark:group-hover:from-slate-600 dark:group-hover:to-gray-600 transition-all duration-500">
                      <Icon
                        name={icon as keyof typeof icons}
                        size={36}
                        className="text-stone-700 dark:text-stone-300 group-hover:text-stone-800 dark:group-hover:text-stone-200 transition-colors duration-500"
                      />
                    </div>
                    <div className="absolute -inset-2 bg-gradient-to-r from-stone-300 to-gray-300 dark:from-slate-600 dark:to-gray-600 rounded-2xl opacity-0 group-hover:opacity-15 transition-opacity duration-500 -z-10"></div>
                  </div>
                  <CardTitle className="text-xl leading-tight text-slate-800 dark:text-slate-200 px-2">
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
            Preparamos el terreno perfecto para tu proyecto industrial con la más alta calidad, 
            cumplimiento normativo y compromiso total con la excelencia.
          </p>
        </div>
      </div>
    </section>
  );
};