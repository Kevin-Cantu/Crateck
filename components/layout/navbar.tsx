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

interface RouteProps {
  href: string;
  label: string;
}

interface SolutionProps {
  href: string;
  label: string;
  description: string;
}

const routeList: RouteProps[] = [
  { href: "/", label: "Inicio" },
  { href: "/#casos-exito", label: "Nuestros clientes" },
  { href: "/#proyectos-carousel", label: "Proyectos" },
  { href: "/#nosotros", label: "Nosotros" },
  { href: "/#contacto", label: "Contacto" },
];

const solutionsList: SolutionProps[] = [
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
    <header className="shadow-inner bg-opacity-15 w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl top-5 mx-auto sticky border border-secondary z-40 rounded-2xl flex justify-between items-center p-2 bg-card h-16">
      <Link href="/" className="font-bold text-lg flex items-center">
        <Image
          src="/cratecklogo.png"
          alt="Logo Crateck"
          width={200}
          height={300}
          className="object-left"
          priority
        />
      </Link>

      {/* Mobile */}
      <div className="flex items-center lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" aria-label="Abrir menú" className="w-10 h-10 p-2 text-primary hover:text-accent transition-colors">
              <Menu className="w-6 h-6" />
            </Button>
          </SheetTrigger>

          <SheetContent
            side="left"
            className="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-white border border-gray-200 text-gray-900 dark:text-gray-900"
            >
            <div>
              <SheetHeader className="mb-4 ml-4">
                <SheetTitle className="flex items-center">
                  <Link href="/" className="flex items-center">
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
                {/* Inicio */}
                <Button
                  onClick={() => setIsOpen(false)}
                  asChild
                  variant="ghost"
                  className="justify-start text-base"
                >
                  <Link href="/">Inicio</Link>
                </Button>

                {/* Nuestros clientes */}
                <Button
                  onClick={() => setIsOpen(false)}
                  asChild
                  variant="ghost"
                  className="justify-start text-base"
                >
                  <Link href="/#casos-exito">Nuestros clientes</Link>
                </Button>

                {/* Soluciones en móvil */}
                <div className="flex flex-col gap-1">
                  <p className="px-4 py-2 text-sm font-medium ">
                    Soluciones
                  </p>
                  {solutionsList.map(({ href, label }) => (
                    <Button
                      key={href}
                      onClick={() => setIsOpen(false)}
                      asChild
                      variant="ghost"
                      className="justify-start text-sm pl-6"
                    >
                      <Link href={href}>{label}</Link>
                    </Button>
                  ))}
                </div>

                {/* Renta de maquinaria */}
                <Button
                  onClick={() => setIsOpen(false)}
                  asChild
                  variant="ghost"
                  className="justify-start text-base"
                >
                  <Link href="/renta-de-equipo">Renta de maquinaria</Link>
                </Button>

                {/* Proyectos */}
                <Button
                  onClick={() => setIsOpen(false)}
                  asChild
                  variant="ghost"
                  className="justify-start text-base"
                >
                  <Link href="/#proyectos-carousel">Proyectos</Link>
                </Button>

                {/* Nosotros */}
                <Button
                  onClick={() => setIsOpen(false)}
                  asChild
                  variant="ghost"
                  className="justify-start text-base"
                >
                  <Link href="/#nosotros">Nosotros</Link>
                </Button>

                {/* Contacto */}
                <Button
                  onClick={() => setIsOpen(false)}
                  asChild
                  variant="ghost"
                  className="justify-start text-base"
                >
                  <Link href="/#contacto">Contacto</Link>
                </Button>
              </div>
            </div>

            <SheetFooter className="flex-col sm:flex-col justify-start items-start">
              <Separator className="mb-2" />
              <ToggleTheme />
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop */}
      <div className="hidden lg:flex items-center mx-auto space-x-1">
        {/* Inicio */}
        <Link
          href="/"
          className="text-base px-4 py-2 hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
        >
          Inicio
        </Link>

        {/* Nuestros clientes */}
        <Link
          href="/#casos-exito"
          className="text-base px-4 py-2 hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
        >
          Nuestros clientes
        </Link>

        {/* Soluciones (dropdown) */}
        <div className="relative group">
          <button className="text-base px-4 py-2 hover:bg-accent hover:text-accent-foreground rounded-md transition-colors flex items-center">
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

          {/* Dropdown content */}
          <div className="absolute top-full left-0 mt-1 w-[280px] bg-popover border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
            <div className="flex flex-col p-2">
              {solutionsList.map(({ href, label, description }) => (
                <Link
                  key={href}
                  href={href}
                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                >
                  <div className="text-sm font-medium leading-none">
                    {label}
                  </div>
                  <p className="text-xs leading-snug text-muted-foreground">
                    {description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Renta de maquinaria */}
        <Link
          href="/renta-de-equipo"
          className="text-base px-4 py-2 hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
        >
          Renta de maquinaria
        </Link>

        {/* Proyectos */}
        <Link
          href="/#proyectos-carousel"
          className="text-base px-4 py-2 hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
        >
          Proyectos
        </Link>

        {/* Nosotros */}
        <Link
          href="/#nosotros"
          className="text-base px-4 py-2 hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
        >
          Nosotros
        </Link>

        {/* Contacto */}
        <Link
          href="/#contacto"
          className="text-base px-4 py-2 hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
        >
          Contacto
        </Link>
      </div>

      <div className="hidden lg:flex">
        <ToggleTheme />
      </div>
    </header>
  );
};
