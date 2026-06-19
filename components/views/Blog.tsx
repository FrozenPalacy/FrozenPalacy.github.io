import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { posts } from '../../data/posts';
import { Calendar, Clock, ChevronRight, Search } from 'lucide-react';

const MotionDiv = motion.div as any;

const Blog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filteredPosts = posts.filter(post => {
    const term = searchTerm.toLowerCase();
    const matchesSearch = (
      post.title.toLowerCase().includes(term) ||
      post.content.toLowerCase().includes(term) ||
      post.preview.toLowerCase().includes(term)
    );
    const matchesTag = selectedTag ? post.tags.includes(selectedTag) : true;
    return matchesSearch && matchesTag;
  });

  const handleTagClick = (e: React.MouseEvent, tag: string) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedTag(prev => prev === tag ? null : tag);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8 pt-20">
      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <h2 className="text-4xl font-bold text-white mb-4">Notes & Thoughts</h2>
        <p className="text-zinc-400 mb-8">Click on the tags to filter the blogs.</p>
        
        {/* Search Box */}
        <div className="flex flex-col gap-4">
          <div className="relative max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-zinc-500" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-white/10 rounded-xl leading-5 bg-zinc-900/50 text-zinc-300 placeholder-zinc-500 focus:outline-none focus:bg-zinc-900 focus:ring-1 focus:ring-blue-500/50 focus:border-blue-500/50 sm:text-sm transition-all"
              placeholder="Search posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          {selectedTag && (
            <div className="flex items-center gap-2">
              <span className="text-sm text-zinc-400">Filtered by:</span>
              <button 
                onClick={() => setSelectedTag(null)}
                className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-medium hover:bg-blue-500/30 transition-colors flex items-center gap-1"
              >
                {selectedTag}
                <span className="ml-1">×</span>
              </button>
            </div>
          )}
        </div>
      </MotionDiv>

      <div className="space-y-4">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post, i) => (
            <Link to={`/posts/${post.slug}`} key={post.id}>
              <MotionDiv
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0, transition: { delay: i * 0.1 } }}
                whileHover={{ x: 10, transition: { delay: 0 } }}
                className="group bg-[#1c1c1e] hover:bg-[#2c2c2e] border border-white/5 p-6 rounded-2xl transition-colors cursor-pointer mb-4"
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1 mr-4">
                    <div className="flex gap-2 mb-2">
                      {post.tags.map(tag => (
                        <span 
                          key={tag} 
                          onClick={(e) => handleTagClick(e, tag)}
                          className={`text-[10px] uppercase tracking-wider font-semibold transition-colors z-10 relative hover:underline ${selectedTag === tag ? 'text-blue-400 underline' : 'text-blue-400/80 hover:text-blue-400'}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">{post.title}</h3>
                    <p className="text-zinc-400 mb-4 leading-relaxed line-clamp-2">{post.preview}</p>
                    <div className="flex items-center gap-4 text-xs text-zinc-500 font-medium">
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                    </div>
                  </div>
                  <div className="self-center">
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                      <ChevronRight className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" />
                    </div>
                  </div>
                </div>
              </MotionDiv>
            </Link>
          ))
        ) : (
          <div className="text-center py-12 text-zinc-500">
            No posts found matching your criteria.
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;