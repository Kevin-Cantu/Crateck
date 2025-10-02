"use client";

import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";
import Image from "next/image";
import Reveal from "@/components/Reveal";

interface Sponsor {
  logo: string;
  alt: string;
}

// Usar logos disponibles en public/
const sponsors: Sponsor[] = [
  { logo: "/cinepolis.png", alt: "Cinépolis" },
  { logo: "/microsoft.png", alt: "Microsoft" },
  { logo: "/lafuente.jpeg", alt: "La Fuente" },
  { logo: "/grupogp.png", alt: "Grupo GP" },
  { logo: "/heineken.png", alt: "Heineken" },
  { logo: "/qualitas.svg", alt: "Qualitas" },
  { logo: "/ruhrpumpen.png", alt: "Ruhrpumpen" },
  { logo: "/spirax sarco.png", alt: "Spirax Sarco" },
  { logo: "/semsa.jpg", alt: "SemsA" },
  { logo: "/stiva.jpg", alt: "Stiva" },
  { logo: "/sigma.png", alt: "Sigma" },
  { logo: "/citadel.png", alt: "Citadel" },
  { logo: "/cummins.png", alt: "Cummins" },
  { logo: "/eleven.png", alt: "Eleven" },
];

export const SponsorsSection = () => {
  return (
    <section id="sponsors" aria-labelledby="sponsors-title" className="relative isolate overflow-hidden py-12">
      {/* Acentos de fondo */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-100/50 to-transparent dark:via-white/5" />
        <div className="absolute -top-12 -left-10 h-48 w-48 rounded-full bg-primary-500/5 blur-2xl" />
        <div className="absolute -bottom-14 -right-14 h-56 w-56 rounded-full bg-violet-400/10 blur-3xl" />
      </div>

      <div className="container-custom">
        {/* Encabezado */}
        <div className="text-center">
          <Reveal as="div" delayMs={0}>
            <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-slate-300/60 bg-white/60 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm backdrop-blur dark:border-white/15 dark:bg-white/10 dark:text-white/90">
              Nuestros clientes
            </div>
          </Reveal>

          <Reveal as="h2" delayMs={60} id="sponsors-title" className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
            <span className="bg-gradient-to-r from-slate-900 to-slate-600 dark:from-slate-100 dark:to-slate-400 bg-clip-text text-transparent">
              Marcas que confían en nosotros
            </span>
          </Reveal>

          <Reveal as="div" delayMs={120}>
            <div className="mx-auto mt-6 h-px w-40 bg-gradient-to-r from-transparent via-slate-300/80 to-transparent dark:via-white/20" />
          </Reveal>
        </div>

        {/* Mobile: doble carrusel en sentidos opuestos */}
        <Reveal as="div" delayMs={160} className="relative mx-auto mt-8 max-w-6xl md:hidden">
          <div role="region" aria-label="Patrocinadores y clientes - móvil" className="space-y-4">
            {/* Superior (dirección normal) */}
            <Marquee className="gap-4" innerClassName="gap-4" pauseOnHover>
              {sponsors.map(({ logo, alt }) => (
                <div key={`m1-${alt}`} className="flex items-center">
                  <Image src={logo} alt={alt} width={140} height={70} className="object-contain grayscale hover:grayscale-0 transition" />
                </div>
              ))}
            </Marquee>

            {/* Inferior (dirección opuesta) */}
            <Marquee className="gap-4" innerClassName="gap-4" pauseOnHover reverse>
              {sponsors.map(({ logo, alt }) => (
                <div key={`m2-${alt}`} className="flex items-center">
                  {/* Usar <img> simple para evitar lazy-loading en móviles que podría ocultar */}
                  <img src={logo} alt={alt} width={140} height={70} className="object-contain grayscale hover:grayscale-0 transition" />
                </div>
              ))}
            </Marquee>
          </div>
        </Reveal>

        {/* Desktop: un solo carrusel */}
        <Reveal as="div" delayMs={160} className="relative mx-auto mt-8 max-w-6xl hidden md:block">
          <div role="region" aria-label="Patrocinadores y clientes - desktop">
            <Marquee className="gap-8" innerClassName="gap-8" pauseOnHover>
              {sponsors.map(({ logo, alt }) => (
                <div key={`d-${alt}`} className="flex items-center">
                  <Image src={logo} alt={alt} width={160} height={80} className="object-contain grayscale hover:grayscale-0 transition" />
                </div>
              ))}
            </Marquee>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
