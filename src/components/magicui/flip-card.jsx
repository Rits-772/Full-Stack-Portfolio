import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { HoverCard, HoverCardTrigger, HoverCardContent } from './hover-card';
import { SOCIAL_LINKS } from '@/utils/data';

export function FlipCard({ profileImage, name, bio, className }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className={cn("relative w-full aspect-[4/5] group cursor-pointer [perspective:1000px]", className)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="w-full h-full relative [transform-style:preserve-3d] transition-all duration-700"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
      >
        {/* Front */}
        <div className="absolute inset-0 [backface-visibility:hidden] w-full h-full rounded-3xl md:rounded-[2.5rem] overflow-hidden bg-glass-bg border border-glass-border shadow-premium">
          <img 
            src={profileImage} 
            alt={name}
            className="w-full h-full object-cover mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-700 grayscale group-hover:grayscale-0"
          />
        </div>

        {/* Back */}
        <div className="absolute inset-0 [backface-visibility:hidden] w-full h-full [transform:rotateY(180deg)] rounded-3xl md:rounded-[2.5rem] bg-glass-bg border border-emerald-accent/50 p-6 md:p-8 flex flex-col items-center justify-center text-center shadow-[0_0_30px_rgba(16,185,129,0.2)]">
            <h3 className="text-2xl font-display font-bold text-emerald-accent mb-4">{name}</h3>
            <p className="text-slate-muted text-sm md:text-base leading-relaxed mb-8">
              {bio}
            </p>
            
            <div className="flex gap-4 items-center justify-center" onClick={(e) => e.stopPropagation()}>
              {SOCIAL_LINKS.filter(link => ['GitHub', 'Instagram', 'LinkedIn'].includes(link.name)).map(link => (
                <HoverCard key={link.name}>
                  <HoverCardTrigger asChild>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-bg-page/50 border border-glass-border hover:border-emerald-accent/50 hover:text-emerald-accent transition-colors shadow-sm"
                    >
                      <link.icon size={20} />
                    </a>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-auto p-3 bg-glass-bg border-emerald-accent/30 text-xs font-bold uppercase tracking-widest text-emerald-accent shadow-premium backdrop-blur-xl">
                    Follow on {link.name}
                  </HoverCardContent>
                </HoverCard>
              ))}
            </div>
        </div>
      </motion.div>
    </div>
  );
}
