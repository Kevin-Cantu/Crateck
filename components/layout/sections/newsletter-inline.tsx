"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FieldLabel, FieldShell, FieldIcon } from "@/components/ui/field";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Mail, User, Sparkles } from "lucide-react";

const newsletterSchema = z.object({
  name: z.string().min(2, "Escribir nombre").max(255),
  email: z.string().email("Correo no válido"),
});

export const NewsletterInlineSection = () => {
  const [submitting, setSubmitting] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alert, setAlert] = useState<{
    type: "default" | "destructive";
    message: string;
  } | null>(null);

  const form = useForm<z.infer<typeof newsletterSchema>>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: { name: "", email: "" },
  });

  const onSubmit = async (values: z.infer<typeof newsletterSchema>) => {
    if (submitting) return;
    setSubmitting(true);

    try {
      const res = await fetch("/api/suscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await res.json();
      if (!res.ok || data.error) {
        throw new Error(data.error?.message || "Error al suscribirse");
      }

      setAlert({
        type: "default",
        message: "¡Gracias por suscribirte!",
      });

      form.reset();
    } catch (err) {
      setAlert({
        type: "destructive",
        message: "Hubo un problema al registrarte. Intenta más tarde.",
      });
    } finally {
      setShowAlert(true);
      setSubmitting(false);

      setTimeout(() => {
        setShowAlert(false);
        setAlert(null);
      }, 3500);
    }
  };

  return (
    <>
      {/* 🔔 Toast / Dialog */}
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

      {/* 📩 Newsletter */}
      <section className="w-full bg-muted/20 border-t border-border mt-24 -mb-24">
        <div className="container py-10 sm:py-12">
          <div className="flex items-center gap-2 mb-2 text-primary">
            <Sparkles className="h-4 w-4" />
            <span className="text-xs font-semibold uppercase tracking-wide">
              Novedades
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">
            Recibe noticias y casos de éxito en tu correo
          </h2>

          <p className="text-sm text-muted-foreground mt-1 mb-5">
            Te enviamos lo mejor, sin spam.
          </p>

          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid grid-cols-1 md:grid-cols-5 gap-3"
          >
            <div className="md:col-span-2">
              <FieldLabel className="sr-only">Nombre</FieldLabel>
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
              <p className="text-xs text-red-500 mt-1">
                {form.formState.errors.name?.message}
              </p>
            </div>

            <div className="md:col-span-2">
              <FieldLabel className="sr-only">Correo</FieldLabel>
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
              <p className="text-xs text-red-500 mt-1">
                {form.formState.errors.email?.message}
              </p>
            </div>

            <div className="md:col-span-1 flex">
              <Button
                type="submit"
                className="w-full mt-[7px] font-semibold"
                disabled={submitting}
              >
                {submitting ? "Enviando..." : "Suscribirme"}
              </Button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default NewsletterInlineSection;