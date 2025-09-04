import { FooterSection } from "@/components/layout/sections/footer";
import { ContactSection } from "@/components/layout/sections/contact";
import { HeroSection } from "@/components/layout/sections/hero";
import { SolutionsSection } from "@/components/layout/sections/solutions";
import { ProjectsSection } from "@/components/layout/sections/projects";
import { AboutSection } from "@/components/layout/sections/about";

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

      {/* Soluciones */}
      <SolutionsSection />

      {/* Proyectos */}
      <ProjectsSection />

      {/* Nosotros */}
      <AboutSection />

      {/* Contacto */}
      <ContactSection />

      {/* Footer */}
      <FooterSection />
    </>
  );
}
