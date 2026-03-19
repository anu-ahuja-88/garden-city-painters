import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Professional Painters & Plasterers Christchurch | Garden City Painters",
  description:
    "Looking for top-notch painters in Christchurch? Garden City Painters offer trade-qualified expertise in residential & commercial painting and plastering. Grab a free quote from your local Christchurch experts today.",
  keywords:
    "painters Christchurch, painting contractors Christchurch, commercial painters Christchurch, residential painters Canterbury, plasterers Christchurch, Master Painters Christchurch, roof painting Christchurch",
  openGraph: {
    title: "Professional Painters & Plasterers Christchurch | Garden City Painters",
    description:
      "Looking for top-notch painters in Christchurch? We deliver high-quality residential and commercial painting across Canterbury. Get a free quote today.",
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
                "Garden City Painters are your local Christchurch experts for high-end residential and commercial painting and plastering. Trade qualified Master Painters with over 15 years of experience serving the Canterbury region.",
              priceRange: "$$",
            }),
          }}
        />
      </head>
      <body className="font-body antialiased bg-white text-[#1C1C1E]">{children}</body>
    </html>
  )
}
