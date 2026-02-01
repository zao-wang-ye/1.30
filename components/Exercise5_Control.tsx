import React from 'react';
import { Exercise5Data } from '../types';
import { TextArea, MotivationSlider } from './InputGroup';

interface Props {
  data: Exercise5Data;
  update: (field: keyof Exercise5Data, value: any) => void;
}

export const Exercise5_Control: React.FC<Props> = ({ data, update }) => {
  return (
    <div className="space-y-12 animate-in fade-in duration-500">
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-5">三、控制愤怒的方式</h2>
        <p className="text-slate-700 leading-relaxed mb-6 text-lg">
          你现在清楚自己的愤怒触发点有哪些了，现在你要学会让怒气飞一会儿。当你感到愤怒，并想要立刻采取行动时，先给自己一点时间冷静下来。对于那些让你愤怒的事，不要立刻做出反应。你可以选择控制它、超越它，换一种方式应对它。这样你便能在回顾这件事时，认为“我对自己处理这件事的方式感到骄傲”。这并不意味着你不应该感到愤怒。愤怒控制并不是让你不去感受愤怒，而是让你控制应对它的方式。
        </p>

        <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-10">
          <h3 className="font-bold text-slate-900 mb-4 text-xl">你可以采用以下这些策略</h3>
          <div className="space-y-6 text-slate-700">
            <div>
              <strong className="block text-slate-900 text-lg mb-2">1、在做出反应前，先在内心和自己对话。以下几句话可供参考:</strong>
              <ul className="list-disc list-inside pl-4 space-y-1 bg-white p-4 rounded-lg border border-slate-100">
                <li>我可以保持冷静，控制好情绪。</li>
                <li>是否能控制好情绪取决于我自己，我知道我能做到。</li>
                <li>我可以马上放松，我能以自己满意的方式处理问题。</li>
                <li>我无法控制其他人的行为和感受。即使别人的行为激怒了我，我也只能控制我自己的行为。</li>
              </ul>
            </div>
            <div>
              <strong className="block text-slate-900 text-lg mb-1">2、要坚定</strong>
              <p>告诉别人你现在感到烦躁，在谈论此事之前，你需要一些时间冷静下来理清自己的思路。</p>
            </div>
            <div>
              <strong className="block text-slate-900 text-lg mb-1">3、离开这一情境</strong>
              <p>如果你的愤怒情绪已被触发，而你担心自己失控，那么离开这个情境是合理的应对策略。</p>
            </div>
            <div>
              <strong className="block text-slate-900 text-lg mb-1">4、专注于呼吸。</strong>
              <p>当你情绪激动时，放松和冥想可以将你带回本来的节奏。</p>
            </div>
            <div>
              <strong className="block text-slate-900 text-lg mb-1">5、从1数到10。</strong>
              <p>这样做可以让你快速冷静下来，以免失控或冲动。</p>
            </div>
            <div>
              <strong className="block text-slate-900 text-lg mb-1">6、允许自己哭出来。</strong>
              <p>你需要一个情绪发泄的出口，允许自己找个地方大哭一场。哭比对别人发火要健康得多。</p>
            </div>
            <div>
              <strong className="block text-slate-900 text-lg mb-2">7、其他回应方式</strong>
               <ul className="list-disc list-inside pl-4 space-y-1 bg-white p-4 rounded-lg border border-slate-100">
                <li>我的愤怒合情合理，我不能因为别人的错误就一直愤怒下去。</li>
                <li>我要充分享受这个下午，去运动，再去吃一顿大餐。</li>
                <li>我要为自己的不冷静道歉，还要告诉他有更好的表达愤怒的方法，为他树立一个好榜样。</li>
                <li>我知道我可以有愤怒情绪，不过现在我要做一个5分钟到10分钟的呼吸训练。</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="space-y-6 bg-orange-50/50 p-6 rounded-xl border border-orange-100">
          <p className="font-bold text-slate-900 text-lg">
            请你回忆一次愤怒的经历，在这次事件里，你使用了无益于解决问题的方式。现在，你要想出一种健康的反应方式。
          </p>
          <h4 className="font-bold text-orange-800 border-b border-orange-200 pb-2">当我感到愤怒时</h4>
          
          <TextArea
            label="触发点是:"
            value={data.scenarioTrigger}
            onChange={(e) => update('scenarioTrigger', e.target.value)}
            className="min-h-[80px]"
          />
          <TextArea
            label="我产生了这样的想法:"
            value={data.scenarioThoughts}
            onChange={(e) => update('scenarioThoughts', e.target.value)}
            className="min-h-[80px]"
          />
          <TextArea
            label="我的不健康反应是:"
            value={data.scenarioUnhealthy}
            onChange={(e) => update('scenarioUnhealthy', e.target.value)}
            className="min-h-[80px] border-red-200 focus:ring-red-200"
          />
          <TextArea
            label="更健康的反应方式是:"
            value={data.scenarioHealthy}
            onChange={(e) => update('scenarioHealthy', e.target.value)}
            className="min-h-[80px] bg-green-50/50 border-green-200 focus:ring-green-200"
          />
        </div>

        <div className="text-lg text-slate-700 bg-slate-50 p-6 rounded-xl italic border-l-4 border-slate-400">
          <p>无论触发用药冲动的是什么，一定要反复强调自己努力保持清醒的原因，坚定康复目标。应对消极情绪也一样。当你被消极情绪俘获时，可以重温这个练习。</p>
        </div>
      </section>

      <section className="pt-8 border-t border-slate-100">
        <p className="text-slate-700 text-lg mb-6 leading-relaxed">
          现在请给自己保持清醒的动力评分(从0到10)，0意味着你完全没有动力，10意味着你的动力强到不能再强了。
        </p>
        <MotivationSlider
          value={data.motivationScore}
          onChange={(val) => update('motivationScore', val)}
          label=""
        />
      </section>
    </div>
  );
};