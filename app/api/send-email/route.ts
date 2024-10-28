import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { name, email, subject, content } = await req.json();
  console.log("⭐️email,subject,content:", email, subject, content);

  const myMail = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: myMail,
      pass,
    },
  });
  try {
    await transporter.sendMail({
      from: email,
      to: myMail,
      subject: `${name}(${email}): ${subject}`,
      text: content,
    });
    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send Email" },
      { status: 500 }
    );
  }
}
