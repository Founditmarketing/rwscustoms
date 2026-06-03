import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, ShieldCheck } from "lucide-react";

export function Locations() {
  return (
    <main className="bg-black text-white min-h-screen pt-16 lg:pt-24 font-sans">
      
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 flex justify-center overflow-hidden border-b border-white/10">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 scale-105" 
          style={{ backgroundImage: "url(/services/RWStrenching.jpeg)" }}
        />
        <div className="absolute inset-0 bg-black/60 z-0"></div>
        <div className="absolute inset-y-0 left-0 w-full flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden">
          <h1 
            className="font-heading text-[18vw] lg:text-[14vw] font-bold text-transparent leading-none whitespace-nowrap tracking-tight opacity-50" 
            style={{ WebkitTextStroke: "2px rgba(255, 255, 255, 0.10)" }}
          >
            LOCATIONS
          </h1>
        </div>

        <div className="relative z-10 w-full max-w-[90rem] mx-auto px-6 lg:px-12 text-center flex flex-col items-center">
          <h1 className="font-heading text-5xl md:text-7xl lg:text-[5.5rem] font-bold leading-[1.1] uppercase drop-shadow-2xl mb-6">
            SERVICE <span className="text-brand-grey">AREA</span>
          </h1>
          <div className="w-24 h-[3px] bg-brand-grey mb-6"></div>
          <p className="text-gray-400 font-sans text-lg md:text-xl leading-relaxed max-w-2xl">
            Based in Silsbee, Texas, we proudly bring our industrial-grade land clearing, custom welding, and excavation services to properties across all of East Texas.
          </p>
        </div>
      </section>

      {/* Full Width Map Section */}
      <section className="w-full relative border-y border-white/10 flex items-center justify-center overflow-hidden h-[50vh] min-h-[400px] lg:h-[600px]">
        <iframe 
          src="https://maps.google.com/maps?q=3701%20Brownlea%20Rd,%20Silsbee,%20TX&t=&z=9&ie=UTF8&iwloc=&output=embed" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 w-full h-full"
          title="RWS Customs Service Area Map"
        ></iframe>
        
        {/* Service Radius Overlay (Centered over Silsbee) */}
        <div className="absolute w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] bg-brand-grey/20 border-2 border-brand-grey/60 rounded-full pointer-events-none flex flex-col items-center justify-center z-10 shadow-[0_0_50px_rgba(255,200,0,0.1)]">
          <div className="w-3 h-3 bg-brand-grey rounded-full animate-pulse shadow-[0_0_15px_rgba(255,200,0,1)]"></div>
        </div>
        
        {/* Decorative Overlay to match premium feel */}
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,1)] z-20"></div>
      </section>

      {/* Location Details Section */}
      <section className="py-24 px-6 lg:px-12 bg-black">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/* Details */}
          <div className="flex flex-col">
            <h2 className="font-heading text-4xl font-bold uppercase mb-8">Headquarters</h2>
            
            <div className="flex flex-col gap-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-brand-grey text-black flex items-center justify-center shrink-0 rounded-sm">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-xl uppercase mb-1">Address</h3>
                  <p className="text-gray-400 text-lg">3701 Brownlea Rd<br />Silsbee, TX</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#111] border border-white/10 text-white flex items-center justify-center shrink-0 rounded-sm">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-xl uppercase mb-1">Call Us</h3>
                  <a href="tel:4096519394" className="text-gray-400 text-lg hover:text-brand-grey transition-colors">(409) 651-9394</a>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#111] border border-white/10 text-white flex items-center justify-center shrink-0 rounded-sm">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-xl uppercase mb-1">Email</h3>
                  <a href="mailto:rwscustomwork@gmail.com" className="text-gray-400 text-lg hover:text-brand-grey transition-colors">rwscustomwork@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Coverage Info */}
          <div className="flex flex-col bg-[#0a0a0a] p-10 border border-white/5 shadow-2xl">
            <h2 className="font-heading text-3xl font-bold uppercase mb-6 flex items-center gap-3">
              <ShieldCheck className="w-8 h-8 text-brand-grey" />
              Service Radius
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              While our shop is anchored in Silsbee, our heavy equipment and mobile welding rigs are built to travel. We routinely service a wide radius across East Texas.
            </p>
            <ul className="space-y-4 text-white">
              <li className="flex items-center gap-3 border-b border-white/5 pb-4">
                <span className="w-2 h-2 bg-brand-grey rounded-full"></span>
                <span className="font-bold uppercase tracking-widest text-sm">Hardin County</span>
              </li>
              <li className="flex items-center gap-3 border-b border-white/5 pb-4">
                <span className="w-2 h-2 bg-brand-grey rounded-full"></span>
                <span className="font-bold uppercase tracking-widest text-sm">Jefferson County</span>
              </li>
              <li className="flex items-center gap-3 border-b border-white/5 pb-4">
                <span className="w-2 h-2 bg-brand-grey rounded-full"></span>
                <span className="font-bold uppercase tracking-widest text-sm">Orange County</span>
              </li>
              <li className="flex items-center gap-3 pt-2">
                <span className="w-2 h-2 bg-brand-grey rounded-full"></span>
                <span className="font-bold uppercase tracking-widest text-sm">Surrounding East Texas Areas</span>
              </li>
            </ul>
            
            <div className="mt-10">
              <Link 
                to="/contact" 
                className="group relative inline-flex items-center justify-center w-full overflow-hidden bg-brand-grey text-black px-8 py-4 font-sans font-bold tracking-widest uppercase text-sm"
              >
                <span className="absolute inset-0 w-full h-full bg-white -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out z-0"></span>
                <span className="relative z-10 group-hover:text-black transition-colors duration-300 ease-out">
                  Request Service
                </span>
              </Link>
            </div>
          </div>
          
        </div>
      </section>
    </main>
  );
}
