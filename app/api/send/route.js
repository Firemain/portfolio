import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req) {
    try {
        const body = await req.json();
        const { email, subject, message } = body;

        const { data, error } = await resend.emails.send({
            from: fromEmail,
            to: ['87fugiii@gmail.com'],
            subject: subject,
            react: (
                <>
                    <h1>Sujet : {subject}</h1>
                    <p>Email : {email}</p>
                    <p>Message : {message}</p>
                </>
            ),
        });

        if (error) {
            return NextResponse.json({ error }, { status: 500 });
        }

        return NextResponse.json({ success: true, data }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
