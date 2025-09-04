# Documentación del código base: Shadcn Landing Page (Next.js)

Este documento describe la arquitectura, tecnologías, prácticas y recomendaciones del proyecto "Shadcn Landing Page" basado en Next.js, TypeScript y Tailwind.


## 1) Resumen ejecutivo

- Propósito: Plantilla de landing page moderna, responsive, con dark mode y componentes accesibles.
- Framework: Next.js 14 (App Router) + React 18 (RSC).
- Estilos: Tailwind CSS con design tokens por CSS variables.
- UI: Shadcn UI (sobre Radix UI) con utilidades cva/cn para variantes y clases.
- Tema: next-themes para alternar claro/oscuro basado en clases.
- Iconos: lucide-react.
- Formularios: react-hook-form (con componentes base para integrarse con Zod).
- Otros: tailwindcss-animate, embla-carousel-react, @devnomic/marquee (disponibles en dependencias).


## 2) Stack tecnológico

- Next.js 14 (App Router):
  - Estructura en `app/` con `layout.tsx` y `page.tsx`.
  - Metadatos en `app/layout.tsx` (Metadata) y `app/page.tsx` (openGraph/twitter para SEO).
  - Uso de `next/image` con `remotePatterns` configurados en `next.config.mjs`.
- TypeScript estricto:
  - `tsconfig.json` con `strict: true`, `moduleResolution: bundler` y alias `@/*`.
- Tailwind CSS:
  - `tailwind.config.ts`: darkMode por clase, safelist de `dark`, container centralizado, extensiones de colores basadas en variables CSS.
  - `app/globals.css`: define los design tokens (tema naranja) para light/dark.
- Shadcn UI + Radix UI:
  - Componentes reutilizables en `components/ui/` (button, card, form, input, select, textarea, etc.).
  - Accesibilidad: focus styles, ARIA, y composables de Radix (`NavigationMenu`, `Sheet`, `Select`, etc.).
  - cva (class-variance-authority) y `cn` (`lib/utils.ts` con clsx + tailwind-merge) para variantes y composición de clases.
- Temas (next-themes):
  - `components/layout/theme-provider.tsx` envuelve la app y gestiona el atributo `class`.
  - `components/layout/toogle-theme.tsx` alterna entre light/dark.
- Iconos (lucide-react):
  - Uso directo y vía componente `Icon` (icons dinámicos).
- Formularios: `react-hook-form` y soporte para Zod (`@hookform/resolvers`, `zod` en dependencias). El wrapper `components/ui/form.tsx` expone `Form`, `FormField`, `FormLabel`, etc.


## 3) Estructura de carpetas (alta nivel)

- `app/`
  - `layout.tsx`: shell de la app, aplica tipografía, theme provider, navbar.
  - `page.tsx`: landing que compone todas las secciones.
  - `globals.css`: variables CSS y estilos base.
- `components/`
  - `layout/`: layout global (navbar, theme-provider, toggle-theme) y secciones de landing `sections/` (hero, features, pricing, footer, etc.).
  - `ui/`: biblioteca de componentes reutilizables basada en Shadcn/Radix (button, card, form, input, select, textarea, navigation-menu, sheet, separator, badge, etc.).
  - `icons/`: iconos sociales personalizados.
- `lib/`
  - `utils.ts`: utilidad `cn` para combinar clases.
- Configuración
  - `tailwind.config.ts`: tokens, animaciones (accordion/collapsible), container, plugins.
  - `next.config.mjs`: dominios permitidos para `next/image`.
  - `components.json`: configuración de Shadcn (RSC, TSX, rutas y alias).
  - `tsconfig.json`: opciones de TypeScript y alias `@/*`.


## 4) Flujo de renderizado y composición

- RootLayout (`app/layout.tsx`):
  - Define `metadata` global.
  - Envueltos por `ThemeProvider` (next-themes) con `attribute="class"`, `defaultTheme="system"`.
  - Incluye `Navbar` sticky global.
- Página principal (`app/page.tsx`):
  - Compone secciones: Hero, Sponsors, Benefits, Features, Services, Testimonials, Team, Community, Pricing, Contact, FAQ, Footer.
- Secciones clave:
  - `HeroSection`: CTA principal, imagen dinámica según tema (light/dark) usando `next-themes` + `next/image`.
  - `FeaturesSection`: grid de features usando `Card` y `Icon` dinámico de lucide.
  - `PricingSection`: mapea planes y marca el plan popular con estilos condicionados.
  - `FooterSection`: enlaces y branding final.
- Interactividad cliente:
  - Se marca explícitamente con `"use client"` en componentes interactivos (Navbar, Hero, etc.).


## 5) Estilos y theming

- CSS variables (tema naranja) en `app/globals.css` bajo `@layer base` para `:root` y `.dark`.
- Tailwind extiende tokens para mapear a `--primary`, `--secondary`, `--foreground`, etc.; así todos los componentes usan `bg-background`, `text-foreground`, `bg-card`, etc.
- Dark mode: Next Themes alterna la clase `dark` en `<html>`, y Tailwind la respeta (`darkMode: ["class"]`).


