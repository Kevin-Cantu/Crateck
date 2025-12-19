"use client";
import { Menu } from "lucide-react";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { ToggleTheme } from "./toogle-theme";

const solutionsList = [
  {
    href: "/#obra-electrica",
    label: "Obra eléctrica",
    description: "Instalaciones industriales BT/MT/AT",
  },
  {
    href: "/#energia-solar",
    label: "Energía solar",
    description: "Sistemas fotovoltaicos a medida",
  },
  {
    href: "/#obra-civil",
    label: "Obra civil",
    description: "Construcción y terracerías",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="shadow-inner sticky top-0 z-40 flex justify-between items-center h-16 p-2 bg-card border border-secondary w-full lg:w-[75%] lg:max-w-screen-xl lg:mx-auto lg:top-4 lg:rounded-2xl">
      <Link href="/" className="font-bold text-lg flex items-center">
        <div className="h-36 w-[220px] relative">
          <Image
            src="/cratecklogo.png"
            alt="Logo Crateck"
            fill
            className="object-contain"
            priority
          />
        </div>
      </Link>

      {/* Mobile */}
      <div className="block items-center lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Abrir menú"
              className="w-10 h-10 p-2 text-primary hover:text-accent transition-colors"
            >
              <Menu className="w-6 h-6" />
            </Button>
          </SheetTrigger>

          <SheetContent
            side="right"
            className="flex flex-col justify-between rounded-tl-2xl rounded-bl-2xl border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100"
          >
            <div>
              <SheetHeader className="mb-4 ml-4">
                <SheetTitle>
                  <Link
                    href="/"
                    className="flex items-center"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="h-12 w-auto flex items-center overflow-hidden">
                      <Image
                        src="/cratecklogo.png"
                        alt="Logo Crateck"
                        width={200}
                        height={300}
                        className="object-contain"
                        priority
                      />
                    </div>
                  </Link>
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-2">
                <Button
                  onClick={() => setIsOpen(false)}
                  asChild
                  variant="ghost"
                  className="justify-start text-base font-semibold"
                >
                  <Link href="/">Inicio</Link>
                </Button>

                <div className="flex flex-col gap-1">
                  <p className="px-4 pt-4 pb-2 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                    Soluciones
                  </p>
                  {solutionsList.map(({ href, label }) => (
                    <Button
                      key={href}
                      onClick={() => setIsOpen(false)}
                      asChild
                      variant="ghost"
                      className="justify-start text-base font-semibold pl-6 "
                    >
                      <Link href={href}>{label}</Link>
                    </Button>
                  ))}
                </div>

                <Button
                  onClick={() => setIsOpen(false)}
                  asChild
                  variant="ghost"
                  className="justify-start text-base font-semibold"
                >
                  <Link href="/#proyectos-carousel">Proyectos</Link>
                </Button>
                <Button
                  onClick={() => setIsOpen(false)}
                  asChild
                  variant="ghost"
                  className="justify-start text-base font-semibold"
                >
                  <Link href="/#nosotros">Nosotros</Link>
                </Button>
                <Button
                  onClick={() => setIsOpen(false)}
                  asChild
                  variant="ghost"
                  className="justify-start text-base font-semibold"
                >
                  <Link href="/#contacto">Contacto</Link>
                </Button>
              </div>
            </div>

            <SheetFooter className="flex-col sm:flex-col justify-start items-start">
              <Button
                onClick={() => setIsOpen(false)}
                asChild
                variant="default"
                className="w-full justify-center mb-2 font-semibold   "
              >
                <Link href="/renta-de-equipo">Renta de maquinaria</Link>
              </Button>
              <Separator className="mb-2 w-full" />
              <ToggleTheme />
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop */}
      <div className="hidden lg:flex items-center mx-auto space-x-1">
        <Link
          href="/"
          className="text-base px-4 py-2 hover:bg-accent/50 hover:text-accent-foreground rounded-md transition-colors"
        >
          Inicio
        </Link>

        <div className="relative group">
          <button className="text-base px-4 py-2 hover:bg-accent/50 hover:text-accent-foreground rounded-md flex items-center">
            Soluciones
            <svg
              className="ml-1 h-3 w-3 transition-transform group-hover:rotate-180"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          <div className="absolute top-full left-0 mt-1 w-[280px] bg-popover border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
            <div className="flex flex-col p-2">
              {solutionsList.map(({ href, label, description }) => (
                <Link
                  key={href}
                  href={href}
                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline transition-colors hover:bg-accent/50 "
                >
                  <div className="text-sm font-medium">{label}</div>
                  <p className="text-xs text-muted-foreground">{description}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <Link
          href="/#proyectos-carousel"
          className="text-base px-4 py-2 hover:bg-accent/50 hover:text-accent-foreground rounded-md transition-colors"
        >
          Proyectos
        </Link>

        <Link
          href="/#nosotros"
          className="text-base px-4 py-2 hover:bg-accent/50 hover:text-accent-foreground rounded-md transition-colors"
        >
          Nosotros
        </Link>

        <Link
          href="/#contacto"
          className="text-base px-4 py-2 hover:bg-accent/50 hover:text-accent-foreground rounded-md transition-colors"
        >
          Contacto
        </Link>
      </div>

      <Link
        href="/renta-de-equipo"
        className="
    hidden lg:inline-flex
    text-base px-4 py-2
    bg-primary hover:bg-primary/80
    hover:text-accent-foreground
    rounded-md transition-colors text-white
  "
      >
        Renta de maquinaria
      </Link>

      <div className="hidden lg:flex pl-6">
        <ToggleTheme />
      </div>
    </header>
  );
};
