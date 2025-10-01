"use client";

import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";
import Reveal from "@/components/Reveal";

interface Cliente {
  logo: string;
  alt: string;
}

// Logos corregidos con rutas exactas
const clientes: Cliente[] = [
  { logo: "/acostaverde.png", alt: "Acosta Verde" },
  { logo: "/byp.jpeg", alt: "BYP" },
  { logo: "/cemix.webp", alt: "Cemix" },
  { logo: "/cesarlozano.png", alt: "César Lozano" },
  { logo: "/cinepolis.png", alt: "Cinépolis" },
  { logo: "/citadel.png", alt: "Citadel" },
  { logo: "/cummins.png", alt: "Cummins" },
  { logo: "/cymaq.png", alt: "Cymaq" },
  { logo: "/eleven.png", alt: "7-Eleven" },
  { logo: "/grupogp.png", alt: "Grupo GP" },
  { logo: "/heineken.png", alt: "Heineken" },
  { logo: "/lafuente.jpeg", alt: "La Fuente" },
  { logo: "/los olivos.png", alt: "Los Olivos" },
  { logo: "/mercedez benz.png", alt: "Mercedes Benz" },
  { logo: "/microsoft.png", alt: "Microsoft" },
  { logo: "/oro.png", alt: "Oro" },
  { logo: "/Plaforama.png", alt: "Plaforama" },
  { logo: "/qualitas.svg", alt: "Qualitas" },
  { logo: "/ruhrpumpen.png", alt: "Ruhrpumpen" },
  { logo: "/semsa.jpg", alt: "SEMSA" },
  { logo: "/sg ompi.jpg", alt: "SG Ompi" },
  { logo: "/sigma.png", alt: "Sigma" },
  { logo: "/SMA.svg", alt: "SMA" },
  { logo: "/spirax sarco.png", alt: "Spirax Sarco" },
  { logo: "/stiva.jpg", alt: "Stiva" },
  { logo: "/tonalli.jpg", alt: "Tonalli" },
  { logo: "/villasnizuc.png", alt: "Villas Nizuc" },
];

export const CasosExitoSection = () => {
  return (
    <section
      id="casos-exito"
      aria-labelledby="casos-exito-title"
      className="py-24 sm:py-32 bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-gray-900"
    >
      <div className="container -mt-12">
        {/* Nuestros Clientes */}
        <div className="text-center mb-16">
          <Reveal as="div" delayMs={0}>
            <h2 className="text-lg text-slate-600 dark:text-slate-400 mb-2 tracking-wider font-medium uppercase">
              Nuestros Clientes
            </h2>
          </Reveal>

          <Reveal
            as="h3"
            delayMs={60}
            id="casos-exito-title"
            className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 dark:text-slate-100 leading-tight"
          >
            Empresas que confían en nosotros
          </Reveal>

          <Reveal as="p" delayMs={120}>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Trabajamos con empresas líderes de diversos sectores, brindando soluciones de 
              ingeniería y construcción que superan expectativas.
            </p>
          </Reveal>
        </div>

        {/* Carrusel de clientes */}
        <Reveal
          as="div"
          delayMs={180}
          className="relative mx-auto max-w-7xl"
        >
          <div role="region" aria-label="Nuestros clientes">
            <Marquee
              className="gap-[4rem]"
              fade
              innerClassName="gap-[4rem]"
              pauseOnHover
            >
              {clientes.map(({ logo, alt }) => (
                <div key={alt} className="min-w-[160px] flex items-center justify-center">
                  <img
                    src={logo}
                    alt={alt}
                    className="max-h-16 max-w-36 object-contain filter hover:brightness-110 transition-all duration-300"
                    style={{ 
                      display: 'block',
                      opacity: 1,
                      visibility: 'visible'
                    }}
                  />
                </div>
              ))}
            </Marquee>
          </div>
        </Reveal>
      </div>
    </section>
  );
};