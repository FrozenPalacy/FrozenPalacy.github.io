import { BlogPost } from '../../types';

export const post: BlogPost = {
  id: '7',
  title: 'Cpp Basic Tutorial',
  slug: 'cpp_basic_tutorial',
  date: 'Oct 10, 2025',
  preview: '居然要我这种水平的人来写一份C++入门教程，属实是有点抬举我了。不妨先让你有一处宝地写代码？...',
  readTime: '1 min read',
  tags: ['OI'],
  content: `
      <p class="mb-4 text-zinc-300">居然要我这种水平的人来写一份C++入门教程，属实是有点抬举我了。</p>

      <h1 class="text-3xl font-bold text-white mb-6 mt-12" id="不妨先让你有一处宝地写代码">不妨先让你有一处宝地写代码？</h1>
      <p class="mb-4 text-zinc-300">请参见<a class="text-blue-400 hover:underline" href="https://www.bilibili.com/video/BV12DYqzUEin/" target="_blank" rel="noopener">https://www.bilibili.com/video/BV12DYqzUEin/</a>，安装一个简易的轻量化的C++编辑器及编译器的集成环境（C++ IDE)。此教程中略过不表。</p>

      <h1 class="text-3xl font-bold text-white mb-6 mt-12" id="从基本的顺序结构开始吧">从基本的顺序结构开始吧！</h1>
      <p class="mb-4 text-zinc-300">程序的运行起始于一个<strong>整型的主函数 (main())</strong> 。在主函数中的代码会被逐行执行。你也可以在完整的代码文件中声明一些子函数，并在主函数中予以调用。声明主函数的办法为：</p>

      <div class="bg-[#272822] p-4 rounded-xl overflow-x-auto mb-6">
      <pre tabindex="0" style="color:#f8f8f2;background-color:#272822;-moz-tab-size:4;-o-tab-size:4;tab-size:4;"><code class="language-cpp" data-lang="cpp"><span style="display:flex;"><span><span style="color:#66d9ef">int</span> <span style="color:#a6e22e">main</span>()
      </span></span><span style="display:flex;"><span>{
      </span></span><span style="display:flex;"><span>	<span style="color:#75715e">//在这个位置写你的代码
      </span></span></span><span style="display:flex;"><span><span style="color:#75715e"></span>	<span style="color:#66d9ef">return</span> <span style="color:#ae81ff">0</span>;
      </span></span><span style="display:flex;"><span>}
      </span></span></code></pre></div>

      <p class="mb-4 text-zinc-300">从这一段代码来看，已经出现了多个问题。我在此试着逐行解释。</p>

      <h2 class="text-2xl font-bold text-white mb-4 mt-8" id="变量基本类型">变量基本类型</h2>
      <p class="mb-4 text-zinc-300">不同于Python, C++在声明变量时严格要求要声明变量类型。声明为整数类型的变量不可以存放浮点数或小数，声明为字符型的变量不可以存放整数或小数。</p>
      <p class="mb-4 text-zinc-300">我试着列一张表格，来展示你可能会用到的一些。</p>

      <div class="overflow-x-auto mb-6">
      <table class="w-full text-left border-collapse text-zinc-300">
      <thead>
      <tr class="border-b border-white/10">
      <th class="p-2 text-white">类型</th>
      <th class="p-2 text-white">名称</th>
      <th class="p-2 text-white">值域 / 精度</th>
      <th class="p-2 text-white">占用空间 (Byte)</th>
      </tr>
      </thead>
      <tbody>
      <tr class="border-b border-white/5">
      <td class="p-2">bool</td>
      <td class="p-2">bool / 布尔值</td>
      <td class="p-2">\${0,1}\$</td>
      <td class="p-2">1</td>
      </tr>
      <tr class="border-b border-white/5">
      <td class="p-2">char</td>
      <td class="p-2">character / 字符型</td>
      <td class="p-2">所有字符</td>
      <td class="p-2">1</td>
      </tr>
      <tr class="border-b border-white/5">
      <td class="p-2">int</td>
      <td class="p-2">interger / 整数型</td>
      <td class="p-2">\$[-2^{31},2^{31}-1]\$</td>
      <td class="p-2">4</td>
      </tr>
      <tr class="border-b border-white/5">
      <td class="p-2">float</td>
      <td class="p-2">float / 浮点数</td>
      <td class="p-2">一般保证小数点后8位精确</td>
      <td class="p-2">4</td>
      </tr>
      <tr class="border-b border-white/5">
      <td class="p-2">double</td>
      <td class="p-2">double / 双精度浮点数</td>
      <td class="p-2">一般保证小数点后16位精确</td>
      <td class="p-2">8</td>
      </tr>
      </tbody>
      </table>
      </div>

      <p class="mb-4 text-zinc-300">(Ref: <a class="text-blue-400 hover:underline" href="https://cppreference.com/w/cpp/language/type-id.html" target="_blank" rel="noopener">Type - cppreference.com</a>)</p>

      <p class="mb-4 text-zinc-300">除此之外，对于<code>int</code>类型，还有不同<strong>位宽</strong>的short int, long int，及是否留有符号位的signed int, unsigned int等多种子类型。至于其原理，详见：<a class="text-blue-400 hover:underline" href="https://oi-wiki.org/lang/var/" target="_blank" rel="noopener">变量 - OI Wiki</a>.</p>

      <p class="mb-4 text-zinc-300">不同的变量将占用不同的内存空间，在写代码时请注意根据数据范围，尽可能地少使用内存空间。当然打比赛除外，打比赛要的就是冗余保证过过过就好了。</p>

      <p class="mb-4 text-zinc-300">回到主函数上。当我们为一个函数赋予这样的类型，是对其<strong>返回值的类型</strong>存在要求。例如，当我们在主函数中调用一个子函数，我们可以决定子函数返回一个怎样的值。对于主函数，一般返回0，所以在代码块最后存在一个return 0。<em>（这里具体向谁返回我也没太研究清楚，可能是操作系统？)</em></p>

      <h2 class="text-2xl font-bold text-white mb-4 mt-8" id="注释">注释</h2>
      <p class="mb-4 text-zinc-300">C++的注释分为单行和多行注释，注释中的内容不会被执行，也不参与程序编译。你可以在注释里放一尊大佛，祈祷你的程序能够跑起来。或者骂骂人也行，但小心被发现。</p>

      <div class="bg-[#272822] p-4 rounded-xl overflow-x-auto mb-6">
      <pre tabindex="0" style="color:#f8f8f2;background-color:#272822;-moz-tab-size:4;-o-tab-size:4;tab-size:4;"><code class="language-cpp" data-lang="cpp"><span style="display:flex;"><span><span style="color:#66d9ef">int</span> <span style="color:#a6e22e">main</span>()
      </span></span><span style="display:flex;"><span>{
      </span></span><span style="display:flex;"><span>	<span style="color:#75715e">//这是单行注释
      </span></span></span><span style="display:flex;"><span><span style="color:#75715e"></span>	
      </span></span><span style="display:flex;"><span>	<span style="color:#75715e">/*
      </span></span></span><span style="display:flex;"><span><span style="color:#75715e">		这是多行注释，以斜杠和星号开头，以星号和斜杠结尾。
      </span></span></span><span style="display:flex;"><span><span style="color:#75715e">		注释中的内容都不会被执行。
      </span></span></span><span style="display:flex;"><span><span style="color:#75715e">	*/</span>
      </span></span><span style="display:flex;"><span>	<span style="color:#66d9ef">return</span> <span style="color:#ae81ff">0</span>;
      </span></span><span style="display:flex;"><span>}
      </span></span></code></pre></div>

      <p class="mb-4 text-zinc-300">好了！现在你已经可以声明变量，完成一些基本的运算，例如加减乘除。比方说：</p>

      <div class="bg-[#272822] p-4 rounded-xl overflow-x-auto mb-6">
      <pre tabindex="0" style="color:#f8f8f2;background-color:#272822;-moz-tab-size:4;-o-tab-size:4;tab-size:4;"><code class="language-cpp" data-lang="cpp"><span style="display:flex;"><span><span style="color:#66d9ef">int</span> <span style="color:#a6e22e">main</span>()
      </span></span><span style="display:flex;"><span>{
      </span></span><span style="display:flex;"><span>	<span style="color:#66d9ef">int</span> a,b,c; <span style="color:#75715e">//C++中，声明同一类型的多个变量时，可以用逗号分隔开
      </span></span></span><span style="display:flex;"><span><span style="color:#75715e"></span>	a<span style="color:#f92672">=</span><span style="color:#ae81ff">1</span>,b<span style="color:#f92672">=</span><span style="color:#ae81ff">2</span>; <span style="color:#75715e">//对多个变量赋值时，也可以用逗号
      </span></span></span><span style="display:flex;"><span><span style="color:#75715e"></span>	c<span style="color:#f92672">=</span>a<span style="color:#f92672">+</span>b;
      </span></span><span style="display:flex;"><span>	<span style="color:#66d9ef">return</span> <span style="color:#ae81ff">0</span>;
      </span></span><span style="display:flex;"><span>}
      </span></span></code></pre></div>

      <p class="mb-4 text-zinc-300">但是当你运行一下程序，你会发现你什么都得不到。这是怎么回事？</p>
      <p class="mb-4 text-zinc-300">你突然发现，你只让程序完成了计算，但是并没有命令程序把答案告诉你。换言之，程序没有告诉你运算结果的义务。于是你打算动用你作为统治者的强权暴力手段，让它告诉你运算结果。</p>
      <p class="mb-4 text-zinc-300">你又发现，你不能跟他讲“快把答案告诉我！”，并且你不知道怎么逼迫他告诉你答案。</p>

      <h2 class="text-2xl font-bold text-white mb-4 mt-8" id="输入输出">输入/输出</h2>
      <p class="mb-4 text-zinc-300">C++有两种主要的输入输出方式，我们分别介绍。</p>
      <p class="mb-4 text-zinc-300">(Ref. <a class="text-blue-400 hover:underline" href="https://oi-wiki.org/lang/basic/#scanf-%E4%B8%8E-printf" target="_blank" rel="noopener">C++ 语法基础 - OI Wiki</a>)</p>

      <h3 class="text-xl font-bold text-white mb-3 mt-6" id="格式化输入输出-scanfprintf">格式化输入输出 (scanf/printf)</h3>

      <div class="bg-[#272822] p-4 rounded-xl overflow-x-auto mb-6">
      <pre tabindex="0" style="color:#f8f8f2;background-color:#272822;-moz-tab-size:4;-o-tab-size:4;tab-size:4;"><code class="language-cpp" data-lang="cpp"><span style="display:flex;"><span><span style="color:#66d9ef">int</span> <span style="color:#a6e22e">main</span>()
      </span></span><span style="display:flex;"><span>{
      </span></span><span style="display:flex;"><span>	<span style="color:#66d9ef">int</span> a,b,c;
      </span></span><span style="display:flex;"><span>	scanf(<span style="color:#e6db74">&#34;%d%d%d&#34;</span>,<span style="color:#f92672">&amp;</span>a,<span style="color:#f92672">&amp;</span>b,<span style="color:#f92672">&amp;</span>c);
      </span></span><span style="display:flex;"><span>	printf(<span style="color:#e6db74">&#34;%d %d %d&#34;</span>,a,b,c);
      </span></span><span style="display:flex;"><span>	<span style="color:#66d9ef">return</span> <span style="color:#ae81ff">0</span>;
      </span></span><span style="display:flex;"><span>}
      </span></span></code></pre></div>

      <p class="mb-4 text-zinc-300">在<code>scanf</code>的使用上，需要注意，必须在后面的变量前加一个<code>&amp;</code>。这是由于<code>scanf</code>接收的参数是一个在内存中的地址。</p>
      <p class="mb-4 text-zinc-300">在两行代码中通用的<code>%d</code>，称为<strong>类型标识符</strong>，除了<code>%d</code>之外，还有<code>%s</code>,<code>%c</code>,<code>%lf</code>等等。详见上文中本部分的Reference。</p>
      <p class="mb-4 text-zinc-300">printf中，如果你不想要输出一个变量，你只需直接在引号中写上你想要输出的内容即可。类型标识符占据的位置，会在字符串之外的逗号按顺序输出。例如，你可以使用：</p>

      <div class="bg-[#272822] p-4 rounded-xl overflow-x-auto mb-6">
      <pre tabindex="0" style="color:#f8f8f2;background-color:#272822;-moz-tab-size:4;-o-tab-size:4;tab-size:4;"><code class="language-cpp" data-lang="cpp"><span style="display:flex;"><span><span style="color:#66d9ef">int</span> <span style="color:#a6e22e">main</span>()
      </span></span><span style="display:flex;"><span>{
      </span></span><span style="display:flex;"><span>	<span style="color:#66d9ef">int</span> a<span style="color:#f92672">=</span><span style="color:#ae81ff">1</span>,b<span style="color:#f92672">=</span><span style="color:#ae81ff">1</span>;
      </span></span><span style="display:flex;"><span>	printf(<span style="color:#e6db74">&#34;%d个人有%d个头&#34;</span>,a,b);
      </span></span><span style="display:flex;"><span>}
      </span></span></code></pre></div>

      <p class="mb-4 text-zinc-300">输出结果为：</p>

      <div class="bg-[#272822] p-4 rounded-xl overflow-x-auto mb-6">
      <pre tabindex="0" style="color:#f8f8f2;background-color:#272822;-moz-tab-size:4;-o-tab-size:4;tab-size:4;"><code class="language-cpp" data-lang="cpp"><span style="display:flex;"><span><span style="color:#ae81ff">1</span><span style="color:#960050;background-color:#1e0010">个人有</span><span style="color:#ae81ff">1</span><span style="color:#960050;background-color:#1e0010">个头</span>
      </span></span></code></pre></div>

      <h3 class="text-xl font-bold text-white mb-3 mt-6" id="输入输出流-cincout">输入输出流 (cin/cout)</h3>

      <div class="bg-[#272822] p-4 rounded-xl overflow-x-auto mb-6">
      <pre tabindex="0" style="color:#f8f8f2;background-color:#272822;-moz-tab-size:4;-o-tab-size:4;tab-size:4;"><code class="language-cpp" data-lang="cpp"><span style="display:flex;"><span><span style="color:#66d9ef">int</span> <span style="color:#a6e22e">main</span>()
      </span></span><span style="display:flex;"><span>{
      </span></span><span style="display:flex;"><span>	<span style="color:#66d9ef">int</span> a,b,c;
      </span></span><span style="display:flex;"><span>	cin<span style="color:#f92672">&gt;&gt;</span>a<span style="color:#f92672">&gt;&gt;</span>b<span style="color:#f92672">&gt;&gt;</span>c;
      </span></span><span style="display:flex;"><span>	cout<span style="color:#f92672">&lt;&lt;</span>a<span style="color:#f92672">&lt;&lt;</span><span style="color:#e6db74">&#34; &#34;</span><span style="color:#f92672">&lt;&lt;</span>b<span style="color:#f92672">&lt;&lt;</span><span style="color:#e6db74">&#34; &#34;</span><span style="color:#f92672">&lt;&lt;</span>c<span style="color:#f92672">&lt;&lt;</span>endl;
      </span></span><span style="display:flex;"><span>	<span style="color:#66d9ef">return</span> <span style="color:#ae81ff">0</span>;
      </span></span><span style="display:flex;"><span>}
      </span></span></code></pre></div>

      <p class="mb-4 text-zinc-300">相较于格式化输入输出，输入输出流要简单一些，它不需要指定输入输出的内容的类型。你只需要用<code>&lt;&lt;</code>将输出的内容连接起来即可。变量与字符串之间需要一个<code>&lt;&lt;</code>，如上面的代码所示。</p>
      <p class="mb-4 text-zinc-300"><code>cin</code>/<code>cout</code>的速度要慢于<code>scanf</code>/<code>printf</code>，且使用<code>endl</code>换行的速度要慢于<code>\n</code>换行。在部分场景下可能会导致程序运行时间超时。</p>
      <p class="mb-4 text-zinc-300">到这里，你可能会发现，我们的代码居然<strong>仍然无法运行</strong>。这是由于<code>scanf</code>、<code>printf</code>、<code>cin</code>、<code>cout</code>都是在C++库中的内容，我们需要通过<strong>引入头文件</strong>将他们引入到代码当中来。</p>

      <h2 class="text-2xl font-bold text-white mb-4 mt-8" id="头文件和命名空间">头文件和命名空间</h2>
      <p class="mb-4 text-zinc-300"><code>scanf</code>和<code>printf</code>被包含在<code>stdio.h</code>头文件中，你需要在代码的最开头加入</p>

      <div class="bg-[#272822] p-4 rounded-xl overflow-x-auto mb-6">
      <pre tabindex="0" style="color:#f8f8f2;background-color:#272822;-moz-tab-size:4;-o-tab-size:4;tab-size:4;"><code class="language-cpp" data-lang="cpp"><span style="display:flex;"><span><span style="color:#75715e">#include</span><span style="color:#75715e">&lt;stdio.h&gt;</span><span style="color:#75715e">
      </span></span></span></code></pre></div>

      <p class="mb-4 text-zinc-300">以在程序当中使用它们。</p>
      <p class="mb-4 text-zinc-300"><code>cin</code>和<code>cout</code>被包含在<code>iostream</code>头文件中，你需要在代码的最开头加入</p>

      <div class="bg-[#272822] p-4 rounded-xl overflow-x-auto mb-6">
      <pre tabindex="0" style="color:#f8f8f2;background-color:#272822;-moz-tab-size:4;-o-tab-size:4;tab-size:4;"><code class="language-cpp" data-lang="cpp"><span style="display:flex;"><span><span style="color:#75715e">#include</span><span style="color:#75715e">&lt;iostream&gt;</span><span style="color:#75715e">
      </span></span></span></code></pre></div>

      <p class="mb-4 text-zinc-300">以在程序当中使用它们。</p>
      <p class="mb-4 text-zinc-300">命名空间，aka namespace，目的是在大型项目中防止<strong>重复名称的内容指代不清</strong>。上述的四个输入输出函数，均在<code>std</code>命名空间中。想要调用他们，有两种使用方法：</p>

      <ol class="list-decimal pl-6 space-y-4 text-zinc-300 mb-8">
      <li>
      <p>在使用时，在前面加上<code>std::</code> ；</p>
      <p>例如：<code>std::cout&lt;&lt;&quot;abc&quot;&lt;&lt;endl;</code></p>
      </li>
      <li>
      <p>在程序的开头写上<code>using namespace std;</code> 。此时，在后面使用上述四种函数时，你只需要直接<code>cout&lt;&lt;&quot;abc&quot;&lt;&lt;endl;</code> 即可。</p>
      </li>
      </ol>

      <p class="mb-4 text-zinc-300">第一种方式较为繁杂，但在大型工程中能更严谨地区分所指代的内容；第二种方式将整个<code>std</code>库引入到程序中来，在较小的项目中影响不大且更加便捷。</p>
      <p class="mb-4 text-zinc-300">(Ref: <a class="text-blue-400 hover:underline" href="https://blog.csdn.net/kjl167/article/details/126244107" target="_blank" rel="noopener">C++ namespace-CSDN博客</a>，<a class="text-blue-400 hover:underline" href="https://oi-wiki.org/lang/namespace/" target="_blank" rel="noopener">命名空间 - OI Wiki</a>)</p>
      <p class="mb-4 text-zinc-300">好了！接下来你可以开始体验每个程序员都将走的路了。你好，世界！</p>
      <p class="mb-4 text-zinc-300">为进一步明确刚才的命名空间事项，我讲述两个写法。</p>
      <p class="mb-4 text-zinc-300">写法一：</p>

      <div class="bg-[#272822] p-4 rounded-xl overflow-x-auto mb-6">
      <pre tabindex="0" style="color:#f8f8f2;background-color:#272822;-moz-tab-size:4;-o-tab-size:4;tab-size:4;"><code class="language-cpp" data-lang="cpp"><span style="display:flex;"><span><span style="color:#75715e">#include</span><span style="color:#75715e">&lt;bits/stdc++.h&gt; </span><span style="color:#75715e">
      </span></span></span><span style="display:flex;"><span><span style="color:#75715e"></span><span style="color:#75715e">//&lt;bits/stdc++.h&gt;
      </span></span></span><span style="display:flex;"><span><span style="color:#75715e">//aka 万能头，包含了绝大多数C++的库
      </span></span></span><span style="display:flex;"><span><span style="color:#75715e">//不建议在大型工程中使用万能头
      </span></span></span><span style="display:flex;"><span><span style="color:#75715e"></span><span style="color:#66d9ef">using</span> <span style="color:#66d9ef">namespace</span> std;
      </span></span><span style="display:flex;"><span><span style="color:#66d9ef">int</span> <span style="color:#a6e22e">main</span>()
      </span></span><span style="display:flex;"><span>{
      </span></span><span style="display:flex;"><span>	cout<span style="color:#f92672">&lt;&lt;</span><span style="color:#e6db74">&#34;Hello, World!&#34;</span><span style="color:#f92672">&lt;&lt;</span>endl;
      </span></span><span style="display:flex;"><span>	<span style="color:#66d9ef">return</span> <span style="color:#ae81ff">0</span>;
      </span></span><span style="display:flex;"><span>}
      </span></span></code></pre></div>

      <p class="mb-4 text-zinc-300">写法二：</p>

      <div class="bg-[#272822] p-4 rounded-xl overflow-x-auto mb-6">
      <pre tabindex="0" style="color:#f8f8f2;background-color:#272822;-moz-tab-size:4;-o-tab-size:4;tab-size:4;"><code class="language-cpp" data-lang="cpp"><span style="display:flex;"><span>
      </span></span><span style="display:flex;"><span><span style="color:#75715e">#include</span><span style="color:#75715e">&lt;bits/stdc++.h&gt;</span><span style="color:#75715e">
      </span></span></span><span style="display:flex;"><span><span style="color:#75715e"></span>
      </span></span><span style="display:flex;"><span><span style="color:#66d9ef">int</span> <span style="color:#a6e22e">main</span>()
      </span></span><span style="display:flex;"><span>{
      </span></span><span style="display:flex;"><span>	std<span style="color:#f92672">::</span>cout<span style="color:#f92672">&lt;&lt;</span><span style="color:#e6db74">&#34;Hello, World!&#34;</span><span style="color:#f92672">&lt;&lt;</span>endl;
      </span></span><span style="display:flex;"><span>	<span style="color:#66d9ef">return</span> <span style="color:#ae81ff">0</span>;
      </span></span><span style="display:flex;"><span>}
      </span></span></code></pre></div>
    `
};
