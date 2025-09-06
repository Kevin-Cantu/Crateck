"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden -mt-24"
    >
      {/* Imagen de fondo */}
      <Image
        src="/construcion.jpg"
        alt="Fondo de construcción - Crateck"
        fill
        priority
        className="object-cover brightness-[0.2] contrast-110 saturate-90"
      />

      {/* Overlay degradado */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />

      {/* Contenido */}
      <div className="relative z-10 container h-full flex flex-col items-center justify-center text-center gap-6 px-4">
        
        {/* Título superior */}
        <h1 className="text-xl md:text-3xl font-semibold text-gray-200/90 tracking-wide">
          <span className="bg-gradient-to-r from-primary/80 to-primary text-transparent bg-clip-text">
            Proyectos de Ingeniería
          </span>
        </h1>

        {/* Marca */}
        <div className="flex items-center justify-center gap-3 text-4xl md:text-7xl font-extrabold text-white drop-shadow-lg">
          <span>Grupo</span>
          <Image
            src="/crateclogo-.png"
            alt="Logo Crateck"
            width={140}
            height={60}
            className="inline-block h-12 md:h-28 w-auto object-contain"
            priority
          />
          <span>Crateck</span>
        </div>

        {/* Descripción */}
        <p className="max-w-3xl text-lg md:text-xl text-gray-200/90 mt-6">
          Construimos proyectos que generan valor, seguridad y crecimiento.
          Desde el diseño hasta la entrega, cuidamos cada detalle para
          garantizar resultados.
        </p>

        <p className="max-w-3xl text-base md:text-lg text-gray-300/80">
          Desarrollo de ingeniería, obra civil, obra eléctrica y administración
          de proyectos. Instalaciones en baja y media tensión, subestaciones,
          alumbrado industrial, terracerías y más; con enfoque en seguridad,
          eficiencia energética y cumplimiento normativo.
        </p>

        {/* Botones */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <a href="#contacto">
            <Button className="px-8 py-6 text-lg font-semibold hover:scale-105 transition-transform">
              Agenda tu asesoría gratuita
              <ArrowRight className="size-5 ml-2" />
            </Button>
          </a>
          <a href="#proyectos">
            <Button
              variant="secondary"
              className="px-8 py-6 text-lg font-semibold backdrop-blur-sm bg-white/10 border-white/20 text-white hover:bg-white/20 hover:scale-105 transition-transform"
            >
              Ver proyectos
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};