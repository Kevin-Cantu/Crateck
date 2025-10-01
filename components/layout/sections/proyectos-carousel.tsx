"use client";

import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
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
  {
    id: "A",
    titulo: "Red de Distribución Parque Eólico La Mesa",
    categoria: "Obra Eléctrica",
    descripcion: "Red de distribución de media tensión para parque eólico La Mesa en Güemez, Tamaulipas. Incluye cimentaciones especializadas, canalizaciones subterráneas y sistemas de conexión.",
    imagen1: "/proyectos/A1.jpg",
    imagen2: "/proyectos/A2.jpg"
  },
  {
    id: "B",
    titulo: "Transición Aérea-Subterránea Media Tensión",
    categoria: "Obra Eléctrica", 
    descripcion: "Transición aérea-subterránea de media tensión, instalación de registro tapa cuadrada y derivadores de cuatro vías con sistemas de protección avanzados.",
    imagen1: "/proyectos/B1.jpg",
    imagen2: "/proyectos/B2.jpg"
  },
  {
    id: "C",
    titulo: "Recalibración de Línea de Media Tensión",
    categoria: "Obra Eléctrica",
    descripcion: "Recalibración de línea de media tensión, retiro de postes, instalación de torrecillas y cambio de crucetas con equipos especializados.",
    imagen1: "/proyectos/C1.jpg",
    imagen2: "/proyectos/C2.jpg"
  },
  {
    id: "D",
    titulo: "Coordinación con CFE - Bloqueo de Recierres",
    categoria: "Obra Eléctrica",
    descripcion: "Durante trabajos de recalibración se trabaja en conjunto con CFE para bloqueo de recierres y anillado de circuitos, garantizando seguridad operativa.",
    imagen1: "/proyectos/D1.jpg",
    imagen2: "/proyectos/D2.jpg"
  },
  {
    id: "E",
    titulo: "Revestimiento de Canal de Concreto",
    categoria: "Obra Civil",
    descripcion: "Elaboración y construcción de revestimiento de canal a cielo abierto hecho de concreto y malla electrosoldada con acabados de alta durabilidad.",
    imagen1: "/proyectos/E1.jpg",
    imagen2: "/proyectos/E2.jpg"
  },
  {
    id: "F",
    titulo: "Cableado de Señal VYNMSA Ramos Arizpe",
    categoria: "Obra Eléctrica",
    descripcion: "Cableado de señal para electronivel en VYNMSA Ramos Arizpe Industrial Park con sistemas de monitoreo y control automatizado.",
    imagen1: "/proyectos/F1.jpg",
    imagen2: "/proyectos/F2.jpg"
  },
  {
    id: "G",
    titulo: "Instalación de 450 Módulos Fotovoltaicos",
    categoria: "Energía Solar",
    descripcion: "Instalación de 450 módulos fotovoltaicos con estructura de montaje, cableado DC/AC y sistemas de monitoreo para máxima eficiencia energética.",
    imagen1: "/proyectos/G1.jpg",
    imagen2: "/proyectos/G2.jpg"
  },
  {
    id: "H",
    titulo: "Sistema Eléctrico Oficinas MEKRA LANG",
    categoria: "Obra Eléctrica",
    descripcion: "Sistema eléctrico completo para oficinas empresa MEKRA LANG en VYNMSA Escobedo Industrial Park, incluyendo tableros, alumbrado y fuerza.",
    imagen1: "/proyectos/H1.jpg",
    imagen2: "/proyectos/H2.jpg"
  },
  {
    id: "I",
    titulo: "Sistema de Tierras Nave Industrial Branco",
    categoria: "Obra Eléctrica",
    descripcion: "Sistema de tierras en nave industrial Branco en VYNMSA Escobedo Industrial Park II con pozos de tierra y conexiones equipotenciales.",
    imagen1: "/proyectos/I1.jpg",
    imagen2: "/proyectos/I2.jpg"
  },
  {
    id: "J",
    titulo: "Sistema Eléctrico Nave VII Monterrey",
    categoria: "Obra Eléctrica",
    descripcion: "Sistema eléctrico nave VII en VYNMSA Monterrey Industrial Park con instalaciones de alumbrado industrial, fuerza y sistemas de control.",
    imagen1: "/proyectos/J1.jpg",
    imagen2: "/proyectos/J2.jpg"
  },
  {
    id: "K",
    titulo: "Colado de Guarniciones Parque Industrial GP",
    categoria: "Obra Civil",
    descripcion: "Colado de guarniciones y banquetas en parque industrial GP con concreto especificado, acabados de alta calidad y drenaje integrado.",
    imagen1: "/proyectos/K1.jpg",
    imagen2: "/proyectos/K2.jpg"
  }
];

