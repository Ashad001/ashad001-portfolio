"use client"

import { motion } from "framer-motion"
import { FaPython, FaReact, FaGitAlt, FaLinux, FaAws, FaDocker } from "react-icons/fa"
import {
  SiCplusplus,
  SiJavascript,
  SiGo,
  SiHtml5,
  SiCss3,
  SiTensorflow,
  SiNumpy,
  SiFlask,
  SiStreamlit,
  SiScikitlearn,
  SiMongodb,
  SiMysql,
  SiSqlite,
  SiGooglecloud,
  SiNotion,
  SiSlack,
  SiFastapi,
  SiRedis,
  SiSelenium,
  SiOpenai,
  SiNextdotjs,
  SiClickup,
} from "react-icons/si"
import { TbBrandVscode } from "react-icons/tb"



const skills = [
  {
    category: "Languages",
    items: [
      { name: "Python", icon: <FaPython /> },
      { name: "GoLang", icon: <SiGo /> },
      { name: "C++", icon: <SiCplusplus /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "HTML", icon: <SiHtml5 /> },
      { name: "CSS", icon: <SiCss3 /> },
    ],
  },
  {
    category: "Frameworks & Libraries",
    items: [
      { name: "TensorFlow", icon: <SiTensorflow /> },
      { name: "Numpy", icon: <SiNumpy /> },
      { name: "Flask", icon: <SiFlask /> },
      { name: "Streamlit", icon: <SiStreamlit /> },
      { name: "Scikit-learn", icon: <SiScikitlearn /> },
      { name: "FastAPI", icon: <SiFastapi /> },
      { name: "Selenium", icon: <SiSelenium /> },
      { name: "OpenAI", icon: <SiOpenai /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
    ],
  },
  {
    category: "Tools & Platforms",
    items: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "Linux", icon: <FaLinux /> },
      { name: "VsCode", icon: <TbBrandVscode /> },
      { name: "Docker", icon: <FaDocker /> },
      { name: "Google Cloud Platform (GCP)", icon: <SiGooglecloud /> },
      { name: "AWS", icon: <FaAws /> },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "Redis", icon: <SiRedis /> },
    ],
  },
  {
    category: "Other",
    items: [
      { name: "Notion", icon: <SiNotion /> },
      { name: "Slack", icon: <SiSlack /> },
      { name: "ClickUp", icon: <SiClickup /> },
    ],
  },
]

export function Skills() {
  return (
    <section id="skills" className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4">Skills & Expertise</h2>
      <div className="space-y-6">
        {skills.map((skillCategory, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-3">{skillCategory.category}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {skillCategory.items.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className="flex items-center bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded-lg text-sm"
                >
                  <span className="mr-2 text-xl">{skill.icon}</span>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

