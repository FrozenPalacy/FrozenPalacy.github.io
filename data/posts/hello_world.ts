import { BlogPost } from '../../types';

export const post: BlogPost = {
  id: '8',
  title: 'Hello_world',
  slug: 'hello_world',
  date: 'May 25, 2023',
  preview: '你好，世界！',
  readTime: '1 min read',
  tags: ['Test'],
  content: `
      <div class="bg-[#272822] p-4 rounded-xl overflow-x-auto mb-6">
      <pre tabindex="0" style="color:#f8f8f2;background-color:#272822;-moz-tab-size:4;-o-tab-size:4;tab-size:4;"><code class="language-cpp" data-lang="cpp"><span style="display:flex;"><span><span style="color:#75715e">#include</span><span style="color:#75715e">&lt;bits/stdc++.h&gt;</span><span style="color:#75715e">
      </span></span></span></code></pre></div>

      <h3 class="text-xl font-bold text-white mb-3 mt-6" id="inline-math-test">Inline math test</h3>
      <p class="mb-4 text-zinc-300">When $ a \\neq 0 $, we can find</p>
      <p class="my-6 text-lg text-center font-serif text-white">
      $$
      x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}
      $$
      </p>
      <p class="mb-4 text-zinc-300">helloworld123456789<br>你好</p>
    `
};
