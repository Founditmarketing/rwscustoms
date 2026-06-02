import { Search } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "RWS Customs Shop",
      category: "WELDING",
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Hardin County Expansion",
      category: "LAND CLEARING",
      image: "https://images.unsplash.com/photo-1582299596162-87002b8da46e?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Silsbee Municipal Trenching",
      category: "TRENCHING",
      image: "https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Private Estate Levelling",
      category: "LEVELLING",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop",
    },
    {
      title: "Pipeline Fabrication",
      category: "WELDING",
      image: "https://images.unsplash.com/photo-1533261763137-02eb665ab157?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Commercial Site Prep",
      category: "SITE PREP",
      image: "https://images.unsplash.com/photo-1582299596162-87002b8da46e?q=80&w=2070&auto=format&fit=crop",
    },
  ];

  return (
    <section id="projects" className="bg-black text-white py-32 relative overflow-hidden flex flex-col items-center">

      <div className="relative z-10 w-full mb-20 px-6 text-center mt-20 flex items-center justify-center min-h-[160px]">
        {/* Background Faded Text now centered directly with this block */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0">
          <h2 className="font-serif text-[6rem] md:text-[10rem] font-bold text-[#1a1a1a] leading-none whitespace-nowrap">
            Projects
          </h2>
        </div>
        
        <div className="relative z-10 inline-flex flex-wrap items-center justify-center text-3xl md:text-5xl font-serif font-bold">
          <span className="mr-4">I'm interested in</span>
          <div className="relative inline-block border-b-2 border-brand-grey pb-1 pr-12 cursor-pointer mt-4 md:mt-0">
            <span className="text-brand-grey">service</span>
            <span className="absolute right-0 top-1/2 -translate-y-1/2 text-brand-grey text-2xl">⌄</span>
          </div>
          <button className="ml-6 mt-4 md:mt-0 w-12 h-12 rounded-full bg-brand-grey flex items-center justify-center hover:bg-white hover:text-black transition-colors text-black shrink-0">
            <Search className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Strict Gallery Grid */}
      <div className="relative z-10 w-full max-w-[90rem] mx-auto px-6 lg:px-12 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div 
              key={idx} 
              className="relative w-full aspect-square group cursor-pointer overflow-hidden border border-white/10"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                style={{ backgroundImage: `url(${project.image})` }}
              />
              
              {/* Overlays */}
              <div className="absolute inset-0 bg-black/40 transition-opacity duration-500 group-hover:opacity-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              
              {/* Content visible by default, sliding up on hover */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-8 transition-transform duration-500 group-hover:translate-y-0">
                <p className="font-sans text-xs tracking-[0.2em] font-bold uppercase mb-3 text-brand-grey drop-shadow-md">
                  {project.category}
                </p>
                <h3 className="font-serif text-3xl md:text-4xl font-bold leading-tight drop-shadow-lg">
                  {project.title}
                </h3>
                
                {/* Reveal button */}
                <div className="mt-6 overflow-hidden">
                  <div className="inline-flex items-center gap-2 text-sm font-sans font-semibold uppercase tracking-widest translate-y-full opacity-0 transition-all duration-500 delay-100 group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="border-b border-white pb-1">View Details</span>
                    <span className="text-brand-grey ml-2">→</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
