import React, { useState } from 'react';
import { SectionId } from '../types';
import { Send, Mail, Phone, MapPin, Loader2, Sparkles } from 'lucide-react';
import { generateContactReply } from '../services/geminiService';
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
    setResponseMsg(null);

    // Simulate network delay then call Gemini
    try {
        // In a real app, you'd send the email to your backend here.
        // We are using Gemini to generate an immediate "AI Assistant" response.
        const aiReply = await generateContactReply(formData.name, formData.message);
        setResponseMsg(aiReply);
        setFormData({ name: '', email: '', message: '' }); // Clear form
    } catch (error) {
        console.error(error);
        setResponseMsg("An error occurred, please try again.");
    } finally {
        setIsLoading(false);
    }
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-6">Get in Touch</h2>
            <p className="text-slate-400 mb-12 leading-relaxed text-lg">
              Have an interesting project in mind? Or just want to say hi?
              <br />
              I am always ready to hear new ideas and collaborate on challenging projects.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors">
                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Email</p>
                  <p className="font-medium">contact@arash.dev</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors">
                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Phone</p>
                  <p className="font-medium">+98 912 345 6789</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors">
                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Location</p>
                  <p className="font-medium">Tehran, Iran</p>
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
             {/* AI Badge */}
             <div className="absolute top-4 right-4 flex items-center gap-1 bg-slate-800/50 px-2 py-1 rounded text-xs text-slate-400 border border-slate-700/50">
                <Sparkles size={12} className="text-amber-400" />
                <span>Smart Support</span>
             </div>

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
                  placeholder="Ex: John Doe"
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
                  placeholder="john@example.com"
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
                     <Sparkles size={16} className="text-amber-400" />
                     AI Assistant Reply:
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