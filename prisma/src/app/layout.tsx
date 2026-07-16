import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";
import RightPanelAds from "@/components/layout/RightPanelAds";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SAMBANDH - Discover, Solve, Learn",
  description: "A community platform to share knowledge, solve problems, and connect.",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        {/* Fixed Top Navigation */}
        <Navbar />

        {/* Main Application Shell - Pushed down by Navbar height (pt-16) */}
        <div className="flex flex-1 max-w-[1600px] mx-auto w-full pt-16">
          
          {/* Left Navigation: Hidden on mobile, fixed on desktop */}
          <Sidebar />

          {/* Center Content Area: The main scrollable feed/pages */}
          <main className="flex-1 md:ml-64 xl:mr-80 min-h-screen p-4 md:p-6">
            <div className="max-w-3xl mx-auto">
              {children}
            </div>
          </main>

          {/* Right Monetization Panel: Hidden on smaller screens, fixed on large screens */}
          <RightPanelAds />
          
        </div>
      </body>
    </html>
  );
}
