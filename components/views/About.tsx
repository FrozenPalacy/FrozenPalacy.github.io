import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Coffee } from 'lucide-react';

const MotionDiv = motion.div as any;

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8 pt-20">
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
        <MotionDiv 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl"
        >
          <img src="/avatar.jpg" alt="Profile" className="w-full h-full object-cover" />
        </MotionDiv>

        <MotionDiv 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex-1 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Hello, I'm Frozen.</h2>
          <p className="text-xl text-zinc-400 leading-relaxed mb-6">
            I'm now a university student studying in Shanghai, interested in computer science, esports, car racing. Bienvenue !
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-800 text-zinc-300 border border-white/5">
              <MapPin className="w-4 h-4" /> Shanghai, China
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-800 text-zinc-300 border border-white/5">
              <Mail className="w-4 h-4" /> support@xfrozenx.top
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-800 text-zinc-300 border border-white/5">
              <Coffee className="w-4 h-4" /> Fueled by Espresso
            </div>
          </div>
        </MotionDiv>
      </div>

      <MotionDiv 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <div className="p-6 bg-[#1c1c1e] rounded-2xl border border-white/5">
          <h3 className="text-lg font-bold text-white mb-2">Car Racing Enthusiast</h3>
          <p className="text-sm text-zinc-400">Go Kart, Formula 1, Simu-racing</p>
        </div>
        <div className="p-6 bg-[#1c1c1e] rounded-2xl border border-white/5">
          <h3 className="text-lg font-bold text-white mb-2">Computer Science</h3>
          <p className="text-sm text-zinc-400">Algorithm, Web, Electronic things</p>
        </div>
        <div className="p-6 bg-[#1c1c1e] rounded-2xl border border-white/5">
          <h3 className="text-lg font-bold text-white mb-2">Cuber</h3>
          <p className="text-sm text-zinc-400">Solving various Rubik's cube </p>
        </div>
      </MotionDiv>
    </div>
  );
};

export default About;