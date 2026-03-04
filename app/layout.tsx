import type { Metadata } from "next";
import { Providers } from "./providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "PrimeEstate - Luxury Real Estate",
  description: "Experience the pinnacle of luxury real estate. Curated properties for the discerning buyer.",
  openGraph: {
    type: "website",
    title: "PrimeEstate - Luxury Real Estate",
    description: "Experience the pinnacle of luxury real estate. Curated properties for the discerning buyer.",
  },
  twitter: {
    card: "summary_large_image",
    title: "PrimeEstate - Luxury Real Estate",
    description: "Experience the pinnacle of luxury real estate. Curated properties for the discerning buyer.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
