import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

import { PROFILE_INFO } from '../../utils/data';
import TrueFocus from '../ui/TrueFocus';
import ScrollReveal from '../ui/ScrollReveal';

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

  return (
    <section id="home" className="relative w-full flex flex-col justify-start pt-28 pb-20 md:pt-32 md:pb-32 px-4 md:px-6 overflow-hidden">
      {/* Floating Elements Background - Isolated container */}
      <div 
        className="absolute inset-0 overflow-hidden pointer-events-none" 
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}
      >
        <motion.div style={{ y: y1 }} className="absolute top-20 right-[10%] w-64 h-64 rounded-full bg-emerald-accent/10 blur-3xl opacity-50 dark:opacity-100" />
        <motion.div style={{ y: y2 }} className="absolute bottom-20 left-[5%] w-96 h-96 rounded-full bg-blue-500/10 blur-3xl opacity-50 dark:opacity-100" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10" style={{ position: 'relative', zIndex: 10 }}>
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 md:mb-8"
          >
           <div className="text-base md:text-xl text-emerald-accent font-display font-bold mb-4 block">
              <TrueFocus 
                sentence="Available for Projects"
                manualMode={false}
                blurAmount={5}
                borderColor="#10b981"
                glowColor="rgba(16, 185, 129, 0.6)"
                animationDuration={0.5}
                pauseBetweenAnimations={1}
              />
           </div>
          </motion.div>

          <motion.h1 
            className="text-[clamp(1.8rem,6vw,4.8rem)] font-display font-extrabold tracking-tighter text-text-page mb-6 md:mb-8 leading-[0.9] uppercase"
          >
            CRAFTING <span className="text-emerald-accent">DIGITAL</span> 
            <br />
            <motion.span
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block italic text-emerald-accent"
            >
              EXPERIENCES.
            </motion.span>
          </motion.h1>

          <div className="max-w-xl md:max-w-2xl mb-8 md:mb-12">
            <ScrollReveal
              baseOpacity={0}
              enableBlur={true}
              blurStrength={10}
              textClassName="text-lg md:text-xl text-slate-muted leading-relaxed font-normal"
              rotationEnd="top top"
            >
              {PROFILE_INFO.subTitle}
            </ScrollReveal>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto"
          >
            <a 
              href="#work"
              className="group relative inline-flex justify-center items-center px-8 py-3.5 rounded-lg bg-emerald-accent border-2 border-emerald-accent text-bg-page font-bold text-lg tracking-widest overflow-hidden transition-all duration-500 hover:text-emerald-accent hover:shadow-[0_0_20px_5px_rgba(16,185,129,0.5)] z-10 w-full sm:w-auto"
            >
              <span className="relative z-10">Hire Me</span>
              <div className="absolute top-0 left-0 w-0 h-full bg-bg-page transition-all duration-500 -z-0 group-hover:w-full"></div>
            </a>
            <a 
              href="#contact"
              className="group relative inline-flex justify-center items-center px-8 py-3.5 rounded-lg bg-transparent border-2 border-emerald-accent text-emerald-accent font-bold text-lg tracking-widest overflow-hidden transition-all duration-500 hover:text-bg-page hover:shadow-[0_0_20px_5px_rgba(16,185,129,0.5)] z-10 w-full sm:w-auto"
            >
               <span className="relative z-10">Let's Talk</span>
               <div className="absolute top-0 left-0 w-0 h-full bg-emerald-accent transition-all duration-500 -z-0 group-hover:w-full"></div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

