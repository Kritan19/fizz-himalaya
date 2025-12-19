
import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote, CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-elegant italic font-bold mb-4">From Himalayan Springs to Your Sip</h1>
          <p className="text-xl text-blue-100 max-w-2xl">The story of how two enthusiasts brought the sparkle of the mountains to the streets of Kathmandu.</p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 text-slate-700 text-lg">
              <p>
                Established in 2024 by enthusiasts <strong>Priya and Arjun</strong>, Fizz Himalaya draws inspiration from Nepal's pristine waters and diverse fruits. Our journey began on a hot summer trek when we realized that the world needed a sip of Nepal's refreshing wild flavors.
              </p>
              <p>
                We blend traditional recipes like chiya (tea) sodas with modern carbonation techniques. We source ingredients from local farms in Pokhara and Chitwan, carbonating them fresh for that perfect sparkle.
              </p>
              <div className="bg-slate-50 p-8 rounded-2xl border-l-4 border-orange-500">
                <h3 className="font-bold text-2xl mb-4 text-slate-800">Our Mission</h3>
                <p className="italic">
                  "To bubbly-ify Nepal's beverage scene by promoting sustainable, fun drinks that celebrate our heritage while appealing to adventurers and locals alike. Our name evokes the 'fizz' of excitement and the majestic Himalayas."
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://picsum.photos/seed/owners/800/1000" 
                alt="Priya and Arjun at Fizz Himalaya" 
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bubbly text-blue-600 mb-4">What Makes Us <span className="text-orange-500">Special</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: 'Freshness', desc: 'Locally sourced fruits and herbs from the hills and plains of Nepal.', img: 'https://picsum.photos/seed/fresh/400/300' },
              { title: 'Innovation', desc: 'Custom flavor blends you won’t find anywhere else in the world.', img: 'https://picsum.photos/seed/innov/400/300' },
              { title: 'Sustainability', desc: 'Zero-waste bottling and a commitment to water conservation.', img: 'https://picsum.photos/seed/sust/400/300' },
            ].map((v) => (
              <div key={v.title} className="bg-white p-8 rounded-3xl shadow-lg group hover:-translate-y-2 transition-transform">
                <img src={v.img} alt={v.title} className="w-full h-48 object-cover rounded-2xl mb-6" />
                <h3 className="text-2xl font-bold mb-4 text-slate-800 flex items-center gap-2">
                  <CheckCircle className="text-green-500" /> {v.title}
                </h3>
                <p className="text-slate-600">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-blue-600 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-elegant italic text-white font-bold">Loves from Our Bubblers</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-white p-8 rounded-3xl shadow-xl relative">
                <Quote className="absolute top-4 right-4 text-blue-100" size={48} />
                <p className="text-slate-700 italic mb-6 relative z-10">"{t.text}"</p>
                <p className="text-orange-500 font-bold">— {t.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Gallery */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bubbly text-slate-800">Our <span className="text-blue-600">Dream Team</span></h2>
            <p className="text-slate-500 mt-4">Mixologists trained in the art of Himalayan herbal infusions.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-square overflow-hidden rounded-2xl group relative">
                <img 
                  src={`https://picsum.photos/seed/team${i}/500/500`} 
                  alt={`Team Member ${i}`} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-blue-600/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-bold">Fizz Master</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
