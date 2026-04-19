import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, email, brand, adSpend, message } = data;

    // Validate the presence of environment variables
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.error('Missing GMAIL_USER or GMAIL_APP_PASSWORD in environment variables');
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    // 1. Create a transporter using your Gmail account
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // 2. Configure the email content
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: 'kamilkhan1704@gmail.com', // Your target email
      subject: `New Transmission from Fluxgrid Studio: ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Brand: ${brand}
        Monthly Ad Spend: ${adSpend}
        
        Message:
        ${message}
      `,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #00F2FF;">New Inquiry from Fluxgrid Studio</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Brand:</strong> ${brand}</p>
          <p><strong>Monthly Ad Spend:</strong> ${adSpend}</p>
          <hr />
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
    };

    // 3. Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json({ error: 'Failed to send transmission' }, { status: 500 });
  }
}
