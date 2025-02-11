"use client"

import { motion } from "framer-motion"
import { Calendar, ExternalLink, Github } from "lucide-react"
import { SectionWrapper } from "@/components/section-wrapper"
const projects = [
  {
    name: "2Q48: Exploring Quantum Reinforcement Learning in the 2048 Game",
    date: "Nov. - Dec. 2024",
    description: [
      "Explored Quantum Reinforcement Learning (QRL) to solve the tile-merging game, 2048, comparing heuristic, classical RL, and QRL approaches.",
      "Utilized parameterized quantum circuits to analyze decision-making strategies and efficiency in a grid-based environment.",
      "Investigated the intersection of quantum computing and RL to evaluate potential real-world applications and computational challenges.",
    ],
    tags: ["Quantum Computing", "Reinforcement Learning", "2048 Game"],
    link: "https://github.com/Ashad001/2Q48",
  },
  {
    name: "Room Aligner",
    date: "October 2024",
    description: [
      "Developed VLM & LLM-based GenAI agents to generate design insights, improving space utilization for everyday users.",
      "Deployed the solution on Hugging Face Spaces (Docker), enabling scalable access to the design assistant and user engagement.",
    ],
    tags: ["GenAI", "Design Assistant", "Hugging Face Spaces"],
    link: "https://github.com/Ashad001/RoomAligner/",
  },
  {
    name: "Fine-tuning Gemma on Climate Data",
    date: "October 2024",
    description: [
      "Fine-tunes the Gemma language model on a climate question-answer dataset to enhance domain-specific knowledge.",
      "Uses Low Rank Adaptation (LoRA) for efficient fine-tuning, improving model performance on climate-related queries.",
      "Enhances inference capabilities, ensuring more accurate answers to environmental and climate conflict questions.",
    ],
    tags: ["GenAI", "Gemma", "LoRA"],
    link: "https://github.com/Ashad001/Climate-Gemma"
  },

  {
    name: "Personify AI Chatting Evaluator and Assistant",
    date: "June - July 2024",
    description: [
      "Integrated LLaMA 3 using Groq with APIs in Golang, enhancing real-time message suggestions and engagement scores.",
      "Deployed the tool on Hugging Face Spaces with Docker, enabling scalable & efficient model serving for seamless user access.",
    ],
    tags: ["GenAI", "LLaMA 3", "Hugging Face Spaces"],
    link: "https://github.com/Ashad001/Chat-Evaluator-llama3-hackathon", 
  },
  {
    name: "WebBriefs",
    date: "July 2024",
    description: [
      "Implemented an automated tool using CrewAI, LangChain, and JinaAI for efficient webpage information summarization.",
      "Built a FastAPI-based system to summarize webpage content in real-time, delivering short summaries via a RESTful API.",
    ],
    tags: ["CrewAI", "LangChain", "JinaAI"],
    link: "https://github.com/Ashad001/WebBriefs", 
  },
  {
    name: "DevHire: Interview ChatBot",
    date: "April – June 2023",
    description: [
      "Co-led and developed DevHire, a ChatBot for technical and behavioral interview preparation, achieving user satisfaction.",
      "Utilized OpenAI API in Python, integrated with frontend using FLASK APIs, integrating TextBlob for sentiment analysis.",
    ],
    tags: ["OpenAI", "FLASK", "TextBlob"],
    link: "https://github.com/Ashad001/DevHire/", 
  },

  {
    name: "Email Scraping with Selenium",
    date: "June 2024",
    description: [
      "A Python-based educational demonstration of scraping emails from web pages using Selenium and BeautifulSoup.",
      "Navigates Google search results to find LinkedIn profiles related to specific marketing tags and extracts email addresses.",
    ],

    tags: ["Selenium", "BeautifulSoup", "Python"],
    link: "https://github.com/Ashad001/EmailScraping"

  },
  {
    name: "Email Sending Script",
    date: "March 2023",
    description: [
      "A scalable Python script designed for sending personalized cold emails using Gmail's SMTP server.",

      "Uses a rotating set of credentials to improve deliverability and avoid rate limits.",
      "Still actively used in societies to send scheduled and specialized bulk emails efficiently."
    ],
    tags: ["Gmail", "SMTP", "Python"],
    link: "https://github.com/Ashad001/EmailSender"
  },
  {
    name: "Probot",
    date: "April 2023",
    description: [
      "Developed Probot, a Voice Controlled ChatBot for technical and behavioral interview preparation, achieving user satisfaction.",
      "Utilized OpenAI API in Python, integrated with frontend using FLASK APIs, integrating TextBlob for sentiment analysis.",
    ],
    tags: ["OpenAI", "FLASK", "TextBlob"],
    link: "https://github.com/Ashad001/ProBot-A-voice-controlled-chatbot",
  },
  {
    name: "Machine Learning & Deep Learning Projects",
    date: "2022 - Present",
    description: [
      "A collection of Python projects covering Machine Learning, Deep Learning, Computer Vision, and NLP.",
      "Notable projects include Email Spam Detection (TensorFlow), Titanic Survival Prediction (Keras), House Price Prediction (XGBoost), Handwritten Digit Recognition (MNIST), Sign Language Classification (CNN), and Dialogue Summarization (FLAN-T5).",
      "Features a mix of classification, regression, and time series prediction models, leveraging deep learning architectures like CNNs, RNNs, and LSTMs."
    ],
    tags: ["Machine Learning", "Deep Learning", "Computer Vision", "NLP"],
    link: "https://github.com/Ashad001/ML-DL-Projects",
  }
];



export function Projects() {
  return (
    <SectionWrapper id="projects">
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
            <div className="flex justify-between items-start mb-2">
                {project.name}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
            </div>

            <div className="flex items-center mt-2 mb-4 text-gray-400">
              <Calendar className="w-4 h-4 mr-2" />
              <span className="text-sm">{project.date}</span>
            </div>

            <ul className="space-y-2 mb-4">
              {project.description.map((item, i) => (
                <li key={i} className="text-gray-300 text-sm">
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 mt-4">
              {project.tags.map((tag, i) => (
                <span key={i} className="bg-blue-900/50 text-blue-300 text-xs px-2.5 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
    </SectionWrapper>
  )
}


