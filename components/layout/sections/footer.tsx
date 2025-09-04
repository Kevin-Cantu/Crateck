import { Separator } from "@/components/ui/separator";
import { Building2 } from "lucide-react";
import Link from "next/link";

export const FooterSection = () => {
  return (
    <footer id="footer" className="container py-24 sm:py-32">
      <div className="p-10 bg-card border border-secondary rounded-2xl">
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
          {/* Brand */}
          <div className="col-span-full xl:col-span-2">
            <Link href="#" className="flex font-bold items-center">
              <Building2 className="w-9 h-9 mr-2 bg-gradient-to-tr from-primary via-primary/70 to-primary rounded-lg border border-secondary text-white" />
              <h3 className="text-2xl">Crateck</h3>
            </Link>
            <p className="mt-3 text-sm text-muted-foreground">
              Soluciones de ingeniería, obra civil y eléctrica para la industria.
            </p>
          </div>

          {/* Navegación */}
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-base">Navegación</h3>
            <ul className="space-y-1 text-sm">
              <li><Link href="#soluciones" className="opacity-70 hover:opacity-100 transition">Soluciones</Link></li>
              <li><Link href="#proyectos" className="opacity-70 hover:opacity-100 transition">Proyectos</Link></li>
              <li><Link href="#nosotros" className="opacity-70 hover:opacity-100 transition">Nosotros</Link></li>
              <li><Link href="#contacto" className="opacity-70 hover:opacity-100 transition">Contacto</Link></li>
            </ul>
          </div>

          {/* Contacto */}
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-base">Contacto</h3>
            <ul className="space-y-1 text-sm">
              <li><Link href="mailto:contacto@crateck.com" className="opacity-70 hover:opacity-100 transition">contacto@crateck.com</Link></li>
              <li><span className="opacity-70">+52 (000) 000-0000</span></li>
              <li><span className="opacity-70">Dirección de la empresa</span></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-base">Legal</h3>
            <ul className="space-y-1 text-sm">
              <li><Link href="#" className="opacity-70 hover:opacity-100 transition">Aviso de privacidad</Link></li>
              <li><Link href="#" className="opacity-70 hover:opacity-100 transition">Términos y condiciones</Link></li>
            </ul>
          </div>
        </div>

        <Separator className="my-6" />
        <section className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-sm">
          <p className="opacity-70">&copy; {new Date().getFullYear()} Crateck. Todos los derechos reservados.</p>
          <p className="opacity-70">Diseño y desarrollo con enfoque en seguridad y eficiencia.</p>
        </section>
      </div>
    </footer>
  );
};
