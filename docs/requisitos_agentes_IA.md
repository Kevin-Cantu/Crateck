# Requisitos para agentes de IA: buenas prácticas y arquitectura segura

Este documento define reglas, restricciones y checklists para que agentes de IA (o automatizaciones) contribuyan a este repositorio sin romper la arquitectura, mantener la coherencia visual/funcional y asegurar calidad.

Aplica al proyecto: "Shadcn Landing Page" (Next.js 14, App Router, TypeScript, Tailwind, Shadcn UI/Radix, next-themes).


## 0) Principios generales

- Preservar la arquitectura actual (App Router, RSC, tokens de tema) y la organización por capas.
- Minimizar cambios: preferir modificaciones locales y atómicas. Evitar refactors amplios sin justificación.
- Mantener accesibilidad y performance: respetar Radix, focus-visible, SSR/RSC.
- Cualquier decisión de diseño debe alinearse con docs/arquitectura_y_practicas.md.
- Seguir TypeScript estricto y evitar “any” salvo excepciones justificadas.


## 1) Estructura y límites de módulos

- App Router
  - `app/layout.tsx` es el shell global. No mover Navbar ni ThemeProvider fuera de aquí.
  - `app/page.tsx` compone secciones. No poner lógica compleja en esta página.
- Componentes y secciones
  - UI reutilizable: `components/ui/*` (Button, Card, Form, Input, Select, Textarea, etc.).
  - Layout global: `components/layout/*` (Navbar, ThemeProvider, ToggleTheme).
  - Secciones de landing: `components/layout/sections/*` (hero, features, pricing, ...).
  - Utilidades genéricas: `lib/utils.ts` (mantener `cn`).
- Convención de archivos: componentes en `.tsx`, utilidades en `.ts`. Evitar mezclar responsabilidades.
- Imports: usar alias `@/*` (definido en tsconfig.json) en lugar de rutas relativas profundas.


## 2) Server Components vs Client Components

- Por defecto, utilizar Server Components (RSC). Marcar `"use client"` únicamente si:
  - Se usa estado/efectos (useState/useEffect), refs DOM, eventos en cliente.
  - Se consume Radix UI en modo interactivo o next-themes `useTheme()`.
- Prohibido en RSC:
  - Acceder a `window`, `document` o APIs del navegador.
  - Hooks de cliente (useState/useEffect/useTheme).
- Prohibido en Client Components:
  - Importar módulos con side-effects de servidor.
  - Ejecutar lógica que requiera secretos o credenciales.
- Patrón recomendado:
  - Componer componentes UI puros y server-safe; elevar interactividad mínima a contenedores marcados con `"use client"`.


## 3) Theming y estilos (Tailwind + CSS variables)

- Usar tokens de Tailwind extendidos que mapean a variables CSS: `bg-background`, `text-foreground`, `text-primary`, `bg-card`, etc.
- No hardcodear colores hex salvo casos brand/gradientes puntuales. Si es recurrente, convertir a token/variable.
- Dark mode: gestionado por next-themes con clase `dark` en `<html>`. No forzar estilos de dark usando media queries.
- Tailwind config:
  - No eliminar `darkMode: ["class"]` ni `safelist: ["dark"]`.
  - Respetar `content` y `plugins`. Añadir sólo lo necesario.
- globals.css:
  - Mantener tokens en `@layer base`. Cambios de paleta deben reflejarse en `:root` y `.dark`.


## 4) Shadcn UI y Radix UI

- Respetar patrones de Shadcn:
  - Variantes con `cva` + `cn` (ej.: `buttonVariants`).
  - Mantener accesibilidad (labels, aria-attrs, focus-visible, roles/ids) en `components/ui/form` y Radix.
- No duplicar componentes UI si una variante resuelve el caso. Extender mediante props/variants.
- Navegación y overlays: continuar usando `NavigationMenu`, `Sheet`, `Select` de Radix.
- Iconografía: usar `lucide-react` vía `components/ui/icon.tsx` para iconos dinámicos.


## 5) Imágenes, contenido estático y SEO

- Imágenes:
  - Usar `next/image` siempre que sea posible.
  - Dominios remotos deben estar whitelisteados en `next.config.mjs`. No añadir orígenes aleatorios sin justificar.
  - Archivos estáticos locales en `public/` con `width/height` explícitos y `alt` descriptivo.
