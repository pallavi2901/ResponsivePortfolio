import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './HexNav.css';

const Hero = () => {
  const [paused, setPaused] = useState(false);

  return (
    <section className="flex items-center justify-center h-screen text-white relative overflow-hidden">
      <motion.div
        className="text-center max-w-3xl p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl lg:text-6xl font-extrabold mb-4">
          Hi, I'm <span className="text-indigo-300">Pallavi</span>
        </h1>
        <p className="text-xl lg:text-2xl mb-6 leading-relaxed">
          A passionate Full-Stack Developer, AI & Design Enthusiast,<br />
          Crafting future-ready apps with creativity & purpose.
        </p>
        <a
          href="#Projects"
          className="inline-block px-8 py-3 bg-white text-indigo-700 font-semibold rounded-full shadow-lg hover:bg-gray-100 transition"
        >
          View Projects
        </a>
      </motion.div>

      <div
        className={`hexagon-2d-container absolute bottom-10 right-10 ${paused ? 'paused' : ''}`}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Optional 3D / Animated logo here */}
      </div>
    </section>
  );
};

export default Hero;
