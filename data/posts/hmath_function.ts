import { BlogPost } from '../../types';

export const post: BlogPost = {
  id: '11',
  title: '高中数学 函数',
  slug: 'hmath_function',
  date: 'Jan 03, 2025',
  preview: '基本定义 给定一个数集$A$，假设其中的元素为$x$，对$A$中的元素$x$施加对应法则$f$，记作$f(x)$，得到另一数集$B$...',
  readTime: '1 min read',
  tags: ['High School', 'Math'],
  content: `
      <ol class="list-decimal pl-6 space-y-4 text-zinc-300 mb-8">
        <li>
          <p class="mb-2">基本定义</p>
          <p class="mb-2">给定一个数集$A$，假设其中的元素为$x$，对$A$中的元素$x$施加对应法则$f$，记作$f(x)$，得到另一数集$B$，假设$B$中的元素为$y$，则$y$与$x$之间的等量关系可以用$y=f(x)$表示。</p>
        </li>
        <li>
          <p class="mb-2">幂函数</p>
          <ol class="list-decimal pl-6 mt-2 space-y-2">
            <li>
              <p class="mb-2">所有幂函数一定过定点$(1,1)$.</p>
            </li>
            <li>
              <p class="mb-2">对于$y=x^k$，在$(0,+\infty)$上均有定义。</p>
              <p class="mb-2">$k&lt;0$时，在$x=0$上无意义。</p>
              <p class="mb-2">其余地按情况判定在$(-\infty,0)$上是否有意义。</p>
            </li>
          </ol>
        </li>
        <li>
          <p class="mb-2">指数函数</p>
          <ol class="list-decimal pl-6 mt-2 space-y-2">
            <li>
              <p class="mb-2">对于函数$f(x)=a^x(a&gt;0,a\neq1)$，$D=R$，$f(x)=(0,+\infty)$，非奇非偶，过定点$(0,1)$。</p>
              <p class="mb-2">当$a&gt;1$时，函数在$R$上增。$a&lt;1$时，函数在$R$上减。</p>
            </li>
          </ol>
        </li>
        <li>
          <p class="mb-2">对数函数</p>
          <ol class="list-decimal pl-6 mt-2 space-y-2">
            <li>对于函数$f(x)=\log_ax(a&gt;0,a\neq1)$，$D=(0,+\infty)$，$f(x)\in R$，非奇非偶，过定点$(1,0)$。</li>
            <li>当$a&gt;1$时，在$R$上单调增。$a\in(0,1)$时，在$R$上单调减。</li>
          </ol>
          <p class="mb-2">eg:</p>
          <ol class="list-decimal pl-6 mt-2 space-y-2">
            <li>
              <p class="mb-2">2025虹口一模 函数$y=\ln\\frac{x}{x-1}$的定义域是_____。</p>
              <p class="mb-2">求解$\\frac{x}{x-1}&gt;0$，则$x\\in(-\\infty,0)\\cup(1,+\\infty)$，即$D=(-\\infty,0)\\cup(1,+\\infty)$。</p>
            </li>
            <li>
              <p class="mb-2">2025虹口一模 设$a&gt;0$且$a\\neq1$，则函数$y=2+\\log_ax$图像恒过的定点为______</p>
              <p class="mb-2">$y=\\log_ax$过定点$(1,0)$，此函数将其向上平移$2$，故过定点$(1,2)$。</p>
            </li>
          </ol>
        </li>
        <li>
          <p class="mb-2">奇偶性判定</p>
          <ol class="list-decimal pl-6 mt-2 space-y-2">
            <li>
              <p class="mb-2">检查$D$是否关于原点对称。</p>
            </li>
            <li>
              <p class="mb-2">检查$f(x)=\\pm f(x)$是否成立（定义）。</p>
              <p class="mb-2">对非奇非偶函数的证明可以举反例。</p>
            </li>
            <li>
              <p class="mb-2">偶$\\pm$偶=偶，奇$\\times$偶=奇，偶$\\times$偶=偶</p>
            </li>
          </ol>
        </li>
        <li>
          <p class="mb-2">奇偶性的性质</p>
          <p class="mb-2">若奇函数$y=f(x)$在$x=0$上有定义，则$f(0)=0$。</p>
          <p class="mb-2">证明时需注意：1.要在$x=0$上有定义；2.$f(0)=0$是$f(x)$为奇函数的必要非充分条件。</p>
        </li>
        <li>
          <p class="mb-2">有条件$f(x+T)=f(x)$的，可知$f(x)$存在周期性，$T$为函数的一个周期，但不一定是最小正周期。</p>
          <p class="mb-2">有条件$f(x+a)=f(b-x)$的，$f(x)$图像关于$x=\\frac{a+b}2$对称。</p>
        </li>
        <li>
          <p class="mb-2">单调性</p>
          <ol class="list-decimal pl-6 mt-2 space-y-2">
            <li>$\\forall x_1&lt;x_2\\in D$，
              <ol class="list-decimal pl-6 mt-2 space-y-2">
                <li>
                  <p class="mb-2">若$f(x_1)\\leq f(x_2)$，则$f(x)$为$D$上的增函数。</p>
                  <p class="mb-2">$f(x_1)&lt;f(x_2)$，则$f(x)$在$D$上严格增。</p>
                </li>
                <li>
                  <p class="mb-2">反之减函数、严格减（偷懒不写了）。</p>
                </li>
              </ol>
            </li>
            <li>复合函数的单调性：同增异减。</li>
          </ol>
        </li>
        <li>
          <p class="mb-2">零点存在性定理：</p>
          <p class="mb-2">当$y=f(x)$在$D=[a,b]$上连续，$f(a)\\times f(b)&lt;0$，则$f(x)$在$[a,b]$上<strong class="text-white">至少</strong>存在一个实数$c$，使得$f(c)=0$。</p>
          <p class="mb-2">$c$是$f(x)$的一个零点。（零点<strong class="text-white">不</strong>是$(c,0)$！！！！！）</p>
        </li>
        <li>
          <p class="mb-2">三角函数</p>
          <ol class="list-decimal pl-6 mt-2 space-y-2">
            <li>对于$f(x)=\\sin x$，$D=R$，$f(x)\\in[-1,1]$，$T_{\\min}=2\\pi$，在$[2k\\pi-\\frac\\pi2,2k\\pi+\\frac\\pi2]$上增，在$[2k\\pi+\\frac\\pi2,2k\\pi+\\frac32\\pi]$上减，奇函数，对称轴$x=k\\pi+\\frac\\pi2$，对称中心$(k\\pi,0)$。</li>
            <li>对于$f(x)=\\cos x$，$D=R$，$f(x)\\in[-1,1]$，$T_{\\min}=2\\pi$，在$[2k\\pi-\\pi,2k\\pi]$上增，在$[2k\\pi,2k\\pi+\\pi]$上减，偶函数，对称轴$x=k\\pi$，对称中心$(k\\pi+\\frac\\pi2,0)$。</li>
            <li>对于$f(x)=\\tan x$，$D={x|x\\neq k\\pi+\\frac\\pi2,k\\in Z}$，$f(x)\\in R$，$T_{\\min}=\\pi$，在$(k\\pi-\\frac\\pi2,k\\pi+\\frac\\pi2)$上增，无减区间，奇函数，无对称轴，对称中心$(\\frac{k\\pi}{2},0)$。</li>
            <li>对于$y=A\\sin(\\omega x+\\varphi)$，$A$是振幅，$\\omega$是圆频率，$\\varphi$是初始相位。</li>
            <li>辅助角公式$a\\sin x+b\\cos x=\\sqrt{a^2+b^2}\\sin(x+\\arctan\\frac ba)$。</li>
          </ol>
          <p class="mb-2">eg:</p>
          <ol class="list-decimal pl-6 mt-2 space-y-2">
            <li>
              <p class="mb-2">2025虹口一模 对$f(x)=\\sin\\omega x,x&gt;0$，当$T_{min}=2\\pi$时，求$y=f(x)+\\cos x$在$[0,\\frac\\pi2]$上的最大值。</p>
              <p class="mb-2">$T=\\frac{2\\pi}{\\omega}=2\\pi\\Rightarrow\\omega=1$，</p>
              <p class="mb-2">$y=\\sin x+\\cos x=\\sqrt2\\sin(x+\\frac\\pi4)$。</p>
              <p class="mb-2">所以$x+\\frac\\pi4\\in[\\frac\\pi4,\\frac34\\pi]$。</p>
              <p class="mb-2">当$x+\\frac\\pi4=\\frac\\pi2$时，$x=\\frac\\pi4$，$y_{\\max}=2$。</p>
            </li>
            <li></li>
          </ol>
        </li>
        <li>
          <p class="mb-2">分段函数</p>
          <p class="mb-2">看着解就行了（）。</p>
          <p class="mb-2">eg:</p>
          <ol class="list-decimal pl-6 mt-2 space-y-2">
            <li>
              <p class="mb-2">2025虹口一模 已知$f(x)=\\begin{cases}x^2-x,x\\geq0\\\\f(-x),x&lt;0\\end{cases}$，则$f(x)\\leq6$的解集为______</p>
              <p class="mb-2">分别针对$x\\geq0$时和$x&lt;0$时求解。</p>
              <p class="mb-2">当$x\\geq0$时，$f(x)\\leq6\\Rightarrow x\\in[0,3]$。</p>
              <p class="mb-2">当$x&lt;0$时，$f(x)\\leq6\\Rightarrow x\\in[-3,0)$</p>
              <p class="mb-2">两个解集取并，答案为$[-3,3]$。</p>
            </li>
          </ol>
        </li>
      </ol>
    `
};
