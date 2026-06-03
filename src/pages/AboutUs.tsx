import { ShieldCheck, HardHat, Pickaxe, Medal, Crosshair, Factory } from "lucide-react";
import { Link } from "react-router-dom";

export function AboutUs() {
  const values = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-brand-grey mb-4" strokeWidth={1.5} />,
      title: "Uncompromising Quality",
      description: "We don't cut corners. Every weld, trench, and leveled acre meets the highest industrial standards because our reputation is built into the ground we work."
    },
    {
      icon: <HardHat className="w-8 h-8 text-brand-grey mb-4" strokeWidth={1.5} />,
      title: "Built For The Heavy Lifting",
      description: "Equipped with state-of-the-art, heavy-duty machinery, we take on the jobs others back away from. No terrain is too dense, no project too demanding."
    },
    {
      icon: <Pickaxe className="w-8 h-8 text-brand-grey mb-4" strokeWidth={1.5} />,
      title: "Relentless Grit",
      description: "We believe in hard work and seeing a job through to the absolute finish. We show up on time, we execute flawlessly, and we don't leave until it's done right."
    }
  ];

  return (
    <main className="bg-black text-white min-h-screen pt-16 lg:pt-24 font-sans">
      
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 flex justify-center overflow-hidden border-b border-white/10">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 scale-105" 
          style={{ backgroundImage: "url(/services/RWSdirtspreading.jpeg)" }}
        />
        <div className="absolute inset-0 bg-black/60 z-0"></div>
        {/* Background Faded Text */}
        <div className="absolute inset-y-0 left-0 w-full flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden">
          <h1 
            className="font-heading text-[18vw] lg:text-[14vw] font-bold text-transparent leading-none whitespace-nowrap tracking-tight opacity-50" 
            style={{ WebkitTextStroke: "2px rgba(255, 255, 255, 0.10)" }}
          >
            OUR ROOTS
          </h1>
        </div>

        <div className="relative z-10 w-full max-w-[90rem] mx-auto px-6 lg:px-12 text-center flex flex-col items-center">
          <h1 className="font-heading text-5xl md:text-7xl lg:text-[5.5rem] font-bold leading-[1.1] uppercase drop-shadow-2xl mb-6">
            WHO WE <span className="text-brand-grey">ARE</span>
          </h1>
          <div className="w-24 h-[3px] bg-brand-grey mb-6"></div>
          <p className="text-gray-400 font-sans text-lg md:text-xl leading-relaxed max-w-2xl">
            RWS Customs was forged in East Texas with a simple but unyielding philosophy: build it tough, build it right, and never back down from a challenge. We are a premier contracting force specializing in custom welding, heavy-duty land clearing, and industrial-grade dirt work.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 lg:py-32 px-6 lg:px-12 border-b border-white/10 relative">
        <div className="max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <div className="relative aspect-square lg:aspect-auto lg:h-[600px] w-full group overflow-hidden">
             <div 
              className="absolute inset-0 bg-cover bg-center opacity-80 transition-all duration-700 group-hover:scale-105" 
              style={{ backgroundImage: "url(/rwsimage2.jpg)" }}
            />
            {/* Brackets */}
            <div className="absolute top-8 left-8 w-12 h-12 border-t-[3px] border-l-[3px] border-brand-grey z-20 transition-transform duration-700 group-hover:-translate-x-2 group-hover:-translate-y-2"></div>
            <div className="absolute bottom-8 right-8 w-12 h-12 border-b-[3px] border-r-[3px] border-brand-grey z-20 transition-transform duration-700 group-hover:translate-x-2 group-hover:translate-y-2"></div>
          </div>

          <div className="flex flex-col items-start">
            <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase mb-8">The <span className="text-brand-grey">Mission</span></h2>
            <div className="flex flex-col gap-6 text-gray-400 text-lg leading-relaxed">
              <p>
                Our mission isn't just about moving dirt or fusing metal—it's about laying the unstoppable foundation for your future projects. We exist to provide East Texas with a level of contracting reliability that is increasingly hard to find.
              </p>
              <p>
                When you hire RWS Customs, you are hiring a fleet of heavy-duty equipment and a team of dedicated experts who treat your land and structures with the utmost respect. We view every job as a permanent testament to our name.
              </p>
            </div>
            
            <Link 
              to="/contact" 
              className="group relative inline-flex items-center justify-center overflow-hidden bg-brand-grey text-black px-10 py-5 font-sans font-bold tracking-widest uppercase text-sm mt-12"
            >
              <span className="absolute inset-0 w-full h-full bg-white -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out z-0"></span>
              <span className="relative z-10 group-hover:text-black transition-colors duration-300 ease-out">
                Work With Us
              </span>
            </Link>
          </div>

        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 lg:py-32 px-6 lg:px-12 bg-[#050505]">
        <div className="max-w-[90rem] mx-auto">
          <div className="text-center mb-16 lg:mb-24">
            <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase mb-6">Our <span className="text-brand-grey">Core Values</span></h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">The principles that drive our machines, guide our hands, and guarantee your satisfaction.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {values.map((value, idx) => (
              <div key={idx} className="bg-[#111] border border-white/5 p-8 lg:p-10 hover:border-brand-grey/50 transition-colors duration-300 group">
                <div className="transform group-hover:-translate-y-2 transition-transform duration-300">
                  {value.icon}
                  <h3 className="font-heading text-2xl font-bold uppercase mb-4 text-white">{value.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
