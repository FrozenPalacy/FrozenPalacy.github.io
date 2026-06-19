import { BlogPost } from '../../types';

export const post: BlogPost = {
  id: '19',
  title: '二分查找和二分答案',
  slug: 'oi_halfsearch',
  date: 'Jul 05, 2023',
  preview: '二分查找（查找特定值） 定义查找区间的左右端点$l$和$r$，查找区间$[l,r]$. 当$l\\leq r$时，计算中间值$mid=(l+r)/2=l+(r-l)/2$. 若$mid=k$，则找到答案...',
  readTime: '1 min read',
  tags: ['OI'],
  content: `
      <ol class="list-decimal pl-6 space-y-4 text-zinc-300 mb-8">
        <li>
          <p class="mb-2">二分查找（查找特定值）</p>
          <ol class="list-decimal pl-6 mt-2 space-y-2">
            <li>定义查找区间的左右端点$l$和$r$，查找区间$[l,r]$.</li>
            <li>当$l\\leq r$时，计算中间值$mid=(l+r)/2=l+(r-l)/2$.
              <ol class="list-decimal pl-6 mt-2 space-y-2">
                <li>若$mid=k$，则找到答案</li>
                <li>若$mid&gt;k$，则设$r=mid-1$，继续搜索</li>
                <li>若$mid&lt;k$，则设$l=mid+1$，继续搜索</li>
              </ol>
            </li>
            <li>当$l&gt;r$时，原区间$[l.r]$内不存在$k$。</li>
            <li>模板代码：
              <pre class="bg-zinc-900 p-4 rounded-lg overflow-x-auto mb-4"><code class="language-cpp text-sm text-zinc-300">while (l &lt;= r)
{
    int mid = (l + r) / 2;
    if (a[mid] == b)
    {
        // 找到此数
        break;
    }
    if (a[mid] &gt; b)
        r = mid - 1;
    else
        l = mid + 1;
}</code></pre>
            </li>
          </ol>
        </li>
        <li>
          <p class="mb-2">二分查找（查找第一个满足条件的位置）</p>
          <ol class="list-decimal pl-6 mt-2 space-y-2">
            <li>初始赋值：$l$是一个不满足条件的位置，$r$是一个满足条件的位置。</li>
            <li>当$l+1&lt;r$，即$l$和$r$不相邻时，计算中间端点$mid=(l+r)/2=l+(r-l)/2$.
              <ol class="list-decimal pl-6 mt-2 space-y-2">
                <li>若$mid$满足条件，设$r=mid$，继续搜索</li>
                <li>若$mid$不满足条件，设$l=mid$，继续搜索</li>
              </ol>
            </li>
            <li>当$l+1=r$时，$r$为第一个满足条件的位置。</li>
            <li>模板代码
              <pre class="bg-zinc-900 p-4 rounded-lg overflow-x-auto mb-4"><code class="language-cpp text-sm text-zinc-300">while (l + 1 &lt; r)
{
    int mid = (l + r) / 2;
    if (a[mid] &gt;= k)
        r = mid;
    else
        l = mid;
}</code></pre>
            </li>
          </ol>
        </li>
        <li>
          <p class="mb-2">二分答案</p>
          <ol class="list-decimal pl-6 mt-2 space-y-2">
            <li>使用二分查找的思路，通过对if的条件加以修改，得到答案，即为二分查找。</li>
          </ol>
        </li>
      </ol>
    `
};
