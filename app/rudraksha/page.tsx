export default function RudrakshaPage() {
  return (
    <main className="min-h-screen bg-black text-white py-16 px-6">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl md:text-7xl font-bold text-orange-500 text-center">
          Rudraksha Collection
        </h1>

        <p className="text-center text-xl text-gray-300 mt-6 mb-14">
          Authentic & Energized Rudraksha for Spiritual Growth,
          Protection and Prosperity.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white text-black rounded-2xl p-6 shadow-lg">
            <h2 className="text-3xl font-bold text-orange-700 mb-4">
              5 Mukhi Rudraksha
            </h2>

            <p className="text-lg">
              Promotes peace, concentration, spiritual development and
              mental clarity.
            </p>

            <button className="mt-6 bg-orange-600 text-white px-5 py-2 rounded-lg">
              Enquire Now
            </button>
          </div>

          <div className="bg-white text-black rounded-2xl p-6 shadow-lg">
            <h2 className="text-3xl font-bold text-orange-700 mb-4">
              7 Mukhi Rudraksha
            </h2>

            <p className="text-lg">
              Associated with prosperity, success, abundance and
              financial stability.
            </p>

            <button className="mt-6 bg-orange-600 text-white px-5 py-2 rounded-lg">
              Enquire Now
            </button>
          </div>

          <div className="bg-white text-black rounded-2xl p-6 shadow-lg">
            <h2 className="text-3xl font-bold text-orange-700 mb-4">
              11 Mukhi Rudraksha
            </h2>

            <p className="text-lg">
              Enhances confidence, courage, leadership qualities and
              spiritual power.
            </p>

            <button className="mt-6 bg-orange-600 text-white px-5 py-2 rounded-lg">
              Enquire Now
            </button>
          </div>

        </div>

        <div className="text-center mt-16">

          <a
            href="https://wa.me/918595188575"
            target="_blank"
            className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-xl text-lg"
          >
            WhatsApp for Rudraksha Consultation
          </a>

        </div>

      </div>

    </main>
  );
}