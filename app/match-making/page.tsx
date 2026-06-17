export default function MatchMakingPage() {
  return (
    <main className="min-h-screen bg-black text-white py-20 px-4">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-5xl font-bold text-center text-orange-500 mb-6">
          Kundli Match Making
        </h1>

        <p className="text-center text-xl mb-10">
          Check marriage compatibility using Vedic Astrology.
        </p>

        <div className="bg-white text-black rounded-xl p-8">
          <form className="space-y-6">

            <input
              type="text"
              placeholder="Boy Name"
              className="w-full p-4 border rounded"
            />

            <input
              type="text"
              placeholder="Girl Name"
              className="w-full p-4 border rounded"
            />

            <button
              type="submit"
              className="w-full bg-orange-500 text-white p-4 rounded"
            >
              Check Compatibility
            </button>

          </form>
        </div>

      </div>
    </main>
  );
}