import { Link } from "react-router-dom";

export function Cta() {
  return (
    <section className="relative w-full py-32 md:py-48 flex flex-col items-center justify-center overflow-hidden bg-[#5a5a5a]">
      {/* Background Image */}
      <img 
        src="/rwsimage5.jpg" 
        alt="RWS Customs Projects" 
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      {/* Overlays to match the grey screenshot but with image bleeding through */}
      <div className="absolute inset-0 bg-[#5a5a5a]/80 z-0 mix-blend-multiply" />
      <div className="absolute inset-0 bg-black/30 z-0" />



      {/* Content */}
      <div className="relative z-20 text-center px-6 w-full max-w-4xl mx-auto flex flex-col items-center">
        <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.1] text-white mb-6 uppercase tracking-wide">
          READY TO START<br/>YOUR PROJECT?
        </h2>
        <p className="font-sans text-white text-base md:text-lg lg:text-xl font-medium leading-relaxed max-w-2xl mb-12">
          We offer custom solutions tailored to your job site.<br className="hidden md:block" />
          Please call for availability and to set up a free quote.
        </p>

        {/* CTA Button */}
        <Link 
          to="/contact" 
          className="group relative inline-flex items-center justify-center overflow-hidden bg-white text-black px-10 md:px-14 py-4 md:py-5 font-sans font-bold tracking-widest uppercase text-sm md:text-base"
        >
          <span className="absolute inset-0 w-full h-full bg-brand-grey -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out z-0"></span>
          <span className="relative z-10 group-hover:text-white transition-colors duration-300 ease-out">
            CONTACT RWS CUSTOMS NOW
          </span>
        </Link>
      </div>
    </section>
  );
}
