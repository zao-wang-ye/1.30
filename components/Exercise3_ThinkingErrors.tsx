import React from 'react';
import { Exercise3Data } from '../types';
import { TextArea } from './InputGroup';

interface Props {
  data: Exercise3Data;
  update: (field: keyof Exercise3Data, value: any) => void;
}

export const Exercise3_ThinkingErrors: React.FC<Props> = ({ data, update }) => {
  return (
    <div className="space-y-12 animate-in fade-in duration-500">
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-5">一、思维中的错误</h2>
        <p className="text-slate-700 leading-relaxed mb-4 text-lg">
          你有没有遇到不开心的事想要用药的经历?其实让你产生用药欲望的不仅仅是那个令你不爽的事件或情境，事情发生过程中或事后你产生的那些想法和情绪也起了很大的作用。我们的想法和我们的情绪、行都是直接关联的。我们的想法有些理性，有些不理性。显然，不合理或非理性的思维更容易导致复发。
        </p>
        <p className="text-slate-700 leading-relaxed mb-4 text-lg">
          对一些人来说，丢掉非理性思维最难的地方就是在它们产生之初就发现它们。这是因为大多数非理性的思维模式会不断重复，最后形成自动化模式。一旦形成自动化模式，我们就注意不到它们。
        </p>
        <p className="text-slate-700 leading-relaxed mb-8 text-lg font-medium">
          所以现在是时候来认识一下思维中其他的常见错误了。
        </p>

        <div className="bg-amber-50 p-6 rounded-xl border border-amber-100 text-slate-800 text-lg mb-10">
          在下列六种非理性想法中，你对哪些最有感触?请记住，不是所有人都有以下非理性想法;如果其中有一些你并不熟悉，那就不需要举例/填空了。
        </div>
      </section>

      {/* 1. Black and White */}
      <section className="space-y-6">
        <h3 className="text-xl font-bold text-slate-900 border-b pb-2">1、非黑即白思维</h3>
        <p className="text-slate-700 leading-relaxed text-lg">
          当你用非黑即白的思维看待事物时，它要么完全是好的，要么完全是坏的。比如有人批评， 你就认为自己完全没有价值，是个失败者：“我一无是处，干什么事都成不了”。当你的想法中包含“没有任何事”和“永远不会”这类词语时， 你陷入了非黑即白的思维中。一个错误会让你否定自己做过的一切。让我们通过一个例子来看看非黑即白的思维是如何引出预警想法的吧。
        </p>
        <div className="bg-slate-100 p-6 rounded-xl border border-slate-200">
          <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
             <div className="flex-1">
               <div className="font-bold text-slate-500 text-sm mb-1 uppercase tracking-wider">非黑即白的想法</div>
               <div className="text-lg font-medium text-slate-800">我搞砸了人生中的一切</div>
             </div>
             <div className="text-2xl text-slate-400">➡</div>
             <div className="flex-1">
               <div className="font-bold text-slate-500 text-sm mb-1 uppercase tracking-wider">预警想法</div>
               <div className="text-lg font-medium text-red-600">不妨“嗨”一下麻痹自己</div>
             </div>
          </div>
        </div>
        <p className="font-bold text-slate-900 text-lg">现在请你写下你的非黑即白想法，以及你的预警想法。</p>
        <div className="grid md:grid-cols-2 gap-6">
          <TextArea
            label="我曾经有过的非黑即白的想法:"
            value={data.blackWhiteThought}
            onChange={(e) => update('blackWhiteThought', e.target.value)}
          />
          <TextArea
            label="预警想法:"
            value={data.blackWhiteWarning}
            onChange={(e) => update('blackWhiteWarning', e.target.value)}
            className="border-red-100 focus:ring-red-200"
          />
        </div>
      </section>

      {/* 2. Discounting the Positive */}
      <section className="space-y-6 pt-8 border-t border-slate-100">
        <h3 className="text-xl font-bold text-slate-900 border-b pb-2">2、给好事打折</h3>
        <p className="text-slate-700 leading-relaxed text-lg">
          想象你自己戴着一副眼镜，你对经历、情境以及他人与你相处方式的理解，都会被眼前这个眼镜过滤一遍。屏障拦截下所有来自外部体验的积极想法，只把消极想法传递给你。即使有好事发生也是如此。例如，就算你的老板对你的工作提出了表扬，但如果你“给好事打折”，仍然会产生以下类似想法:“他并不是真的想表扬我，因为我老是把事情搞砸，他这么说只是可怜我。”老板的赞扬可以从很多积极的方面去理解，但你给好事打了折。
        </p>
        <div className="bg-slate-100 p-6 rounded-xl border border-slate-200">
          <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
             <div className="flex-1">
               <div className="font-bold text-slate-500 text-sm mb-1 uppercase tracking-wider">给好事打折</div>
               <div className="text-lg font-medium text-slate-800">老板只是出于怜悯才对我说了些好听的话</div>
             </div>
             <div className="text-2xl text-slate-400">➡</div>
             <div className="flex-1">
               <div className="font-bold text-slate-500 text-sm mb-1 uppercase tracking-wider">预警想法</div>
               <div className="text-lg font-medium text-red-600">我真可悲，用药也无所谓，我已经没什么可失去的了</div>
             </div>
          </div>
        </div>
        <p className="font-bold text-slate-900 text-lg">现在写出你有过的“给好事打折”的想法。然后，写下它们可能引出的预警想法。</p>
        <div className="grid md:grid-cols-2 gap-6">
          <TextArea
            label="给好事打折的想法:"
            value={data.discountingThought}
            onChange={(e) => update('discountingThought', e.target.value)}
          />
          <TextArea
            label="预警想法:"
            value={data.discountingWarning}
            onChange={(e) => update('discountingWarning', e.target.value)}
            className="border-red-100 focus:ring-red-200"
          />
        </div>
      </section>

      {/* 3. Jumping to Conclusions */}
      <section className="space-y-6 pt-8 border-t border-slate-100">
        <h3 className="text-xl font-bold text-slate-900 border-b pb-2">3、妄下结论</h3>
        <p className="text-slate-700 leading-relaxed text-lg">
          如果你有妄下结论的习惯，你要么是在“读心”，要么是在“算命”。如果你经常“读心”，你会觉得别人对你的所作所为都反映了他们对你的消极看法。并且在做解读时，你很少参考事实， 甚至根本不顾事实。例如，你去见一个朋友，他今天不是很健谈，你不会想他可能今天过得很糟糕，或者有什么心事，而是觉得他不跟自己说话是因为他不喜欢自己。这就是妄下结论。
        </p>
        <p className="text-slate-700 leading-relaxed text-lg">
          如果你有“算命”的习惯，那么你预测的事情总会向坏的方向发展。你认前方总有阴霾和厄运等着你，那是你无法逃避的命运。你直奔最糟糕而去，而不考虑其他可能性。
        </p>
        <p className="text-slate-700 leading-relaxed text-lg">
          让我们用例子来说明妄下结论是怎样导致预警想法的。
        </p>
        <div className="bg-slate-100 p-6 rounded-xl border border-slate-200">
          <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
             <div className="flex-1">
               <div className="font-bold text-slate-500 text-sm mb-1 uppercase tracking-wider">妄下结论</div>
               <div className="text-lg font-medium text-slate-800">我运气一向不好，治疗对我也不会起作用的。</div>
             </div>
             <div className="text-2xl text-slate-400">➡</div>
             <div className="flex-1">
               <div className="font-bold text-slate-500 text-sm mb-1 uppercase tracking-wider">预警想法</div>
               <div className="text-lg font-medium text-red-600">我永远也没法戒毒，根本没必要去尝试。</div>
             </div>
          </div>
        </div>
        <p className="font-bold text-slate-900 text-lg">请写下你妄下结论的例子，以及你的预警想法。</p>
        <div className="grid md:grid-cols-2 gap-6">
          <TextArea
            label="我曾通过这种方式妄下结论:"
            value={data.jumpingThought}
            onChange={(e) => update('jumpingThought', e.target.value)}
          />
          <TextArea
            label="预警想法:"
            value={data.jumpingWarning}
            onChange={(e) => update('jumpingWarning', e.target.value)}
            className="border-red-100 focus:ring-red-200"
          />
        </div>
      </section>

      {/* 4. Emotional Reasoning */}
      <section className="space-y-6 pt-8 border-t border-slate-100">
        <h3 className="text-xl font-bold text-slate-900 border-b pb-2">4、太把感受当真</h3>
        <p className="text-slate-700 leading-relaxed text-lg">
          太把感受当真是指你会把感受当成现实。即便你的感受是真实的，但如果你太把它们当真，它们也可能让你得出不真实的结论。
        </p>
        <p className="text-slate-700 leading-relaxed text-lg">
          举一个例子。你的老板告诉你工作中有一些需要改进的地方，你听后觉得自己的工作一无是处。即使你有这样的感受也并不意味着你真的毫无价值。当感受强烈来袭时，你很难把感受和现实区分开来。你正在经历某种感觉，并不意味着你在现实中真的是这个样子。让我们来看一个“太把感受当真”的例子。
        </p>
        <div className="bg-slate-100 p-6 rounded-xl border border-slate-200">
          <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
             <div className="flex-1">
               <div className="font-bold text-slate-500 text-sm mb-1 uppercase tracking-wider">太把感受当真</div>
               <div className="text-lg font-medium text-slate-800">我感到很绝望，我的生活也一定毫无希望。</div>
             </div>
             <div className="text-2xl text-slate-400">➡</div>
             <div className="flex-1">
               <div className="font-bold text-slate-500 text-sm mb-1 uppercase tracking-wider">预警想法</div>
               <div className="text-lg font-medium text-red-600">事情永远也不会有转机了。如果我用药，至少就不用再去痛苦地感受我的绝望了。</div>
             </div>
          </div>
        </div>
        <p className="font-bold text-slate-900 text-lg">请写下你“太把感受当真”的经历，以及你的预警想法。</p>
        <div className="grid md:grid-cols-2 gap-6">
          <TextArea
            label="我“太把感受当真”的例子:"
            value={data.emotionalThought}
            onChange={(e) => update('emotionalThought', e.target.value)}
          />
          <TextArea
            label="预警想法:"
            value={data.emotionalWarning}
            onChange={(e) => update('emotionalWarning', e.target.value)}
            className="border-red-100 focus:ring-red-200"
          />
        </div>
      </section>

      {/* 5. Self Blame */}
      <section className="space-y-6 pt-8 border-t border-slate-100">
        <h3 className="text-xl font-bold text-slate-900 border-b pb-2">5、自我责备</h3>
        <p className="text-slate-700 leading-relaxed text-lg">
          你对自己很严厉，你的心中总有自我批评的声音。你甚至会因你无法控制的事情而责备自己。你有没有因成瘾责备过自己?请记住，即使你在与成瘾的斗争中做出过糟糕的选择，成瘾本身也不是你的选择，更不是你的过错。你患上了脑部疾病，并且正在努力战胜它，努力让你的理性思维重掌大权。
        </p>
        <p className="text-slate-700 leading-relaxed text-lg">
          让我们看一个例子，了解自我责备是怎样导致预警想法的。
        </p>
        <div className="bg-slate-100 p-6 rounded-xl border border-slate-200">
          <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
             <div className="flex-1">
               <div className="font-bold text-slate-500 text-sm mb-1 uppercase tracking-wider">自我责备的想法</div>
               <div className="text-lg font-medium text-slate-800">吸毒太多都是我的错。</div>
             </div>
             <div className="text-2xl text-slate-400">➡</div>
             <div className="flex-1">
               <div className="font-bold text-slate-500 text-sm mb-1 uppercase tracking-wider">预警想法</div>
               <div className="text-lg font-medium text-red-600">我毁了我的生活，就算继续吸毒，我也没什么可失去的了。</div>
             </div>
          </div>
        </div>
        <p className="font-bold text-slate-900 text-lg">请写下你经历过的自我责备思维，以及你的预警想法。</p>
        <div className="grid md:grid-cols-2 gap-6">
          <TextArea
            label="自我责备的想法:"
            value={data.blamingThought}
            onChange={(e) => update('blamingThought', e.target.value)}
          />
          <TextArea
            label="预警想法:"
            value={data.blamingWarning}
            onChange={(e) => update('blamingWarning', e.target.value)}
            className="border-red-100 focus:ring-red-200"
          />
        </div>
      </section>

      {/* 6. Labeling */}
      <section className="space-y-6 pt-8 border-t border-slate-100">
        <h3 className="text-xl font-bold text-slate-900 border-b pb-2">6、给自己贴标签。</h3>
        <p className="text-slate-700 leading-relaxed text-lg">
          你用自己的感受或用自己犯过的错来给自己贴标签。例如， 你感到抑郁，你会认为，“我就是一个抑郁的人，我把别人都搞抑郁了”。这就是给自己贴抑郁标签，而不把自己当成只是一个“刚好正在经历抑郁情绪”的人。让我们来看一个给自己贴标签的例子。
        </p>
        <div className="bg-slate-100 p-6 rounded-xl border border-slate-200">
          <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
             <div className="flex-1">
               <div className="font-bold text-slate-500 text-sm mb-1 uppercase tracking-wider">给自己贴标签</div>
               <div className="text-lg font-medium text-slate-800">我就是一个不可救药的瘾君子，永远都是。</div>
             </div>
             <div className="text-2xl text-slate-400">➡</div>
             <div className="flex-1">
               <div className="font-bold text-slate-500 text-sm mb-1 uppercase tracking-wider">预警想法</div>
               <div className="text-lg font-medium text-red-600">像我这样无可救药的瘾君子，永远不可能戒彻底。</div>
             </div>
          </div>
        </div>
        <p className="font-bold text-slate-900 text-lg">现在写下你“给自己贴标签”的经历，以及你的预警想法。</p>
        <div className="grid md:grid-cols-2 gap-6">
          <TextArea
            label="贴标签想法:"
            value={data.labelingThought}
            onChange={(e) => update('labelingThought', e.target.value)}
          />
          <TextArea
            label="预警想法:"
            value={data.labelingWarning}
            onChange={(e) => update('labelingWarning', e.target.value)}
            className="border-red-100 focus:ring-red-200"
          />
        </div>
      </section>

      <section className="text-lg text-slate-700 bg-slate-50 p-6 rounded-xl italic border-l-4 border-slate-400">
        <p>本次练习介绍了六种非理性的思维，显然，不合理或非理性的思维更容易导致复发。如果你不幸坠入其中，那么你接下来的行为也不可能合理。你可以在这些想法产生之初就把它们揪出来，然后你就可以改变思考的方向，理性思考，用积极的应对策略来引导自己远离复发。</p>
      </section>
    </div>
  );
};