import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { COMPANY_INFO } from "@/lib/data";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "ORA Interior & Construction Solutions | Interior Design & Renovation in Bhopal",
  description:
    "ORA Interior & Construction Solutions provides complete home interior design, renovation, 2D & 3D design, modular kitchen, bedroom, wardrobe and execution solutions in Bhopal.",
  keywords: [
    "Interior Designer in Bhopal",
    "Home Interior Bhopal",
    "Interior Design Bhopal",
    "Home Renovation Bhopal",
    "Modular Kitchen Bhopal",
    "2D 3D Interior Design Bhopal",
    "Bedroom Interior Bhopal",
    "Wardrobe Design Bhopal",
    "Duplex Interior Bhopal",
  ],
  authors: [{ name: "ORA Interior & Construction Solutions" }],
  creator: "ORA Interior & Construction Solutions",
  publisher: "ORA Interior & Construction Solutions",
  metadataBase: new URL("https://orainteriors.com"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    title: "ORA Interior & Construction Solutions | Interior Design & Renovation in Bhopal",
    description:
      "Complete interior design, renovation and execution solutions for modern homes in Bhopal.",
    url: "https://orainteriors.com",
    siteName: "ORA Interior & Construction Solutions",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/logo.png",
        width: 1536,
        height: 1024,
        alt: "ORA Interior & Construction Solutions Bhopal",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: COMPANY_INFO.name,
  logo: "https://orainteriors.com/images/logo.png",
  image: "https://orainteriors.com/images/logo.png",
  telephone: `+91-${COMPANY_INFO.phone}`,
  email: COMPANY_INFO.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Bhopal City",
    addressLocality: COMPANY_INFO.city,
    addressRegion: COMPANY_INFO.state,
    addressCountry: "IN",
  },
  url: "https://orainteriors.com",
  areaServed: {
    "@type": "City",
    name: "Bhopal",
  },
  description:
    "ORA Interior & Construction Solutions provides complete home interior design, renovation, 2D & 3D design, modular kitchen, bedroom, wardrobe and execution solutions in Bhopal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${manrope.variable} ${playfair.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="bg-arch-bg text-arch-text font-sans antialiased min-h-screen flex flex-col"
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
