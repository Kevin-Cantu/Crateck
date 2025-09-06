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
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "../ui/navigation-menu";
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
  { href: "/#proyectos", label: "Proyectos" },
  { href: "/#nosotros", label: "Nosotros" },
  { href: "/#contacto", label: "Contacto" },
];

const solutionsList: SolutionProps[] = [
  {
    href: "/desarrollo-ingenieria",
    label: "Desarrollo de ingeniería",
    description: "Diseño, cálculo y documentación técnica",
  },
  {
    href: "/obra-civil",
    label: "Obra civil",
    description: "Terracerías, cimentaciones y estructuras",
  },
  {
    href: "/obra-electrica",
    label: "Obra eléctrica",
    description: "Instalaciones industriales BT/MT",
  },
  {
    href: "/administracion-proyectos",
    label: "Administración de proyectos",
    description: "Planeación, control y supervisión",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <header className="shadow-inner bg-opacity-15 w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl top-5 mx-auto sticky border border-secondary z-40 rounded-2xl flex justify-between items-center p-2 bg-card">
      <Link href="/" className="font-bold text-lg flex items-center">
        <Image
          src="/crateclogo-.png"
          alt="Logo Crateck"
          width={32}
          height={32}
          className="mr-2 h-8 w-8 object-contain"
          priority
        />
        Crateck
      </Link>

      {/* Mobile */}
      <div className="flex items-center lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Menu onClick={() => setIsOpen(!isOpen)} className="cursor-pointer lg:hidden" />
          </SheetTrigger>

          <SheetContent side="left" className="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-card border-secondary">
            <div>
              <SheetHeader className="mb-4 ml-4">
                <SheetTitle className="flex items-center">
                  <Link href="/" className="flex items-center">
                    <Image
                      src="/crateclogo-.png"
                      alt="Logo Crateck"
                      width={32}
                      height={32}
                      className="mr-2 h-8 w-8 object-contain"
                      priority
                    />
                    Crateck
                  </Link>
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-2">
                {routeList.map(({ href, label }) => (
                  <Button
                    key={href}
                    onClick={() => setIsOpen(false)}
                    asChild
                    variant="ghost"
                    className="justify-start text-base"
                  >
                    <Link href={href}>{label}</Link>
                  </Button>
                ))}
                
                {/* Soluciones en móvil */}
                <div className="flex flex-col gap-1">
                  <p className="px-4 py-2 text-sm font-medium text-muted-foreground">Soluciones</p>
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
        {routeList.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="text-base px-4 py-2 hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
          >
            {label}
          </Link>
        ))}
        
        {/* Dropdown de Soluciones personalizado */}
        <div className="relative group">
          <button className="text-base px-4 py-2 hover:bg-accent hover:text-accent-foreground rounded-md transition-colors flex items-center">
            Soluciones
            <svg
              className="ml-1 h-3 w-3 transition-transform group-hover:rotate-180"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
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
                  <div className="text-sm font-medium leading-none">{label}</div>
                  <p className="text-xs leading-snug text-muted-foreground">
                    {description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex">
        <ToggleTheme />
      </div>
    </header>
  );
};