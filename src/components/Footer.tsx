import { Facebook, Youtube, MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { servicesData } from "../data/services";

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white pt-24 pb-12 px-6 lg:px-12 flex flex-col font-sans border-t border-white/10 relative overflow-hidden">
      
      {/* Massive Background Text at the Bottom */}
      <div className="absolute bottom-0 left-0 w-full flex justify-center pointer-events-none select-none overflow-hidden z-0 opacity-[0.03]">
        <h2 
          className="font-heading text-[16vw] font-bold text-transparent leading-[0.7] whitespace-nowrap tracking-tighter uppercase" 
          style={{ WebkitTextStroke: "2px #fff" }}
        >
          CONTACT US
        </h2>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 border-b border-[#222] pb-24">
        
        {/* Column 1: Brand & Contact Info (span 4) */}
        <div className="lg:col-span-4 flex flex-col items-start">
          <img src="/rws-logo.png" alt="RWS Customs Logo" className="h-16 w-auto mb-6 object-contain" />
          <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-sm">
            Premium land clearing, custom fabrication, and site prep services in East Texas. We bring industrial-grade equipment and generational expertise to every job.
          </p>
          
          <div className="flex flex-col space-y-4 text-sm text-gray-300">
            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-brand-grey" />
              <span>3701 Brownlea Rd, Silsbee, TX</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-brand-grey" />
              <span>(409) 651-9394</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-brand-grey" />
              <span>rwscustomwork@gmail.com</span>
            </div>
          </div>
        </div>

        {/* Column 2: Quick Links (span 2) */}
        <div className="lg:col-span-2 flex flex-col">
          <h3 className="font-heading text-lg font-bold mb-6 uppercase tracking-widest text-white">Links</h3>
          <div className="flex flex-col space-y-4 text-sm text-gray-400">
            <Link to="/#services" className="hover:text-brand-grey transition-colors">Services</Link>
            <Link to="/gallery" className="hover:text-brand-grey transition-colors">Projects</Link>
            <Link to="/about" className="hover:text-brand-grey transition-colors">About Us</Link>
            <Link to="/locations" className="hover:text-brand-grey transition-colors">Location</Link>
          </div>
        </div>

        {/* Column 3: Services (span 2) */}
        <div className="lg:col-span-2 flex flex-col">
          <h3 className="font-heading text-lg font-bold mb-6 uppercase tracking-widest text-white">Services</h3>
          <div className="flex flex-col space-y-4 text-sm text-gray-400">
            <Link to="/services/land-clearing" className="hover:text-brand-grey transition-colors">Land Clearing</Link>
            <Link to="/services/custom-welding" className="hover:text-brand-grey transition-colors">Custom Welding</Link>
            <Link to="/services/dirt-spreading" className="hover:text-brand-grey transition-colors">Dirt Spreading</Link>
            <Link to="/services/trenching-services" className="hover:text-brand-grey transition-colors">Trenching</Link>
          </div>
        </div>

        {/* Column 4: Quick Contact Form (span 4) */}
        <div className="lg:col-span-4 flex flex-col">
          <h3 className="font-heading text-lg font-bold mb-6 uppercase tracking-widest text-white">Quick Contact</h3>
          <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
            <div className="flex gap-4">
              <input 
                type="text" 
                placeholder="Name" 
                className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 text-sm focus:outline-none focus:border-brand-grey transition-colors placeholder:text-gray-500"
                required
              />
              <input 
                type="tel" 
                placeholder="Phone Number" 
                className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 text-sm focus:outline-none focus:border-brand-grey transition-colors placeholder:text-gray-500"
                required
              />
            </div>
            <select 
              className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 text-sm focus:outline-none focus:border-brand-grey transition-colors appearance-none cursor-pointer placeholder:text-gray-500"
              required
            >
              <option value="" className="bg-[#0a0a0a]">Select a service...</option>
              {servicesData.map((s, i) => (
                <option key={i} value={s.slug} className="bg-[#0a0a0a]">{s.title}</option>
              ))}
              <option value="other" className="bg-[#0a0a0a]">Other</option>
            </select>
            <textarea 
              placeholder="How can we help?" 
              rows={3}
              className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 text-sm focus:outline-none focus:border-brand-grey transition-colors placeholder:text-gray-500 resize-none"
              required
            />
            <button 
              type="submit" 
              className="w-full bg-brand-grey text-black hover:bg-white font-bold uppercase tracking-widest text-xs py-4 transition-colors mt-2"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-center text-xs font-semibold tracking-widest text-[#666] gap-6 uppercase pt-8">
        <div className="flex flex-wrap items-center justify-center md:justify-start space-x-6 md:space-x-12">
          <span>© {new Date().getFullYear()} RWS Customs</span>
          <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link to="/privacy-policy" className="hover:text-white transition-colors">Terms of Use</Link>
        </div>
        
        <div className="flex items-center space-x-6">
          <a href="https://www.facebook.com/RWSCustoms/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-white transition-colors text-brand-grey">
            <Facebook className="w-5 h-5" />
          </a>
          <a href="https://www.youtube.com/@RWSCustoms" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-white transition-colors text-brand-grey">
            <Youtube className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
