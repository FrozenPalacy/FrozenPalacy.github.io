import { BlogPost } from '../../types';

export const post: BlogPost = {
  id: '18',
  title: '递归、深搜及其优化',
  slug: 'oi_dfs',
  date: 'Jul 13, 2023',
  preview: '函数 一组一起执行一个任务的语句。 返回类型 函数名(参数类型1 参数名1,..,参数类型n 参数名n) { //函数体 return 返回值 } //对于void函数，不存在返回值。 递归函数...',
  readTime: '2 min read',
  tags: ['OI'],
  content: `
      <ol class="list-decimal pl-6 space-y-4 text-zinc-300 mb-8">
        <li>
          <p class="mb-2">函数</p>
          <ol class="list-decimal pl-6 mt-2 space-y-2">
            <li>
              <p class="mb-2">一组一起执行一个任务的语句。</p>
              <pre class="bg-zinc-900 p-4 rounded-lg overflow-x-auto mb-4"><code class="language-cpp text-sm text-zinc-300"><span style="color:#960050;background-color:#1e0010">返回类型</span> <span style="color:#960050;background-color:#1e0010">函数名</span>(<span style="color:#960050;background-color:#1e0010">参数类型</span><span style="color:#ae81ff">1</span> <span style="color:#960050;background-color:#1e0010">参数名</span><span style="color:#ae81ff">1</span>,..,<span style="color:#960050;background-color:#1e0010">参数类型</span>n <span style="color:#960050;background-color:#1e0010">参数名</span>n)
{
    <span style="color:#75715e">//函数体
</span>    <span style="color:#66d9ef">return</span> <span style="color:#960050;background-color:#1e0010">返回值</span>
}
<span style="color:#75715e">//对于void函数，不存在返回值。
</span></code></pre>
            </li>
          </ol>
        </li>
        <li>
          <p class="mb-2">递归函数</p>
          <ol class="list-decimal pl-6 mt-2 space-y-2">
            <li>
              <p class="mb-2">自己调用自己的函数</p>
              <p class="mb-2">eg. 阶乘</p>
              <pre class="bg-zinc-900 p-4 rounded-lg overflow-x-auto mb-4"><code class="language-cpp text-sm text-zinc-300"><span style="color:#66d9ef">int</span> <span style="color:#a6e22e">fact</span>(<span style="color:#66d9ef">int</span> n)
{
    <span style="color:#66d9ef">if</span> (n <span style="color:#f92672">==</span> <span style="color:#ae81ff">0</span>)
        <span style="color:#66d9ef">return</span> <span style="color:#ae81ff">1</span>;
    <span style="color:#66d9ef">else</span>
        <span style="color:#66d9ef">return</span> n <span style="color:#f92672">*</span> fact(n <span style="color:#f92672">-</span> <span style="color:#ae81ff">1</span>);
}</code></pre>
            </li>
            <li>
              <p class="mb-2">递归的一般形式</p>
              <pre class="bg-zinc-900 p-4 rounded-lg overflow-x-auto mb-4"><code class="language-cpp text-sm text-zinc-300"><span style="color:#66d9ef">int</span> <span style="color:#a6e22e">find</span>(arg1, arg2...)
{
    <span style="color:#66d9ef">if</span> (<span style="color:#960050;background-color:#1e0010">特殊情况</span> or <span style="color:#960050;background-color:#1e0010">边界条件</span>)
    {
        <span style="color:#75715e">// 处理
</span>        <span style="color:#66d9ef">return</span> xxx;
    }
    <span style="color:#75715e">// 递归操作；
</span>    <span style="color:#66d9ef">return</span> xxx;
}
<span style="color:#75715e">// 对于void函数，直接使用return;
</span></code></pre>
            </li>
            <li>
              <p class="mb-2">step型递归</p>
              <ul class="list-disc pl-6 mt-2 space-y-2">
                <li>
                  <p class="mb-2">例题：天平平衡问题</p>
                  <h2 class="text-2xl font-bold text-white mb-4 mt-8" id="题目描述">题目描述</h2>
                  <p class="mb-4 text-zinc-300">你有n个重量不同的砝码和一个天平，每个砝码可以放在左盘或者右盘或者不放。砝码重量为 $w_1,w_2,...,w_n$ ，问有多少种放置砝码的方式，使得天平平衡?（两边都不放任何砝码也算一种平衡方式）</p>
                  <h2 class="text-2xl font-bold text-white mb-4 mt-8" id="输入格式">输入格式</h2>
                  <p class="mb-4 text-zinc-300">第 1 行，1 个正整数 $n$ 。 第 2 行，$n$ 个正整数 $w_1,w_2,...w_n$，以空格分隔。</p>
                  <h2 class="text-2xl font-bold text-white mb-4 mt-8" id="输出格式">输出格式</h2>
                  <p class="mb-4 text-zinc-300">输出使得天平平衡的放置方案数。</p>
                  <h2 class="text-2xl font-bold text-white mb-4 mt-8" id="输入输出样例">输入输出样例</h2>
                  <h2 class="text-xl font-bold text-white mb-4 mt-6" id="输入数据-1">输入数据 1</h2>
                  <pre class="bg-zinc-900 p-4 rounded-lg overflow-x-auto mb-4"><code class="language-text text-sm text-zinc-300">5
1 2 3 5 6</code></pre>
                  <h2 class="text-xl font-bold text-white mb-4 mt-6" id="输出数据-1">输出数据 1</h2>
                  <pre class="bg-zinc-900 p-4 rounded-lg overflow-x-auto mb-4"><code class="language-text text-sm text-zinc-300">13</code></pre>
                  <h2 class="text-2xl font-bold text-white mb-4 mt-8" id="数据范围">数据范围</h2>
                  <p class="mb-4 text-zinc-300">对于 100% 的数据，满足 $1\\leq n\\leq13,1\\leq w_i\\leq100$。</p>
                </li>
                <li>
                  <p class="mb-2">AC Code</p>
                  <pre class="bg-zinc-900 p-4 rounded-lg overflow-x-auto mb-4"><code class="language-cpp text-sm text-zinc-300">// 20230712 @ Hydro.ac
#include &lt;bits/stdc++.h&gt;
using namespace std;
int n, w[20], ans;
void find(int p, int wl, int wr)
{
    if (p &gt; n) // 边界条件：如果已经枚举到超过n了
    {
        if (wl == wr)
        {
            ans++; // 答案++
        }
        return;
    }
    // 三种情况分别枚举递归
    find(p + 1, wl + w[p], wr);
    find(p + 1, wl, wr + w[p]);
    find(p + 1, wl, wr);
    //这里的wl和wr也可以用全局变量写
    //在调用之前要记得wl+=w[p]，调用完要减回去。称作回溯操作。
}
int main()
{
    cin &gt;&gt; n;
    for (int i = 1; i &lt;= n; i++)
    {
        cin &gt;&gt; w[i];
    }
    find(1, 0, 0);
    cout &lt;&lt; ans;
    return 0;
}</code></pre>
                </li>
              </ul>
            </li>
          </ol>
        </li>
        <li>
          <p class="mb-2">深度优先搜索 DFS</p>
          <ol class="list-decimal pl-6 mt-2 space-y-2">
            <li><del>听起来好高大上</del></li>
            <li>利用递归函数，枚举所有的情况找到答案。</li>
            <li>剪枝
              <ol class="list-decimal pl-6 mt-2 space-y-2">
                <li>对于中途发现已经不可能的情况直接跳出这一部分搜索。</li>
              </ol>
            </li>
          </ol>
          <ul class="list-disc pl-6 mt-2 space-y-2">
            <li>
              <p class="mb-2">例题：P2089 烤鸡</p>
              <h1 class="text-3xl font-bold text-white mb-6" id="烤鸡">烤鸡</h1>
              <h2 class="text-2xl font-bold text-white mb-4 mt-8" id="题目背景">题目背景</h2>
              <p class="mb-4 text-zinc-300">猪猪 Hanke 得到了一只鸡。</p>
              <h2 class="text-2xl font-bold text-white mb-4 mt-8" id="题目描述-1">题目描述</h2>
              <p class="mb-4 text-zinc-300">猪猪 Hanke 特别喜欢吃烤鸡（本是同畜牲，相煎何太急！）Hanke 吃鸡很特别，为什么特别呢？因为他有 10 种配料（芥末、孜然等），每种配料可以放 1 到 3 克，任意烤鸡的美味程度为所有配料质量之和。</p>
              <p class="mb-4 text-zinc-300">现在， Hanke 想要知道，如果给你一个美味程度 $n$ ，请输出这 $10$ 种配料的所有搭配方案。</p>
              <h2 class="text-2xl font-bold text-white mb-4 mt-8" id="输入格式-1">输入格式</h2>
              <p class="mb-4 text-zinc-300">一个正整数 $n$，表示美味程度。</p>
              <h2 class="text-2xl font-bold text-white mb-4 mt-8" id="输出格式-1">输出格式</h2>
              <p class="mb-4 text-zinc-300">第一行，方案总数。</p>
              <p class="mb-4 text-zinc-300">第二行至结束，10 个数，表示每种配料所放的质量，按字典序排列。</p>
              <p class="mb-4 text-zinc-300">如果没有符合要求的方法，就只要在第一行输出一个 0。</p>
              <h2 class="text-2xl font-bold text-white mb-4 mt-8" id="样例-1">样例 #1</h2>
              <h3 class="text-xl font-bold text-white mb-4 mt-6" id="样例输入-1">样例输入 #1</h3>
              <pre class="bg-zinc-900 p-4 rounded-lg overflow-x-auto mb-4"><code class="language-text text-sm text-zinc-300">11</code></pre>
              <h3 class="text-xl font-bold text-white mb-4 mt-6" id="样例输出-1">样例输出 #1</h3>
              <pre class="bg-zinc-900 p-4 rounded-lg overflow-x-auto mb-4"><code class="language-text text-sm text-zinc-300">10
1 1 1 1 1 1 1 1 1 2
1 1 1 1 1 1 1 1 2 1
1 1 1 1 1 1 1 2 1 1
1 1 1 1 1 1 2 1 1 1
1 1 1 1 1 2 1 1 1 1
1 1 1 1 2 1 1 1 1 1
1 1 1 2 1 1 1 1 1 1
1 1 2 1 1 1 1 1 1 1
1 2 1 1 1 1 1 1 1 1
2 1 1 1 1 1 1 1 1 1</code></pre>
              <h2 class="text-2xl font-bold text-white mb-4 mt-8" id="提示">提示</h2>
              <p class="mb-4 text-zinc-300">对于 100% 的数据，$n \\leq 5000$。</p>
            </li>
            <li>
              <p class="mb-2">AC Code</p>
              <pre class="bg-zinc-900 p-4 rounded-lg overflow-x-auto mb-4"><code class="language-cpp text-sm text-zinc-300">//20230712 @ Hydro.ac
//不写注释了。我自己都不想再看一遍这代码。
#include&lt;bits/stdc++.h&gt;
using namespace std;
int n,counter=0,u[10000][15],u2[15];
void dfs(int p,int sum)
{
    if(p==10)
    {
        if(sum==n)
        {
            counter++;
            for(int i=0;i&lt;10;i++)
            {
                u[counter][i]=u2[i];
            }

        }
        return;
    }
    for(int i=1;i&lt;=3;i++)
    {
        u2[p]=i;
        dfs(p+1,sum+i);

    }
    return;
}
int main()
{

    cin&gt;&gt;n;
    dfs(0,0);
    cout&lt;&lt;counter&lt;&lt;endl;
    for(int i=1;i&lt;=counter;i++)
    {
        for(int j=0;j&lt;10;j++)
            cout&lt;&lt;u[i][j]&lt;&lt;" ";
        cout&lt;&lt;endl;
    }
    return 0;
}</code></pre>
            </li>
          </ul>
        </li>
      </ol>
    `
};
