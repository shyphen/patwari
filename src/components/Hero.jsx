import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-black">
      {/* Simple Elegant Background */}
      <div className="absolute inset-0 z-0 bg-[#0a0a0a]">
        <div className="absolute inset-0 bg-gradient-to-b from-red/20 to-black opacity-60"></div>
        {/* Subtle noise texture */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")" }}></div>
      </div>

      {/* Pattern Overlay */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%237B0000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-8"
          >
            <div className="inline-flex items-center gap-2 bg-red/10 border border-red/30 text-white text-xs font-medium tracking-[0.3em] px-4 py-2 uppercase mb-6 backdrop-blur-sm">
              <span className="text-sm">📍</span> Cantt. Road, Jalandhar — Serving Since 1998
            </div>
            <h1 className="font-head text-6xl sm:text-7xl md:text-8xl lg:text-[100px] font-black text-white leading-[0.9] tracking-tighter mb-6">
              ASLI<br/>
              <span className="text-red relative inline-block">
                PUNJABI
                <motion.span 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, delay: 1 }}
                  className="absolute bottom-2 left-0 h-[6px] bg-red/40"
                ></motion.span>
              </span><br/>
              ZAIKA.
            </h1>
            <p className="text-white/70 text-lg md:text-xl max-w-xl mb-10 font-body leading-relaxed italic">
              Authentic flavors, slow-cooked traditions, and Jalandhar's favorite tandoor. Experience the heritage of Patwari Zaika.
            </p>
            <div className="flex flex-wrap gap-4">
              <button onClick={() => document.getElementById('menu').scrollIntoView({behavior: 'smooth'})} className="bg-red hover:bg-dred text-white font-head font-bold px-10 py-5 uppercase tracking-wider transition-all transform hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(123,0,0,0.4)] shadow-2xl">
                Explore Menu
              </button>
              <button onClick={() => window.open('https://wa.me/919876012345', '_blank')} className="bg-white/5 border border-white/20 text-white hover:bg-white hover:text-black font-head font-bold px-10 py-5 uppercase tracking-wider transition-all transform hover:-translate-y-1 flex items-center gap-2">
                <span className="text-xl">💬</span> WhatsApp Order
              </button>
            </div>
            
            <div className="mt-12 flex items-center gap-4 text-white/40 text-[10px] font-bold tracking-[0.2em] uppercase">
              <span>Cantt. Road, Kot Kalan</span>
              <span className="w-1 h-1 bg-red rounded-full"></span>
              <span>Open Daily 7 AM – 11 PM</span>
            </div>
          </motion.div>ion.div>

          {/* Badges */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="lg:col-span-4 flex flex-row lg:flex-col gap-4 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0"
          >
            {[
              { num: '25+', lbl: 'Years Serving' },
              { num: '6000+', lbl: 'Google Reviews' },
              { num: '4.2★', lbl: 'Average Rating' }
            ].map((badge, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-black/40 backdrop-blur-md border border-gold/30 p-6 text-center min-w-[140px] flex-shrink-0 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gold/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
                <div className="font-head text-4xl md:text-5xl font-black text-gold leading-none">{badge.num}</div>
                <div className="text-white/60 text-xs uppercase tracking-widest mt-2">{badge.lbl}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
