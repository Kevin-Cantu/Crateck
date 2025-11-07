import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const FooterSection = () => {
  return (
    <footer className="w-full bg-muted/30 border-t border-border mt-24">
      <div className="container py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex font-bold items-center -mt-8 -ml-8">
              <Image
                src="/cratecklogo.png"
                alt="Logo Crateck"
                width={200}
                height={300}
                className="object-left"
                priority
              />
            </Link>
            <p className="text-sm text-muted-foreground mb-4 max-w-xs">
              Soluciones integrales de ingeniería, obra civil y eléctrica para la industria.
              Confiabilidad, seguridad y eficiencia en cada proyecto.
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <Link href="mailto:info@grupocrateck.com" className="hover:text-primary transition-colors">
                  info@grupocrateck.com
                </Link>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <Link href="tel:+528131295300" className="hover:text-primary transition-colors">
                  8131295300
                </Link>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span>México</span>
              </div>
            </div>
          </div>

          {/* Soluciones */}
          <div>
            <h3 className="font-semibold text-base mb-4">Soluciones</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/#obra-electrica" className="text-muted-foreground hover:text-primary transition-colors">
                  Obra eléctrica
                </Link>
              </li>
              <li>
                <Link href="/#energia-solar" className="text-muted-foreground hover:text-primary transition-colors">
                  Energía solar
                </Link>
              </li>
              <li>
                <Link href="/#obra-civil" className="text-muted-foreground hover:text-primary transition-colors">
                  Obra civil
                </Link>
              </li>
              <li>
                <Link href="/renta-de-equipo" className="text-muted-foreground hover:text-primary transition-colors">
                  Renta de maquinaria
                </Link>
              </li>
            </ul>
          </div>

          {/* Navegación */}
          <div>
            <h3 className="font-semibold text-base mb-4">Navegación</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/#proyectos-carousel" className="text-muted-foreground hover:text-primary transition-colors">
                  Proyectos
                </Link>
              </li>
              <li>
                <Link href="/#nosotros" className="text-muted-foreground hover:text-primary transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="/#contacto" className="text-muted-foreground hover:text-primary transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Información - espacio disponible para futuro contenido */}
          <div />
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Grupo Crateck. Todos los derechos reservados.</p>
          <p>Diseño y desarrollo con enfoque en seguridad y eficiencia.</p>
        </div>
      </div>
    </footer>
  );
};
