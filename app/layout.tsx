import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/HomePage/Navbar";
import Footer from "./_components/HomePage/Footer";
import ReduxProvider from "@/contexts/reduxProvider";
import Modal from "./_components/HomePage/Modal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Manage your team's work projects, & tasks",
  description: "A simple, beautiful, and open-source task management app.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReduxProvider>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen`}
        >
          <Navbar />
          <Modal />
          {children}
          <Footer />
        </body>
      </ReduxProvider>
    </html>
  );
}
