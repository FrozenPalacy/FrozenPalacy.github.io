import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight, Gamepad2, Feather } from 'lucide-react';
import { posts } from '../../data/posts';

const MotionDiv = motion.div as any;

const Home: React.FC = () => {
  const navigate = useNavigate();
  const latestPost = posts[0];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 50 } }
  };

  const cardClass = "relative group overflow-hidden bg-[#1c1c1e] hover:bg-[#2c2c2e] border border-white/5 rounded-3xl transition-all duration-500 cursor-pointer";

  return (
    <div className="w-full max-w-6xl mx-auto p-4 md:p-8">
      {/* Hero Text */}
      <MotionDiv 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 mt-8 md:mt-16 text-center md:text-left"
      >
        <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40 tracking-tight pb-4">
          探索无限
        </h1>
        <p className="text-xl text-zinc-400 max-w-2xl font-light">
          Explore the World.
        </p>
      </MotionDiv>

      {/* Bento Grid */}
      <MotionDiv 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 h-auto md:h-[500px]"
      >
        
        {/* Large Card: Blogs */}
        <MotionDiv 
          variants={item}
          onClick={() => navigate('/blogs')}
          className={`${cardClass} md:col-span-2 md:row-span-2 flex flex-col justify-between p-8 min-h-[300px] md:min-h-0`}
        >
          <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
             <ArrowUpRight className="text-white/50 w-6 h-6" />
          </div>
          <div className="z-10">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center mb-4 text-blue-400">
              <Feather className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-semibold text-white mb-2">Notes</h2>
            <p className="text-zinc-400">The process of exploring the world.</p>
          </div>
          <div className="mt-4 opacity-50 group-hover:opacity-100 transition-opacity">
            <div className="text-sm text-zinc-500">Latest: "{latestPost ? latestPost.title : 'No posts yet'}"</div>
          </div>
          {/* Decorative Gradient */}
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-600/20 blur-[100px] rounded-full group-hover:bg-blue-600/30 transition-all duration-500" />
        </MotionDiv>

        {/* Small Card: About */}
        <MotionDiv 
          variants={item}
          onClick={() => navigate('/about')}
          className={`${cardClass} md:col-span-1 md:row-span-1 p-6 flex flex-col justify-center items-center text-center min-h-[200px] md:min-h-0`}
        >
          <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-white/10 shadow-lg">
             <img src="/avatar.jpg" alt="Profile" className="w-full h-full object-cover transition-all duration-500" />
          </div>
          <h3 className="text-lg font-medium text-white">About Me</h3>
          <p className="text-xs text-zinc-500 mt-1">Everything's here</p>
        </MotionDiv>

        {/* Small Card: Games */}
        <MotionDiv 
          variants={item}
          onClick={() => navigate('/games')}
          className={`${cardClass} md:col-span-1 md:row-span-1 p-6 flex flex-col justify-between bg-gradient-to-br from-indigo-900/20 to-purple-900/20 min-h-[200px] md:min-h-0`}
        >
          <Gamepad2 className="w-8 h-8 text-purple-400" />
          <div>
            <h3 className="text-xl font-medium text-white">Arcade</h3>
            <p className="text-xs text-zinc-400">Interactive Experiments</p>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-purple-500/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </MotionDiv>
      </MotionDiv>
    </div>
  );
};

export default Home;