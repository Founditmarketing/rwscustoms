import { useParams, Link, Navigate } from "react-router-dom";
import { servicesData } from "../data/services";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function ServicePage() {
  const { id } = useParams<{ id: string }>();
  
  // Find the specific service data based on the URL slug
  const service = servicesData.find(s => s.slug === id);

  // If someone manually types an invalid service URL, redirect to home
  if (!service) {
    return <Navigate to="/" replace />;
  }

  return (
    <main className="bg-black text-white min-h-screen pt-16 font-sans">
      
      {/* Dynamic Hero Section */}
      <section className="relative py-16 lg:py-24 flex justify-center overflow-hidden border-b border-white/10">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 scale-105"
          style={{ backgroundImage: `url(${service.image})` }}
        />
        <div className="absolute inset-0 bg-black/60 z-0"></div>
        {/* Background Faded Text */}
        <div className="absolute inset-y-0 left-0 w-full flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden">
          <h1 
            className="font-heading text-[18vw] lg:text-[14vw] font-bold text-transparent leading-none whitespace-nowrap tracking-tight opacity-50" 
            style={{ WebkitTextStroke: "2px rgba(255, 255, 255, 0.10)" }}
          >
            SERVICES
          </h1>
        </div>
        
        <div className="relative z-10 w-full max-w-[90rem] mx-auto px-6 lg:px-12 text-center flex flex-col items-center">
          <span className="font-sans font-bold tracking-[0.3em] uppercase text-brand-grey mb-6">Service Overview</span>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-[5.5rem] font-bold leading-[1.1] uppercase drop-shadow-2xl">
            {service.title}
          </h1>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 lg:py-32 px-6 lg:px-12">
        <div className="max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left Column - Details */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase pb-4 border-b border-white/10">
              The <span className="text-brand-grey">Details</span>
            </h2>
            <div className="text-gray-300 text-lg md:text-xl leading-relaxed flex flex-col gap-6">
              <p className="text-white font-medium text-xl md:text-2xl border-l-[3px] border-brand-grey pl-6 py-2">
                {service.shortDescription}
              </p>
              <p>
                {service.fullDescription}
              </p>
            </div>

            {/* Why Choose Us Block */}
            <div className="mt-12 bg-[#111] border border-white/5 p-8 lg:p-12">
              <h3 className="font-heading text-2xl font-bold uppercase mb-8">Why RWS Customs?</h3>
              <ul className="flex flex-col gap-6">
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-brand-grey shrink-0 mt-0.5" />
                  <span className="text-gray-400 leading-relaxed">Industrial-grade machinery capable of handling the most demanding projects.</span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-brand-grey shrink-0 mt-0.5" />
                  <span className="text-gray-400 leading-relaxed">Experienced, reliable operators who prioritize safety and exact precision.</span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-brand-grey shrink-0 mt-0.5" />
                  <span className="text-gray-400 leading-relaxed">Deeply rooted in East Texas with a commitment to local integrity and honest pricing.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Sticky Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 bg-[#0a0a0a] border border-white/10 p-8 flex flex-col gap-6">
              <h3 className="font-heading text-2xl font-bold uppercase mb-2">Ready to Start?</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Get a fast, accurate quote for your {service.title.toLowerCase()} project. We're ready when you are.
              </p>
              <Link 
                to="/contact" 
                className="group relative inline-flex items-center justify-center overflow-hidden bg-white text-black px-8 py-5 font-sans font-bold tracking-widest uppercase text-sm w-full"
              >
                <span className="absolute inset-0 w-full h-full bg-brand-grey -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out z-0"></span>
                <span className="relative z-10 group-hover:text-white transition-colors duration-300 ease-out flex items-center gap-2">
                  Request a Quote <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
              <a 
                href="tel:4096519394" 
                className="inline-flex items-center justify-center border border-white/20 hover:border-brand-grey bg-transparent text-white hover:text-brand-grey px-8 py-5 font-sans font-bold tracking-widest uppercase text-sm w-full transition-all duration-300"
              >
                Call (409) 651-9394
              </a>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}
