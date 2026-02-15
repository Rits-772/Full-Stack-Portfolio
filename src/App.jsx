import React, { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Lenis from 'lenis';
import { Home, User, Briefcase, Mail, Cpu } from 'lucide-react';

import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Sections/Hero';
import Skills from './components/Sections/Skills';
import Projects from './components/Sections/Projects';
import { About, Contact } from './components/Sections/Footer_Sections';
import Aurora from './components/ui/Aurora';
import Dock from './components/ui/Dock';

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const dockItems = [
    { icon: <Home size={24} />, label: 'Home', onClick: () => document.getElementById('home').scrollIntoView({ behavior: 'smooth' }) },
    { icon: <Cpu size={24} />, label: 'Skills', onClick: () => document.getElementById('skills').scrollIntoView({ behavior: 'smooth' }) },
    { icon: <Briefcase size={24} />, label: 'Work', onClick: () => document.getElementById('work').scrollIntoView({ behavior: 'smooth' }) },
    { icon: <User size={24} />, label: 'About', onClick: () => document.getElementById('about').scrollIntoView({ behavior: 'smooth' }) },
    { icon: <Mail size={24} />, label: 'Contact'
    , onClick: () => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }) },
  ];

  return (
    <ThemeProvider>
      <div className="relative min-h-screen text-text-page selection:bg-emerald-accent selection:text-black">
        {/* Aurora Background - Layered ABOVE body but BELOW content */}
        <div className="fixed inset-0 z-0 pointer-events-none opacity-50 dark:opacity-100">
          <Aurora 
            colorStops={['#10b981', '#3b82f6', '#10b981']} 
            amplitude={1.2} 
            speed={0.8}
          />
        </div>
        
        {/* Foreground Content */}
        <div className="relative z-10 w-full bg-transparent">
          {/* Global Progress Bar */}
          <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-emerald-accent z-[110] origin-left"
            style={{ scaleX }}
          />

          <Navbar />
          
          <main>
            <Hero />
            <Skills />
            <Projects />
            <About />
            <Contact />
          </main>

          <footer className="py-6 border-t border-white/5 text-center px-6 mb-20 md:mb-0">
            <p className="text-slate-500 text-sm font-medium tracking-widest uppercase">
              &copy; {new Date().getFullYear()} Rits. Crafted with distinctive intent. 
            </p>
          </footer>

          {/* Mobile Dock - ONLY VISIBLE ON SMALL SCREENS */}
          <div className="block md:hidden">
            <Dock items={dockItems} />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;