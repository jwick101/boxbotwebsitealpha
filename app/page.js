"use client";

import WalletButton from "./components/WalletButton";
import Image from "next/image";
import { motion } from "framer-motion";

// Button data for better maintainability
const buttons = [
  { label: "About", href: "/about" },
  { label: "Roadmap", href: "/roadmap" },
  { label: "BoxBot Industry Data", href: "https://x.com/boxbotai", external: true },
  { label: "BoxBot Marketing", href: "/marketing" },
  { label: "BoxBot Rev Track", href: "/revenue-tracking" },
  { label: "Trade Films", href: "/trade-films" },
  { label: "Mint Film", href: "/mint-film" },
];

// Footer navigation links
const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Roadmap", href: "/roadmap" },
  { label: "Trade Films", href: "/trade-films" },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black via-gray-900 to-blue-900 text-gray-200 font-sans">
      {/* Header with WalletButton */}
      <header className="absolute top-4 right-4">
        <WalletButton />
      </header>

      {/* Main Content Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center mt-20 text-center px-4"
      >
        {/* BoxBot Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mb-8 drop-shadow-lg"
        >
          <Image
            src="/boxbot-logo.png"
            alt="BoxBot Logo"
            width={200}
            height={200}
            className="rounded-lg"
          />
        </motion.div>

        {/* Heading */}
        <h1 className="text-5xl font-extrabold text-white mb-4 leading-tight md:text-6xl">
          Welcome to <span className="text-blue-500">BoxBot</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
          Revolutionizing the film industry with cutting-edge AI and blockchain tools. Discover
          tokenized film ownership, transparent earnings, and autonomous marketing solutions.
        </p>
      </motion.div>

      {/* Buttons Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-12 space-y-4"
      >
        {buttons.map((button, idx) => (
          <motion.a
            key={idx}
            href={button.href}
            target={button.external ? "_blank" : "_self"}
            rel={button.external ? "noopener noreferrer" : ""}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="block w-64 text-center bg-gray-800 text-gray-200 font-semibold py-3 rounded-lg hover:bg-blue-600 hover:shadow-lg hover:text-white transition-all duration-300 shadow-md"
          >
            {button.label}
          </motion.a>
        ))}
      </motion.div>

      {/* Footer */}
      <footer className="mt-20 w-full py-6 bg-gray-900 text-gray-300">
        <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
          {/* Navigation Links */}
          <div className="flex space-x-6">
            {footerLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="hover:text-blue-500 transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Base Logo */}
          <div className="flex items-center">
            <Image
              src="/baselogo.png"
              alt="Base Logo"
              width={120}
              height={40}
              className="w-auto h-12 object-contain"
            />
          </div>
        </div>

        {/* Copyright */}
        <p className="text-center text-sm mt-4">© 2025 BoxBot. All rights reserved.</p>
      </footer>
    </div>
  );
}