## 6) Buenas prácticas aplicadas en el codebase

- Componentes cliente sólo cuando es necesario: uso de `"use client"` mínimo.
- Composición atómica con Shadcn/Radix: UI accesible, consistente y extensible.
- Variantes con cva y fusión de clases con `cn` (clsx + tailwind-merge) para evitar duplicidad/conflictos.
- Tipado estricto TypeScript (`strict: true`) y generics en wrappers de formularios (`FormField`).
- Accesibilidad:
  - Radix aporta comportamientos accesibles por defecto.
  - `FormControl`/`FormLabel` conectan ARIA (ids `aria-describedby`, `aria-invalid`).
  - `focus-visible` en componentes interactivos.
- Configuración de imágenes remotas whitelisteada en `next.config.mjs` (avatars, Unsplash, GitHub) para seguridad/performance.
- SEO básico: metadata OG/Twitter en `app/page.tsx`.


## 7) Guía de desarrollo

- Instalar y ejecutar: ver `README.md` (`npm install` / `npm run dev`).
- Añadir un nuevo componente UI (Shadcn):
  - Mantener el patrón de variantes con cva y `cn` para estilos.
  - Reusar tokens de color (`bg-background`, `text-foreground`, `text-primary`).
- Añadir una nueva sección a la landing:
  - Crear `components/layout/sections/<nueva-seccion>.tsx`.
  - Exportar `<NewSection />` y añadirla en `app/page.tsx` en el orden deseado.
- Formularios:
  - Usar `Form`, `FormField`, `FormControl`, `FormLabel`, `FormMessage`.
  - Validar con Zod vía `@hookform/resolvers/zod` (ya en dependencias).


## 8) Recomendaciones y deudas técnicas detectadas

- Internacionalización y lenguaje:
  - `<html lang="pt-br">` en `layout.tsx` no coincide con el contenido mayormente en inglés. Unificar (por ejemplo `es` o `en`).
  - Textos multilingües: considerar `next-intl`/`next-i18next`.
- Copy/typos:
  - `Get unlimitted access` → `Get unlimited access`.
  - `Get starterd` → `Get started`.
  - `Github respository` → `GitHub repository`.
  - `Contact US` → `Contact Us`.
  - Plurales en beneficios de precios: `team member(s)`, `Up to` en lugar de `Upto`.
  - `rouded-lg` (typo) en `HeroSection` debería ser `rounded-lg`.
- Consistencia de idioma en ToggleTheme: etiquetas en portugués (`Escuro/Claro`) y `Trocar de tema`.
- Semántica y accesibilidad:
  - Revisar jerarquía de encabezados H1/H2/H3 para consistencia.
  - Evitar anidar `<Badge>` dentro de `<Badge>` en Hero (innecesario y puede afectar semántica).
- SEO/Analytics:
  - Completar `metadata` con `robots`, `alternates`, `keywords` si aplica.
- Testing:
  - Añadir pruebas unitarias/visuales (por ejemplo, Vitest/RTL, Playwright para E2E).
- CI/CD y formato:
  - Incorporar formateo (Prettier) y chequeos de lint en CI.
- Accesibilidad avanzada:
  - Pasar un auditor (Lighthouse/axe) y corregir contrastes, roles, labels.


## 9) Extensión futura (roadmap sugerido)

- Conectar a CMS (Contentful, Sanity) o MDX para contenido de secciones.
- Componentes adicionales Shadcn (Tabs, Tooltip, Toast, Dialog) según necesidades.
- Modo theming por marca: extraer paletas y permitir cambiar `--primary` por proyecto.
- Tema base configurable desde `components.json` (`baseColor`) y tokens CSS.
- Deploy recomendado en Vercel con previsualizaciones por PR.


## 10) Referencias rápidas

- Next.js: https://nextjs.org/docs
- Shadcn UI: https://ui.shadcn.com
- Radix UI: https://www.radix-ui.com
- Tailwind CSS: https://tailwindcss.com/docs
- next-themes: https://github.com/pacocoursey/next-themes
- react-hook-form: https://react-hook-form.com
- Zod: https://zod.dev


## 11) Apéndice: patrones clave del repositorio

- `cn(...classes)`: combiner para clases Tailwind.
- `buttonVariants` con cva: define `variant` y `size` para `<Button />`.
- Formularios:
  - `Form` envuelve RHF (`FormProvider`).
  - `FormField` + `FormControl` propagan ids/ARIA y el estado de error.
- Theming con CSS variables:
  - Tokens mapeados en Tailwind: `background`, `foreground`, `primary`, `secondary`, `accent`, `muted`, `card`, etc.
- Navegación e interacción:
  - `Navbar` usa `NavigationMenu` de Radix y `Sheet` para móvil.

---

Si deseas, puedo ajustar este documento a un público no técnico o traducirlo completamente a inglés/español, o adaptarlo a un formato corporativo.
