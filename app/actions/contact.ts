"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY || "re_dummy_key")

export async function submitContact(prevState: any, formData: FormData) {
  try {
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const message = formData.get("message") as string
    
    // Basic validation
    if (!name || !email || !message) {
      return { success: false, message: "All fields are required." }
    }
    
    // If no real API key is present, mock the success so the UI works
    if (!process.env.RESEND_API_KEY) {
      // simulate network
      await new Promise((resolve) => setTimeout(resolve, 1500))
      console.log("[MOCK EMAIL]", { name, email, message })
      return { success: true, message: "Thanks! I'll get back to you shortly." }
    }

    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["vijayrs834@gmail.com"], // Must be a verified domain on Resend or onboarding email
      subject: `New Direct Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    })

    if (error) {
      return { success: false, message: "Failed to send message: " + error.message }
    }

    return { success: true, message: "Message sent successfully!" }
  } catch (error: any) {
    return { success: false, message: "An unexpected error occurred." }
  }
}
