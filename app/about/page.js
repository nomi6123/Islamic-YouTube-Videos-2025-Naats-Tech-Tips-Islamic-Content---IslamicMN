// pages/about.js
"use client";
import Head from "next/head";
import Header1 from "./Components/Header";
import Footer1 from "./Components/Footer";
import HeroSection from "./Components/Hero";
import StatsSection from "./Components/Statesection";
import StorySection from "./Components/Storysection";
import ContentCategoriesSlider from "./Components/Contentsection";
import TestimonialsSlider from "./Components/Testimonial";
import CTASection from "./Components/CTA";

export default function About() {
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
        <Header1 />
        <HeroSection />
        <StatsSection />
        <StorySection />
        <ContentCategoriesSlider />
        <TestimonialsSlider />
        <CTASection />
        <Footer1 />
      </div>

      {/* Global Styles */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </>
  );
}
