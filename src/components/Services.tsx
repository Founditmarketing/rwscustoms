import { ArrowRight, ArrowLeft } from "lucide-react";

export function Services() {
  const services = [
    {
      title: "Custom Welding Services",
      category: "FABRICATION",
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Land Clearing",
      category: "SITE PREP",
      image: "https://images.unsplash.com/photo-1582299596162-87002b8da46e?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Dirt Spreading & Leveling",
      category: "EARTHWORK",
      image: "https://images.unsplash.com/photo-1579482590623-146b9a8cb404?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Stump Grinding",
      category: "MAINTENANCE",
      image: "https://images.unsplash.com/photo-1590494498305-64491795db28?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Trenching Services",
      category: "EXCAVATION",
      image: "https://images.unsplash.com/photo-1616012489816-5e0423c5ed9d?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Trailer Rentals",
      category: "EQUIPMENT",
      image: "https://images.unsplash.com/photo-1583480026218-12cd232822a9?q=80&w=2070&auto=format&fit=crop",
    },
  ];

  return (
    <section id="services" className="bg-white text-black py-32 relative overflow-hidden flex flex-col items-center min-h-[800px] justify-center">
      {/* Background Faded Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none overflow-hidden z-0">
        <h2 className="font-serif text-[15rem] md:text-[22rem] font-bold text-[#f5f5f5] leading-none whitespace-nowrap">
          Services
        </h2>
      </div>

      <div className="relative z-10 w-full pl-6 lg:pl-12 flex flex-col lg:flex-row items-center justify-between mt-12 gap-12">
        {/* Left Side */}
        <div className="flex-1 lg:max-w-sm">
          <h2 className="font-serif text-4xl md:text-5xl font-bold leading-tight mb-6">
            Our Core Services
          </h2>
          <p className="font-sans text-gray-600 text-lg mb-8">
            Whether fabricating a custom metal structure or clearing an acre of dense brush, delivering on the vision of our clients is our passion.
          </p>
          <div className="flex space-x-4">
            <button className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors">
              <ArrowLeft className="w-5 h-5 text-black" />
            </button>
            <button className="w-12 h-12 rounded-full bg-brand-grey text-white flex items-center justify-center hover:bg-black transition-colors">
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Right Side Cards */}
        <div className="flex-1 w-full lg:w-auto flex gap-6 overflow-x-auto snap-x hide-scrollbar">
           {services.map((service, idx) => (
            <div 
              key={idx} 
              className="relative w-[280px] h-[450px] md:w-[320px] md:h-[550px] flex-shrink-0 group cursor-pointer snap-center"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${service.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                <p className="font-sans text-xs tracking-widest font-bold uppercase mb-2">
                  {service.category}
                </p>
                <h3 className="font-serif text-2xl md:text-3xl font-bold">
                  {service.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
