import Link from "next/link";

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">

      <div className="max-w-2xl text-center">

        <div className="text-6xl mb-6">
          🙏
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-orange-500">
          Thank You!
        </h1>

        <p className="mt-6 text-lg text-gray-300">
          Your Free Kundli request has been received successfully.
        </p>

        <p className="mt-3 text-gray-400">
          Our astrology team will review your details and contact you shortly.
        </p>

        <a
          href="https://wa.me/918595188575"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-8 bg-green-600 hover:bg-green-700 px-8 py-3 rounded-lg text-white font-semibold"
        >
          Chat on WhatsApp
        </a>

        <div className="mt-6">
          <Link
            href="/"
            className="text-orange-400 hover:text-orange-300"
          >
            ← Back to Home
          </Link>
        </div>

      </div>

    </main>
  );
}