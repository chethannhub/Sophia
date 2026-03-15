'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-10 transition-all duration-300 ${
      isScrolled ? 'bg-opacity-70' : 'bg-opacity-100'
    } bg-gradient-to-r from-black via-gray-800 to-blue-900`}>
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link href="/">
          <div className="logo text-white font-bold text-2xl cursor-pointer">
            Sophia
          </div>
        </Link>

        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
          </button>
        </div>

        {/* Desktop Links */}
        <ul className="hidden lg:flex gap-8 items-center text-white">
          <Link href="/" className="hover:text-purple-400 transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-purple-400 transition">
            About
          </Link>
          <Link href="#features" className="hover:text-purple-400 transition">
            Features
          </Link>
          <Link href="/main">
            <button className='px-6 py-2 rounded-3xl bg-[#2137FC] hover:bg-blue-600'>
              Get Started
            </button>
          </Link>
        </ul>

        {/* Mobile Sidebar */}
        <motion.div
          className={`lg:hidden fixed inset-0 bg-black bg-opacity-80 z-50 p-8 ${isOpen ? 'block' : 'hidden'}`}
          initial={{ x: '-100%' }}
          animate={{ x: isOpen ? 0 : '-100%' }}
          transition={{ duration: 0.5 }}
        >
          <button className="absolute top-5 right-5 text-white" onClick={toggleMenu}>
            <FaTimes size={30} />
          </button>
          <ul className="flex flex-col gap-6 mt-10 text-white">
            <Link href="/" onClick={toggleMenu} className="hover:text-purple-400 transition">
              Home
            </Link>
            <Link href="/about" onClick={toggleMenu} className="hover:text-purple-400 transition">
              About
            </Link>
            <Link href="#features" onClick={toggleMenu} className="hover:text-purple-400 transition">
              Features
            </Link>
            <Link href="/main" onClick={toggleMenu}>
              <button className='px-6 py-2 rounded-3xl bg-[#2137FC] hover:bg-blue-700'>
                Get Started
              </button>
            </Link>
          </ul>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
