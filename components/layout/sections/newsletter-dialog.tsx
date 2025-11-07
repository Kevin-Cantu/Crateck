"use client";

import { useEffect, useState, useCallback } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FieldLabel, FieldShell, FieldIcon } from "@/components/ui/field";
import { Mail, User, Sparkles } from "lucide-react";
import Image from "next/image";

export const NewsletterDialogSection = () => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitting, setSubmitting] = useState(false);

  // Only show once per session to avoid spamming users
  const shouldShow = useCallback(() => {
    if (typeof window === "undefined") return false;
    return sessionStorage.getItem("newsletter_shown") !== "1";
  }, []);

  useEffect(() => {
    if (!shouldShow()) return;

    const onScroll = () => {
      const y = window.scrollY || document.documentElement.scrollTop;
      if (y >= 400) {
        setOpen(true);
        sessionStorage.setItem("newsletter_shown", "1");
        window.removeEventListener("scroll", onScroll);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [shouldShow]);
  
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
  
    try {
      const res = await fetch("/api/suscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name }),
      });
  
      const data = await res.json();

      if (!res.ok || data.error) {
        throw new Error(data.error?.message || data.error || "Error al suscribirse");
      }
  
      alert("✅ ¡Gracias por suscribirte! Revisa tu correo para confirmar tu suscripción.");
      setOpen(false);
      setEmail("");
      setName("");
    } catch (err) {
      console.error("❌ Error al suscribirse:", err);
      alert("Hubo un problema al registrarte. Intenta de nuevo más tarde.");
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-2xl p-0 overflow-hidden border border-border/60 bg-card">
        {/* Mobile-only hero header (no changes to desktop) */}
        <div className="md:hidden relative h-40 sm:h-48">
          <Image
            src="/maquinaria/maquinariainicio.jpeg"
            alt="Ingeniería y maquinaria en acción"
            fill
            sizes="100vw"
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/20 to-background/70" />
          <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_80px_rgba(0,0,0,0.45)]" />
          <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/90 text-primary-foreground px-2 py-0.5 text-[10px] font-medium">
              <Sparkles className="h-3 w-3" /> Novedades mensuales
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-5">
          {/* Side panel with image (desktop only) */}
          <div className="hidden md:block md:col-span-2 relative">
            <Image
              src="/maquinaria/maquinariainicio.jpeg"
              alt="Ingeniería y maquinaria en acción"
              fill
              sizes="(max-width: 768px) 0px, 40vw"
              priority
              className="object-cover"
            />
            {/* Gradient overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/0 to-background/40" />
            {/* Vignette/shadow overlay over the image area for better contrast */}
            <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.45)]" />
            {/* Badge and caption */}
            <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/90 text-primary-foreground px-2.5 py-1 text-[11px] font-medium">
                <Sparkles className="h-3.5 w-3.5" />
                Novedades mensuales
              </div>
              <div className="mt-2">
                <h4
                  className="text-sm font-semibold text-foreground"
                  style={{ textShadow: "0 1px 2px rgba(0,0,0,0.6), 0 2px 8px rgba(0,0,0,0.35)" }}
                >
                  Mejora tus proyectos
                </h4>
                <p
                  className="text-xs text-foreground/90"
                  style={{ textShadow: "0 1px 2px rgba(0,0,0,0.6)" }}
                >
                  Ideas, casos de éxito y tendencias para ingeniería, obra civil y eléctrica.
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="md:col-span-3 p-6 sm:p-8">
            <DialogHeader className="mb-2">
              <div className="hidden md:inline-flex items-center gap-2 rounded-full bg-primary/10 px-2.5 py-1 text-[11px] w-32 font-medium text-primary">
                <Sparkles className="h-3.5 w-3.5" />
                Únete a la lista
              </div>
              <DialogTitle className="text-2xl">
              <span className="bg-gradient-to-r from-primary via-primary/80 to-accent text-transparent bg-clip-text">
                  Recibe noticias, casos de éxito y tendencias directamente en tu correo.
                </span>
              </DialogTitle>
            
            </DialogHeader>

            <form onSubmit={onSubmit} className="space-y-4 mt-2">
              <div className="grid gap-2">
                <FieldLabel htmlFor="newsletter-name">Nombre</FieldLabel>
                <FieldShell>
                  <FieldIcon>
                    <User className="h-4 w-4" />
                  </FieldIcon>
                  <Input
                    id="newsletter-name"
                    placeholder="Tu nombre"
                    className="border-0 bg-transparent focus-visible:ring-0 h-11 pl-10"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </FieldShell>
              </div>
              <div className="grid gap-2">
                <FieldLabel htmlFor="newsletter-email">Correo electrónico</FieldLabel>
                <FieldShell>
                  <FieldIcon>
                    <Mail className="h-4 w-4" />
                  </FieldIcon>
                  <Input
                    id="newsletter-email"
                    type="email"
                    placeholder="tu@correo.com"
                    required
                    className="border-0 bg-transparent focus-visible:ring-0 h-11 pl-10"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FieldShell>
              </div>


              <DialogFooter className="gap-2 sm:gap-3 pt-2">
                <Button type="button" variant="secondary" onClick={() => setOpen(false)}>
                  Ahora no
                </Button>
                <Button type="submit" className="font-semibold" disabled={submitting}>
                  {submitting ? "Enviando..." : "Suscribirme"}
                </Button>
              </DialogFooter>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NewsletterDialogSection;
