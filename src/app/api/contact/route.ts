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
        phone: validatedData.phone || null,
        message: validatedData.message,
      },
    });

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


