"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "Experience", href: "#experience" },
  { name: "Volunteering", href: "#volunteering" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Certificates", href: "#certificates" },
]

export function Header() {
  const [activeItem, setActiveItem] = useState("")
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id
            const matchingItem = navItems.find((item) => item.href === `#${sectionId}`)
            if (matchingItem) {
              setActiveItem(matchingItem.name)
            }
          }
        })
      },
      {
        rootMargin: "-50% 0px -50% 0px", // Trigger when section is in the middle of viewport
      },
    )

    // Observe all sections
    navItems.forEach((item) => {
      const element = document.querySelector(item.href)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 right-0 left-0 md:left-64 z-50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
      <nav className="px-4 md:px-6">
        <div className="md:hidden flex items-center h-16">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <ul
          className={`
          md:flex md:space-x-8 md:h-16 md:items-center
          ${isMenuOpen ? "block" : "hidden"}
          py-4 md:py-0 space-y-2 md:space-y-0
        `}
        >
          {navItems.map((item) => (
            <li key={item.name}>
              <button
                onClick={() => scrollToSection(item.href)}
                className={`
                  block w-full px-3 py-2 rounded-md text-sm font-medium
                  cursor-pointer relative
                  ${
                    activeItem === item.name
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
                  }
                `}
              >
                <motion.span className="relative">
                  {item.name}
                  {activeItem === item.name && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400"
                      layoutId="underline"
                    />
                  )}
                </motion.span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

