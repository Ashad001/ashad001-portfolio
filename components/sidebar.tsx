"use client"

import { useState } from "react"
import Image from "next/image"
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6"
import { motion } from "framer-motion"

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" onClick={() => setIsOpen(false)} />
      )}

      {/* Sidebar */}
      <aside
        className={`
        fixed md:sticky top-0 left-0 z-50 md:z-0
        w-64 h-screen bg-white dark:bg-gray-800 shadow-lg
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
      `}
      >
        <div className="flex flex-col h-full pt-24">
          <div className="flex flex-col items-center">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src="/profile-pic.jpg"
                alt="Ashad Abdullah"
                width={150}
                height={150}
                className="rounded-full mb-4"
                priority
              />
            </motion.div>
            <h2 className="text-xl font-bold mb-2">Ashad Abdullah</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 text-center">
                Results-driven software engineer with a passion for building scalable and efficient systems
            </p>
            <div className="space-y-2 text-center mb-4">
              <p className="text-sm">📍 Karachi, Pakistan</p>
              <p className="text-sm">📧 ashad001sp@gmail.com</p>
            </div>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Ashad001"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://linkedin.com/in/ashadqureshi1/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://x.com/ashadqu7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
              >
                <FaXTwitter size={24} />
              </a>
            </div>
          </div>
        </div>

      </aside>

      {/* Mobile toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 md:hidden z-50 bg-blue-600 text-white p-3 rounded-full shadow-lg"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>
    </>
  )
}

