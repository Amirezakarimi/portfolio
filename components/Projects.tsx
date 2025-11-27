import React from 'react';
import { SectionId, ProjectItem } from '../types';
import { Github, ExternalLink, Folder } from 'lucide-react';
import { motion } from 'framer-motion';

const projects: ProjectItem[] = [
  {
    id: 1,
    title: 'Crypto Dashboard',
    description: 'A real-time cryptocurrency dashboard tracking prices, market cap, and trends. Features interactive charts and a personalized portfolio tracker.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind', 'Recharts', 'CoinGecko API'],
    link: '#',
    github: '#'
  },
  {
    id: 2,
    title: 'E-commerce Platform',
    description: 'A fully functional online store with product filtering, cart management, and secure checkout integration.',
    techStack: ['React', 'Redux Toolkit', 'Node.js', 'Stripe', 'MongoDB'],
    link: '#',
    github: '#'
  },
  {
    id: 3,
    title: 'Task Management App',
    description: 'A drag-and-drop productivity tool similar to Trello. Supports multiple boards, dark mode, and local storage persistence.',
    techStack: ['React', 'Dnd-kit', 'Zustand', 'Vite', 'Firebase'],
    link: '#',
    github: '#'
  }
];

const Projects: React.FC = () => {
  return (
    <section id={SectionId.PROJECTS} className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-slate-700 mx-auto rounded-full" />
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            A selection of projects that demonstrate my passion for building clean and performant web applications.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="group bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-600 hover:shadow-2xl transition-all duration-300 flex flex-col"
            >
              {/* Visual Placeholder (Gradient) */}
              <div className="h-48 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center relative overflow-hidden group-hover:from-slate-800 group-hover:to-slate-800 transition-colors">
                 <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors" />
                 <Folder size={48} className="text-slate-700 group-hover:text-slate-500 transition-colors transform group-hover:scale-110 duration-500" />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-slate-200 group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-3">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors">
                        <Github size={20} />
                      </a>
                    )}
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-blue-400 transition-colors">
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.techStack.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 bg-slate-900 border border-slate-800 rounded-full text-xs font-medium text-slate-400 group-hover:border-slate-700 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;