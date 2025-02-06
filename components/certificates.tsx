"use client"

import { motion } from "framer-motion"
import { SectionWrapper } from "@/components/section-wrapper"


const certificates = [
  {
    name: "Machine Learning Specialization",
    issuer: "Coursera",
    description:
      "Supervised & unsupervised learning algorithms, Neural Networks, Clustering Algorithms & Analysis, PCA",
    link: "https://www.coursera.org/account/accomplishments/specialization/EQ9PX55KVFB2"
  },
  {
    name: "DeepLearning.ai Tensorflow Developer",
    issuer: "Coursera",
    description: "NLP, Computer Vision, Time series prediction, Convolutional & Recurrent Neural networks, LSTMs",
    link: "https://www.coursera.org/account/accomplishments/specialization/QRH8JXG7JGCG"
  },
  {
    name: "Improving Deep Neural Networks",
    issuer: "DeepLearning.AI",
    description: "Hyperparameter Tuning, Regularization and Optimization",
    link: "https://www.coursera.org/account/accomplishments/verify/5J5NYSJHA9TH"
  },
  {
    name: "Generative AI with Large Language Models",
    issuer: "DeepLearning.AI",
    description: "Concepts and applications of LLMs",
    link: "https://www.coursera.org/account/accomplishments/verify/Z3LNQQ6ZGMM6"
  },
  {
    name: "Introduction to Generative AI",
    issuer: "Google Cloud",
    description: "Overview of AI-generated content and applications",
    link: "https://www.coursera.org/account/accomplishments/verify/UZJLQ7FGVVGY"
  },
  {
    name: "Introduction to Generative AI for Software Development",
    issuer: "Google Cloud",
    description: "Leverage generative AI to enhance development, optimize code, and speed up prototyping.",
    link: "https://www.coursera.org/account/accomplishments/verify/6ZJ46Y9OTVXK"

  },
  {
    name: "Autonomous Agents Hackathon",
    issuer: "LabLab AI Hackathon Event",
    description: "Participated and successfully completed the hackathon",
    link: "https://lablab.ai/u/@ashad_443/clm24eyya001hch193ge9l5it"
  },
  {
    name: "Edge Runners 3.2",
    issuer: "LabLab AI Hackathon Event",
    description: "Participated and successfully completed Edge Runners 3.2",
    link: "https://lablab.ai/u/@ashad_443/cm2rwwgju00gvk3xgj6g7kv2v"
  },
  {
    name: "Llama 3 Hackathon",
    issuer: "LabLab AI Hackathon Event",
    description: "Participated and successfully completed Llama 3 Hackathon",
    link: "https://lablab.ai/u/@ashad_443/cm0fgtuzm0062xpst6hbnfihj"
  }
]

export function Certificates() {
  return (
    <SectionWrapper id="certificates">
    <section id="certificates" className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4">Certificates</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-lg font-semibold">{cert.name}</h3>
            <p className="text-gray-600 dark:text-gray-400">{cert.issuer}</p>
            <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">{cert.description}</p>
            <a href={cert.link} className="text-blue-500 hover:underline">View Certificate</a>
          </motion.div>
        ))}
      </div>
    </section>
    </SectionWrapper>
  )
}
