import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  
  if (!apiKey) {
    console.error('RESEND_API_KEY is missing');
    return NextResponse.json({ error: 'Email service configuration error' }, { status: 500 });
  }

  const resend = new Resend(apiKey);

  try {
    const { name, email, phone, workType, description } = await req.json();

    console.log('Sending email with Resend...', { name, email, phone, workType });
    const { data, error } = await resend.emails.send({
      from: 'Garden City Painters <enquiry@gardencitypainters.nz>',
      to: ['info@gardencitypainters.co.nz'],
      subject: `New Enquiry from ${name}`,
      replyTo: email,
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

    console.log('Resend data:', data);
    console.log('Resend error:', error);

    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
