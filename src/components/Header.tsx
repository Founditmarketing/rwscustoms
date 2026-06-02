import { Search, Facebook, Youtube } from "lucide-react";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col font-sans">
      {/* Top Bar */}
      <div className="bg-black text-white h-16 flex items-center justify-between px-6 border-b border-[#222]">
        {/* Left */}
        <div className="flex items-center space-x-6 text-sm font-semibold tracking-wider">
          <button aria-label="Search">
            <Search className="w-4 h-4 cursor-pointer hover:text-brand-grey transition-colors" />
          </button>
          <a href="#" className="hover:text-brand-grey transition-colors uppercase">Locations</a>
          <a href="#" className="hover:text-brand-grey transition-colors uppercase">Texas Reach</a>
        </div>

        {/* Center Logo */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <a href="#" className="flex items-center justify-center">
            <img src="/rws-logo.png" alt="RWS Customs Logo" className="h-10 w-auto object-contain" />
          </a>
        </div>

        {/* Right */}
        <div className="flex items-center space-x-6 text-sm font-semibold tracking-wider">
          <a href="#" className="hover:text-brand-grey transition-colors uppercase">Contact</a>
          <a href="#" className="hover:text-brand-grey transition-colors" aria-label="Facebook">
            <Facebook className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-brand-grey transition-colors" aria-label="YouTube">
            <Youtube className="w-5 h-5" />
          </a>
          <a 
            href="#" 
            className="bg-brand-grey text-white px-5 py-2 uppercase transition-opacity hover:opacity-90"
          >
            Free Quote
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black/30 backdrop-blur-md text-white h-12 flex items-center justify-center border-b border-white/10">
        <nav className="flex space-x-12 text-xs font-semibold tracking-widest uppercase">
          <a href="#services" className="hover:text-brand-grey transition-colors">Services</a>
          <a href="#projects" className="hover:text-brand-grey transition-colors">Gallery</a>
          <a href="#about" className="hover:text-brand-grey transition-colors">About</a>
          <a href="#location" className="hover:text-brand-grey transition-colors">Location</a>
        </nav>
      </div>
    </header>
  );
}
