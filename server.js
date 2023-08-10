const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Route to handle form submissions
app.post('/submit-form', (req, res) => {
  const { name, email } = req.body;

  // Send email notification using Nodemailer
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'your_email@gmail.com',
      pass: 'your_email_password',
    },
  });

  const mailOptions = {
    from: 'your_email@gmail.com',
    to: 'ibgroup.live@gmail.com',
    subject: 'Form Submission',
    text: `Name: ${name}\nEmail: ${email}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent:', info.response);
      res.status(200).send('Form submitted successfully');
    }
  });
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
