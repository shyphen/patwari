import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Navigation } from 'lucide-react';

const hours = [
  { day: 'Monday – Friday', time: '7:00 AM – 11:00 PM', highlight: false },
  { day: 'Saturday', time: '7:00 AM – 11:30 PM', highlight: false },
  { day: 'Sunday', time: '8:00 AM – 10:30 PM', highlight: true },
];

const Location = () => {
  return (
    <section id="location" className="py-24 bg-black relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FF3131' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-4">Find Us</p>
          <h2 className="font-head text-5xl md:text-6xl font-black text-white tracking-tighter">
            VISIT US IN <span className="text-gold">LUDHIANA</span>
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mt-6"></div>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-0 shadow-2xl overflow-hidden border border-gold/20">

          {/* Left: Info Panel */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-[#0f0f0f] p-10 md:p-14 flex flex-col gap-10"
          >
            {/* Address */}
            <div className="flex gap-5 items-start group">
              <div className="w-12 h-12 bg-red/10 border border-red/30 flex items-center justify-center flex-shrink-0 group-hover:bg-red/20 transition-colors">
                <MapPin size={20} className="text-gold" />
              </div>
              <div>
                <div className="text-[11px] text-gold uppercase tracking-[0.2em] font-bold mb-1">Address</div>
                <div className="text-white font-head text-lg font-semibold leading-tight">
                  Patwari Zaika, Cantt. Road
                </div>
                <div className="text-white/50 text-sm mt-1">
                  Kot Kalan, Near Ansal Plaza, Jalandhar, Punjab — 144023
                </div>
                <a
                  href="https://www.google.com/maps?q=Patwari+Zaika+Jalandhar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-gold text-xs font-bold uppercase tracking-wider mt-3 hover:text-white transition-colors"
                >
                  <Navigation size={12} />
                  Get Directions
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-5 items-start group">
              <div className="w-12 h-12 bg-red/10 border border-red/30 flex items-center justify-center flex-shrink-0 group-hover:bg-red/20 transition-colors">
                <Phone size={20} className="text-gold" />
              </div>
              <div>
                <div className="text-[11px] text-gold uppercase tracking-[0.2em] font-bold mb-1">Reservations</div>
                <a href="tel:+919876012345" className="text-white font-head text-lg font-semibold hover:text-gold transition-colors">
                  +91 98760 12345
                </a>
                <div className="text-white/50 text-sm mt-1">Call or WhatsApp for bulk orders</div>
              </div>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-gold/10"></div>

            {/* Hours */}
            <div className="flex gap-5 items-start">
              <div className="w-12 h-12 bg-red/10 border border-red/30 flex items-center justify-center flex-shrink-0">
                <Clock size={20} className="text-gold" />
              </div>
              <div className="flex-1">
                <div className="text-[11px] text-gold uppercase tracking-[0.2em] font-bold mb-4">Opening Hours</div>
                <div className="space-y-3">
                  {hours.map((h) => (
                    <div key={h.day} className="flex justify-between items-center text-sm border-b border-white/5 pb-3 last:border-0 last:pb-0">
                      <span className="text-white/60">{h.day}</span>
                      <span className={`font-semibold ${h.highlight ? 'text-gold' : 'text-white'}`}>{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="mt-2 inline-block w-full text-center bg-red hover:bg-[#6a0000] text-white font-head font-bold px-8 py-4 uppercase tracking-wider transition-colors text-sm"
            >
              Book a Table
            </a>
          </motion.div>

          {/* Right: Google Map */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="min-h-[400px] lg:min-h-0 relative"
          >
            <iframe
              title="Patwari Zaika Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3409.5218764022!2d75.61715057618218!3d31.28919687432139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391af505f0000001%3A0x6d9f8c6b7e6f8a4a!2sPatwari%20Zaika!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            {/* Gold overlay frame */}
            <div className="absolute inset-0 pointer-events-none border-2 border-gold/30"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Location;
