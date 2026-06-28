const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})

const sendContactNotification = async ({ name, email, service, message }) => {
  const mailOptions = {
    from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    subject: `New Contact from ${name}`,
    html: `
      <div style="font-family:Inter,sans-serif;max-width:600px;margin:0 auto;background:#0f172a;color:#f1f5f9;padding:32px;border-radius:16px;">
        <h2 style="color:#3B82F6;">New Portfolio Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}" style="color:#3B82F6;">${email}</a></p>
        <p><strong>Service:</strong> ${service || 'Not specified'}</p>
        <hr style="border-color:rgba(255,255,255,0.1);margin:16px 0"/>
        <p><strong>Message:</strong><br/>${message}</p>
      </div>
    `,
  }
  return transporter.sendMail(mailOptions)
}

const sendAutoReply = async ({ name, email }) => {
  const mailOptions = {
    from: `"Amna Khan" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: 'Thanks for reaching out — Amna Khan',
    html: `
      <div style="font-family:Inter,sans-serif;max-width:600px;margin:0 auto;background:#0f172a;color:#f1f5f9;padding:32px;border-radius:16px;">
        <h2 style="color:#3B82F6;">Hi ${name}! 👋</h2>
        <p style="color:#94a3b8;line-height:1.7;margin-top:16px;">Thank you for reaching out! I've received your message and will get back to you within <strong style="color:#f1f5f9;">24 hours</strong>.</p>
        <p style="color:#94a3b8;margin-top:24px;">Best,<br/><strong style="color:#f1f5f9;">Amna Khan</strong><br/>MERN Stack Developer</p>
      </div>
    `,
  }
  return transporter.sendMail(mailOptions)
}

module.exports = { sendContactNotification, sendAutoReply }
