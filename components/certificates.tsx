"use client"

import { motion } from "framer-motion"

const certificates = [
  {
    name: "Machine Learning Specialization",
    issuer: "Coursera",
    description:
      "Supervised & unsupervised learning algorithms, Neural Networks, Clustering Algorithms & Analysis, PCA",
  },
  {
    name: "DeepLearning.ai Tensorflow Developer",
    issuer: "Coursera",
    description: "NLP, Computer Vision, Time series prediction, Convolutional & Recurrent Neural networks, LSTMs",
  },
  {
    name: "Generative AI with LLMs",
    issuer: "Coursera",
    description:
      "Use Cases, Types of Transformers, Fine Tuning Techniques (PEFT & LoRA), Hyperparameters tuning, Evaluation",
  },
  {
    
  }
]

export function Certificates() {
  return (
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
          </motion.div>
        ))}
      </div>
    </section>
  )
}

