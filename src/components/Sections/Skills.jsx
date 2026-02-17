import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS_CATEGORY } from '../../utils/data';
import SpotlightCard from '../ui/SpotlightCard';
import ScrollReveal from '../ui/ScrollReveal';

const Skills = () => {
  return (
    <section id="skills" className="py-12 md:py-24 px-4 md:px-6">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 md:mb-16 text-center lg:text-left"
        >
          <div className="flex items-center gap-4 mb-4 justify-center lg:justify-start">
            <div className="w-12 h-px bg-emerald-accent" />
            <span className="text-sm font-bold uppercase tracking-widest text-emerald-accent px-4 py-1 rounded-full bg-emerald-accent/10 border border-emerald-accent/20">
              Expertise
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-8xl font-display font-black text-text-page leading-[1.1]">
            MY <span className="text-emerald-accent italic">ARSENAL.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 w-full">
          {SKILLS_CATEGORY.map((category, idx) => {
            // Asymmetrical grid logic with robust responsive behavior
            const gridConfig = [
              "md:col-span-12 lg:col-span-8", // First item
              "md:col-span-6 lg:col-span-4",  // Second
              "md:col-span-6 lg:col-span-4",  // Third
              "md:col-span-12 lg:col-span-8", // Fourth
            ][idx % 4];

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`${gridConfig} min-h-[350px] group flex flex-col`}
              >
                <SpotlightCard className="h-full p-10 rounded-[2.5rem] bg-glass-bg border border-glass-border backdrop-blur-md relative overflow-hidden hover:border-emerald-accent/30 transition-all duration-700 flex flex-col justify-between shadow-premium hover:shadow-[0_20px_50px_-12px_rgba(16,185,129,0.12)]">
                  {/* Visual Accent */}
                  <div className="absolute top-0 right-0 p-12 opacity-[0.08] dark:opacity-5 scale-150 group-hover:opacity-15 group-hover:scale-125 transition-all duration-700 pointer-events-none">
                    <category.icon size={180} />
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-8">
                      <div className="p-4 rounded-2xl bg-emerald-accent/10 text-emerald-accent group-hover:bg-emerald-accent group-hover:text-bg-page transition-all duration-500 shadow-inner">
                        <category.icon size={32} />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-slate-muted border border-slate-muted/20 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800/40">
                        0{idx + 1}
                      </span>
                    </div>
                    
                    <h3 className="text-3xl font-display font-bold text-text-page mb-2 group-hover:text-emerald-accent transition-colors">
                      {category.title}
                    </h3>
                    <div className="max-w-lg">
                      <ScrollReveal
                        baseOpacity={0}
                        enableBlur={true}
                        blurStrength={10}
                        textClassName="text-slate-muted text-base leading-relaxed font-normal"
                        rotationEnd="top top"
                      >
                       {category.description}
                      </ScrollReveal>
                    </div>
                  </div>

                  <div className="relative z-10 mt-8">
                    <div className="flex flex-wrap gap-3">
                      {category.skills.map((skill) => (
                        <motion.div
                          key={skill.name}
                          whileHover={{ y: -2, scale: 1.05 }}
                          className="px-4 py-2 rounded-xl bg-bg-page/50 border border-glass-border text-xs font-bold text-slate-muted group-hover:text-emerald-accent group-hover:border-emerald-accent/30 transition-colors shadow-sm"
                        >
                          {skill.name}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
