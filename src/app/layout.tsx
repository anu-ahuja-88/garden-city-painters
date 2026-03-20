import type { Metadata } from "next"
import { Inter, Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
})

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
})

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
  icons: {
    icon: [
      { url: "/icon.png" },
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-NZ" className={`scroll-smooth ${inter.variable} ${plusJakartaSans.variable}`}>
      <head>
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
