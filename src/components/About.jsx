import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 bg-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Why Choose Us Section */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="sec-title">WHY JALANDHAR <span>LOVES US</span></h2>
            <div className="gold-line mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '🍲', title: "Grandma's Recipes", text: "Every dish made from original family recipes — never from packets or shortcuts." },
              { icon: '🔥', title: "Live Tandoor", text: "Our clay tandoor burns all day. Naan and roti served fresh — no reheating, ever." },
              { icon: '🧅', title: "Farm-Fresh Daily", text: "Vegetables sourced fresh from local Jalandhar mandis every morning before sunrise." },
              { icon: '🪑', title: "Dine or Takeaway", text: "Comfortable seating for 120 guests, plus quick takeaway and home delivery in Jalandhar." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-white p-8 border border-gray-100 border-t-4 border-t-gold text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-5xl mb-6">{item.icon}</div>
                <h3 className="font-head text-xl font-bold text-text mb-3">{item.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-red border-4 border-gold relative overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800" 
                alt="Chef Cooking" 
                className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="font-head text-[80px] font-black text-white/10 leading-none absolute -bottom-4 -left-4">PATWARI</div>
                <div className="text-6xl relative z-10 drop-shadow-2xl">🍛</div>
              </div>
            </div>
            {/* Floating badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-8 -top-8 bg-gold text-text p-6 border-4 border-cream shadow-xl hidden md:block"
            >
              <div className="font-head text-4xl font-black leading-none">1998</div>
              <div className="text-xs font-bold uppercase tracking-widest mt-1">Established</div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="sec-title">25 YEARS OF <span>PUNJABI PRIDE</span></h2>
            <div className="gold-line"></div>
            <div className="space-y-6 text-muted font-body text-[15px] leading-relaxed mb-8">
              <p>Patwari Zaika was founded in 1998 in the heart of Jalandhar. What started as a small roadside stall with three tables has grown into Jalandhar's most loved traditional eatery — without ever changing the recipes.</p>
              <p>Today, the family still runs the kitchen, but the masalas are still ground fresh each morning, the dahi is still set in earthen pots, and every guest still leaves feeling like family.</p>
            </div>
            
            <div className="grid grid-cols-3 gap-6 mb-10">
              <div>
                <div className="font-head text-3xl font-black text-red mb-1">1998</div>
                <div className="text-xs font-bold text-text uppercase tracking-wider">Founded</div>
              </div>
              <div>
                <div className="font-head text-3xl font-black text-red mb-1">60+</div>
                <div className="text-xs font-bold text-text uppercase tracking-wider">Dishes</div>
              </div>
              <div>
                <div className="font-head text-3xl font-black text-red mb-1">3rd</div>
                <div className="text-xs font-bold text-text uppercase tracking-wider">Generation</div>
              </div>
            </div>

            <button onClick={() => document.getElementById('menu').scrollIntoView({behavior: 'smooth'})} className="bg-red hover:bg-dred text-white font-head font-bold px-8 py-4 uppercase tracking-wider transition-colors shadow-lg">
              See Our Menu
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
