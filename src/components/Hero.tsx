import { motion } from "motion/react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { LoadContext } from "../App";
import { servicesData } from "../data/services";

export function Hero() {
  const hasLoaded = useContext(LoadContext);

  return (
    <section className="relative h-screen min-h-[600px] w-full flex items-center bg-black overflow-hidden pt-16 lg:pt-28">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 z-0 w-full h-full object-cover opacity-60 pointer-events-none"
      >
        <source src="/rwsherovideo2.mp4" type="video/mp4" />
      </video>

      {/* Content */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: hasLoaded ? 1 : 0, y: hasLoaded ? 0 : 20 }}
        transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
        className="relative z-10 w-full max-w-[90rem] mx-auto px-6 lg:px-12 mt-4 lg:mt-12 pb-16"
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
          {/* Left Column */}
          <div className="flex flex-col items-start lg:col-span-2">
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] xl:text-[6rem] font-bold leading-[1.1] mb-6 flex flex-col uppercase">
              <span className="text-transparent text-[0.9em] md:text-[0.7em]" style={{ WebkitTextStroke: "1px white" }}>CUSTOM BUILD</span>
              <span className="text-white">LAND CLEARING</span>
              <span className="text-white flex items-center gap-2 md:gap-4">
                <i className="font-serif italic font-normal text-5xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem]">&amp;</i> WELDING
              </span>
            </h1>
            <p className="text-white text-lg md:text-xl font-medium mb-10 max-w-lg">
              The most durable contracting solutions in East Texas. We bring industrial-grade equipment and precision expertise to every project.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Link to="/gallery" className="group relative inline-flex items-center justify-center overflow-hidden bg-brand-grey text-white font-sans font-bold text-sm tracking-widest uppercase px-8 py-4 text-center w-full sm:w-auto">
                <span className="absolute inset-0 w-full h-full bg-white -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out z-0"></span>
                <span className="relative z-10 group-hover:text-black transition-colors duration-300 ease-out">
                  EXPLORE OUR WORK
                </span>
              </Link>
              <Link to="/contact" className="group relative inline-flex items-center justify-center overflow-hidden border border-white text-white font-sans font-bold text-sm tracking-widest uppercase px-8 py-4 text-center w-full sm:w-auto">
                <span className="absolute inset-0 w-full h-full bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></span>
                <span className="relative z-10 group-hover:text-black transition-colors duration-300 ease-out">
                  CONTACT US
                </span>
              </Link>
            </div>
          </div>

          {/* Right Column (Form) - Hidden on Mobile */}
          <div className="hidden lg:flex flex-col w-full max-w-md mx-auto ml-auto col-span-1">
            <h2 className="font-heading text-white text-4xl mb-8 uppercase tracking-wide">
              Request a <span className="text-brand-grey">Quote</span>
            </h2>
            <form className="flex flex-col gap-6">
              <input 
                type="text" 
                placeholder="Full Name" 
                className="w-full bg-transparent focus:bg-white/10 focus:backdrop-blur-sm border-0 border-b border-white/30 text-white placeholder-white/50 px-4 py-3 outline-none focus:ring-0 focus:border-white transition-all duration-300 text-lg" 
              />
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-transparent focus:bg-white/10 focus:backdrop-blur-sm border-0 border-b border-white/30 text-white placeholder-white/50 px-4 py-3 outline-none focus:ring-0 focus:border-white transition-all duration-300 text-lg" 
              />
              <input 
                type="tel" 
                placeholder="Phone Number" 
                className="w-full bg-transparent focus:bg-white/10 focus:backdrop-blur-sm border-0 border-b border-white/30 text-white placeholder-white/50 px-4 py-3 outline-none focus:ring-0 focus:border-white transition-all duration-300 text-lg" 
              />
              <select 
                className="w-full bg-transparent focus:bg-white/10 focus:backdrop-blur-sm border-0 border-b border-white/30 text-white placeholder-white/50 px-4 py-3 outline-none focus:ring-0 focus:border-white transition-all duration-300 text-lg appearance-none cursor-pointer"
                required
              >
                <option value="" className="bg-black">Select a service...</option>
                {servicesData.map((s, i) => (
                  <option key={i} value={s.slug} className="bg-black">{s.title}</option>
                ))}
                <option value="other" className="bg-black">Other</option>
              </select>
              <textarea 
                placeholder="Tell us about your project..." 
                rows={3} 
                className="w-full bg-transparent focus:bg-white/10 focus:backdrop-blur-sm border-0 border-b border-white/30 text-white placeholder-white/50 px-4 py-3 outline-none focus:ring-0 focus:border-white transition-all duration-300 text-lg resize-none"
              ></textarea>
              <button type="submit" className="group relative inline-flex items-center justify-center overflow-hidden bg-white text-black font-sans font-bold text-sm tracking-widest uppercase px-8 py-5 mt-4 w-full">
                <span className="absolute inset-0 w-full h-full bg-brand-grey -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out z-0"></span>
                <span className="relative z-10 group-hover:text-white transition-colors duration-300 ease-out">
                  SUBMIT REQUEST
                </span>
              </button>
            </form>
          </div>
        </div>
      </motion.div>
      
      {/* Trust Carousel (Transparent Background) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: hasLoaded ? 1 : 0 }}
        transition={{ duration: 1.2, delay: 0.6 }}
        className="absolute bottom-0 left-0 w-full overflow-hidden border-t border-white/10 z-20 pb-4 pt-4"
      >
        <motion.div 
          className="flex whitespace-nowrap items-center text-white/70 font-sans text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase w-max"
          animate={{ x: [0, "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
        >
          {/* We repeat the text block multiple times to ensure smooth infinite scroll */}
          <div className="w-1/2 flex justify-around items-center gap-12 px-6">
            <span>Premium Contracting</span>
            <span className="text-brand-grey font-bold italic">///</span>
            <span>Trusted in Texas</span>
            <span className="text-brand-grey font-bold italic">///</span>
            <span>Land Clearing</span>
            <span className="text-brand-grey font-bold italic">///</span>
            <span>Welding</span>
            <span className="text-brand-grey font-bold italic">///</span>
            <span>Excavation</span>
            <span className="text-brand-grey font-bold italic">///</span>
            <span>5-Star Rated</span>
            <span className="text-brand-grey font-bold italic">///</span>
          </div>
          <div className="w-1/2 flex justify-around items-center gap-12 px-6">
            <span>Premium Contracting</span>
            <span className="text-brand-grey font-bold italic">///</span>
            <span>Trusted in Texas</span>
            <span className="text-brand-grey font-bold italic">///</span>
            <span>Land Clearing</span>
            <span className="text-brand-grey font-bold italic">///</span>
            <span>Welding</span>
            <span className="text-brand-grey font-bold italic">///</span>
            <span>Excavation</span>
            <span className="text-brand-grey font-bold italic">///</span>
            <span>5-Star Rated</span>
            <span className="text-brand-grey font-bold italic">///</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
