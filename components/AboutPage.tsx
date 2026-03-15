'use client';

import React from 'react';
import { motion } from 'framer-motion';

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
};

export default function AboutPage() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navbar */}
      <nav
        className={`sticky top-0 z-10 transition-all duration-300 ${
          isScrolled ? 'bg-opacity-70' : 'bg-opacity-100'
        } bg-gradient-to-r from-black via-gray-800 to-blue-900`}
      >
        <div className="container mx-auto flex justify-between items-center p-4">
          <a href="/">
            <div className="text-white font-bold text-2xl cursor-pointer">Sophia</div>
          </a>

          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? '✕' : '☰'}
            </button>
          </div>

          {/* Desktop Links */}
          <ul className="hidden lg:flex gap-8 items-center text-white">
            <a href="/" className="hover:text-purple-400 transition">
              Home
            </a>
            <a href="/about" className="hover:text-purple-400 transition font-semibold text-purple-400">
              About
            </a>
            <a href="/#features" className="hover:text-purple-400 transition">
              Features
            </a>
            <a href="/main">
              <button className="px-6 py-2 rounded-3xl bg-[#2137FC] hover:bg-blue-600">
                Get Started
              </button>
            </a>
          </ul>

          {/* Mobile Sidebar */}
          {isOpen && (
            <motion.div
              className="lg:hidden fixed inset-0 bg-black bg-opacity-80 z-50 p-8"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <button
                className="absolute top-5 right-5 text-white"
                onClick={() => setIsOpen(false)}
              >
                ✕
              </button>
              <ul className="flex flex-col gap-6 mt-10 text-white">
                <a href="/" onClick={() => setIsOpen(false)}>
                  Home
                </a>
                <a href="/about" onClick={() => setIsOpen(false)} className="font-semibold text-purple-400">
                  About
                </a>
                <a href="/#features" onClick={() => setIsOpen(false)}>
                  Features
                </a>
                <a href="/main" onClick={() => setIsOpen(false)}>
                  <button className="px-6 py-2 rounded-3xl bg-[#2137FC]">
                    Get Started
                  </button>
                </a>
              </ul>
            </motion.div>
          )}
        </div>
      </nav>

      {/* About Section */}
      <section className="bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white min-h-screen flex items-center py-20 px-4">
        <div className="max-w-4xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Our Story
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Transforming how busy professionals stay informed with AI-powered curation
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="mb-12 bg-gray-800/50 border border-gray-700 rounded-xl p-8"
          >
            <h2 className="text-3xl font-semibold mb-4 text-blue-400">Who We Are</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Sophia is a cutting-edge news platform designed for busy professionals who want to stay informed without
              spending hours reading. We understand that in today's fast-paced world, time is your most valuable asset.
              That's why we've created an intelligent system that curates, summarizes, and presents the most important
              news and insights in digestible formats.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
            className="mb-12 bg-gray-800/50 border border-gray-700 rounded-xl p-8"
          >
            <h2 className="text-3xl font-semibold mb-4 text-purple-400">Our Mission</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              To empower professionals with real-time, curated insights that help them stay ahead of the curve in
              their respective fields. We leverage artificial intelligence and machine learning to deliver personalized,
              meaningful content that matters to you. Whether you're interested in AI breakthroughs, market trends,
              technology innovations, or industry insights, Sophia delivers it all in a format that fits your lifestyle.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6 }}
            className="mb-12 bg-gray-800/50 border border-gray-700 rounded-xl p-8"
          >
            <h2 className="text-3xl font-semibold mb-4 text-teal-400">What Makes Us Different</h2>
            <ul className="space-y-4">
              <li className="text-gray-300 text-lg flex items-start">
                <span className="text-blue-400 mr-4 font-bold">•</span>
                <span>
                  <strong>AI-Powered Curation:</strong> Our intelligent algorithms sift through thousands of sources
                  daily to bring you the most relevant content.
                </span>
              </li>
              <li className="text-gray-300 text-lg flex items-start">
                <span className="text-purple-400 mr-4 font-bold">•</span>
                <span>
                  <strong>Multi-Format Delivery:</strong> Get your news as articles, summaries, or audio—choose what
                  works best for you.
                </span>
              </li>
              <li className="text-gray-300 text-lg flex items-start">
                <span className="text-cyan-400 mr-4 font-bold">•</span>
                <span>
                  <strong>AI Persona Conversations:</strong> Interact with AI-generated personas of industry experts to
                  gain unique perspectives.
                </span>
              </li>
              <li className="text-gray-300 text-lg flex items-start">
                <span className="text-pink-400 mr-4 font-bold">•</span>
                <span>
                  <strong>Personalization:</strong> Customize your experience by selecting topics and personas that
                  resonate with you.
                </span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.8 }}
            className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 border border-blue-500/30 rounded-xl p-8"
          >
            <h2 className="text-3xl font-semibold mb-4 text-green-400">Our Vision</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              We envision a world where professionals can access high-quality, curated information instantly, without
              information overload. Sophia is not just a news app—it's your personal knowledge companion, helping you
              make informed decisions faster and smarter. By combining cutting-edge AI with human-centric design, we're
              redefining how people consume and interact with information.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-t from-black via-gray-900 to-gray-800 text-gray-400 py-12 px-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-xl font-bold mb-4 text-white">About Us</h3>
            <p className="text-sm">
              We are dedicated to providing personalized insights and learning experiences for modern professionals.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-purple-400 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-purple-400 transition">
                  About
                </a>
              </li>
              <li>
                <a href="/main" className="hover:text-purple-400 transition">
                  Get Started
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <h3 className="text-xl font-bold mb-4 text-white">Follow Us</h3>
            <div className="flex gap-6">
              <a href="#" className="hover:text-blue-500 transition">
                Facebook
              </a>
              <a href="#" className="hover:text-blue-400 transition">
                Twitter
              </a>
              <a href="#" className="hover:text-blue-600 transition">
                LinkedIn
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <h3 className="text-xl font-bold mb-4 text-white">Contact Us</h3>
            <p>Email: sophiafeedbackhub@gmail.com</p>
          </motion.div>
        </div>
        <div className="text-center mt-8 text-sm text-gray-500">
          <p>© 2024 Sophia. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
