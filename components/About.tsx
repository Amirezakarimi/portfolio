import React from 'react';
import { SectionId } from '../types';
import { Code, Layout, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const features = [
    {
      icon: <Layout size={32} />,
      title: 'Minimal Design',
      desc: 'Focusing on simplicity and efficiency in UI design for the best user experience.'
    },
    {
      icon: <Code size={32} />,
      title: 'Clean Code',
      desc: 'Writing scalable, modular, and standard code with modern architectures.'
    },
    {
      icon: <Zap size={32} />,
      title: 'High Performance',
      desc: 'Deep optimization for high load speed and smooth animations.'
    }
  ]; 

  return (
    <section id={SectionId.ABOUT} className="py-24 bg-slate-950/50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-slate-700 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-slate-400 text-lg leading-8 text-justify"
          >
            <p>
              Hi! I'm Arash, a Frontend Developer with over 5 years of experience in building web applications. My main passion lies at the intersection of design and engineering; where aesthetics meets the logical structure of code.
            </p>
            <p>
              I started my professional journey with React and the JavaScript ecosystem in 2019. My goal is always to learn new tools and apply them to solve real-world challenges.
            </p>
            <p>
              Currently, I focus on large-scale projects using Next.js and TypeScript, and I love sharing my knowledge with the developer community.
            </p>
          </motion.div>

          <div className="grid gap-6">
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="bg-slate-900 border border-slate-800 p-6 rounded-xl hover:border-slate-600 transition-all duration-300 group"
              >
                <div className="text-slate-400 group-hover:text-slate-100 mb-4 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-200 mb-2">{feature.title}</h3>
                <p className="text-slate-500">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;