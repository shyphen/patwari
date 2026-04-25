import React from 'react';
import { motion } from 'framer-motion';

const posts = [
  { id: 1, cat: 'Recipe', title: 'The Secret Behind Our Famous Dal Makhani', exc: "It's not just the ingredients — it's 18 hours of slow cooking on a wood flame. We reveal the method.", date: 'April 10, 2026', read: '6 min read', img: '/images/dal_makhani.jpg' },
  { id: 2, cat: 'Culture', title: 'Why Sarson da Saag Is Punjab\'s Soul Food', exc: "Every winter, Punjabis wait for mustard season. We explore the history and heart of this classic dish.", date: 'March 28, 2026', read: '5 min read', img: '/images/sarson_da_saag.jpg' },
  { id: 3, cat: 'Local Guide', title: 'Best Authentic Food in Jalandhar — A Local\'s Guide', exc: "Jalandhar has a rich street food culture. Here's where to eat, what to order, and why Patwari tops the list.", date: 'March 15, 2026', read: '8 min read', img: '/images/dhaba_exterior.jpg' }
];

const Blog = () => {
  return (
    <section id="blog" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="sec-title">FOOD <span>STORIES</span></h2>
            <div className="gold-line"></div>
          </div>
          <button className="text-red font-bold uppercase tracking-widest text-sm hover:text-dred border-b-2 border-red pb-1 w-max">
            View All Posts
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.article 
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white border border-gray-100 group cursor-pointer hover:shadow-2xl transition-all duration-300"
            >
              <div className="h-48 overflow-hidden relative bg-gray-100">
                <img src={post.img} alt={post.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-red mix-blend-overlay opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
              </div>
              <div className="p-8">
                <div className="text-[11px] text-gold uppercase tracking-[1.5px] font-bold mb-3">{post.cat}</div>
                <h3 className="font-head text-xl font-bold text-text mb-3 leading-tight group-hover:text-red transition-colors">{post.title}</h3>
                <p className="text-muted text-sm leading-relaxed mb-6">{post.exc}</p>
                <div className="flex items-center gap-4 text-xs text-muted font-medium uppercase tracking-wider border-t border-gray-100 pt-4">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 bg-gold rounded-full"></span>
                  <span>{post.read}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
