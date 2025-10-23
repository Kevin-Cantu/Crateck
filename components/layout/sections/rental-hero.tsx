"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { useEffect, useState } from "react";

export const RentalHeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const t = requestAnimationFrame(() => setIsVisible(true));
    return () => cancelAnimationFrame(t);
  }, []);

  return (
    <section
      className="relative w-full -mt-16 overflow-hidden h-screen"
      aria-label=" ia y equipo"
    >
      {/* Fondo tipo inicio */}
      <Image
        src="/maquinaria/maquinariainicio.jpeg"
        alt="Renta de maquinaria - Crateck"
        fill
        priority
        className="object-cover brightness-[0.28] contrast-110 saturate-110"
      />

      {/* Overlay degradado como en inicio */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />

      {/* Contenido - alineado arriba e izquierda en todas las resoluciones */}
      <div className="relative z-10 h-full">
        <div className="container h-full px-6 md:px-10 lg:px-12 xl:px-16">
          <div className="h-full flex flex-col">
            <div
              className={`max-w-5xl pt-52 sm:pt-56 md:pt-60 lg:pt-44 xl:pt-48 text-left ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
              } transition-all duration-700`}
            >
              <h1 className="text-3xl sm:text-4xl sm:pt-20 pt-12 lg:text-5xl xl:text-6xl font-extrabold text-white tracking-tight leading-tight">
                Renta de Maquinaria y Equipo
              </h1>

              {/* Separador sutil (alineado a la izquierda) */}
              <div className="mt-4 sm:mt-5 lg:mt-6 h-px w-24 bg-white/15" />

              {/* Descripción (alineada a la izquierda) */}
              <p className="mt-5 sm:mt-6 lg:mt-7 text-base sm:text-lg lg:text-xl text-white/90 max-w-3xl leading-relaxed lg:leading-8">
                Disponibilidad inmediata, soporte experto y logística eficiente para que tu obra no se detenga.
              </p>

              {/* Lista de destacados (alineada a la izquierda) */}
              <ul className="mt-6 sm:mt-7 lg:mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 max-w-4xl">
                <li className="flex items-start gap-2 text-white/90">
                  <CheckCircle className="mt-0.5 h-5 w-5 text-primary" />
                  <span className="text-sm sm:text-base">Entrega rápida y disponibilidad</span>
                </li>
                <li className="flex items-start gap-2 text-white/90">
                  <CheckCircle className="mt-0.5 h-5 w-5 text-primary" />
                  <span className="text-sm sm:text-base">Equipo probado y seguro</span>
                </li>
                <li className="flex items-start gap-2 text-white/90">
                  <CheckCircle className="mt-0.5 h-5 w-5 text-primary" />
                  <span className="text-sm sm:text-base">Asesoría técnica incluida</span>
                </li>
              </ul>

              {/* CTAs alineados a la izquierda */}
              <div className="mt-8 sm:mt-10 lg:mt-14 flex flex-col sm:flex-row gap-4 sm:gap-5 lg:gap-6 items-start">
                <a href="#catalogo-equipo">
                  <Button className="px-6 py-4 text-base font-semibold bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-primary/25">
                    Ver catálogo
                  </Button>
                </a>
                <a href="/#contacto">
                  <Button
                    variant="secondary"
                    className="px-6 py-4 text-base font-semibold backdrop-blur-sm bg-white/10 border-white/20 text-white hover:bg-white/20 hover:scale-[1.02] transition-all duration-300"
                  >
                    Solicitar asesoría
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
