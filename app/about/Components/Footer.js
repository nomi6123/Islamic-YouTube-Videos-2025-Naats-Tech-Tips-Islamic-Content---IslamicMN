// components/Footer.js
"use client";
import { motion } from "framer-motion";

export default function Footer1() {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-r from-black to-cyan-900 border-t border-gray-700 py-8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-400 text-sm mb-1">
            © 2025 IslamicMN. All rights reserved. Created by Muhammad Noman
          </p>
          <p className="text-white text-sm">
            Click on the icon to see the Channel.
          </p>
          <div className="mt-4 flex justify-center space-x-6">
            <motion.a 
              href="https://youtube.com/@islamicmn-5?si=xE1ofZc-ZjOjhG8J" 
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <span className="sr-only">YouTube</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </motion.a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}