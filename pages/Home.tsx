
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles, MapPin } from 'lucide-react';
import { MENU_ITEMS } from '../constants';

const Home: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const featured = MENU_ITEMS.filter(item => ['f1', 'f3', 's2'].includes(item.id));

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % featured.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [featured.length]);

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[90vh] md:h-screen flex items-center justify-center text-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1920&h=1080&auto=format&fit=crop" 
            alt="Fizz Himalaya Shop Interior with Mountain Views" 
            className="w-full h-full object-cover brightness-[0.4]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-sky-900/40 via-transparent to-blue-50/10"></div>
        </div>
        
        <div className="relative z-10 max-w-5xl animate-fade-in px-4">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 text-white text-sm font-semibold mb-8 tracking-widest uppercase">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Pure Himalayan Sparkle</span>
          </div>
          <h1 className="text-6xl md:text-9xl font-serif-heading text-white drop-shadow-2xl mb-6 leading-tight">
            Elevate Your <span className="text-sky-400 italic">Fizz</span>
          </h1>
          <p className="text-lg md:text-2xl text-blue-50 font-light mb-10 max-w-2xl mx-auto leading-relaxed opacity-90">
            Nepal's premium soda sanctuary. We craft effervescent elixirs infused with wild Himalayan herbs and pristine mountain waters.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <Link to="/menu" className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-4 px-12 rounded-xl shadow-[0_10px_40px_rgba(14,165,233,0.3)] transform hover:-translate-y-1 transition-all text-lg min-w-[220px]">
              The Bubbly Menu
            </Link>
            <Link to="/contact" className="bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white hover:text-slate-900 text-white font-bold py-4 px-12 rounded-xl transition-all text-lg min-w-[220px]">
              Find Our Shop
            </Link>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-50 flex flex-col items-center">
           <span className="text-white text-xs uppercase tracking-[0.3em] mb-4">Explore</span>
           <div className="w-px h-16 bg-gradient-to-b from-white to-transparent"></div>
        </div>
      </section>

      {/* Intro Teaser */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-sky-100 rounded-full blur-3xl opacity-60"></div>
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl z-10 aspect-[4/5]">
               <img 
                src="https://images.unsplash.com/photo-1587883012610-e3df17d41270?q=80&w=800&h=1000&auto=format&fit=crop" 
                alt="Refreshing Mango Soda" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 glass p-8 rounded-3xl z-20 shadow-xl border border-sky-100 max-w-[240px] animate-bounce-slow">
              <div className="flex items-center space-x-2 text-sky-600 font-bold mb-2">
                 <MapPin size={18} />
                 <span className="text-xs uppercase tracking-widest">Kathmandu</span>
              </div>
              <p className="text-slate-700 text-sm font-semibold">"Best refreshment I've had in Nepal, hands down!"</p>
            </div>
          </div>
          <div className="space-y-8">
            <h2 className="text-5xl md:text-6xl font-serif-heading text-slate-900 leading-[1.1]">
              Crafted in the <span className="text-sky-500 italic">Shadow</span> of Giants.
            </h2>
            <p className="text-slate-600 text-xl leading-relaxed">
              Born in the vibrant streets of Kathmandu, we blend the pristine waters of the mountains with 
              sun-drenched fruits from Chitwan and the spicy kick of Terai. 
            </p>
            <p className="text-slate-500 text-lg leading-relaxed">
               We aren't just a soda shop; we're a celebration of Nepali terroir, carbonated to perfection.
            </p>
            <div className="pt-4">
              <Link to="/about" className="group inline-flex items-center space-x-4 text-sky-600 font-bold text-xl hover:text-sky-700 transition-colors">
                <span className="border-b-2 border-sky-100 group-hover:border-sky-500 pb-1">Our Full Story</span>
                <ArrowRight className="group-hover:translate-x-3 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Slider */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-5xl font-serif-heading text-slate-900 mb-4">Curated <span className="text-sky-600 italic">Bubbles</span></h2>
            <p className="text-slate-500 text-lg">Seasonal favorites that sparkle with local soul.</p>
          </div>
          <div className="flex space-x-4">
            <button 
              onClick={() => setActiveSlide((activeSlide - 1 + featured.length) % featured.length)}
              className="bg-white shadow-md p-5 rounded-2xl hover:bg-sky-500 hover:text-white transition-all transform active:scale-95"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => setActiveSlide((activeSlide + 1) % featured.length)}
              className="bg-white shadow-md p-5 rounded-2xl hover:bg-sky-500 hover:text-white transition-all transform active:scale-95"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4">
          <div className="overflow-hidden rounded-[3rem] bg-white shadow-2xl flex flex-col md:flex-row min-h-[500px] border border-slate-100">
            <div className="w-full md:w-3/5 relative h-80 md:h-auto">
              <img 
                src={featured[activeSlide].image} 
                alt={featured[activeSlide].name}
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
              />
            </div>
            <div className="w-full md:w-2/5 p-12 lg:p-20 flex flex-col justify-center">
              <span className="text-amber-500 font-bold uppercase tracking-[0.2em] text-xs mb-4">{featured[activeSlide].category}</span>
              <h3 className="text-4xl lg:text-5xl font-serif-heading italic font-bold mb-6 text-slate-900">{featured[activeSlide].name}</h3>
              <p className="text-slate-600 text-lg mb-10 leading-relaxed">
                {featured[activeSlide].description}
              </p>
              <div className="flex items-center justify-between mt-auto pt-10 border-t border-slate-100">
                <div className="flex flex-col">
                  <span className="text-xs text-slate-400 uppercase tracking-widest mb-1">Price</span>
                  <span className="text-3xl font-bold text-sky-600">NPR {featured[activeSlide].price}</span>
                </div>
                <Link to="/menu" className="bg-slate-900 text-white px-8 py-4 rounded-xl hover:bg-sky-600 transition-all font-bold">
                  Order Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-sky-600 relative overflow-hidden text-center mx-4 md:mx-8 mb-8 rounded-[3rem]">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1920&auto=format&fit=crop" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <h2 className="text-5xl md:text-7xl font-serif-heading text-white mb-8">Ready to <span className="italic">Pop</span>?</h2>
          <p className="text-sky-50 text-xl md:text-2xl mb-12 font-light">
            Find your perfect Himalayan refresh at our sanctuary in Kathmandu.
          </p>
          <Link to="/contact" className="bg-white text-sky-600 font-bold py-5 px-14 rounded-2xl shadow-2xl hover:bg-amber-400 hover:text-white transition-all text-xl inline-block transform hover:-translate-y-1">
            Find Your Way to Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
