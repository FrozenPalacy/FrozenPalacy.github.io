import { BlogPost } from '../../types';

export const post: BlogPost = {
  id: '23',
  title: '树状数组',
  slug: 'oi_binaryindexedtree',
  date: 'Dec 10, 2023',
  preview: '树状数组是一种前缀和的优化方法。首先由$lowbit$函数引出。对于一个十进制数$x$，其$lowbit$值为这个数的二进制表达从低位起第一个1的位置所构成的数。',
  readTime: '1 min read',
  tags: ['OI'],
  content: `
      <p class="mb-4 text-zinc-300">树状数组是一种前缀和的优化方法。</p>
      <p class="mb-4 text-zinc-300">首先由$lowbit$函数引出。</p>
      <p class="mb-4 text-zinc-300">对于一个十进制数$x$，其$lowbit$值为这个数的二进制表达从低位起第一个1的位置所构成的数。</p>
      <p class="mb-4 text-zinc-300">例如，$13D=1101B,lowbit(13)=1D$.</p>
      <p class="mb-4 text-zinc-300">$40D=101000B,lowbit(40)=8D=1000B$.</p>
      <p class="mb-4 text-zinc-300">十进制数$x$的$lowbit$值可以用如下函数求得：</p>
      <p class="my-6 text-lg text-center font-serif text-white">
      $$
      lowbit(x)=x&(-x)
      $$
      </p>
      <p class="mb-4 text-zinc-300">原理为：$-x$在求补码的过程中，会先修改符号位，再让其它位进行取反+1的操作。取反后二进制中的每一位与$x$均不相同，+1操作会让结尾连续的1变为0，并使得第一个0变为1，即补码中第一个1的位置与$x$第一个1的位置相同。</p>
      <p class="mb-4 text-zinc-300">对于下标$x$，在数组中存储第$x$个数前$lowbit(x)$个数字的值之和。</p>
      <p class="mb-4 text-zinc-300">例如，$x=40$时，$lowbit(x)=8$.</p>
      <p class="my-6 text-lg text-center font-serif text-white">
      $$
      f[40]=a[40]+a[39]+a[38]+...+a[34]+a[33]
      $$
      </p>
      <p class="mb-4 text-zinc-300">其中，$f$为树状数组，$a$为初始值。</p>
      <p class="mb-4 text-zinc-300">对$39$至$33$的二进制码研究后可以发现，其$lowbit(x)$位前保持不变，$lowbit$位的1改为0，$lowbit$位后枚举的是除了全0以外的所有情况。</p>
      <hr class="my-8 border-zinc-700" />
      <p class="mb-4 text-zinc-300">下图中展示的是$f[20]$以内的数组结构。</p>
      <img src="https://z1.ax1x.com/2023/12/10/piRrITH.png" alt="piRrITH.png" class="rounded-xl my-4 border border-white/10 w-full max-w-lg mx-auto" />
      <p class="mb-4 text-zinc-300">其中，黑色数字为下标$x$，红色字为$lowbit(x)$。数字上方对应的绿色节点是$f[x]$存储了哪些项的和。</p>
      <p class="mb-4 text-zinc-300">以$f[5]$为例，如果改动了$f[5]$的数字，那么会影响到$f[6],f[8],f[16]$的值.</p>
      <p class="mb-4 text-zinc-300">我们可以得到以下结论：</p>
      <p class="mb-4 text-zinc-300">当改动树状数组中一项的值时，以这项值的下标加上$lowbit(x)$的值作为下标的数组内容也会发生改变。即：</p>
      <p class="my-6 text-lg text-center font-serif text-white">
      $$
      f[x]改变，f[x+lowbit(x)]也改变。
      $$
      </p>
      <p class="mb-4 text-zinc-300">由此，我们可以得到修改树状数组中元素的模板：</p>
      <pre class="bg-zinc-900 p-4 rounded-lg overflow-x-auto mb-4"><code class="language-cpp text-sm text-zinc-300">void add(int p, int k){
    while (p &lt;= n){
        f[p] += k;
        p += lowbit(p);
    }
}
//将下标p对应的值增加k</code></pre>
      <hr class="my-8 border-zinc-700" />
      <p class="mb-4 text-zinc-300">树状数组还可以求前缀和。例如：</p>
      <p class="mb-4 text-zinc-300">以$x=58$为例，$lowbit(x)=2,f[58]=a[57]+a[58]$.</p>
      <p class="mb-4 text-zinc-300">此时令$x=56$，$lowbit(x)=8,f[56]=a[56]+a[55]+...+a[50]+a[49]$.</p>
      <p class="mb-4 text-zinc-300">以此类推，分别令$x=48$，$x=32$，并将其全部相加，即可得到$1$至$58$项的和。</p>
      <p class="mb-4 text-zinc-300">很容易发现，$x$需要以$lowbit(x)$为间隔向下递减求和。</p>
      <p class="mb-4 text-zinc-300">由此，我们可以得到其模板：</p>
      <pre class="bg-zinc-900 p-4 rounded-lg overflow-x-auto mb-4"><code class="language-cpp text-sm text-zinc-300">int sum(int p){
    int ans = 0;
    while (p &gt; 0){
        sum += f[p];
        p -= lowbit(p);
    }
}
//求p的前綴和</code></pre>
      <p class="mb-4 text-zinc-300">求区间$[L,R]$的和，同前缀和一样，用如下方法求得即可：</p>
      <p class="my-6 text-lg text-center font-serif text-white">
      $$
      s=f[L]-f[R-1]
      $$
      </p>
      <p class="mb-4 text-zinc-300">树状数组整体复杂度约为$O(\\log n)$.</p>
      <hr class="my-8 border-zinc-700" />
      <p class="mb-4 text-zinc-300">板子题：<a href="https://www.luogu.com.cn/problem/P3374" target="_blank" rel="noopener" class="text-blue-400 hover:underline">P3374 【模板】树状数组 1</a></p>
      <p class="mb-4 text-zinc-300">AC Code:</p>
      <pre class="bg-zinc-900 p-4 rounded-lg overflow-x-auto mb-4"><code class="language-cpp text-sm text-zinc-300">//20231210 @ Hydro.ac
#include&lt;bits/stdc++.h&gt;
using namespace std;
typedef long long ll;
const int MAXN=500005;
int n,m,k,a[MAXN],s[MAXN],f[MAXN],x,y;
int lowbit(int p)
{
	return p&(-p);
}

int sum(int p)
{
	int ans=0;
	while(p&gt;0)
	{
		ans+=f[p];
		p-=lowbit(p);
	}
	return ans;
}

void add(int p,int k)
{
	while(p&lt;=n)
	{
		f[p]+=k;
		p+=lowbit(p);
	}
}

int main()
{
	ios::sync_with_stdio(0);cin.tie(0);cout.tie(0);
	cin&gt;&gt;n&gt;&gt;m;
	for(int i=1;i&lt;=n;i++)
	{
		cin&gt;&gt;a[i];
		s[i]=s[i-1]+a[i];
	}
	for(int i=1;i&lt;=n;i++)
	{
		f[i]=s[i]-s[i-lowbit(i)];
	}
	while(m--)
	{
		int op;cin&gt;&gt;op;
		if(op==1)
		{
			cin&gt;&gt;x&gt;&gt;k;
			add(x,k);
		}
		else if(op==2)
		{
			cin&gt;&gt;x&gt;&gt;y;
			cout&lt;&lt;sum(y)-sum(x-1)&lt;&lt;"\\n";
		}
	}
	return 0;
}</code></pre>
      <hr class="my-8 border-zinc-700" />
      <blockquote class="border-l-4 border-zinc-500 pl-4 italic text-zinc-400 my-4">
        <p>Ref.</p>
        <ol class="list-decimal pl-6 mt-2 space-y-2">
          <li>我的老师的课件（）</li>
        </ol>
      </blockquote>
  `
};
