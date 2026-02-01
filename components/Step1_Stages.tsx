import React from 'react';
import { FormData, StageType } from '../types';
import { MotivationSlider } from './InputGroup';

interface Props {
  data: FormData;
  update: (field: keyof FormData, value: any) => void;
}

const STAGES = [
  {
    title: StageType.PRECONTEMPLATION,
    desc: '在这个阶段，你还没意识到自己需要做改变。也许你身边的人已经注意到你的用药问题，并且和你谈到了他们的担忧，但你自己并没有当回事。别人一跟你说起他们的担忧，你就很抵触，因为那时你不觉得这是个问题。',
  },
  {
    title: StageType.CONTEMPLATION,
    desc: '你在这个阶段开始思考改变的可能性。此时萦绕于你脑海中的主题可能是，我需要做出一些改变，或者我可能无法控制用药了。在这个阶段，你开始意识到，你当前的行为不是你想要的。',
  },
  {
    title: StageType.PREPARATION,
    desc: '进入第三阶段的你确信自己需要在行动上有所改变并开始做计划。你四处寻找帮助，这是你迈入这一阶段的标志。',
  },
  {
    title: StageType.ACTION,
    desc: '进入行动期，你开始执行在准备期所做的计划。接受治疗、做练习，减少甚至戒掉了药物。',
  },
  {
    title: StageType.MAINTENANCE,
    desc: '在行动期（停用药物）坚持六个月以上，你就进入了维系期。',
  },
];

export const Step1_Stages: React.FC<Props> = ({ data, update }) => {
  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      <section>
        <h2 className="text-xl font-bold text-slate-900 mb-5">1. 确定你所在的阶段</h2>
        <p className="text-slate-600 text-base mb-6">现在请根据你改变用药现状的动机，圈出你所在的阶段。</p>
        <div className="grid gap-5">
          {STAGES.map((s) => (
            <div 
              key={s.title}
              onClick={() => update('stage', s.title)}
              className={`p-6 rounded-xl border-2 cursor-pointer transition-all ${
                data.stage === s.title 
                  ? 'border-primary bg-primary/5 shadow-md' 
                  : 'border-slate-100 bg-white hover:border-primary/30'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className={`font-bold text-lg ${data.stage === s.title ? 'text-primary' : 'text-slate-800'}`}>
                  {s.title}
                </span>
                {data.stage === s.title && (
                  <svg className="text-primary w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                )}
              </div>
              <p className="text-base text-slate-700 leading-relaxed text-justify">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-slate-900 mb-3">2. 你的动力水平</h2>
        <p className="text-slate-600 text-base leading-relaxed">
          现在你有多大动力去采取必要的行动远离药物? <br/>
          0代表完全没动力， 10代表有最强的动力。请根据你的情况，从0到10，选择你的动机水平等级:
        </p>
        
        <MotivationSlider 
          value={data.motivationScore1} 
          onChange={(val) => update('motivationScore1', val)}
          label=""
        />

        <div className="bg-blue-50 border border-blue-100 p-6 rounded-xl text-base text-slate-700 leading-relaxed">
          {data.motivationScore1 < 5 ? (
            <p className="mb-4">如果你给自己的评分小于 5，那么你可能仍然处于改变的早期阶段：懵懂期或沉思期。</p>
          ) : (
            <p className="mb-4">如果你给自己的评分大于5，不管是犹豫不决还是全身心地，你已经决定了要采取行动改变你的药物使用状况。</p>
          )}
          <p className="mb-4">
            无论你处于哪个阶段，看看你的动机水平评分，并问自己这个问题:
          </p>
          <p className="font-bold text-blue-900 italic text-center text-lg my-6">
            如何才能让我在评分表上右移一位，多得一分?
          </p>
          <p className="mt-4 text-sm text-slate-500">
            没有答案也不要担心。我们即将探讨改变的利弊，以及值得改变的原因。一旦开始对此进行思考，你就知道该如何回答这个问题了。
          </p>
        </div>
      </section>
    </div>
  );
};