import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import FloatingScrollTop from "@/components/FloatingScrollTop";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["300", "400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Deepak Kumar Majhi — Software & AI Engineer",
    template: "%s | Deepak Kumar Majhi",
  },
  description:
    "Personal portfolio of Deepak Kumar Majhi. Software & AI Engineer based in Bhubaneswar, Odisha. Specializing in Python, Next.js, FastAPI, GenAI, and distributed intelligence.",
  keywords: [
    "Deepak Kumar Majhi",
    "Software Engineer",
    "AI Engineer",
    "Full Stack Developer",
    "Next.js",
    "FastAPI",
    "Python",
    "Distributed Systems",
    "Machine Learning",
    "Bhubaneswar",
  ],
  authors: [{ name: "Deepak Kumar Majhi" }],
  creator: "Deepak Kumar Majhi",
  metadataBase: new URL("https://deepak-kumar-majhi-portfolio.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://deepak-kumar-majhi-portfolio.vercel.app",
    title: "Deepak Kumar Majhi — Software & AI Engineer",
    description:
      "Software & AI Engineer specializing in distributed systems, machine learning pipelines, and production-grade intelligent architectures.",
    siteName: "Deepak Kumar Majhi Portfolio",
    images: [
      {
        url: "/images/about/deepak-portrait.jpg",
        width: 1200,
        height: 630,
        alt: "Deepak Kumar Majhi — Software & AI Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Deepak Kumar Majhi — Software & AI Engineer",
    description:
      "Software & AI Engineer specializing in distributed systems, machine learning pipelines, and production-grade intelligent architectures.",
    images: ["/images/about/deepak-portrait.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col bg-[#F4F7FA] text-[#192434] selection:bg-[#0B46A3] selection:text-[#F4F7FA] font-sans antialiased">
        <SmoothScroll>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingScrollTop />
        </SmoothScroll>
      </body>
    </html>
  );
}
