import { NextRequest } from 'next/server';
import { EmailTemplate } from '@/components/email/feedback-template'; 
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req : NextRequest) {
  try {
    const body = await req.json();
    console.log("data: ", body)

    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['khushibagora76@gmail.com'],
      subject: 'Feedback',
      react: EmailTemplate({ rating: body.rating, feedback : body.feedback }) as React.ReactElement,
    });
    console.log("email sent")
    if (error) {
      console.log("error: ",error)
      return Response.json({ error }, { status: 500 });
    }
    console.log("no error")
    return Response.json(data);
  } catch (error) {
    console.log("error in feedback: ", error)
    return Response.json({ error }, { status: 500 });
  }
}