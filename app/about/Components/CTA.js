// components/CTASection.js
"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-20 bg-[url('/key.jpg')] bg-cover bg-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Let&apos;s Connect!
        </h2>
        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          Join our growing community and be part of this amazing journey. Your support 
          and feedback mean the world to me!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              href="https://youtube.com/@islamicmn-5?si=xE1ofZc-ZjOjhG8J" 
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
            >
              Watch My Videos
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a 
              href="https://youtube.com/@islamicmn-5?si=xE1ofZc-ZjOjhG8J" 
              className="inline-block border-2 border-gray-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-600 transition-all duration-300"
            >
              Subscribe on YouTube
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}