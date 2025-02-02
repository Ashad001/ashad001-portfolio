"use client"

import { motion } from "framer-motion"

const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    school: "University of Technology",
    location: "Singapore",
    period: "2018 - 2022",
    achievements: [
      "Graduated with First Class Honours",
      "Specialized in Artificial Intelligence and Machine Learning",
      "Led multiple research projects in Natural Language Processing",
    ],
  }
]

export function Education() {
  return (
    <section id="education" className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4">Education</h2>
      <div className="space-y-6">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="border-l-2 border-blue-500 pl-4"
          >
            <h3 className="text-xl font-semibold">{edu.degree}</h3>
            <p className="text-gray-600 dark:text-gray-400">{edu.school}</p>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              {edu.location} | {edu.period}
            </p>
            <ul className="mt-2 list-disc list-inside">
              {edu.achievements.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

