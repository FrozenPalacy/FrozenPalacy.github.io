import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import parse, { DOMNode, Element } from 'html-react-parser';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { posts } from '../../data/posts';

const MotionDiv = motion.div as any;

const BlogPostDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const post = posts.find(p => p.slug === slug);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Trigger MathJax typeset
  useEffect(() => {
    if ((window as any).MathJax && post) {
      // Small delay to ensure content is rendered
      setTimeout(() => {
        (window as any).MathJax.Hub.Queue(["Typeset", (window as any).MathJax.Hub]);
      }, 100);
    }
  }, [post]);

  if (!post) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] text-zinc-400">
        <p className="mb-4">Post not found</p>
        <button onClick={() => navigate('/blogs')} className="text-blue-400 hover:underline">
          Back to Notes
        </button>
      </div>
    );
  }

  const getText = (node: any): string => {
    if (node.type === 'text') return node.data;
    if (node.children) return node.children.map(getText).join('');
    return '';
  };

  const options = {
    replace: (domNode: DOMNode) => {
      if (domNode instanceof Element && domNode.name === 'pre') {
        const codeNode = domNode.children[0];
        if (codeNode instanceof Element && codeNode.name === 'code') {
          const className = codeNode.attribs.class || '';
          const languageMatch = className.match(/language-(\w+)/);
          const language = languageMatch ? languageMatch[1] : 'text';
          const codeContent = getText(codeNode);

          return (
            <div className="rounded-lg overflow-hidden my-4 border border-white/10 text-sm">
              <SyntaxHighlighter
                language={language}
                style={atomDark}
                customStyle={{ margin: 0, padding: '1.5rem', background: '#18181b' }}
                wrapLongLines={true}
              >
                {codeContent}
              </SyntaxHighlighter>
            </div>
          );
        }
      }
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4 md:p-8 pt-20 pb-32">
      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Link 
          to="/blogs"
          className="mb-8 group flex items-center gap-2 text-zinc-400 hover:text-white transition-colors inline-flex"
        >
          <div className="p-2 rounded-full bg-zinc-800/50 group-hover:bg-zinc-800 border border-white/5 transition-all">
            <ArrowLeft className="w-4 h-4" />
          </div>
          <span className="text-sm font-medium">Back to Notes</span>
        </Link>

        {post.image && (
          <div className="mb-8 rounded-3xl overflow-hidden border border-white/5 shadow-2xl aspect-video relative bg-zinc-900">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover opacity-90" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#000] via-transparent to-transparent opacity-60" />
          </div>
        )}

        <div className="mb-10">
           <div className="flex gap-2 mb-4">
            {post.tags.map(tag => (
              <span key={tag} className="text-xs font-semibold px-2.5 py-1 bg-blue-500/10 text-blue-400 rounded-lg border border-blue-500/20">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">{post.title}</h1>
          
          <div className="flex items-center gap-6 text-sm text-zinc-500 border-b border-white/5 pb-8">
            <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {post.date}</span>
            <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> {post.readTime}</span>
            <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-zinc-500"/> Frozen Blog</span>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none text-gray-300">
          {parse(post.content, options)}
        </div>
      </MotionDiv>
    </div>
  );
};

export default BlogPostDetail;
