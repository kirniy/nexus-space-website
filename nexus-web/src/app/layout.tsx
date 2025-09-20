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
  title: "NEXUS • Пространство событий",
  description:
    "Брутальный цифровой портал для NEXUS Event Space. Расписание, пространство, резиденты и новая культурная энергия Петербурга.",
  metadataBase: new URL("https://nexus.local"),
  openGraph: {
    title: "NEXUS Event Space",
    description:
      "Контролируемый хаос. Афиша, пространство, резиденты и архив медиаконтента.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={`${inter.variable} ${manrope.variable} ${plexMono.variable}`}>
      <body className="font-body scan-line">
        <TRPCReactProvider>
          <LoadingScreen />
          <ScrollScanEffect />
          <ScrollProgressBar />
          <LogoPattern />
          <Header />
          <main id="main" className="bg-black">
            {children}
          </main>
          <Footer />
        </TRPCReactProvider>
      </body>
    </html>
  );
}
