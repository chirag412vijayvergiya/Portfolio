"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { FiBriefcase, FiCalendar, FiArrowLeft } from "react-icons/fi";

export default function Experience() {
  const [showDetails, setShowDetails] = useState(false);

  const internship = {
    title: "Backend Developer Intern",
    company: "Kartavya Technology",
    duration: "March 2025 - Present",
    description: [
      "Developing and optimizing RESTful APIs using Node.js and Express.js.",
      "Managing MongoDB for efficient data storage and retrieval.",
      "Automated CI/CD workflows with GitHub Actions to execute tests on every push and pull request.",
      "Ensured code quality by implementing Jest for automated testing and enforcing pre-commit hooks with Husky."
    ],
    skills: ["Node.js", "MongoDB", "Jest", "Husky", "Github"],
    color: "from-indigo-500 to-purple-600"
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const detailVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 15 
      }
    },
    exit: { 
      opacity: 0, 
      x: -100,
      transition: { 
        duration: 0.3 
      }
    }
  };

  return (
    <div className="min-h-screen text-white pt-20 pb-20 px-4 md:px-8 relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-40 left-20 w-60 h-60 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{animationDelay: "2s"}}></div>
      
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-5xl mx-auto relative z-10"
      >
        <div className="px-4 md:px-[5rem] mb-16">
  <motion.h2
    className="text-indigo-400 text-[30px] md:text-3xl font-bold mb-8 mt-10"
    initial={{ opacity: 0, y: -20 }}
    animate="visible"
    variants={{
      visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.2 } }
    }}
  >
    Professional Experience
  </motion.h2>
  <motion.p 
    className="text-lg text-gray-300 max-w-2xl"
    initial={{ opacity: 0 }}
    animate="visible"
    variants={{
      visible: { opacity: 1, transition: { duration: 0.7, delay: 0.3 } }
    }}
  >
    My professional work experience and internships.
  </motion.p>
</div>
        
        {!showDetails ? (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="md:px-[5rem]"
          >
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-2xl overflow-hidden backdrop-blur-sm border border-gray-800 hover:border-indigo-500/50 transition-all duration-300 shadow-lg hover:shadow-indigo-500/20 group"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              onClick={() => setShowDetails(true)}
            >
              <div className={`h-2 bg-gradient-to-r ${internship.color}`}></div>
              <div className="p-8">
                <div className="flex flex-col mb-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`p-3 rounded-full bg-gradient-to-br ${internship.color} text-white`}>
                      <FiBriefcase className="w-5 h-5" />
                    </div>
                    <h2 className="text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors">{internship.title}</h2>
                  </div>
                  
                  <h3 className="text-xl text-indigo-400 mt-1">{internship.company}</h3>
                  
                  <div className="flex items-center mt-3 text-gray-400">
                    <FiCalendar className="mr-2" />
                    <span>{internship.duration}</span>
                  </div>
                </div>
                
                <div className="mt-4">
                  <p className="text-gray-300 line-clamp-2 mb-4">
                    {internship.description[0]} Working with a team of designers and developers
                    to create high-quality user experiences.
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-6">
                  {internship.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-gray-800/70 text-indigo-300 px-3 py-1 rounded-full text-sm border border-gray-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                
                <div className="mt-8">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:shadow-lg hover:shadow-indigo-500/30 transition-all"
                    onClick={() => setShowDetails(true)}
                  >
                    View Details
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Experience Timeline - Simple Version */}
            <div className="mt-16 px-6">
              <h3 className="text-xl font-semibold text-indigo-300 mb-6">Experience Timeline</h3>
              <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 to-purple-600 rounded-full ml-2"></div>
                <motion.div 
                  className="relative pl-10 pb-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <div className="absolute left-0 top-1 w-5 h-5 rounded-full bg-indigo-500 border-4 border-gray-900"></div>
                  <div className="text-sm text-gray-400">{internship.duration}</div>
                  <h4 className="text-lg font-medium text-white mt-1">{internship.title}</h4>
                  <p className="text-gray-400">{internship.company}</p>
                </motion.div>
                {/* You can add more timeline entries here if needed in the future */}
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            variants={detailVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 rounded-2xl backdrop-blur-md border border-gray-800 shadow-xl p-8 md:p-10 mx-6 md:mx-[5rem]"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 border-b border-gray-700/50 pb-6">
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">{internship.title}</h2>
                <h3 className="text-xl text-indigo-400">{internship.company}</h3>
              </div>
              <div className={`mt-4 md:mt-0 bg-gradient-to-r ${internship.color} px-5 py-2 rounded-full text-white font-medium inline-block`}>
                {internship.duration}
              </div>
            </div>
            
            <div className="mb-8">
              <h4 className="text-xl font-semibold text-indigo-300 mb-4">Responsibilities & Achievements</h4>
              <ul className="space-y-4">
                {internship.description.map((item, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start"
                  >
                    <div className="mt-1.5 mr-3 h-2 w-2 rounded-full bg-indigo-500"></div>
                    <p className="text-gray-300">{item}</p>
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <div className="mb-8">
              <h4 className="text-xl font-semibold text-indigo-300 mb-4">Skills & Technologies</h4>
              <div className="flex flex-wrap gap-3">
                {internship.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-gray-800 text-indigo-300 px-4 py-2 rounded-lg text-sm border border-indigo-900/50 shadow-inner"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
            
            <div className="pt-4">
              <button
                onClick={() => setShowDetails(false)}
                className="flex items-center text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                <FiArrowLeft className="mr-2" /> Back to overview
              </button>
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}