- SEO/metadata:
  - Definir metadata en `app/page.tsx` o en páginas específicas, no en componentes UI.
  - Mantener coherencia en `openGraph` y `twitter`.


## 6) Formularios y validación

- Formularios con `react-hook-form` y wrappers de `components/ui/form`.
- Validación: preferir `zod` + `@hookform/resolvers/zod`.
- Accesibilidad de formularios: `FormLabel`/`FormControl`/`FormMessage` deben conectar por id/aria (no borrar lógica actual).


## 7) Accesibilidad (a11y)

- Mantener `focus-visible` y estados de foco/aria.
- Estructura semántica: jerarquía H1/H2/H3 por sección; evitar saltos arbitrarios.
- Contraste adecuado (tokens ya contemplan contrastes). No introducir textos con bajo contraste.
- Elementos interactivos con `aria-label` cuando el texto visible no sea suficiente.


## 8) Performance y calidad

- Evitar marcar componentes como `"use client"` sin necesidad.
- Dynamic import para componentes pesados no críticos.
- No bloquear rendering con operaciones síncronas costosas en cliente.
- Mantener tamaños de imagen adecuados y lazy loading por defecto de `next/image`.
- Lint: ejecutar `npm run lint` y corregir advertencias.


## 9) Internacionalización y copy

- Mantener un único idioma consistente por cambio. Evitar mezclar ES/EN/PT en la misma pieza de UI.
- `html lang` en `app/layout.tsx` debe reflejar el idioma principal de los textos visibles.
- Evitar typos. Usar fraseo claro y consistente con el tono del sitio.


## 10) Políticas de dependencias

- No agregar dependencias grandes sin justificación (bundle/perf/a11y).
- Preferir librerías ya presentes en el stack (Shadcn/Radix, RHF, Zod).
- Si se añade una dependencia:
  - Documentar el motivo y el impacto.
  - Confirmar compatibilidad con Next 14 / RSC.


## 11) Guía para nuevos cambios (paso a paso)

1) Antes de cambiar
- Leer `docs/arquitectura_y_practicas.md` y esta guía.
- Identificar si el cambio afecta RSC/cliente, theming o estructura de secciones.

2) Añadir una nueva sección a la landing
- Crear `components/layout/sections/<nombre>.tsx`.
- Componer con UI de `components/ui/*` y tokens de Tailwind.
- Importar y usar en `app/page.tsx` en el lugar adecuado.

3) Añadir/ajustar un componente UI
- Mantener el patrón `cva` + `cn` y variantes.
- Ubicar en `components/ui/` si es reutilizable, o local a la sección si es específico.

4) Interactividad en cliente
- Marcar `"use client"` en el nivel mínimo que requiera estado/efectos.
- Evitar hooks cliente en componentes RSC.

5) Estilos
- Usar tokens y utilidades Tailwind. Evitar estilos inline salvo casos puntuales.
- Si se repite un patrón, promover a clase utilitaria o variante.

6) Imágenes y assets
- Preferir `next/image`. Si se requiere dominio remoto nuevo, actualizar `next.config.mjs` justificando el cambio.

7) Validación y formularios
- Usar RHF + Zod. Conectar correctamente `FormLabel`/`FormControl`/`FormMessage`.

8) Revisión y verificación
- `npm run lint` debe pasar sin errores.
- Revisar accesibilidad básica (labels, roles, foco) y visual.
- Probar en light/dark mode.


## 12) Do/Don’t (ejemplos)

Do
- Usar `cn()` para componer clases y evitar conflictos de Tailwind.
- Añadir variantes a `Button` en lugar de crear un botón duplicado.
- Mantener los textos y `aria-label` coherentes y con buen contraste.
- Encapsular lógica cliente en un componente mínimo con `"use client"`.

Don’t
- Importar `useTheme` en componentes server.
- Hardcodear colores hex para reemplazar tokens (`text-[#222]` en lugar de `text-foreground`).
- Mover `Navbar` o `ThemeProvider` fuera de `app/layout.tsx`.
- Definir metadata en componentes UI.


## 13) Proceso de propuesta de cambios (para agentes)

- Crear un resumen del cambio propuesto (motivo, alcance, archivos afectados, impacto RSC/tema/UI).
- Si implica dependencias/config, listar riesgos y mitigaciones.
- Abrir PR con:
  - Descripción clara, capturas si aplica.
  - Checklist de verificación (lint, dark/light, a11y, SEO si aplica).
