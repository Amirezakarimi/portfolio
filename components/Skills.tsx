import React, { useState } from "react";
import { SectionId } from "../types";
import {
  Code2,
  Terminal,
  Layout,
  Globe,
  Cpu,
  Layers,
  GitBranch,
  Smartphone,
  Monitor,
  Github,
  Code
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type CategoryId = "frontend" | "tools";

const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<CategoryId>("frontend");

  const categories: { id: CategoryId; label: string; icon: React.ReactNode }[] =
    [
      { id: "frontend", label: "Frontend", icon: <Monitor size={18} /> },
      { id: "tools", label: "Tools", icon: <Terminal size={18} /> },
    ];

  const skillsData = {
    frontend: [
      { name: "React.js", icon: <Code size={28} />, desc: "Core Library" },
      { name: "Next.js", icon: <Globe size={28} />, desc: "React Framework" },
      { name: "TypeScript", icon: <Code size={28} />, desc: "Type Safety" },
      {
        name: "JavaScript",
        icon: <Code size={28} />,
        desc: "Web Programming Language",
      },
      {
        name: "Bootstrap",
        icon: <Layout size={28} />,
        desc: "Modern Styling",
      },
      {
        name: "Tailwind CSS",
        icon: <Layout size={28} />,
        desc: "Modern Styling",
      },
      { name: "Redux", icon: <Layers size={28} />, desc: "State Management" },
      { name: "HTML5/CSS3", icon: <Code2 size={28} />, desc: "Web Basics" },
      { name: "PWA", icon: <Smartphone size={28} />, desc: "Web Apps" },
    ],
    tools: [
      { name: "Git", icon: <GitBranch size={28} />, desc: "Version Control" },
      { name: "Github", icon: <Github size={28} />, desc: "Version Control" },
      { name: "Figma", icon: <Layout size={28} />, desc: "UI Design" },
      { name: "Vite", icon: <Cpu size={28} />, desc: "Build Tool" },
    ],
  };

  return (
    <section
      id={SectionId.SKILLS}
      className="py-32 bg-slate-950 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-slate-800/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black text-slate-100 mb-6 tracking-tight">
            Technical Skills
          </h2>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center mb-16">
          <div className="bg-slate-900 p-1.5 rounded-2xl inline-flex gap-2 border border-slate-800 shadow-xl">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`
                  flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 relative
                  ${
                    activeTab === cat.id
                      ? "text-slate-900 shadow-lg scale-105"
                      : "text-slate-400 hover:text-slate-200 hover:bg-slate-800"
                  }
                `}
              >
                {activeTab === cat.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-slate-100 rounded-xl"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat.icon}</span>
                <span className="relative z-10">{cat.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="wait">
            {skillsData[activeTab].map((skill, index) => (
              <motion.div
                key={`${activeTab}-${skill.name}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
                className="group bg-slate-900/50 backdrop-blur-sm border border-slate-800 hover:border-slate-600 rounded-2xl p-6 flex flex-col items-center justify-center text-center gap-4 hover:bg-slate-900 transition-colors shadow-sm hover:shadow-xl cursor-default"
              >
                <div className="p-4 bg-slate-950 rounded-2xl text-slate-400 group-hover:text-slate-100 group-hover:scale-110 transition-all duration-300 border border-slate-800 group-hover:border-slate-600 shadow-inner">
                  {skill.icon}
                </div>
                <div>
                  <h3 className="text-slate-200 font-bold mb-1">
                    {skill.name}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">
                    {skill.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
