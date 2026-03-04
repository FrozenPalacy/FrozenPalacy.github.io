import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/views/Home';
import Blog from './components/views/Blog';
import BlogPostDetail from './components/views/BlogPostDetail';
import Games from './components/views/Games';
import About from './components/views/About';
import BubbleShooter from './components/views/BubbleShooter';
import { AnimatePresence, motion } from 'framer-motion';

const MotionDiv = motion.div as any;

const App: React.FC = () => {
  const location = useLocation();

  return (
    <Layout>
      <AnimatePresence mode="wait">
        <MotionDiv
          key={location.pathname}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<Blog />} />
            <Route path="/posts/:slug" element={<BlogPostDetail />} />
            <Route path="/games" element={<Games />} />
            <Route path="/games/bubbleshooter" element={<BubbleShooter />} />
            <Route path="/bubbleshooter" element={<BubbleShooter />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </MotionDiv>
      </AnimatePresence>
    </Layout>
  );
};

export default App;
