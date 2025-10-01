import { ContactSection } from "@/components/layout/sections/contact";
import { HeroSection } from "@/components/layout/sections/hero";
import { ProjectsSection } from "@/components/layout/sections/projects";
import { AboutSection } from "@/components/layout/sections/about";
import { ObraElectricaSection } from "@/components/layout/sections/obra-electrica";
import { EnergiaSolarSection } from "@/components/layout/sections/energia-solar";
import { ObraCivilSection } from "@/components/layout/sections/obra-civil";
import { CasosExitoSection } from "@/components/layout/sections/casos-exito";

export const metadata = {
  title: "Crateck | Soluciones de Ingeniería, Obra Civil y Eléctrica",
  description:
    "Confiabilidad, seguridad y eficiencia en cada proyecto. Agenda tu asesoría gratuita.",
  openGraph: {
    type: "website",
    url: "https://www.crateck.com",
    title: "Crateck | Ingeniería, Obra Civil y Eléctrica",
    description:
      "Soluciones industriales: instalaciones eléctricas, terracerías, alumbrado, subestaciones y más.",
    images: [
      {
        url: "https://res.cloudinary.com/demo/image/upload/sample.jpg",
        width: 1200,
        height: 630,
        alt: "Crateck - Ingeniería y Construcción",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://www.crateck.com",
    title: "Crateck | Ingeniería, Obra Civil y Eléctrica",
    description:
      "Soluciones industriales: instalaciones eléctricas, terracerías, alumbrado, subestaciones y más.",
    images: ["https://res.cloudinary.com/demo/image/upload/sample.jpg"],
  },
};

export default function Home() {
  return (
    <>
      {/* Inicio */}
      <HeroSection />

      {/* Obra Eléctrica */}
      <ObraElectricaSection />

      {/* Energía Solar */}
      <EnergiaSolarSection />

      {/* Obra Civil */}
      <ObraCivilSection />

      {/* Casos de Éxito */}
      <CasosExitoSection />

      {/* Proyectos */}
      <ProjectsSection />

      {/* Nosotros */}
      <AboutSection />

      {/* Contacto */}
      <ContactSection />
    </>
  );
}