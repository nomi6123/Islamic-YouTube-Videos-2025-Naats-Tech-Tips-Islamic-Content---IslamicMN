// components/ContentCategoriesSlider.js
"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ContentCategoriesSlider() {
  const categoriesRef = useRef(null);
  const categoriesInView = useInView(categoriesRef, { once: true, threshold: 0.3 });

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
    <>
      <section className="py-20 bg-[url('/bg.jpg')] bg-cover bg-center border-b border-gray-400">
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
                <div key={index} className="px-2 sm:px-4">
                  <motion.div
                    whileHover={{ scale: 1.02, y: -10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="bg-black/70 backdrop-blur-sm rounded-xl p-4 sm:p-6 min-h-[300px] sm:min-h-[320px] border border-gray-700 hover:border-purple-500 transition-all duration-300 flex flex-col justify-between"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center text-xl sm:text-2xl mb-3 sm:mb-4`}
                    >
                      {category.icon}
                    </motion.div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{category.title}</h3>
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">{category.description}</p>
                    <div className="space-y-1">
                      {category.videos.map((video, idx) => (
                        <div key={idx} className="text-xs sm:text-sm text-gray-400 flex items-center">
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

      {/* Custom Slider Styles */}
      <style jsx global>{`
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