// components/HeroSection.js
"use client";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";

export default function HeroSection() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, threshold: 0.3 });

  // Animation variants
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

  const scaleVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative w-full bg-[url('/her.jpg')] bg-cover bg-center border-b border-gray-400 py-20 mt-16 overflow-hidden">
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-black/40"
      />
      
      <motion.div 
        ref={heroRef}
        variants={containerVariants}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center">
          <motion.div 
            variants={scaleVariants}
            className="mb-8"
          >
            <motion.div 
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center text-6xl border-4 border-white shadow-2xl"
            >
              🎥
            </motion.div>
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            About IslamicMN
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed"
          >
            Welcome to my digital world! I&apos;m a passionate content creator dedicated to sharing
            Islamic knowledge, technology insights, and entertaining content that inspires and educates.
          </motion.p>
        </div>
      </motion.div>

      {/* Floating elements */}
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="absolute top-20 left-10 text-4xl opacity-20"
      >
        ⭐
      </motion.div>
      <motion.div
        animate={{ y: [10, -10, 10] }}
        transition={{ repeat: Infinity, duration: 4 }}
        className="absolute top-40 right-20 text-3xl opacity-20"
      >
        🌙
      </motion.div>
    </section>
  );
}