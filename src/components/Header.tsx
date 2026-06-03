import { Search, Facebook, Youtube, Menu, X, ChevronDown } from "lucide-react";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import { servicesData } from "../data/services";
import { LoadContext } from "../App";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeServiceHover, setActiveServiceHover] = useState(0);

  const searchIndex = [
    { title: "Home", path: "/", description: "RWS Customs Homepage" },
    { title: "About Us", path: "/about", description: "Our story, mission, and core values." },
    { title: "Contact", path: "/contact", description: "Get a free quote and get in touch with us." },
    { title: "Gallery", path: "/gallery", description: "View our portfolio of heavy-duty projects." },
    ...servicesData.map(s => ({
      title: s.title,
      path: `/services/${s.slug}`,
      description: s.shortDescription
    }))
  ];

  const searchResults = searchQuery.trim() === "" 
    ? [] 
    : searchIndex.filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
      );

  const hasLoaded = useContext(LoadContext);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex flex-col font-sans">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: hasLoaded ? 1 : 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="w-full flex flex-col"
        >
          {/* Top Bar */}
          <div className="bg-black text-white h-16 flex items-center justify-between px-6 border-b border-[#222]">
          
          {/* Mobile Hamburger (Left) */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="text-white hover:text-brand-grey transition-colors p-2 -ml-2"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

          {/* Left Desktop */}
          <div className="hidden lg:flex items-center space-x-6 text-sm font-semibold tracking-wider">
            <button aria-label="Search" onClick={() => setIsSearchOpen(true)}>
              <Search className="w-4 h-4 cursor-pointer hover:text-brand-grey transition-colors" />
            </button>
            <Link to="/locations" className="hover:text-brand-grey transition-colors uppercase">Locations</Link>
            <Link to="/privacy-policy" className="hover:text-brand-grey transition-colors uppercase">Privacy Policy</Link>
          </div>

          {/* Center Logo */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <Link to="/" className="flex items-center justify-center">
              <img src="/rws-logo.png" alt="RWS Customs Logo" className="h-8 md:h-10 w-auto object-contain" />
            </Link>
          </div>

          {/* Mobile Empty Space (Right) for centering logic or Search */}
          <div className="lg:hidden flex items-center">
            <button aria-label="Search" className="p-2 -mr-2" onClick={() => setIsSearchOpen(true)}>
              <Search className="w-5 h-5 cursor-pointer hover:text-brand-grey transition-colors" />
            </button>
          </div>

          {/* Right Desktop */}
          <div className="hidden lg:flex items-center space-x-6 text-sm font-semibold tracking-wider">
            <Link to="/contact" className="hover:text-brand-grey transition-colors uppercase">Contact</Link>
            <a href="https://www.facebook.com/RWSCustoms/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-grey transition-colors" aria-label="Facebook">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://www.youtube.com/@RWSCustoms" target="_blank" rel="noopener noreferrer" className="hover:text-brand-grey transition-colors" aria-label="YouTube">
              <Youtube className="w-5 h-5" />
            </a>
            <Link 
              to="/contact" 
              className="group relative inline-flex items-center justify-center overflow-hidden bg-brand-grey text-white px-5 py-2 uppercase"
            >
              <span className="absolute inset-0 w-full h-full bg-white -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out z-0"></span>
              <span className="relative z-10 group-hover:text-black transition-colors duration-300 ease-out">
                Free Quote
              </span>
            </Link>
          </div>
        </div>

        {/* Bottom Bar (Desktop Only) */}
        <div className="hidden lg:flex bg-black/30 backdrop-blur-[2px] text-white h-12 items-center justify-center border-b border-white/10 relative z-40">
          <nav className="flex items-center space-x-12 text-xs font-semibold tracking-widest uppercase">
            <Link to="/" className="hover:text-brand-grey transition-colors">Home</Link>
            
            {/* Services Dropdown */}
            <div className="relative group/nav h-full flex items-center">
              <Link to="/#services" className="flex items-center gap-1 hover:text-brand-grey transition-colors">
                Services <ChevronDown className="w-4 h-4 opacity-70 group-hover/nav:rotate-180 transition-transform duration-300" />
              </Link>
              
              <div className="absolute top-[100%] left-1/2 -translate-x-1/2 w-[800px] xl:w-[900px] bg-[#0a0a0a] border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.9)] opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-300 transform origin-top -translate-y-2 group-hover/nav:translate-y-0 flex z-50 overflow-hidden">
                {/* Left Side - Image Preview */}
                <div className="w-[40%] relative bg-[#111]">
                  {servicesData.map((service, idx) => (
                    <div 
                      key={idx}
                      className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${activeServiceHover === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                      style={{ backgroundImage: `url(${service.image})` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col">
                        <span className="text-brand-grey text-[10px] font-bold tracking-[0.3em] uppercase mb-2">Featured Service</span>
                        <h4 className="font-heading text-2xl font-bold uppercase text-white drop-shadow-md">{service.title}</h4>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Right Side - Grid of Services */}
                <div className="w-[60%] p-10 grid grid-cols-2 gap-x-6 gap-y-4 relative">
                  {/* Subtle Background Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-grey/5 to-transparent opacity-50 pointer-events-none"></div>
                  
                  {servicesData.map((service, idx) => (
                    <Link 
                      key={idx} 
                      to={`/services/${service.slug}`} 
                      onMouseEnter={() => setActiveServiceHover(idx)}
                      className="group relative flex flex-col p-4 border border-white/5 hover:border-brand-grey/50 bg-black/50 hover:bg-[#111] transition-all duration-300"
                    >
                      <h4 className="text-[11px] tracking-widest font-bold uppercase text-white group-hover:text-brand-grey transition-colors mb-2">
                        {service.title}
                      </h4>
                      <p className="text-gray-400 font-sans text-xs leading-relaxed line-clamp-2 normal-case tracking-normal group-hover:text-gray-300 transition-colors">
                        {service.shortDescription}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Link to="/gallery" className="hover:text-brand-grey transition-colors">Gallery</Link>
            <Link to="/about" className="hover:text-brand-grey transition-colors">About</Link>
            <Link to="/locations" className="hover:text-brand-grey transition-colors">Location</Link>
          </nav>
        </div>
        </motion.div>
      </header>

      {/* Full Screen Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-[70] bg-black text-white flex flex-col font-sans overflow-y-auto"
          >
            {/* Mobile Menu Header */}
          <div className="h-16 flex items-center justify-between px-6 border-b border-[#222] shrink-0">
            <Link to="/" className="flex items-center justify-center" onClick={() => setIsMobileMenuOpen(false)}>
              <img src="/rws-logo.png" alt="RWS Customs Logo" className="h-8 w-auto object-contain" />
            </Link>
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white hover:text-brand-grey transition-colors p-2 -mr-2"
              aria-label="Close menu"
            >
              <X className="w-8 h-8" />
            </button>
          </div>

          {/* Mobile Menu Links */}
          <div className="flex-1 flex flex-col py-8 px-8">
            <nav className="flex flex-col space-y-6 text-2xl font-heading font-bold tracking-widest uppercase mb-12">
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-brand-grey transition-colors">Home</Link>
              
              {/* Mobile Services Accordion */}
              <div className="flex flex-col">
                <button 
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className="flex items-center justify-between hover:text-brand-grey transition-colors uppercase text-left"
                >
                  Services
                  <ChevronDown className={`w-6 h-6 transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180 text-brand-grey' : ''}`} />
                </button>
                <AnimatePresence>
                  {isMobileServicesOpen && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden flex flex-col gap-4 pt-6 pl-4 border-l border-white/10 mt-2"
                    >
                      {servicesData.map((service, idx) => (
                        <Link 
                          key={idx}
                          to={`/services/${service.slug}`}
                          onClick={() => {
                            setIsMobileMenuOpen(false);
                            setIsMobileServicesOpen(false);
                          }}
                          className="font-sans text-sm tracking-widest text-gray-400 hover:text-brand-grey transition-colors"
                        >
                          {service.title}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <Link to="/gallery" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-brand-grey transition-colors">Gallery</Link>
              <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-brand-grey transition-colors">About</Link>
              <Link to="/locations" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-brand-grey transition-colors">Location</Link>
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-brand-grey transition-colors">Contact</Link>
            </nav>

            <div className="w-12 h-[2px] bg-[#333] mb-8"></div>

            <nav className="flex flex-col space-y-4 text-sm font-semibold tracking-widest uppercase text-gray-400 mb-12">
              <Link to="/privacy-policy" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-brand-grey transition-colors">Privacy Policy</Link>
              <Link to="/privacy-policy" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-brand-grey transition-colors">Terms of Service</Link>
            </nav>

            <div className="mt-auto flex flex-col gap-6">
              <div className="flex space-x-6">
                <a href="https://www.facebook.com/RWSCustoms/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-brand-grey transition-colors" aria-label="Facebook">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="https://www.youtube.com/@RWSCustoms" target="_blank" rel="noopener noreferrer" className="text-white hover:text-brand-grey transition-colors" aria-label="YouTube">
                  <Youtube className="w-6 h-6" />
                </a>
              </div>
              <Link 
                to="/contact" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-flex items-center justify-center bg-brand-grey text-black px-6 py-4 uppercase font-bold tracking-widest"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </motion.div>
        )}
      </AnimatePresence>

      {/* Search Dropdown Window */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 w-full lg:left-6 lg:w-[400px] z-[60] bg-[#0a0a0a] border-b lg:border border-white/10 shadow-2xl p-4 flex flex-col font-sans"
          >
            {/* Search Input */}
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <Search className="w-5 h-5 text-brand-grey shrink-0" />
              <input 
                type="text"
                autoFocus
                placeholder="Search..."
                className="w-full bg-transparent border-none text-white text-base font-sans outline-none placeholder-white/40"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button 
                onClick={() => {
                  setIsSearchOpen(false);
                  setSearchQuery("");
                }}
                className="hover:text-brand-grey transition-colors shrink-0"
                aria-label="Close search"
              >
                <X className="w-5 h-5 text-gray-400" />
              </button>
            </div>

            {/* Search Results */}
            <div className="flex-1 overflow-y-auto max-h-[350px] mt-2">
              <div className="flex flex-col">
                {searchQuery.trim() !== "" && searchResults.length === 0 && (
                  <p className="text-gray-500 text-sm font-sans p-3">No results found for "{searchQuery}"</p>
                )}
                
                {searchResults.map((result, idx) => (
                  <Link 
                    key={idx}
                    to={result.path}
                    onClick={() => {
                      setIsSearchOpen(false);
                      setSearchQuery("");
                      setIsMobileMenuOpen(false);
                    }}
                    className="group flex flex-col gap-1 p-3 hover:bg-white/5 transition-colors border-b border-white/5 last:border-b-0"
                  >
                    <h3 className="font-heading text-lg font-bold uppercase text-white group-hover:text-brand-grey transition-colors">
                      {result.title}
                    </h3>
                    <p className="text-gray-400 font-sans text-xs line-clamp-1">
                      {result.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
