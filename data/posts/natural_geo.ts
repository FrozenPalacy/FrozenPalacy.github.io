import { BlogPost } from '../../types';

export const post: BlogPost = {
  id: '13',
  title: '高中自然地理 要点合集',
  slug: 'natural_geo',
  date: 'Mar 16, 2025',
  preview: '目录 地球运动 太阳视运动图 岩石圈 岩石、向斜背斜、板块构造、各种地貌（海岸！）、凹岸凸岸、土壤、地质年代...',
  readTime: '2 min read',
  tags: ['High School', 'Geography'],
  content: `
      <h1 class="text-3xl font-bold text-white mb-6" id="目录">目录</h1>
      <ol class="list-decimal pl-6 space-y-4 text-zinc-300 mb-8">
        <li>地球运动
          <ul class="list-disc pl-6 mt-2 space-y-1">
            <li>太阳视运动图</li>
          </ul>
        </li>
        <li>岩石圈
          <ul class="list-disc pl-6 mt-2 space-y-1">
            <li>岩石、向斜背斜、板块构造、各种地貌（海岸！）、凹岸凸岸、土壤、地质年代</li>
          </ul>
        </li>
        <li>大气圈
          <ul class="list-disc pl-6 mt-2 space-y-1">
            <li>垂直分层、大气的受热、热力环流、天气系统、天气现象</li>
          </ul>
        </li>
        <li>水圈
          <ul class="list-disc pl-6 mt-2 space-y-1">
            <li>地下水、河流补给方式、水循环、厄尔尼诺 &amp; 拉尼娜</li>
          </ul>
        </li>
        <li>自然环境特征
          <ul class="list-disc pl-6 mt-2 space-y-1">
            <li>整体性、差异性、非地带性</li>
          </ul>
        </li>
      </ol>
      <p class="mb-4 text-zinc-300">To-do: 地质年代、海水温度。</p>

      <h1 class="text-3xl font-bold text-white mb-6 mt-12" id="1-地球运动">1. 地球运动</h1>
      <ol class="list-decimal pl-6 space-y-4 text-zinc-300 mb-8">
        <li>
          <p class="mb-2">太阳视运动图</p>
          <ol class="list-decimal pl-6 mt-2 space-y-2">
            <li>
              <p class="mb-2">对于北半球，当有极昼时，则正北升，正北落，正午正南</p>
              <p class="mb-2">无极昼：太阳直射北半球时，东北升，西北落；南半球，东南升，西南落；赤道正东升，正西落。</p>
            </li>
            <li>
              <p class="mb-2">该地纬度可由H=90°-纬度差来计算。H是太阳高度，X是当前纬度，S为太阳直射点，则：</p>
              <p class="my-6 text-lg text-center font-serif text-white">
              $$
              H=90^\\degree-(X-S)
              $$
              </p>
            </li>
          </ol>
          <img src="https://s21.ax1x.com/2025/03/16/pEdpNNj.jpg" loading="lazy" class="rounded-xl my-4 border border-white/10 w-full max-w-lg mx-auto" />
        </li>
      </ol>

      <h1 class="text-3xl font-bold text-white mb-6 mt-12" id="2岩石圈">2.岩石圈</h1>
      <ol class="list-decimal pl-6 space-y-4 text-zinc-300 mb-8">
        <li>
          <p class="mb-2">各种岩石</p>
          <p class="mb-2">其中岩浆岩是岩石圈的主体，大洋底部几乎全部由喷出岩构成。沉积岩是构成陆地表层的主要岩石。</p>
          <div class="overflow-x-auto mb-8">
            <table class="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th class="border-b border-zinc-700 p-2 text-white">类型</th>
                  <th class="border-b border-zinc-700 p-2 text-white">成因</th>
                  <th class="border-b border-zinc-700 p-2 text-white">特征</th>
                  <th class="border-b border-zinc-700 p-2 text-white">例子</th>
                </tr>
              </thead>
              <tbody class="text-zinc-300">
                <tr>
                  <td class="border-b border-zinc-800 p-2">侵入岩（岩浆岩）</td>
                  <td class="border-b border-zinc-800 p-2">岩浆上涌，侵入地壳冷凝</td>
                  <td class="border-b border-zinc-800 p-2">结晶充分、颗粒粗</td>
                  <td class="border-b border-zinc-800 p-2">花岗岩</td>
                </tr>
                <tr>
                  <td class="border-b border-zinc-800 p-2">喷出岩（岩浆岩）</td>
                  <td class="border-b border-zinc-800 p-2">岩浆上涌，喷出地表冷凝</td>
                  <td class="border-b border-zinc-800 p-2">多气孔，颗粒细小</td>
                  <td class="border-b border-zinc-800 p-2">玄武岩</td>
                </tr>
                <tr>
                  <td class="border-b border-zinc-800 p-2">沉积岩</td>
                  <td class="border-b border-zinc-800 p-2">外力作用（流水、风等侵蚀、搬运、堆积，固结成岩）</td>
                  <td class="border-b border-zinc-800 p-2">层理构造，有的含有化石，蕴藏煤、石油、天然气</td>
                  <td class="border-b border-zinc-800 p-2">石灰岩、砾岩、砂岩、页岩、泥岩</td>
                </tr>
                <tr>
                  <td class="border-b border-zinc-800 p-2">变质岩</td>
                  <td class="border-b border-zinc-800 p-2">高温高压内力作用</td>
                  <td class="border-b border-zinc-800 p-2">片理构造（颗粒定向排列）</td>
                  <td class="border-b border-zinc-800 p-2">大理岩、石英岩、板岩、片岩、片麻岩</td>
                </tr>
              </tbody>
            </table>
          </div>
        </li>
        <li>
          <p class="mb-2">内力作用和地质构造</p>
          <ol class="list-decimal pl-6 mt-2 space-y-2">
            <li>
              <p class="mb-2">内力作用的能量主要来自于自转产生的<strong class="text-white">旋转能</strong>和地球内部放射性元素衰变产生的<strong class="text-white">热能</strong></p>
            </li>
            <li>
              <p class="mb-2">地质构造</p>
              <ol class="list-decimal pl-6 mt-2 space-y-2">
                <li>
                  <p class="mb-2">岩层因内力作用而发生水平运动和垂直运动造成岩层永久变形而遗留下来的形态。<strong class="text-white">褶皱</strong>和<strong class="text-white">断层</strong>是最常见的地质构造。背斜和向斜都是褶皱。</p>
                </li>
                <li>
                  <p class="mb-2">背斜：岩层向上弯曲，侵蚀前成山，侵蚀后成谷，中心岩层老，两翼岩层新。</p>
                  <p class="mb-2">向斜反之。</p>
                </li>
                <li>
                  <p class="mb-2">断层分地垒、地堑。</p>
                  <p class="mb-2">地垒：两断块之间相对上升处，典型地貌：断块山</p>
                  <p class="mb-2">地堑：两断块之间相对下降处，典型地貌：谷地。地形区：渭河平原、汾河谷地。</p>
                </li>
              </ol>
            </li>
          </ol>
        </li>
        <li>
          <p class="mb-2">板块构造</p>
          <p class="mb-2">岩石圈：地壳及软流层之上的上地幔</p>
          <p class="mb-2">大洋板块：太平洋板块</p>
          <p class="mb-2">大陆板块：亚欧板块、非洲板块、印度洋板块、南极洲板块、美洲板块。其中印度洋板块包括阿拉伯板块，南极洲板块包括纳斯卡板块、科科斯板块、加勒比海板块。</p>
          <p class="mb-2">生长边界：张裂，形成裂谷（东非大裂谷）、海洋（大西洋、红海）、洋脊</p>
          <p class="mb-2">消亡边界：</p>
          <ol class="list-decimal pl-6 mt-2 space-y-2">
            <li>两大大陆板块碰撞，形成巨大的山脉（喜马拉雅）</li>
            <li>大洋板块与大陆板块碰撞：大洋板块俯冲到大陆板块之下形成<strong class="text-white">海沟</strong>，大陆板块受挤压上拱隆起岛弧和海岸山脉。</li>
          </ol>
          <img src="https://s21.ax1x.com/2025/03/16/pEd9Vx0.webp" loading="lazy" class="rounded-xl my-4 border border-white/10 w-full max-w-lg mx-auto" />
        </li>
        <li>
          <p class="mb-2">流水地貌</p>
          <ol class="list-decimal pl-6 mt-2 space-y-2">
            <li>
              <p class="mb-2">由<strong class="text-white">流水作用</strong>塑造形成的地貌，包括流水侵蚀、搬运、堆积。流水地貌主要有<strong class="text-white">流水侵蚀地貌</strong>和<strong class="text-white">流水堆积地貌</strong>。</p>
            </li>
            <li>
              <p class="mb-2">河流地貌是流水地貌的主要表现形式。</p>
              <div class="overflow-x-auto mb-8">
                <table class="w-full text-left border-collapse">
                  <thead>
                    <tr>
                      <th class="border-b border-zinc-700 p-2 text-white">河段</th>
                      <th class="border-b border-zinc-700 p-2 text-white">上游</th>
                      <th class="border-b border-zinc-700 p-2 text-white">中游</th>
                      <th class="border-b border-zinc-700 p-2 text-white">下游</th>
                    </tr>
                  </thead>
                  <tbody class="text-zinc-300">
                    <tr>
                      <td class="border-b border-zinc-800 p-2">地势落差</td>
                      <td class="border-b border-zinc-800 p-2">大</td>
                      <td class="border-b border-zinc-800 p-2">较小</td>
                      <td class="border-b border-zinc-800 p-2">小</td>
                    </tr>
                    <tr>
                      <td class="border-b border-zinc-800 p-2">主要流水作用</td>
                      <td class="border-b border-zinc-800 p-2">向下侵蚀</td>
                      <td class="border-b border-zinc-800 p-2">侧向侵蚀</td>
                      <td class="border-b border-zinc-800 p-2">堆积</td>
                    </tr>
                    <tr>
                      <td class="border-b border-zinc-800 p-2">形成地貌</td>
                      <td class="border-b border-zinc-800 p-2">峡谷</td>
                      <td class="border-b border-zinc-800 p-2">曲流</td>
                      <td class="border-b border-zinc-800 p-2">冲积平原、三角洲</td>
                    </tr>
                    <tr>
                      <td class="border-b border-zinc-800 p-2">与人类关系</td>
                      <td class="border-b border-zinc-800 p-2">水能</td>
                      <td class="border-b border-zinc-800 p-2">水能、航运</td>
                      <td class="border-b border-zinc-800 p-2">航运</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </li>
            <li>
              <p class="mb-2">凹岸凸岸：河岸在弯曲河段呈现明显的凹凸特征。凹岸指河流弯道处向陆地内侧凹陷的一侧，形似“凹”字；凸岸则位于弯道外侧，呈向外突出的弧形。例如，当河流向右弯曲时，右侧岸为凹岸，左侧为凸岸。此方法无需复杂理论，仅需通过视觉直观判断。</p>
            </li>
          </ol>
        </li>
        <li>
          <p class="mb-2">喀斯特地貌</p>
          <ol class="list-decimal pl-6 mt-2 space-y-2">
            <li>由地表水和地下水对可溶性岩石进行破坏和再造作用形成的地貌，aka 岩溶地貌。</li>
            <li>地表喀斯特：石芽、石林、溶蚀盆地、落水洞、峰林、孤峰</li>
            <li>地下喀斯特：溶洞、石钟乳、石笋、石柱（再造作用）</li>
            <li>优点：旅游资源。缺点：土层薄，贫瘠，不利农业；工程建设难度大；地质地貌灾害多。</li>
          </ol>
        </li>
        <li>
          <p class="mb-2">风成地貌</p>
          <ol class="list-decimal pl-6 mt-2 space-y-2">
            <li>风力侵蚀：风蚀洼地、风蚀柱、风蚀蘑菇、风蚀城堡</li>
            <li>风力堆积：沙漠、沙丘、黄图的堆积区等</li>
            <li>土地荒漠化是风成地貌主要的生态环境问题。植树造林、防风固沙是治理沙漠的重要手段。</li>
          </ol>
        </li>
        <li>
          <p class="mb-2">黄土地貌</p>
          <ol class="list-decimal pl-6 mt-2 space-y-2">
            <li>
              <p class="mb-2">特点：千沟万壑、支离破碎</p>
            </li>
            <li>
              <p class="mb-2">类型：塬、墚、峁，广泛分布于中纬度半干旱地带</p>
            </li>
            <li>
              <p class="mb-2">主要生态问题：水土流失</p>
              <p class="mb-2">综合治理：加强水土保持（生物措施、工程措施、小流域综合治理）、调整产业结构</p>
            </li>
          </ol>
        </li>
        <li>
          <p class="mb-2">海岸地貌</p>
          <ol class="list-decimal pl-6 mt-2 space-y-2">
            <li>
              <p class="mb-2">类型：岩石海岸、砂砾海岸、淤泥质海岸、生物海岸；</p>
              <p class="mb-2">海蚀地貌、海积地貌</p>
            </li>
            <li>
              <p class="mb-2">海蚀地貌：海蚀崖、海蚀洞、海蚀柱，由岩石构成，发展旅游业、建设港口。</p>
            </li>
            <li>
              <p class="mb-2">海积地貌：沙滩、沙坝、沙嘴，由基岩、淤泥、砂砾等构成，发展旅游业、养殖业。</p>
            </li>
          </ol>
        </li>
        <li>
          <p class="mb-2">冰川地貌</p>
          <ol class="list-decimal pl-6 mt-2 space-y-2">
            <li>由冰川侵蚀和沉积形成</li>
            <li>上游：冰蚀地貌，如冰斗、刃脊、角峰、冰蚀谷等</li>
            <li>下游：冰碛平原、冰碛湖</li>
          </ol>
          <img src="https://s21.ax1x.com/2025/03/16/pEd9gL8.webp" loading="lazy" class="rounded-xl my-4 border border-white/10 w-full max-w-lg mx-auto" />
        </li>
        <li>
          <p class="mb-2">土壤</p>
          <ol class="list-decimal pl-6 mt-2 space-y-2">
            <li>
              <p class="mb-2">剖面图</p>
              <img src="https://s21.ax1x.com/2025/03/16/pEd94ij.png" loading="lazy" class="rounded-xl my-4 border border-white/10 w-full max-w-lg mx-auto" />
            </li>
            <li>
              <p class="mb-2">成分：</p>
              <ol class="list-decimal pl-6 mt-2 space-y-2">
                <li>矿物质。来自岩石风化物。</li>
                <li>有机质。包括动植物残体和经微生物作用形成的腐殖质。</li>
                <li>土壤生物</li>
                <li>水分</li>
                <li>空气</li>
              </ol>
            </li>
            <li>
              <p class="mb-2">性质：</p>
              <ol class="list-decimal pl-6 mt-2 space-y-2">
                <li>颜色：与矿物质成分、有机质含量、排水条件有关</li>
                <li>质地：砂土、壤土、黏土</li>
              </ol>
            </li>
          </ol>
        </li>
        <li>
          <p class="mb-2">地球的演化过程</p>
          <ol class="list-decimal pl-6 mt-2 space-y-2">
            <li>地层：地质历史时期形成的岩层和土层。</li>
            <li>分为绝对地质年代和相对地质年代。绝对地质年代由放射性同位素测年得到。</li>
            <li>地质年代</li>
          </ol>
        </li>
      </ol>

      <h1 class="text-3xl font-bold text-white mb-6 mt-12" id="3大气圈">3.大气圈</h1>
      <ol class="list-decimal pl-6 space-y-4 text-zinc-300 mb-8">
        <li>
          <p class="mb-2">大气的组成</p>
          <ol class="list-decimal pl-6 mt-2 space-y-2">
            <li>干洁空气：78%氮气，21%氧气，二氧化碳（保温作用），臭氧（吸收紫外线）</li>
            <li>水汽
              <ol class="list-decimal pl-6 mt-2 space-y-2">
                <li>产生云雾雨雪等天气现象</li>
                <li>影响地面和大气温度，易吸收地面长波辐射，有保温作用</li>
                <li>主要来自海水蒸发、地表水流政法和植物的蒸腾。</li>
              </ol>
            </li>
            <li>微小颗粒
              <ol class="list-decimal pl-6 mt-2 space-y-2">
                <li>有利于水汽凝结，是成云致雨的必要条件</li>
                <li>陆上比海上多，城市比乡村多，早晨和夜间比午后多，冬季比夏季多</li>
              </ol>
            </li>
          </ol>
        </li>
        <li>
          <p class="mb-2">大气的垂直分层</p>
          <ol class="list-decimal pl-6 mt-2 space-y-2">
            <li>对流层
              <ol class="list-decimal pl-6 mt-2 space-y-2">
                <li>高度：高纬8-9km，中纬10-12km，低纬17-18km。</li>
                <li>特点：
                  <ol class="list-decimal pl-6 mt-2 space-y-2">
                    <li>是地球大气层里<strong class="text-white">气压最大</strong>，<strong class="text-white">密度最大</strong>的一层，气温随高度增加而降低。</li>
                    <li>对流层顶部高度因<strong class="text-white">纬度和季节</strong>而不同。夏季略高于冬季。</li>
                    <li>对流层上冷下热，易形成对流，形成天气。</li>
                  </ol>
                </li>
                <li>逆温现象
                  <ol class="list-decimal pl-6 mt-2 space-y-2">
                    <li>气温随高度增加而增加的现象</li>
                    <li>此时大气趋于稳定，对流运动不易发生，各种东西聚集在逆温层下方的大气中造成大气污染。</li>
                  </ol>
                </li>
              </ol>
            </li>
            <li>平流层
              <ol class="list-decimal pl-6 mt-2 space-y-2">
                <li>高度：对流层顶到约50km</li>
                <li>特点：
                  <ol class="list-decimal pl-6 mt-2 space-y-2">
                    <li>有臭氧层，吸收紫外线，使平流层<strong class="text-white">气温随高度增加而升高</strong>。以平流运动为主。</li>
                    <li>水汽和尘埃含量少，空气稳定，大型飞机在这飞。</li>
                  </ol>
                </li>
              </ol>
            </li>
            <li>高层大气
              <ol class="list-decimal pl-6 mt-2 space-y-2">
                <li>高度：平流层顶至2000-3000km</li>
                <li>中间层：
                  <ol class="list-decimal pl-6 mt-2 space-y-2">
                    <li>气温随高度增加而降低；</li>
                    <li>空气稀薄，有一定<strong class="text-white">垂直运动</strong></li>
                    <li>吸收太阳辐射少，气温低，非常稀薄的水汽可以升华成<strong class="text-white">夜光云</strong>。</li>
                  </ol>
                </li>
                <li>热层
                  <ol class="list-decimal pl-6 mt-2 space-y-2">
                    <li>气温随高度增加<strong class="text-white">急剧升高</strong>。</li>
                    <li>吸收太阳紫外线辐射，因此气温高</li>
                    <li>**电离层！！！**反射无线电波</li>
                    <li><strong class="text-white">极光！！！</strong></li>
                  </ol>
                </li>
                <li>散逸层
                  <ol class="list-decimal pl-6 mt-2 space-y-2">
                    <li>温度随高度增加而降低，空气极为稀薄。</li>
                  </ol>
                </li>
              </ol>
            </li>
            <li>大气的受热过程与运动</li>
          </ol>
          <img src="https://s21.ax1x.com/2025/03/19/pEwJ7Y4.png" loading="lazy" class="rounded-xl my-4 border border-white/10 w-full max-w-lg mx-auto" />
        </li>
        <li>
          <p class="mb-2">热力环流</p>
          <ol class="list-decimal pl-6 mt-2 space-y-2">
            <li>白天吹谷风，晚上吹山风。</li>
            <li>高空风向与等压线平行（空气运动后地转偏向力立即产生并垂直于风向），近地面风向与等压线斜交。</li>
          </ol>
        </li>
        <li>
          <p class="mb-2">气候、东南亚季风（水，略过）</p>
        </li>
        <li>
          <p class="mb-2">冷锋</p>
          <img src="https://s21.ax1x.com/2025/03/16/pEdCkwD.jpg" loading="lazy" class="rounded-xl my-4 border border-white/10 w-full max-w-lg mx-auto" />
          <ol class="list-decimal pl-6 mt-2 space-y-2">
            <li>
              <p class="mb-2">雨带在锋后</p>
            </li>
            <li>
              <p class="mb-2">过境前气温高、气压低、天气晴</p>
              <p class="mb-2">过境时阴雨、大风、降温</p>
              <p class="mb-2">过境后气温低、气压高、天气晴朗</p>
            </li>
            <li>
              <p class="mb-2">天气：寒潮、沙尘暴、夏季北方暴雨</p>
            </li>
          </ol>
        </li>
        <li>
          <p class="mb-2">暖锋</p>
          <img src="https://s21.ax1x.com/2025/03/16/pEdCefA.jpg" loading="lazy" class="rounded-xl my-4 border border-white/10 w-full max-w-lg mx-auto" />
          <ol class="list-decimal pl-6 mt-2 space-y-2">
            <li>
              <p class="mb-2">雨带在锋前</p>
              <p class="mb-2">过境前气温低、气压高、天气晴</p>
              <p class="mb-2">过境时连续性降水</p>
              <p class="mb-2">过境后气温升高、气压降低、天气晴</p>
            </li>
          </ol>
        </li>
        <li>
          <p class="mb-2">准静止锋</p>
          <ol class="list-decimal pl-6 mt-2 space-y-2">
            <li>冷暖气团势力相当，冷空气移动受地形阻挡，锋面摇摆不定，相对静止，形成准静止锋。</li>
            <li>天气：阴雨连绵</li>
            <li>典型：6—7月江淮准静止锋（梅雨）、昆明准静止锋（冬季贵阳阴雨）</li>
            <li>梅雨时间：6月中到7月上，影响：丰富水源；洪涝干旱。</li>
          </ol>
        </li>
        <li>
          <p class="mb-2">气旋与反气旋（水，略过）</p>
        </li>
        <li>
          <p class="mb-2">台风</p>
          <ol class="list-decimal pl-6 mt-2 space-y-2">
            <li>一般发源于5—20度之间的热带洋面。影响我国的主要生成在西北太平洋和南海。</li>
            <li>影响：
              <ol class="list-decimal pl-6 mt-2 space-y-2">
                <li>利：缓解高温和旱情</li>
                <li>弊：狂风暴雨、引发洪涝风暴潮等灾害。破坏力强</li>
              </ol>
            </li>
            <li>预防措施：
              <ol class="list-decimal pl-6 mt-2 space-y-2">
                <li>监测预报（RS）</li>
                <li>制定防灾减灾应急措施，加固堤坝，疏散居民，船只进港</li>
              </ol>
            </li>
          </ol>
        </li>
        <li>
          <p class="mb-2">寒潮</p>
          <ol class="list-decimal pl-6 mt-2 space-y-2">
            <li>时间：秋末到次年初春</li>
            <li>成因：冷锋（蒙古-西伯利亚冷高压）</li>
            <li>影响地区：除青藏高原和云贵高原西南部以外的绝大部分地区</li>
            <li>影响：
              <ol class="list-decimal pl-6 mt-2 space-y-2">
                <li>利：消灭害虫，帮助小麦越冬，盐业制卤</li>
                <li>弊：河港封冻；电力设施受损；牲畜、农作物冻伤</li>
              </ol>
            </li>
          </ol>
        </li>
        <li>
          <p class="mb-2">锋面气旋（绿书P90 太难 略过）</p>
        </li>
      </ol>

      <h1 class="text-3xl font-bold text-white mb-6 mt-12" id="4水圈">4.水圈</h1>
      <ol class="list-decimal pl-6 space-y-4 text-zinc-300 mb-8">
        <li>
          <p class="mb-2">构成</p>
          <ol class="list-decimal pl-6 mt-2 space-y-2">
            <li>海洋水（主体，约占总水量的96.538%）</li>
            <li>陆地水（冰川、地下水、河流、湖泊），其中冰川最多，是主体；地下水次之。</li>
            <li>大气水</li>
          </ol>
        </li>
        <li>
          <p class="mb-2">地下水</p>
          <img src="https://s21.ax1x.com/2025/03/17/pEdY1xI.png" loading="lazy" class="rounded-xl my-4 border border-white/10 w-full max-w-lg mx-auto" />
          <ol class="list-decimal pl-6 mt-2 space-y-2">
            <li>潜水
              <ol class="list-decimal pl-6 mt-2 space-y-2">
                <li>埋藏在<strong class="text-white">第一个隔水层之上</strong>的地下水</li>
                <li>以大气降水和地表水渗入补给为主</li>
                <li>埋藏浅，受气候影响大，流量不稳定，易受污染，水质较差</li>
              </ol>
            </li>
            <li>承压地下水
              <ol class="list-decimal pl-6 mt-2 space-y-2">
                <li>埋藏在两个隔水层之间的地下水</li>
                <li>大气降水和地表水<strong class="text-white">通过潜水</strong>补给承压水</li>
                <li>埋藏深，受气候影响小，流量稳定，不易受污染，水质较好</li>
              </ol>
            </li>
          </ol>
        </li>
        <li>
          <p class="mb-2">河流补给</p>
          <ol class="list-decimal pl-6 mt-2 space-y-2">
            <li>定义：河水的来源成为河流补给。</li>
            <li>决定河流径流量大小和季节变化</li>
            <li>大气降水
              <ol class="list-decimal pl-6 mt-2 space-y-2">
                <li>时间集中在雨季，主导因素：降水量变化，我国分布普遍（尤其是东部）</li>
              </ol>
            </li>
            <li>积雪融水补给
              <ol class="list-decimal pl-6 mt-2 space-y-2">
                <li>主要在春季，主导因素：气温的变化，我国分布在东北。</li>
                <li>有春夏两个汛期，河流流量图体现为双峰。</li>
              </ol>
            </li>
            <li>冰川融水补给
              <ol class="list-decimal pl-6 mt-2 space-y-2">
                <li>主要在夏季，主导因素：气温变化，我国分布在西北和青藏高原。</li>
              </ol>
            </li>
            <li>湖泊水补给&amp;地下水补给
              <ol class="list-decimal pl-6 mt-2 space-y-2">
                <li>全年都有，由湖泊水和地下水水位和补给能力决定，分布普遍。</li>
              </ol>
            </li>
          </ol>
        </li>
        <li>
          <p class="mb-2">水循环</p>
          <img src="https://s21.ax1x.com/2025/03/17/pEdYBzn.png" loading="lazy" class="rounded-xl my-4 border border-white/10 w-full max-w-lg mx-auto" />
          <ol class="list-decimal pl-6 mt-2 space-y-2">
            <li>
              <p class="mb-2">水循环类型：海陆间循环、陆地内循环、海上内循环</p>
            </li>
            <li>
              <p class="mb-2">内因：水的三态变化</p>
              <p class="mb-2">外因：太阳辐射&amp;重力</p>
            </li>
            <li>
              <p class="mb-2">地理意义</p>
              <ol class="list-decimal pl-6 mt-2 space-y-2">
                <li>陆地上淡水资源不断补充和更新</li>
                <li>联系地球各圈层和各种水体</li>
                <li>对全球热量和水分进行再分配</li>
                <li>地表物质迁移的动力和载体</li>
                <li>通过侵蚀、搬运、堆积，塑造地表形态</li>
              </ol>
            </li>
          </ol>
        </li>
        <li>
          <p class="mb-2">海水</p>
          <ol class="list-decimal pl-6 mt-2 space-y-2">
            <li>
              <p class="mb-2">温度（暂缺，请提醒我写）</p>
            </li>
            <li>
              <p class="mb-2">盐度</p>
              <ol class="list-decimal pl-6 mt-2 space-y-2">
                <li>定义：每千克海水中溶解的盐类物质的质量，用<strong class="text-white">千分数</strong>表示。</li>
                <li>影响因素：降水量、蒸发量；入海径流、海区封闭程度、结冰期。</li>
                <li>分布规律：<strong class="text-white">马鞍形分布</strong>，副热带海区最高，向两侧高纬和低纬递减。</li>
                <li>应用：从海水中提取海盐，K, Mg, Br等元素；海水淡化，缓解淡水资源短缺；利用盐度差发电。</li>
                <li>灾害：咸潮入侵；海水倒灌。</li>
              </ol>
              <img src="https://s21.ax1x.com/2025/03/17/pEdYcZT.webp" loading="lazy" alt="表层海水盐度分布规律" class="rounded-xl my-4 border border-white/10 w-full max-w-lg mx-auto" />
              <p class="mb-2">表层海水盐度分布规律</p>
            </li>
            <li>
              <p class="mb-2">密度</p>
              <ol class="list-decimal pl-6 mt-2 space-y-2">
                <li>定义：单位体积海水的质量</li>
                <li>影响因素：温度为主，和盐度、压力有关。一般来说，温度越高，密度越低。</li>
                <li>分布规律：随纬度增高而增大；随深度增加而<strong class="text-white">不均匀递增</strong>，上层密度变化快，越深变化越慢。</li>
              </ol>
            </li>
          </ol>
        </li>
        <li>
          <p class="mb-2">海水运动及其影响</p>
          <ol class="list-decimal pl-6 mt-2 space-y-2">
            <li>
              <p class="mb-2">波浪</p>
              <ol class="list-decimal pl-6 mt-2 space-y-2">
                <li><strong class="text-white">海水运动最直接的表现</strong>。风速越大，波浪规模和能量越大</li>
                <li>是一种清洁能源，<strong class="text-white">塑造海岸地貌的重要动力之一</strong>。</li>
              </ol>
            </li>
            <li>
              <p class="mb-2">潮汐</p>
              <ol class="list-decimal pl-6 mt-2 space-y-2">
                <li>定义：海水周期性涨落的现象。白天称潮，晚上称汐。</li>
                <li>最高水位是<strong class="text-white">高潮</strong>，最低水位是<strong class="text-white">低潮</strong>，高潮和低潮的水位差是<strong class="text-white">潮差</strong>。受海底地形和纬度影响，不同地区潮差大小有差异。</li>
                <li>对人类影响：利用潮汐安排航运、捕鱼、晒盐，发展海水养殖；旅游；清洁能源；造成咸潮。</li>
              </ol>
            </li>
            <li>
              <p class="mb-2">洋流</p>
              <img src="https://s21.ax1x.com/2025/03/17/pEdYHeK.webp" loading="lazy" class="rounded-xl my-4 border border-white/10 w-full max-w-lg mx-auto" />
              <ol class="list-decimal pl-6 mt-2 space-y-2">
                <li>按水温：暖流、寒流</li>
                <li>按成因：风海流、密度流、补偿流</li>
                <li>影响：沿岸气候；海洋生物分布（渔场）；影响海洋航行</li>
              </ol>
            </li>
            <li>
              <p class="mb-2">渔场</p>
              <ol class="list-decimal pl-6 mt-2 space-y-2">
                <li>寒暖流交汇处：海水搅动，下层营养盐类物质被翻到表层，利于浮游生物生长，为鱼类提供丰富饵料，吸引大量鱼群；冷水性和暖水性的鱼类汇聚。</li>
                <li>上升流：盛行离岸风，沿岸表层海水随风流走，深层海水上升补充，形成上升流；把海底营养盐类物质带至表层，利于浮游生物生长，为鱼类提供丰富饵料，吸引大量鱼群。</li>
              </ol>
            </li>
          </ol>
        </li>
        <li>
          <p class="mb-2">厄尔尼诺 &amp; 拉尼娜 （海-气共同作用）</p>
          <img src="https://s21.ax1x.com/2025/03/17/pEdt1kF.jpg" loading="lazy" class="rounded-xl my-4 border border-white/10 w-full max-w-lg mx-auto" />
          <ol class="list-decimal pl-6 mt-2 space-y-2">
            <li>厄尔尼诺：东南信风减弱，<strong class="text-white">南赤道暖流</strong>和<strong class="text-white">秘鲁上升流</strong>减弱，赤道附近东太平洋表层海水温度上升，发生厄尔尼诺。此时热带太平洋西部干旱，易引发森林大火；东部出现暴雨洪涝，秘鲁渔场减产。</li>
            <li>拉尼娜反之。</li>
          </ol>
        </li>
      </ol>

      <h1 class="text-3xl font-bold text-white mb-6 mt-12" id="5自然环境特征">5.自然环境特征</h1>
      <ol class="list-decimal pl-6 space-y-4 text-zinc-300 mb-8">
        <li>
          <p class="mb-2">整体性</p>
          <ol class="list-decimal pl-6 mt-2 space-y-2">
            <li>要素：气候、地貌、水文、土壤、生物（气地水土生）</li>
            <li><strong class="text-white">整体性三大原理！！！重要！</strong>
              <ol class="list-decimal pl-6 mt-2 space-y-2">
                <li>各地理要素相互影响、相互作用、相互联系，构成自然环境整体性。</li>
                <li>一种要素的变化往往会引起其它要素的变化，进而导致自然环境整体变化。</li>
                <li>某一区域自然环境的变化会引起其他区域自然环境的变化。</li>
              </ol>
            </li>
            <li>气候类型 &amp; 自然带（水，略过）</li>
          </ol>
        </li>
        <li>
          <p class="mb-2">差异性</p>
          <ol class="list-decimal pl-6 mt-2 space-y-2">
            <li>由低纬向高纬的地带性分异规律
              <ol class="list-decimal pl-6 mt-2 space-y-2">
                <li>形成基础：热量</li>
                <li>成因：从低纬到高纬，纬度逐渐升高，热量逐渐减少，自然带出现<strong class="text-white">有规律变化</strong>。</li>
              </ol>
            </li>
            <li>从沿海到内陆的地带性分异规律
              <ol class="list-decimal pl-6 mt-2 space-y-2">
                <li>形成基础：水分</li>
                <li>成因：从xxx到xxx，距海洋越来越远，xxx风带来的降水逐渐减少，自然带出现<strong class="text-white">有规律变化</strong>。</li>
              </ol>
            </li>
            <li>垂直地带性分异规律
              <ol class="list-decimal pl-6 mt-2 space-y-2">
                <li>形成基础：热量</li>
                <li>成因：随海拔高度变化，气温<strong class="text-white">下降</strong>，降水等<strong class="text-white">发生有规律变化</strong>（不是减少！！不是减少！！不是减少！！），自然景观也随之变化</li>
              </ol>
            </li>
          </ol>
          <ul class="list-disc pl-6 mt-2 space-y-1">
            <li>雪线
              <ul class="list-disc pl-6 mt-2 space-y-1">
                <li>阳坡雪线高，阴坡雪线低；迎风坡雪线低，背风坡雪线高；又是阳坡又是迎风坡时，<strong class="text-white">决定因素是降水</strong>，所以雪线偏低。</li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <p class="mb-2">非地带性</p>
          <ol class="list-decimal pl-6 mt-2 space-y-2">
            <li>南半球缺少亚寒带针叶林带和苔原带（这片纬度没陆地）</li>
            <li>南美洲安第斯山脉南段（东侧为巴塔哥尼亚高原温带荒漠带，西侧为温带落叶阔叶林带）（地形因素，安第斯山脉阻挡中纬西风）</li>
            <li>赤道附近东非高原的热带稀树草原带（地形）</li>
            <li>马达加斯加东侧、澳大利亚东北部、巴西高原东南部、中美洲东北部的热带雨林带（地形、洋流）</li>
            <li>南美洲西岸3°S—30°S之间狭长的热带荒漠带（地形、洋流，安第斯山脉 &amp; 秘鲁寒流）</li>
            <li>西欧温带海洋性气候范围达到60°N以北（洋流，北大西洋暖流）</li>
            <li>温带荒漠带中的绿洲（局部水分变化）</li>
            <li>喀斯特地貌分布（地壳物质组成，可溶性岩石）</li>
          </ol>
        </li>
      </ol>
      <p class="mb-4 text-zinc-300">选必一完结撒花！</p>
      <p class="mb-4 text-zinc-300">如果你想要提供建议，可以在评论区留言或发送邮件到support@xfrozenx.top。</p>
    `
};
