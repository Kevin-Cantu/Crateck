import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { FooterSection } from "@/components/layout/sections/footer";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "Crateck | Ingeniería, Obra Civil y Eléctrica",
  description:
    "Grupo Crateck: soluciones en desarrollo de ingeniería, obra civil, obra eléctrica y administración de proyectos para la industria.",
  keywords: [
    "Crateck",
    "ingeniería",
    "obra civil",
    "obra eléctrica",
    "proyectos",
    "industria",
    "subestaciones",
    "instalaciones eléctricas",
  ],
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background flex flex-col", montserrat.className)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar />
          <main className="flex-1">{children}</main>
          <FooterSection />
        </ThemeProvider>
      </body>
    </html>
  );
}
