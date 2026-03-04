import { BlogPost } from '../../types';

export const post: BlogPost = {
  id: '20',
  title: '基础数论',
  slug: 'oi_basicmath',
  date: 'Jul 11, 2023',
  preview: '质数判断 让$i$从2枚举到$\\sqrt{N}$，若对每一个$i$$n%i\\neq0$，则是质数。否则是合数...',
  readTime: '1 min read',
  tags: ['OI'],
  content: `
      <ol class="list-decimal pl-6 space-y-4 text-zinc-300 mb-8">
        <li>
          <p class="mb-2">质数判断</p>
          <ol class="list-decimal pl-6 mt-2 space-y-2">
            <li>
              <p class="mb-2">让$i$从2枚举到$\\sqrt{N}$，若对每一个$i$$n%i\\neq0$，则是质数。否则是合数</p>
            </li>
            <li>
              <p class="mb-2">Code</p>
              <pre class="bg-zinc-900 p-4 rounded-lg overflow-x-auto mb-4"><code class="language-cpp text-sm text-zinc-300">int n;bool prime=true;
for(int i=2;i*i&lt;=n;i++)
    if(d%i==0)
    {
        prime=false;break;
    }</code></pre>
            </li>
          </ol>
        </li>
        <li>
          <p class="mb-2">筛法</p>
          <ol class="list-decimal pl-6 mt-2 space-y-2">
            <li>
              <p class="mb-2">用于计算哪些数字是素数</p>
            </li>
            <li>
              <p class="mb-2">用bool型变量作为桶，记录某个数是否为素数。</p>
            </li>
            <li>
              <p class="mb-2">埃式筛法</p>
              <ol class="list-decimal pl-6 mt-2 space-y-2">
                <li>
                  <p class="mb-2">将isPrime[N]数组初始化为false，即均为质数。</p>
                </li>
                <li>
                  <p class="mb-2">isPrime[0]=isPrime[1]=true;</p>
                </li>
                <li>
                  <p class="mb-2">从2开始枚举，若是质数，将其所有的倍数记录为合数。</p>
                </li>
                <li>
                  <p class="mb-2">Code</p>
                  <pre class="bg-zinc-900 p-4 rounded-lg overflow-x-auto mb-4"><code class="language-cpp text-sm text-zinc-300">isprime[0] = isprime[1] = true;
for (int i = 2; i * i &lt;= n; i++)
{
    if (!isprime[i])
    {
        for (int j = i * i; j &lt;= n; j += i)
        {
            isprime[j] = true;
        }
    }
}</code></pre>
                </li>
              </ol>
            </li>
            <li>
              <p class="mb-2">线性筛法</p>
              <ol class="list-decimal pl-6 mt-2 space-y-2">
                <li>
                  <p class="mb-2">用每个数的最小质因数进行标记。</p>
                </li>
                <li>
                  <p class="mb-2">Code</p>
                  <p class="mb-2">（有点问题，之后补）</p>
                </li>
              </ol>
            </li>
          </ol>
        </li>
        <li>
          <p class="mb-2">GCD &amp; LCM</p>
          <ol class="list-decimal pl-6 mt-2 space-y-2">
            <li>GCD
              <ol class="list-decimal pl-6 mt-2 space-y-2">
                <li>$GCD(a,b)=GCD(b,a%b)$。（辗转相除）</li>
              </ol>
            </li>
            <li>LCM
              <ol class="list-decimal pl-6 mt-2 space-y-2">
                <li>$LCM(a,b)\\times GCD(a,b)=a\\times b$.</li>
              </ol>
            </li>
          </ol>
        </li>
        <li>
          <p class="mb-2">快速幂</p>
          <ol class="list-decimal pl-6 mt-2 space-y-2">
            <li>
              <p class="mb-2">$ans=a^b%p$时，快速求ans。</p>
              <pre class="bg-zinc-900 p-4 rounded-lg overflow-x-auto mb-4"><code class="language-cpp text-sm text-zinc-300">ans = 1;
while (b)
{
    if (b &amp; 1)
    {
        ans *= a;
        ans %= p;
    }
    a *= a;
    a %= p;
    b &gt;&gt;= 1;
}
cout &lt;&lt; ans;</code></pre>
            </li>
          </ol>
        </li>
      </ol>
  `
};
