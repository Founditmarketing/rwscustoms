import { useState } from "react";
import { MessageCircle, X, Phone } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

export function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-[90vw] max-w-[360px] bg-black border border-white/20 shadow-2xl rounded-sm overflow-hidden flex flex-col font-sans"
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
              
              <h3 className="text-xl font-serif font-bold text-white mb-4">Get in Touch</h3>
              
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
                  type="email" 
                  placeholder="Email" 
                  className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 text-sm focus:outline-none focus:border-brand-grey transition-colors placeholder:text-white/30"
                  required
                />
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

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-brand-grey text-black rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300"
        aria-label="Open Contact Form"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>
    </>
  );
}
