"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex items-center justify-between">
      <div className="w-full md:w-1/2">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">AI Software Engineer</h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-200 mb-8">
            Result-driven undergrad, with a year of work experience, interested in Generative AI and Computer Vision.
          </p>
          <div className="flex gap-4">
            <motion.a
              href="#projects"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.a>
            <motion.a
              href="#contact"
              className="border border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 px-6 py-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="hidden md:block"
      >
        <a href="https://app.daily.dev/ashad001" target="_blank" rel="noopener noreferrer">
          <Image
            src="https://api.daily.dev/devcards/v2/C5FPNGZ4KhkIkj8BOuGDu.png?type=default&r=q8s"
            width={356}
            height={462}
            alt="Ashad's Dev Card"
            className="rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
            priority
          />
        </a>
      </motion.div>
    </section>
  )
}

