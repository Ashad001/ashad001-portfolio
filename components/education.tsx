"use client"

import { motion } from "framer-motion"
import { SectionWrapper } from "@/components/section-wrapper"

const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    school: "FAST, National University of Computer and Emerging Sciences",
    location: "Karachi, Pakistan",
    period: "2021 - Present",
    gpa: "3.8",
    achievements: [
      "Dean's List",
    ],
    courses: [
      "Information Retrieval",
      "Quantum Computing",
      "Object Oriented Programming",
      "Design and Analysis of Algorithms",
      "Artificial Intelligence",
      "Software Engineering",
      "Computer Networks",
      "Operating Systems",
      "Database Systems",
      "Computer Vision",
      "Probability & Statistics",
      "MicroEconomics",
      "Accounts & Finance",
    ]
  }
]

export function Education() {
  return (
    <SectionWrapper id="education">
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
            <p className="text-sm text-gray-500 dark:text-gray-500">
              GPA: {edu.gpa} / 4.0
            </p>
            <ul className="mt-2 list-disc list-inside">
              {edu.achievements.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
              <li>
                Co-Founder of &nbsp;
                <a href="https://www.linkedin.com/company/climateio/" target="_blank" rel="noopener noreferrer" className="underline">
                   Climate.io
                </a>
              </li>

            </ul>


            <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
              <h4 className="font-medium mb-2">Relevant Coursework:</h4>
              <p className="leading-relaxed">
                {edu.courses.join(" | ")}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
    </SectionWrapper>
  )
}

