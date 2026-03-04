import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RotateCcw, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const MotionDiv = motion.div as any;
const MotionButton = motion.button as any;

const Games: React.FC = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = (index: number) => {
    if (board[index] || winner) return;
    const newBoard = [...board];
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };

  function calculateWinner(squares: any[]) {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8 pt-20 h-full flex flex-col items-center">
      <MotionDiv
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-white mb-2">Arcade</h2>
        <p className="text-zinc-400">Take a break. Play a round.</p>
      </MotionDiv>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        {/* Tic Tac Toe */}
        <div className="bg-[#1c1c1e] p-8 rounded-3xl border border-white/5 shadow-2xl flex flex-col items-center">
          <h3 className="text-xl font-bold text-white mb-6">Tic Tac Toe</h3>
          <div className="grid grid-cols-3 gap-2 mb-6">
            {board.map((square, i) => (
              <MotionButton
                key={i}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleClick(i)}
                className={`w-16 h-16 md:w-20 md:h-20 rounded-xl text-2xl font-bold flex items-center justify-center transition-colors ${
                  square 
                    ? 'bg-zinc-800 text-white' 
                    : 'bg-zinc-900/50 hover:bg-zinc-800 text-transparent'
                } ${
                  square === 'X' ? 'text-blue-400' : square === 'O' ? 'text-purple-400' : ''
                }`}
              >
                {square}
              </MotionButton>
            ))}
          </div>

          <div className="flex items-center justify-between w-full max-w-[240px]">
            <div className="text-lg font-medium text-white">
              {winner 
                ? <span className="text-emerald-400">Winner: {winner}</span> 
                : board.every(Boolean) 
                  ? <span className="text-zinc-400">Draw</span>
                  : <span>Next: <span className={isXNext ? 'text-blue-400' : 'text-purple-400'}>{isXNext ? 'X' : 'O'}</span></span>
              }
            </div>
            <button 
              onClick={resetGame}
              className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            >
              <RotateCcw className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        {/* Bubble Shooter Card */}
        <Link to="/games/bubbleshooter" className="group">
          <MotionDiv
            whileHover={{ y: -5 }}
            className="bg-[#1c1c1e] p-8 rounded-3xl border border-white/5 shadow-2xl h-full flex flex-col items-center justify-center text-center hover:bg-[#2c2c2e] transition-colors cursor-pointer relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 mb-6 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Play className="w-8 h-8 text-white fill-current" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2 relative z-10">Bubble Shooter</h3>
            <p className="text-zinc-400 mb-6 relative z-10">Classic arcade fun. Match colors, pop bubbles, and clear the board.</p>
            <span className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium text-white group-hover:bg-white/20 transition-colors relative z-10">
              Play Now
            </span>
          </MotionDiv>
        </Link>
      </div>
    </div>
  );
};

export default Games;
