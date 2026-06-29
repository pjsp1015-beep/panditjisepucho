import { NextResponse } from "next/server";
import crypto from "crypto";
import { sql } from "@/lib/db";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, reportName, amount, name, email, phone } = await req.json();

    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET!)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest("hex");

    if (expectedSignature !== razorpay_signature) {
      return NextResponse.json({ success: false, message: "Payment verification failed" }, { status: 400 });
    }

    await sql`
      INSERT INTO payment_orders (order_id, payment_id, report_name, amount, customer_name, customer_email, customer_phone, status)
      VALUES (${razorpay_order_id}, ${razorpay_payment_id}, ${reportName}, ${amount}, ${name}, ${email}, ${phone}, 'paid')
    `;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.TO_EMAIL,
      subject: `💰 New Payment: ${reportName} - ₹${amount}`,
      html: `<h2>New Payment!</h2><p><b>Report:</b> ${reportName}</p><p><b>Amount:</b> ₹${amount}</p><p><b>Name:</b> ${name}</p><p><b>Email:</b> ${email}</p><p><b>Phone:</b> ${phone}</p><p><b>Payment ID:</b> ${razorpay_payment_id}</p>`,
    });

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: email,
      subject: `Your ${reportName} - Payment Confirmed 🙏`,
      html: `<h2>Namaste ${name}! 🙏</h2><p>Payment for <b>${reportName}</b> received. Amount: ₹${amount}</p><p>Panditji will send your report within 24-48 hours.</p><p>WhatsApp: +91 85951 88575</p><p>Jai Shree Ram 🙏</p>`,
    });

    return NextResponse.json({ success: true, message: "Payment verified" });
  } catch (error) {
    console.error("VERIFY ERROR:", error);
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}
