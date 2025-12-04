import { Inter } from "next/font/google";
import "./globals.css";
// 1. Import du composant SpeedInsights
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "David | Ingénieur Systèmes & Réseaux",
  description: "Portfolio professionnel de David, expert en infrastructure, réseaux et développement full-stack.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-950 text-slate-200 antialiased`}>
        {children}
        {/* 2. Ajout du composant qui va collecter les métriques */}
        <SpeedInsights />
      </body>
    </html>
  );
}