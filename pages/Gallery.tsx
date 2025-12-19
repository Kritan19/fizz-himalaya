
import React, { useState } from 'react';
import { GALLERY_IMAGES } from '../constants';
import { X, Maximize2, Camera } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<typeof GALLERY_IMAGES[0] | null>(null);
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Drinks', 'Interior', 'Community'];

  return (
    <div className="pt-32 bg-slate-50 min-h-screen pb-32">
      {/* Header */}
      <section className="mb-20 text-center px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="bg-sky-100 text-sky-600 p-3 rounded-2xl">
              <Camera size={32} />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-serif-heading text-slate-900 mb-6 font-bold leading-tight">
             Capturing the <span className="text-sky-500 italic">Spark</span>
          </h1>
          <p className="text-slate-500 text-xl max-w-2xl mx-auto font-light">
            A window into the vibrant atmosphere and handcrafted details of Fizz Himalaya.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-3 rounded-2xl font-bold transition-all border-2 ${
                filter === cat 
                ? 'bg-sky-500 border-sky-500 text-white shadow-lg shadow-sky-200' 
                : 'bg-white border-transparent text-slate-500 hover:border-sky-200 hover:text-sky-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
          {GALLERY_IMAGES.map((img) => (
            <div 
              key={img.id} 
              className="relative group cursor-pointer overflow-hidden rounded-[2rem] shadow-sm transition-all hover:shadow-2xl hover:-translate-y-2 border border-white"
              onClick={() => setSelectedImage(img)}
            >
              <img 
                src={img.url} 
                alt={img.caption} 
                className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-start justify-end p-8">
                <div className="bg-white/20 backdrop-blur-md p-3 rounded-full mb-4">
                   <Maximize2 className="text-white" size={24} />
                </div>
                <h3 className="text-white font-serif-heading italic text-2xl font-bold">{img.caption}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-slate-950/98 backdrop-blur-xl flex items-center justify-center p-4 sm:p-12 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button className="absolute top-10 right-10 text-white hover:text-sky-400 transition-colors bg-white/10 p-4 rounded-full">
            <X size={32} />
          </button>
          
          <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-2/3">
               <img 
                src={selectedImage.url} 
                alt={selectedImage.caption} 
                className="max-h-[80vh] w-full object-contain rounded-3xl shadow-[0_0_100px_rgba(0,0,0,0.5)]"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
            <div className="w-full md:w-1/3 text-white space-y-6 text-left" onClick={(e) => e.stopPropagation()}>
              <span className="text-sky-400 font-bold uppercase tracking-[0.3em] text-xs">Shot with Passion</span>
              <h3 className="text-5xl font-serif-heading italic font-bold leading-tight">{selectedImage.caption}</h3>
              <p className="text-slate-400 text-lg font-light leading-relaxed">
                Capturing the essence of Himalayan refreshment in its natural habitat.
              </p>
              <div className="pt-8 border-t border-white/10">
                <p className="text-slate-500 text-xs uppercase tracking-widest mb-2">Visionary Prompt</p>
                <p className="text-slate-300 text-sm italic italic leading-relaxed">{selectedImage.prompt}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
