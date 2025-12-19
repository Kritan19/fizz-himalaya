
import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call to Formspree or similar
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="pt-24 bg-slate-50 min-h-screen">
      {/* Header */}
      <section className="bg-orange-500 py-20 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bubbly mb-4">Come Bubble <span className="text-blue-600">With Us</span></h1>
          <p className="text-xl text-orange-50 max-w-2xl">Find your way to the most refreshing spot in Kathmandu or reach out for catering events.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Info & Map */}
            <div className="space-y-12">
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-3xl shadow-sm space-y-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                    <MapPin size={24} />
                  </div>
                  <h3 className="font-bold text-xl">Our Sanctuary</h3>
                  <p className="text-slate-500 text-sm">456 Boudha Road,<br />Kathmandu 44600, Nepal</p>
                </div>
                <div className="bg-white p-8 rounded-3xl shadow-sm space-y-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-500">
                    <Clock size={24} />
                  </div>
                  <h3 className="font-bold text-xl">Opening Hours</h3>
                  <p className="text-slate-500 text-sm">Open Daily<br />10 AM — 10 PM</p>
                </div>
                <div className="bg-white p-8 rounded-3xl shadow-sm space-y-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <Phone size={24} />
                  </div>
                  <h3 className="font-bold text-xl">Call Us</h3>
                  <p className="text-slate-500 text-sm">+977-1-7654321</p>
                </div>
                <div className="bg-white p-8 rounded-3xl shadow-sm space-y-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600">
                    <Mail size={24} />
                  </div>
                  <h3 className="font-bold text-xl">Email Us</h3>
                  <p className="text-slate-500 text-sm">info@fizzhimalaya.com</p>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="rounded-3xl overflow-hidden shadow-xl h-[400px] relative">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14127.854045547466!2d85.35332604218384!3d27.718330030501865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19183492744b%3A0x7d6560965e69e469!2sBoudhanath%20Stupa!5e0!3m2!1sen!2snp!4v1709400000000!5m2!1sen!2snp" 
                  className="w-full h-full border-0" 
                  allowFullScreen={true} 
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-3xl shadow-2xl p-10 lg:p-16">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
                  <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center text-green-500 mb-4 animate-bounce">
                    <CheckCircle size={48} />
                  </div>
                  <h3 className="text-3xl font-bubbly text-slate-800">Bubbles Sent!</h3>
                  <p className="text-slate-500 text-lg">Thank you for reaching out. Priya or Arjun will get back to you faster than a fresh carbonation cycle.</p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="text-blue-600 font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-3xl font-elegant italic font-bold text-slate-800 mb-8">Send a Sparkling Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Name</label>
                        <input 
                          required
                          type="text" 
                          placeholder="Your Name" 
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Email</label>
                        <input 
                          required
                          type="email" 
                          placeholder="your@email.com" 
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Phone (Optional)</label>
                      <input 
                        type="tel" 
                        placeholder="+977-XXX-XXXXXXX" 
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Message</label>
                      <textarea 
                        required
                        rows={5} 
                        placeholder="Tell us what's on your mind..." 
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                      ></textarea>
                    </div>
                    <div className="flex items-center space-x-2 py-2">
                      <input type="checkbox" id="newsletter" className="w-4 h-4 text-blue-600 rounded" />
                      <label htmlFor="newsletter" className="text-sm text-slate-500">Subscribe to our monthly Fizz News</label>
                    </div>
                    <button 
                      type="submit" 
                      disabled={loading}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl flex items-center justify-center space-x-2 transition-all transform hover:scale-[1.02] shadow-xl disabled:opacity-70"
                    >
                      {loading ? (
                        <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      ) : (
                        <>
                          <Send size={20} />
                          <span>Pop Message</span>
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
