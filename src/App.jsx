import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Menu from './components/Menu'
import Gallery from './components/Gallery'
import Blog from './components/Blog'
import Location from './components/Location'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  // Smooth scrolling for anchor links
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="relative bg-cream">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <Gallery />
        <Blog />
        <Location />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      
      {/* Floating Buttons */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
        {/* Back to Top */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="bg-white/90 backdrop-blur-md text-red w-12 h-12 rounded-full flex items-center justify-center shadow-xl border border-red/10 hover:bg-red hover:text-white transition-all transform hover:-translate-y-1"
        >
          <span className="text-xl">↑</span>
        </button>

        {/* WhatsApp Button */}
        <a 
          href="https://wa.me/919876012345" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#25D366] hover:bg-[#128C7E] text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all transform hover:scale-110 active:scale-95 group"
        >
          <span className="text-3xl">💬</span>
          <span className="absolute right-full mr-4 bg-black/80 text-white text-xs font-bold py-2 px-4 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Chat with us!
          </span>
        </a>
      </div>
    </div>
  )
}

export default App
