import React, { useState } from 'react';
import { SectionId } from '../types';
import { Send, Mail, Phone, MapPin, Loader2, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsLoading(true);
  setResponseMsg(null); // پاک کردن پیام قبلی

  try {
    const response = await fetch("https://formspree.io/f/movowlpb", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      setResponseMsg("Your message has been sent successfully! I’ll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setResponseMsg("Failed to send message. Please try again later.");
    }
  } catch (error) {
    setResponseMsg("Something went wrong. Please try again later.");
  }

  setIsLoading(false);
};


  return (
    <section id={SectionId.CONTACT} className="py-24 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-20">Contact</h2>
            
            <div className="space-y-8">
              <div className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors">
                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Email</p>
                  <p className="font-medium">contact@amirrezakarimi.ir</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors">
                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Phone</p>
                  <p className="font-medium">+98 911 554 4706</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors">
                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Location</p>
                  <p className="font-medium">Sari, Tehran, Iran</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl relative overflow-hidden"
          >
             
            <form onSubmit={handleSubmit} className="space-y-6 mt-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-500 transition-all"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-500 transition-all"
                  placeholder="name@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-500 transition-all resize-none"
                  placeholder="Write your message here..."
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isLoading}
                className="w-full bg-slate-100 text-slate-900 font-bold py-4 rounded-lg hover:bg-white transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="animate-spin" size={20} />
                    Processing...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </motion.button>
            </form>

            <AnimatePresence>
              {responseMsg && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-6 p-4 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-300 text-sm overflow-hidden"
                >
                  <div className="flex items-center gap-2 mb-2 text-slate-100 font-semibold">
                  </div>
                  <p>{responseMsg}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;