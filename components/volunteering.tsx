"use client"

import { motion } from "framer-motion"
import { SectionWrapper } from "@/components/section-wrapper"

const volunteeringExperiences = [
    {
      organization: "PROCOM' 24",
      role: "Automation Head",
      location: "FAST, Karachi",
      period: "Dec. 2023 - Apr. 2024",
      description: [
        "Led Automation Team at FAST, overseeing key projects like Attendance Management System and ChatBot development.",
        "Effectively managed project timelines and delegated tasks to successfully achieve and timely project completion milestones.",
      ],
    },
    {
      organization: "ACM Coders' Cup 2023",
      role: "Automation Head",
      location: "FAST, Karachi",
      period: "Oct. - Dec. 2023",
      description: [
        "Implemented automated certificate distribution, enhancing participant experience and reducing manual workload by 80%.",
        "Engineered a secure bulk email sending system using SMTP with logging, significantly increasing communication efficiency.",
      ],
    },
    {
      organization: "Developers' Day - ACM NUCES",
      role: "Deputy Team Lead",
      location: "FAST, Karachi",
      period: "Mar. - May 2023",
      description: [
        "Co-led the development of an AI-powered interview chatbot for fresh graduates and interns.",
        "Integrated OpenAI API with a Flask backend and used TextBlob for sentiment analysis.",
        "Implemented authentication, automated interview sessions, and email-based report generation.",
      ],
    },
    {
      organization: "PROCOM' 23",
      role: "Member",
      location: "FAST, Karachi",
      period: "Jan. - Apr. 2023",
      description: [
        "Developed 'ProBot,' a chatbot using NLTK and scikit-learn to assist participants in competitions and university events.",
        "Implemented NLP techniques to enhance chatbot responses and improve user interaction.",
      ],
    },
  ];
  
export function Volunteering() {
  return (
    <SectionWrapper id="volunteering">
    <section id="volunteering" className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4">Volunteer Experience</h2>
      <div className="space-y-6">
        {volunteeringExperiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            className="border-l-2 border-green-500 pl-4"
          >
            <h3 className="text-xl font-semibold">{exp.role}</h3>
            <p className="text-gray-600 dark:text-gray-400">{exp.organization}</p>
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
    </section>
    </SectionWrapper>
  )
}


