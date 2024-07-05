import express from "express";
import bodyParser from "body-parser";
import { PrismaClient } from "@prisma/client";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const prisma = new PrismaClient();

app.use(bodyParser.json());
app.use(cors());

app.post("/api/referral", async (req, res) => {
  const { referrerName, referrerEmail, refereeName, refereeEmail } = req.body;

  try {
    await prisma.referral.create({
      data: { referrerName, referrerEmail, refereeName, refereeEmail },
    });

    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    let mailOptions = {
      from: process.env.EMAIL_USER,
      to: refereeEmail,
      subject: "Course Referral",
      text: `Hi ${refereeName},\n\nYou have been referred to a course by ${referrerName}.`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ message: "Email not sent" });
      }
      res.status(200).json({ message: "Referral created and email sent" });
      console.log("Email sent: " + info.response);
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
    console.log(error);
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
