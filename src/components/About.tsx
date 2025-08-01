'use client';

import { motion } from 'framer-motion';
import { Code, Palette, Zap, Heart } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'Frontend Development', icon: Code, description: 'React, Next.js, TypeScript, Tailwind CSS' },
    { name: 'UI/UX Design', icon: Palette, description: 'Figma, Adobe XD, User-centered Design' },
    { name: 'Performance', icon: Zap, description: 'Web Vitals, Optimization, PWA' },
    { name: 'Passion', icon: Heart, description: 'Clean Code, Best Practices, Innovation' },
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Glassmorphism 헤더 카드 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition-transform duration-300 hover:translate-y-[-2px] hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)] mb-16"
        >
          {/* spotlight highlight */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-gradient-to-b from-white/30 to-transparent blur-2xl opacity-70"
          />
          {/* thin glow line */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 [mask:linear-gradient(to_bottom,black,transparent_60%)]"
            style={{ boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,0.35)' }}
          />

          <div className="relative p-10 md:p-14 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            {/* 지시문에 따라 이 p 태그(27-29)는 시각적으로 포함하지만 문자열은 변경하지 않습니다 */}
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
              I'm AX developer.
            </p>

            <div className="mt-8 flex items-center justify-center gap-3 text-white/60 text-sm">
              <span className="h-px w-8 bg-white/20" />
              <span>Based in Seoul • Open to collaboration</span>
              <span className="h-px w-8 bg-white/20" />
            </div>
          </div>
        </motion.div>

        {/* 본문 2열 카드 섹션 */}
        <div className="grid md:grid-cols-2 gap-12 items-start mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.25)] p-8 transition-transform duration-300 hover:translate-y-[-2px] hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)]"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -top-16 -left-16 h-56 w-56 rounded-full bg-gradient-to-b from-white/25 to-transparent blur-2xl opacity-70"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 [mask:linear-gradient(to_bottom,black,transparent_60%)]"
              style={{ boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,0.28)' }}
            />

            <h3 className="relative text-2xl font-bold text-white mb-6">My Journey</h3>
            <p className="relative text-white/85 leading-relaxed mb-6">
              Started as a curious student who fell in love with code. Over the years,
              I've grown into a full-stack developer who believes in the power of
              technology to solve real-world problems.
            </p>
            <p className="relative text-white/85 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open source, or sharing knowledge with the developer community.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.25)] p-8 transition-transform duration-300 hover:translate-y-[-2px] hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)]"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-gradient-to-t from-white/25 to-transparent blur-2xl opacity-70"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 [mask:linear-gradient(to_bottom,black,transparent_60%)]"
              style={{ boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,0.28)' }}
            />

            <h3 className="relative text-2xl font-bold text-white mb-6">What Drives Me</h3>
            <ul className="relative space-y-4">
              {['Creating intuitive user experiences', 'Writing clean, maintainable code', 'Continuous learning and growth', 'Building meaningful connections'].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center text-white/85"
                >
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-4"></div>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* 스킬 카드 그리드 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            What I Bring to the Table
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl p-6 text-center group shadow-[0_8px_24px_rgba(0,0,0,0.22)] transition-[transform,box-shadow] duration-300 hover:translate-y-[-2px] hover:shadow-[0_16px_36px_rgba(0,0,0,0.32)]"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -top-14 -left-14 h-40 w-40 rounded-full bg-gradient-to-b from-white/25 to-transparent blur-xl opacity-70"
                />
                <div className="relative mb-4 inline-block p-3 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors duration-300">
                  <skill.icon className="w-8 h-8 text-blue-400" />
                </div>
                <h4 className="relative text-xl font-semibold text-white mb-2">{skill.name}</h4>
                <p className="relative text-white/75 text-sm">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;