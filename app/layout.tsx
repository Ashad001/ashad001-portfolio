import "./globals.css"
import { Inter } from "next/font/google"
import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { NeuralNetwork } from "@/components/3d/NeuralNetwork"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Ashad Abdullah - Portfolio",
  description: "AI Engineer and Computer Science Undergrad",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100`}>
        <NeuralNetwork />
        <div className="flex flex-col md:flex-row min-h-screen relative">
          <Sidebar />
          <div className="flex-1">
            <Header />
            <main className="px-4 py-20 md:py-24 md:px-8 w-full max-w-7xl mx-auto">{children}</main>
          </div>
        </div>
      </body>
    </html>
  )
}

