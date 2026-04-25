import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', guests: '', occasion: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', phone: '', guests: '', occasion: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="absolute inset-0 z-0 bg-red/5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="sec-title">PUNJAB'S PRIDE, <span>YOUR PLATE</span></h2>
            <div className="gold-line"></div>
            
            <div className="space-y-8 mt-12">
              <div className="flex gap-6">
                <div className="text-3xl text-gold mt-1">📍</div>
                <div>
                  <div className="text-xs text-gold uppercase tracking-widest font-bold mb-1">Address</div>
                  <div className="text-lg text-text font-medium">Patwari Zaika, Cantt. Road</div>
                  <div className="text-muted text-sm mt-1">Kot Kalan, near Ansal Plaza, Jalandhar, Punjab — 144023</div>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="text-3xl text-gold mt-1">📞</div>
                <div>
                  <div className="text-xs text-gold uppercase tracking-widest font-bold mb-1">Phone</div>
                  <div className="text-lg text-text font-medium">+91 98760 12345</div>
                  <div className="text-muted text-sm mt-1">For reservations and bulk orders</div>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="text-3xl text-gold mt-1">✉️</div>
                <div>
                  <div className="text-xs text-gold uppercase tracking-widest font-bold mb-1">Email</div>
                  <div className="text-lg text-text font-medium">hello@patwarizaika.com</div>
                </div>
              </div>
            </div>

            <div className="bg-cream border border-gold/20 p-8 mt-12 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold to-red"></div>
              <h3 className="font-head text-2xl font-bold text-text mb-6">Opening Hours</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center text-sm border-b border-gold/10 pb-3">
                  <span className="text-muted">Monday – Friday</span>
                  <span className="font-medium text-text">7:00 AM – 11:00 PM</span>
                </div>
                <div className="flex justify-between items-center text-sm border-b border-gold/10 pb-3">
                  <span className="text-muted">Saturday</span>
                  <span className="font-medium text-text">7:00 AM – 11:30 PM</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted">Sunday</span>
                  <span className="font-bold text-red">8:00 AM – 10:30 PM</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white border border-gray-100 shadow-2xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-red"></div>
              <h3 className="font-head text-3xl font-bold text-text mb-8">Book a Table</h3>
              
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 border border-green-200 text-green-800 p-8 text-center rounded-lg"
                >
                  <div className="text-4xl mb-4">✅</div>
                  <h4 className="font-head text-2xl font-bold mb-2">Reservation Request Sent!</h4>
                  <p className="text-sm">Thank you, {formData.name}. We will call you shortly to confirm your table.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs text-muted uppercase tracking-wider font-bold mb-2">Your Name</label>
                      <input required type="text" value={formData.name} onChange={e=>setFormData({...formData, name: e.target.value})} placeholder="Gurpreet Singh" className="w-full bg-gray-50 border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-red focus:ring-1 focus:ring-red transition-all" />
                    </div>
                    <div>
                      <label className="block text-xs text-muted uppercase tracking-wider font-bold mb-2">Phone Number</label>
                      <input required type="tel" value={formData.phone} onChange={e=>setFormData({...formData, phone: e.target.value})} placeholder="+91 98765 ..." className="w-full bg-gray-50 border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-red focus:ring-1 focus:ring-red transition-all" />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs text-muted uppercase tracking-wider font-bold mb-2">Number of Guests</label>
                      <select required value={formData.guests} onChange={e=>setFormData({...formData, guests: e.target.value})} className="w-full bg-gray-50 border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-red focus:ring-1 focus:ring-red transition-all">
                        <option value="">Select...</option>
                        <option>1–2 Guests</option>
                        <option>3–5 Guests</option>
                        <option>6–10 Guests</option>
                        <option>Large Group (10+)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs text-muted uppercase tracking-wider font-bold mb-2">Occasion</label>
                      <select value={formData.occasion} onChange={e=>setFormData({...formData, occasion: e.target.value})} className="w-full bg-gray-50 border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-red focus:ring-1 focus:ring-red transition-all">
                        <option value="">Regular Meal</option>
                        <option>Birthday Celebration</option>
                        <option>Family Gathering</option>
                        <option>Corporate Lunch</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs text-muted uppercase tracking-wider font-bold mb-2">Message (Optional)</label>
                    <textarea value={formData.message} onChange={e=>setFormData({...formData, message: e.target.value})} placeholder="Any special requests or dietary needs?" rows="4" className="w-full bg-gray-50 border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-red focus:ring-1 focus:ring-red transition-all resize-y"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-red hover:bg-dred text-white font-head font-bold px-8 py-4 uppercase tracking-wider transition-colors shadow-lg text-lg">
                    Confirm Reservation
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
