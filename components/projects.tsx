"use client"

import { motion } from "framer-motion"

const projects = [
  {
    name: "2Q48: Exploring Quantum Reinforcement Learning in the 2048 Game",
    date: "Nov. - Dec. 2024",
    description: [
      "Explored Quantum Reinforcement Learning (QRL) to solve the tile-merging game, 2048, comparing heuristic, classical RL, and QRL approaches.",
      "Utilized parameterized quantum circuits to analyze decision-making strategies and efficiency in a grid-based environment.",
      "Investigated the intersection of quantum computing and RL to evaluate potential real-world applications and computational challenges.",
    ],
    link: "https://github.com/Ashad001/2Q48",
  },
  {
    name: "Room Aligner",
    date: "October 2024",
    description: [
      "Developed VLM & LLM-based GenAI agents to generate design insights, improving space utilization for everyday users.",
      "Deployed the solution on Hugging Face Spaces (Docker), enabling scalable access to the design assistant and user engagement.",
    ],
    link: "https://github.com/Ashad001/RoomAligner/",
  },
  {
    name: "Personify AI Chatting Evaluator and Assistant",
    date: "June - July 2024",
    description: [
      "Integrated LLaMA 3 using Groq with APIs in Golang, enhancing real-time message suggestions and engagement scores.",
      "Deployed the tool on Hugging Face Spaces with Docker, enabling scalable & efficient model serving for seamless user access.",
    ],
    link: "https://github.com/Ashad001/Chat-Evaluator-llama3-hackathon", 
  },
  {
    name: "WebBriefs",
    date: "July 2024",
    description: [
      "Implemented an automated tool using CrewAI, LangChain, and JinaAI for efficient webpage information summarization.",
      "Built a FastAPI-based system to summarize webpage content in real-time, delivering short summaries via a RESTful API.",
    ],
    link: "https://github.com/Ashad001/WebBriefs", 
  },
  {
    name: "DevHire: Interview ChatBot",
    date: "April – June 2023",
    description: [
      "Co-led and developed DevHire, a ChatBot for technical and behavioral interview preparation, achieving user satisfaction.",
      "Utilized OpenAI API in Python, integrated with frontend using FLASK APIs, integrating TextBlob for sentiment analysis.",
    ],
    link: "https://github.com/Ashad001/DevHire/", 
  },
  {
    name: "Probot",
    date: "April 2023",
    description: [
      "Developed Probot, a Voice Controlled ChatBot for technical and behavioral interview preparation, achieving user satisfaction.",
      "Utilized OpenAI API in Python, integrated with frontend using FLASK APIs, integrating TextBlob for sentiment analysis.",
    ],
    link: "https://github.com/Ashad001/ProBot-A-voice-controlled-chatbot",
  }
];



export function Projects() {
  return (
    <section id="projects" className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="border border-gray-200 dark:border-gray-700 rounded-lg p-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{project.date}</p>
            <ul className="list-disc list-inside mb-4">
              {project.description.map((item, i) => (
                <li key={i} className="text-sm">
                  {item}
                </li>
              ))}
            </ul>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
            >
              View Project
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

