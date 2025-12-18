"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  CheckCircle,
  User,
  Briefcase,
  MessageSquare,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name: z.string().min(2, "Nombre muy corto").max(255),
  email: z.string().email("Email no válido"),
  phone: z
    .string()
    .optional()
    .refine(
      (val) => !val || val.replace(/[^\d]/g, "").length >= 7,
      "Número de teléfono no válido"
    ),
  subject: z.string().min(2).max(255),
  message: z.string().min(10, "Mensaje debe tener al menos 10 caracteres"),
});

export const ContactSection = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "Asesoría de proyecto",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const { name, email, subject, message, phone } = values;
    const contactInfoLines = [
      `Nombre: ${name}`,
      `Email: ${email}`,
      phone ? `Teléfono: ${phone}` : null,
    ].filter(Boolean) as string[];

    const body = [
      "Solicitud de contacto",
      "",
      ...contactInfoLines,
      "",
      `Tipo de proyecto: ${subject}`,
      "",
      "Mensaje:",
      message,
      "",
      "---",
      "Enviado desde el sitio web de Crateck",
    ].join("\n");

    const mailToLink = `mailto:info@grupocrateck.com?subject=${encodeURIComponent(
      `${subject} - ${name}`
    )}&body=${encodeURIComponent(body)}`;

    // Abrir el cliente de correo del usuario
    window.location.href = mailToLink;
  }

  const contactMethods = [
    {
      icon: Phone,
      title: "Teléfono",
      primary: "8131295300",
      action: "tel:+528131295300",
    },
    {
      icon: Mail,
      title: "Email",
      primary: "info@grupocrateck.com",
      action: "mailto:info@grupocrateck.com",
    },
    {
      icon: MapPin,
      title: "Ubicación",
      primary: "México",
      action: null as string | null,
    },
  ];

  const benefits = [
    "Asesoría técnica gratuita",
    "Cotización en 48 horas",
    "Diagnóstico inicial sin compromiso",
  ];

  return (
    <section id="contacto" className="relative py-24 -mb-24 overflow-hidden">
      {/* Fondo con gradientes usando la paleta */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/70 via-background to-background dark:from-secondary/20" />
        <div className="absolute -top-24 -right-24 h-[420px] w-[420px] rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-[420px] w-[420px] rounded-full bg-gradient-to-tr from-accent/20 to-primary/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.08),transparent_60%)]" />
      </div>

      <div className="container relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl text-slate-600 dark:text-slate-400 mb-1 tracking-wider font-medium">
            Contacto
          </h2>
          <h3 className="text-xl md:text-3xl font-bold mb-2">
            Agenda tu asesoría gratuita
          </h3>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Cuéntanos sobre tu proyecto. Diseñamos e implementamos soluciones a la medida.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Sidebar - Información y CTAs */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="bg-card/90 backdrop-blur border border-primary/10 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-base">
                  <MessageCircle className="w-4 h-4 text-primary" />
                  Contáctanos
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactMethods.map((method, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-lg bg-gradient-to-br from-muted/40 to-card border border-border/60 hover:from-muted/50 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded bg-gradient-to-br from-primary/15 to-accent/15">
                        <method.icon className="w-4 h-4 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-sm">{method.title}</div>
                        {method.action ? (
                          <a
                            href={method.action}
                            className="text-primary hover:text-primary/80 transition-colors break-words"
                          >
                            {method.primary}
                          </a>
                        ) : (
                          <div className="text-foreground">{method.primary}</div>
                        )}
                 
                      </div>
                    </div>
                  </div>
                ))}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                  {benefits.map((b, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 rounded-md border border-border/60 bg-muted/30 px-3 py-2 text-sm"
                    >
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-foreground/90">{b}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-border/60 pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Button
                    asChild
                    variant="secondary"
                    className="w-full "
                  >
                    <a href="tel:+528131295300">
                      <Phone className="w-4 h-4 mr-2" />
                      Llamar ahora
                    </a>
                  </Button>
                  <Button
                    asChild
                    className="w-full text-primary-foreground !bg-green-500  "
                  >
                    <a
                      href="https://wa.me/528131295300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Formulario */}
          <div className="lg:col-span-2">
            <Card className="bg-card/90 backdrop-blur border border-primary/10 shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-base md:text-lg">
                  Envíanos tu consulta
                </CardTitle>
       
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nombre *</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                              <Input
                                placeholder="Tu nombre"
                                className="pl-9"
                                {...field}
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email *</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <Input
                                  type="email"
                                  placeholder="tu@empresa.com"
                                  className="pl-9"
                                  {...field}
                                />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Teléfono (opcional)</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <Input
                                  type="tel"
                                  placeholder="8131295300"
                                  className="pl-9"
                                  {...field}
                                />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Tipo de proyecto *</FormLabel>
                          <div className="relative">
                            <Briefcase className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="pl-9">
                                  <SelectValue placeholder="Selecciona el tipo de proyecto" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="Asesoría de proyecto">
                                  Asesoría de proyecto
                                </SelectItem>
                                <SelectItem value="Desarrollo de ingeniería">
                                  Desarrollo de ingeniería
                                </SelectItem>
                                <SelectItem value="Obra civil">
                                  Obra civil y terracerías
                                </SelectItem>
                                <SelectItem value="Obra eléctrica">
                                  Instalaciones eléctricas
                                </SelectItem>
                                <SelectItem value="Mantenimiento">
                                  Mantenimiento y soporte
                                </SelectItem>
                                <SelectItem value="Otro">Otro</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Mensaje *</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                              <Textarea
                                rows={5}
                                placeholder="Cuéntanos detalles sobre tu proyecto"
                                className="resize-none pl-9"
                                {...field}
                              />
                            </div>
                          </FormControl>
                          <FormDescription>
                            Cuanta más información compartas, mejor podremos ayudarte.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="w-full !bg-primary font-semibold px-5 py-2.5 text-sm text-primary-foreground "
                      disabled={form.formState.isSubmitting}
                    >
                      {form.formState.isSubmitting ? "Enviando..." : "Enviar consulta"}
                    </Button>
                    <p className="text-[11px] text-muted-foreground text-center">
                      Al enviar este formulario, se abrirá tu cliente de correo para completar el envío.
                    </p>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
