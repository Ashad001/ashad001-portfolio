import nodemailer from "nodemailer"

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body

    console.log("Received form data:", { name, email, message })

    // Validate the form data
    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields are required." })
    }

    try {
      // Configure the SMTP transporter
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || "587"),
        secure: process.env.SMTP_SECURE === "true",
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASSWORD,
        },
      })

      console.log("SMTP transporter configured")

      // Define the email content
      const mailOptions = {
        from: `"Contact Form" <${process.env.SMTP_USER}>`,
        to: process.env.SMTP_USER, // Send email to yourself
        subject: `New Message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        html: `
          <h1>New Message from ${name}</h1>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      }

      console.log("Sending email...")

      // Send the email
      await transporter.sendMail(mailOptions)

      console.log("Email sent successfully")
      res.status(200).json({ message: "Message sent successfully!" })
    } catch (error) {
      console.error("Error sending email:", error)
      res.status(500).json({ message: "Failed to send message. Please try again." })
    }
  } else {
    res.status(405).json({ message: "Method not allowed" })
  }
}