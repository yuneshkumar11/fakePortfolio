import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const { name, email, subject, message } = req.body;
  const inboxAddress = process.env.MAIL_TO || 'abc123@mail.com';

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_USER, // your Gmail address
      pass: process.env.MAIL_PASS, // your Gmail App Password
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.MAIL_USER,
      replyTo: email,
      to: inboxAddress,
      subject: `Portfolio Contact: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });
    res.status(200).json({ message: 'Email sent' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to send email', error: err.toString() });
  }
}
