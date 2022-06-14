const dotenv = require('dotenv');
const sgMail = require('@sendgrid/mail');
const nodemailer = require('nodemailer');
const sendGridTransport = require('nodemailer-sendgrid-transport');

dotenv.config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const transporter = nodemailer.createTransport(
  sendGridTransport({ auth: { api_key: process.env.SENDGRID_API_KEY } })
);

const postSubmitForm = (req, res) => {
  const { firstName, lastName, email, msg } = req.body;

  transporter
    .sendMail({
      to: 'verawebdev@protonmail.com',
      from: 'jvera@frontiergp.com',
      subject: '🔔🔔🔔 Portfolio Website Form Submission 🔔🔔🔔',
      html: `<strong>First Name:</strong> ${firstName}
      <strong>Last Name:</strong> ${lastName}
      <strong>Email:</strong> ${email}
      <strong>Message:</strong> ${msg}
      `,
    })
    .then((_) => {
      console.log('msg sent succesfully');
    })
    .catch((err) => {
      console.log(err);
      res.json({ err }).status(500);
    });
};

module.exports = postSubmitForm;
