"use client"
import { useState } from "react"
import NavBar from "@/components/NavBar"
import Footer from "@/components/Footer"
import CtaBanner from "@/components/CtaBanner"

type Category = "All" | "Residential" | "Commercial" | "Interior" | "Roof"

const images: { title: string; category: Exclude<Category, "All">; src: string }[] = [
  // ── Residential ──
  { title: "Modern New Build Exterior", category: "Residential", src: "/gallery/modern-residential-painting-christchurch.png" },
  { title: "Completed Christchurch Home", category: "Residential", src: "/gallery/residential-exterior-painting-completed-christchurch.png" },
  { title: "Large Canterbury Estate", category: "Residential", src: "/gallery/large-residential-painting-canterbury.png" },
  { title: "Heritage Bungalow Repaint", category: "Residential", src: "/gallery/residential-bungalow-grey-cladding-exterior-christchurch.jpg" },
  { title: "Modern Townhouse Cladding", category: "Residential", src: "/gallery/exterior-modern-townhouses-black-white-cladding-christchurch.jpg" },
  { title: "New Build Two-Storey Exterior", category: "Residential", src: "/gallery/new-build-exterior-two-storey-dark-cladding-christchurch.jpg" },
  { title: "Two-Storey Weatherboard Repaint", category: "Residential", src: "/gallery/residential-repaint-two-storey-weatherboard-christchurch.jpg" },
  { title: "New Build Dark & Cedar Exterior", category: "Residential", src: "/gallery/new-build-exterior-dark-garage-cedar-cladding-christchurch.jpg" },
  { title: "Garage Door Painting", category: "Residential", src: "/gallery/exterior-garage-doors-charcoal-christchurch.jpg" },
  { title: "Residential Exterior & Fencing", category: "Residential", src: "/gallery/residential-exterior-white-fence-grey-cladding-christchurch.png" },

  { title: "Feature Yellow Cladding Exterior", category: "Residential", src: "/gallery/residential-exterior-yellow-cladding-feature-christchurch.png" },
  { title: "Exterior Preparation Work", category: "Residential", src: "/gallery/residential-painter-exterior-prep-christchurch.png" },
  { title: "Exterior Surface Preparation", category: "Residential", src: "/gallery/exterior-preparation-painting-christchurch.png" },

  // ── Commercial ──
  { title: "Commercial Scaffolding Project", category: "Commercial", src: "/gallery/commercial-painting-project-scaffolding-christchurch.png" },
  { title: "Coupland's Bakeries Exterior", category: "Commercial", src: "/gallery/commercial-couplands-bakeries-exterior-painting-christchurch.jpg" },
  { title: "Commercial Feature Wall Mural", category: "Commercial", src: "/gallery/commercial-exterior-navy-feature-mural-christchurch.png" },
  { title: "Community Building Exterior", category: "Commercial", src: "/gallery/commercial-community-building-red-soffits-christchurch.png" },

  { title: "Multi-Unit Development Exterior", category: "Commercial", src: "/gallery/commercial-multi-unit-development-exterior-christchurch.png" },
  { title: "Commercial Interior Feature Wall", category: "Commercial", src: "/gallery/commercial-interior-curved-navy-feature-wall-christchurch.jpg" },
  { title: "Commercial Interior Repaint", category: "Commercial", src: "/gallery/commercial-interior-feature-wall-repaint-christchurch.png" },

  // ── Interior ──
  { title: "Modern Kitchen Interior", category: "Interior", src: "/gallery/interior-painting-modern-kitchen-christchurch.png" },
  { title: "Open Plan Kitchen & Feature Wall", category: "Interior", src: "/gallery/interior-open-plan-kitchen-feature-wall-christchurch.jpg" },
  { title: "Vaulted Ceiling New Build", category: "Interior", src: "/gallery/interior-vaulted-ceiling-new-build-white-christchurch.jpg" },
  { title: "Living Room Fresh Finish", category: "Interior", src: "/gallery/interior-living-room-fresh-paint-christchurch.png" },
  { title: "Apartment Interior Finish", category: "Interior", src: "/gallery/interior-apartment-styled-fresh-paint-christchurch.png" },
  { title: "Grey Feature Wall & Pendant Light", category: "Interior", src: "/gallery/interior-grey-feature-wall-pendant-light-christchurch.png" },
  { title: "Fresh White Open Plan", category: "Interior", src: "/gallery/interior-fresh-white-open-plan-new-build-christchurch.png" },
  { title: "Plastering New Build Interior", category: "Interior", src: "/gallery/interior-plasterboard-new-build-christchurch.png" },
  { title: "Kitchen Interior Preparation", category: "Interior", src: "/gallery/interior-new-build-kitchen-preparation-christchurch.png" },
  { title: "Interior Work in Progress", category: "Interior", src: "/gallery/interior-house-painting-in-progress.png" },

  // ── Roof ──
  { title: "Aerial Corrugated Iron Roof Paint", category: "Roof", src: "/gallery/roof-painting-corrugated-iron-aerial-christchurch.jpg" },
  { title: "Roof Painting in Progress", category: "Roof", src: "/gallery/roof-painting-worker-corrugated-iron-christchurch.png" },
]