- No fusionar cambios que rompan cualquiera de las reglas anteriores.


## 14) Checklists operativos

Checklist rápido antes de abrir PR
- [ ] ¿El cambio respeta RSC vs cliente y usa `"use client"` sólo si es necesario?
- [ ] ¿Usa tokens de tema y clases de Tailwind en lugar de hex arbitrarios?
- [ ] ¿Conserva accesibilidad (focus-visible, aria, jerarquía de encabezados)?
- [ ] ¿Usa componentes de `components/ui/*` o extiende por variantes?
- [ ] ¿`next/image` con `alt` y dimensiones correctas? ¿Dominios permitidos?
- [ ] ¿`npm run lint` en verde?
- [ ] ¿Se probó en light y dark mode?
- [ ] ¿Metadata/SEO consistente si se tocó `app/page.tsx`?


## 15) Apéndice: referencias

- docs/arquitectura_y_practicas.md (visión general)
- next.config.mjs (imágenes remotas permitidas)
- tailwind.config.ts (tokens, animaciones, dark mode)
- tsconfig.json (alias @/*)
- .eslintrc.json (reglas base Next)


## 16) Estructura de carpetas del repositorio

Árbol de directorios y archivos relevantes para orientar a los agentes sobre dónde ubicar nuevos cambios:

```
.
├─ components.json
├─ .eslintrc.json
├─ .gitignore
├─ LICENSE
├─ next.config.mjs
├─ package-lock.json
├─ package.json
├─ postcss.config.mjs
├─ README.md
├─ tailwind.config.ts
├─ tsconfig.json
├─ app/
│  ├─ favicon.ico
│  ├─ globals.css           # tokens de tema y estilos base
│  ├─ layout.tsx            # shell global, ThemeProvider, Navbar
│  └─ page.tsx              # composición de secciones de la landing
├─ components/
│  ├─ icons/
│  │  ├─ discord-icon.tsx
│  │  ├─ github-icon.tsx
│  │  ├─ linkedin-icon.tsx
│  │  └─ x-icon.tsx
│  ├─ layout/
│  │  ├─ navbar.tsx
│  │  ├─ theme-provider.tsx
│  │  ├─ toogle-theme.tsx
│  │  └─ sections/
│  │     ├─ benefits.tsx
│  │     ├─ community.tsx
│  │     ├─ contact.tsx
│  │     ├─ faq.tsx
│  │     ├─ features.tsx
│  │     ├─ footer.tsx
│  │     ├─ hero.tsx
│  │     ├─ pricing.tsx
│  │     ├─ services.tsx
│  │     ├─ sponsors.tsx
│  │     ├─ team.tsx
│  │     └─ testimonial.tsx
│  └─ ui/
│     ├─ accordion.tsx
│     ├─ avatar.tsx
│     ├─ badge.tsx
│     ├─ button.tsx
│     ├─ card.tsx
│     ├─ carousel.tsx
│     ├─ collapsible.tsx
│     ├─ form.tsx
│     ├─ icon.tsx
│     ├─ input.tsx
│     ├─ label.tsx
│     ├─ navigation-menu.tsx
│     ├─ scroll-area.tsx
│     ├─ select.tsx
│     ├─ separator.tsx
│     ├─ sheet.tsx
│     └─ textarea.tsx
├─ lib/
│  └─ utils.ts             # utilidades (cn)
├─ public/
│  ├─ demo-img.jpg
│  ├─ hero-image-dark.jpeg
│  └─ hero-image-light.jpeg
└─ docs/
   ├─ arquitectura_y_practicas.md
   └─ requisitos_agentes_IA.md
```

Notas para agentes (ubicación de nuevos archivos)
- Nuevas secciones de landing: `components/layout/sections/<nombre>.tsx` y luego importarlas en `app/page.tsx`.
- Nuevos componentes reutilizables: `components/ui/<nombre>.tsx`, manteniendo el patrón `cva` + `cn` y accesibilidad.
- Utilidades comunes: `lib/<nombre>.ts` (evitar lógica de UI aquí).
- Assets estáticos (imágenes): `public/` y si son remotos, añadir dominio en `next.config.mjs`.
- Documentación interna: `docs/`.

Fin del documento.
