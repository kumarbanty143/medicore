import resend from "@/lib/resend";
import AppointmentConfirmationEmail from "@/components/emails/AppointmentConfirmationEmail";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { userEmail, doctorName, appointmentDate, appointmentTime, appointmentType, duration, price } = await req.json();

  if (!userEmail) {
    return NextResponse.json({ error: "userEmail is required" }, { status: 400 });
  }

  try {
    const data = await resend.emails.send({
      from: "MediCore <no-reply@resend.dev>",
      to: [userEmail],
      subject: "Appointment Confirmation - MediCore",
      react: AppointmentConfirmationEmail({
        doctorName,
        appointmentDate,
        appointmentTime,
        appointmentType,
        duration,
        price,
      }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
