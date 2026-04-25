import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const images = [
  { id: 1, src: '/images/dal_makhani.jpg', label: 'Dal Makhani', span: 'col-span-2 row-span-2' },
  { id: 2, src: '/images/live_tandoor.jpg', label: 'Live Tandoor', span: 'col-span-1 row-span-1' },
  { id: 3, src: '/images/butter_chicken.jpg', label: 'Butter Chicken', span: 'col-span-1 row-span-1' },
  { id: 4, src: '/images/lassi.jpg', label: 'Punjabi Lassi', span: 'col-span-1 row-span-1' },
  { id: 5, src: '/images/butter_naan.jpg', label: 'Hot Naan', span: 'col-span-2 row-span-1' },
  { id: 6, src: '/images/sarson_da_saag.jpg', label: 'Sarson Saag', span: 'col-span-1 row-span-1' },
];

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <section id="gallery" className="py-24 bg-black relative">
      <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%237B0000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }}></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="sec-title text-red">A TASTE <span>IN PICTURES</span></h2>
          <div className="gold-line mx-auto"></div>
          <p className="text-white/60 max-w-2xl mx-auto mt-6">From sizzling tandoors to steaming bowls of dal — a glimpse into the Patwari Zaika experience.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px]">
          {images.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onClick={() => setSelectedImg(img)}
              className={`relative overflow-hidden group cursor-pointer border-2 border-gold/20 hover:border-gold transition-colors duration-300 bg-gray-900 ${img.span}`}
            >
              <img src={img.src} alt={img.label} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <h3 className="text-white font-head text-2xl font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{img.label}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelectedImg(null)}
          >
            <button className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors" onClick={() => setSelectedImg(null)}>
              <X size={40} />
            </button>
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="max-w-5xl w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={selectedImg.src} alt={selectedImg.label} className="w-full h-auto max-h-[80vh] object-contain border-4 border-gold shadow-2xl" />
              <div className="absolute -bottom-16 left-0 right-0 text-center text-white font-head text-3xl tracking-wide">
                {selectedImg.label}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
