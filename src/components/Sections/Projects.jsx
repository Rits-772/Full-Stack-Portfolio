import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { PROJECTS } from '../../utils/data';
import ScrollReveal from '../ui/ScrollReveal';

const Projects = () => {
  return (
    <section id="work" className="py-16 md:py-24 px-4 md:px-6 relative">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div>
            <h2 className="text-3xl md:text-7xl font-display font-black text-text-page mb-6 leading-[1.1]">
              SELECTED <br /><span className="text-emerald-accent">PRODUCTIONS.</span>
            </h2>
            <div className="max-w-md">
              <ScrollReveal
                baseOpacity={0}
                enableBlur={true}
                blurStrength={10}
                textClassName="text-slate-muted text-lg md:text-xl font-normal"
                rotationEnd="top top"
              >
                A collection of architectural experiments and functional masterpieces.
              </ScrollReveal>
            </div>
          </div>
          <div className="flex items-center gap-4 text-emerald-accent font-display font-bold tracking-widest text-sm italic">
            [ EXPERIMENTAL_WORKS ]
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative rounded-[2rem] overflow-hidden bg-bg-page/40 border border-glass-border hover:border-emerald-accent/30 transition-all duration-500 shadow-premium hover:shadow-[0_20px_50px_-12px_rgba(16,185,129,0.1)]"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] rounded-[2.5rem] overflow-hidden bg-glass-bg border border-glass-border mb-8">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-emerald-accent/90 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center gap-4 backdrop-blur-md">
                  <div className="flex gap-4">
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="p-4 bg-bg-page rounded-full text-text-page shadow-xl flex items-center gap-2"
                      title="Source Code"
                    >
                      <FiGithub size={24} />
                    </motion.a>
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      className="p-4 bg-text-page rounded-full text-bg-page shadow-xl flex items-center gap-2"
                      title="Live Demo"
                    >
                      <FiExternalLink size={24} />
                    </motion.a>
                  </div>
                  
                  {/* README Link */}
                  <motion.a
                    href={`${project.githubUrl}/blob/main/README.md`}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className="mt-2 text-[10px] font-black uppercase tracking-[0.3em] text-bg-page/80 hover:text-bg-page transition-colors border-b border-bg-page/20"
                  >
                    View Project README
                  </motion.a>
                </div>

                {/* Category Badge */}
                <div className="absolute top-6 left-6 px-4 py-1.5 rounded-full bg-slate-900/50 backdrop-blur-md border border-white/10 text-[10px] uppercase tracking-[0.2em] font-bold text-white">
                  {project.category}
                </div>
              </div>

              {/* Text Info */}
              <div>
                <div className="flex flex-wrap gap-3 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] uppercase tracking-widest text-emerald-accent font-bold">
                      #{tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-3xl font-display font-bold text-text-page mb-2 group-hover:text-emerald-accent transition-colors">
                  {project.title}
                </h3>
                <div className="max-w-lg mb-6">
                  <ScrollReveal
                    baseOpacity={0}
                    enableBlur={true}
                    blurStrength={10}
                    textClassName="text-slate-muted text-base leading-relaxed font-normal"
                    rotationEnd="top top"
                  >
                   {project.description}
                  </ScrollReveal>
                </div>
                <div className="w-16 h-1 bg-glass-border group-hover:w-full group-hover:bg-emerald-accent transition-all duration-700 rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
