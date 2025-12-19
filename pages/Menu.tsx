
import React from 'react';
import { MENU_ITEMS } from '../constants';
import { Printer, Sparkles, Info } from 'lucide-react';

const Menu: React.FC = () => {
  const categories = Array.from(new Set(MENU_ITEMS.map(item => item.category)));

  return (
    <div className="pt-32 bg-white min-h-screen pb-32">
      {/* Header */}
      <section className="py-20 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-sky-50 rounded-full blur-[120px] -z-10 opacity-60"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="inline-block px-6 py-2 bg-sky-100 text-sky-700 rounded-full text-xs font-bold tracking-[0.3em] uppercase mb-8">
            The Fizz Collection
          </div>
          <h1 className="text-6xl md:text-7xl font-serif-heading text-slate-900 mb-6 font-bold leading-tight">
            Handcrafted <span className="text-sky-500 italic">Bubbles</span>
          </h1>
          <p className="text-slate-500 text-xl font-light max-w-2xl mx-auto mb-12">
            Purity of the Himalayas, carbonated with passion. Explore our curated range of artisanal elixirs.
          </p>
          <div className="flex flex-wrap justify-center gap-6 no-print">
            <button 
              onClick={() => window.print()}
              className="inline-flex items-center space-x-3 bg-slate-900 px-10 py-4 rounded-2xl shadow-xl text-white font-bold hover:bg-sky-600 transition-all transform hover:-translate-y-1"
            >
              <Printer size={20} />
              <span>Print Menu</span>
            </button>
          </div>
        </div>
      </section>

      {/* Menu Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-32">
          {categories.map((cat) => (
            <div key={cat} className="animate-fade-in group">
              <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
                <div className="space-y-2">
                   <div className="h-1.5 w-16 bg-sky-500 rounded-full mb-4 group-hover:w-32 transition-all duration-700"></div>
                   <h2 className="text-4xl md:text-5xl font-serif-heading italic font-bold text-slate-900">{cat}</h2>
                </div>
                <p className="text-slate-400 text-sm uppercase tracking-widest border-b border-slate-100 pb-2">
                   {MENU_ITEMS.filter(i => i.category === cat).length} Seasonal Specialties
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-x-20 gap-y-16">
                {MENU_ITEMS.filter(item => item.category === cat).map((item) => (
                  <div key={item.id} className="flex flex-col sm:flex-row items-start gap-8 group/item">
                    <div className="w-full sm:w-44 h-44 rounded-[2.5rem] overflow-hidden flex-shrink-0 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white bg-slate-50 relative">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover group-hover/item:scale-110 transition-transform duration-1000" 
                        onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=400';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity"></div>
                    </div>
                    <div className="flex-grow pt-2">
                      <div className="flex justify-between items-baseline mb-4 border-b border-slate-100 pb-3">
                        <h3 className="text-2xl font-bold text-slate-800 group-hover/item:text-sky-600 transition-colors">{item.name}</h3>
                        <div className="flex items-center space-x-2">
                            <span className="text-xs text-sky-400 font-bold uppercase italic">NPR</span>
                            <span className="text-3xl font-serif-heading italic font-bold text-sky-500">{item.price}</span>
                        </div>
                      </div>
                      <p className="text-slate-500 text-lg leading-relaxed font-light">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Notes Footer */}
        <div className="mt-40 p-12 bg-slate-900 rounded-[3rem] text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500 rounded-full blur-[140px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>
          <div className="relative z-10 grid md:grid-cols-3 gap-16 items-start">
            <div className="space-y-6">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-3xl flex items-center justify-center text-amber-400">
                <Sparkles size={32} />
              </div>
              <h4 className="text-3xl font-serif-heading italic font-bold">Fizz Integrity</h4>
              <p className="text-slate-400 text-sm font-light leading-relaxed">
                We use 100% natural fruit syrups and Himalayan spring water. No artificial colors or preservatives.
              </p>
            </div>
            
            <div className="md:col-span-2 grid sm:grid-cols-2 gap-12 bg-white/5 p-12 rounded-[2.5rem] border border-white/10">
              <div className="space-y-6">
                <h5 className="font-bold text-sky-400 uppercase tracking-widest text-xs">Add-Ons & Mixers</h5>
                <ul className="text-slate-300 space-y-4 text-sm font-light">
                  <li className="flex justify-between border-b border-white/5 pb-2"><span>Double Carbonation</span> <span className="text-white font-bold">+20 NPR</span></li>
                  <li className="flex justify-between border-b border-white/5 pb-2"><span>Organic Honey Glaze</span> <span className="text-white font-bold">+30 NPR</span></li>
                  <li className="flex justify-between"><span>Vanilla Cream Float</span> <span className="text-white font-bold">+80 NPR</span></li>
                </ul>
              </div>
              <div className="space-y-6">
                 <h5 className="font-bold text-sky-400 uppercase tracking-widest text-xs">Dietary Notice</h5>
                 <div className="flex items-start space-x-3">
                    <Info className="text-slate-400 mt-1 flex-shrink-0" size={18} />
                    <p className="text-slate-300 text-sm font-light leading-relaxed">
                        Please notify our staff regarding any sensitivities to specific mountain herbs or dairy before placing your order.
                    </p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
