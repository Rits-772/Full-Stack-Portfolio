import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Artificial progress to simulate asset loading
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsDone(true);
            setTimeout(onLoadingComplete, 800);
          }, 500);
          return 100;
        }
        // Varied increments for a more organic feel
        const increment = Math.floor(Math.random() * 15) + 5;
        return Math.min(prev + increment, 100);
      });
    }, 150);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        y: '-100%',
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
      }}
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#020617] text-white overflow-hidden"
    >
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-accent/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 w-full max-w-md px-10">
        <div className="flex flex-col gap-6">
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3"
          >
            <div className="w-8 h-[2px] bg-emerald-accent" />
            <span className="text-[10px] uppercase tracking-[0.4em] font-black text-emerald-accent">
              System Initialization
            </span>
          </motion.div>

          {/* Percentage */}
          <div className="flex items-baseline gap-1">
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-8xl md:text-9xl font-display font-black tracking-tighter"
            >
              {progress}
            </motion.h1>
            <span className="text-2xl font-display font-bold text-emerald-accent">%</span>
          </div>

          {/* Progress Bar Container */}
          <div className="h-[2px] w-full bg-white/5 relative overflow-hidden">
            <motion.div
              className="absolute left-0 top-0 h-full bg-emerald-accent"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "easeOut", duration: 0.5 }}
            />
          </div>

          {/* Status Text */}
          <div className="flex justify-between items-center text-[10px] uppercase tracking-widest font-bold text-slate-500">
            <motion.span
               animate={{ opacity: [0.4, 1, 0.4] }}
               transition={{ duration: 1.5, repeat: Infinity }}
            >
              {progress < 100 ? "Syncing Modules..." : "Ready to Launch"}
            </motion.span>
            <span>v0.1.0-ALPHA</span>
          </div>
        </div>
      </div>

      {/* Modern Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
    </motion.div>
  );
};

export default Preloader;
