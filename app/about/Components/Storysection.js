// components/StorySection.js
"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function StorySection() {
  const storyRef = useRef(null);
  const storyInView = useInView(storyRef, { once: true, threshold: 0.3 });

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
    <section className="py-20 bg-[url('/heroo.jpg')] bg-cover bg-center border-b border-gray-400">
      <motion.div 
        ref={storyRef}
        variants={containerVariants}
        initial="hidden"
        animate={storyInView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              My Journey
            </h2>
            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <motion.p variants={itemVariants}>
                Assalamu Alaikum! I&apos;m the creator behind IslamicMN, where faith meets creativity. 
                My journey began with a simple desire to share the beauty of Islam through modern 
                digital platforms.
              </motion.p>
              <motion.p variants={itemVariants}>
                What started as a hobby has grown into a passion for creating content that bridges 
                traditional Islamic teachings with contemporary digital expression. From heartfelt 
                Naats to practical tech tutorials, I believe in creating diverse content that serves 
                our community.
              </motion.p>
              <motion.p variants={itemVariants}>
                When I&apos;m not creating videos, you&apos;ll find me exploring the latest technology, 
                learning new skills, and constantly seeking ways to improve the quality of content 
                I share with you all.
              </motion.p>
            </div>
          </motion.div>
          
          <motion.div 
            variants={scaleVariants}
            whileHover={{ rotate: -1 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-black to-purple-600 rounded-2xl p-8 transform rotate-3 shadow-2xl">
              <motion.div 
                whileHover={{ rotate: 1 }}
                className="bg-black rounded-xl p-6 transform -rotate-3"
              >
                <h3 className="text-2xl font-bold text-white mb-4">Mission Statement</h3>
                <p className="text-gray-300 leading-relaxed">
                  &quot;To create meaningful content that strengthens faith, shares knowledge, 
                  and brings joy to our global Muslim community while embracing the 
                  possibilities of modern technology.&quot;
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}