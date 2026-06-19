import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* HEADER */}

      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-5">

          <div className="flex flex-col items-center gap-4">

            <Link href="/">
              <h1 className="text-3xl font-bold text-orange-700">
                Pandit Ji Se Pucho
              </h1>
            </Link>

            <nav className="flex flex-wrap justify-center gap-6 text-gray-700 font-medium">

              <Link href="/">Home</Link>

              <Link href="/free-kundli">
                Free Kundli
              </Link>

              <Link href="/match-making">
                Match Making
              </Link>

              <Link href="/gemstones">
                Gemstones
              </Link>

              <Link href="/rudraksha">
                Rudraksha
              </Link>

              <Link
                href="/hi"
                className="px-3 py-1 border border-orange-500 rounded-lg text-orange-600 hover:bg-orange-500 hover:text-white transition"
              >
                हिन्दी
              </Link>

              <a href="#footer">
                Contact
              </a>

            </nav>

          </div>

        </div>
      </header>

      {/* HERO */}

      <section className="max-w-6xl mx-auto px-6 py-20 text-center">

        <p className="text-orange-400 text-sm tracking-widest uppercase">
          Personalized Vedic Guidance
        </p>

        <h1 className="text-5xl md:text-6xl font-bold text-orange-500 mt-5">
          Pandit Ji Se Pucho
        </h1>

        <h2 className="text-2xl md:text-4xl text-orange-300 mt-5">
          Personalized Vedic Guidance + Genuine Gemstone Recommendations + Human Consultation
        </h2>

        <p className="mt-8 text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
          Get accurate Kundli analysis, marriage compatibility reports,
          career guidance, gemstone recommendations and spiritual remedies
          based on Vedic Astrology principles.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">

          <Link
            href="/free-kundli"
            className="bg-orange-600 hover:bg-orange-700 px-8 py-4 rounded-lg text-lg"
          >
            Get Free Kundli
          </Link>

          <a
            href="https://wa.me/918595188575"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-lg text-lg"
          >
            WhatsApp Consultation
          </a>

        </div>

      </section>

      {/* TRUST STATS */}

      <section className="max-w-6xl mx-auto px-6 pb-16">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

          <div className="bg-zinc-900 p-6 rounded-xl text-center">
            <h3 className="text-3xl font-bold text-orange-500">1000+</h3>
            <p>Reports Generated</p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-xl text-center">
            <h3 className="text-3xl font-bold text-orange-500">500+</h3>
            <p>Kundli Analysis</p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-xl text-center">
            <h3 className="text-3xl font-bold text-orange-500">100+</h3>
            <p>Gemstone Guidance</p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-xl text-center">
            <h3 className="text-3xl font-bold text-orange-500">24x7</h3>
            <p>WhatsApp Support</p>
          </div>

        </div>

      </section>

      {/* PREMIUM SERVICES */}

      <section className="max-w-7xl mx-auto px-6 py-14">

        <h2 className="text-4xl font-bold text-center text-orange-500 mb-12">
          Premium Astrology Services
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white text-black p-6 rounded-2xl">
            <h3 className="text-xl font-bold text-orange-700">
              Detailed Kundli Report
            </h3>
            <p className="mt-3">Complete life analysis report.</p>
            <p className="mt-4 text-2xl font-bold">₹499</p>
          </div>

          <div className="bg-white text-black p-6 rounded-2xl">
            <h3 className="text-xl font-bold text-orange-700">
              Career & Business Guidance
            </h3>
            <p className="mt-3">Career growth and business insights.</p>
            <p className="mt-4 text-2xl font-bold">₹999</p>
          </div>

          <div className="bg-white text-black p-6 rounded-2xl">
            <h3 className="text-xl font-bold text-orange-700">
              Marriage Compatibility
            </h3>
            <p className="mt-3">Gun Milan and compatibility analysis.</p>
            <p className="mt-4 text-2xl font-bold">₹999</p>
          </div>

          <div className="bg-white text-black p-6 rounded-2xl">
            <h3 className="text-xl font-bold text-orange-700">
              Gemstone Recommendation
            </h3>
            <p className="mt-3">Personalized gemstone guidance.</p>
            <p className="mt-4 text-2xl font-bold">₹499</p>
          </div>

          <div className="bg-white text-black p-6 rounded-2xl">
            <h3 className="text-xl font-bold text-orange-700">
              Rudraksha Recommendation
            </h3>
            <p className="mt-3">Suitable Rudraksha suggestions.</p>
            <p className="mt-4 text-2xl font-bold">₹499</p>
          </div>

          <div className="bg-white text-black p-6 rounded-2xl">
            <h3 className="text-xl font-bold text-orange-700">
              Personal Consultation
            </h3>
            <p className="mt-3">One-to-one astrology consultation.</p>
            <p className="mt-4 text-2xl font-bold">₹1499</p>
          </div>

        </div>

      </section>

      {/* WHY CHOOSE US */}

      <section className="max-w-6xl mx-auto px-6 py-16">

        <h2 className="text-4xl font-bold text-center text-orange-500 mb-10">
          Why Choose Us
        </h2>

        <div className="grid md:grid-cols-2 gap-6 text-lg">

          <div>✓ Personalized Vedic Guidance</div>
          <div>✓ AI Assisted Astrology Reports</div>
          <div>✓ Human Expert Review</div>
          <div>✓ Genuine Gemstone Recommendations</div>
          <div>✓ Affordable Consultation Packages</div>
          <div>✓ Dedicated WhatsApp Support</div>

        </div>

      </section>

      {/* TESTIMONIALS */}

      <section className="max-w-6xl mx-auto px-6 py-14">

        <h2 className="text-4xl font-bold text-center text-orange-500 mb-10">
          Client Feedback
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-zinc-900 p-6 rounded-xl">
            ⭐⭐⭐⭐⭐
            <p className="mt-3">
              The gemstone recommendation was very useful.
            </p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-xl">
            ⭐⭐⭐⭐⭐
            <p className="mt-3">
              Detailed Kundli report helped me understand my career path.
            </p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-xl">
            ⭐⭐⭐⭐⭐
            <p className="mt-3">
              Professional and quick consultation.
            </p>
          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="py-16 text-center">

        <h2 className="text-4xl font-bold text-orange-500">
          Need Personal Guidance?
        </h2>

        <p className="mt-4 text-gray-300">
          Connect directly on WhatsApp.
        </p>

        <a
          href="https://wa.me/918595188575"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 bg-green-600 hover:bg-green-700 px-10 py-4 rounded-lg text-lg"
        >
          Chat on WhatsApp
        </a>

      </section>

      {/* FOOTER */}

      <footer
        id="footer"
        className="bg-amber-950 py-10 text-center"
      >
        <h3 className="text-2xl font-bold">
          Pandit Ji Se Pucho
        </h3>

        <p className="mt-2 text-orange-200">
          Personalized Vedic Guidance
        </p>

        <p className="mt-4">
          WhatsApp: +91 8595188575
        </p>

        <p>
          support@panditjisepucho.com
        </p>

        <div className="flex justify-center flex-wrap gap-5 mt-6">

          <Link href="/privacy-policy">
            Privacy Policy
          </Link>

          <Link href="/terms-conditions">
            Terms & Conditions
          </Link>

          <Link href="/refund-policy">
            Refund Policy
          </Link>

        </div>

      </footer>

    </main>
  );
}
