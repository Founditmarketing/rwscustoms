export function About() {
  return (
    <section id="about" className="bg-black text-white relative py-40 flex flex-col items-center overflow-hidden">
      
      {/* Circle Graphic Line top-left */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <svg 
          viewBox="0 0 100 100" 
          className="absolute top-[-10%] left-[-10%] w-[60%] md:w-[40%] text-brand-grey opacity-20" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="0.5"
        >
            <circle cx="50" cy="50" r="48" />
        </svg>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center">
        
        {/* Top Header Text */}
        <div className="text-center w-full mb-16 relative">
          <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
            The RWS Experience,
            <br/> Built on <span className="text-brand-grey font-serif">Trust</span>
          </h2>
        </div>

        {/* Large Overlapping Image Area */}
        <div className="relative w-full max-w-5xl mx-auto aspect-[16/9] md:aspect-[21/9]">
            <div 
                className="absolute inset-x-4 md:inset-x-12 inset-y-0 bg-cover bg-center z-10"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop')` }}
            />
        </div>

        {/* Text Block partially over/under image */}
        <div className="relative z-20 w-full max-w-3xl mx-auto mt-12 md:mt-[-50px] md:self-end md:mr-12 bg-black/80 backdrop-blur-sm p-8 md:p-12 border border-[#222]">
           <p className="font-sans text-gray-300 text-lg md:text-xl leading-relaxed font-light mb-8">
              Our success is built on a foundation of reliability, relationships, ingenuity, and proven outcomes. We have a passion for elevating the business of building and ensuring an exceptional experience for every client we serve in Silsbee and beyond.
           </p>
           <a 
              href="#" 
              className="inline-block bg-brand-grey text-white font-sans font-bold text-sm tracking-widest uppercase px-8 py-4 transition-transform hover:scale-105 hover:bg-white hover:text-black"
            >
              Learn More
            </a>
        </div>
      </div>
    </section>
  );
}
