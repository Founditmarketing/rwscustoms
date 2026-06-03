import { useState, useEffect } from "react";
import { MessageCircle, X, Phone, MessageSquare } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import { servicesData } from "../data/services";

export function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPastHero, setIsPastHero] = useState(false);
  const [isAtFooter, setIsAtFooter] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.8) {
        setIsPastHero(true);
      } else {
        setIsPastHero(false);
        if (isOpen && isHomePage) setIsOpen(false); // Auto close when going back to hero only on homepage
      }

      const footer = document.querySelector('footer');
      if (footer) {
        const footerTop = footer.getBoundingClientRect().top;
        if (footerTop < window.innerHeight) {
          setIsAtFooter(true);
          if (isOpen) setIsOpen(false); // Auto close if they reach footer
        } else {
          setIsAtFooter(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen, isHomePage]);

  return (
    <AnimatePresence>
      {(!isHomePage || isPastHero) && !isAtFooter && (
        <motion.div
          initial={{ y: 150 }}
          animate={{ y: 0 }}
          exit={{ y: 150 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 lg:bottom-6 lg:left-auto lg:right-6 z-[60] flex flex-col items-end pointer-events-none"
        >
          {/* Popup Window */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="pointer-events-auto w-full lg:w-[360px] bg-black lg:border lg:border-white/20 shadow-2xl lg:rounded-sm flex flex-col font-sans pb-24 lg:pb-0 lg:mb-4 lg:mr-0 border-t border-white/20 max-h-[100vh] lg:max-h-[85vh] overflow-y-auto"
              >
                {/* Header / Call Now */}
                <div className="p-6 border-b border-white/10 bg-white/5 relative">
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="absolute top-4 right-4 text-brand-grey hover:text-white transition-colors"
                    aria-label="Close"
                  >
                    <X className="w-5 h-5" />
                  </button>
                  
                  <h3 className="text-xl font-heading font-bold text-white mb-4">Get in Touch</h3>
                  
                  <a 
                    href="tel:+11234567890" 
                    className="w-full flex items-center justify-center gap-3 bg-brand-grey text-black font-bold uppercase tracking-widest text-sm py-3 transition-transform hover:scale-[1.02]"
                  >
                    <Phone className="w-4 h-4" />
                    Call Now
                  </a>
                </div>

                {/* Contact Form */}
                <div className="p-6 bg-black/90">
                  <p className="text-brand-grey text-xs uppercase tracking-widest mb-4 font-semibold">Or send a message</p>
                  
                  <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                    <input 
                      type="text" 
                      placeholder="Name" 
                      className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 text-sm focus:outline-none focus:border-brand-grey transition-colors placeholder:text-white/30"
                      required
                    />
                    <input 
                      type="tel" 
                      placeholder="Phone Number" 
                      className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 text-sm focus:outline-none focus:border-brand-grey transition-colors placeholder:text-white/30"
                      required
                    />
                    <select 
                      className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 text-sm focus:outline-none focus:border-brand-grey transition-colors appearance-none cursor-pointer"
                      required
                    >
                      <option value="" className="bg-black text-white/50">Select a service...</option>
                      {servicesData.map((s, i) => (
                        <option key={i} value={s.slug} className="bg-black text-white">{s.title}</option>
                      ))}
                      <option value="other" className="bg-black text-white">Other</option>
                    </select>
                    <textarea 
                      placeholder="How can we help?" 
                      rows={3}
                      className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 text-sm focus:outline-none focus:border-brand-grey transition-colors placeholder:text-white/30 resize-none"
                      required
                    />
                    <button 
                      type="submit" 
                      className="w-full border border-white/20 text-white hover:bg-white hover:text-black font-bold uppercase tracking-widest text-xs py-3 transition-colors mt-2"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Mobile Sticky Footer */}
          <div className="pointer-events-auto lg:hidden absolute bottom-4 left-4 right-4 flex items-center justify-between shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden bg-black/80 backdrop-blur-md border border-white/20 z-50">
            <a 
              href="tel:+11234567890" 
              className="flex-1 flex justify-center items-center py-4 font-bold uppercase tracking-widest text-xs transition-colors"
              style={{ backgroundColor: "#ffffff", color: "#000000" }}
            >
              <span className="flex items-center gap-2">
                <Phone className="w-4 h-4" color="#000000" />
                Call Now
              </span>
            </a>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="group relative overflow-hidden flex-1 flex justify-center items-center py-4 font-bold uppercase tracking-widest text-xs text-white transition-colors"
            >
              <span className="absolute inset-0 w-full h-full bg-brand-grey -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out z-0"></span>
              <span className="relative z-10 flex items-center gap-2 group-hover:text-black transition-colors duration-300">
                <MessageSquare className="w-4 h-4" />
                Message
              </span>
            </button>
          </div>

          {/* Desktop Floating Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="pointer-events-auto hidden lg:flex w-14 h-14 bg-black text-white border border-white/20 rounded-full items-center justify-center shadow-xl hover:scale-110 hover:border-brand-grey transition-all duration-300"
            aria-label="Contact"
          >
            <MessageCircle className="w-6 h-6" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
