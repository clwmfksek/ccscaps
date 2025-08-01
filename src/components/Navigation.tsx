'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Home, User, Briefcase, Mail, Github, Linkedin, Instagram } from 'lucide-react';

type NavItem = { id: string; name: string; icon: React.ComponentType<{ size?: number }> };

// Contact 항목을 제거하고, Instagram 외부 링크 버튼을 우측 소셜 아이콘 옆에 배치
const navItems: NavItem[] = [
  { id: 'home', name: 'Home', icon: Home },
  { id: 'about', name: 'About', icon: User },
  { id: 'projects', name: 'Projects', icon: Briefcase },
  // { id: 'contact', name: 'Contact', icon: Mail }, // 요청에 따라 제거
];

const socialLinks = [
  { name: 'GitHub', icon: Github, href: 'https://github.com/clwmfksek' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/fizzzzz/' },
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/dawn__shiny' },
];

function useActiveSection(sectionIds: string[]) {
  const [active, setActive] = useState<string>(sectionIds[0] ?? '');
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);

    if (observerRef.current) {
      observerRef.current.disconnect();
      observerRef.current = null;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0));
        if (visible[0]?.target?.id) {
          setActive(visible[0].target.id);
        }
      },
      {
        root: null,
        rootMargin: '0px 0px -40% 0px',
        threshold: [0.15, 0.3, 0.5, 0.7],
      }
    );

    sections.forEach((sec) => obs.observe(sec));
    observerRef.current = obs;

    return () => obs.disconnect();
  }, [sectionIds]);

  return active;
}

export default function Navigation() {
  const sectionIds = useMemo(() => navItems.map((i) => i.id), []);
  const active = useActiveSection(sectionIds);

  const onClick = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.replaceState(null, '', `#${id}`);
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 180, damping: 20 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="glass px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-white/15 bg-white/5 backdrop-blur-xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.25),0_8px_30px_rgba(0,0,0,0.15)]">
        <div className="flex items-center gap-6">
          <ul className="flex items-center gap-2 sm:gap-4">
            {navItems.map((item) => {
              const isActive = active === item.id;
              const Icon = item.icon;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={onClick(item.id)}
                    aria-current={isActive ? 'page' : undefined}
                    className={[
                      'group relative inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full',
                      'text-sm sm:text-base font-medium transition-colors',
                      'text-white/80 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60',
                      isActive ? 'text-white' : '',
                    ].join(' ')}
                  >
                    <Icon size={18} />
                    <span className={['hidden sm:inline relative z-[1]', isActive ? 'bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-fuchsia-300' : ''].join(' ')}>
                      {item.name}
                    </span>
                    <span
                      aria-hidden
                      className={[
                        'absolute left-3 right-3 -bottom-0.5 h-px origin-left transition-transform duration-300',
                        isActive
                          ? 'scale-x-100 bg-gradient-to-r from-cyan-400 to-fuchsia-400'
                          : 'scale-x-0 bg-white/40 group-hover:scale-x-100',
                      ].join(' ')}
                    />
                    <span
                      aria-hidden
                      className={[
                        'absolute inset-0 rounded-full transition-opacity duration-300',
                        isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100',
                        'bg-white/5',
                      ].join(' ')}
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="hidden md:flex items-center gap-3 pl-4 border-l border-white/20">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                whileHover={{ scale: 1.15, rotate: 5 }}
                whileTap={{ scale: 0.92 }}
                className="relative p-2 rounded-full text-white/70 hover:text-white transition-colors"
              >
                <link.icon size={20} />
              </motion.a>
            ))}

            {/* Instagram 바로가기 버튼 제거: socialLinks로 통합 */}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}