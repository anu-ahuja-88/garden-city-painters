import NavBar from "@/components/NavBar"
import Footer from "@/components/Footer"
import CtaBanner from "@/components/CtaBanner"

export const metadata = {
  title: "Our Work | Garden City Painters",
  description: "View our portfolio of residential, commercial, and roof painting projects across Christchurch.",
}

const images = [
  { 
    id: 1, 
    title: "Modern Residential Exterior", 
    type: "Residential", 
    src: "/gallery/modern-residential-painting-christchurch.png" 
  },
  { 
    id: 2, 
    title: "Professional Interior Finish", 
    type: "Interior", 
    src: "/gallery/interior-painting-modern-kitchen-christchurch.png" 
  },
  { 
    id: 3, 
    title: "Commercial Site Scaffolding", 
    type: "Commercial", 
    src: "/gallery/commercial-painting-project-scaffolding-christchurch.png" 
  },
  { 
    id: 4, 
    title: "Completed Christchurch Home", 
    type: "Residential", 
    src: "/gallery/residential-exterior-painting-completed-christchurch.png" 
  },
  { 
    id: 5, 
    title: "Large Canterbury Estate", 
    type: "Residential", 
    src: "/gallery/large-residential-painting-canterbury.png" 
  },
  { 
    id: 6, 
    title: "Interior Work In Progress", 
    type: "Interior", 
    src: "/gallery/interior-house-painting-in-progress.png" 
  },
  { 
    id: 7, 
    title: "Public Building Detailing", 
    type: "Commercial", 
    src: "/gallery/roof-painting-restoration-christchurch.png" 
  },
  { 
    id: 8, 
    title: "Exterior Preparation", 
    type: "Residential", 
    src: "/gallery/exterior-preparation-painting-christchurch.png" 
  },
  { 
    id: 9, 
    title: "Winter Service Readiness", 
    type: "Van", 
    src: "/gallery/garden-city-painters-van-snow.png" 
  },
]

export default function GalleryPage() {
  return (
    <>
      <NavBar />
      <main className="pt-20">
        <section className="bg-charcoal py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-white mb-4 uppercase tracking-tight">Our <span className="text-red">Work</span></h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto font-body">
              A showcase of our recent painting and plastering projects across the Canterbury region.
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {images.map((img) => (
                <div key={img.id} className="group relative overflow-hidden rounded-xl bg-grey aspect-[4/3] border border-charcoal/5 shadow-sm">
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-charcoal/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div>
                      <span className="text-red text-xs font-bold uppercase tracking-widest">{img.type}</span>
                      <h3 className="text-white font-heading font-bold text-lg leading-tight">{img.title}</h3>
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
