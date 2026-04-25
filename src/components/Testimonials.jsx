import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Food Critic",
    content: "The Dal Makhani here is legendary. It has that authentic smoky flavor that you only find in the heart of Punjab. Truly a gem in Jalandhar.",
    rating: 5,
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100"
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Local Resident",
    content: "Patwari Zaika is our go-to place for family dinners. The Sarson da Saag reminds me of my grandmother's cooking. The atmosphere is so warm and welcoming.",
    rating: 5,
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100"
  },
  {
    id: 3,
    name: "Amit Singh",
    role: "Travel Blogger",
    content: "If you're visiting Jalandhar, you cannot miss this place. The Tandoori Chicken is succulent and perfectly spiced. Five stars for the service too!",
    rating: 5,
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100"
  },
  {
    id: 4,
    name: "Simran Kaur",
    role: "NRI Visitor",
    content: "Whenever I visit Punjab from Canada, Patwari Zaika is my first stop. The buttery naans and creamy butter chicken taste exactly like they did 20 years ago. Pure nostalgia!",
    rating: 5,
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100"
  },
  {
    id: 5,
    name: "Karan Brar",
    role: "Food Enthusiast",
    content: "Their live tandoor is a sight to behold! You can taste the freshness in every bite of the paneer tikka. Honestly, it's the best vegetarian spread in all of Jalandhar.",
    rating: 5,
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100"
  },
  {
    id: 6,
    name: "Neha Gupta",
    role: "Event Planner",
    content: "We catered our family function from here. Not only is the food incredibly rich and flavorful, but the presentation and quality were top-notch. Highly recommended!",
    rating: 5,
    img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=100"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="sec-title">WHAT OUR <span>GUESTS SAY</span></h2>
          <div className="gold-line mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-xl border border-gold/10 relative group hover:border-gold/30 transition-all duration-300"
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gold flex items-center justify-center rounded-full text-white shadow-lg">
                <Quote size={24} />
              </div>
              
              <div className="flex mb-4">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    size={16}
                    className={index < testimonial.rating ? "text-gold fill-gold" : "text-gray-300"}
                  />
                ))}
              </div>

              <p className="text-muted italic mb-6 italic leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.img}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-gold/20"
                />
                <div>
                  <h4 className="font-head font-bold text-text">{testimonial.name}</h4>
                  <p className="text-xs text-gold uppercase tracking-widest font-medium">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
