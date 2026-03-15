'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaNewspaper, FaFileAlt, FaHeadphones, FaUserFriends, FaRobot, FaMusic } from 'react-icons/fa';

const floatingVariants = {
  initial: { y: 0 },
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function HomePage() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: FaNewspaper,
      title: 'Curated Top Articles',
      description: 'We sift through thousands of sources daily to bring you the most relevant articles, tailored to your interests.',
      image: '/Article.svg',
      color: 'text-purple-400',
    },
    {
      icon: FaFileAlt,
      title: 'Summary at a Glance',
      description: 'Get concise, digestible summaries of the articles, allowing you to quickly grasp the key takeaways.',
      image: '/Summary.svg',
      color: 'text-blue-400',
    },
    {
      icon: FaHeadphones,
      title: 'Listen On the Go',
      description: 'Transform articles into audio and listen on the go. Stay informed while commuting, working out, or during lunch breaks.',
      image: '/Audio.svg',
      color: 'text-teal-400',
    },
    {
      icon: FaUserFriends,
      title: 'Engage with Persona Conversations',
      description: 'Gain unique insights as AI-generated personas, like industry leaders and experts from their perspectives.',
      image: '/Podcast.svg',
      color: 'text-sky-500',
    },
    {
      icon: FaRobot,
      title: 'Chat with AI about this Article',
      description: 'Engage in dynamic, AI-driven conversations about the content, clarify doubts, and dive deeper into the topics.',
      image: '/ChatAI.svg',
      color: 'text-pink-400',
    },
    {
      icon: FaMusic,
      title: 'Personalize Your Audio Experience',
      description: 'Tailor your journey by selecting personas and topics that resonate with you for a truly customized experience.',
      image: '/Music.svg',
      color: 'text-cyan-400',
    },
  ];

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
            <a href="#features" className="hover:text-purple-400 transition">
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
                <a href="#features" onClick={() => setIsOpen(false)}>
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

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white min-h-screen flex items-center relative overflow-hidden">
        {/* Floating Elements */}
        <motion.div
          className="absolute top-10 left-10 w-16 h-16 bg-blue-500 rounded-full"
          variants={floatingVariants}
          initial="initial"
          animate="animate"
          style={{ willChange: 'transform', pointerEvents: 'none' }}
        />
        <motion.div
          className="absolute top-20 right-20 w-10 h-10 bg-purple-500 rounded-full"
          variants={floatingVariants}
          initial="initial"
          animate="animate"
          style={{ animationDelay: '1s', willChange: 'transform', pointerEvents: 'none' }}
        />
        <motion.div
          className="absolute bottom-10 left-20 w-12 h-12 bg-blue-300 rounded-full"
          variants={floatingVariants}
          initial="initial"
          animate="animate"
          style={{ animationDelay: '2s', willChange: 'transform', pointerEvents: 'none' }}
        />

        <div className="max-w-2xl mx-auto text-center p-4 z-10">
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            style={{ willChange: 'opacity' }}
          >
            Elevate Your Knowledge: Curated Insights, Anytime, Anywhere
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-300 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            style={{ willChange: 'opacity' }}
          >
            Stay ahead with daily top articles and audio insights from AI personas for busy professionals. Discover key trends and boost your expertise effortlessly!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            style={{ willChange: 'transform, opacity' }}
          >
            <a href="/main">
              <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-full font-medium hover:from-blue-400 hover:to-purple-400 transition">
                Get Started
              </button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white py-16 px-4 md:px-8 lg:px-28"
      >
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -50px 0px" }}
            transition={{ duration: 0.5 }}
            style={{ willChange: 'transform, opacity' }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Sophia?</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Experience the future of news consumption with our AI-powered platform designed for busy professionals and curious minds.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex flex-col h-full items-center border border-gray-700 bg-gray-800 p-8 rounded-xl shadow-xl text-center transition-all duration-300 hover:scale-105 hover:bg-[#232f3f] hover:shadow-2xl cursor-pointer will-change-transform"
                  style={{ willChange: 'transform, opacity' }}
                >
                  <div className="mb-4">
                    <Icon className={`text-4xl ${feature.color}`} />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 flex-grow">{feature.title}</h3>
                  <p className="text-gray-400 mb-6">{feature.description}</p>
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="rounded-lg shadow-lg w-full h-48 object-cover"
                  />
                </motion.div>
              );
            })}
          </div>

          {/* CTA Section */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "0px 0px -50px 0px" }}
            transition={{ duration: 0.4 }}
            style={{ willChange: 'transform, opacity' }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Ready to Personalize Your Learning?
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-8">
              Explore curated content and engage with AI-driven insights for a richer, more meaningful learning experience.
            </p>
            <a href="/main">
              <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-full font-medium hover:from-blue-400 hover:to-purple-400 transition">
                Get Started
              </button>
            </a>
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
                <a href="#features" className="hover:text-purple-400 transition">
                  Features
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
