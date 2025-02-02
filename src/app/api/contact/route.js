// app/api/contact/route.js
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json();

    // 1. Configure the transporter
    //    If you set CONTACT_FORM_HOST="Gmail" or "gmail" in your .env, do:
    const transporter = nodemailer.createTransport({
      service: process.env.CONTACT_FORM_HOST, // e.g. 'gmail'
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER, // e.g. yourgmail@gmail.com
        pass: process.env.EMAIL_PASS, // the app password
      },
    });

    // 2. Specify mail options
    //    Usually from: your own Gmail, to: the address you want to receive mail at
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.CONTACT_EMAIL,
      subject: `New message from ${name}`,
      text: `
        You got a new message!
        From:
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        Message: ${message}
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
