import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Painters & Plasterers Christchurch | Garden City Painters",
  description:
    "Garden City Painters — Trade qualified Master Painters delivering high-quality residential and commercial painting across Christchurch & Canterbury. Over 15 years experience.",
  keywords:
    "painters Christchurch, painting contractors Christchurch, commercial painters Christchurch, residential painters Canterbury, plasterers Christchurch, Master Painters Christchurch, roof painting Christchurch",
  openGraph: {
    title: "Painters & Plasterers Christchurch | Garden City Painters",
    description:
      "Trade qualified Master Painters delivering high-quality residential and commercial painting across Christchurch & Canterbury.",
    type: "website",
    locale: "en_NZ",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-NZ" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Garden City Painters",
              telephone: "022 351 5421",
              email: "info@gardencitypainters.co.nz",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Christchurch",
                addressRegion: "Canterbury",
                addressCountry: "NZ",
              },
              serviceArea: [
                { "@type": "City", name: "Christchurch" },
                { "@type": "AdministrativeArea", name: "Canterbury" },
              ],
              description:
                "Trade qualified Master Painters delivering high-quality residential and commercial painting and plastering across Christchurch & Canterbury for over 15 years.",
              priceRange: "$$",
            }),
          }}
        />
      </head>
      <body className="font-body antialiased bg-white text-[#1C1C1E]">{children}</body>
    </html>
  )
}
