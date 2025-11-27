import React from "react";
import { ArrowDown, Download } from "lucide-react";
import { SectionId } from "../types";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    document
      .getElementById(SectionId.ABOUT)
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id={SectionId.HERO}
      className="min-h-screen flex flex-col justify-center items-center relative px-4 pt-20 overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/4 right-1/4 w-64 h-64 bg-slate-700/20 rounded-full blur-3xl -z-10"
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-slate-600/10 rounded-full blur-3xl -z-10"
      />

      <div className="max-w-4xl mx-auto text-center space-y-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-slate-500 tracking-tight leading-tight"
        >
          Amirreza Karimi
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-light"
        >
          I'm <strong className="text-slate-200">Amirreza</strong>, a Frontend
          Developer.
          <br />I specialize in turning creative ideas into interactive, fast,
          and beautiful websites using modern technologies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
        >
          <button
            onClick={scrollToAbout}
            className="px-8 py-3 bg-slate-100 text-slate-900 rounded-full font-bold hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300 flex items-center gap-2"
          >
            Learn More
            <ArrowDown size={18} />
          </button>

          <a
            href="/files/Resume - Amirreza karimi.pdf"
            download
            className="px-8 py-3 border border-slate-700 text-slate-300 rounded-full font-medium hover:border-slate-500 hover:text-white hover:bg-slate-800 transition-all duration-300 flex items-center gap-2"
          >
            <Download size={18} />
            Download CV
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 2, repeat: Infinity }}
        className="absolute bottom-10 text-slate-500"
      >
        <ArrowDown size={24} />
      </motion.div>
    </section>
  );
};

export default Hero;
