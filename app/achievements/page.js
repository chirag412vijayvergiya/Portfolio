"use client";

import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Award,
  Trophy,
  Medal,
  Star,
  Crown,
  FileText,
  ChevronRight
} from "lucide-react";

export default function AchievementsPage() {
  const [selectedAchievement, setSelectedAchievement] = useState(null);
  
  // Using useInView directly instead of the custom hook to avoid context errors
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false
  });
  
  // Animation controls for elements that should animate when in view
  const controls = useAnimation();
  
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  
  const achievements = [
    {
      id: 1,
      year: 2025,
      title: "Certificate of Excellence",
      description: "Certificate awarded for developing the SOBUS website by the Director of the Organization.",
      icon: <FileText className="w-6 h-6" />,
      color: "from-amber-500 to-orange-600",
      bgColor: "bg-amber-900/20",
      borderColor: "border-amber-500/20"
    },
    {
      id: 2,
      year: 2024,
      title: "Dev-O-Thon Champion",
      description: "First rank for two spontaneous web problems in Dev-O-Thon, demonstrating exceptional problem-solving skills under pressure.",
      icon: <Trophy className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-600",
      bgColor: "bg-blue-900/20",
      borderColor: "border-blue-500/20"
    },
    {
      id: 3,
      year: 2024,
      title: "CodeSummit Finalist",
      description: "National Level Coding Competition Finalist at CodeSummit, competing against top talent from across the country.",
      icon: <Medal className="w-6 h-6" />,
      color: "from-purple-500 to-violet-600",
      bgColor: "bg-purple-900/20",
      borderColor: "border-purple-500/20"
    },
    {
      id: 4,
      year: 2024,
      title: "Flipkart Grid 6.0",
      description: "Advanced past Round 1.1 in Flipkart Grid 6.0, among 8,165 teams selected from 4,84,309 registrations.",
      icon: <Star className="w-6 h-6" />,
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-green-900/20",
      borderColor: "border-green-500/20"
    },
    {
      id: 5,
      year: 2023,
      title: "CodeKraken Hackathon Organizer",
      description: "Recognized for outstanding leadership in organizing the CodeKraken Hackathon, fostering innovation and collaboration.",
      icon: <Crown className="w-6 h-6" />,
      color: "from-rose-500 to-pink-600",
      bgColor: "bg-rose-900/20",
      borderColor: "border-rose-500/20"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  // Fixed window object usage with useEffect
  const [particles, setParticles] = useState([]);
  
  useEffect(() => {
    // Generate random particles only in the client
    if (typeof window !== 'undefined') {
      const newParticles = Array(10).fill(0).map((_, i) => ({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        targetX: Math.random() * window.innerWidth,
        targetY: Math.random() * window.innerHeight,
        duration: 10 + Math.random() * 20
      }));
      setParticles(newParticles);
    }
  }, []);

  return (
    <div className="min-h-screen bg-transparent text-white pt-20 pb-20 px-4 md:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -top-40 -right-40 w-96 h-96  rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full blur-3xl"></div>
      
      {/* Floating particles - using particles state created in useEffect */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 rounded-full opacity-50"
          initial={{ 
            x: particle.x, 
            y: particle.y 
          }}
          animate={{ 
            x: particle.targetX, 
            y: particle.targetY,
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ 
            duration: particle.duration, 
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      ))}
      
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: -20 }}
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
        }}
        className="max-w-6xl mx-auto relative z-10"
      >
        <div className="px-4 md:px-[5rem] mb-16">
  <motion.h2
    className="text-indigo-400 text-[30px] md:text-3xl font-bold mb-8 mt-10"
    initial={{ opacity: 0, y: -20 }}
    animate={controls}
    variants={{
      visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.2 } }
    }}
  >
    Achievements & Awards
  </motion.h2>
  <motion.p 
    className="text-lg text-gray-300 max-w-2xl"
    initial={{ opacity: 0 }}
    animate={controls}
    variants={{
      visible: { opacity: 1, transition: { duration: 0.7, delay: 0.3 } }
    }}
  >
    A showcase of milestones, recognitions, and accomplishments throughout my journey.
  </motion.p>
