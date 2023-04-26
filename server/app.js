const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors'); // Add this if you need to handle cross-origin requests

const app = express();
app.use(express.json()); // Middleware to parse JSON request body
app.use(cors()); // Add this if you need to handle cross-origin requests

// Define a POST route for handling form submissions
app.post('/api/contact', async (req, res) => {
  try {
    // Extract form data from request body
    const { name, email, message } = req.body;

    // Create a Nodemailer transporter with your email service provider settings
    const transporter = nodemailer.createTransport({
      service: 'Gmail', // Update this with your email service provider
      auth: {
        user: 'youremail@example.com', // Update this with your email address
        pass: 'yourpassword' // Update this with your email password
      }
    });

    // Configure email message
    const mailOptions = {
      from: 'youremail@example.com', // Update this with your email address
      to: 'youremail@example.com', // Update this with the recipient email address
      subject: 'Contact Form Submission',
      html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Send response
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to send email' });
  }
});

// Start the server
const port = 3001; // Update this with the desired port number
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});