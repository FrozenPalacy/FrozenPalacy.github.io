import { BlogPost } from '../../types';

export const post: BlogPost = {
  id: '14',
  title: '拓扑排序',
  slug: 'oi_toposort',
  date: 'Nov 06, 2023',
  preview: '上海市计算机学会竞赛平台 | YACS 题目大意 一个有向图，有$n$个节点$m$条边，输入$n$和$m$和每条边的起点和终点...',
  readTime: '1 min read',
  tags: ['OI'],
  content: `
      <p class="mb-4 text-zinc-300">
        <a href="https://iai.sh.cn/problem/727" target="_blank" rel="noopener" class="text-blue-400 hover:underline">上海市计算机学会竞赛平台 | YACS</a>
      </p>

      <h2 class="text-2xl font-bold text-white mb-4 mt-8" id="题目大意">题目大意</h2>
      <p class="mb-4 text-zinc-300">一个有向图，有$n$个节点$m$条边，输入$n$和$m$和每条边的起点和终点。</p>
      <p class="mb-4 text-zinc-300">判断有向图的所有点是否都能在拓扑序中。能就输出Valid，否则输出Invalid。</p>

      <h2 class="text-2xl font-bold text-white mb-4 mt-8" id="题解">题解</h2>
      <p class="mb-4 text-zinc-300">看到原题有</p>
      <blockquote class="border-l-4 border-zinc-500 pl-4 italic text-zinc-400 my-4">
        <p>其中的第<em>i</em>条约束要求在学习第$y_i$ 门课程之前，必须先修完第$x_i$门课程。</p>
      </blockquote>
      <p class="mb-4 text-zinc-300">这样的优雅表述，判断可以用拓扑排序来解。</p>
      <p class="mb-4 text-zinc-300">拓扑排序是通过按照某个拓扑序的方法来遍历一张有向图。举个例子：</p>
      <img src="https://z1.ax1x.com/2023/11/06/pil0MIH.png" alt="pil0MIH.png" class="rounded-xl my-4 border border-white/10 w-full max-w-lg mx-auto" />
      <p class="mb-4 text-zinc-300">这是一张有5个结点的有向图。遵循的原则是：</p>
      <blockquote class="border-l-4 border-zinc-500 pl-4 italic text-zinc-400 my-4">
        <p>当某个点的所有前驱节点都已被遍历时，这个点就可以被遍历。</p>
      </blockquote>
      <p class="mb-4 text-zinc-300">（可能不是前驱，但意思等同于前驱）</p>
      <p class="mb-4 text-zinc-300">例如，这张图中，1没有前驱节点。可以先遍历1，随后3没有别的前驱了，需要遍历3。此时点2的所有前驱都被遍历，可以遍历点2。此时4的所有前驱都被遍历，可以遍历点4。此时，5的前驱即3和4都被遍历，可以遍历5。本图的一种拓扑序即为1 3 2 4 5。</p>
      <p class="mb-4 text-zinc-300">一张图可能有多个拓扑序。例如将本图中1到3的边删掉，就可以有1 3 2 4 5和3 1 2 4 5两个拓扑序。</p>
      <p class="mb-4 text-zinc-300">回到本题。题目说的矛盾即为存在一个点无法被拓扑序遍历到。</p>
      <p class="mb-4 text-zinc-300">例如样例1的图，简单画一下就可以发现它没有任何一个节点是没有前驱节点的，拓扑序无从建起，自然是Invalid。</p>
      <p class="mb-4 text-zinc-300">那么推广一下，思路出来了：</p>
      <p class="mb-4 text-zinc-300"><strong class="text-white">为图进行一次按照拓扑序的遍历，看看是否能够遍历到每一个点。如果不能遍历到每一个点，就是存在矛盾，输出Invalid。否则Valid。</strong></p>

      <h2 class="text-2xl font-bold text-white mb-4 mt-8" id="实现">实现</h2>
      <p class="mb-4 text-zinc-300">用一个邻接表来存储有向图。</p>
      <pre class="bg-zinc-900 p-4 rounded-lg overflow-x-auto mb-4"><code class="language-cpp text-sm text-zinc-300">const int MAXN=200005;
vector&lt;int&gt; v[MAXN];</code></pre>
      <p class="mb-4 text-zinc-300">首先输入$n$,$m$的值，并建图。</p>
      <p class="mb-4 text-zinc-300">注意到，判断一个点是否有前驱，可以通过存储其入度的数量来简单判断。如果它的入度数量为0，那么它没有前驱。所以定义一个数组来存储某个点的入度数量。</p>
      <pre class="bg-zinc-900 p-4 rounded-lg overflow-x-auto mb-4"><code class="language-cpp text-sm text-zinc-300">cin&gt;&gt;n&gt;&gt;m;
for(int i=1;i&lt;=m;i++)
{
    int a,b;
    cin&gt;&gt;a&gt;&gt;b;
    v[a].push_back(b);
    d[b]++;//存入度数量的数组 int类型
}</code></pre>
      <p class="mb-4 text-zinc-300">看到刚才举的例子，当点1被遍历后，它下一个点可以选择遍历点2或者点3。但是点2还有别的前驱，点3没有了。所以遍历点3。</p>
      <p class="mb-4 text-zinc-300">那么这样，就可以通过bfs，将遍历到的点指向的点的入度都减去1，即”消去一条边“。当指向的点入度变成0的时候，入队，对它bfs。</p>
      <pre class="bg-zinc-900 p-4 rounded-lg overflow-x-auto mb-4"><code class="language-cpp text-sm text-zinc-300">for(int i=1;i&lt;=n;i++)if(!d[i])q.push(i);//初始化 找拓扑序起点
while(!q.empty())
{
    int x=q.front();q.pop();//bfs
    cnt++;//记录遍历了多少个点
    for(int i=0;i&lt;v[x].size();i++)
    {
        int final=v[x][i];
        d[final]--;//消边
        if(!d[final])q.push(final);//如果指向的点没有别的前驱了就入队
    }
}</code></pre>
      <p class="mb-4 text-zinc-300">按照思路，我们统计一下遍历了多少个点，如果$cnt==n$，那么Valid。否则Invalid。</p>
      <pre class="bg-zinc-900 p-4 rounded-lg overflow-x-auto mb-4"><code class="language-cpp text-sm text-zinc-300">cout&lt;&lt;((cnt!=n)?"Invalid":"Valid");</code></pre>
      <p class="mb-4 text-zinc-300">AC Code</p>
      <pre class="bg-zinc-900 p-4 rounded-lg overflow-x-auto mb-4"><code class="language-cpp text-sm text-zinc-300">//20231106 @ iai.sh.cn
#include&lt;bits/stdc++.h&gt;
using namespace std;
typedef long long ll;
const int MAXN=200005;
int n,m,d[MAXN],cnt;
vector&lt;int&gt; v[MAXN];
queue&lt;int&gt; q;
int main()
{
    ios::sync_with_stdio(0);cin.tie(0);cout.tie(0);
    // freopen("1.txt","r",stdin);
    cin&gt;&gt;n&gt;&gt;m;
    for(int i=1;i&lt;=m;i++)
    {
        int a,b;
        cin&gt;&gt;a&gt;&gt;b;
        v[a].push_back(b);
        d[b]++;
    }
    for(int i=1;i&lt;=n;i++)if(!d[i])q.push(i);
    while(!q.empty())
    {
        int x=q.front();q.pop();
        cnt++;
        for(int i=0;i&lt;v[x].size();i++)
        {
            int final=v[x][i];
            d[final]--;
            if(!d[final])q.push(final);
        }
    }
    cout&lt;&lt;((cnt!=n)?"Invalid":"Valid");
    return 0;
}</code></pre>
    `
};
