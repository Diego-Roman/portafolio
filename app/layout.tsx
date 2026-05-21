import type { Metadata } from "next";
import { Space_Grotesk, Geist_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Diego Aguirre — Full Stack Developer & Automatización IA",
  description:
    "Desarrollador Full Stack especializado en interfaces modernas, backend Python y automatización de flujos con IA. Disponible para proyectos freelance.",
  keywords: [
    "Full Stack Developer",
    "Automatización IA",
    "React",
    "Next.js",
    "Python",
    "n8n",
    "freelance",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${spaceGrotesk.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-[#0b0f1a]">{children}</body>
    </html>
  );
}
