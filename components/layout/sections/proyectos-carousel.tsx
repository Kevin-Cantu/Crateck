"use client";

import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Reveal from "@/components/Reveal";

interface Proyecto {
  id: string;
  titulo: string;
  categoria: string;
  descripcion: string;
  imagen1: string;
  imagen2: string;
}

// Proyectos reales de Crateck basados en el PDF
const proyectos: Proyecto[] = [
  { id: "A", titulo: "Red de Distribución Parque Eólico La Mesa", categoria: "Obra Eléctrica", descripcion: "Red de distribución de media tensión para parque eólico La Mesa en Güemez, Tamaulipas. Incluye cimentaciones especializadas, canalizaciones subterráneas y sistemas de conexión.", imagen1: "/proyectos/A1.jpg", imagen2: "/proyectos/A2.jpg" },
  { id: "B", titulo: "Transición Aérea-Subterránea Media Tensión", categoria: "Obra Eléctrica", descripcion: "Transición aérea-subterránea de media tensión, instalación de registro tapa cuadrada y derivadores de cuatro vías con sistemas de protección avanzados.", imagen1: "/proyectos/B1.jpg", imagen2: "/proyectos/B2.jpg" },
  { id: "C", titulo: "Recalibración de Línea de Media Tensión", categoria: "Obra Eléctrica", descripcion: "Recalibración de línea de media tensión, retiro de postes, instalación de torrecillas y cambio de crucetas con equipos especializados.", imagen1: "/proyectos/C1.jpg", imagen2: "/proyectos/C2.jpg" },
  { id: "D", titulo: "Coordinación con CFE - Bloqueo de Recierres", categoria: "Obra Eléctrica", descripcion: "Durante trabajos de recalibración se trabaja en conjunto con CFE para bloqueo de recierres y anillado de circuitos, garantizando seguridad operativa.", imagen1: "/proyectos/D1.jpg", imagen2: "/proyectos/D2.jpg" },
  { id: "E", titulo: "Revestimiento de Canal de Concreto", categoria: "Obra Civil", descripcion: "Elaboración y construcción de revestimiento de canal a cielo abierto hecho de concreto y malla electrosoldada con acabados de alta durabilidad.", imagen1: "/proyectos/E1.jpg", imagen2: "/proyectos/E2.jpg" },
  { id: "F", titulo: "Cableado de Señal VYNMSA Ramos Arizpe", categoria: "Obra Eléctrica", descripcion: "Cableado de señal para electronivel en VYNMSA Ramos Arizpe Industrial Park con sistemas de monitoreo y control automatizado.", imagen1: "/proyectos/F1.jpg", imagen2: "/proyectos/F2.jpg" },
  { id: "G", titulo: "Instalación de 450 Módulos Fotovoltaicos", categoria: "Energía Solar", descripcion: "Instalación de 450 módulos fotovoltaicos con estructura de montaje, cableado DC/AC y sistemas de monitoreo para máxima eficiencia energética.", imagen1: "/proyectos/G1.jpg", imagen2: "/proyectos/G2.jpg" },
  { id: "H", titulo: "Sistema Eléctrico Oficinas MEKRA LANG", categoria: "Obra Eléctrica", descripcion: "Sistema eléctrico completo para oficinas empresa MEKRA LANG en VYNMSA Escobedo Industrial Park, incluyendo tableros, alumbrado y fuerza.", imagen1: "/proyectos/H1.jpg", imagen2: "/proyectos/H2.jpg" },
  { id: "I", titulo: "Sistema de Tierras Nave Industrial Branco", categoria: "Obra Eléctrica", descripcion: "Sistema de tierras en nave industrial Branco en VYNMSA Escobedo Industrial Park II con pozos de tierra y conexiones equipotenciales.", imagen1: "/proyectos/I1.jpg", imagen2: "/proyectos/I2.jpg" },
  { id: "J", titulo: "Sistema Eléctrico Nave VII Monterrey", categoria: "Obra Eléctrica", descripcion: "Sistema eléctrico nave VII en VYNMSA Monterrey Industrial Park con instalaciones de alumbrado industrial, fuerza y sistemas de control.", imagen1: "/proyectos/J1.jpg", imagen2: "/proyectos/J2.jpg" },
  { id: "K", titulo: "Colado de Guarniciones Parque Industrial GP", categoria: "Obra Civil", descripcion: "Colado de guarniciones y banquetas en parque industrial GP con concreto especificado, acabados de alta calidad y drenaje integrado.", imagen1: "/proyectos/K1.jpg", imagen2: "/proyectos/K2.jpg" },
];

