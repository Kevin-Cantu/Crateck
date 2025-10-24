"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

export const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Dispara la animación después del primer paint para evitar hidratar en estado "visible"
  useEffect(() => {
    const t = requestAnimationFrame(() => setIsVisible(true));
    return () => cancelAnimationFrame(t);
  }, []);

  return (
    <section
      id="inicio"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden -mt-16"
    >
      {/* Imagen de fondo */}
      <Image
        src="/construcion.jpg"
        alt="Fondo de construcción - Crateck"
        fill
        priority
        className="object-cover brightness-[0.25] contrast-110 saturate-90"
      />

      {/* Overlay con degradado */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />

      {/* Contenido */}
      <div className="relative z-10 flex flex-col items-center text-center   sm:px-10 w-full max-w-full">
        {/* Logo */}
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <Image
            src="/cratecklogo2.png"
            alt="Logo Crateck"
            width={1200}
            height={300}
            className="mx-auto w-[900px] sm:w-[350px] md:w-[450px] lg:w-[950px] object-contain"
            priority
          />
        </div>

        {/* Título */}
        <div
          className={`transition-all duration-700 delay-100 sm:-mt-12 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-200 ">
            <span className="bg-gradient-to-r from-primary via-primary/80 to-accent text-transparent  bg-clip-text">
              Proyectos de Ingeniería
            </span>
          </h1>
        </div>

        {/* Descripción */}
        <div
          className={`transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed">
            Construimos proyectos que generan{" "}
            <span className="text-primary font-semibold">valor</span>,{" "}
            <span className="text-accent font-semibold">seguridad</span> y{" "}
            <span className="text-primary font-semibold">crecimiento</span>.
          </p>
        </div>

        {/* Botones */}
        <div
          className={`transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
            <a href="/#contacto">
              <Button className="group px-6 py-4 text-base font-semibold bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary/25">
                Agenda asesoría gratuita
                <ArrowRight className="size-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </a>
            <a href="/#proyectos-carousel">
              <Button
                variant="secondary"
                className="group px-6 py-4 text-base font-semibold backdrop-blur-sm bg-white/10 border-white/20 text-white hover:bg-white/20 hover:scale-105 transition-all duration-300"
              >
                <Play className="size-4 mr-2" />
                Ver proyectos
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
