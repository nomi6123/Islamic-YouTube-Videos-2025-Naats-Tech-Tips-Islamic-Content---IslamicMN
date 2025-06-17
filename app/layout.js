import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Font setup
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// SEO Metadata
export const metadata = {
  title: "Islamic YouTube Videos 2025 | Naats, Tech Tips & Islamic Content - IslamicMN",
  description: "Watch the best Islamic YouTube videos in 2025! Free Naats, Islamic motivation, tech tutorials & Quran recitations. Join the global IslamicMN community today!",
  keywords: "Islamic videos 2025, naats, Islamic YouTube, Muslim tech tutorials, IslamicMN, Quran recitation, Islamic motivation, spiritual videos",
  openGraph: {
    title: "Islamic YouTube Videos 2025 | Naats, Tech Tips & Islamic Content - IslamicMN",
    description: "Watch free Naats, Islamic teachings & tech videos. Explore top content from IslamicMN in 2025!",
    url: "https://yourdomain.com", // Replace with your domain
    siteName: "IslamicMN",
    images: [
      {
        url: "https://yourdomain.com/og-thumbnail.jpg", // Replace with actual image
        width: 1200,
        height: 630,
        alt: "IslamicMN YouTube Channel",
      },
    ],
    type: "website",
  },
  metadataBase: new URL("https://yourdomain.com"), // Your live URL
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="keywords" content="Islamic videos 2025, naats, Islamic YouTube, Muslim tech tutorials, IslamicMN, Quran recitation, Islamic motivation, spiritual videos" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
