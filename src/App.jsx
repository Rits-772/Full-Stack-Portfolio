import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';
import { Home, User, Briefcase, Mail, Cpu } from 'lucide-react';

import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Sections/Hero';
import Skills from './components/Sections/Skills';
import Projects from './components/Sections/Projects';
import { About, Contact } from './components/Sections/Footer_Sections';
import Preloader from './components/ui/Preloader';


const App = () => {
  const [isLoading, setIsLoading] = useState(true);

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
      if (!isLoading) {
        lenis.raf(time);
      }
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, [isLoading]);

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
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Preloader key="preloader" onLoadingComplete={() => setIsLoading(false)} />
        ) : (
          <motion.div 
            key="main-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative min-h-screen text-text-page selection:bg-emerald-accent selection:text-black"
          >
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default App;
