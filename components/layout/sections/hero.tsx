"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Shield, Zap, Award, Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

export const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);



  const stats = [
    { number: "3000+", label: "Clientes Atendidos", sublabel: "Nacionalmente" },
    { number: "90+", label: "Empleos", sublabel: "En todos los sectores" },
    { number: "11+", label: "Años de experiencia", sublabel: "Calidad comprobada" }
  ];

  const services = [
    "Desarollo de ingenieria",
    "Construccion de obra especializada", 
    "Instalacion y construccion especializada",
    "Analisis de rentabilidad",
    "Monitoreo, Mantenimiento y operacion"
  ];

  return (
    <section
      id="inicio"
      className="relative w-full h-screen flex overflow-hidden -mt-16"
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

      {/* Contenido principal - Layout de dos columnas */}
      <div className="relative z-10 w-full h-full flex">
        
        {/* Columna Izquierda - Contenido Principal */}
        <div className="flex-1 flex flex-col justify-center px-6 lg:px-12 xl:px-16 py-8">
          
          {/* Badge de calidad */}
          

          {/* Título principal */}
          <div className={`transform transition-all duration-700  mt-8 delay-100 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-200/90 tracking-wide mb-4">
              <span className="bg-gradient-to-r from-primary via-primary/80 to-accent text-transparent bg-clip-text">
                Proyectos de Ingeniería
              </span>
            </h1>
            
            {/* Marca principal */}
            <div className="flex items-start sm:-mb-24 sm:-mt-24 sm:-ml-0 -ml-12 -mt-12  text-white drop-shadow-2xl">
  <Image
    src="/cratecklogo2.png"
    alt="Logo Crateck"
    width={800}
    height={400}
    className=" w-auto object-contain sm:-ml-24"
    priority
  />
</div>
          </div>
          {/* Descripción */}
          <div className={`transform transition-all mt-8 sm:mt-0 duration-700 delay-200 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <p className="text-lg md:text-xl lg:text-2xl text-white font-medium mb-3 leading-tight">
              Construimos proyectos que generan{" "}
              <span className="text-primary font-semibold">valor</span>,{" "}
              <span className="text-accent font-semibold">seguridad</span> y{" "}
              <span className="text-primary font-semibold">crecimiento</span>.
            </p>
            <p className="text-base md:text-lg text-gray-300/90 mb-6 leading-relaxed max-w-2xl mt-12">
              Desarrollo integral de ingeniería, obra civil y eléctrica. Especialistas en instalaciones 
              BT/MT, subestaciones, alumbrado industrial y administración de proyectos.
            </p>
          </div>

          {/* Características */}
          <div className={`transform transition-all duration-700 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>

          </div>

          {/* Botones */}
          <div className={`transform transition-all  sm:-mt-0  mt-8 duration-700 delay-400 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="flex flex-col sm:flex-row items-start gap-4 mb-6">
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

        {/* Columna Derecha - Panel de información */}
        <div className="hidden lg:flex lg:w-96 xl:w-[420px] flex-col justify-center px-8 py-8">
          
          {/* Estadísticas */}
          <div className={`transform transition-all duration-700 delay-600 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="bg-black/20 backdrop-blur-sm rounded-2xl border border-white/10 p-6 mb-6">
              <h3 className="text-white text-lg font-semibold mb-4">Nuestros Números</h3>
              <div className="space-y-4">
                {stats.map((stat, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-primary">{stat.number}</div>
                      <div className="text-sm text-gray-300">{stat.label}</div>
                      <div className="text-xs text-gray-500">{stat.sublabel}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Servicios destacados */}
          <div className={`transform transition-all duration-700 delay-700 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="bg-black/20 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
              <h3 className="text-white text-lg font-semibold mb-4">Servicios Principales</h3>
              <div className="space-y-3">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center gap-3 text-gray-300 text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    {service}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>     
    </section>
  );
};
