"use client";

import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { useEffect, useState } from "react";
import useIsMobile from "@/components/Hooks/IsMobileScreen";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const isMobile = useIsMobile();

  console.log("sidebarOpen",sidebarOpen)
  console.log("sidebarOpen isMobile",isMobile)

  useEffect(() => {
    if (isMobile) {
      setSidebarOpen(false); // Automatically open sidebar on larger screens
    }else{
      setSidebarOpen(true);
    }
  }, [isMobile]);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    if (isMobile) {
      setSidebarOpen(false);
    }
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen flex flex-col">
          <Header toggleSidebar={toggleSidebar} isMobile={isMobile} />
          <div className="flex flex-1 ">
            {/* Sidebar */}
            <Sidebar sidebarOpen={sidebarOpen} isMobile={isMobile} />

            {/* Render backdrop only over main content when sidebar is open on mobile */}
            {isMobile && sidebarOpen && (
              <div
                className="fixed inset-0 z-20 top-20 bg-black opacity-50"
                onClick={closeSidebar}
              ></div>
            )}

            {/* Main Content */}
            <main className="relative flex-1 p-6 z-10">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
