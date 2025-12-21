"use client";

import { useEffect, useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FieldLabel, FieldShell, FieldIcon } from "@/components/ui/field";
import { Mail, User, Sparkles } from "lucide-react";
import Image from "next/image";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

const newsletterSchema = z.object({
  name: z.string().min(2, "Escribir nombre").max(255),
  email: z.string().email("Correo no válido"),
});

export const NewsletterDialogSection = () => {
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const [alert, setAlert] = useState<{ type: "success" | "destructive"; message: string } | null>(null);
  const [showAlert, setShowAlert] = useState(false);

  const form = useForm<z.infer<typeof newsletterSchema>>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: { name: "", email: "" },
  });

  // Mostrar modal solo si el usuario no se ha suscrito
  const shouldShow = useCallback(() => {
    if (typeof window === "undefined") return false;
    return localStorage.getItem("newsletter_subscribed") !== "1";
  }, []);

  useEffect(() => {
    if (!shouldShow()) return;

    const onScroll = () => {
      const y = window.scrollY || document.documentElement.scrollTop;
      if (y >= 400) {
        setOpen(true);
        window.removeEventListener("scroll", onScroll);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [shouldShow]);

  const onSubmit = async (values: z.infer<typeof newsletterSchema>) => {
    if (submitting) return;
    setSubmitting(true);

    try {
      // Aquí iría tu fetch o API de suscripción
      // await fetch("/api/suscribe", { ... });

      // Guardamos que ya se suscribió
      localStorage.setItem("newsletter_subscribed", "1");

      setAlert({ type: "success", message: "¡Gracias por suscribirte!" });
      setShowAlert(true);
      form.reset();
      setOpen(false);
    } catch (err: any) {
      console.error("Error al suscribirse:", err);
      setAlert({ type: "destructive", message: err.message || "Hubo un problema al registrarte." });
      setShowAlert(true);
    } finally {
      setSubmitting(false);
    }
  };

  // Auto-hide alert
  useEffect(() => {
    if (!showAlert) return;
    const timer = setTimeout(() => setShowAlert(false), 2500);
    return () => clearTimeout(timer);
  }, [showAlert]);

  return (
    <>
      {/* Alert centrado arriba */}
      <div
        className={`
          fixed left-1/2 z-[9999] w-full max-w-md -translate-x-1/2
          transition-transform duration-500 ease-out
          ${showAlert ? "top-4 translate-y-0" : "-top-24 translate-y-0"}
        `}
      >
        {alert && (
          <Alert>
            <AlertTitle>
              {alert.type === "destructive" ? "Error" : "Todo listo"}
            </AlertTitle>
            <AlertDescription>{alert.message}</AlertDescription>
          </Alert>
        )}
      </div>

      {/* Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-2xl p-0 overflow-hidden border border-border/60 bg-card">
          {/* Imagen mobile */}
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
          </div>

          <div className="grid md:grid-cols-5">
            {/* Imagen desktop */}
            <div className="hidden md:block md:col-span-2 relative">
              <Image
                src="/maquinaria/maquinariainicio.jpeg"
                alt="Ingeniería y maquinaria en acción"
                fill
                sizes="(max-width: 768px) 0px, 40vw"
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/0 to-background/40" />
            </div>

            {/* Contenido */}
            <div className="md:col-span-3 p-6 sm:p-8">
              <DialogHeader className="mb-2">
                <DialogTitle className="text-2xl">
                  <span className="bg-gradient-to-r from-primary via-primary/80 to-accent text-transparent bg-clip-text">
                    Recibe noticias, casos de éxito y tendencias directamente en tu correo.
                  </span>
                </DialogTitle>
              </DialogHeader>

              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-3">
                <div className="grid gap-1">
                  <FieldLabel htmlFor="newsletter-name">Nombre</FieldLabel>
                  <FieldShell>
                    <FieldIcon>
                      <User className="h-4 w-4" />
                    </FieldIcon>
                    <Input
                      placeholder="Tu nombre"
                      className="border-0 bg-background pl-10"
                      {...form.register("name")}
                    />
                  </FieldShell>
                  <p className="text-xs text-red-500 mt-1">{form.formState.errors.name?.message}</p>
                </div>

                <div className="grid gap-1">
                  <FieldLabel htmlFor="newsletter-email">Correo electrónico</FieldLabel>
                  <FieldShell>
                    <FieldIcon>
                      <Mail className="h-4 w-4" />
                    </FieldIcon>
                    <Input
                      type="text"
                      placeholder="tu@correo.com"
                      className="border-0 bg-background pl-10"
                      {...form.register("email")}
                    />
                  </FieldShell>
                  <p className="text-xs text-red-500 mt-1">{form.formState.errors.email?.message}</p>
                </div>

                <DialogFooter className="gap-2 sm:gap-3 pt-2">
                  <Button
                    type="button"
                    variant="destructive"
                    className="p-2 text-black/80  dark:text-white"
                    onClick={() => setOpen(false)}
                  >
                    Ahora no
                  </Button>
                  <Button type="submit" className="font-semibold p-2" disabled={submitting}>
                    {submitting ? "Enviando..." : "Suscribirme"}
                  </Button>
                </DialogFooter>
              </form>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default NewsletterDialogSection;