import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://anthoserv-ship-it.github.io"),
  title: "AnthoServ | Java Software Developer",
  description:
    "Portafolio de AnthoServ: desarrollo Java empresarial, JSF, PrimeFaces, Jakarta EE y herramientas para desarrolladores.",
  authors: [{ name: "AnthoServ", url: "https://github.com/AnthoServ-Ship-it" }],
  keywords: [
    "AnthoServ",
    "Java developer",
    "Jakarta EE",
    "Java EE",
    "JSF",
    "PrimeFaces",
    "VS Code Extension",
  ],
  openGraph: {
    type: "website",
    locale: "es_EC",
    url: "https://anthoserv-ship-it.github.io",
    siteName: "AnthoServ",
    title: "AnthoServ | Java Software Developer",
    description:
      "Software empresarial con criterio técnico. Java, Jakarta EE, JSF, PrimeFaces y developer tooling.",
    images: [
      {
        url: "/og.png",
        width: 1730,
        height: 909,
        alt: "AnthoServ — Software empresarial con criterio técnico",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AnthoServ | Java Software Developer",
    description:
      "Software empresarial con criterio técnico. Java, Jakarta EE, JSF, PrimeFaces y developer tooling.",
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
