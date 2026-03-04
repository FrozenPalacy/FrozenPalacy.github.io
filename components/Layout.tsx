import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="min-h-screen bg-black text-slate-200 selection:bg-blue-500/30">
      {/* Sticky Header */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-black/50 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div 
            className="font-bold text-xl tracking-tighter text-white cursor-pointer"
            onClick={() => navigate('/')}
          >
            Frozen<span className="text-zinc-500">Site</span>
          </div>
          
          <div className="flex items-center gap-6">
            {!isHome && (
              <button 
                onClick={() => navigate('/')}
                className="p-2 rounded-full hover:bg-white/10 transition-colors text-sm font-medium flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" /> <span className="hidden md:inline">Back</span>
              </button>
            )}
            <div className="hidden md:flex gap-6 text-sm font-medium text-zinc-400">
               <Link 
                to="/blogs" 
                className={`hover:text-white transition-colors ${location.pathname.startsWith('/blogs') || location.pathname.startsWith('/posts') ? 'text-white' : ''}`}
               >
                 Notes
               </Link>
               <Link to="/about" className={`hover:text-white transition-colors ${location.pathname === '/about' ? 'text-white' : ''}`}>About</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16 pb-24">
        {children}
      </main>

      {/* Simple Footer */}
      <footer className="border-t border-white/5 py-8 text-center text-zinc-600 text-sm">
        <p>&copy; {new Date().getFullYear()} Frozen with AI coding.</p>
      </footer>
    </div>
  );
};

export default Layout;