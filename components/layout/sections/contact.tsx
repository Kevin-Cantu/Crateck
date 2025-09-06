"use client";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Clock, Mail, Phone, MapPin, MessageCircle, CheckCircle } from "lucide-react";
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
  firstName: z.string().min(2, "Nombre muy corto").max(255),
  lastName: z.string().min(2, "Apellido muy corto").max(255),
  email: z.string().email("Email no válido"),
  phone: z.string().min(10, "Teléfono debe tener al menos 10 dígitos").optional(),
  company: z.string().optional(),
  subject: z.string().min(2).max(255),
  message: z.string().min(10, "Mensaje debe tener al menos 10 caracteres"),
});

export const ContactSection = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      subject: "Asesoría de proyecto",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const { firstName, lastName, email, phone, company, subject, message } = values;
    const contactInfo = `${firstName} ${lastName} (${email})${phone ? ` - Tel: ${phone}` : ''}${company ? ` - Empresa: ${company}` : ''}`;
    const mailToLink = `mailto:contacto@crateck.com?subject=${encodeURIComponent(
      `${subject} - ${firstName} ${lastName}`
    )}&body=${encodeURIComponent(
      `Solicitud de contacto:\n\n${contactInfo}\n\nMensaje:\n${message}\n\n---\nEnviado desde el sitio web de Crateck`
    )}`;
    window.location.href = mailToLink;
  }

  const contactMethods = [
    {
      icon: Phone,
      title: "Teléfono",
      primary: "+52 (xxx) xxx-xxxx",
      secondary: "Lun - Vie, 8:00 - 18:00 hrs",
      action: "tel:+52xxxxxxxxxx"
    },
    {
      icon: Mail,
      title: "Email",
      primary: "contacto@crateck.com",
      secondary: "Te respondemos en 24 hrs",
      action: "mailto:contacto@crateck.com"
    },
    {
      icon: MapPin,
      title: "Ubicación",
      primary: "México",
      secondary: "Servicio en toda la república",
      action: null
    }
  ];

  const benefits = [
    "Asesoría técnica especializada gratuita",
    "Cotización detallada en 48 horas",
    "Diagnóstico inicial sin compromiso",
    "Propuesta personalizada a tu proyecto"
  ];

  return (
    <section id="contacto" className="py-24 sm:py-32 bg-gradient-to-br from-muted/30 to-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-lg text-primary mb-2 tracking-wider font-medium">Contacto</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Agenda tu asesoría gratuita
          </h3>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Cuéntanos sobre tu proyecto. Diseñamos e implementamos soluciones a la medida 
            con enfoque en seguridad, eficiencia y cumplimiento normativo.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Información de contacto */}
          <div className="lg:col-span-1 space-y-6">
            {/* Métodos de contacto */}
            <Card className="bg-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-primary" />
                  Contáctanos directamente
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactMethods.map((method, index) => (
                  <div key={index} className="p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <method.icon className="w-4 h-4 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-sm">{method.title}</div>
                        {method.action ? (
                          <a 
                            href={method.action} 
                            className="text-primary hover:text-primary/80 transition-colors"
                          >
                            {method.primary}
                          </a>
                        ) : (
                          <div className="text-foreground">{method.primary}</div>
                        )}
                        <div className="text-xs text-muted-foreground mt-1">
                          {method.secondary}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Beneficios */}
            <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
              <CardHeader>
                <CardTitle className="text-lg">¿Qué incluye tu consulta?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Horario */}
            <Card className="bg-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Clock className="w-5 h-5 text-primary" />
                  Horario de atención
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Lunes - Viernes</span>
                    <span className="font-medium">8:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sábados</span>
                    <span className="font-medium">9:00 - 14:00</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Domingos</span>
                    <span>Cerrado</span>
                  </div>
                </div>
                <div className="mt-3 p-2 bg-muted/50 rounded text-xs text-muted-foreground">
                  <strong>Emergencias:</strong> Soporte 24/7 para clientes con contrato de mantenimiento
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Formulario de contacto */}
          <div className="lg:col-span-2">
            <Card className="bg-card">
              <CardHeader>
                <CardTitle className="text-xl">Envíanos tu consulta</CardTitle>
                <p className="text-muted-foreground">
                  Completa el formulario y nos pondremos en contacto contigo en menos de 24 horas.
                </p>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    {/* Información personal */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="firstName"
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
                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Apellido *</FormLabel>
                            <FormControl>
                              <Input placeholder="Tu apellido" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
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
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Teléfono</FormLabel>
                            <FormControl>
                              <Input type="tel" placeholder="+52 (xxx) xxx-xxxx" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Empresa</FormLabel>
                          <FormControl>
                            <Input placeholder="Nombre de tu empresa (opcional)" {...field} />
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
                              <SelectItem value="Asesoría de proyecto">Asesoría general de proyecto</SelectItem>
                              <SelectItem value="Desarrollo de ingeniería">Desarrollo de ingeniería</SelectItem>
                              <SelectItem value="Obra civil">Obra civil y terracerías</SelectItem>
                              <SelectItem value="Obra eléctrica">Instalaciones eléctricas</SelectItem>
                              <SelectItem value="Administración de proyectos">Administración de proyectos</SelectItem>
                              <SelectItem value="Mantenimiento">Mantenimiento y soporte</SelectItem>
                              <SelectItem value="Otro">Otro (especificar en mensaje)</SelectItem>
                            </SelectContent>
                          </Select>
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
                            <Textarea 
                              rows={5} 
                              placeholder="Cuéntanos detalles sobre tu proyecto: ubicación, alcance, presupuesto estimado, tiempos, etc." 
                              className="resize-none" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" size="lg" className="w-full font-semibold">
                      Enviar consulta
                    </Button>
                    
                    <p className="text-xs text-muted-foreground text-center">
                      Al enviar este formulario, aceptas que nos pongamos en contacto contigo para 
                      discutir tu proyecto. No compartimos tu información con terceros.
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