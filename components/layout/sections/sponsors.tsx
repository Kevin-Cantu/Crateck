"use client";

import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";
import Image from "next/image";
import Reveal from "@/components/Reveal";

interface Sponsor {
  logo: string;
  alt: string;
}

// No cambiamos el comportamiento del carrusel; solo tamaños y separación
const sponsors: Sponsor[] = [
  { logo: "/assets/Kinedu.png", alt: "Kinedu" },
  { logo: "/assets/gruposalinas.png", alt: "Grupo Salinas" },
  { logo: "/assets/axity.png", alt: "Axity" },
  { logo: "/assets/once.webp", alt: "Once" },
  { logo: "/assets/vonman.png", alt: "Vonman" },
  { logo: "/assets/crateclogo.png", alt: "Cratec" },
  { logo: "/assets/chocodrop.png", alt: "Chocodrop" },
  { logo: "/assets/upax.webp", alt: "Upax" },
];

export const SponsorsSection = () => {
  return (
    <section
      id="sponsors"
      aria-labelledby="sponsors-title"
      className="relative isolate overflow-hidden py-12"
    >
      {/* Acentos de fondo (coherentes con otras secciones) */}
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

          <Reveal
            as="h2"
            delayMs={60}
            id="sponsors-title"
            className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight"
          >
            <span className="bg-gradient-to-r from-slate-900 to-slate-600 dark:from-slate-100 dark:to-slate-400 bg-clip-text text-transparent">
              Marcas que confían en nosotros
            </span>
          </Reveal>

          <Reveal as="div" delayMs={120}>
            <div className="mx-auto mt-6 h-px w-40 bg-gradient-to-r from-transparent via-slate-300/80 to-transparent dark:via-white/20" />
          </Reveal>
        </div>

        {/* Carrusel de logos */}
        <Reveal as="div" delayMs={160} className="relative mx-auto mt-8 max-w-6xl">
          <div role="region" aria-label="Patrocinadores y clientes">
            <Marquee
              className="gap-6 sm:gap-8"
              fade
              innerClassName="gap-6 sm:gap-8"
              pauseOnHover
            >
              {sponsors.map(({ logo, alt }) => (
                <div key={alt} className="flex items-center">
                  <Image
                    src={logo}
                    alt={alt}
                    width={160}
                    height={80}
                    className="object-contain grayscale hover:grayscale-0 transition"
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
