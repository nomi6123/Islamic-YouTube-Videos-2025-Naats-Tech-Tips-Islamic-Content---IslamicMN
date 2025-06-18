// components/TestimonialsSlider.js
"use client";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function TestimonialsSlider() {
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

  return (
    <>
      <section className="py-20 bg-[url('/bgg.jpg')] bg-cover bg-center">
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