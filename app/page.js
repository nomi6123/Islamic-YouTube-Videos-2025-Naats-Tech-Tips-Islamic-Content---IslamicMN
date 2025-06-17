"use client";
// pages/index.js
import Head from "next/head";
import Navbar from "./Components/Header";
import Footer from "./Components/Footer";

export default function Home() {
  const videos = [
    {
      id: "-BopLbG9c4E",
      title: "Watch on Youtube",
      embedUrl: "https://www.youtube.com/embed/-BopLbG9c4E",
    },
    {
      id: "qDIazRxKdcg",
      title: "Watch on Youtube",
      embedUrl: "https://www.youtube.com/embed/qDIazRxKdcg",
    },
    {
      id: "5QNmrjcV1UI",
      title: "Watch on Youtube",
      embedUrl: "https://www.youtube.com/embed/5QNmrjcV1UI",
    },
    {
      id: "xkIRa1lVkxY",
      title: "Funny Short Video",
      embedUrl: "https://www.youtube.com/embed/xkIRa1lVkxY",
    },
    {
      id: "WHS6Oq9olqs",
      title: "Watch on Youtube",
      embedUrl: "https://www.youtube.com/embed/WHS6Oq9olqs",
    },
    {
      id: "We1oO8Nw_ns",
      title: "Watch on Youtube",
      embedUrl: "https://www.youtube.com/embed/We1oO8Nw_ns",
    },
    {
      id: "-bnvv3BKIOlg",
      title: "Watch on Youtube",
      embedUrl: "https://www.youtube.com/embed/bnvv3BKIOlg",
    },

    {
      id: "PKYpl5_-Wco",
      title: "Watch on Youtube",
      embedUrl: "https://www.youtube.com/embed/PKYpl5_-Wco",
    },

    {
      id: "-SbniZIRxXI4",
      title: "Watch on Youtube",
      embedUrl: "https://www.youtube.com/embed/SbniZIRxXI4",
    },
    {
      id: "MHVWRPKvNTo",
      title: "Watch on Youtube",
      embedUrl: "https://www.youtube.com/embed/MHVWRPKvNTo",
    },
    {
      id: "-nwadQNho9qI",
      title: "Watch on Youtube",
      embedUrl: "https://www.youtube.com/embed/nwadQNho9qI",
    },
    {
      id: "-WUwqNSE5VUw",
      title: "Watch on Youtube",
      embedUrl: "https://www.youtube.com/embed/WUwqNSE5VUw",
    },
    // https://youtu.be/nwadQNho9qI https://youtu.be/qDIazRxKdcg
  ];

  return (
    <>
      <Head>
        <title>IslamicMN - YouTube Videos</title>
        <meta
          name="description"
          content="Watch IslamicMN's latest YouTube videos"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-black text-white">
        {/* Navbar */}

        <Navbar />

        {/* Header Section */}
        <header className="bg-gradient-to-r from-black to-purple-800 shadow-sm shadow-gray-700  py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in">
              My YouTube Videos
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Discover amazing content from Islamic teachings to tech tips and
              entertainment
            </p>
          </div>
        </header>

        {/* Videos Grid Section */}
        <main className="py-16 px-4 sm:px-6 lg:px-8" id="videos">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 ">
              {videos.map((video, index) => (
                <div
                  key={video.id + index}
                  className="bg-black/40 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-white-700 hover:border-blue-500"
                >
                  {/* Video Title */}
                  <div className="p-4 bg-black/80">
                    <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">
                      {video.title}
                    </h3>
                  </div>

                  {/* Video Iframe Container */}
                  <div
                    className="relative w-full"
                    style={{ paddingBottom: "56.25%" /* 16:9 aspect ratio */ }}
                  >
                    <iframe
                      src={video.embedUrl}
                      title={video.title}
                      className="absolute top-0 left-0 w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>

                  {/* Video Footer */}
                  <div className="p-4 bg-black/80">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-white">IslamicMN</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                        <span className="text-xs text-white">YouTube</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>

        {/* Footer */}

        <Footer />
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

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .bg-gray-750 {
          background-color: rgb(55, 65, 81);
        }
      `}</style>
    </>
  );
}
