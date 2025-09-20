import type { Metadata } from "next";
import { IBM_Plex_Mono, Manrope, Inter } from "next/font/google";
import "~/app/globals.css";
import { Footer } from "~/components/layout/Footer";
import { Header } from "~/components/layout/Header";
import { LogoPattern } from "~/components/ui/LogoPattern";
import { LoadingScreen } from "~/components/ui/LoadingScreen";
import { ScrollScanEffect } from "~/components/ui/ScrollScanEffect";
import { ScrollProgressBar } from "~/components/ui/ScrollProgressBar";
import { TRPCReactProvider } from "~/trpc/provider";
import { StructuredData } from "~/components/ui/StructuredData";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-display"
});

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-body"
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
  variable: "--font-mono"
});

export const metadata: Metadata = {
  title: "NEXUS Event Space • Аренда пространства для мероприятий в СПб",
  description:
    "NEXUS Event Space — 800 м² многофункционального пространства для мероприятий в центре Санкт-Петербурга. Аренда зала для корпоративов, концертов, выставок. Профессиональное техническое оснащение, вместимость до 500 человек.",
  keywords: [
    "аренда пространства СПб",
    "площадка для мероприятий",
    "event space",
    "аренда зала",
    "корпоративные мероприятия",
    "концерты",
    "выставки",
    "банкетный зал",
    "техническое оснащение",
    "Санкт-Петербург"
  ],
  authors: [{ name: "NEXUS Event Space" }],
  creator: "NEXUS Event Space",
  publisher: "NEXUS Event Space",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://nexus-events.ru"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "NEXUS Event Space — Аренда пространства для мероприятий в СПб",
    description:
      "800 м² трансформируемого пространства с профессиональным техническим оснащением. Идеально для корпоративов, концертов, выставок и частных мероприятий в центре Санкт-Петербурга.",
    url: "https://nexus-events.ru",
    siteName: "NEXUS Event Space",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NEXUS Event Space - Аренда пространства для мероприятий",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NEXUS Event Space — Аренда пространства для мероприятий в СПб",
    description:
      "800 м² трансформируемого пространства с профессиональным техническим оснащением для ваших мероприятий",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    yandex: "your-yandex-verification-code",
    google: "your-google-verification-code",
  },
  other: {
    "preload": [
      "/nexus_logo.svg",
      "/photo_2025-09-20_00-35-13.jpeg",
      "/photo_2025-09-20_00-35-14.jpeg",
      "/photo_2025-09-20_00-35-16.jpeg",
      "/photo_2025-09-20_00-35-17.jpeg"
    ]
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={`${inter.variable} ${manrope.variable} ${plexMono.variable}`}>
      <head>
        <link rel="preload" href="/nexus_logo.svg" as="image" type="image/svg+xml" />
        <link rel="preload" href="/photo_2025-09-20_00-35-13.jpeg" as="image" type="image/jpeg" />
        <link rel="preload" href="/photo_2025-09-20_00-35-14.jpeg" as="image" type="image/jpeg" />
        <link rel="preload" href="/photo_2025-09-20_00-35-16.jpeg" as="image" type="image/jpeg" />
        <link rel="preload" href="/photo_2025-09-20_00-35-17.jpeg" as="image" type="image/jpeg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-body">
        <TRPCReactProvider>
          <LoadingScreen />
          <ScrollScanEffect />
          <ScrollProgressBar />
          <LogoPattern />
          <Header />
          <main id="main" className="bg-black">
            <StructuredData />
            {children}
          </main>
          <Footer />
        </TRPCReactProvider>
      </body>
    </html>
  );
}
