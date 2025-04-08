const nodemailer = require('nodemailer');

async function sendEmail(to, subject, text) {
  // Konfigurasi transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'youremail@gmail.com', // ganti dengan email kamu
      pass: 'yourapppassword'      // gunakan app password dari Gmail
    }
  });

  // Konfigurasi email
  const mailOptions = {
    from: 'youremail@gmail.com',
    to,
    subject,
    text
  };

  // Kirim email
  await transporter.sendMail(mailOptions);
}

module.exports = sendEmail;
