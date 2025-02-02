"use client"

import { motion } from "framer-motion"

const skills = [
  { category: "Languages", items: ["Python", "GoLang", "C", "C++", "JavaScript", "HTML", "CSS", "Assembly", "SQL"] },
  {
    category: "Frameworks & Libraries",
    items: [
      "React",
      "TensorFlow",
      "Numpy",
      "Flask",
      "Streamlit",
      "Scikit-learn",
      "Llama-index",
      "Langchain",
      "DSPy",
      "CrewAI",
      "Selenium",
    ],
  },
  {
    category: "Tools & Platforms",
    items: [
      "Git",
      "Shell",
      "LaTeX",
      "Colab",
      "VsCode",
      "Linux",
      "Github Actions",
      "Huggingface Spaces",
      "Google Cloud Platform (GCP)",
      "AWS",
    ],
  },
  {
    category: "Databases",
    items: ["MongoDB", "MySQL", "SqLite", "ChromaDB", "FAISS", "Neo4j", "FireBase", "DuckDB", "MotherDuck"],
  },
  { category: "Other", items: ["Notion", "Slack", "Clickup"] },
]

export function Skills() {
  return (
    <section id="skills" className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4">Skills & Expertise</h2>
      <div className="space-y-4">
        {skills.map((skillCategory, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-2">{skillCategory.category}</h3>
            <div className="flex flex-wrap gap-2">
              {skillCategory.items.map((skill, skillIndex) => (
                <span key={skillIndex} className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

