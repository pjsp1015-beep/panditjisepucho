export default function GemstonesPage() {
  return (
    <main className="min-h-screen bg-black text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl font-bold text-center text-orange-500 mb-6">
          Gemstones
        </h1>

        <p className="text-center text-xl mb-12">
          Astrologically recommended gemstones.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white text-black rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-3">Ruby</h2>
            <p>Recommended for Sun.</p>
          </div>

          <div className="bg-white text-black rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-3">Emerald</h2>
            <p>Recommended for Mercury.</p>
          </div>

          <div className="bg-white text-black rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-3">Yellow Sapphire</h2>
            <p>Recommended for Jupiter.</p>
          </div>

        </div>

      </div>
    </main>
  );
}