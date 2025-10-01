import { EquipmentRentalSection } from "@/components/obra-civil/EquipmentRentalSection";

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
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-muted/50 to-background py-24 sm:py-32">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Renta de Equipo</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Soluciones de renta de maquinaria y equipo para tus proyectos industriales.
            </p>
          </div>
        </div>
      </section>

      {/* Equipment Rental Section */}
      <EquipmentRentalSection />
    </>
  );
}