export const ProyectosCarouselSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: "start" });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => {
    emblaApi && emblaApi.scrollPrev();
    // Remover focus del botón después del clic
    (document.activeElement as HTMLElement)?.blur();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi && emblaApi.scrollNext();
    // Remover focus del botón después del clic
    (document.activeElement as HTMLElement)?.blur();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  // Calcular número de puntos basado en el viewport
  const getItemsPerPage = () => {
    if (typeof window === "undefined") return 3; // valor por defecto
    if (window.innerWidth < 768) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  };
  const [itemsPerPage, setItemsPerPage] = useState(3); // valor seguro por defecto
const [dotsCount, setDotsCount] = useState(Math.ceil(proyectos.length / 3));

useEffect(() => {
  const updateDotsCount = () => {
    let perPage = 3; // valor por defecto
    if (window.innerWidth < 768) perPage = 1;
    else if (window.innerWidth < 1024) perPage = 2;

    setItemsPerPage(perPage);
    setDotsCount(Math.ceil(proyectos.length / perPage));
  };

  updateDotsCount();
  window.addEventListener("resize", updateDotsCount);
  return () => window.removeEventListener("resize", updateDotsCount);
}, []);

  return (
    <section
      id="proyectos-carousel"
      className="py-24 sm:py-32 bg-gradient-to-br from-slate-100 via-gray-100 to-slate-200 dark:from-slate-800 dark:via-slate-900 dark:to-gray-900"
    >
      <div className="container -mt-16">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <Reveal as="div" delayMs={0}>
            <h2 className="text-lg text-slate-600 dark:text-slate-400 mb-2 tracking-wider font-medium uppercase">
              Proyectos Destacados
            </h2>
          </Reveal>

          <Reveal
            as="h3"
            delayMs={60}
            className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 dark:text-slate-100"
          >
            Experiencia que transforma industrias
          </Reveal>

          <Reveal as="p" delayMs={120}>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Cada proyecto representa nuestro compromiso con la excelencia, la innovación 
              y la satisfacción del cliente en soluciones de ingeniería.
            </p>
          </Reveal>
        </div>

        {/* Carousel */}
        <Reveal as="div" delayMs={180} className="relative">
          {/* Controles */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={scrollPrev}
                disabled={!canScrollPrev}
                className="rounded-full focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                onMouseDown={(e) => e.preventDefault()}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={scrollNext}
                disabled={!canScrollNext}
                className="rounded-full focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                onMouseDown={(e) => e.preventDefault()}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>

            {/* Indicadores responsive */}
            <div className="flex gap-2">
              {Array.from({ length: dotsCount }).map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors focus:outline-none ${
                    index === Math.floor(selectedIndex / (typeof window !== 'undefined' && window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3))
                      ? "bg-slate-800 dark:bg-slate-200"
                      : "bg-slate-300 dark:bg-slate-600"
                  }`}
                  onClick={() => {
                    const itemsPerPage = typeof window !== 'undefined' && window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3;
                    emblaApi?.scrollTo(index * itemsPerPage);
                    // Remover focus después del clic
                    (document.activeElement as HTMLElement)?.blur();
                  }}
                />
              ))}
            </div>
          </div>

          {/* Carousel container */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {proyectos.map((proyecto) => (
                <div key={proyecto.id} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4">
                  <Card className="bg-transparent border-none shadow-none h-full overflow-hidden">
                    <CardContent className="p-0 h-full">
                      
                      {/* Container relativo para overlays */}
                      <div className="relative">
                        
                        {/* Grid de imágenes más grandes */}
                        <div className="grid grid-cols-2 gap-3 h-96">
                          
                          {/* Primera imagen */}
                          <div className="relative overflow-hidden rounded-lg group">
                            <img
                              src={proyecto.imagen1}
                              alt={`${proyecto.titulo} - Imagen 1`}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              style={{ 
                                display: 'block',
                                opacity: 1,
                                visibility: 'visible'
                              }}
                            />
                            {/* Gradiente sutil */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                          </div>

                          {/* Segunda imagen */}
                          <div className="relative overflow-hidden rounded-lg group">
                            <img
                              src={proyecto.imagen2}
                              alt={`${proyecto.titulo} - Imagen 2`}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              style={{ 
                                display: 'block',
                                opacity: 1,
                                visibility: 'visible'
                              }}
                            />
                            {/* Gradiente sutil */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                          </div>

                        </div>

                        {/* Badge arriba-izquierda */}
                        <div className="absolute top-4 left-4 z-10">
                          <Badge variant="secondary" className="text-xs bg-white/90 text-slate-800 backdrop-blur-sm">
                            {proyecto.categoria}
                          </Badge>
                        </div>

                        {/* Overlay de texto que atraviesa ambas imágenes */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent p-6 rounded-b-lg">
                          <h4 className="text-xl font-bold text-white mb-2 leading-tight">
                            {proyecto.titulo}
                          </h4>
                          <p className="text-white/90 text-sm leading-relaxed">
                            {proyecto.descripcion}
                          </p>
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
        </Reveal>
      </div>
    </section>
  );
};