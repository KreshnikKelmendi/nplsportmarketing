import express from 'express';
import multer from 'multer';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';
import { v4 as uuidv4 } from 'uuid';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import { body, validationResult } from 'express-validator';

dotenv.config();

const app = express();
app.use(cors());
app.use(helmet()); 

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 100, 
  message: 'Too many requests, please try again later.',
});
app.use('/upload', limiter);

const storage = multer.memoryStorage();
const upload = multer({
  storage,

});

app.use(express.json()); 

app.post('/upload', 
  upload.single('file'), 
  body('companyName').isString().trim().escape(), 
  body('emailAddress').isEmail().normalizeEmail(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { companyName, emailAddress } = req.body;
    const file = req.file;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.REACT_APP_EMAIL_USER,
        pass: process.env.REACT_APP_EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"NPL Sport Marketing" <${process.env.REACT_APP_EMAIL_USER}>`,
      to: 'kreshnik.kelmendi@trekuartista.com, shenoemailinedyte@gmail.com',
      subject: `New Form Submission from ${companyName} - ${new Date().toLocaleString()}`,  
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.5;">
          <h2 style="color: #333;">New Form Submission</h2>
          <p>You have received a new form submission with the following details:</p>
          <p><strong>Company Name:</strong> ${companyName}</p>
          <p><strong>Email Address:</strong> ${emailAddress}</p>
          <p>A file has also been attached to this email for your reference.</p>
        </div>
      `,
      attachments: [
        {
          filename: file.originalname,
          content: file.buffer,
        },
      ],
      headers: {
        'Message-ID': `<${uuidv4()}@gmail.com>`,
        'In-Reply-To': '',
        'References': ''
      },
    };
    
    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Failed to send email' });
    }
  }
);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
