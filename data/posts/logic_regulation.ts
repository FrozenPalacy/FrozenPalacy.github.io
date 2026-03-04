import { BlogPost } from '../../types';

export const post: BlogPost = {
  id: '12',
  title: '逻辑的基本规律',
  slug: 'logic_regulation',
  date: 'Dec 01, 2025',
  preview: '逻辑常项符号汇编。第二章 基本规律 课件P3 简单地，写出来是各种各样的符号的，都属于逻辑常项...',
  readTime: '2 min read',
  tags: ['College', 'Logic'],
  content: `
      <ol class="list-decimal pl-6 space-y-4 text-zinc-300 mb-8">
        <li>
          <p class="mb-2">逻辑常项符号汇编。第二章 基本规律 <em>课件P3</em></p>
          <p class="mb-2">简单地，写出来是各种各样的符号的，都属于逻辑常项。</p>
          <p class="mb-2">用各种字母表达的，属于逻辑变项。</p>
        </li>
        <li>
          <p class="mb-2">最基本的逻辑特性：确定性、无矛盾性、明确性。</p>
          <p class="mb-2">所有正确思维应满足上述三个性质。</p>
        </li>
        <li>
          <p class="mb-2">同一律、矛盾律、排中律在思维中普遍适用。</p>
        </li>
        <li>
          <p class="mb-2">逻辑常项（符号）表</p>
        </li>
      </ol>
      <div class="overflow-x-auto mb-8">
        <table class="w-full text-left border-collapse">
          <thead>
            <tr>
              <th class="border-b border-zinc-700 p-2 text-white">符号</th>
              <th class="border-b border-zinc-700 p-2 text-white">汉语</th>
              <th class="border-b border-zinc-700 p-2 text-white">命题类别</th>
            </tr>
          </thead>
          <tbody class="text-zinc-300">
            <tr>
              <td class="border-b border-zinc-800 p-2">A</td>
              <td class="border-b border-zinc-800 p-2">所有……都是</td>
              <td class="border-b border-zinc-800 p-2">全称肯定</td>
            </tr>
            <tr>
              <td class="border-b border-zinc-800 p-2">E</td>
              <td class="border-b border-zinc-800 p-2">所有……都不是</td>
              <td class="border-b border-zinc-800 p-2">全称否定</td>
            </tr>
            <tr>
              <td class="border-b border-zinc-800 p-2">I</td>
              <td class="border-b border-zinc-800 p-2">有些……是</td>
              <td class="border-b border-zinc-800 p-2">特称肯定</td>
            </tr>
            <tr>
              <td class="border-b border-zinc-800 p-2">O</td>
              <td class="border-b border-zinc-800 p-2">有些……不是</td>
              <td class="border-b border-zinc-800 p-2">特称否定</td>
            </tr>
            <tr>
              <td class="border-b border-zinc-800 p-2">R</td>
              <td class="border-b border-zinc-800 p-2">与……有关系</td>
              <td class="border-b border-zinc-800 p-2">关系命题</td>
            </tr>
          </tbody>
        </table>
      </div>
      <ol class="list-decimal pl-6 space-y-4 text-zinc-300 mb-8">
        <li>
          <p class="mb-2">矛盾关系：两个命题不可同真且不可同假。（对角线）</p>
          <p class="mb-2">反对关系：两个关系不可同真，可同假。</p>
          <p class="mb-2">下反对关系：两个关系可同真，不可同假。</p>
          <p class="mb-2">等值关系：图中对角线连接的东西。</p>
          <p class="mb-2">AEIO统称直言命题。</p>
          <img src="https://s41.ax1x.com/2025/12/01/pZVxLz8.png" alt="pZVxLz8.png" class="rounded-xl my-4 border border-white/10 w-full max-w-lg mx-auto" />
        </li>
      </ol>

      <h1 class="text-3xl font-bold text-white mb-6 mt-12" id="一同一律">一、同一律</h1>
      <h2 class="text-2xl font-bold text-white mb-4 mt-8" id="一内容和要求">（一）内容和要求</h2>
      <ol class="list-decimal pl-6 space-y-4 text-zinc-300 mb-8">
        <li>内容：同一思维过程中，每一思想与其自身同一。A就是A。</li>
        <li>公式： $A\\Rightarrow A$ / 如果$A$，那么$A$.</li>
        <li>要求：在同一思维过程中，任一概念或命题都必须保持自身同一。<strong class="text-white">确定性</strong>。</li>
        <li>逻辑错误：1.混淆或偷换概念；2.转移或偷换论题。</li>
        <li>同一律要求思想保持确定性，不否认思想的发展变化。</li>
        <li>同一律是思维的规律，仅在思维领域中起作用。不要求客观事物永远与其自身绝对同一。</li>
      </ol>

      <h1 class="text-3xl font-bold text-white mb-6 mt-12" id="二矛盾律">二、矛盾律</h1>
      <ol class="list-decimal pl-6 space-y-4 text-zinc-300 mb-8">
        <li>
          <p class="mb-2">内容：同一思维过程中，两个相互否定的思想不能同真，必有一假。</p>
        </li>
        <li>
          <p class="mb-2">公式：A不是非A。</p>
          <p class="my-6 text-lg text-center font-serif text-white">
          $$
          \\lnot (A \\land\\lnot A)
          $$
          </p>
        </li>
        <li>
          <p class="mb-2">要求：</p>
          <ol class="list-decimal pl-6 mt-2 space-y-2">
            <li>在<strong class="text-white">同一思维</strong>*（即同一时间、同一关系下对同一对象）*过程中，对于不能同真的命题不能同时予以肯定。<strong class="text-white">无矛盾性</strong>。</li>
            <li>指的是思想的自相矛盾，而非客观现实中存在的矛盾</li>
            <li>**矛盾律对下反对关系不适用！！**下反对关系可以同真。</li>
          </ol>
        </li>
        <li>
          <p class="mb-2">相互否定的思想：具有矛盾关系或反对关系的命题。</p>
        </li>
        <li>
          <p class="mb-2">推理时<strong class="text-white">由真推假</strong>：若命题 $p$为真，则否定命题 $q$为假。</p>
        </li>
      </ol>

      <h2 class="text-2xl font-bold text-white mb-4 mt-8" id="悖论">悖论</h2>
      <ol class="list-decimal pl-6 space-y-4 text-zinc-300 mb-8">
        <li>
          <p class="mb-2">一类特殊的逻辑矛盾。由该命题的真可推出它的假，由假可推出它的真。</p>
        </li>
        <li>
          <p class="mb-2">$A=\\lnot A$。A蕴含非A，非A蕴含A，<strong class="text-white">A与非A等值</strong>。</p>
        </li>
        <li>
          <p class="mb-2">罗素 集合论悖论：</p>
          <p class="mb-2">定义一个集合 $S$， $S={A|A\\notin A,A为集合}$。则 $S\\isin S$吗？</p>
        </li>
        <li>
          <p class="mb-2">说谎者悖论：这句话是一句谎话。</p>
        </li>
        <li>
          <p class="mb-2">理发师悖论：我只给村里不给自己理发的人理发。那么理发师是否给自己理发？</p>
        </li>
      </ol>

      <h1 class="text-3xl font-bold text-white mb-6 mt-12" id="三排中律">三、排中律</h1>
      <ol class="list-decimal pl-6 space-y-4 text-zinc-300 mb-8">
        <li>
          <p class="mb-2">内容：在同一思维过程中，两个互相矛盾的思想不能同假，必有一真。</p>
        </li>
        <li>
          <p class="mb-2">公式：A或非A。</p>
          <p class="my-6 text-lg text-center font-serif text-white">
          $$
          A\\lor\\lnot A
          $$
          </p>
        </li>
        <li>
          <p class="mb-2">要求：</p>
          <ol class="list-decimal pl-6 mt-2 space-y-2">
            <li>在同一思维过程中，对于不能同假的两个命题不能同时予以否定。</li>
            <li><strong class="text-white">排中律不适用反对关系</strong>。反对关系可以同假。</li>
            <li>排中律仅要求“不能同时否定”，但不要求对矛盾关系或下反对关系命题确定哪一个为真，哪一个为假。即，对哪一方为真和哪一方为假可以不做断定。</li>
          </ol>
        </li>
        <li>
          <p class="mb-2">造成的错误：两不可。</p>
        </li>
        <li>
          <p class="mb-2">推理时<strong class="text-white">由假推真</strong>：若命题 $p$为假，则否定命题 $q$为真。</p>
        </li>
      </ol>

      <h2 class="text-2xl font-bold text-white mb-4 mt-8" id="复杂问语-aka-不正当问语">复杂问语 aka 不正当问语</h2>
      <ol class="list-decimal pl-6 space-y-4 text-zinc-300 mb-8">
        <li>
          <p class="mb-2">概念：一种具有预设成分的问语。</p>
          <p class="mb-2">当问语含有对方未承认并不接受的预设成分（未经证实的假设），不论作肯定或否定回答，其结果都承认了问语中的预设成分。故对这类问语”不置可否“不违反排中律。</p>
        </li>
        <li>
          <p class="mb-2">肯定回答： $p\\land q$，否定 $p\\land\\lnot q$，不置可否 $\\lnot q$.</p>
        </li>
      </ol>
      <p class="mb-4 text-zinc-300">区分矛盾律、排中律：</p>
      <img src="https://s41.ax1x.com/2025/12/01/pZVxjsg.png" alt="pZVxjsg.png" class="rounded-xl my-4 border border-white/10 w-full max-w-lg mx-auto" />
      <p class="mb-4 text-zinc-300">德摩根定律：$\\lnot(p\\lor q)\\Rightarrow\\lnot p\\land\\lnot q$.</p>
    `
};
