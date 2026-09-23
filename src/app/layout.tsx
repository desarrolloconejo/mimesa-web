import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Montserrat } from "next/font/google";
import "./globals.css";

// Brand Manual Slide 11: Gilroy for Headings & Communication
const gilroy = localFont({
  src: [
    {
      path: "../../public/fonts/gilroy/Gilroy-Light.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/gilroy/Gilroy-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/gilroy/Gilroy-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/gilroy/Gilroy-Bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/gilroy/Gilroy-Extrabold.woff",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/gilroy/Gilroy-Heavy.woff",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-gilroy",
  display: "swap",
});

// Brand Manual Slide 11: Quesha for Brand Descriptor "GRUPO"
const quesha = localFont({
  src: [
    {
      path: "../../public/fonts/quesha/Quesha-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-quesha",
  display: "swap",
});

// Brand Manual Slide 11: Montserrat for Body & Digital UI
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#183c6b", // Official Prussian Blue (PANTONE 541 C)
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
    "Produsal",
    "Sal Marina",
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
  // Brand Manual Slide 17: Simplified white sprout isotipo in dark blue circle
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-icon.png",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${gilroy.variable} ${montserrat.variable} ${quesha.variable}`}
    >
      <body className="min-h-screen bg-white text-[#0a1118] antialiased selection:bg-[#02aeaa] selection:text-white">
        {children}
      </body>
    </html>
  );
}
