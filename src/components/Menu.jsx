import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search } from 'lucide-react';

const menuItems = [
  { id: 1, cat: 'curry', type: 'veg', name: 'Dal Makhani', desc: 'Black lentils slow-cooked overnight in butter and cream. The dish that made us famous.', price: '₹180', unit: '/ bowl', img: '/images/dal_makhani.jpg', best: true },
  { id: 2, cat: 'curry', type: 'nonveg', name: 'Butter Chicken', desc: 'Tandoor-charred chicken in a rich tomato-cream gravy, finished with kasuri methi.', price: '₹280', unit: '/ half kg', img: '/images/butter_chicken.jpg', best: true },
  { id: 3, cat: 'curry', type: 'veg', name: 'Sarson da Saag', desc: 'Seasonal winter special. Mustard greens with makki ki roti — the soul of Punjab.', price: '₹160', unit: '/ plate', img: '/images/sarson_da_saag.jpg' },
  { id: 4, cat: 'curry', type: 'veg', name: 'Kadhi Chawal', desc: 'Tangy yogurt curry with pakoras, served over perfectly steamed basmati rice.', price: '₹150', unit: '/ thali', img: '/images/kadhi_chawal.jpg' },
  { id: 5, cat: 'tandoor', type: 'nonveg', name: 'Tandoori Chicken', desc: 'Marinated overnight in dahi and spices, cooked in our 400°C clay tandoor.', price: '₹320', unit: '/ full', img: '/images/tandoori_chicken.jpg', best: true },
  { id: 6, cat: 'tandoor', type: 'nonveg', name: 'Seekh Kebab', desc: 'Minced lamb mixed with raw onions, chillies and fresh coriander, grilled on skewers.', price: '₹260', unit: '/ 6 pcs', img: '/images/seekh_kebab.jpg' },
  { id: 7, cat: 'tandoor', type: 'veg', name: 'Paneer Tikka', desc: 'Thick-cut cottage cheese marinated in spiced yogurt, charred to perfection in the tandoor.', price: '₹220', unit: '/ plate', img: '/images/paneer_tikka.jpg' },
  { id: 8, cat: 'rice', type: 'veg', name: 'Butter Naan', desc: 'Leavened dough slapped on the walls of our tandoor, pulled out golden and buttered.', price: '₹40', unit: '/ piece', img: '/images/butter_naan.jpg' },
  { id: 9, cat: 'rice', type: 'veg', name: 'Jeera Rice', desc: 'Basmati rice tempered with cumin and ghee. Simple, fragrant, and the perfect companion.', price: '₹120', unit: '/ bowl', img: '/images/jeera_rice.jpg' },
  { id: 10, cat: 'drinks', type: 'veg', name: 'Punjabi Lassi', desc: 'Thick churned yogurt lassi, sweet or salted. Served in a chilled matka glass.', price: '₹80', unit: '/ glass', img: '/images/lassi.jpg' },
  { id: 11, cat: 'drinks', type: 'veg', name: 'Gulab Jamun', desc: 'Soft milk-solid dumplings soaked in rose-cardamom sugar syrup. Served warm.', price: '₹90', unit: '/ 4 pcs', img: '/images/gulab_jamun.jpg' }
];

const categories = [
  { id: 'all', label: 'All Items' },
  { id: 'curry', label: 'Curries' },
  { id: 'tandoor', label: 'Tandoor' },
  { id: 'rice', label: 'Rice & Breads' },
  { id: 'drinks', label: 'Drinks & Desserts' }
];

const Menu = () => {
  const [activeCat, setActiveCat] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = menuItems.filter(item => {
    const matchesCat = activeCat === 'all' || item.cat === activeCat;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.desc.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <section id="menu" className="py-24 bg-white relative">
      <div className="absolute top-0 left-0 w-full h-[400px] bg-red pt-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
        <h2 className="font-head text-5xl md:text-7xl font-black text-white tracking-tighter mb-4">OUR <span className="text-gold">MENU</span></h2>
        <div className="w-16 h-1 bg-gold"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-[280px] relative z-10">
        
        {/* Filters & Search */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-12 max-w-6xl mx-auto">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-2 bg-white p-2 shadow-xl rounded-xl border border-gray-100">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCat(cat.id)}
                className={`px-5 py-2 rounded-lg font-body text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeCat === cat.id 
                    ? 'bg-red text-white shadow-lg' 
                    : 'bg-gray-50 text-muted hover:bg-gray-100 hover:text-text'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full lg:w-80 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted group-focus-within:text-red transition-colors" size={18} />
            <input 
              type="text" 
              placeholder="Search dishes..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white border-2 border-gray-100 rounded-xl py-3 pl-12 pr-4 text-sm focus:outline-none focus:border-red focus:ring-4 focus:ring-red/5 shadow-sm transition-all"
            />
          </div>
        </div>

        {/* Menu Grid */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                className="bg-white border border-gray-100 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border-t-4 border-t-gold group flex flex-col"
              >
                <div className="h-48 overflow-hidden relative bg-gray-100">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                  
                  {/* Best Seller Badge */}
                  {item.best && (
                    <div className="absolute top-4 left-4 bg-gold text-white text-[10px] font-black px-2 py-1 uppercase tracking-tighter shadow-xl transform -rotate-3 border-2 border-white">
                      Best Seller
                    </div>
                  )}

                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-1 rounded-full shadow-md">
                    {item.type === 'veg' ? (
                      <div className="w-4 h-4 border-2 border-green-700 flex items-center justify-center rounded-sm">
                        <div className="w-2 h-2 bg-green-700 rounded-full"></div>
                      </div>
                    ) : (
                      <div className="w-4 h-4 border-2 border-red-700 flex items-center justify-center rounded-sm">
                        <div className="w-0 h-0 border-l-[4px] border-r-[4px] border-b-[6px] border-l-transparent border-r-transparent border-b-red-700"></div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="text-xs text-gold uppercase tracking-[0.15em] font-bold mb-2">{item.cat}</div>
                  <h3 className="font-head text-2xl font-bold text-text mb-2">{item.name}</h3>
                  <p className="text-muted text-sm leading-relaxed mb-6 flex-grow">{item.desc}</p>
                  <div className="font-head text-3xl font-black text-red mt-auto border-t border-gray-100 pt-4">
                    {item.price} <span className="text-sm font-body font-normal text-muted">{item.unit}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;
