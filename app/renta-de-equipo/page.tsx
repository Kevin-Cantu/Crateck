import { EquipmentRentalSection } from "@/components/layout/sections/equipment-rental";
import { RentalHeroSection } from "@/components/layout/sections/rental-hero";

export const metadata = {
  title: "Renta de Equipo | Crateck - Maquinaria y Soluciones Industriales",
  description:
    "Renta de equipo industrial: generadores, grúas, maquinaria pesada y más para tus proyectos.",
  openGraph: {
    type: "website",
    url: "https://www.crateck.com/renta-de-equipo",
    title: "Renta de Equipo | Crateck - Maquinaria y Soluciones Industriales",
    description:
      "Renta de equipo industrial para obra y proyectos: generadores, grúas, maquinaria pesada y más.",
    images: [
      {
        url: "https://res.cloudinary.com/demo/image/upload/sample.jpg",
        width: 1200,
        height: 630,
        alt: "Crateck - Renta de Equipo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://www.crateck.com",
    title: "Renta de Equipo | Crateck - Maquinaria y Soluciones Industriales",
    description:
      "Renta de equipo industrial para obra y proyectos: generadores, grúas, maquinaria pesada y más.",
    images: ["https://res.cloudinary.com/demo/image/upload/sample.jpg"],
  },
};

export default function RentaDeEquipoPage() {
  return (
    <>
      {/* Hero minimalista para renta de equipo */}
      <RentalHeroSection />

      {/* Listado / Catálogo */}
      <EquipmentRentalSection />
    </>
  );
}
