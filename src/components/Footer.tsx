import { ArrowRight, Facebook, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black text-white pt-24 pb-8 px-6 lg:px-12 flex flex-col font-sans">
      
      {/* Top Section */}
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row justify-between mb-24 gap-16 border-b border-[#222] pb-24">
        
        {/* Left 'Let's chat' */}
        <div className="flex-1 flex flex-col items-start">
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-16">
            Let's chat.
          </h2>
          
          {/* Circular Graphic */}
          <div className="relative w-40 h-40 animate-spin-slow flex items-center justify-center">
             {/* Text arranged in a circle - using an SVG is cleaner for this */}
             <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full text-white">
                <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent" />
                <text className="text-[10px] uppercase tracking-[0.2em] font-bold" fill="currentColor">
                  <textPath href="#circlePath" startOffset="0%">
                    Contact Us Today • Contact Us Today •
                  </textPath>
                </text>
             </svg>
             {/* Center Arrow */}
             <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
               <ArrowRight className="w-8 h-8 text-brand-grey" />
             </div>
          </div>
        </div>

        {/* Right Columns */}
        <div className="flex-1 flex flex-col md:flex-row gap-16 lg:gap-24 uppercase font-bold text-sm tracking-widest">
          <div className="flex flex-col space-y-6">
            <h3 className="text-gray-500 mb-2 font-serif text-xs">Work with us</h3>
            <a href="#" className="hover:text-brand-grey transition-colors">Services</a>
            <a href="#" className="hover:text-brand-grey transition-colors">Gallery</a>
          </div>
          
          <div className="flex flex-col space-y-6">
            <h3 className="text-gray-500 mb-2 font-serif text-xs">Learn More</h3>
            <a href="#" className="hover:text-brand-grey transition-colors">About</a>
            <a href="#" className="hover:text-brand-grey transition-colors">Location</a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-center text-xs font-semibold tracking-widest text-[#888] gap-6 uppercase">
        <div className="flex flex-wrap items-center justify-center md:justify-start space-x-6 md:space-x-12">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
          <span>© RWS Customs</span>
        </div>
        
        <div className="flex items-center space-x-8">
          <a href="#" aria-label="Facebook" className="hover:text-white transition-colors text-brand-grey">
            <Facebook className="w-5 h-5" />
          </a>
          <a href="#" aria-label="YouTube" className="hover:text-white transition-colors text-brand-grey">
            <Youtube className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