export const ProyectosCarouselSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: "start" });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [dotsCount, setDotsCount] = useState(proyectos.length); // 1 dot por snap

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
    setDotsCount(emblaApi.scrollSnapList().length); // asegurar dots = snaps
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
    (document.activeElement as HTMLElement)?.blur();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
    (document.activeElement as HTMLElement)?.blur();
  }, [emblaApi]);

  return (
    <section id="proyectos-carousel" className="py-24 sm:py-32 bg-gradient-to-br from-slate-100 via-gray-100 to-slate-200 dark:from-slate-800 dark:via-slate-900 dark:to-gray-900">
      <div className="container -mt-16">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <Reveal as="div" delayMs={0}>
            <h2 className="text-lg text-slate-600 dark:text-slate-400 mb-2 tracking-wider font-medium uppercase">Proyectos Destacados</h2>
          </Reveal>
          <Reveal as="h3" delayMs={60} className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 dark:text-slate-100">Experiencia que transforma industrias</Reveal>
          <Reveal as="p" delayMs={120}>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">Cada proyecto representa nuestro compromiso con la excelencia, la innovación y la satisfacción del cliente en soluciones de ingeniería.</p>
          </Reveal>
        </div>

        {/* Carousel */}
        <Reveal as="div" delayMs={180} className="relative">
          {/* Controles */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex gap-2">
              <Button variant="outline" size="icon" onClick={scrollPrev} disabled={!canScrollPrev} className="rounded-full focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0" onMouseDown={(e) => e.preventDefault()}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" onClick={scrollNext} disabled={!canScrollNext} className="rounded-full focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0" onMouseDown={(e) => e.preventDefault()}>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>

            {/* Dots: uno por snap, avanza con cada botón */}
            <div className="flex gap-2">
              {Array.from({ length: dotsCount }).map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors focus:outline-none ${index === selectedIndex ? "bg-slate-800 dark:bg-slate-200" : "bg-slate-300 dark:bg-slate-600"}`}
                  onClick={() => {
                    emblaApi?.scrollTo(index);
                    (document.activeElement as HTMLElement)?.blur();
                  }}
                  aria-label={`Ir al slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Carousel container */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {proyectos.map((proyecto) => (
                <div key={proyecto.id} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_50%] xl:flex-[0_0_50%] pl-4">
                  <Card className="h-full overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                    <CardContent className="p-0 h-full">
                      <div className="relative">
                        {/* Grid de imágenes más anchas (2 columnas) */}
                        <div className="grid grid-cols-2 gap-2 sm:gap-3 h-96">
                          <div className="relative overflow-hidden group rounded-lg">
                            <img src={proyecto.imagen1} alt={`${proyecto.titulo} - Imagen 1`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" style={{ display: "block", opacity: 1, visibility: "visible" }} />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                          </div>
                          <div className="relative overflow-hidden group rounded-lg">
                            <img src={proyecto.imagen2} alt={`${proyecto.titulo} - Imagen 2`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" style={{ display: "block", opacity: 1, visibility: "visible" }} />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                          </div>
                        </div>

                        {/* Badge */}
                        <div className="absolute top-4 left-4 z-10">
                          <Badge variant="secondary" className="text-xs bg-white/90 text-slate-800 backdrop-blur-sm">{proyecto.categoria}</Badge>
                        </div>

                        {/* Overlay de texto */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent p-6">
                          <h4 className="text-xl font-bold text-white mb-2 leading-tight">{proyecto.titulo}</h4>
                          <p className="text-white/90 text-sm leading-relaxed">{proyecto.descripcion}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* CTA */}
        <Reveal as="div" delayMs={240} className="text-center mt-12">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <a href="/#contacto"><Button size="lg" className="font-semibold">Consulta tu proyecto</Button></a>
            <a href="/#nosotros"><Button variant="outline" size="lg" className="font-semibold">Conoce más sobre nosotros</Button></a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
