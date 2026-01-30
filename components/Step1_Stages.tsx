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
    desc: '在这个阶段，你还没意识到自己需要做改变。也许别人已经注意到你的问题，但你自己很抵触。',
  },
  {
    title: StageType.CONTEMPLATION,
    desc: '你开始思考改变的可能性。你意识到当前的行为不是你想要的，但还在犹豫。',
  },
  {
    title: StageType.PREPARATION,
    desc: '你确信自己需要在行动上有所改变并开始做计划。你开始四处寻找帮助。',
  },
  {
    title: StageType.ACTION,
    desc: '你开始执行计划。接受治疗、做练习，减少甚至戒掉了药物。',
  },
  {
    title: StageType.MAINTENANCE,
    desc: '在行动期（停用药物）坚持六个月以上，你就进入了维系期。',
  },
];

export const Step1_Stages: React.FC<Props> = ({ data, update }) => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <section className="bg-slate-50 p-5 rounded-xl text-slate-700 text-sm leading-relaxed">
        <h3 className="font-bold text-slate-900 mb-2">理论背景</h3>
        <p>你将在本次干预中了解到，改变行为的动机每天甚至每时每刻都在变化。该理论认为，改变用药状况的动机分不同的阶段。</p>
      </section>

      <section>
        <h2 className="text-lg font-bold text-slate-900 mb-4">1. 确定你所在的阶段</h2>
        <p className="text-slate-600 text-sm mb-4">请根据你改变用药现状的动机，选择你所在的阶段：</p>
        <div className="grid gap-3">
          {STAGES.map((s) => (
            <div 
              key={s.title}
              onClick={() => update('stage', s.title)}
              className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                data.stage === s.title 
                  ? 'border-primary bg-primary/5 shadow-md' 
                  : 'border-slate-100 bg-white hover:border-primary/30'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className={`font-bold ${data.stage === s.title ? 'text-primary' : 'text-slate-800'}`}>
                  {s.title}
                </span>
                {data.stage === s.title && (
                  <svg className="text-primary w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                )}
              </div>
              <p className="text-xs text-slate-500 leading-snug">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-lg font-bold text-slate-900 mb-2">2. 你的动力水平</h2>
        <p className="text-slate-600 text-sm">现在你有多大动力去采取必要的行动远离药物?</p>
        
        <MotivationSlider 
          value={data.motivationScore1} 
          onChange={(val) => update('motivationScore1', val)}
          label="动机水平评分 (0-10)"
        />

        <div className="bg-blue-50 border border-blue-100 p-4 rounded-lg text-sm text-slate-700">
          {data.motivationScore1 < 5 ? (
            <p><strong>分析：</strong>你的评分小于 5，这可能意味着你仍然处于改变的早期阶段（懵懂期或沉思期）。这完全正常。</p>
          ) : (
            <p><strong>分析：</strong>你的评分大于 5，不管是犹豫不决还是全身心地，你已经决定了要采取行动改变你的药物使用状况。</p>
          )}
          <hr className="my-3 border-blue-200"/>
          <p className="font-medium text-blue-900">
            思考：如何才能让我在评分表上右移一位，多得一分？
          </p>
        </div>
      </section>
    </div>
  );
};