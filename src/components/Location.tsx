export function Location() {
  return (
    <section id="location" className="bg-white text-black py-32 px-6 lg:px-12 relative overflow-hidden flex items-center min-h-[800px]">
      
      {/* Rotated background text */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 -rotate-90 pointer-events-none origin-left ml-16 md:ml-32">
        <h2 className="font-serif text-[6rem] md:text-[10rem] font-bold text-[#f5f5f5] leading-none whitespace-nowrap">
          Visit & Connect
        </h2>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 ml-12 md:ml-48">
        
        {/* Map Container */}
        <div className="flex-1 w-full aspect-square md:aspect-[4/3] bg-gray-200 relative overflow-hidden group">
          {/* Replace this div with an actual Google Maps iframe if needed */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113426.69747971701!2d-94.27072051680183!3d30.348637777174696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x863914a27f6eab9d%3A0xeab49aeeb715dcaf!2s3701%20Brownlea%20Rd%2C%20Silsbee%2C%20TX%2077656!5e0!3m2!1sen!2sus!4v1701838491823!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
          ></iframe>
        </div>

        {/* Contact Info */}
        <div className="flex-1 flex flex-col justify-center">
          <div className="mb-12">
            <h3 className="font-sans text-xs tracking-widest font-bold uppercase mb-4 text-brand-grey">Location</h3>
            <h4 className="font-serif text-3xl md:text-5xl font-bold leading-tight mb-4">
              RWS Customs<br />Headquarters
            </h4>
            <p className="font-sans text-gray-600 text-lg">
              3701 Brownlea Rd<br />
              Silsbee, TX 77656
            </p>
          </div>

          <div>
            <h3 className="font-sans text-xs tracking-widest font-bold uppercase mb-4 text-brand-grey">Direct Line</h3>
            <h4 className="font-serif text-3xl md:text-4xl font-bold leading-tight mb-4">
              <a href="tel:4096519394" className="hover:text-brand-grey transition-colors">(409) 651-9394</a>
            </h4>
             <h4 className="font-serif text-2xl md:text-3xl font-bold leading-tight break-all">
              <a href="mailto:rwscustomwork@gmail.com" className="hover:text-brand-grey transition-colors">rwscustomwork@gmail.com</a>
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
}
