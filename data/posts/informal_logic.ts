import { BlogPost } from '../../types';

export const post: BlogPost = {
  id: '6',
  title: '非形式逻辑',
  slug: 'informal_logic',
  date: 'Dec 01, 2025',
  preview: '一、概念 Definition 概念：反映思维对象特有属性（或本质属性）的思维形态。 语词 对象 属性 特有属性 偶有属性 概念的逻辑特征 内涵 外延...',
  readTime: '10 min read',
  tags: ['College', 'Logic'],
  content: `
      <h1 class="text-3xl font-bold text-white mb-6" id="一概念">一、概念</h1>
      <ol class="list-decimal pl-6 space-y-4 text-zinc-300 mb-8">
        <li>
          <p class="mb-2">Definition</p>
          <ol class="list-decimal pl-6 mt-2 space-y-2">
            <li>概念：反映思维对象特有属性（或本质属性）的思维形态。</li>
            <li>语词</li>
            <li>对象</li>
            <li>属性
              <ol class="list-decimal pl-6 mt-2 space-y-2">
                <li>特有属性</li>
                <li>偶有属性</li>
              </ol>
            </li>
            <li>概念的逻辑特征
              <ol class="list-decimal pl-6 mt-2 space-y-2">
                <li>内涵</li>
                <li>外延</li>
              </ol>
            </li>
          </ol>
        </li>
        <li>
          <p class="mb-2">概念与语词的联系和区别：</p>
          <ol class="list-decimal pl-6 mt-2 space-y-2">
            <li>联系：语词是概念的语言形式；概念是语词的思想内容。</li>
            <li>区别：
              <ol class="list-decimal pl-6 mt-2 space-y-2">
                <li>概念必须通过语词表达， 但并非所有语词都表达概念；</li>
                <li>概念和语词不是一一对应的。即<strong class="text-white">不同的语词在不同语境中可以表达同一个概念</strong>（语词不同，语义相同）</li>
              </ol>
            </li>
          </ol>
        </li>
        <li>
          <p class="mb-2">概念的种类</p>
          <ol class="list-decimal pl-6 mt-2 space-y-2">
            <li>
              <p class="mb-2">按概念外延的数量分</p>
              <ol class="list-decimal pl-6 mt-2 space-y-2">
                <li>
                  <p>普遍概念：反映一类对象的概念，<strong class="text-white">外延至少有两个对象</strong>。</p>
                </li>
                <li>
                  <p>单独概念：反映某个特定对象的概念，外延<strong class="text-white">只有一个对象</strong>。</p>
                  <p class="mb-2">用于表达的语词形式：</p>
                  <ol class="list-decimal pl-6 mt-2 space-y-2">
                    <li>专名（专有名称）：北京、亚里士多德</li>
                    <li>摹状词（描述特定对象的短语）：中国的首都、《工具论》的作者</li>
                  </ol>
                </li>
                <li>
                  <p>空概念：反映空类的概念。如“独角兽”。</p>
                  <p>此处的空概念定义为现实世界中不存在的概念，可能在想象世界/可能世界中存在。</p>
                </li>
              </ol>
            </li>
            <li>
              <p class="mb-2">按概念的外延所反映的对象是否为集合体来分类</p>
              <ol class="list-decimal pl-6 mt-2 space-y-2">
                <li>
                  <p>集合体：由若干对象组成的整体，其中每一个对象称为这个集合体的“个体”。</p>
                  <p>个体组成集合体，但<strong class="text-white">不具有集合体的属性</strong>，即<strong class="text-white">整体与部分</strong>的关系。</p>
                </li>
                <li>
                  <p>非集合体：由若干对象组成。
                  对象组成非集合体，<strong class="text-white">必然具有非集合体的属性</strong>，即<strong class="text-white">一般与个别</strong>的关系。</p>
                </li>
                <li>
                  <p>集合概念 / 非集合概念：森林 / 树</p>
                </li>
              </ol>
            </li>
            <li>
              <p class="mb-2">按概念的内涵所反映的对象是否具有某种属性来分类</p>
              <ol class="list-decimal pl-6 mt-2 space-y-2">
                <li>
                  <p>正概念（肯定概念）：反映事物具有某种属性的概念</p>
                </li>
                <li>
                  <p>负概念（否定概念）：反映事物不具有某种属性的概念</p>
                </li>
                <li>
                  <p>正负概念总是成对出现</p>
                </li>
                <li>
                  <p>正负概念在形式结构上有如下关系：</p>
                  <p class="my-6 text-lg text-center font-serif text-white">
                  $$
                  负概念=(否定词+正概念)
                  $$
                  </p>
                </li>
              </ol>
            </li>
          </ol>
        </li>
        <li>
          <p class="mb-2">概念的集合使用和非集合使用</p>
          <ol class="list-decimal pl-6 mt-2 space-y-2">
            <li>Definition：在不同语境中，<strong class="text-white">同一语词</strong>既可以表达<strong class="text-white">集合概念</strong>，也可以表达<strong class="text-white">非集合概念</strong>，这就是概念的集合使用与非集合使用。</li>
            <li>判断上来看，如果在概念前面加一个量词说得通，就是非集合概念。</li>
          </ol>
        </li>
        <li>
          <p class="mb-2">概念之间外延关系（不会的请重修高中政治选必四）</p>
          <ol class="list-decimal pl-6 mt-2 space-y-2">
            <li>
              <p>全同关系、真包含于关系、真包含、交叉、全异关系。</p>
              <img src="https://s41.ax1x.com/2025/12/01/pZVzFzT.png" alt="pZVzFzT.png" class="rounded-xl my-4 border border-white/10 w-full max-w-lg mx-auto" />
            </li>
            <li>
              <p>在<strong class="text-white">传统逻辑</strong>中，将“真包含于”关系和“真包含”关系统称为<strong class="text-white">“属种关系”</strong>。请注意，是在传统逻辑中！</p>
              <p>不会的请重修高中政治选必四。</p>
            </li>
            <li>
              <p>全异关系又分为<strong class="text-white">矛盾关系</strong>和<strong class="text-white">反对关系</strong>。</p>
              <p>矛盾关系：$S+P=U$.</p>
              <p>反对关系：$S+P&lt;U$.</p>
              <img src="https://s41.ax1x.com/2025/12/01/pZVzAQU.png" alt="pZVzAQU.png" class="rounded-xl my-4 border border-white/10 w-full max-w-lg mx-auto" />
            </li>
          </ol>
        </li>
        <li>
          <p class="mb-2">内涵与外延的<strong class="text-white">反变关系</strong></p>
          <ol class="list-decimal pl-6 mt-2 space-y-2">
            <li>具有属种关系的概念的内涵与外延之间存在反变关系。</li>
            <li>反变关系：一个概念的内涵越少，则其概念的外延越大；反之，一个概念的内涵越多，其外延越小。</li>
            <li><strong class="text-white">属种概念之间内涵与外延反变关系，是对概念进行限制和概括的逻辑根据。</strong></li>
          </ol>
        </li>
        <li>
          <p>概念的限制、概括及应注意的问题</p>
        </li>
      </ol>

      <h1 class="text-3xl font-bold text-white mb-6 mt-12" id="二定义">二、定义</h1>
      <ol class="list-decimal pl-6 space-y-4 text-zinc-300 mb-8">
        <li>
          <p class="mb-2">定义</p>
          <ol class="list-decimal pl-6 mt-2 space-y-2">
            <li>
              <p>Definition：用简明的形式揭示概念内涵的逻辑方法。</p>
            </li>
            <li>
              <p>组成：被定义项、定义项、定义联项</p>
              <p>（定义联项：表示被定义项与定义项的逻辑关系并联结它们的概念）</p>
            </li>
            <li>
              <p>一般形式：$D_s$就是$D_p$。其中，$D_s$是被定义项，$D_p$是定义项。</p>
            </li>
            <li>
              <p>内涵：思维对象的特有属性；</p>
              <p>外延：具有此属性的一类对象。</p>
            </li>
            <li>
              <p><strong class="text-white">定义</strong>用于明确概念的内涵，<strong class="text-white">划分</strong>用于明确概念的外延。</p>
            </li>
            <li>
              <p>类、子类 = 属、种</p>
            </li>
          </ol>
        </li>
        <li>
          <p class="mb-2">现代定义的三大类型</p>
          <ol class="list-decimal pl-6 mt-2 space-y-2">
            <li>
              <p>内涵定义：种差法（属+种差）</p>
              <p class="my-6 text-lg text-center font-serif text-white">
              $$
              被定义项=种差+邻近的属
              $$
              </p>
              <ul class="list-disc pl-6 mt-2 space-y-1">
                <li>种差：在同一个属概念下，同层次的种概念之间的差别，并且这种差别为被定义项所共有。</li>
              </ul>
              <p>内涵定义的不同种类：性质定义、发生定义、功用定义、关系定义</p>
              <p><strong class="text-white">范畴</strong>作为一定论域中<strong class="text-white">最大的属</strong>，不适用种差法。</p>
              <p><strong class="text-white">单独概念</strong>指称单独对象，不适合用种差法。</p>
            </li>
            <li>
              <p>语词定义：界定语词标准用法或特殊用法</p>
              <ol class="list-decimal pl-6 mt-2 space-y-2">
                <li>分为报道性定义（词典定义）、约定性定义、修正性定义（精确定义）</li>
              </ol>
            </li>
            <li>
              <p>外延定义：列举一概念的外延</p>
              <ol class="list-decimal pl-6 mt-2 space-y-2">
                <li>分为穷举定义、例举定义、实指定义</li>
              </ol>
              <ul class="list-disc pl-6 mt-2 space-y-1">
                <li>eg. “近亲属”指夫、妻、父、母、子、女、同胞兄弟姐妹。</li>
              </ul>
            </li>
          </ol>
        </li>
        <li>
          <p class="mb-2">定义的规则</p>
          <ol class="list-decimal pl-6 mt-2 space-y-2">
            <li>
              <p>定义项与被定义项的外延<strong class="text-white">必须全同</strong>。</p>
              <p>违反则犯“<strong class="text-white">定义过宽/定义过窄</strong>”的错误。</p>
              <p>太阳是白昼发光的星体。</p>
            </li>
            <li>
              <p>定义项不能直接或间接包含被定义项。</p>
              <p>违反则犯”<strong class="text-white">同语反复（循环定义）</strong>“的错误。</p>
            </li>
            <li>
              <p>定义项必须清楚确切。不可使用比喻的手法。</p>
              <p>违反则犯”<strong class="text-white">含混不清</strong>“的错误。</p>
            </li>
            <li>
              <p>定义一般<strong class="text-white">不使用否定式</strong></p>
              <ol class="list-decimal pl-6 mt-2 space-y-2">
                <li>特殊情况：当种差为负概念，或定义联项为否定形式，那么可以使用否定定义。</li>
              </ol>
            </li>
          </ol>
          <img src="https://s41.ax1x.com/2025/12/01/pZVzVL4.png" alt="pZVzVL4.png" class="rounded-xl my-4 border border-white/10 w-full max-w-lg mx-auto" />
        </li>
      </ol>

      <h1 class="text-3xl font-bold text-white mb-6 mt-12" id="三划分">三、划分</h1>
      <ol class="list-decimal pl-6 space-y-4 text-zinc-300 mb-8">
        <li>
          <p>Definition: 揭示概念外延的逻辑方法</p>
        </li>
        <li>
          <p>组成：母项、子项、划分标准。母项和子项是属种关系。</p>
        </li>
        <li>
          <p><strong class="text-white">整体与部分不是属种关系</strong>。要将“划分”与“分解”区别开来。</p>
          <p>当你不能说A是B的一种时，它就不属于属种关系。</p>
        </li>
        <li>
          <p>方法：一次划分、连续划分、二分法。</p>
          <p>二分法中，两子项具有矛盾关系，正概念与负概念</p>
        </li>
        <li>
          <p>规则：</p>
          <ol class="list-decimal pl-6 mt-2 space-y-2">
            <li>每次划分必须按照同一个标准。否则犯“<strong class="text-white">标准不一</strong>”的的错误。</li>
            <li>子项必须互相排斥，应为<strong class="text-white">全异关系</strong>，不能是属种关系、交叉关系。否则犯”<strong class="text-white">子项相容</strong>”的错误。</li>
            <li>划分后，各子项外延之和必须等于母项外延。否则犯“<strong class="text-white">子项不全</strong>”、“<strong class="text-white">多出子项</strong>”的错误。</li>
          </ol>
          <img src="https://s41.ax1x.com/2025/12/01/pZVzeeJ.png" alt="pZVzeeJ.png" class="rounded-xl my-4 border border-white/10 w-full max-w-lg mx-auto" />
        </li>
      </ol>

      <h1 class="text-3xl font-bold text-white mb-6 mt-12" id="四论证">四、论证</h1>
      <ol class="list-decimal pl-6 space-y-4 text-zinc-300 mb-8">
        <li>
          <p>包括<strong class="text-white">证明</strong>和<strong class="text-white">反驳</strong>。（即立论、驳论）。</p>
          <ol class="list-decimal pl-6 mt-2 space-y-2">
            <li>证明是用一个或一些<strong class="text-white">已知为真</strong>的命题去确定<strong class="text-white">另一命题为真或成立</strong>的思维过程。</li>
            <li>反驳是用一个或一些<strong class="text-white">已知为真</strong>的命题去确定<strong class="text-white">另一命题为假或不成立</strong>的思维过程。</li>
          </ol>
        </li>
        <li>
          <p>组成：</p>
          <ol class="list-decimal pl-6 mt-2 space-y-2">
            <li>论题：论证中需要证明或反驳的命题。解决“论证什么”的问题。</li>
            <li>论据：论证中用以确定论题真实性或虚假性的命题。解决“用什么论证”的问题。</li>
            <li>论证方式：论证中使用的推理形式。解决“如何论证”的问题。</li>
          </ol>
        </li>
        <li>
          <p>论证和推理的联系</p>
          <img src="https://s41.ax1x.com/2025/12/01/pZVzmw9.png" alt="pZVzmw9.png" class="rounded-xl my-4 border border-white/10 w-full max-w-lg mx-auto" />
        </li>
        <li>
          <p>论证和推理的区别</p>
          <ol class="list-decimal pl-6 mt-2 space-y-2">
            <li>思维进程不同。从论题到论据 / 从前提到结论</li>
            <li>逻辑要求不同。论证要求证据内容为真且形式正确，推理只要求形式正确。</li>
            <li>论证一般比推理复杂，是推理的综合运用。</li>
          </ol>
        </li>
        <li>
          <p>充足理由原则</p>
          <ol class="list-decimal pl-6 mt-2 space-y-2">
            <li>
              <p>定义：在思维和论证过程中，任何正确的思想，必然有其充足理由。</p>
              <p>A真，是因为B真且B足以推出A。则此时，B是A的充足理由。</p>
            </li>
            <li>
              <p>逻辑要求：理由必须真实且充分（推理前提真实、推理形式有效）。</p>
            </li>
          </ol>
        </li>
      </ol>

      <h1 class="text-3xl font-bold text-white mb-6 mt-12" id="五证明">五、证明</h1>
      <ol class="list-decimal pl-6 space-y-4 text-zinc-300 mb-8">
        <li>
          <p>按推理形式不同，分为演绎证明、归纳证明和类比证明；</p>
          <p>按是否与论题直接发生联系，分为：</p>
          <p>直接证明：根据论据的真实性，通过逻辑推理直接确定论题真实性的论证。</p>
          <p>间接证明：用论据确定与论题相矛盾或具有下反对关系的反论题的虚假，根据排中律确定论题真实性。<em>（反证法、选言证法）</em></p>
          <p>区分直接和间接，主要看<strong class="text-white">论证是否直接从原论题出发</strong>。</p>
          <ol class="list-decimal pl-6 mt-2 space-y-2">
            <li>
              <p>反证法：设立反论题，通过确定反论题为假，根据排中律确定原论题为真。</p>
              <p>在逻辑推理中，<strong class="text-white">前真不能推出后假</strong>。蕴含关系只在此情况中不成立。所以当后件为假时，前件一定为假。故在此关系中，逻辑是通顺的。方式为<strong class="text-white">充分条件假言推理否定后件式</strong>。</p>
              <p class="my-6 text-lg text-center font-serif text-white">
              $$
              假设\\lnot p\\Rightarrow q，\\\\由于\\lnot q=True, \\\\所以\\lnot(\\lnot p)\\Rightarrow p=True
              $$
              </p>
              <img src="https://s41.ax1x.com/2025/12/01/pZVznoR.png" alt="pZVznoR.png" class="rounded-xl my-4 border border-white/10 w-full max-w-lg mx-auto" />
            </li>
            <li>
              <p>选言证法：通过确定除论题之外其余可能情况都为虚假，从而推出论题为真的一种间接证明方法。<em>又叫排除法、淘汰法</em></p>
              <p>本质上是将非p的所有情况拆解成了q和r两方面。遵循排中律进行证明。</p>
              <p>方式为<strong class="text-white">相容选言推理的否定肯定式</strong>。</p>
              <p class="my-6 text-lg text-center font-serif text-white">
              $$
              p\\lor(q+r)成立，必有一真\\\\由于q+r=False,则p=True
              $$
              </p>
              <img src="https://xfrozenx.top/post/informal_logic/image6.png" alt="image.png" class="rounded-xl my-4 border border-white/10 w-full max-w-lg mx-auto" />
            </li>
          </ol>
        </li>
      </ol>

      <h1 class="text-3xl font-bold text-white mb-6 mt-12" id="六反驳">六、反驳</h1>
      <ol class="list-decimal pl-6 space-y-4 text-zinc-300 mb-8">
        <li>反驳是对某一具体证明过程或立论的论题的证伪。</li>
        <li>包括：反驳论题、反驳论据、反驳论证方式。</li>
        <li>反驳论题和论据的方式：
          <ol class="list-decimal pl-6 mt-2 space-y-2">
            <li>
              <p>直接反驳：</p>
              <ol class="list-decimal pl-6 mt-2 space-y-2">
                <li>
                  <p>用论据直接确定被反驳论题的虚假。</p>
                </li>
                <li>
                  <p>归谬反驳：从被反驳论题引出互相矛盾的命题，进而证明被反驳论题是假的。</p>
                  <p>依然是一个<strong class="text-white">充分条件假言推理否定后件式</strong>。归谬法。</p>
                  <p class="my-6 text-lg text-center font-serif text-white">
                  $$
                  p\\Rightarrow q, 由于\\lnot q=True, 所以\\lnot p =True
                  $$
                  </p>
                  <img src="https://xfrozenx.top/post/informal_logic/image7.png" alt="image.png" class="rounded-xl my-4 border border-white/10 w-full max-w-lg mx-auto" />
                </li>
              </ol>
            </li>
            <li>
              <p>间接反驳</p>
              <ol class="list-decimal pl-6 mt-2 space-y-2">
                <li>设立与被反驳论题具有矛盾关系或反对关系的反论题，通过证明反论题的真实，并根据矛盾律的要求，从而确定被反驳论题的虚假性。</li>
                <li>步骤：设立反论题；独立证明反论题为真；根据矛盾律，由反论题真，确定原论题假。<em>（由真推假）</em></li>
              </ol>
            </li>
          </ol>
        </li>
        <li>间接证明和间接反驳的不同点
          <ol class="list-decimal pl-6 mt-2 space-y-2">
            <li>目的不同：一个是论证，一个是反驳</li>
            <li>基本规律不同：间接证明根据<strong class="text-white">排中律</strong>，简介反驳根据<strong class="text-white">矛盾律</strong>。</li>
            <li>论题与反论题关系不同：证明中二者具有矛盾关系或下反对关系，反驳中具有矛盾关系或反对关系</li>
          </ol>
        </li>
        <li>反驳论证方式
          <ol class="list-decimal pl-6 mt-2 space-y-2">
            <li>指出对方在论证中违反逻辑规律要求或推理规则，即论据“推不出”论题。</li>
            <li>也可以使用<strong class="text-white">归谬法。先假定其论证方式正确</strong>，<strong class="text-white">再按同样的论证方式推导出荒谬的结论</strong>，从而否定其论证方式。</li>
            <li>论证方式无效不等于论题、论据无效，只可以说明论题的真实性可疑。sus。</li>
          </ol>
        </li>
      </ol>

      <h1 class="text-3xl font-bold text-white mb-6 mt-12" id="七论证规则">七、论证规则</h1>
      <ol class="list-decimal pl-6 space-y-4 text-zinc-300 mb-8">
        <li>关于论题：
          <ol class="list-decimal pl-6 mt-2 space-y-2">
            <li>论题必须清楚、明确——“论旨不清”</li>
            <li>论题必须始终同一——“转移/偷换论题、论证过少/过多”</li>
          </ol>
        </li>
        <li>关于论据：
          <ol class="list-decimal pl-6 mt-2 space-y-2">
            <li>必须是已知为真的命题——“虚假理由/预期理由”</li>
            <li>真实性不能依赖论题来证明——“循环论证”</li>
          </ol>
        </li>
        <li>关于论证方式：
          <ol class="list-decimal pl-6 mt-2 space-y-2">
            <li>从论据应能推出论题——“推不出”</li>
            <li>推不出有以下情况：
              <ol class="list-decimal pl-6 mt-2 space-y-2">
                <li>违反推理规则或违反逻辑规律要求</li>
                <li>论据、论题无关</li>
                <li>论据论题必要但不充分——“理由不充足”</li>
              </ol>
            </li>
          </ol>
        </li>
      </ol>
    `
};
