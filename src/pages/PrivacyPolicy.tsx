export function PrivacyPolicy() {
  return (
    <main className="bg-black text-white min-h-screen pt-40 lg:pt-48 font-sans pb-24">
      
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] uppercase mb-8 border-b border-white/10 pb-6">
          Privacy <span className="text-brand-grey">Policy</span>
        </h1>
        
        <div className="text-gray-300 leading-relaxed space-y-8 text-sm md:text-base">
          <section>
            <h2 className="font-heading text-2xl font-bold uppercase text-white mb-4">1. Introduction</h2>
            <p>
              At RWS Customs, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard the information you provide to us when you visit our website or use our services.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold uppercase text-white mb-4">2. Information We Collect</h2>
            <p className="mb-4">We may collect the following types of information:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-400">
              <li><strong>Personal Information:</strong> Name, email address, phone number, and any other details you provide when filling out our contact forms or requesting a quote.</li>
              <li><strong>Usage Data:</strong> Information about how you interact with our website, such as IP address, browser type, and pages visited, collected through standard analytics tools.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold uppercase text-white mb-4">3. How We Use Your Information</h2>
            <p className="mb-4">The information we collect is used in the following ways:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-400">
              <li>To provide, operate, and maintain our services.</li>
              <li>To communicate with you, including responding to inquiries and providing quotes.</li>
              <li>To improve our website functionality and user experience.</li>
              <li>To send administrative emails or promotional communications (which you can opt out of at any time).</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold uppercase text-white mb-4">4. Sharing Your Information</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website or conducting our business, so long as those parties agree to keep this information confidential.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold uppercase text-white mb-4">5. Data Security</h2>
            <p>
              We implement industry-standard security measures to maintain the safety of your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold uppercase text-white mb-4">6. Changes to This Policy</h2>
            <p>
              We reserve the right to update or modify this Privacy Policy at any time. Any changes will be posted on this page with an updated revision date. By continuing to use our website after changes are posted, you acknowledge and agree to the updated policy.
            </p>
          </section>

          <section className="pt-8 border-t border-white/10 mt-12">
            <h2 className="font-heading text-2xl font-bold uppercase text-white mb-4">Contact Us</h2>
            <p>
              If you have any questions or concerns regarding this Privacy Policy, please contact us via our Contact page or call us directly at <strong>(409) 651-9394</strong>.
            </p>
          </section>
        </div>
      </div>

    </main>
  );
}
