import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import Layout from "@/components/Layout/Layout";
import "./globals.css";

// pesos restritos ao que o CSS realmente usa (ver globals.css e os .module.css):
// Fraunces só aparece em 600 (normal e itálico), Plex Sans e Plex Mono só em 400.
// antes: 8 + 3 + 2 = 13 variantes baixadas. agora: 2 + 1 + 1 = 4.
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["600"],
  display: "swap",
});

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rota Aberta | Portal de Viagens",
  description:
    "Um portal de viagens para descobrir destinos turísticos pelo Brasil, com informações detalhadas sobre cada lugar.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${fraunces.variable} ${plexSans.variable} ${plexMono.variable}`}
    >
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
