import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { servicesData } from "../data/services";

export function Services() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -364, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 364, behavior: 'smooth' });
    }
  };
  const services = servicesData;

  return (
    <section id="services" className="bg-[#f4f5f6] text-black py-16 lg:py-32 relative overflow-hidden flex flex-col items-center lg:min-h-[800px] justify-center">
      {/* Background Faded Text */}
      <div className="absolute top-0 left-0 w-full flex justify-center pointer-events-none select-none overflow-hidden z-0 pt-16 md:pt-0">
        <h2 className="font-heading text-[18vw] md:text-[12.5vw] font-bold text-transparent leading-[0.85] md:leading-none tracking-tight whitespace-nowrap" style={{ WebkitTextStroke: "2px #ececec" }}>
          SERVICES
        </h2>
      </div>

      <div className="relative z-10 w-full pl-6 lg:pl-12 xl:pl-24 flex flex-col lg:flex-row items-center justify-between mt-12 gap-12">
        {/* Left Side */}
        <div className="flex-1 lg:max-w-md xl:max-w-lg mb-6 lg:mb-0">
          <div className="border-l-[3px] border-[#333] pl-6 mb-8">
            <h2 className="font-heading text-5xl md:text-6xl lg:text-[4.5rem] font-bold leading-[1.1] uppercase text-[#111]">
              BUILT FOR<br/>
              THE TOUGH<br/>
              <span className="text-brand-grey">JOBS</span>
            </h2>
          </div>
          <p className="font-sans text-gray-600 text-sm md:text-base mb-10 font-medium leading-relaxed max-w-sm pl-6 pr-6 lg:pr-0">
            RWS Customs delivers industrial-grade land clearing, custom fabrication, and site prep. We have the equipment, the experience, and the drive to get your project done right.
          </p>
          <div className="flex space-x-4 pl-6">
            <button 
              onClick={scrollLeft}
              className="w-12 h-12 bg-white flex items-center justify-center shadow-sm border border-gray-100 hover:bg-gray-50 transition-colors text-black group"
            >
              <ChevronLeft className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" />
            </button>
            <button 
              onClick={scrollRight}
              className="w-12 h-12 bg-white flex items-center justify-center shadow-sm border border-gray-100 hover:bg-gray-50 transition-colors text-black group"
            >
              <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" />
            </button>
          </div>
        </div>

        {/* Right Side Cards */}
        <div 
          ref={scrollRef}
          className="flex-1 w-full lg:w-auto flex gap-6 overflow-x-auto snap-x hide-scrollbar pb-8 pt-4 lg:pl-12"
        >
           {services.map((service, idx) => (
            <Link 
              key={idx} 
              to={`/services/${service.slug}`}
              className="w-[300px] md:w-[340px] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)] flex-shrink-0 flex flex-col snap-center group cursor-pointer relative overflow-hidden transition-all duration-500 border border-gray-100 hover:border-brand-grey/30"
            >
              {/* Top Hover Accent Line */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-brand-grey scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 z-20"></div>

              {/* Image Section */}
              <div className="h-48 md:h-56 w-full overflow-hidden bg-gray-200 relative">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
                  style={{ backgroundImage: `url(${service.image})` }} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
                
                {/* Service Number Badge */}
                <div className="absolute bottom-0 left-0 bg-white group-hover:bg-black px-5 py-3 font-heading font-bold text-lg md:text-xl text-black group-hover:text-white z-10 flex items-center justify-center transition-colors duration-500">
                  0{idx + 1}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 flex flex-col flex-1 relative bg-white group-hover:bg-black transition-colors duration-500">
                <h3 className="font-heading text-lg md:text-xl font-bold uppercase mb-4 tracking-wide text-black leading-tight group-hover:text-white transition-colors duration-300">
                  {service.title}
                </h3>
                
                <div className="w-10 h-[2px] bg-brand-grey/40 mb-6 group-hover:bg-brand-grey transition-colors duration-300"></div>

                <p className="font-sans text-xs md:text-sm text-gray-500 mb-8 leading-relaxed flex-1 group-hover:text-gray-300 transition-colors duration-500">
                  {service.shortDescription}
                </p>

                <div className="mt-auto flex items-center justify-between border-t border-gray-100 group-hover:border-white/10 pt-6 group/link cursor-pointer transition-colors duration-500">
                  <span className="font-sans text-xs font-bold tracking-[0.2em] uppercase text-[#444] group-hover:text-white transition-colors duration-500">
                    READ MORE
                  </span>
                  <span className="w-10 h-10 rounded-full border border-gray-200 group-hover:border-white/20 flex items-center justify-center text-brand-grey group-hover/link:bg-brand-grey group-hover/link:text-white group-hover/link:border-brand-grey transition-all duration-300">
                    <span className="transform group-hover/link:translate-x-0.5 transition-transform duration-300">→</span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
