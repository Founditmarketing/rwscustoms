import { Mail, Phone, MapPin, Send } from "lucide-react";
import { servicesData } from "../data/services";

export function Contact() {
  return (
    <main className="bg-black text-white min-h-screen pt-16 lg:pt-24 font-sans">
      
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 flex justify-center overflow-hidden border-b border-white/10 mb-16 lg:mb-24">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 scale-105" 
          style={{ backgroundImage: "url(/services/RWScustomwelding.jpeg)" }}
        />
        <div className="absolute inset-0 bg-black/60 z-0"></div>
        <div className="absolute inset-y-0 left-0 w-full flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden">
          <h1 
            className="font-heading text-[18vw] lg:text-[14vw] font-bold text-transparent leading-none whitespace-nowrap tracking-tight opacity-50" 
            style={{ WebkitTextStroke: "2px rgba(255, 255, 255, 0.10)" }}
          >
            CONTACT
          </h1>
        </div>

        <div className="relative z-10 w-full max-w-[90rem] mx-auto px-6 lg:px-12 text-center flex flex-col items-center">
          <h1 className="font-heading text-5xl md:text-7xl lg:text-[5.5rem] font-bold leading-[1.1] uppercase drop-shadow-2xl mb-6">
            GET IN <span className="text-brand-grey">TOUCH</span>
          </h1>
          <div className="w-24 h-[3px] bg-brand-grey mb-6"></div>
          <p className="text-gray-400 font-sans text-lg md:text-xl leading-relaxed max-w-2xl">
            Ready to break ground or build something built to last? Reach out to RWS Customs for a free consultation and project quote.
          </p>
        </div>
      </section>

      <div className="max-w-[90rem] mx-auto px-6 lg:px-12 pb-16 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column - Contact Info */}
          <div className="flex flex-col gap-12">
            <div>
              <h2 className="font-heading text-3xl font-bold uppercase mb-8 pb-4 border-b border-white/10">Contact Details</h2>
              <div className="flex flex-col gap-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-brand-grey" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-1">Call Us Directly</h3>
                    <a href="tel:4096519394" className="text-2xl font-bold hover:text-brand-grey transition-colors">(409) 651-9394</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-brand-grey" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-1">Email Us</h3>
                    <a href="mailto:rwscustomwork@gmail.com" className="text-xl font-bold hover:text-brand-grey transition-colors break-all">rwscustomwork@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-brand-grey" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-1">Headquarters</h3>
                    <p className="text-lg font-medium leading-relaxed">
                      3701 Brownlea Rd<br />
                      Silsbee, TX 77656
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Area Box */}
            <div className="bg-[#111] border border-brand-grey/30 p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-grey/10 blur-[50px]"></div>
              <h3 className="font-heading text-2xl font-bold uppercase mb-4 relative z-10">Service Area</h3>
              <p className="text-gray-400 font-sans leading-relaxed relative z-10">
                We proudly serve Silsbee, Texas, and all surrounding areas in East Texas. Contact us to see if we can bring our heavy-duty equipment to your location.
              </p>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-[#0a0a0a] border border-white/10 p-8 md:p-12">
            <h2 className="font-heading text-3xl font-bold uppercase mb-8">Send a Message</h2>
            <form className="flex flex-col gap-6 font-sans">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="firstName" className="text-sm font-bold tracking-widest text-gray-400 uppercase">First Name</label>
                  <input type="text" id="firstName" className="bg-[#111] border border-white/10 text-white px-4 py-4 focus:outline-none focus:border-brand-grey transition-colors" placeholder="John" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="lastName" className="text-sm font-bold tracking-widest text-gray-400 uppercase">Last Name</label>
                  <input type="text" id="lastName" className="bg-[#111] border border-white/10 text-white px-4 py-4 focus:outline-none focus:border-brand-grey transition-colors" placeholder="Doe" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-sm font-bold tracking-widest text-gray-400 uppercase">Phone Number</label>
                  <input type="tel" id="phone" className="bg-[#111] border border-white/10 text-white px-4 py-4 focus:outline-none focus:border-brand-grey transition-colors" placeholder="(123) 456-7890" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-bold tracking-widest text-gray-400 uppercase">Email Address</label>
                  <input type="email" id="email" className="bg-[#111] border border-white/10 text-white px-4 py-4 focus:outline-none focus:border-brand-grey transition-colors" placeholder="john@example.com" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="service" className="text-sm font-bold tracking-widest text-gray-400 uppercase">Service Interested In</label>
                <select id="service" className="bg-[#111] border border-white/10 text-white px-4 py-4 focus:outline-none focus:border-brand-grey transition-colors appearance-none rounded-none cursor-pointer">
                  <option value="">Select a service...</option>
                  {servicesData.map((s, i) => (
                    <option key={i} value={s.slug}>{s.title}</option>
                  ))}
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-bold tracking-widest text-gray-400 uppercase">Project Details</label>
                <textarea id="message" rows={5} className="bg-[#111] border border-white/10 text-white px-4 py-4 focus:outline-none focus:border-brand-grey transition-colors resize-none" placeholder="Tell us about your project..."></textarea>
              </div>

              <button type="button" className="group relative inline-flex items-center justify-center overflow-hidden bg-white text-black px-10 py-5 font-sans font-bold tracking-widest uppercase text-sm mt-4 w-full md:w-auto self-start">
                <span className="absolute inset-0 w-full h-full bg-brand-grey -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out z-0"></span>
                <span className="relative z-10 group-hover:text-white transition-colors duration-300 ease-out flex items-center gap-2">
                  Send Message <Send className="w-4 h-4" />
                </span>
              </button>

            </form>
          </div>

        </div>
      </div>
    </main>
  );
}
