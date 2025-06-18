// components/StatsSection.js
"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function StatsSection() {
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, threshold: 0.3 });

  const stats = [
    { label: "Videos Created", value: "17+", icon: "🎬" },
    { label: "Subscribers", value: "73+", icon: "👥" },
    { label: "Views", value: "879+", icon: "👁️" },
    { label: "Years Active", value: "1+", icon: "📅" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section 
      ref={statsRef}
      variants={containerVariants}
      initial="hidden"
      animate={statsInView ? "visible" : "hidden"}
      className="py-16 bg-gradient-to-r from-purple-900/50 to-black/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700"
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}