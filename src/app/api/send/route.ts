import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, phone, workType, description } = await req.json();

    const { data, error } = await resend.emails.send({
      from: 'Garden City Painters <enquiry@gardencitypainters.nz>',
      to: ['anuahuja502@gmail.com'], // Updated to personal email for testing
      subject: `New Enquiry from ${name}`,
      reply_to: email,
      html: `
        <h2>New Website Enquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service Requested:</strong> ${workType}</p>
        <p><strong>Project Description:</strong></p>
        <p>${description}</p>
        <hr />
        <p>This email was sent from the Garden City Painters website contact form.</p>
      `,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
