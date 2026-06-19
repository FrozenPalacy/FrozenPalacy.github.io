import { BlogPost } from '../../types';

export const post: BlogPost = {
  id: '22',
  title: '时间复杂度',
  slug: 'oi_timecomplexity',
  date: 'Sep 12, 2023',
  preview: '单循环 eg Code void fun(int n) { int i = 0; while (i * i * i <= n) i++; } 次数 0 1 2 条件（iii） 0 1 2^3 etc. 规律：当执行至第k次时...',
  readTime: '2 min read',
  tags: ['OI'],
  content: `
      <p class="mb-4 text-zinc-300">#OI - 时间复杂度</p>
      <ol class="list-decimal pl-6 space-y-4 text-zinc-300 mb-8">
        <li>
          <p class="mb-2">单循环</p>
          <p class="mb-2">eg Code</p>
          <pre class="bg-zinc-900 p-4 rounded-lg overflow-x-auto mb-4"><code class="language-cpp text-sm text-zinc-300">void fun(int n)
{
    int i = 0;
    while (i * i * i &lt;= n)
        i++;
}</code></pre>
          <div class="overflow-x-auto mb-8">
            <table class="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th class="border-b border-zinc-700 p-2 text-white">次数</th>
                  <th class="border-b border-zinc-700 p-2 text-white">$0$</th>
                  <th class="border-b border-zinc-700 p-2 text-white">1</th>
                  <th class="border-b border-zinc-700 p-2 text-white">2</th>
                </tr>
              </thead>
              <tbody class="text-zinc-300">
                <tr>
                  <td class="border-b border-zinc-800 p-2">条件（i*i*i）</td>
                  <td class="border-b border-zinc-800 p-2">0</td>
                  <td class="border-b border-zinc-800 p-2">1</td>
                  <td class="border-b border-zinc-800 p-2">2^3</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p class="mb-2">etc.</p>
          <p class="mb-2">规律：当执行至第$k$次时，条件数字即为$k^3$.</p>
          <p class="mb-2">设$k^3\\leq n$。令$n\\rightarrow\\infty$，则$k^3=n$.</p>
          <p class="mb-2">则$k=\\sqrt[3]{n}$.此算法的时间复杂度即为$O(\\sqrt{n})$.（略去了常数因子）</p>
          <p class="mb-2">例2</p>
          <pre class="bg-zinc-900 p-4 rounded-lg overflow-x-auto mb-4"><code class="language-cpp text-sm text-zinc-300">void fun(int n)
{
    int i = 1;
    while (i &lt;= n)
        i *= 2;
}</code></pre>
          <div class="overflow-x-auto mb-8">
            <table class="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th class="border-b border-zinc-700 p-2 text-white">次数</th>
                  <th class="border-b border-zinc-700 p-2 text-white">$0$</th>
                  <th class="border-b border-zinc-700 p-2 text-white">1</th>
                  <th class="border-b border-zinc-700 p-2 text-white">2</th>
                </tr>
              </thead>
              <tbody class="text-zinc-300">
                <tr>
                  <td class="border-b border-zinc-800 p-2">条件（i）</td>
                  <td class="border-b border-zinc-800 p-2">1</td>
                  <td class="border-b border-zinc-800 p-2">2</td>
                  <td class="border-b border-zinc-800 p-2">2^2</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p class="mb-2">规律：同上，$2^k=n$，$k=\\log_2n$.</p>
          <p class="mb-2">$\\therefore O(\\log n)$.</p>
          <p class="mb-2">例3</p>
          <pre class="bg-zinc-900 p-4 rounded-lg overflow-x-auto mb-4"><code class="language-cpp text-sm text-zinc-300">void fun(int n)
{
    int x = 0;
    while (n &gt;= (x + 1) * (x + 1))
        x += 1;
}</code></pre>
          <p class="mb-2">条件为$(x+1)^2$，同样列表可知$(k+1)^2=n$，$k=\\sqrt{n}-1$.</p>
          <p class="mb-2"><strong class="text-white">在时间复杂度中，常数项一般略去。</strong></p>
          <p class="mb-2">$\\therefore O(\\sqrt{n})$.</p>
        </li>
        <li>
          <p class="mb-2">多层循环</p>
          <p class="mb-2">情况1 - 外层不影响内层</p>
          <pre class="bg-zinc-900 p-4 rounded-lg overflow-x-auto mb-4"><code class="language-cpp text-sm text-zinc-300">void fun(int n)
{
    int count = 0;
    for (int k = 1; k &lt;= n; k *= 2)
        for (int j = 1; j &lt;= n; j++)
            count++;
}</code></pre>
          <p class="mb-2">可看作是两个单循环。</p>
          <p class="mb-2">先计算外循环。同理列表，</p>
          <div class="overflow-x-auto mb-8">
            <table class="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th class="border-b border-zinc-700 p-2 text-white">次数</th>
                  <th class="border-b border-zinc-700 p-2 text-white">0</th>
                  <th class="border-b border-zinc-700 p-2 text-white">1</th>
                  <th class="border-b border-zinc-700 p-2 text-white">2</th>
                </tr>
              </thead>
              <tbody class="text-zinc-300">
                <tr>
                  <td class="border-b border-zinc-800 p-2">条件</td>
                  <td class="border-b border-zinc-800 p-2">1</td>
                  <td class="border-b border-zinc-800 p-2">2</td>
                  <td class="border-b border-zinc-800 p-2">4</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p class="mb-2">故$2^k=n$，$k=\\log_2n$.</p>
          <p class="mb-2">内循环同理列表，$O(n)$.</p>
          <p class="mb-2">整体算法的时间复杂度为内外循环相乘，$n\\log_2n$.</p>
          <p class="mb-2">此处注意，由于换底公式，$\\log_an$与$\\log_bn$仅有一个因子不同，故在计算时间复杂度时不论对数的底。</p>
          <p class="mb-2">算法的时间复杂度为$O(n\\log n)$.</p>
          <p class="mb-2">情况2 - 外层影响内层</p>
          <p class="mb-2">即内层的条件与外层有关。</p>
          <pre class="bg-zinc-900 p-4 rounded-lg overflow-x-auto mb-4"><code class="language-cpp text-sm text-zinc-300">void fun(int n)
{
    int m = 0, i, j;
    for (i = 1; i &lt;= n; i++)
        for (int j = 1; j &lt;= i * 2; j++)
            m++;
}</code></pre>
          <p class="mb-2">首先介绍一些公式：</p>
          <p class="my-6 text-lg text-center font-serif text-white">
          $$
          \\sum_{i=1}^ni=\\frac{n(n+1)}{2}
          $$
          $$
          \\sum_{i=1}^ni^2=\\frac{n(n+1)(2n+1)}{6}
          $$
          </p>
          <p class="mb-2">特殊地，对于常数列求和：</p>
          <p class="my-6 text-lg text-center font-serif text-white">
          $$
          \\sum_{i=1}^nk=kn
          $$
          </p>
          <p class="mb-2">那么对于此题，可知：</p>
          <p class="mb-2">外层循环的循环次数为$\\sum_{i=1}^n$，内层为$\\sum_{j=1}^{2i}1$。</p>
          <p class="mb-2">两式相乘，得到</p>
          <p class="my-6 text-lg text-center font-serif text-white">
          $$
          \\sum_{i=1}^n\\sum_{j=1}^{2i}1=\\sum_{i=1}^n2i
          $$
          $$
          由公式1，原式=\\frac{n(n+1)}{2}
          $$
          </p>
          <p class="mb-2">故总共执行$\\frac{n^2+n}{2}$次。时间复杂度$O(n^2)$.（取最高次）</p>
        </li>
      </ol>
      <p class="mb-4 text-zinc-300">在计算好语句块的执行次数后，需要注意在整理成时间复杂度时略去常数因子，如$\\log_2n$的底、$\\sqrt[3]n$的根指数等，写成$O(\\log n)$、$O(\\sqrt n)$.</p>
  `
};
