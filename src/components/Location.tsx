export function Location() {
  return (
    <section id="location" className="relative flex flex-col bg-white text-black overflow-hidden">
      
      <div className="relative z-10 flex flex-col lg:flex-row w-full">
        
        {/* Map Half (Left Side, Wider) */}
        <div className="w-full lg:w-3/5 h-[400px] lg:h-auto lg:min-h-[600px] relative order-2 lg:order-1 overflow-hidden flex items-center justify-center">
          
          <iframe 
            src="https://maps.google.com/maps?q=3701%20Brownlea%20Rd,%20Silsbee,%20TX%2077656&t=h&z=13&ie=UTF8&iwloc=&output=embed" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 w-full h-full object-cover z-0 filter contrast-[1.15] saturate-[1.2]"
          ></iframe>

          {/* Subtle Vignette Overlay for premium feel */}
          <div className="absolute inset-0 shadow-[inset_0_0_120px_rgba(0,0,0,0.4)] pointer-events-none z-10"></div>



          {/* Service Area Radius Overlay */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
            <div className="w-[75%] max-w-[450px] aspect-square rounded-full border-2 border-brand-grey bg-brand-grey/20 relative shadow-[inset_0_0_50px_rgba(0,0,0,0.2)]"></div>
          </div>
        </div>

        {/* Content Half (Right Side) */}
        <div className="w-full lg:w-2/5 relative flex items-center p-8 lg:p-16 xl:p-24 order-1 lg:order-2 overflow-hidden">
          
          {/* Background Faded Text in the right column */}
          <div className="absolute top-0 left-0 w-full flex justify-center pointer-events-none select-none z-0 pt-12 lg:pt-16">
            <h2 
              className="font-heading text-[28vw] lg:text-[14vw] font-bold text-transparent leading-[0.8] whitespace-nowrap tracking-tighter" 
              style={{ WebkitTextStroke: "2px rgba(0, 0, 0, 0.04)" }}
            >
              VISIT
            </h2>
          </div>

          <div className="relative z-10 w-full max-w-xl mx-auto mt-16">
            <h4 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] mb-8">
              RWS <span className="text-transparent break-words hyphens-auto" style={{ WebkitTextStroke: "1px black" }}>HEADQUARTERS</span>
            </h4>
            
            <div className="flex flex-col gap-8 font-sans">
              <div>
                <p className="text-black text-lg md:text-xl font-medium leading-relaxed">
                  3701 Brownlea Rd<br />
                  Silsbee, TX 77656
                </p>
                <p className="text-brand-grey font-bold text-sm tracking-wider uppercase mt-2">
                  Serving Silsbee and all surrounding areas.
                </p>
              </div>

              <div className="w-12 h-[2px] bg-brand-grey"></div>

              <div className="flex flex-col gap-2">
                <a href="tel:4096519394" className="text-black text-2xl md:text-3xl font-bold hover:text-brand-grey transition-colors">
                  (409) 651-9394
                </a>
                <a href="mailto:rwscustomwork@gmail.com" className="text-gray-500 text-lg hover:text-brand-grey transition-colors break-all">
                  rwscustomwork@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
