const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.zoho.in',
  secure: true,
  auth: {
    user: `${process.env.ZOHO_EMAIL}`,
    pass: `${process.env.ZOHO_PASS}`,
  },
});

const sendAlertEmail = async (email, url, errorMessage) => {
    const mailOptions = {
      from: '"Saarthi" <lokesh@saarthi.xyz>',
      to: email,
      subject: 'Alert: GET Request Failed',
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <div style="background-color: #f7fbff; padding: 30px; text-align: center; border-radius: 10px;">
            <h1 style="color: #e74c3c; font-size: 28px; margin-bottom: 20px;">GET Request Failed</h1>
            <p style="font-size: 18px; margin-bottom: 20px;">A GET request to the following URL has failed:</p>
            <p style="font-size: 16px; margin-bottom: 20px;"><strong>URL:</strong> ${url}</p>
            <p style="font-size: 16px; margin-bottom: 20px;"><strong>Error:</strong> ${errorMessage}</p>
          </div>
          <div style="background-color: #eef3f8; padding: 15px; text-align: center; border-radius: 0 0 10px 10px; margin-top: 20px;">
            <p style="color: #888; font-size: 14px;">&copy; 2024 Saarthi. All rights reserved. | <a href="mailto:lokesh@saarthi.xyz" style="color: #4a90e2; text-decoration: none;">Contact Us</a></p>
          </div>
        </div>
      `,
    };
    await transporter.sendMail(mailOptions);
};


module.exports = { sendAlertEmail };
