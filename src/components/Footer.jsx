import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black py-12 border-t-4 border-gold text-center relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-5" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%237B0000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }}></div>
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="font-head text-3xl font-black text-white/20 tracking-[0.2em] mb-6">
          PATWARI<span className="text-gold/20"> ZAIKA</span>
        </div>
        <p className="text-white/40 text-sm font-medium tracking-wider mb-2">
          © {new Date().getFullYear()} <span className="text-gold/70">Patwari Zaika</span> · Jalandhar, Punjab
        </p>
        <p className="text-white/30 text-xs tracking-widest uppercase">
          Built for MKT905 SEO Assignment
        </p>
      </div>
    </footer>
  );
};

export default Footer;
