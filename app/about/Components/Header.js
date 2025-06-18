// components/Header.js
"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Header1() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-black/90 backdrop-blur-sm shadow-lg border-b border-gray-700 fixed w-full top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center"
          >
            <Link
              href="/"
              className="text-2xl font-bold text-white hover:text-blue-400 transition-colors duration-300"
            >
              IslamicMN
            </Link>
          </motion.div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                >
                  Home
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/about"
                  className="text-white bg-blue-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  About
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}