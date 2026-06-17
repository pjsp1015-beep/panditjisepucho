import { NextResponse } from "next/server";
import { sql } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const data = await req.json();

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

    return NextResponse.json({
      success: true,
      message: "Lead saved successfully",
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