"use client"

import { motion } from "framer-motion"
import { SectionWrapper } from "@/components/section-wrapper"

const experiences = [
  {
    title: "AI Engineer Intern",
    company: "FireBird Technologies",
    location: "Remote | Singapore",
    period: "Aug. - Oct. 2024, Jan. 2025 - Present",
    description: [
      "Contributed in a KPI Chatbot integrating database functionalities, authentication, and session management using DuckDB.",
      "Designed a DSPy agent to generate synthetic data from user's natural language inputs, enhancing system functionality.",
      "Worked on designing agentic workflows tailored to business requirements, improving operational efficiency for stakeholders.",
    ],
  },
  {
    title: "Student Teaching Assistant",
    company: "FAST-NUCES",
    location: "Karachi, Pakistan",
    period: "Sep. 2024 - Dec. 2024",
    description: [
      "Served as a Student Teaching Assistant (STA) for the course Design and Analysis of Algorithms.",
    ],
  },
  {
    title: "Junior AI Engineer",
    company: "RAIN",
    location: "Remote | Dallas, TX",
    period: "Sep. 2023 - May 2024",
    description: [
      "Led conversion of unstructured data to semi-structured formats, achieving 95% accuracy and improving integration speed.",
      "Deployed data extraction & automation tools, increasing workflow efficiency and reducing manual processing time by 50%.",
      "Managed project timelines and assigned tasks using Agile methodologies, resulting successful and timely project completion.",
    ],
  }
]


export function Experience() {
  return (
    <SectionWrapper id="experience">
      <h2 className="text-2xl font-bold mb-4">Professional Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="border-l-2 border-blue-500 pl-4"
          >
            <h3 className="text-xl font-semibold">{exp.title}</h3>
            <p className="text-gray-600 dark:text-gray-400">{exp.company}</p>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              {exp.location} | {exp.period}
            </p>
            <ul className="mt-2 list-disc list-inside">
              {exp.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}

