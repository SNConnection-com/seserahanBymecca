import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const siteUrl = "https://seserahanbymecca.snconnection.id";
const title = "Seserahan by Mecca — Jasa Seserahan & Mahar Pernikahan Custom Tangerang";
const description =
  "Seserahan by Mecca merangkai seserahan pernikahan, lamaran, tunangan, dan mahar akrilik custom dengan desain elegan dan penuh ketelitian. Konsultasi gratis lewat WhatsApp, melayani Tangerang & seluruh Indonesia.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s — Seserahan by Mecca",
  },
  description,
  keywords: [
    "seserahan",
    "seserahan pernikahan",
    "seserahan nikah",
    "seserahan lamaran",
    "hantaran pernikahan",
    "mahar akrilik",
    "jasa seserahan Tangerang",
    "pernikahan",
    "hampers lamaran",
  ],
  authors: [{ name: "Seserahan by Mecca" }],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteUrl,
    siteName: "Seserahan by Mecca",
    title,
    description,
    images: [
      {
        url: "/images/hero1.jpeg",
        width: 1200,
        height: 1200,
        alt: "Seserahan by Mecca — rangkaian seserahan pernikahan custom",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/hero1.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600&family=Alex+Brush&family=Mulish:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
