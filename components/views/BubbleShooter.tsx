import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const MotionDiv = motion.div as any;

const API_BASE_URL = 'https://frozenapi-d7gcg0ejhjdbd5h0.eastasia-01.azurewebsites.net';

const BubbleShooter: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [score, setScore] = useState(0);
  const [dropCounter, setDropCounter] = useState(6);
  const [startButtonText, setStartButtonText] = useState('开始游戏');
  const [isGameOver, setIsGameOver] = useState(false);
  const [showChangeLog, setShowChangeLog] = useState(false);
  const [scoreReminder, setScoreReminder] = useState<{ text: string; show: boolean }>({ text: '', show: false });
  
  const [showScoreboard, setShowScoreboard] = useState(false);
  const [scoreboardData, setScoreboardData] = useState<any[]>([]);
  const [isLoadingBoard, setIsLoadingBoard] = useState(false);

  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const gameStateRef = useRef<any>(null);
  const shooterRef = useRef<any>(null);
  const requestRef = useRef<number>();
  const reminderTimeoutRef = useRef<NodeJS.Timeout>();

  const CONFIG = useRef({
    BUBBLE_RADIUS: 20,
    GRID_ROWS: 14,
    GRID_COLS: 12,
    COLORS: ['#FF2D2D', '#0080FF', '#00C853', '#FFD600', '#AA00FF', '#FF6D00'],
    SHOOT_SPEED: 12,
    ANGLE_LIMIT: Math.PI / 8,
    CEILING_DROP_INTERVAL: 6,
    IS_MOBILE: false
  });

  const fetchScoreboard = async () => {
    setIsLoadingBoard(true);
    setShowScoreboard(true);
    try {
      const response = await fetch(`${API_BASE_URL}/read_scores`);
      const data = await response.json();
      setScoreboardData(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoadingBoard(false);
    }
  };

  const submitScore = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) {
      setSubmitError('请同意隐私政策与数据传输条款。');
      return;
    }
    if (!nickname) {
      setSubmitError('请输入昵称。');
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');

    try {
      const response = await fetch(`${API_BASE_URL}/write_score`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          score: score,
          email: email,
          nickname: nickname
        }),
      });

      const data = await response.json();
      
      if (data.success) {
        setIsGameOver(false);
        fetchScoreboard();
      } else {
        setSubmitError('提交失败，请重试。');
      }
    } catch (error) {
      setSubmitError('网络错误，请稍后重试。');
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    CONFIG.current.IS_MOBILE = isMobile;
    CONFIG.current.BUBBLE_RADIUS = isMobile ? 15 : 20;
    
      // ... (inside useEffect, after defining other functions)

const drawPredictionLine = (ctx: CanvasRenderingContext2D) => {
  const game = gameStateRef.current;
  const shooter = shooterRef.current;
  if (!game.isRunning || game.isGameOver) return;
  // Only show prediction when no projectile is flying
  if (shooter.projectile) return;

  const radius = CONFIG.current.BUBBLE_RADIUS;
  const startX = shooter.x;
  const startY = shooter.y;
  const angle = shooter.angle;

  let vx = Math.cos(angle) * CONFIG.current.SHOOT_SPEED;
  let vy = Math.sin(angle) * CONFIG.current.SHOOT_SPEED;
  // Use same sub‑step size as in the game to keep accuracy
  let stepVx = vx / 3;
  let stepVy = vy / 3;

  let x = startX;
  let y = startY;
  const points = [{ x, y }];
  let hit = false;
  let maxSteps = 500; // safety limit

  while (maxSteps-- > 0 && !hit) {
    x += stepVx;
    y += stepVy;

    // Wall collisions (left, right, top)
    if (x - radius <= 0) {
      x = radius;
      stepVx = -stepVx;
    } else if (x + radius >= canvas!.width) {
      x = canvas!.width - radius;
      stepVx = -stepVx;
    }
    if (y - radius <= 0) {
      y = radius;
      stepVy = -stepVy;
    }

    // Check collision with any bubble in the grid
    for (let row = 0; row < CONFIG.current.GRID_ROWS; row++) {
      for (let col = 0; col < CONFIG.current.GRID_COLS; col++) {
        const bubble = game.grid[row][col];
        if (bubble) {
          const pos = getBubblePosition(row, col);
          const dx = x - pos.x;
          const dy = y - pos.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < radius * 2) {
            hit = { x: pos.x, y: pos.y }; // impact point
            break;
          }
        }
      }
      if (hit) break;
    }

    points.push({ x, y });
    if (hit) break;
  }

  // Draw the dotted path
  if (points.length > 1) {
    ctx.beginPath();
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
    ctx.lineWidth = 2;
    ctx.setLineDash([5, 3]);
    ctx.moveTo(points[0].x, points[0].y);
    for (let i = 1; i < points.length; i++) {
      ctx.lineTo(points[i].x, points[i].y);
    }
    ctx.stroke();
    ctx.setLineDash([]);
  }

  // Mark the predicted hit location
  if (hit) {
    ctx.beginPath();
    ctx.arc(hit.x, hit.y, radius * 0.5, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.fill();
  }
};



    const resizeCanvas = () => {
      if (isMobile) {
        const maxWidth = Math.min(window.innerWidth - 20, 400);
        canvas.width = maxWidth;
        canvas.height = window.innerHeight - 200;
        CONFIG.current.GRID_COLS = Math.floor((canvas.width - CONFIG.current.BUBBLE_RADIUS * 2) / (CONFIG.current.BUBBLE_RADIUS * 2)) + 1;
      } else {
        canvas.width = 480;
        canvas.height = 640;
        CONFIG.current.GRID_COLS = 12;
      }
    };
    resizeCanvas();

    class GameState {
      score = 0;
      level = 1;
      shots = 0;
      isRunning = false;
      isGameOver = false;
      grid: any[][] = [];
      particles: any[] = [];
      fallingBubbles: any[] = [];
      topRowOffset = 0;

      constructor() {
        this.reset();
      }

      reset() {
        this.score = 0;
        this.level = 1;
        this.shots = 0;
        this.isRunning = true;
        this.isGameOver = false;
        this.grid = [];
        this.particles = [];
        this.fallingBubbles = [];
        this.topRowOffset = 0;
        this.initGrid();
        
        setScore(0);
        setDropCounter(CONFIG.current.CEILING_DROP_INTERVAL);
        setIsGameOver(false);
        setScoreReminder({ text: '', show: false });
        setNickname('');
        setEmail('');
        setConsent(false);
        setSubmitError('');
      }

      initGrid() {
        for (let row = 0; row < CONFIG.current.GRID_ROWS; row++) {
          this.grid[row] = [];
          const effectiveRow = row + this.topRowOffset;
          const oddRow = effectiveRow % 2 === 1;
          const colsInRow = oddRow ? CONFIG.current.GRID_COLS - 1 : CONFIG.current.GRID_COLS;
          for (let col = 0; col < CONFIG.current.GRID_COLS; col++) {
            if (row < 5 && col < colsInRow) {
              this.grid[row][col] = {
                color: CONFIG.current.COLORS[Math.floor(Math.random() * CONFIG.current.COLORS.length)],
                row: row,
                col: col
              };
            } else {
              this.grid[row][col] = null;
            }
          }
        }
      }

      addScore(points: number) {
        this.score += points;
        setScore(this.score);

        if (points > 0) {
          setScoreReminder({ text: '+' + points, show: true });
          if (reminderTimeoutRef.current) clearTimeout(reminderTimeoutRef.current);
          reminderTimeoutRef.current = setTimeout(() => {
            setScoreReminder(prev => ({ ...prev, show: false }));
          }, 3000);
        }
        
        const remaining = CONFIG.current.CEILING_DROP_INTERVAL - (this.shots % CONFIG.current.CEILING_DROP_INTERVAL);
        setDropCounter(remaining);
      }
    }

    class Shooter {
      x = canvas!.width / 2;
      y = canvas!.height - 50;
      angle = -Math.PI / 2;
      currentBubble: any;
      nextBubble: any;
      projectile: any = null;

      constructor() {
        this.currentBubble = this.generateBubble();
        this.nextBubble = this.generateBubble();
      }

      reset() {
        this.angle = -Math.PI / 2;
        this.currentBubble = this.generateBubble();
        this.nextBubble = this.generateBubble();
        this.projectile = null;
        this.x = canvas!.width / 2;
        this.y = canvas!.height - 50;
      }

      generateBubble() {
        return {
          color: CONFIG.current.COLORS[Math.floor(Math.random() * CONFIG.current.COLORS.length)]
        };
      }

      update(mouseX: number, mouseY: number) {
        const rect = canvas!.getBoundingClientRect();
        const relativeX = mouseX - rect.left;
        const relativeY = mouseY - rect.top;
        const dx = relativeX - this.x;
        const dy = relativeY - this.y;

        if (dy > 0) {
          if (dx < 0) {
            this.angle = -Math.PI + CONFIG.current.ANGLE_LIMIT;
          } else {
            this.angle = -CONFIG.current.ANGLE_LIMIT;
          }
        } else {
          this.angle = Math.atan2(dy, dx);
          const minAngle = -Math.PI + CONFIG.current.ANGLE_LIMIT;
          const maxAngle = -CONFIG.current.ANGLE_LIMIT;
          this.angle = Math.max(minAngle, Math.min(maxAngle, this.angle));
        }
      }

      shoot() {
        if (this.projectile) return false;
        this.projectile = {
          x: this.x,
          y: this.y,
          vx: Math.cos(this.angle) * CONFIG.current.SHOOT_SPEED,
          vy: Math.sin(this.angle) * CONFIG.current.SHOOT_SPEED,
          color: this.currentBubble.color,
          radius: CONFIG.current.BUBBLE_RADIUS
        };
        this.currentBubble = this.nextBubble;
        this.nextBubble = this.generateBubble();
        return true;
      }

      draw(ctx: CanvasRenderingContext2D) {
        if (!this.projectile) {
          drawBubble(ctx, this.x, this.y, this.currentBubble.color);
        }
        drawBubble(ctx, canvas!.width - 40, canvas!.height - 40, this.nextBubble.color, 0.6);
      }
    }

    function drawBubble(ctx: CanvasRenderingContext2D, x: number, y: number, color: string, scale = 1) {
      const radius = CONFIG.current.BUBBLE_RADIUS * scale;
      const gradient = ctx.createRadialGradient(x - radius * 0.3, y - radius * 0.3, 0, x, y, radius);
      gradient.addColorStop(0, '#fff');
      gradient.addColorStop(0.2, color);
      gradient.addColorStop(1, darkenColor(color, 0.3));

      ctx.beginPath();
      ctx.arc(x, y, radius - 1, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(x - radius * 0.3, y - radius * 0.3, radius * 0.2, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
      ctx.fill();
    }

    function darkenColor(color: string, amount: number) {
      const hex = color.replace('#', '');
      const r = Math.max(0, parseInt(hex.substr(0, 2), 16) * (1 - amount));
      const g = Math.max(0, parseInt(hex.substr(2, 2), 16) * (1 - amount));
      const b = Math.max(0, parseInt(hex.substr(4, 2), 16) * (1 - amount));
      return `rgb(${Math.floor(r)}, ${Math.floor(g)}, ${Math.floor(b)})`;
    }

    function getBubblePosition(row: number, col: number) {
      const effectiveRow = row + gameStateRef.current.topRowOffset;
      const oddRow = effectiveRow % 2 === 1;
      const x = CONFIG.current.BUBBLE_RADIUS + col * CONFIG.current.BUBBLE_RADIUS * 2 + (oddRow ? CONFIG.current.BUBBLE_RADIUS : 0);
      const y = CONFIG.current.BUBBLE_RADIUS + row * CONFIG.current.BUBBLE_RADIUS * Math.sqrt(3);
      return { x, y };
    }

    function getGridPosition(x: number, y: number) {
      const row = Math.round((y - CONFIG.current.BUBBLE_RADIUS) / (CONFIG.current.BUBBLE_RADIUS * Math.sqrt(3)));
      const effectiveRow = row + gameStateRef.current.topRowOffset;
      const oddRow = effectiveRow % 2 === 1;
      const col = Math.round((x - CONFIG.current.BUBBLE_RADIUS - (oddRow ? CONFIG.current.BUBBLE_RADIUS : 0)) / (CONFIG.current.BUBBLE_RADIUS * 2));
      return { row, col };
    }

    function getNeighbors(row: number, col: number) {
      const effectiveRow = row + gameStateRef.current.topRowOffset;
      const oddRow = effectiveRow % 2 === 1;
      const offsets = oddRow ? [[-1, 0], [-1, 1], [0, -1], [0, 1], [1, 0], [1, 1]] : [[-1, -1], [-1, 0], [0, -1], [0, 1], [1, -1], [1, 0]];
      const neighbors = [];
      for (const [dr, dc] of offsets) {
        const nr = row + dr;
        const nc = col + dc;
        if (nr >= 0 && nr < CONFIG.current.GRID_ROWS && nc >= 0 && nc < CONFIG.current.GRID_COLS) {
          neighbors.push({ row: nr, col: nc });
        }
      }
      return neighbors;
    }

    function checkMatches(startRow: number, startCol: number) {
      const game = gameStateRef.current;
      const startBubble = game.grid[startRow][startCol];
      if (!startBubble) return 0;

      const color = startBubble.color;
      const visited = new Set();
      const matches = [];
      const queue = [{ row: startRow, col: startCol }];

      visited.add(`${startRow},${startCol}`);
      matches.push({ row: startRow, col: startCol });

      while (queue.length > 0) {
        const current = queue.shift()!;
        const neighbors = getNeighbors(current.row, current.col);

        for (const n of neighbors) {
          const bubble = game.grid[n.row][n.col];
          const key = `${n.row},${n.col}`;
          if (bubble && bubble.color === color && !visited.has(key)) {
            visited.add(key);
            matches.push(n);
            queue.push(n);
          }
        }
      }

      if (matches.length >= 3) {
        for (const m of matches) {
          const pos = getBubblePosition(m.row, m.col);
          createParticles(pos.x, pos.y, game.grid[m.row][m.col].color);
          game.grid[m.row][m.col] = null;
        }
        let totalPoints = matches.length * 10 * (matches.length - 2);
        totalPoints += removeFloatingBubbles();
        return totalPoints;
      }
      return 0;
    }

    function removeFloatingBubbles() {
      const game = gameStateRef.current;
      const connected = new Set();
      for (let col = 0; col < CONFIG.current.GRID_COLS; col++) {
        if (game.grid[0][col]) markConnected(0, col, connected);
      }
      let floatingPoints = 0;
      for (let row = 0; row < CONFIG.current.GRID_ROWS; row++) {
        for (let col = 0; col < CONFIG.current.GRID_COLS; col++) {
          const key = `${row},${col}`;
          if (game.grid[row][col] && !connected.has(key)) {
            const pos = getBubblePosition(row, col);
            game.fallingBubbles.push({
              x: pos.x, y: pos.y, color: game.grid[row][col].color, vy: 0
            });
            game.grid[row][col] = null;
            floatingPoints += 20;
          }
        }
      }
      return floatingPoints;
    }

    function markConnected(row: number, col: number, connected: Set<string>) {
      const key = `${row},${col}`;
      if (connected.has(key)) return;
      connected.add(key);
      const neighbors = getNeighbors(row, col);
      for (const n of neighbors) {
        if (gameStateRef.current.grid[n.row][n.col]) markConnected(n.row, n.col, connected);
      }
    }

    function dropCeiling() {
      const game = gameStateRef.current;
      for (let col = 0; col < CONFIG.current.GRID_COLS; col++) {
        if (game.grid[CONFIG.current.GRID_ROWS - 1][col]) {
          gameOver();
          return;
        }
      }
      for (let row = CONFIG.current.GRID_ROWS - 1; row > 0; row--) {
        for (let col = 0; col < CONFIG.current.GRID_COLS; col++) {
          game.grid[row][col] = game.grid[row - 1][col];
          if (game.grid[row][col]) game.grid[row][col].row = row;
        }
      }
      game.topRowOffset = 1 - game.topRowOffset;
      const effectiveRow = game.topRowOffset;
      const oddRow = effectiveRow % 2 === 1;
      const colsInRow = oddRow ? CONFIG.current.GRID_COLS - 1 : CONFIG.current.GRID_COLS;
      for (let col = 0; col < CONFIG.current.GRID_COLS; col++) {
        if (col < colsInRow && Math.random() < 0.9) {
          game.grid[0][col] = {
            color: CONFIG.current.COLORS[Math.floor(Math.random() * CONFIG.current.COLORS.length)],
            row: 0, col: col
          };
        } else {
          game.grid[0][col] = null;
        }
      }
    }

    function createParticles(x: number, y: number, color: string) {
      for (let i = 0; i < 8; i++) {
        const angle = (Math.PI * 2 / 8) * i;
        gameStateRef.current.particles.push({
          x: x, y: y, vx: Math.cos(angle) * 3, vy: Math.sin(angle) * 3, color: color, life: 1
        });
      }
    }

    function updateParticles() {
      gameStateRef.current.particles = gameStateRef.current.particles.filter((p: any) => {
        p.x += p.vx; p.y += p.vy; p.life -= 0.05; return p.life > 0;
      });
    }

    function updateFallingBubbles() {
      gameStateRef.current.fallingBubbles = gameStateRef.current.fallingBubbles.filter((b: any) => {
        b.vy += 0.5; b.y += b.vy; return b.y < canvas!.height + CONFIG.current.BUBBLE_RADIUS;
      });
    }

    function drawParticles() {
      gameStateRef.current.particles.forEach((p: any) => {
        ctx!.globalAlpha = p.life;
        ctx!.fillStyle = p.color;
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, 5, 0, Math.PI * 2);
        ctx!.fill();
      });
      ctx!.globalAlpha = 1;
    }

    function drawFallingBubbles() {
      gameStateRef.current.fallingBubbles.forEach((b: any) => {
        drawBubble(ctx!, b.x, b.y, b.color);
      });
    }

    function gameOver() {
      gameStateRef.current.isGameOver = true;
      gameStateRef.current.isRunning = false;
      setIsGameOver(true);
    }

    function attachBubbleAt(hitX: number, hitY: number) {
      const game = gameStateRef.current;
      const shooter = shooterRef.current;
      const p = shooter.projectile;
      const gridPos = getGridPosition(p.x, p.y);
      const candidates = [];

      for (let dr = -1; dr <= 1; dr++) {
        for (let dc = -1; dc <= 1; dc++) {
          const r = gridPos.row + dr;
          const c = gridPos.col + dc;
          if (r >= 0 && r < CONFIG.current.GRID_ROWS && c >= 0 && c < CONFIG.current.GRID_COLS && !game.grid[r][c]) {
            const pos = getBubblePosition(r, c);
            const dist = Math.sqrt((p.x - pos.x) ** 2 + (p.y - pos.y) ** 2);
            candidates.push({ row: r, col: c, dist: dist });
          }
        }
      }
      candidates.sort((a, b) => a.dist - b.dist);

      let attachRow, attachCol;
      if (candidates.length > 0) {
        attachRow = candidates[0].row;
        attachCol = candidates[0].col;
      } else {
        attachRow = Math.max(0, Math.min(gridPos.row, CONFIG.current.GRID_ROWS - 1));
        attachCol = Math.max(0, Math.min(gridPos.col, CONFIG.current.GRID_COLS - 1));
        if (game.grid[attachRow][attachCol]) {
          const emptyNeighbors = getNeighbors(attachRow, attachCol).filter(n => !game.grid[n.row][n.col]);
          if (emptyNeighbors.length > 0) {
            attachRow = emptyNeighbors[0].row;
            attachCol = emptyNeighbors[0].col;
          }
        }
      }

      game.grid[attachRow][attachCol] = { color: p.color, row: attachRow, col: attachCol };
      shooter.projectile = null;
      game.shots++;

      const points = checkMatches(attachRow, attachCol);
      if (points > 0) game.addScore(points);
      if (game.shots % CONFIG.current.CEILING_DROP_INTERVAL === 0) dropCeiling();
      
      for (let col = 0; col < CONFIG.current.GRID_COLS; col++) {
        if (game.grid[CONFIG.current.GRID_ROWS - 1][col]) {
          gameOver();
          return;
        }
      }

      if (game.shots === 0 && !shooter.projectile) {
        setStartButtonText('开始游戏');
      } else {
        setStartButtonText('重新开始');
      }
      
      const remaining = CONFIG.current.CEILING_DROP_INTERVAL - (game.shots % CONFIG.current.CEILING_DROP_INTERVAL);
      setDropCounter(remaining);
    }

    function updateProjectile() {
      const shooter = shooterRef.current;
      if (!shooter.projectile) return;
      const p = shooter.projectile;
      const steps = 3;
      const stepVx = p.vx / steps;
      const stepVy = p.vy / steps;

      for (let i = 0; i < steps; i++) {
        p.x += stepVx;
        p.y += stepVy;

        if (p.x - p.radius <= 0) { p.vx = Math.abs(p.vx); p.x = p.radius; }
        else if (p.x + p.radius >= canvas!.width) { p.vx = -Math.abs(p.vx); p.x = canvas!.width - p.radius; }
        if (p.y - p.radius <= 0) { p.vy = Math.abs(p.vy); p.y = p.radius; }

        let hitBubble = null;
        let minDist = Infinity;
        const game = gameStateRef.current;

        for (let row = 0; row < CONFIG.current.GRID_ROWS; row++) {
          for (let col = 0; col < CONFIG.current.GRID_COLS; col++) {
            const bubble = game.grid[row][col];
            if (bubble) {
              const pos = getBubblePosition(row, col);
              const dx = p.x - pos.x;
              const dy = p.y - pos.y;
              const dist = Math.sqrt(dx * dx + dy * dy);
              if (dist < CONFIG.current.BUBBLE_RADIUS * 2 && dist < minDist) {
                minDist = dist;
                hitBubble = { row, col, x: pos.x, y: pos.y };
              }
            }
          }
        }

        if (hitBubble) {
          attachBubbleAt(hitBubble.x, hitBubble.y);
          return;
        }
      }
    }


    function drawGrid() {
      const game = gameStateRef.current;
      for (let row = 0; row < CONFIG.current.GRID_ROWS; row++) {
        for (let col = 0; col < CONFIG.current.GRID_COLS; col++) {
          const bubble = game.grid[row][col];
          if (bubble) {
            const pos = getBubblePosition(row, col);
            drawBubble(ctx!, pos.x, pos.y, bubble.color);
          }
        }
      }
    }

    const gameLoop = () => {
      if (!gameStateRef.current.isRunning) {
        requestRef.current = requestAnimationFrame(gameLoop);
        return;
      }

      ctx!.fillStyle = '#1c1c1e';
      ctx!.fillRect(0, 0, canvas!.width, canvas!.height);

      ctx!.strokeStyle = 'rgba(255, 255, 255, 0.05)';
      ctx!.lineWidth = 1;
      for (let row = 0; row < CONFIG.current.GRID_ROWS; row++) {
        for (let col = 0; col < CONFIG.current.GRID_COLS; col++) {
          const pos = getBubblePosition(row, col);
          ctx!.beginPath();
          ctx!.arc(pos.x, pos.y, CONFIG.current.BUBBLE_RADIUS, 0, Math.PI * 2);
          ctx!.stroke();
        }
      }

      updateProjectile();
      updateParticles();
      updateFallingBubbles();

      drawGrid();
      drawParticles();
      drawFallingBubbles();

      if (shooterRef.current.projectile) {
        drawBubble(ctx!, shooterRef.current.projectile.x, shooterRef.current.projectile.y, shooterRef.current.projectile.color);
      }

      shooterRef.current.update(mouseRef.current.x, mouseRef.current.y);
      shooterRef.current.draw(ctx!);
      // Inside the gameLoop, after drawing the shooter:
      shooterRef.current.draw(ctx!);
      drawPredictionLine(ctx!);  // <-- add this line
      requestRef.current = requestAnimationFrame(gameLoop);
    };

    gameStateRef.current = new GameState();
    shooterRef.current = new Shooter();
    requestRef.current = requestAnimationFrame(gameLoop);

    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []); 

  const mouseRef = useRef({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    let clientX, clientY;
    if ('touches' in e) {
       clientX = e.touches[0].clientX;
       clientY = e.touches[0].clientY;
    } else {
       clientX = (e as React.MouseEvent).clientX;
       clientY = (e as React.MouseEvent).clientY;
    }
    
    mouseRef.current = { x: clientX, y: clientY };
  };

  const handleClick = (e: React.MouseEvent | React.TouchEvent) => {
  if ((e.target as HTMLElement).tagName === 'BUTTON') return;
  if (!gameStateRef.current?.isRunning) return;

  const canvas = canvasRef.current;
  if (!canvas) return;

  // Get touch/mouse coordinates
  let clientX, clientY;
  if ('touches' in e) {
    clientX = e.touches[0].clientX;
    clientY = e.touches[0].clientY;
  } else {
    clientX = (e as React.MouseEvent).clientX;
    clientY = (e as React.MouseEvent).clientY;
  }

  const rect = canvas.getBoundingClientRect();
  const relativeX = clientX - rect.left;
  const relativeY = clientY - rect.top;

  if (CONFIG.current.IS_MOBILE) {
    // Always update aim first
    shooterRef.current.update(clientX, clientY);

    // Check if the touch is near the shooter's current bubble
    const dx = relativeX - shooterRef.current.x;
    const dy = relativeY - shooterRef.current.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist <= CONFIG.current.BUBBLE_RADIUS * 1.5) {
      // Shoot only when tapping the bubble itself
      if (shooterRef.current.shoot()) {
        setStartButtonText('重新开始');
      }
    }
    // Otherwise just aim (no shot)
  } else {
    // Desktop: shoot on click (aim is already updated by mouse move)
    if (shooterRef.current.shoot()) {
      setStartButtonText('重新开始');
    }
  }
};

  const handleStartReset = () => {
    gameStateRef.current.reset();
    shooterRef.current.reset();
    setStartButtonText('开始游戏');
  };

  return (
    <div className="w-full min-h-[calc(100vh-64px)] flex flex-col items-center justify-center p-4">
      <MotionDiv
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-[600px] rounded-2xl overflow-hidden shadow-2xl border border-white/5 bg-[#1c1c1e] relative"
      >
        <div className="flex justify-between items-center p-4 text-white bg-white/5 backdrop-blur-md">
          <div 
            className="bg-white/10 px-4 py-2 rounded-full backdrop-blur-md cursor-pointer hover:bg-white/20 transition-colors"
            onClick={fetchScoreboard}
            title="点击查看排行榜"
          >
            <div className="text-xs opacity-80">得分 (查看排行)</div>
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-bold text-yellow-400">{score}</span>
              <AnimatePresence>
                {scoreReminder.show && (
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-sm font-bold text-green-400"
                  >
                    {scoreReminder.text}
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <button 
              onClick={() => setShowChangeLog(true)}
              className="text-xs text-indigo-300 bg-white/10 px-3 py-1 rounded-full hover:bg-white/20 transition-colors border border-white/10"
            >
              Version 1.0
            </button>
          </div>

          <div className="bg-white/10 px-4 py-2 rounded-full backdrop-blur-md">
            <div className="text-xs opacity-80">刷新倒数</div>
            <div className="text-xl font-bold text-white">{dropCounter}</div>
          </div>
        </div>

        <div className="relative flex flex-col items-center bg-[#1c1c1e]">
          <canvas
            ref={canvasRef}
            onMouseMove={handleMouseMove}
            onTouchMove={handleMouseMove}
            onClick={handleClick}
            onTouchStart={handleClick}
            className="cursor-crosshair touch-none shadow-2xl rounded-b-xl"
            style={{ maxWidth: '100%' }}
          />
          
          <div className="p-4 w-full flex justify-center gap-4">
            <button
              onClick={handleStartReset}
              className="px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full font-bold shadow-lg hover:shadow-indigo-500/25 transform hover:-translate-y-0.5 transition-all"
            >
              {startButtonText}
            </button>
          </div>
          
          <p className="text-zinc-500 text-sm mb-2">
         {CONFIG.current.IS_MOBILE ? "在画布上拖动瞄准，点击待发射泡泡即可发射 | 三个相同颜色连在一起即可消除": "鼠标移动瞄准，点击发射泡泡 | 三个相同颜色连在一起即可消除"}
          </p>

          <p className="text-zinc-600 text-xs mb-4">Frozen with AI coding</p>
        </div>

        <AnimatePresence>
          {isGameOver && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            >
              <motion.div
                initial={{ scale: 0.8, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                className="bg-[#1c1c1e] w-full max-w-md p-6 rounded-2xl text-left text-white shadow-2xl border border-white/10 flex flex-col"
              >
                <h2 className="text-2xl font-bold mb-2 text-center text-indigo-400">游戏结束！</h2>
                <div className="text-4xl font-bold text-yellow-400 mb-6 text-center">{score} 分</div>
                
                <form onSubmit={submitScore} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-zinc-400 mb-1">昵称</label>
                    <input 
                      type="text" 
                      required
                      maxLength={50}
                      value={nickname}
                      onChange={(e) => setNickname(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                      placeholder="输入您的昵称。请不要使用真实姓名。"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-400 mb-1">邮箱（不会被发送垃圾邮件和广告）</label>
                    <input 
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                      placeholder="接收游戏排行相关信息。"
                    />
                  </div>
                  
                  <div className="bg-white/5 p-3 rounded-lg border border-white/5 flex items-start gap-3 mt-2">
                    <input 
                      type="checkbox" 
                      id="consent"
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      className="mt-1 w-4 h-4 rounded bg-white/10 border-white/20 text-indigo-500 focus:ring-indigo-500"
                    />
                    <label htmlFor="consent" className="text-xs text-zinc-400 leading-relaxed cursor-pointer">
                      我明确同意将我的昵称、邮箱及游戏得分数据传输并存储至<strong>中国大陆境外</strong>的服务器上，仅用于排行榜功能的展示。
                    </label>
                  </div>

                  {submitError && <div className="text-red-400 text-sm text-center">{submitError}</div>}

                  <div className="flex gap-3 mt-6">
                    <button
                      type="button"
                      onClick={handleStartReset}
                      className="flex-1 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl font-bold transition-colors"
                    >
                      跳过并重玩
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 py-3 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-xl font-bold transition-colors"
                    >
                      {isSubmitting ? '提交中...' : '提交分数'}
                    </button>
                  </div>
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showScoreboard && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
              onClick={() => setShowScoreboard(false)}
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-[#1c1c1e] w-full max-w-md max-h-[80vh] rounded-2xl border border-white/10 shadow-2xl flex flex-col"
              >
                <div className="p-4 border-b border-white/10 flex justify-between items-center">
                  <h3 className="text-xl font-bold text-yellow-400">全球排行榜</h3>
                  <button onClick={() => setShowScoreboard(false)} className="text-zinc-400 hover:text-white">
                    <X className="w-6 h-6" />
                  </button>
                </div>
                
                <div className="p-0 overflow-y-auto">
                  {isLoadingBoard ? (
                    <div className="p-8 text-center text-zinc-400">加载中...</div>
                  ) : scoreboardData.length === 0 ? (
                    <div className="p-8 text-center text-zinc-400">暂无数据，快来抢占第一名！</div>
                  ) : (
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-white/5 text-xs text-zinc-400 uppercase tracking-wider">
                          <th className="p-4 font-medium">排名</th>
                          <th className="p-4 font-medium">玩家</th>
                          <th className="p-4 font-medium text-right">得分</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5">
                        {scoreboardData.map((row, index) => (
                          <tr key={index} className="hover:bg-white/5 transition-colors">
                            <td className="p-4">
                              <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold ${
                                index === 0 ? 'bg-yellow-500 text-yellow-900' :
                                index === 1 ? 'bg-zinc-300 text-zinc-800' :
                                index === 2 ? 'bg-amber-600 text-amber-100' :
                                'bg-white/10 text-zinc-400'
                              }`}>
                                {index + 1}
                              </span>
                            </td>
                            <td className="p-4 font-medium text-white">{row.nickname}</td>
                            <td className="p-4 text-right font-bold text-indigo-400">{row.score}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>

                <div className="p-4 border-t border-white/10 text-center">
                  <button
                    onClick={() => setShowScoreboard(false)}
                    className="px-6 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full text-sm font-bold transition-colors"
                  >
                    关闭
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showChangeLog && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
              onClick={() => setShowChangeLog(false)}
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-[#1c1c1e] w-full max-w-md max-h-[80vh] rounded-2xl border border-white/10 shadow-2xl flex flex-col"
              >
                <div className="p-4 border-b border-white/10 flex justify-between items-center">
                  <h3 className="text-xl font-bold text-yellow-400">更新日志</h3>
                  <button onClick={() => setShowChangeLog(false)} className="text-zinc-400 hover:text-white">
                    <X className="w-6 h-6" />
                  </button>
                </div>
                
                <div className="p-4 overflow-y-auto space-y-4 text-left">
                  <div className="bg-white/5 p-4 rounded-xl">
                    <div className="text-green-400 font-bold text-sm mb-2">2026-03-04 Version 1.0</div>
                    <ul className="list-disc list-inside text-zinc-300 text-sm space-y-1">
                      <li>增加了全预测辅助线;</li>
                      <li>修改了手机端操作逻辑;</li>
                      <li>新增了全球排行榜功能，点击左上角分数即可查看。</li>
                      
                    </ul>
                  </div>

                  <div className="bg-white/5 p-4 rounded-xl">
                    <div className="text-green-400 font-bold text-sm mb-2">2026-02-19 Beta 1.3</div>
                    <ul className="list-disc list-inside text-zinc-300 text-sm space-y-1">
                      <li>修复了得分提示问题。</li>
                    </ul>
                  </div>

                  <div className="bg-white/5 p-4 rounded-xl">
                    <div className="text-green-400 font-bold text-sm mb-2">2026-02-18 Beta 1.2</div>
                    <ul className="list-disc list-inside text-zinc-300 text-sm space-y-1">
                      <li>增加了得分提示、更新日志；</li>
                      <li>修复了在重新开始游戏时，下方待发射的球颜色不变的问题；</li>
                      <li>修复了在第二次开炮后，开始游戏按钮才变成重新开始的问题；</li>
                      <li>修复了PC端泡泡爆炸后没有粒子效果的问题；</li>
                      <li>将版本号的显示位置修改到了页面居中顶部。</li>
                    </ul>
                  </div>

                  <div className="bg-white/5 p-4 rounded-xl">
                    <div className="text-green-400 font-bold text-sm mb-2">2026-02-17 Beta 1.1</div>
                    <ul className="list-disc list-inside text-zinc-300 text-sm space-y-1">
                      <li>删除了暂停按键、等级显示；</li>
                      <li>修复了在有泡泡飞行时，按下“重新开始”，飞行中的泡泡不会消失的问题；</li>
                      <li>修复了手机端在待发射泡泡下方点击时，泡泡会发射的问题；</li>
                      <li>修复了第一炮未发射时，右下角显示的泡泡是实际上是两炮后的颜色的问题；</li>
                      <li>增加了刷新倒数器。</li>
                    </ul>
                  </div>
                </div>

                <div className="p-4 border-t border-white/10 text-center">
                  <button
                    onClick={() => setShowChangeLog(false)}
                    className="px-6 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full text-sm font-bold transition-colors"
                  >
                    关闭
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </MotionDiv>
    </div>
  );
};

export default BubbleShooter;