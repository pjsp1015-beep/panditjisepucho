"use client";
import { useState } from "react";

interface Report { name: string; price: number; }
interface PaymentModalProps { report: Report; onClose: () => void; }

declare global {
  interface Window { Razorpay: any; }
}

export default function PaymentModal({ report, onClose }: PaymentModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const loadRazorpay = () => new Promise((resolve) => {
    if (window.Razorpay) return resolve(true);
    const s = document.createElement("script");
    s.src = "https://checkout.razorpay.com/v1/checkout.js";
    s.onload = () => resolve(true);
    s.onerror = () => resolve(false);
    document.body.appendChild(s);
  });

  const handlePayment = async () => {
    setError("");
    if (!name.trim() || !email.trim() || !phone.trim()) return setError("Please fill all fields");
    setLoading(true);
    try {
      await loadRazorpay();
      const orderRes = await fetch("/api/payment/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: report.price, reportName: report.name, name, email, phone }),
      });
      const orderData = await orderRes.json();
      if (!orderData.success) { setError(orderData.message || "Failed to initiate payment"); setLoading(false); return; }

      const rzp = new window.Razorpay({
        key: orderData.keyId,
        amount: orderData.amount,
        currency: orderData.currency,
        name: "PanditJiSePucho",
        description: report.name,
        order_id: orderData.orderId,
        prefill: { name, email, contact: phone },
        theme: { color: "#B45309" },
        handler: async (response: any) => {
          const verifyRes = await fetch("/api/payment/verify", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ...response, reportName: report.name, amount: report.price, name, email, phone }),
          });
          const v = await verifyRes.json();
          if (v.success) window.location.href = "/thank-you";
          else setError("Payment done but verification failed. Contact support with ID: " + response.razorpay_payment_id);
        },
        modal: { ondismiss: () => setLoading(false) },
      });
      rzp.open();
    } catch { setError("Something went wrong. Please try again."); setLoading(false); }
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="bg-[#0D1B3E] rounded-2xl w-full max-w-md p-8 relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl">×</button>
        <h2 className="text-2xl font-semibold text-white mb-1">Secure Payment</h2>
        <p className="text-amber-400 text-sm mb-6">Razorpay · UPI · Cards · Net Banking · EMI</p>
        <div className="bg-[#162040] rounded-xl p-4 mb-6">
          <p className="text-gray-400 text-xs uppercase mb-1">Selected</p>
          <p className="text-white font-semibold">{report.name}</p>
          <p className="text-amber-400 text-2xl font-bold mt-1">₹{report.price}</p>
        </div>
        <div className="space-y-4">
          <div><label className="text-gray-300 text-sm block mb-1">Your Name</label>
            <input type="text" placeholder="Full name" value={name} onChange={(e) => setName(e.target.value)} className="w-full bg-[#162040] text-white border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-amber-400" /></div>
          <div><label className="text-gray-300 text-sm block mb-1">Email</label>
            <input type="email" placeholder="your@email.com" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-[#162040] text-white border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-amber-400" /></div>
          <div><label className="text-gray-300 text-sm block mb-1">WhatsApp / Phone</label>
            <input type="tel" placeholder="+91 98765 43210" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full bg-[#162040] text-white border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-amber-400" /></div>
          {error && <p className="text-red-400 text-sm bg-red-900/20 rounded-lg px-3 py-2">{error}</p>}
          <button onClick={handlePayment} disabled={loading} className="w-full bg-amber-600 hover:bg-amber-700 disabled:bg-amber-900 text-white font-semibold py-4 rounded-xl text-lg">
            {loading ? "Opening payment..." : `Pay Securely ₹${report.price} →`}
          </button>
          <p className="text-center text-gray-500 text-xs">🔒 SSL Encrypted · Razorpay Secured · 100% Safe</p>
        </div>
      </div>
    </div>
  );
}
