import { BlogPost } from '../../types';

export const post: BlogPost = {
  id: '24',
  title: '算法的基本概念',
  slug: 'it_algorithm',
  date: 'Jun 15, 2023',
  preview: '算法是一系列的计算步骤，用来将输入的数据转化成输出的结果。特征：有穷性、确定性、可行性...',
  readTime: '1 min read',
  tags: ['IT', 'High School'],
  content: `
      <ol class="list-decimal pl-6 space-y-4 text-zinc-300 mb-8">
        <li>
          <p class="mb-2">算法是<strong class="text-white">一系列的计算步骤，用来将输入的数据转化成输出的结果。</strong></p>
        </li>
        <li>
          <p class="mb-2">特征：</p>
          <ol class="list-decimal pl-6 mt-2 space-y-2">
            <li>有穷性</li>
            <li>确定性</li>
            <li>可行性</li>
            <li>有零个或多个输入</li>
            <li>至少有一个输出</li>
          </ol>
        </li>
        <li>
          <p class="mb-2">描述方法：</p>
          <ol class="list-decimal pl-6 mt-2 space-y-2">
            <li>自然语言</li>
            <li>流程图
              <pre class="bg-zinc-900 p-4 rounded-lg overflow-x-auto mb-4"><code class="language-mermaid text-sm text-zinc-300">flowchart TD
    id1(["起止框（表示算法开始和结束）"])
    --&gt;id2["处理框（要处理的内容）"]
    --&gt;id3[/"输入/输出框"/]
    --&gt;id4{"判断框"}
    --&gt;id5(("连接符"))</code></pre>
            </li>
            <li>伪代码</li>
          </ol>
        </li>
        <li>
          <p class="mb-2">基本控制结构</p>
          <ol class="list-decimal pl-6 mt-2 space-y-2">
            <li>
              <p class="mb-2">顺序结构</p>
              <pre class="bg-zinc-900 p-4 rounded-lg overflow-x-auto mb-4"><code class="language-mermaid text-sm text-zinc-300">flowchart TD
    A["操作1"]--&gt;B["操作2"]</code></pre>
            </li>
            <li>
              <p class="mb-2">分支结构</p>
              <pre class="bg-zinc-900 p-4 rounded-lg overflow-x-auto mb-4"><code class="language-mermaid text-sm text-zinc-300">flowchart TD
    A["操作1"]--&gt;B{"条件"}
    B--&gt;|是| C["操作2"]
    B--&gt;|否| D["操作3"]
    C & D --&gt;E["分支外的操作"]</code></pre>
            </li>
            <li>
              <p class="mb-2">循环结构</p>
              <ul class="list-disc pl-6 mt-2 space-y-2">
                <li>
                  <p class="mb-2">当循环</p>
                  <pre class="bg-zinc-900 p-4 rounded-lg overflow-x-auto mb-4"><code class="language-mermaid text-sm text-zinc-300">flowchart TD
    A{"条件"}
    A--&gt;|是| B["循环体"]
    B--&gt;A
    A---&gt;|否| C["循环外的操作"]</code></pre>
                </li>
                <li>
                  <p class="mb-2">直到循环</p>
                  <pre class="bg-zinc-900 p-4 rounded-lg overflow-x-auto mb-4"><code class="language-mermaid text-sm text-zinc-300">flowchart TD
    A["循环体"]--&gt;B{"条件"}
    B--&gt;|否|A
    B--&gt;|是|C["循环外的操作"]</code></pre>
                </li>
              </ul>
            </li>
          </ol>
        </li>
      </ol>
  `
};
