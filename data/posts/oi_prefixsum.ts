import { BlogPost } from '../../types';

export const post: BlogPost = {
  id: '21',
  title: '前缀和 差分 尺取法',
  slug: 'oi_prefixsum',
  date: 'Jul 07, 2023',
  preview: '前缀和 Def. 某数组前若干数的和 设一数组$a$，$s[1]=a[1]$，$s[2]=a[1]+a[2]$...',
  readTime: '1 min read',
  tags: ['OI'],
  content: `
      <ol class="list-decimal pl-6 space-y-4 text-zinc-300 mb-8">
        <li>
          <p class="mb-2">前缀和</p>
          <ol class="list-decimal pl-6 mt-2 space-y-2">
            <li>
              <p class="mb-2">Def. 某数组前若干数的和</p>
              <p class="mb-2">设一数组$a$，$s[1]=a[1]$，$s[2]=a[1]+a[2]$，</p>
              <p class="mb-2">$s[n]=a[1]+a[2]+...+a[n-1]+a[n]$.</p>
            </li>
            <li>
              <p class="mb-2">用此方法求区间$[l,r]$的和</p>
              <p class="my-6 text-lg text-center font-serif text-white">
              $$
              s_{lr}=s[r]-s[l-1]
              $$
              </p>
            </li>
            <li>
              <p class="mb-2">相较于$for$循环求若干数的和，前缀和这一算法能将时间复杂度由$O(n)$降为$O(1)$。</p>
              <p class="mb-2">前缀和属于优化类算法。</p>
            </li>
          </ol>
        </li>
        <li>
          <p class="mb-2">差分</p>
          <ol class="list-decimal pl-6 mt-2 space-y-2">
            <li>
              <p class="mb-2">Def. 是这个数与前一个数的差</p>
              <p class="mb-2">设一数组$a$，则有</p>
              <p class="my-6 text-lg text-center font-serif text-white">
              $$
              d[1]=a[1]\\\\d[2]=a[2]-a[1]\\\\d[3]=a[3]-a[2]\\\\d[n]=a[n]-a[n-1]
              $$
              </p>
              <p class="mb-2">******<strong class="text-white">注意！！！$a[0]=0$.</strong></p>
            </li>
            <li>
              <p class="mb-2">差分多用于对区间$[l,r]$中的每一项都进行相同的修改（加减）</p>
              <p class="mb-2">例题可见 <a href="http://Hydro.ac" target="_blank" rel="noopener" class="text-blue-400 hover:underline">Hydro</a> B0409或洛谷P2367。</p>
              <p class="mb-2">对于普通的数组，使某区间内的每一项进行相同加减，需要用$for$循环，做如下操作</p>
              <p class="my-6 text-lg text-center font-serif text-white">
              $$
              a[l]+=c\\\\a[l+1]+=c\\\\......\\\\O(n)
              $$
              </p>
              <p class="mb-2">对于差分数组，只需要做</p>
              <p class="my-6 text-lg text-center font-serif text-white">
              $$
              d[l]+=c\\\\d[r+1]-=c\\\\O(1)
              $$
              </p>
              <p class="mb-2">故与前缀和一样，是优化类算法。同时，差分算法是前缀和的逆运算。</p>
            </li>
            <li>
              <p class="mb-2">根据差分数列反求出修改后的原数列</p>
              <p class="mb-2">可使用如下代码</p>
              <pre class="bg-zinc-900 p-4 rounded-lg overflow-x-auto mb-4"><code class="language-cpp text-sm text-zinc-300">for(int i=1;i&lt;=n;i++)
{
    d[i]+=d[i-1];
    cout&lt;&lt;d[i]&lt;&lt;" ";
}</code></pre>
              <p class="mb-2"><del>我好像也不太理解 但是先背着吧</del></p>
            </li>
          </ol>
        </li>
        <li>
          <p class="mb-2">二维前缀和</p>
          <ol class="list-decimal pl-6 mt-2 space-y-2">
            <li>
              <p class="mb-2">即针对二维的$a$数组的前缀和操作。</p>
              <p class="mb-2">偷懒直接上图。</p>
              <img src="https://s1.ax1x.com/2023/07/07/pCcyOFf.png" loading="lazy" alt="pCcyOFf.png" class="rounded-xl my-4 border border-white/10 w-full max-w-lg mx-auto" />
              <img src="https://s1.ax1x.com/2023/07/07/pCcyXY8.png" loading="lazy" alt="pCcyXY8.png" class="rounded-xl my-4 border border-white/10 w-full max-w-lg mx-auto" />
            </li>
          </ol>
        </li>
        <li>
          <p class="mb-2">尺取法（Two pointers）</p>
          <ol class="list-decimal pl-6 mt-2 space-y-2">
            <li>无法评述。参见例题。</li>
          </ol>
          <h1 class="text-3xl font-bold text-white mb-6 mt-12" id="p1147-连续自然数和">P1147 连续自然数和</h1>
          <h2 class="text-2xl font-bold text-white mb-4 mt-8" id="题目描述">题目描述</h2>
          <p class="mb-4 text-zinc-300">对一个给定的正整数 $M$，求出所有的连续的正整数段（每一段至少有两个数），这些连续的自然数段中的全部数之和为 $M$。</p>
          <p class="mb-4 text-zinc-300">例子：$1998+1999+2000+2001+2002 = 10000$，所以从 $1998$ 到 $2002$ 的一个自然数段为 $M=10000$ 的一个解。</p>
          <h2 class="text-2xl font-bold text-white mb-4 mt-8" id="输入格式">输入格式</h2>
          <p class="mb-4 text-zinc-300">包含一个整数的单独一行给出 $M$ 的值（$10 \\le M \\le 2,000,000$）。</p>
          <h2 class="text-2xl font-bold text-white mb-4 mt-8" id="输出格式">输出格式</h2>
          <p class="mb-4 text-zinc-300">每行两个正整数，给出一个满足条件的连续正整数段中的第一个数和最后一个数，两数之间用一个空格隔开，所有输出行的第一个按从小到大的升序排列，对于给定的输入数据，保证至少有一个解。</p>
          <h2 class="text-2xl font-bold text-white mb-4 mt-8" id="样例-1">样例 #1</h2>
          <h3 class="text-xl font-bold text-white mb-4 mt-6" id="样例输入-1">样例输入 #1</h3>
          <pre class="bg-zinc-900 p-4 rounded-lg overflow-x-auto mb-4"><code class="language-text text-sm text-zinc-300">10000</code></pre>
          <h3 class="text-xl font-bold text-white mb-4 mt-6" id="样例输出-1">样例输出 #1</h3>
          <pre class="bg-zinc-900 p-4 rounded-lg overflow-x-auto mb-4"><code class="language-text text-sm text-zinc-300">18 142
297 328
388 412
1998 2002</code></pre>
          <p class="mb-4 text-zinc-300">AC Code</p>
          <pre class="bg-zinc-900 p-4 rounded-lg overflow-x-auto mb-4"><code class="language-cpp text-sm text-zinc-300">//20230707 @ Hydro.ac
//尺取法
#include&lt;bits/stdc++.h&gt;
using namespace std;
int m,sum=0;
int main()
{
    cin&gt;&gt;m;
    for(int l=1,r=1;r&lt;m;r++)
    {
        sum+=r;
        while(sum&gt;m)//如果总和大于m
        {
            sum-=l;//在总和中删掉起点
            l++;
        }
        if(sum==m)
            cout&lt;&lt;l&lt;&lt;" "&lt;&lt;r&lt;&lt;endl;
    }
    return 0;
}</code></pre>
        </li>
      </ol>
  `
};
