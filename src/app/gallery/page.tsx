import NavBar from "@/components/NavBar"
import Footer from "@/components/Footer"
import CtaBanner from "@/components/CtaBanner"

export const metadata = {
  title: "Our Work | Garden City Painters",
  description: "View our portfolio of residential, commercial, and roof painting projects across Christchurch.",
}

const images = [
  { id: 1, title: "Modern Residential Exterior", type: "Residential", src: "https://images.unsplash.com/photo-1518605336397-90db35f549a1?auto=format&fit=crop&w=800&q=80" },
  { id: 2, title: "Contemporary Interior", type: "Interior", src: "https://images.unsplash.com/photo-1589939705384-5185138a04b9?auto=format&fit=crop&w=800&q=80" },
  { id: 3, title: "Roof Restoration", type: "Roof", src: "https://images.unsplash.com/photo-1632759162353-066e4a2e584a?auto=format&fit=crop&w=800&q=80" },
  { id: 4, title: "Commercial Office Painting", type: "Commercial", src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80" },
  { id: 5, title: "Kitchen Cabinet Refinishing", type: "Interior", src: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80" },
  { id: 6, title: "Character Home Restoration", type: "Residential", src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" },
]

export default function GalleryPage() {
  return (
    <>
      <NavBar />
      <main className="pt-20">
        <section className="bg-charcoal py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-white mb-4">Our Work</h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              A showcase of our recent painting and plastering projects across the Canterbury region.
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {images.map((img) => (
                <div key={img.id} className="group relative overflow-hidden rounded-xl bg-grey aspect-[4/3]">
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-charcoal/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div>
                      <span className="text-red text-xs font-bold uppercase tracking-widest">{img.type}</span>
                      <h3 className="text-white font-heading font-bold text-lg">{img.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <CtaBanner />
      </main>
      <Footer />
    </>
  )
}
