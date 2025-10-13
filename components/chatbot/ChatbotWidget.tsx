"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Simple icons
const ChatIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={cn("h-5 w-5", className)} aria-hidden>
    <path d="M20 2H4a2 2 0 0 0-2 2v18l4-4h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z" />
  </svg>
);

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={cn("h-4 w-4", className)} aria-hidden>
    <path d="M20.52 3.48A11.86 11.86 0 0 0 12.01 0C5.39 0 .02 5.37.02 12c0 2.1.55 4.16 1.6 5.97L0 24l6.19-1.61A11.96 11.96 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.22-3.48-8.52ZM12 22a9.94 9.94 0 0 1-5.08-1.39l-.37-.21-3.65.95.98-3.56-.24-.37A9.98 9.98 0 1 1 22 12c0 5.51-4.49 10-10 10Zm5.46-7.54c-.3-.15-1.76-.87-2.04-.96-.27-.1-.47-.15-.67.15-.19.3-.77.96-.95 1.16-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.04-.17-.3-.02-.46.13-.61.14-.14.3-.37.45-.56.15-.19.2-.3.3-.5.1-.2.05-.37-.02-.53-.07-.15-.67-1.6-.92-2.2-.24-.57-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.03 1-1.03 2.44 0 1.44 1.05 2.83 1.2 3.03.15.2 2.07 3.16 5.03 4.43.7.3 1.24.47 1.67.6.7.22 1.34.19 1.85.11.56-.08 1.76-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.11-.27-.18-.57-.33Z" />
  </svg>
);

// Types
type Role = "bot" | "user";
interface Message {
  id: string;
  role: Role;
  text: string;
  ts: number;
}

type NodeId =
  | "root"
  | "servicios"
  | "obra_civil"
  | "obra_electrica"
  | "energia_solar"
  | "renta_equipo"
  | "contacto"
  | "cotizacion"
  | "gracias";

interface FlowNode {
  id: NodeId;
  text: string;
  options?: Array<{ label: string; next: NodeId; action?: () => void; primary?: boolean }>;
}

