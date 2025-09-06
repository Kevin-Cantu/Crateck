import { EquipmentRentalSection } from "@/components/obra-civil/EquipmentRentalSection";

export const metadata = {
  title: "Obra Civil | Crateck - Renta de Equipo y Construcción",
  description:
    "Servicios especializados en obra civil, terracerías y renta de equipo. Generadores, maquinaria pesada, grúas y más.",
  openGraph: {
    type: "website",
    url: "https://www.crateck.com/obra-civil",
    title: "Obra Civil | Crateck - Renta de Equipo y Construcción",
    description:
      "Servicios especializados en obra civil, terracerías y renta de equipo industrial.",
    images: [
      {
        url: "https://res.cloudinary.com/demo/image/upload/sample.jpg",
        width: 1200,
        height: 630,
        alt: "Crateck - Obra Civil y Renta de Equipo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://www.crateck.com",
    title: "Obra Civil | Crateck - Renta de Equipo y Construcción",
    description:
      "Servicios especializados en obra civil, terracerías y renta de equipo industrial.",
    images: ["https://res.cloudinary.com/demo/image/upload/sample.jpg"],
  },
};

export default function ObraCivilPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-muted/50 to-background py-24 sm:py-32">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Obra Civil y Renta de Equipo
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Especialistas en terracerías, cimentaciones y estructuras. 
              Además, renta de equipo industrial para tus proyectos.
            </p>
          </div>
        </div>
      </section>

      {/* Equipment Rental Section */}
      <EquipmentRentalSection />
    </>
  );
}