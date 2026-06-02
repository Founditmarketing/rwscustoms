import { motion } from "motion/react";

export function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] w-full flex items-center bg-black overflow-hidden pt-28">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 z-0 w-full h-full object-cover opacity-60 pointer-events-none"
      >
        <source src="/rwsherovideo.mp4" type="video/mp4" />
      </video>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl px-6 lg:px-12 mt-12">
        <div className="relative max-w-4xl py-8 pr-12">
          {/* Decorative Corner Lines */}
          <div className="absolute top-0 left-0 w-24 h-[1px] bg-white/50" />
          <div className="absolute top-0 left-0 w-[1px] h-24 bg-white/50" />
          
          <div className="absolute bottom-0 right-0 w-24 h-[1px] bg-brand-grey" />
          <div className="absolute bottom-0 right-0 w-[1px] h-24 bg-brand-grey" />
          
          <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12 relative z-10">
            {/* Vertical Accent Line */}
            <div className="hidden md:block w-[1px] h-48 bg-gradient-to-b from-brand-grey via-white/20 to-transparent mt-4 shrink-0" />
            
            <div>
              {/* Eyebrow */}
              <div className="flex items-center gap-6 mb-8">
                <div className="w-16 h-[1px] bg-brand-grey" />
                <span className="text-brand-grey uppercase tracking-[0.3em] text-xs font-bold">Premium Craftsmanship</span>
              </div>
              
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white font-bold leading-tight mb-12">
                Building trust through <br className="hidden md:block"/>
                <span className="relative inline-block mt-2">
                  <i className="font-serif italic font-normal text-white/90">every</i>
                  {/* Subtle underline below 'every' */}
                  <div className="absolute -bottom-2 left-0 w-full h-[1px] bg-brand-grey/60" />
                </span> project.
              </h1>
              
              <div className="flex items-center gap-8">
                <a 
                  href="#" 
                  className="group relative inline-flex items-center justify-center bg-brand-grey text-black font-sans font-bold text-sm tracking-widest uppercase px-10 py-5 overflow-hidden"
                >
                  <span className="relative z-10 transition-transform group-hover:scale-105 duration-300">Set Up a Quote</span>
                  <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out" />
                </a>
                
                {/* Horizontal design element next to button */}
                <div className="hidden sm:flex items-center gap-2 opacity-60">
                  <div className="w-2 h-2 rounded-full bg-white" />
                  <div className="w-12 h-[1px] bg-white/40" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Trust Carousel (Transparent Background) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden border-t border-white/10 z-20 pb-4 pt-4">
        <motion.div 
          className="flex whitespace-nowrap items-center text-white/70 font-sans text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase w-max"
          animate={{ x: [0, "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
        >
          {/* We repeat the text block multiple times to ensure smooth infinite scroll */}
          <div className="w-1/2 flex justify-around items-center gap-12 px-6">
            <span>Premium Contracting</span>
            <span className="text-brand-grey">✦</span>
            <span>Trusted in Texas</span>
            <span className="text-brand-grey">✦</span>
            <span>Land Clearing</span>
            <span className="text-brand-grey">✦</span>
            <span>Welding</span>
            <span className="text-brand-grey">✦</span>
            <span>Excavation</span>
            <span className="text-brand-grey">✦</span>
            <span>5-Star Rated</span>
            <span className="text-brand-grey">✦</span>
          </div>
          <div className="w-1/2 flex justify-around items-center gap-12 px-6">
            <span>Premium Contracting</span>
            <span className="text-brand-grey">✦</span>
            <span>Trusted in Texas</span>
            <span className="text-brand-grey">✦</span>
            <span>Land Clearing</span>
            <span className="text-brand-grey">✦</span>
            <span>Welding</span>
            <span className="text-brand-grey">✦</span>
            <span>Excavation</span>
            <span className="text-brand-grey">✦</span>
            <span>5-Star Rated</span>
            <span className="text-brand-grey">✦</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
