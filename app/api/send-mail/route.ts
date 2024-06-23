import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer"

export async function POST(req: NextRequest, res: NextResponse) {

    try {
        const { email, message, fullName } = await req.json();

        if (!email) return NextResponse.json({
            error: "email is required"
        }, { status: 400 })

        if (!fullName) return NextResponse.json({
            error: "fullName is required"
        }, { status: 400 })

        if (!message) return NextResponse.json({
            error: "message is required"
        }, { status: 400 })

        const transporter = nodemailer.createTransport({
            host: 'smtp-relay.brevo.com',
            port: 587,
            auth: {
                user: 'mukulsingh2276@gmail.com',
                pass: process.env.SMTP_PASS
            }
        });
        const mailOptions = {
            from: 'mukulsingh2276@gmail.com',
            to: 'mukulsingh2276@gmail.com',
            subject: `From ${fullName}`,
            html: `<p>${message}</p>`
        }

        await transporter.sendMail(mailOptions);
        return NextResponse.json({message:'Message send'},{status:200})
    }
    catch (e) {
        console.log(`Error in sendMail`, e);
        return NextResponse.json(e, { status: 500 });
    }
}