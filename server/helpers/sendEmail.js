require('dotenv').config();
const nodemailer = require('nodemailer');

async function sendEmail(to, subject, text) {
  console.log('📩 sendEmail function called'); // log untuk debug

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject,
    text
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Email sent successfully:', info);
  } catch (error) {
    console.error('❌ Error sending email:', error);
  }
}

module.exports = sendEmail;
