import { BlogPost } from '../../types';

export const post: BlogPost = {
  id: '17',
  title: 'ABC427 - C 题解',
  slug: 'solution_abc427a',
  date: 'Oct 12, 2025',
  preview: 'Problem: C - Bipartize 题目大意 给定一个有$N$个节点和$M$条边的简单图，删去一定边数，使得这个图变成一个二分图。问最少删去多少条边？...',
  readTime: '1 min read',
  tags: ['OI', 'Solution'],
  content: `
      <p class="mb-4 text-zinc-300">
        Problem: <a href="https://atcoder.jp/contests/abc427/tasks/abc427_c" target="_blank" rel="noopener" class="text-blue-400 hover:underline">C - Bipartize</a>
      </p>

      <h2 class="text-2xl font-bold text-white mb-4 mt-8" id="题目大意">题目大意</h2>
      <p class="mb-4 text-zinc-300">给定一个有$N$个节点和$M$条边的简单图，删去一定边数，使得这个图变成一个二分图。问最少删去多少条边？</p>
      <ul class="list-disc pl-6 space-y-2 text-zinc-300 mb-4">
        <li>二分图，指如果这个图的每个节点能够被涂成黑色或白色，那么这一个图中每条边的两个节点都有不同颜色。</li>
      </ul>

      <h2 class="text-2xl font-bold text-white mb-4 mt-8" id="题解">题解</h2>
      <p class="mb-4 text-zinc-300">首先输入并建图。此处使用邻接表建图。</p>
      <pre class="bg-zinc-900 p-4 rounded-lg overflow-x-auto mb-4"><code class="language-cpp text-sm text-zinc-300">ll n,m;
vector&lt;int&gt; v[MAXN];
int main()
{
    cin&gt;&gt;n&gt;&gt;m;
    for(int i=1;i&lt;=m;i++)
    {
        int x,y;
        cin&gt;&gt;x&gt;&gt;y;
        v[x].push_back(y);
    }
}</code></pre>
      <p class="mb-4 text-zinc-300">注意到$2\\leq N\\leq10$，若对该图进行涂色，该图最多有$2^{10}=1024$种涂色情况。重点来袭！有一位聪明的朋友（这个朋友真的不是我，我觉得他太聪明了）见到这么少的情况，打算开始枚举并删边。只要把1024种情况全部跑一遍，哪个情况删掉的边最少就是这道题的答案。</p>
      <p class="mb-4 text-zinc-300">灵感迸发的时刻又来了！本题中，我们使用一个$N$<strong class="text-white">位二进制数</strong>对这个图的上色情况进行存储。0为白，1为黑，每一位代表一个节点。这样一来，我们的循环就可以写成：</p>
      <pre class="bg-zinc-900 p-4 rounded-lg overflow-x-auto mb-4"><code class="language-cpp text-sm text-zinc-300">for(ll bitmask=0;bitmask&lt;pow(2,n);bitmask++)</code></pre>
      <p class="mb-4 text-zinc-300">当然你也可以用左移n位来写。</p>
      <p class="mb-4 text-zinc-300">在每一种情况中，我们根据读入的边，判断这条边两端的节点颜色是否相同。</p>
      <pre class="bg-zinc-900 p-4 rounded-lg overflow-x-auto mb-4"><code class="language-cpp text-sm text-zinc-300">ans=m+1; //Initialization
for(ll bitmask=0;bitmask&lt;pow(2,n);bitmask++)
{
    rmv=0;
    for(int i=1;i&lt;=n;i++)
    {
        for(int j=0;j&lt;v[i].size();j++)//枚举每一条边
        {
            int final=v[i][j];
            u=(bitmask&gt;&gt;i)&amp;1; //找这条边两端的节点颜色
            ve=(bitmask&gt;&gt;final)&amp;1;
            if(u==ve)rmv++;
        }
    }
    ans=min(ans,rmv);
}</code></pre>
      <p class="mb-4 text-zinc-300">诸如<code>(bitmask&gt;&gt;i)&amp;1</code>的写法，能够快速帮我们找到bitmask中第i位的数字是什么。<code>&amp;1</code>的写法对于二进制的两种情况而言，由于0&amp;1=0, 1&amp;1=1，可以原封不动地输出这个二进制位上的数字。于是我们提取出了边上两个节点的上色情况。</p>
      <p class="mb-4 text-zinc-300">判断颜色是否相同？如果相同，就要删掉这条边。在一个上色情况执行完后，判断删掉的边是不是最少的。</p>

      <h2 class="text-2xl font-bold text-white mb-4 mt-8" id="sample-code">Sample Code</h2>
      <pre class="bg-zinc-900 p-4 rounded-lg overflow-x-auto mb-4"><code class="language-cpp text-sm text-zinc-300">//20251011 @ ABC427
#include&lt;bits/stdc++.h&gt;
using namespace std;
typedef long long ll;
const int MAXN=15;
vector&lt;int&gt; v[MAXN];
ll ans,rmv,n,m;
bool u,ve;

int main()
{
    ios::sync_with_stdio(0);cin.tie(0);cout.tie(0);
    cin&gt;&gt;n&gt;&gt;m;
    for(int i=1;i&lt;=m;i++)
    {
        int x,y;
        cin&gt;&gt;x&gt;&gt;y;
        v[x].push_back(y);
    }
    ans=m+1;
    for(ll bitmask=0;bitmask&lt;pow(2,n);bitmask++)
    {
        rmv=0;
        for(int i=1;i&lt;=n;i++)
        {
            for(int j=0;j&lt;v[i].size();j++)
            {
                int final=v[i][j];
                u=(bitmask&gt;&gt;(i-1))&amp;1;
                ve=(bitmask&gt;&gt;(final-1))&amp;1;
                if(u==ve)rmv++;
            }
        }
        ans=min(ans,rmv);
    }
    cout&lt;&lt;ans/2&lt;&lt;endl;
    return 0;
}</code></pre>
      <p class="mb-4 text-zinc-300">注意：由于是无向图，每条边会被计算两次，所以最后输出ans/2。</p>
    `
};
