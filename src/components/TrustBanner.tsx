import { ShieldCheck, Settings, Wrench } from "lucide-react";

export function TrustBanner() {
  return (
    <section className="bg-black text-white py-6 md:py-10 px-4 lg:px-12 border-b border-white/10">
      <div className="max-w-[90rem] mx-auto grid grid-cols-1 md:grid-cols-3 gap-y-4 md:gap-y-10 gap-x-8">
        
        {/* Column 1 */}
        <div className="flex flex-row md:flex-col items-start md:items-center text-left md:text-center px-2 md:px-8 xl:px-12 md:border-r border-white/10 gap-4 md:gap-0">
          <ShieldCheck className="w-8 h-8 shrink-0 text-brand-grey mt-0.5 md:mt-0 md:mb-3" strokeWidth={1.5} />
          <div>
            <h3 className="font-heading text-lg md:text-xl tracking-widest mb-1 md:mb-2 uppercase text-white">Locally Operated</h3>
            <p className="font-sans text-xs md:text-sm text-gray-400 font-medium leading-relaxed max-w-sm">
              Proudly serving East Texas with reliable contracting solutions and an unwavering commitment to quality.
            </p>
          </div>
        </div>

        {/* Column 2 */}
        <div className="flex flex-row md:flex-col items-start md:items-center text-left md:text-center px-2 md:px-8 xl:px-12 md:border-r border-white/10 gap-4 md:gap-0">
          <Settings className="w-8 h-8 shrink-0 text-brand-grey mt-0.5 md:mt-0 md:mb-3" strokeWidth={1.5} />
          <div>
            <h3 className="font-heading text-lg md:text-xl tracking-widest mb-1 md:mb-2 uppercase text-white">Heavy Duty Eqpt</h3>
            <p className="font-sans text-xs md:text-sm text-gray-400 font-medium leading-relaxed max-w-sm">
              Equipped with the most durable, industrial-grade machinery built to handle any dense terrain.
            </p>
          </div>
        </div>

        {/* Column 3 */}
        <div className="flex flex-row md:flex-col items-start md:items-center text-left md:text-center px-2 md:px-8 xl:px-12 gap-4 md:gap-0">
          <Wrench className="w-8 h-8 shrink-0 text-brand-grey mt-0.5 md:mt-0 md:mb-3" strokeWidth={1.5} />
          <div>
            <h3 className="font-heading text-lg md:text-xl tracking-widest mb-1 md:mb-2 uppercase text-white">Expert Welding</h3>
            <p className="font-sans text-xs md:text-sm text-gray-400 font-medium leading-relaxed max-w-sm">
              Custom fabrication and structural welding services matching rigorous industry standards.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