const buildWhatsAppUrl = (message: string) => {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/528132192308?text=${encodedMessage}`;
};

const FLOW: Record<NodeId, FlowNode> = {
  root: {
    id: "root",
    text:
      "¡Hola! Soy el agente de Crateck. ¿En qué te puedo ayudar hoy? Selecciona una opción para comenzar.",
    options: [
      { label: "Servicios", next: "servicios", primary: true },
      { label: "Renta de equipo", next: "renta_equipo" },
      { label: "Contacto", next: "contacto" },
      { label: "Cotización", next: "cotizacion" },
    ],
  },
  servicios: {
    id: "servicios",
    text:
      "Ofrecemos: Obra Civil, Obra Eléctrica, Energía Solar e Ingeniería. ¿Qué área te interesa?",
    options: [
      { label: "Obra Civil", next: "obra_civil", primary: true },
      { label: "Obra Eléctrica", next: "obra_electrica" },
      { label: "Energía Solar", next: "energia_solar" },
      { label: "Renta de equipo", next: "renta_equipo" },
      { label: "Volver", next: "root" },
    ],
  },
  obra_civil: {
    id: "obra_civil",
    text:
      "En Obra Civil atendemos construcción, urbanización y proyectos llave en mano. ¿Qué deseas hacer?",
    options: [
      { label: "Ver soluciones", next: "gracias", action: () => window.open("/#obra-civil", "_self"), primary: true },
      { label: "Solicitar contacto", next: "contacto" },
      { label: "Volver", next: "servicios" },
    ],
  },
  obra_electrica: {
    id: "obra_electrica",
    text:
      "En Obra Eléctrica realizamos instalaciones, subestaciones y mantenimiento industrial. ¿Qué deseas hacer?",
    options: [
      { label: "Ver soluciones", next: "gracias", action: () => window.open("/#obra-electrica", "_self"), primary: true },
      { label: "Solicitar contacto", next: "contacto" },
      { label: "Volver", next: "servicios" },
    ],
  },
  energia_solar: {
    id: "energia_solar",
    text:
      "Impulsamos el futuro con soluciones fotovoltaicas a la medida. ¿Qué deseas hacer?",
    options: [
      { label: "Ver soluciones", next: "gracias", action: () => window.open("/#energia-solar", "_self"), primary: true },
      { label: "Solicitar contacto", next: "contacto" },
      { label: "Volver", next: "servicios" },
    ],
  },
  renta_equipo: {
    id: "renta_equipo",
    text:
      "Tenemos equipo industrial, ligero y maquinaria. ¿Quieres ir a la sección o pedir una cotización por WhatsApp?",
    options: [
      { label: "Ir a Renta de equipo", next: "gracias", action: () => window.open("/renta-de-equipo", "_self"), primary: true },
      { label: "Cotizar por WhatsApp", next: "gracias", action: () => window.open(buildWhatsAppUrl("Hola, me interesa renta de equipo."), "_blank") },
      { label: "Volver", next: "root" },
    ],
  },
  contacto: {
    id: "contacto",
    text:
      "Puedes escribirnos por WhatsApp y con gusto te atendemos. ¿Deseas abrir el chat ahora?",
    options: [
      { label: "Abrir WhatsApp", next: "gracias", action: () => window.open(buildWhatsAppUrl("Hola, me gustaría más información."), "_blank"), primary: true },
      { label: "Volver", next: "root" },
    ],
  },
  cotizacion: {
    id: "cotizacion",
    text:
      "Para cotizaciones rápidas, compártenos por WhatsApp el tipo de servicio/equipo y tiempos. ¿Deseas abrir WhatsApp?",
    options: [
      { label: "WhatsApp", next: "gracias", action: () => window.open(buildWhatsAppUrl("Hola, quiero una cotización."), "_blank"), primary: true },
      { label: "Volver", next: "root" },
    ],
  },
  gracias: {
    id: "gracias",
    text: "¡Gracias! Si necesitas algo más, aquí estaré.",
    options: [{ label: "Ir al inicio", next: "root", primary: true }],
  },
};

const TypingDots = () => (
  <div className="inline-flex items-center gap-1">
    <span className="h-1.5 w-1.5 rounded-full bg-foreground/60 animate-bounce [animation-delay:-0.2s]" />
    <span className="h-1.5 w-1.5 rounded-full bg-foreground/60 animate-bounce [animation-delay:-0.1s]" />
    <span className="h-1.5 w-1.5 rounded-full bg-foreground/60 animate-bounce" />
  </div>
);

const Bubble = ({ role, children }: { role: Role; children: React.ReactNode }) => {
  const isBot = role === "bot";
  return (
    <div className={cn("flex w-full", isBot ? "justify-start" : "justify-end")}>
      <div className="relative">
        <div
          className={cn(
            "max-w-[84vw] sm:max-w-[320px] rounded-2xl px-3 py-2 text-sm shadow-md border ring-1",
            "animate-in fade-in-0 zoom-in-95 slide-in-from-bottom-2",
            isBot
              ? "bg-muted/80 text-foreground border-border ring-black/5 dark:ring-white/5"
              : "bg-gradient-to-br from-primary to-primary/90 text-primary-foreground border-primary/80 ring-primary/20"
          )}
        >
          {children}
        </div>
        <span
          className={cn(
            "absolute bottom-0 translate-y-1.5 h-0 w-0 border-t-8 border-t-transparent",
            isBot
              ? "-left-2 border-r-8 border-r-muted/80"
              : "-right-2 border-l-8 border-l-primary/90"
          )}
        />
      </div>
    </div>
  );
};

export function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [node, setNode] = useState<FlowNode>(FLOW.root);
  const [botTyping, setBotTyping] = useState(false);

  const scrollEndRef = useRef<HTMLDivElement>(null);

  const initialized = useMemo(() => messages.length > 0, [messages.length]);

  const scrollToBottom = () => {
    scrollEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages.length, botTyping]);

  const appendBot = (text: string) => {
    setMessages((prev) => [
      ...prev,
      { id: crypto.randomUUID(), role: "bot", text, ts: Date.now() },
    ]);
  };

  const appendUser = (text: string) => {
    setMessages((prev) => [
      ...prev,
      { id: crypto.randomUUID(), role: "user", text, ts: Date.now() },
    ]);
  };

  const goTo = async (nextId: NodeId) => {
    const next = FLOW[nextId];
    setNode(next);
    setBotTyping(true);
    await new Promise((r) => setTimeout(r, 450));
    setBotTyping(false);
    appendBot(next.text);
  };

  const handleOption = async (opt: FlowNode["options"][number]) => {
    appendUser(opt.label);
    await goTo(opt.next);
    if (opt.action) {
      try {
        opt.action();
      } catch {}
    }
  };

  const handleToggleOpen = () => {
    setOpen((o) => {
      const nextOpen = !o;
      if (nextOpen && !initialized) {
        (async () => {
          setBotTyping(true);
          await new Promise((r) => setTimeout(r, 400));
          setBotTyping(false);
          appendBot(FLOW.root.text);
        })();
      }
      return nextOpen;
    });
  };

  return (
    <div
      className="fixed z-50"
      style={{
        right: "calc(1rem + env(safe-area-inset-right))",
        bottom: "calc(1rem + env(safe-area-inset-bottom))",
      }}
    >
      {/* Chat bubble container with background and small agent chip */}
      <div
        className={cn(
          "transition-all duration-200",
          open
            ? "opacity-100 translate-y-0 translate-x-0 scale-100 pointer-events-auto"
            : "opacity-0 translate-y-2 translate-x-2 scale-95 pointer-events-none"
        )}
        style={{ maxWidth: "min(86vw, 340px)" }}
      >
        <div className="rounded-2xl bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/75 border border-border/60 shadow-2xl p-2">
          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2 pl-1">
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary/15 text-primary"><ChatIcon className="h-3.5 w-3.5"/></span>
            <span className="font-medium">Agente</span>
          </div>
          <div className="max-h-[42vh] overflow-y-auto flex flex-col gap-2">
            {messages.map((m) => (
              <Bubble key={m.id} role={m.role}>{m.text}</Bubble>
            ))}
            {botTyping && (
              <div className="flex w-full justify-start">
                <div className="relative max-w-[84vw] sm:max-w-[320px] rounded-2xl px-3 py-2 text-sm shadow-md border bg-muted/80 border-border animate-pulse ring-1 ring-black/5 dark:ring-white/5">
                  <TypingDots />
                  <span className="absolute bottom-0 -left-2 translate-y-1.5 h-0 w-0 border-t-8 border-t-transparent border-r-8 border-r-muted/80" />
                </div>
              </div>
            )}
            <div ref={scrollEndRef} />
          </div>

          {/* Quick replies */}
          <div className="flex flex-wrap gap-2 justify-end mt-2">
            {node.options?.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleOption(opt)}
                className={cn(
                  "px-3 py-1 rounded-full text-xs shadow-sm border",
                  opt.primary
                    ? "bg-primary text-primary-foreground border-transparent"
                    : "bg-background/90 backdrop-blur border-border hover:bg-muted/60"
                )}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Floating button */}
      <div className="flex justify-end mt-2">
        <Button
          aria-label="Abrir asistente"
          className="h-12 w-12 rounded-full shadow-xl bg-primary text-primary-foreground hover:bg-primary/90"
          onClick={handleToggleOpen}
        >
          <ChatIcon />
        </Button>
      </div>
    </div>
  );
}
