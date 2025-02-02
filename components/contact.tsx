"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import type React from "react" // Added import for React
import { SectionWrapper } from "./section-wrapper"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) throw new Error("Failed to send message")

      setStatus("success")
      setFormData({ name: "", email: "", message: "" })
      setTimeout(() => setStatus("idle"), 3000) // Reset after 3 seconds
    } catch (error) {
      setStatus("error")
      setErrorMessage(error instanceof Error ? error.message : "Failed to send message")
      setTimeout(() => setStatus("idle"), 3000)
    }
  }

  return (
    <SectionWrapper id="contact">
      <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col space-y-2">
          <label htmlFor="name" className="text-sm font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            className="rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 p-2"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            className="rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 p-2"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="message" className="text-sm font-medium">
            Message
          </label>
          <textarea
            id="message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
            rows={4}
            className="rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 p-2"
          />
        </div>
        <button
          type="submit"
          disabled={status === "loading"}
          className={`w-full py-2 px-4 rounded-md text-white font-medium transition-colors
            ${status === "loading" 
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
            }`}
        >
          {status === "loading" ? "Sending..." : "Send Message"}
        </button>

        {status === "success" && (
          <div className="p-4 rounded-md bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-100">
            Message sent successfully!
          </div>
        )}
        {status === "error" && (
          <div className="p-4 rounded-md bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-100">
            {errorMessage}
          </div>
        )}
      </form>
    </SectionWrapper>
  )
}

