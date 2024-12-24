const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/send-email', async (req, res) => {
    const { name, email, message } = req.body;

    // Configure your transporter
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'lodhis16@gmail.com',
            pass: '', // Use app-specific password
        },
    });

    // Configure the email
    const mailOptions = {
        from: email,
        to: 'lodhis16@gmail.com',
        subject: `New message from ${name}`,
        text: message,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send('Email sent successfully');
    } catch (error) {
        res.status(500).send('Error sending email: ' + error.message);
    }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