</div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Timeline indicators with enhanced styling */}
          <div className="hidden md:block md:col-span-1 relative">
            <div className="sticky top-20 h-[500px] flex flex-col items-center">
              <div className="h-full w-1 bg-gradient-to-b from-transparent via-purple-500/30 to-transparent relative rounded-full shadow-[0_0_15px_rgba(168,85,247,0.4)]">
                {/* Glowing effect at top */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-purple-500/20 blur-md"></div>
                
                {/* Timeline nodes - now positioned in relation to card positions */}
                {achievements.map((achievement, index) => {
                  const isSelected = selectedAchievement?.id === achievement.id;
                  // Calculate position to align with card top
                  const nodePosition = `${(index * 140) + 32}px`;
                  
                  return (
                    <motion.div
                      key={achievement.id}
                      className={`absolute w-6 h-6 -left-2.5 rounded-full border-2 cursor-pointer z-10
                        ${isSelected 
                          ? `${achievement.color.split(' ')[1]} border-white shadow-[0_0_15px_rgba(255,255,255,0.5)]` 
                          : "bg-gray-900 border-gray-600 hover:border-white"
                        }`}
                      style={{ top: nodePosition }}
                      onClick={() => setSelectedAchievement(
                        selectedAchievement?.id === achievement.id ? null : achievement
                      )}
                      whileHover={{ 
                        scale: 1.2, 
                        boxShadow: "0 0 15px rgba(168, 85, 247, 0.6)",
                        transition: { duration: 0.2 }
                      }}
                      whileTap={{ scale: 0.9 }}
                      layoutId={`timelineNode-${achievement.id}`}
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    >
                      {/* Inner circle that appears on selection */}
                      {isSelected && (
                        <motion.div 
                          className="absolute inset-1 rounded-full bg-white"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        />
                      )}
                      
                      {/* Connecting line from circle to card */}
                      {isSelected && (
                        <motion.div 
                          className="absolute top-1/2 left-full h-0.5 bg-gradient-to-r from-white to-transparent"
                          initial={{ width: 0, opacity: 0 }}
                          animate={{ width: 24, opacity: 1 }}
                          transition={{ delay: 0.1 }}
                        />
                      )}
                    </motion.div>
                  );
                })}
                
                {/* Glowing effect at bottom */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-blue-500/20 blur-md"></div>
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="md:col-span-11">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="space-y-8"
            >
              {achievements.map((achievement, index) => {
                const isSelected = selectedAchievement?.id === achievement.id;
                return (
                  <motion.div
                    key={achievement.id}
                    variants={itemVariants}
                    id={`achievement-${achievement.id}`}
                    className={`rounded-xl ${achievement.bgColor} backdrop-blur-md border transition-all duration-300 cursor-pointer group
                      ${isSelected 
                        ? `border-${achievement.color.split(' ')[1].replace('to-', '')} shadow-lg shadow-${achievement.color.split(' ')[1].replace('to-', '')}/10` 
                        : achievement.borderColor + " hover:shadow-lg hover:shadow-purple-500/10"
                      }`}
                    onClick={() => setSelectedAchievement(
                      selectedAchievement?.id === achievement.id ? null : achievement
                    )}
                    whileHover={{ y: -5 }}
                  >
                    {/* Gradient bar at top */}
                    <div className={`h-1 w-full bg-gradient-to-r ${achievement.color} rounded-t-xl`}></div>
                    
                    <div className="p-6">
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-full bg-gradient-to-br ${achievement.color} text-white shadow-lg`}>
                          {achievement.icon}
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="text-xl font-bold text-white mb-1">{achievement.title}</h3>
                              <p className="text-gray-400">{achievement.year}</p>
                            </div>
                            <motion.div 
                              className={`rounded-full p-1.5 text-white transition-colors
                                ${isSelected 
                                  ? `bg-gradient-to-r ${achievement.color}` 
                                  : "bg-gray-800 bg-opacity-50 text-gray-400 group-hover:text-white"
                                }`}
                              animate={{ rotate: isSelected ? 90 : 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <ChevronRight size={16} />
                            </motion.div>
                          </div>
                          
                          {isSelected && (
                            <motion.div
                              variants={detailVariants}
                              initial="hidden"
                              animate="visible"
                              className="mt-4"
                            >
                              <motion.div
                                className="h-px bg-gray-700/50 w-full my-3"
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 0.5 }}
                              />
                              <motion.p 
                                className="text-gray-300 leading-relaxed"
                              >
                                {achievement.description}
                              </motion.p>
                            </motion.div>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>

        {/* Year markers - vertical on desktop with enhanced styling */}
        <div className="hidden md:block absolute left-12 top-0 bottom-0 h-full">
          <div className="sticky top-20 h-[500px]">
            {achievements.map((achievement, index) => {
              const isSelected = selectedAchievement?.id === achievement.id;
              // Calculate position to align with timeline nodes
              const yearPosition = `${(index * 140) + 32}px`;
              
             
            })}
          </div>
        </div>
      </motion.div>
    </div>
  );
}