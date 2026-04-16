import { NextResponse } from "next/server";
import prisma from "@/lib/db";
import { contactSchema } from "@/types/contact";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // Validate the request body
    const validatedData = contactSchema.parse(body);

    // Save to database
    const contact = await prisma.contact.create({
      data: {
        name: validatedData.name,
        email: validatedData.email,
        company: validatedData.company,
        jobTitle: validatedData.jobTitle,
        phone: validatedData.phone || null,
        message: validatedData.message,
        details: validatedData.details || null,
      },
    });

    // Send to Google Sheets
    const GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfycbwWSArs3v1XX2rKXHec-sk2fA3Hxc0gg65TzPo-xc-iQYyRg9CBIWKncVEZuafG5oz7mA/exec";
    
    try {
      await fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8", // Using text/plain to avoid CORS issues if called from client, though this is server-side
        },
        body: JSON.stringify({
          ...validatedData,
          submissionDate: new Date().toLocaleString(),
        }),
      });
    } catch (error) {
      console.error("Google Sheets Error:", error);
      // We continue since the database save was successful
    }

    return NextResponse.json(
      { message: "Feedback sent successfully!", contact },
      { status: 201 }
    );
  } catch (error: unknown) {
    console.error("Contact Form Error:", error);
    
    const err = error as { name?: string; errors?: any };
    if (err.name === "ZodError") {
      return NextResponse.json(
        { message: "Validation failed", errors: err.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}


