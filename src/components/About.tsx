import { Link } from "react-router-dom";

export function About() {
  return (
    <>
      {/* About Content Section */}
      <section id="about" className="bg-black text-white relative pt-16 pb-0 lg:py-32 flex justify-center overflow-hidden border-t border-white/10">
        
        {/* Background Faded Text */}
        <div className="absolute inset-y-0 left-0 w-full lg:w-[70%] flex items-start pt-6 lg:pt-4 justify-center pointer-events-none select-none z-0">
          <h2 
            className="font-heading text-[16vw] lg:text-[11vw] font-bold text-transparent leading-none whitespace-nowrap tracking-tight" 
            style={{ WebkitTextStroke: "2px rgba(255, 255, 255, 0.11)" }}
          >
            OUR STORY
          </h2>
        </div>

        {/* Full Bleed Image (Desktop Only) - Completely escapes padding/grid */}
        <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[30%] group overflow-hidden z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-80 transition-all duration-700 group-hover:scale-105" 
            style={{ backgroundImage: "url(/rwsimage2.jpg)" }}
          />
          {/* Brackets */}
          <div className="absolute top-12 left-12 w-12 h-12 border-t-[3px] border-l-[3px] border-brand-grey z-20 transition-transform duration-700 group-hover:-translate-x-2 group-hover:-translate-y-2"></div>
          <div className="absolute bottom-12 right-12 w-12 h-12 border-b-[3px] border-r-[3px] border-brand-grey z-20 transition-transform duration-700 group-hover:translate-x-2 group-hover:translate-y-2"></div>
          {/* Left Border Accent */}
          <div className="absolute border-l-[3px] border-brand-grey top-0 bottom-0 left-0 z-20 scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-700"></div>
        </div>

        <div className="w-full max-w-[90rem] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center relative z-10">
          
          {/* Left Side - Content */}
          <div className="relative flex flex-col items-start w-full lg:col-span-7 xl:col-span-8 z-10">
            <h2 className="font-heading text-5xl md:text-6xl lg:text-[5.5rem] font-normal leading-[1.1] mb-8">
              BEYOND THE<br/>
              <span className="text-brand-grey">METAL</span>
            </h2>

            <div className="flex flex-col gap-6 font-sans text-gray-300 text-base md:text-lg leading-relaxed mb-10 max-w-2xl">
              <p>
                RWS Customs offers premium custom welding services, land clearing, dirt spreading and leveling, stump grinding, trenching services, trailer rentals, and much more.
              </p>
              <p>
                Built on a foundation of grit and precise engineering, we don't just clear land; we shape it. We don't just weld metal; we forge solutions designed to weather any storm and bear any load.
              </p>
              <p>
                Our operations are rooted in East Texas pride, ensuring every cut, weld, and level meets uncompromising industrial standards.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <Link 
                to="/about" 
                className="group relative inline-flex items-center justify-center overflow-hidden bg-white text-black px-10 py-5 font-sans font-bold tracking-widest uppercase text-sm"
              >
                <span className="absolute inset-0 w-full h-full bg-brand-grey -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out z-0"></span>
                <span className="relative z-10 group-hover:text-white transition-colors duration-300 ease-out">
                  LEARN MORE
                </span>
              </Link>
              
              <Link 
                to="/contact" 
                className="group relative inline-flex items-center justify-center overflow-hidden bg-transparent border border-white/20 text-white px-10 py-5 font-sans font-bold tracking-widest uppercase text-sm hover:border-brand-grey transition-colors duration-300"
              >
                <span className="absolute inset-0 w-full h-full bg-brand-grey translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></span>
                <span className="relative z-10 group-hover:text-white transition-colors duration-300 ease-out">
                  GET A QUOTE
                </span>
              </Link>
            </div>
          </div>

          {/* Right Side - Visuals (Mobile Fallback) */}
          <div className="lg:hidden relative w-[100vw] left-1/2 -translate-x-1/2 aspect-square mt-12 group overflow-hidden z-0 lg:col-span-5">
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-80 transition-all duration-700 group-hover:scale-105" 
              style={{ backgroundImage: "url(/rwsimage2.jpg)" }}
            />
            {/* Brackets */}
            <div className="absolute top-8 left-8 w-12 h-12 border-t-[3px] border-l-[3px] border-brand-grey z-20 transition-transform duration-700 group-hover:-translate-x-2 group-hover:-translate-y-2"></div>
            <div className="absolute bottom-8 right-8 w-12 h-12 border-b-[3px] border-r-[3px] border-brand-grey z-20 transition-transform duration-700 group-hover:translate-x-2 group-hover:translate-y-2"></div>
          </div>

        </div>
      </section>
    </>
  );
}
