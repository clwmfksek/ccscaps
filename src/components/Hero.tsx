'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';
import React from 'react';

function scrollToHash(hash: string) {
  const targetId = hash.startsWith('#') ? hash.slice(1) : hash;
  const el = document.getElementById(targetId);
  if (el) {
    const hadTabIndex = el.hasAttribute('tabindex');
    if (!hadTabIndex) el.setAttribute('tabindex', '-1');
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    (el as HTMLElement).focus({ preventScroll: true });
    if (!hadTabIndex) {
      setTimeout(() => el.removeAttribute('tabindex'), 800);
    }
  } else if (hash) {
    window.location.hash = hash.startsWith('#') ? hash : `#${hash}`;
  }
}

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="inline-block mb-6"
          >
            <Sparkles className="w-16 h-16 text-blue-400" />
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-white">Hello, I'm </span>
            <span className="text-gradient">Fizz</span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            사용자 경험에 집중하는 주니어 AX 개발자입니다. 심플하고 일관된 인터페이스를 지향하며, 기능과 사용성을 우선으로 작은 개선을 꾸준히 만들어 갑니다.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="glass-card px-8 py-4 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 animate-glow focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            onClick={() => scrollToHash('projects')}
            tabIndex={0}
          >
            View My Work
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="glass-card px-8 py-4 text-white font-semibold rounded-full border-2 border-white/30 hover:border-white/50 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            onClick={() => scrollToHash('contact')}
            tabIndex={0}
          >
            Get In Touch
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="animate-bounce"
        >
          <ArrowDown className="w-8 h-8 text-white/60 mx-auto" />
        </motion.div>

        <div className="absolute top-20 left-10 animate-float">
          <div className="w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl"></div>
        </div>

        <div className="absolute bottom-20 right-10 animate-float" style={{ animationDelay: '2s' }}>
          <div className="w-24 h-24 bg-gradient-to-r from-pink-400/20 to-yellow-400/20 rounded-full blur-xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;