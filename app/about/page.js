// pages/about.js
"use client";
import Head from "next/head";
import Link from "next/link";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function About() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  
  const heroRef = useRef(null);
  const storyRef = useRef(null);
  const statsRef = useRef(null);
  const categoriesRef = useRef(null);
  
  const heroInView = useInView(heroRef, { once: true, threshold: 0.3 });
  const storyInView = useInView(storyRef, { once: true, threshold: 0.3 });
  const statsInView = useInView(statsRef, { once: true, threshold: 0.3 });
  const categoriesInView = useInView(categoriesRef, { once: true, threshold: 0.3 });

  const stats = [
    { label: "Videos Created", value: "17+", icon: "🎬" },
    { label: "Subscribers", value: "73+", icon: "👥" },
    { label: "Views", value: "879+", icon: "👁️" },
    { label: "Years Active", value: "1+", icon: "📅" },
  ];

  const contentCategories = [
    {
      title: "Islamic Content",
      description: "Naats, Islamic teachings, and spiritual guidance to strengthen your faith and connection with Allah.",
      icon: "🕌",
      color: "from-green-500 to-emerald-600",
      videos: ["Spiritual Guidance", "Daily Duas", "Quran Recitations", "Islamic Stories"]
    },
    {
      title: "Tech Tips",
      description: "Latest technology tutorials, gadget reviews, and helpful tech tips for everyday use.",
      icon: "💻",
      color: "from-blue-500 to-cyan-600",
      videos: ["Mobile Reviews", "PC Tutorials", "Software Tips", "Tech News"]
    },
    {
      title: "Entertainment",
      description: "Fun shorts, viral content, and entertaining videos to brighten your day.",
      icon: "🎭",
      color: "from-purple-500 to-pink-600",
      videos: ["Comedy Shorts", "Viral Trends", "Fun Challenges", "Memes"]
    },
    {
      title: "Motivation",
      description: "Inspirational content to help you stay motivated and achieve your goals in life.",
      icon: "💪",
      color: "from-orange-500 to-red-600",
      videos: ["Success Stories", "Life Tips", "Goal Setting", "Mindset"]
    },
  ];

  const testimonials = [
    {
      name: "Ahmad Ali",
      comment: "MashAllah! Your Islamic content has really helped strengthen my faith. Keep up the great work!",
      rating: 5,
      avatar: "👨‍🦱"
    },
    {
      name: "Fatima Khan",
      comment: "The tech tutorials are so helpful! Easy to understand and very practical.",
      rating: 5,
      avatar: "👩‍💻"
    },
    {
      name: "Omar Sheikh",
      comment: "Love the entertainment content! Always makes me smile after a long day.",
      rating: 5,
      avatar: "😊"
    },
    {
      name: "Aisha Rahman",
      comment: "Your motivational videos inspire me every day. Jazakallah khair!",
      rating: 5,
      avatar: "✨"
    }
  ];

  // Slider settings for content categories
  const categorySliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  // Slider settings for testimonials
  const testimonialSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

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
    <>
      <Head>
        <title>About - IslamicMN</title>
        <meta
          name="description"
          content="Learn more about IslamicMN - Content creator specializing in Islamic content, tech tips, and entertainment"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
        {/* Navbar with motion */}
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

        {/* Hero Section with Parallax */}
        <section className="relative bg-gradient-to-r from-black to-purple-800 border-b border-gray-400 py-20 mt-16 overflow-hidden">
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

        {/* Stats Section */}
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

        {/* My Story Section */}
        <section className="py-20 bg-gradient-to-r from-purple-800 to-black border-b border-gray-400">
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

        {/* Content Categories Slider */}
        <section className="py-20 bg-gradient-to-r from-purple-900 to-black/50 border-b border-gray-400">
          <motion.div 
            ref={categoriesRef}
            variants={containerVariants}
            initial="hidden"
            animate={categoriesInView ? "visible" : "hidden"}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What I Create
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Diverse content designed to inspire, educate, and entertain our community
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <Slider {...categorySliderSettings}>
                {contentCategories.map((category, index) => (
                  <div key={index} className="px-4">
                    <motion.div 
                      whileHover={{ scale: 1.02, y: -10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="bg-black/70 backdrop-blur-sm rounded-xl p-6 h-80 border border-gray-700 hover:border-purple-500 transition-all duration-300"
                    >
                      <motion.div 
                        whileHover={{ scale: 1.1, rotate: 10 }}
                        className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center text-2xl mb-4`}
                      >
                        {category.icon}
                      </motion.div>
                      <h3 className="text-xl font-bold text-white mb-3">{category.title}</h3>
                      <p className="text-gray-300 leading-relaxed mb-4">{category.description}</p>
                      <div className="space-y-1">
                        {category.videos.map((video, idx) => (
                          <div key={idx} className="text-sm text-gray-400 flex items-center">
                            <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                            {video}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                ))}
              </Slider>
            </motion.div>
          </motion.div>
        </section>

        {/* Testimonials Slider */}
        <section className="py-20 bg-gradient-to-r from-black to-purple-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What Viewers Say
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Feedback from our amazing community members
              </p>
            </motion.div>
            
            <Slider {...testimonialSliderSettings}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="px-4">
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="bg-black/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700"
                  >
                    <div className="text-4xl mb-4 text-center">{testimonial.avatar}</div>
                    <div className="flex justify-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-xl">⭐</span>
                      ))}
                    </div>
                    <p className="text-gray-300 text-center mb-4 italic">
                      &quot;{testimonial.comment}&quot;
                    </p>
                    <p className="text-white text-center font-semibold">- {testimonial.name}</p>
                  </motion.div>
                </div>
              ))}
            </Slider>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-black to-purple-800">
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

        {/* Footer */}
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
      </div>

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }

        /* Custom slider styles */
        .slick-dots {
          bottom: -50px;
        }

        .slick-dots li button:before {
          color: #fff;
          font-size: 12px;
        }

        .slick-dots li.slick-active button:before {
          color: #8b5cf6;
        }

        .slick-prev,
        .slick-next {
          z-index: 10;
        }

        .slick-prev:before,
        .slick-next:before {
          color: #8b5cf6;
          font-size: 20px;
        }

        .slick-prev {
          left: -30px;
        }

        .slick-next {
          right: -30px;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .slick-prev {
            left: -20px;
          }
          
          .slick-next {
            right: -20px;
          }
        }
      `}</style>
    </>
  );
}