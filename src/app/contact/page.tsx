'use client';

import React from 'react';
import {motion} from 'framer-motion'

const Contact = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-12">
      {/* Page Heading with Animation */}
      <motion.h1 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, ease: 'easeOut' }} 
        className="text-4xl font-bold mb-8 text-[#8608FF]">
        Get in Touch
      </motion.h1>

      {/* Contact Form Container */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.8, ease: 'easeOut' }} 
        className="w-full max-w-md bg-[#1A1A1A] p-6 rounded-lg shadow-lg">
        
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="w-full mt-2 p-2 bg-black text-white border border-[#8608FF] rounded-lg focus:outline-none focus:border-purple-400"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              className="w-full mt-2 p-2 bg-black text-white border border-[#8608FF] rounded-lg focus:outline-none focus:border-purple-400"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
            <textarea
              id="message"
              placeholder="Your Message"
              className="w-full mt-2 p-2 bg-black text-white border border-[#8608FF] rounded-lg focus:outline-none focus:border-purple-400"
              rows={4}
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: '#8608FF' }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full mt-4 p-2 bg-[#8608FF] text-white font-bold rounded-lg transition-transform duration-200"
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
