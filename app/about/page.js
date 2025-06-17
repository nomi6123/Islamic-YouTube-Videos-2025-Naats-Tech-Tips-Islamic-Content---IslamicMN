// pages/about.js
"use client"
import Head from 'next/head'
import Link from 'next/link'

export default function About() {
  const stats = [
    { label: "Videos Created", value: "50+", icon: "🎬" },
    { label: "Subscribers", value: "1.2K+", icon: "👥" },
    { label: "Views", value: "25K+", icon: "👁️" },
    { label: "Years Active", value: "2+", icon: "📅" }
  ]

  const contentCategories = [
    {
      title: "Islamic Content",
      description: "Naats, Islamic teachings, and spiritual guidance to strengthen your faith and connection with Allah.",
      icon: "🕌",
      color: "from-green-500 to-emerald-600"
    },
    {
      title: "Tech Tips",
      description: "Latest technology tutorials, gadget reviews, and helpful tech tips for everyday use.",
      icon: "💻",
      color: "from-blue-500 to-cyan-600"
    },
    {
      title: "Entertainment",
      description: "Fun shorts, viral content, and entertaining videos to brighten your day.",
      icon: "🎭",
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "Motivation",
      description: "Inspirational content to help you stay motivated and achieve your goals in life.",
      icon: "💪",
      color: "from-orange-500 to-red-600"
    }
  ]

  return (
    <>
      <Head>
        <title>About - IslamicMN</title>
        <meta name="description" content="Learn more about IslamicMN - Content creator specializing in Islamic content, tech tips, and entertainment" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gray-900 text-white">
        {/* Navbar */}
        <nav className="bg-black shadow-lg border-b border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <Link href="/" className="text-2xl font-bold text-white hover:text-blue-400 transition-colors duration-300">
                  IslamicMN
                </Link>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link href="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">
                    Home
                  </Link>
                  <Link href="/about" className="text-white bg-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                    About
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-black to-purple-800 border-b border-gray-400 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="mb-8">
                <div className="w-32 h-32 bg-gray-700 rounded-full mx-auto mb-6 flex items-center justify-center text-6xl border-4 border-white shadow-2xl">
                  🎥
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
                About IslamicMN
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                Welcome to my digital world! I'm a passionate content creator dedicated to sharing 
                Islamic knowledge, technology insights, and entertaining content that inspires and educates.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        {/* <section className="py-16 bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl mb-2">{stat.icon}</div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* My Story Section */}
        <section className="py-20 bg-gradient-to-r from-black border-b border-gray-400 to-purple-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  My Journey
                </h2>
                <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                  <p>
                    Assalamu Alaikum! I'm the creator behind IslamicMN, where faith meets creativity. 
                    My journey began with a simple desire to share the beauty of Islam through modern 
                    digital platforms.
                  </p>
                  <p>
                    What started as a hobby has grown into a passion for creating content that bridges 
                    traditional Islamic teachings with contemporary digital expression. From heartfelt 
                    Naats to practical tech tutorials, I believe in creating diverse content that serves 
                    our community.
                  </p>
                  <p>
                    When I'm not creating videos, you'll find me exploring the latest technology, 
                    learning new skills, and constantly seeking ways to improve the quality of content 
                    I share with you all.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-black to-purple-600 rounded-2xl p-8 transform rotate-3 shadow-2xl">
                  <div className="bg-black rounded-xl p-6 transform -rotate-3">
                    <h3 className="text-2xl font-bold text-white mb-4">Mission Statement</h3>
                    <p className="text-gray-300 leading-relaxed">
                      "To create meaningful content that strengthens faith, shares knowledge, 
                      and brings joy to our global Muslim community while embracing the 
                      possibilities of modern technology."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Categories */}
        <section className="py-20 bg-gradient-to-r from-black to-purple-800 border-b border-gray-400">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What I Create
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Diverse content designed to inspire, educate, and entertain our community
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {contentCategories.map((category, index) => (
                <div key={index} className="bg-black rounded-xl p-6 hover:bg-black/60 transition-all duration-300 transform hover:scale-105">
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center text-2xl mb-4`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{category.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{category.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-black to-purple-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Let's Connect!
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Join our growing community and be part of this amazing journey. Your support 
              and feedback mean the world to me!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://youtube.com/@islamicmn-5?si=xE1ofZc-ZjOjhG8J" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Watch My Videos
              </Link>
              <a href="https://youtube.com/@islamicmn-5?si=xE1ofZc-ZjOjhG8J" className="border-2 border-gray-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-600 transition-all duration-300">
                Subscribe on YouTube
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gradient-to-r from-black to-cyan-900 border-t border-gray-700 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-gray-400 text-sm mb-1">
                © 2025 IslamicMN. All rights reserved. Created by Muhammad Noman
              </p>
              <p className="text-white text-sm">
                Click on the icon to see the Channel.
              </p>
              <div className="mt-4 flex justify-center space-x-6">
                <a href="https://youtube.com/@islamicmn-5?si=xE1ofZc-ZjOjhG8J" className="text-gray-400 hover:text-white transition-colors duration-300">
                  <span className="sr-only">YouTube</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        
        .animate-fade-in {
          animation: fadeIn 1s ease-in-out;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  )
}