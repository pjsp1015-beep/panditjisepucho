import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { sql } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // Save Lead in Neon Database
    await sql`
      INSERT INTO kundli_leads
      (
        name,
        gender,
        dob,
        birth_time,
        birth_place,
        mobile,
        email,
        concern
      )
      VALUES
      (
        ${data.name},
        ${data.gender},
        ${data.dob},
        ${data.birthTime},
        ${data.birthPlace},
        ${data.mobile},
        ${data.email},
        ${data.concern}
      )
    `;

    // SMTP Debug Logs
    console.log("SMTP_HOST =", process.env.SMTP_HOST);
    console.log("SMTP_PORT =", process.env.SMTP_PORT);
    console.log("SMTP_USER =", process.env.SMTP_USER);
    console.log("TO_EMAIL =", process.env.TO_EMAIL);

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.TO_EMAIL,
      subject: "New Free Kundli Lead",
      html: `
        <h2>New Free Kundli Lead</h2>

        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Gender:</strong> ${data.gender}</p>
        <p><strong>DOB:</strong> ${data.dob}</p>
        <p><strong>Birth Time:</strong> ${data.birthTime}</p>
        <p><strong>Birth Place:</strong> ${data.birthPlace}</p>
        <p><strong>Mobile:</strong> ${data.mobile}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Concern:</strong> ${data.concern}</p>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Lead saved and email sent",
    });

  } catch (error) {
    console.error("KUNDLI API ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong",
      },
      { status: 500 }
    );
  }
}