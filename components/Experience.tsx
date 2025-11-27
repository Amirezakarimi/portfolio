import React from 'react';
import { SectionId, ExperienceItem } from '../types';
import { Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

const experiences: ExperienceItem[] = [
  {
    id: 1,
    role: 'Senior Frontend Engineer',
    company: 'Leading Tech (TechCorp)',
    period: '2022 - Present',
    description: 'Leading the frontend team to rewrite the enterprise panel with Next.js. Reduced initial load time by 40% and implemented a custom design system.'
  },
  {
    id: 2,
    role: 'Frontend Developer',
    company: 'Innovation Startup',
    period: '2020 - 2022',
    description: 'Developed e-commerce application with React and Redux. Implemented PWA which led to a 20% increase in mobile users.'
  },
  {
    id: 3,
    role: 'UI Designer & Frontend',
    company: 'Creative Digital Agency',
    period: '2019 - 2020',
    description: 'Designed and implemented interactive landing pages for international clients. Close collaboration with graphic and backend teams.'
  }
];

const Experience: React.FC = () => {
  return (
    <section id={SectionId.EXPERIENCE} className="py-24 bg-slate-950">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-slate-700 mx-auto rounded-full" />
        </motion.div>

        <div className="relative border-l border-slate-800 ml-4 md:ml-0 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.id} 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="relative pl-8 md:pl-12 group"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-slate-600 rounded-full border-4 border-slate-950 group-hover:bg-slate-100 group-hover:scale-125 transition-all duration-300 z-10 box-content" />
              
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                <h3 className="text-xl font-bold text-slate-200 group-hover:text-white transition-colors">
                  {exp.role}
                </h3>
                <div className="flex items-center gap-2 text-sm text-slate-500 bg-slate-900/50 px-3 py-1 rounded-full w-fit border border-slate-800">
                  <Briefcase size={14} />
                  <span>{exp.period}</span>
                </div>
              </div>
              
              <h4 className="text-lg text-slate-400 font-medium mb-3">{exp.company}</h4>
              
              <p className="text-slate-500 leading-relaxed text-justify group-hover:text-slate-400 transition-colors duration-300">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;