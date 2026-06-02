
export function TrustBanner() {
  return (
    <section className="bg-black text-white py-16 px-6 lg:px-12 relative">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-16 lg:gap-24">
        {/* Left Typography */}
        <div className="flex-1">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-5xl font-bold leading-tight">
            Delivering a <span className="text-brand-grey font-serif">premium contracting</span> experience on every site we prep.
          </h2>
        </div>

        {/* Right Content */}
        <div className="flex-1 lg:max-w-xl text-gray-300 font-sans text-lg md:text-xl leading-relaxed font-light">
          <p>
            We work tirelessly and intentionally to earn your trust by making every experience with RWS Customs exceptional. From routine service work to complex land clearing, welding, and trenching across Silsbee, TX, our goal is to achieve success together. You have a vision for your next big project—work with RWS Customs to make it a reality.
          </p>
        </div>
      </div>

    </section>
  );
}
