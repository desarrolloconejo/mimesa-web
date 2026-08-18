import type { Metadata, Viewport } from "next";
import { Outfit, Montserrat } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#1a3c6a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://grupomimesa.com"),
  title: "Grupo Mimesa | Empresa de Alimentos en Venezuela",
  description:
    "Grupo Mimesa es una empresa líder en producción y distribución de alimentos en Venezuela, comprometida con enriquecer la mesa y vidas de las familias venezolanas.",
  keywords: [
    "Mimesa",
    "Grupo Mimesa",
    "Alimentos Venezuela",
    "Producción de alimentos",
    "Agroindustria Venezuela",
    "Harinas",
    "Granos",
  ],
  authors: [{ name: "Grupo Mimesa" }],
  openGraph: {
    title: "Grupo Mimesa | Empresa de Alimentos en Venezuela",
    description:
      "Transformamos el futuro agroalimentario de Venezuela con excelencia, calidad y compromiso familiar.",
    url: "https://grupomimesa.com",
    siteName: "Grupo Mimesa",
    images: [
      {
        url: "/images/hero-production.webp",
        width: 1200,
        height: 630,
        alt: "Grupo Mimesa Alimentos",
      },
    ],
    locale: "es_VE",
    type: "website",
  },
  icons: {
    icon: "/LOGOMIMESA.webp",
    apple: "/LOGOMIMESA.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${outfit.variable} ${montserrat.variable} scroll-smooth`}>
      <body className="min-h-screen bg-white text-[#0a1118] antialiased selection:bg-[#02afab] selection:text-white">
        {children}
      </body>
    </html>
  );
}
