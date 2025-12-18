"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FieldLabel, FieldShell, FieldIcon } from "@/components/ui/field";
import { Mail, User, Sparkles } from "lucide-react";

export const NewsletterInlineSection = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitting, setSubmitting] = useState(false);

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

      // Success UX minimal to keep the section compact
      alert("¡Gracias por suscribirte!");
      setEmail(""); 
      setName("");
    } catch (err) {
      console.error("Error al suscribirse:", err);
      alert("Hubo un problema al registrarte. Intenta de nuevo más tarde.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="w-full bg-muted/20 border-t border-border mt-24  -mb-24" aria-labelledby="newsletter-inline-heading">
      <div className="container py-10 sm:py-12">
        <div className="flex items-center gap-2 mb-2 text-primary">
          <Sparkles className="h-4 w-4" />
          <span className="text-xs font-semibold tracking-wide uppercase">Novedades</span>
        </div>
        <h2 id="newsletter-inline-heading" className="text-xl sm:text-2xl font-semibold tracking-tight">
          Recibe noticias y casos de éxito en tu correo
        </h2>
        <p className="text-sm text-muted-foreground mt-1 mb-5">
          Te enviamos lo mejor, sin spam.
        </p>

        <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-5 gap-3">
          <div className="md:col-span-2">
            <FieldLabel htmlFor="inline-name" className="sr-only">Nombre</FieldLabel>
            <FieldShell>
              <FieldIcon>
                <User className="h-4 w-4" />
              </FieldIcon>
              <Input
                id="inline-name"
                placeholder="Tu nombre"
                className="border-0 bg-background focus-visible:ring-0 pl-10"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FieldShell>
          </div>
          <div className="md:col-span-2">
            <FieldLabel htmlFor="inline-email" className="sr-only">Correo</FieldLabel>
            <FieldShell>
              <FieldIcon>
                <Mail className="h-4 w-4" />
              </FieldIcon>
              <Input
                id="inline-email"
                type="email"
                placeholder="tu@correo.com"
                required
                className="border-0 bg-background focus-visible:ring-0 pl-10"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FieldShell>
          </div>
          <div className="md:col-span-1 flex ">
            <Button type="submit"   className="w-full mt-[7px] font-semibold" disabled={submitting}>
              {submitting ? "Enviando..." : "Suscribirme"}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default NewsletterInlineSection;
