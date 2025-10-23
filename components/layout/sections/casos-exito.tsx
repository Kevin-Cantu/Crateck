"use client";

import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";
import Reveal from "@/components/Reveal";

interface Cliente {
  logo: string;
  alt: string;
}

// Logos disponibles en public/
const clientes: Cliente[] = [
  { logo: "/acostaverde.png", alt: "Acosta Verde" },
  { logo: "/byp.jpeg", alt: "BYP" },
  { logo: "/cemix.webp", alt: "Cemix" },
  { logo: "/cesarlozano.png", alt: "César Lozano" },
  { logo: "/cinepolis.png", alt: "Cinépolis" },
  { logo: "/citadel.png", alt: "Citadel" },
  { logo: "/cummins.png", alt: "Cummins" },
  { logo: "/cymaq.png", alt: "Cymaq" },
  { logo: "/seven.webp", alt: "7-Eleven" },
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
  { logo: "/spirax.webp", alt: "Spirax Sarco" },
  { logo: "/stiva.jpg", alt: "Stiva" },
  { logo: "/tonalli.jpg", alt: "Tonalli" },
  { logo: "/villasnizuc.png", alt: "Villas Nizuc" },
];

export const CasosExitoSection = () => {
  // Handler para bloquear clics/taps en los logos
  const blockPointer = (e: React.PointerEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <section
      id="casos-exito"
      aria-labelledby="casos-exito-title"
      className="py-24   bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-gray-900"
    >
      <div className="container ">
        {/* Nuestros Clientes */}
        <div className="text-center mb-16">
          <Reveal as="div" delayMs={0}>
            <h2 className="text-3xl sm:text-4xl text-slate-600 dark:text-slate-400 mb-2 tracking-wider font-medium uppercase">
              Nuestros Clientes
            </h2>
          </Reveal>

          <Reveal
            as="h3"
            delayMs={60}
            id="casos-exito-title"
            className="text-xl md:text-3xl font-bold mb-6 text-slate-900 dark:text-slate-100 leading-tight"
          >
            Empresas que confían en nosotros
          </Reveal>

          {/* Evitar p dentro de p para no romper hidratación */}

        </div>

        {/* Móvil: doble carrusel en sentidos opuestos, sin click */}
        <Reveal as="div" delayMs={180} className="relative mx-auto max-w-7xl md:hidden space-y-4">
          <div role="region" aria-label="Nuestros clientes (móvil fila 1)">
            <Marquee className="gap-4" innerClassName="gap-4">
              {clientes.map(({ logo, alt }) => (
                <div key={`m1-${alt}`} className="min-w-[30px] flex items-center justify-center" onPointerDown={blockPointer}>
                  <img
                    src={logo}
                    alt={alt}
                    draggable={false}
                    className="max-h-24 max-w-30 select-none object-contain filter hover:brightness-110 transition-all duration-300"
                    style={{ display: 'block', opacity: 1, visibility: 'visible' }}
                  />
                </div>
              ))}
            </Marquee>
          </div>
          <div role="region" aria-label="Nuestros clientes (móvil fila 2)">
            <Marquee className="gap-4" innerClassName="gap-4" reverse>
              {clientes.map(({ logo, alt }) => (
                <div key={`m2-${alt}`} className="min-w-[30px] flex items-center justify-center" onPointerDown={blockPointer}>
                  <img
                    src={logo}
                    alt={alt}
                    draggable={false}
                    className="max-h-24 max-w-30 select-none object-contain filter hover:brightness-110 transition-all duration-300"
                    style={{ display: 'block', opacity: 1, visibility: 'visible' }}
                  />
                </div>
              ))}
            </Marquee>
          </div>
        </Reveal>

        {/* Desktop: un solo carrusel, sin click */}
        <Reveal as="div" delayMs={180} className="relative mx-auto w-full -ml-56 md:w-[133%] hidden md:block ">
          <div role="region" aria-label="Nuestros clientes">
            <Marquee className="gap-[4rem]" innerClassName="gap-[4rem]">
              {clientes.map(({ logo, alt }) => (
                <div key={`d-${alt}`} className="min-w-[30px] flex items-center justify-center" onPointerDown={blockPointer}>
                  <img
                    src={logo}
                    alt={alt}
                    draggable={false}
                    className="max-h-24 max-w-30 select-none object-contain filter hover:brightness-110 transition-all duration-300"
                    style={{ display: 'block', opacity: 1, visibility: 'visible' }}
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
