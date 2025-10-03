"use client";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Clock, Mail, Phone, MapPin, MessageCircle, CheckCircle } from "lucide-react";
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
  subject: z.string().min(2).max(255),
  message: z.string().min(10, "Mensaje debe tener al menos 10 caracteres"),
});

export const ContactSection = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "Asesoría de proyecto",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const { name, email, subject, message } = values;
    const contactInfo = `${name} (${email})`;
    const mailToLink = `mailto:contacto@crateck.com?subject=${encodeURIComponent(
      `${subject} - ${name}`
    )}&body=${encodeURIComponent(
      `Solicitud de contacto:\n\n${contactInfo}\n\nMensaje:\n${message}\n\n---\nEnviado desde el sitio web de Crateck`
    )}`;
    window.location.href = mailToLink;
  }

  const contactMethods = [
    { icon: Phone, title: "Teléfono", primary: "+52 (xxx) xxx-xxxx", secondary: "Lun - Vie, 8:00 - 18:00 hrs", action: "tel:+52xxxxxxxxxx" },
    { icon: Mail, title: "Email", primary: "contacto@crateck.com", secondary: "Te respondemos en 24 hrs", action: "mailto:contacto@crateck.com" },
    { icon: MapPin, title: "Ubicación", primary: "México", secondary: "Servicio en toda la república", action: null as string | null },
  ];

  const benefits = [
    "Asesoría técnica gratuita",
    "Cotización en 48 horas",
    "Diagnóstico inicial sin compromiso",
  ];

  return (
    <section id="contacto" className="py-16 scroll-mt-20  md:py-20 bg-gradient-to-br from-muted/20 to-background">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="text-lg text-primary mb-1 tracking-wider font-medium">Contacto</h2>
          <h3 className="text-2xl md:text-4xl font-bold mb-2">Agenda tu asesoría gratuita</h3>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Cuéntanos sobre tu proyecto. Diseñamos e implementamos soluciones a la medida.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* Información de contacto */}
          <div className="lg:col-span-1 space-y-4">
            <Card className="bg-card">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-base">
                  <MessageCircle className="w-4 h-4 text-primary" />
                  Contáctanos
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {contactMethods.map((method, index) => (
                  <div key={index} className="p-3 rounded-lg bg-muted/40">
                    <div className="flex items-start gap-3">
                      <div className="p-1.5 bg-primary/10 rounded">
                        <method.icon className="w-4 h-4 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-sm">{method.title}</div>
                        {method.action ? (
                          <a href={method.action} className="text-primary hover:text-primary/80 transition-colors">
                            {method.primary}
                          </a>
                        ) : (
                          <div className="text-foreground">{method.primary}</div>
                        )}
                        <div className="text-xs text-muted-foreground mt-1">{method.secondary}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-card">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-base">
                  <Clock className="w-4 h-4 text-primary" />
                  Horario
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-1.5 text-sm">
                  <div className="flex justify-between"><span>Lunes - Viernes</span><span className="font-medium">8:00 - 18:00</span></div>
                  <div className="flex justify-between"><span>Sábados</span><span className="font-medium">9:00 - 14:00</span></div>
                  <div className="flex justify-between text-muted-foreground"><span>Domingos</span><span>Cerrado</span></div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Formulario */}
          <div className="lg:col-span-2">
            <Card className="bg-card">
              <CardHeader className="pb-3">
                <CardTitle className="text-base md:text-lg">Envíanos tu consulta</CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nombre *</FormLabel>
                          <FormControl>
                            <Input placeholder="Tu nombre" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid md:grid-cols-2 gap-3">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email *</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="tu@empresa.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Tipo de proyecto *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Selecciona el tipo de proyecto" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="Asesoría de proyecto">Asesoría de proyecto</SelectItem>
                                <SelectItem value="Desarrollo de ingeniería">Desarrollo de ingeniería</SelectItem>
                                <SelectItem value="Obra civil">Obra civil y terracerías</SelectItem>
                                <SelectItem value="Obra eléctrica">Instalaciones eléctricas</SelectItem>
                                <SelectItem value="Mantenimiento">Mantenimiento y soporte</SelectItem>
                                <SelectItem value="Otro">Otro</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Mensaje *</FormLabel>
                          <FormControl>
                            <Textarea rows={4} placeholder="Cuéntanos detalles sobre tu proyecto" className="resize-none" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" className="w-full font-semibold px-5 py-2.5 text-sm">
                      Enviar consulta
                    </Button>
                    <p className="text-[11px] text-muted-foreground text-center">
                      Al enviar este formulario, aceptas que nos pongamos en contacto contigo.
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
