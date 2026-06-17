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

        <p className="text-orange-400 text-sm md:text-base tracking-widest uppercase">
          India's Trusted Astrology Platform
        </p>

        <h1 className="text-4xl md:text-6xl font-bold text-orange-500 mt-5">
          Pandit Ji Se Pucho
        </h1>

        <h2 className="text-2xl md:text-4xl text-orange-400 mt-4">
          Your Trusted Guide to Vedic Astrology
        </h2>

        <p className="mt-6 text-base md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Get accurate Kundli analysis, matchmaking, horoscope insights,
          gemstone recommendations and spiritual guidance from experienced
          astrology experts.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">

          <Link
            href="/free-kundli"
            className="bg-orange-600 hover:bg-orange-700 px-8 py-3 rounded-lg"
          >
            Get Free Kundli
          </Link>

          <a
            href="https://wa.me/918595188575"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-orange-600 text-orange-500 hover:bg-orange-600 hover:text-white px-8 py-3 rounded-lg transition"
          >
            WhatsApp Consultation
          </a>

        </div>

      </section>

      {/* FEATURES */}

      <section className="max-w-6xl mx-auto px-6 pb-14">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

          <div className="bg-zinc-900 rounded-xl p-5 text-center">
            🔮 Free Kundli
          </div>

          <div className="bg-zinc-900 rounded-xl p-5 text-center">
            💎 Gemstones
          </div>

          <div className="bg-zinc-900 rounded-xl p-5 text-center">
            ❤️ Match Making
          </div>

          <div className="bg-zinc-900 rounded-xl p-5 text-center">
            🕉 Remedies
          </div>

        </div>

      </section>

      {/* SERVICES */}

      <section className="max-w-7xl mx-auto px-6 py-14">

        <h2 className="text-3xl font-bold text-center text-orange-500 mb-10">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white text-gray-800 rounded-2xl p-6">
            <h3 className="font-bold text-orange-700 text-xl">
              Free Kundli
            </h3>

            <p className="mt-3">
              Detailed Janam Kundli and astrology insights.
            </p>
          </div>

          <div className="bg-white text-gray-800 rounded-2xl p-6">
            <h3 className="font-bold text-orange-700 text-xl">
              Match Making
            </h3>

            <p className="mt-3">
              Marriage compatibility and Gun Milan analysis.
            </p>
          </div>

          <div className="bg-white text-gray-800 rounded-2xl p-6">
            <h3 className="font-bold text-orange-700 text-xl">
              Numerology
            </h3>

            <p className="mt-3">
              Personalized numerology consultation.
            </p>
          </div>

          <div className="bg-white text-gray-800 rounded-2xl p-6">
            <h3 className="font-bold text-orange-700 text-xl">
              Daily Horoscope
            </h3>

            <p className="mt-3">
              Daily planetary predictions and guidance.
            </p>
          </div>

          <div className="bg-white text-gray-800 rounded-2xl p-6">
            <h3 className="font-bold text-orange-700 text-xl">
              Gemstones
            </h3>

            <p className="mt-3">
              Certified astrologically recommended gemstones.
            </p>
          </div>

          <div className="bg-white text-gray-800 rounded-2xl p-6">
            <h3 className="font-bold text-orange-700 text-xl">
              Rudraksha
            </h3>

            <p className="mt-3">
              Energized Rudraksha recommendations.
            </p>
          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="py-16 text-center">

        <h2 className="text-3xl font-bold text-orange-500">
          Need Personal Astrology Guidance?
        </h2>

        <p className="mt-4 text-gray-300">
          Talk directly with our astrology experts.
        </p>

        <a
          href="https://wa.me/918595188575"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 bg-green-600 hover:bg-green-700 px-8 py-3 rounded-lg"
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
          India's Trusted Astrology Platform
        </p>

        <p className="mt-5">
          Delhi | WhatsApp: +91 8595188575
        </p>

        <p className="mt-2">
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