import { BlogPost } from '../../types';

export const post: BlogPost = {
  id: '10',
  title: '信息技术与社会',
  slug: 'it_and_society',
  date: 'May 29, 2023',
  preview: '信息技术革命促使信息社会到来。农业社会—>工业社会—>信息社会。信息社会是以信息活动为基础的社会...',
  readTime: '1 min read',
  tags: ['High School', 'IT'],
  content: `
      <blockquote class="border-l-4 border-zinc-500 pl-4 italic text-zinc-400 my-4">
        <p>信息技术革命促使信息社会到来。</p>
      </blockquote>
      <ol class="list-decimal pl-6 space-y-4 text-zinc-300 mb-8">
        <li>
          <p class="mb-2">农业社会—&gt;工业社会—&gt;信息社会</p>
        </li>
        <li>
          <p class="mb-2">信息社会是<strong class="text-white">以信息活动为基础</strong>的社会。</p>
          <ol class="list-decimal pl-6 mt-2 space-y-2">
            <li>基本原则：以人为本、包容性、全面发展</li>
            <li>资源：信息、知识</li>
            <li>本质：以信息活动为基础</li>
          </ol>
        </li>
        <li>
          <p class="mb-2">信息社会的特征：</p>
          <ol class="list-decimal pl-6 mt-2 space-y-2">
            <li>信息经济
              <ol class="list-decimal pl-6 mt-2 space-y-2">
                <li>指以信息与知识的生产、分配、拥有、使用为主要特征的经济形态。</li>
                <li>是决定信息社会发展水平高低的最主要因素。</li>
              </ol>
            </li>
            <li>在线政务
              <ol class="list-decimal pl-6 mt-2 space-y-2">
                <li>指利用现代化信息技术实现社会管理和公共服务的<strong class="text-white">新型政府治理模式</strong>。</li>
                <li>特征：公开透明、高效治理、互动参与</li>
              </ol>
            </li>
            <li>数字生活
              <ol class="list-decimal pl-6 mt-2 space-y-2">
                <li>体现在<strong>生活工具</strong>、<strong>生活方式</strong>、<strong>生活内容</strong>的数字化。</li>
              </ol>
            </li>
            <li>网络社会
              <ol class="list-decimal pl-6 mt-2 space-y-2">
                <li>是信息社会最典型的特征。</li>
              </ol>
            </li>
          </ol>
        </li>
        <li>
          <p class="mb-2">信息系统</p>
          <ol class="list-decimal pl-6 mt-2 space-y-2">
            <li>是指在社会活动中，以满足<strong>信息需求</strong>为目标，以<strong class="text-white">现代信息技术</strong>为手段，实现对信息有效<strong class="text-white">采集和输入、传输、存储、处理、输出和利用</strong>而建立的包含<strong class="text-white">人、硬件、软件、数据</strong>在内的综合系统。</li>
            <li>要素：人、硬件、软件、数据</li>
            <li>功能：信息的采集和输入、传输、存储、处理、输出和利用</li>
          </ol>
        </li>
      </ol>
    `
};
