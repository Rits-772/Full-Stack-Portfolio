import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { PROFILE_INFO, JOURNEY_STEPS, SOCIAL_LINKS, CONTACT_INFO } from '../../utils/data';
import Typewriter from '../Typewriter';
import SpotlightCard from '../ui/SpotlightCard';
import ScrollReveal from '../ui/ScrollReveal';

const About = () => {
  return (
    <section id="about" className="py-12 md:py-24 px-4 md:px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Left: Bio & Image */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:sticky md:top-32"
            >
              <div className="relative mb-8 md:mb-12 group">
                <div className="aspect-[4/5] rounded-3xl md:rounded-[2.5rem] overflow-hidden bg-glass-bg border border-glass-border">
                  <img 
                    src={PROFILE_INFO.image} 
                    alt={PROFILE_INFO.name}
                    className="w-full h-full object-cover mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-700 grayscale group-hover:grayscale-0"
                  />
                </div>
                {/* Decorative Frame */}
                <div className="absolute -inset-4 border border-emerald-accent/20 rounded-[3rem] -z-10 group-hover:inset-0 transition-all duration-700 hidden md:block" />
              </div>

              <h2 className="text-3xl md:text-5xl font-display font-bold text-text-page mb-6 md:mb-8 italic uppercase tracking-tighter leading-none">
                The Mind Behind <br /><span className="text-emerald-accent not-italic">THE CODE.</span>
              </h2>
              
              <div className="mb-6">
                 <h3 className="text-2xl md:text-3xl font-display font-bold text-text-page mb-1">{PROFILE_INFO.name}</h3>
                 <div className="text-lg md:text-xl text-emerald-accent font-semibold flex items-center gap-2">
                    <span className="text-slate-muted">I am a</span>
                    <Typewriter 
                        words={["Backend Dev", "Web Designer", "Web Developer"]} 
                        typingSpeed={100}
                        deletingSpeed={50}
                        delay={2000}
                    />
                 </div>
              </div>

              <div className="max-w-lg mb-8 md:mb-10">
                <ScrollReveal
                  baseOpacity={0}
                  enableBlur={true}
                  blurStrength={10}
                  textClassName="text-slate-muted text-base md:text-xl leading-relaxed"
                  rotationEnd="top top"
                >
                  {PROFILE_INFO.description}
                </ScrollReveal>
              </div>

              {/* Quick links related to Git/Social */}
              <div className="flex gap-4 md:gap-6">
                {SOCIAL_LINKS.filter(link => ['GitHub', 'Instagram', 'LinkedIn'].includes(link.name)).map(link => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    whileHover={{ y: -5 }}
                    className="flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-widest text-text-page/60 hover:text-emerald-accent transition-colors"
                  >
                    <div className="p-2.5 rounded-xl bg-glass-bg border border-glass-border">
                      <link.icon size={16} />
                    </div>
                    <span className="hidden sm:block">{link.name}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Chronicle Timeline */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8 md:mb-16"
            >
              <ScrollReveal 
                textClassName="text-3xl md:text-7xl font-display font-black text-text-page mb-4 md:mb-6 opacity-[0.15] dark:opacity-10"
                enableBlur={true}
                blurStrength={10}
              >
                THE CHRONICLE
              </ScrollReveal>
              <div className="w-16 md:w-24 h-1 bg-emerald-accent mb-8 md:mb-12" />
            </motion.div>

            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-accent/50 via-slate-muted/20 dark:via-slate-muted/10 to-transparent" />

              <div className="space-y-12 md:space-y-16">
                {JOURNEY_STEPS.map((step, idx) => (
                  <motion.div
                    key={step.year}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="relative pl-16 md:pl-24 group"
                  >
                    {/* Timeline Node */}
                    <div className="absolute left-0 top-0 p-2.5 md:p-3 rounded-full bg-white dark:bg-bg-page border border-emerald-accent/30 text-emerald-accent z-10 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(16,185,129,0.1)]">
                      <step.icon size={18} />
                    </div>

                    <SpotlightCard className="rounded-2xl md:rounded-[2rem] bg-glass-bg border border-glass-border p-6 md:p-10 hover:border-emerald-accent/30 transition-all duration-500 shadow-premium">
                      <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 md:gap-4 mb-2 relative z-10">
                        <span className="text-3xl md:text-5xl font-display font-black text-slate-muted/25 dark:text-slate-muted/20 group-hover:text-emerald-accent/30 transition-colors">
                          {step.year}
                        </span>
                        <h3 className="text-xl md:text-2xl font-display font-bold text-text-page">
                          {step.title}
                        </h3>
                      </div>
                      
                      <div className="text-[10px] md:text-xs font-bold text-emerald-accent uppercase tracking-widest mb-4 pl-1 relative z-10">
                        @{step.company}
                      </div>
                      
                      <div className="pl-4 border-l-2 border-slate-muted/20 dark:border-slate-muted/10 hover:border-emerald-accent/50 transition-colors relative z-10 max-w-lg">
                        <ScrollReveal
                          baseOpacity={0}
                          enableBlur={true}
                          blurStrength={10}
                          textClassName="text-slate-muted text-sm md:text-base leading-relaxed font-normal"
                          rotationEnd="top top"
                        >
                          {step.description}
                        </ScrollReveal>
                      </div>
                    </SpotlightCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [status, setStatus] = React.useState('idle'); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = React.useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    const formData = new FormData(e.target);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      let result = {};
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        result = await response.json();
      }

      if (response.ok) {
        setStatus('success');
        e.target.reset();
      } else {
        setStatus('error');
        setErrorMessage(result.error || `Error ${response.status}: ${response.statusText}`);
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again later.');
    }
  };

  return (
    <section id="contact" className="py-12 md:py-24 px-4 md:px-6 bg-glass-bg/30">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-8xl font-display font-bold text-text-page mb-8 leading-none">
              LET'S <br /><span className="text-emerald-accent">CONNECT.</span>
            </h2>
            
            <div className="space-y-4 md:space-y-6">
              {CONTACT_INFO.map(info => (
                <SpotlightCard key={info.label} className="group flex items-center gap-6 p-5 rounded-3xl bg-glass-bg border border-glass-border hover:border-emerald-accent/30 transition-all duration-500 shadow-premium">
                  <div className="p-3.5 rounded-2xl bg-emerald-accent/10 dark:bg-emerald-accent/10 text-emerald-accent group-hover:bg-emerald-accent group-hover:text-white dark:group-hover:text-bg-page transition-all relative z-10">
                    <info.icon size={20} />
                  </div>
                  <div className="relative z-10">
                    <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-muted mb-0.5 block">
                      {info.label}
                    </label>
                    <p className="text-text-page font-display font-bold text-lg">
                      {info.value}
                    </p>
                  </div>
                </SpotlightCard>
              ))}
            </div>

            {/* Quick social links grid */}
            <div className="flex flex-wrap gap-4 mt-12">
              {SOCIAL_LINKS.map(link => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  whileHover={{ y: -5, scale: 1.1 }}
                  className={`p-4 rounded-2xl bg-glass-bg border border-glass-border text-slate-muted transition-all shadow-premium ${link.color} ${link.bgColor}`}
                  title={link.name}
                >
                  <link.icon size={22} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <div className="p-8 md:p-12 rounded-[3rem] bg-glass-bg border border-glass-border backdrop-blur-xl relative overflow-hidden group shadow-premium">
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <input name="name" type="text" placeholder="Your Name" required className="w-full bg-bg-page/40 border border-glass-border rounded-2xl px-6 py-4 text-text-page focus:outline-none focus:border-emerald-accent transition-colors disabled:opacity-50" disabled={status === 'loading'} />
                  </div>
                  <div className="space-y-2">
                    <input name="email" type="email" placeholder="Your Email" required className="w-full bg-bg-page/40 border border-glass-border rounded-2xl px-6 py-4 text-text-page focus:outline-none focus:border-emerald-accent transition-colors disabled:opacity-50" disabled={status === 'loading'} />
                  </div>
                </div>
                <input name="subject" type="text" placeholder="Subject" required className="w-full bg-bg-page/40 border border-glass-border rounded-2xl px-6 py-4 text-text-page focus:outline-none focus:border-emerald-accent transition-colors disabled:opacity-50" disabled={status === 'loading'} />
                <textarea name="message" rows="4" placeholder="Message" required className="w-full bg-bg-page/40 border border-glass-border rounded-3xl px-6 py-4 text-text-page focus:outline-none focus:border-emerald-accent transition-colors resize-none disabled:opacity-50" disabled={status === 'loading'}></textarea>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={status === 'loading'}
                  className={`w-full py-5 rounded-full font-bold text-lg flex items-center justify-center gap-2 group transition-all shadow-[0_0_30px_rgba(16,185,129,0.1)] hover:shadow-[0_0_40px_rgba(16,185,129,0.3)] ${
                    status === 'loading' ? 'bg-emerald-accent/50 cursor-not-allowed' : 'bg-emerald-accent text-bg-page'
                  }`}
                >
                  {status === 'loading' ? 'Sending...' : 'Get in Touch'} <ArrowUpRight size={20} />
                </motion.button>

                <AnimatePresence>
                  {status === 'success' && (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-emerald-accent font-bold text-center mt-4 p-4 rounded-2xl bg-emerald-accent/5 border border-emerald-accent/20"
                    >
                      ✓ Message sent successfully!
                    </motion.p>
                  )}
                  {status === 'error' && (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 font-bold text-center mt-4 p-4 rounded-2xl bg-red-500/5 border border-red-500/20"
                    >
                      ⚠ {errorMessage}
                    </motion.p>
                  )}
                </AnimatePresence>
              </form>
              <div className="absolute -bottom-10 -right-10 text-[10rem] font-display font-black text-text-page/[0.08] dark:text-text-page/5 pointer-events-none select-none italic group-hover:rotate-0 rotate-6 transition-transform duration-1000">
                HIRE
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export { About, Contact };