const TABS: Category[] = ["All", "Residential", "Commercial", "Interior", "Roof"]
const INITIAL_COUNT = 12

export default function GalleryPage() {
  const [active, setActive] = useState<Category>("All")
  const [showAll, setShowAll] = useState(false)

  const filtered = active === "All" ? images : images.filter((i) => i.category === active)
  const visible = showAll ? filtered : filtered.slice(0, INITIAL_COUNT)
  const hasMore = filtered.length > INITIAL_COUNT && !showAll

  return (
    <>
      <NavBar />
      <main className="pt-20">
        {/* Header */}
        <section className="bg-charcoal py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-white mb-4 uppercase tracking-tight">
              Our <span className="text-red">Work</span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto font-body">
              A showcase of our recent painting and plastering projects across Christchurch and Canterbury.
            </p>
          </div>
        </section>

        {/* Filter tabs */}
        <section className="bg-white border-b border-charcoal/10 sticky top-16 z-30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex gap-1 overflow-x-auto py-4 scrollbar-none">
              {TABS.map((tab) => {
                const count = tab === "All" ? images.length : images.filter((i) => i.category === tab).length
                return (
                  <button
                    key={tab}
                    onClick={() => { setActive(tab); setShowAll(false) }}
                    className={`flex-shrink-0 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                      active === tab
                        ? "bg-[#E31B23] text-white shadow-md"
                        : "bg-charcoal/5 text-charcoal/60 hover:bg-charcoal/10 hover:text-charcoal"
                    }`}
                  >
                    {tab}
                    <span className={`ml-1.5 text-xs ${active === tab ? "opacity-80" : "opacity-50"}`}>
                      ({count})
                    </span>
                  </button>
                )
              })}
            </div>
          </div>
        </section>

        {/* Grid */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {visible.map((img, i) => (
                <div
                  key={img.src}
                  className="group relative overflow-hidden rounded-xl bg-grey aspect-[4/3] border border-charcoal/5 shadow-sm"
                >
                  <img
                    src={img.src}
                    alt={`${img.title} — Garden City Painters Christchurch`}
                    width={800}
                    height={600}
                    loading={i < 6 ? "eager" : "lazy"}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-charcoal/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                    <div>
                      <span className="text-red text-xs font-bold uppercase tracking-widest">{img.category}</span>
                      <h3 className="text-white font-heading font-bold text-base leading-tight mt-0.5">{img.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load more */}
            {hasMore && (
              <div className="mt-12 text-center">
                <button
                  onClick={() => setShowAll(true)}
                  className="bg-charcoal hover:bg-charcoal/80 text-white px-10 py-4 rounded font-semibold text-sm transition-colors duration-200"
                >
                  Show all {filtered.length - INITIAL_COUNT} more
                </button>
              </div>
            )}

            {/* Empty state */}
            {filtered.length === 0 && (
              <p className="text-center text-charcoal/40 py-20 font-body">No images in this category yet.</p>
            )}
          </div>
        </section>

        <CtaBanner />
      </main>
      <Footer />
    </>
  )
}
