export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 to-yellow-50">
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h1 className="text-6xl font-bold text-orange-900">
          PanditJiSePucho
        </h1>

        <p className="mt-4 text-2xl text-gray-700">
          Guiding Life Through Vedic Wisdom
        </p>

        <button className="mt-8 bg-orange-600 text-white px-8 py-4 rounded-xl">
          Generate Free Kundli
        </button>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <div className="bg-white p-6 rounded-xl shadow">
            Free Kundli
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            Numerology
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            Match Making
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            Gemstone Recommendation
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            Rudraksha Consultation
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            Spiritual Bracelets
          </div>
        </div>
      </section>
    </main>
  );
}