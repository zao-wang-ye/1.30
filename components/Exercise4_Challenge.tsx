import React from 'react';
import { Exercise4Data } from '../types';
import { TextArea } from './InputGroup';

interface Props {
  data: Exercise4Data;
  update: (field: keyof Exercise4Data, value: any) => void;
}

export const Exercise4_Challenge: React.FC<Props> = ({ data, update }) => {
  return (
    <div className="space-y-12 animate-in fade-in duration-500">
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-5">一、思维挑战</h2>
        <p className="text-slate-700 leading-relaxed mb-6 text-lg">
          我们将用以下几个步骤来进行思维挑战，这几个步骤叫作3T 法:识别触发情境(Triggering situation)、识别与用药有关的预警想法(Red flag thoughts)、对你的想法进行挑战(Thought on trial)。
        </p>
        
        <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100 text-slate-700 mb-8 leading-relaxed">
          <p className="mb-2 font-bold text-indigo-900">前两个步骤我们在之前的练习有学到，你还记得吗？我们通过简单的例子进行回顾：</p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>触发情境:</strong> 比如和某些朋友一起聚会。</li>
            <li><strong>预警想法:</strong> 我只喝一杯的话，没什么大不了的。我可以控制自己。</li>
          </ul>
        </div>

        <p className="text-slate-700 leading-relaxed mb-6 text-lg">
          接下来是本练习的重点：<strong>思维挑战</strong>。<br/>
          这一步需要你不断挑战自己的想法，尤其是与用药相关的想法。
          思维挑战的过程就是要询问自己是否能证明你的想法是真实的。最后，经过挑战，你找到了更理性的、有证据支持的想法。这些新想法将帮助你完成康复计划。
        </p>

        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden mb-10 shadow-sm">
          <div className="bg-slate-50 px-6 py-4 border-b border-slate-200">
            <h3 className="font-bold text-slate-900">下面举例思维挑战时的问题及证据</h3>
          </div>
          <div className="divide-y divide-slate-100">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="p-4 bg-slate-50/50 font-medium text-slate-700 md:col-span-1">思维挑战时的问题</div>
              <div className="p-4 md:col-span-2 text-slate-600">说明想法是非理性的证据</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="p-4 font-medium text-indigo-700 md:col-span-1">大麻会降低焦虑让我更自在吗?</div>
              <div className="p-4 md:col-span-2 text-slate-700">一开始会。但药效一过，情绪低落，之后还有一两天的时间感觉不适。</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="p-4 font-medium text-indigo-700 md:col-span-1">“嗨”能帮我在聚会时表现得更好吗?</div>
              <div className="p-4 md:col-span-2 text-slate-700">不完全能。我虽不会感到那么尴尬，那么难以忍受，但通常我“嗨”的时候，还是跟人有距离感，我不能跟陌生人很好地交流。</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="p-4 font-medium text-indigo-700 md:col-span-1">在这种情况下使用大麻是否值得?</div>
              <div className="p-4 md:col-span-2 text-slate-700">它在短时间内让我感到自在一些，但是我可能不会在聚会上积极交往。而且考虑到它会对我的情绪、体力造成后续影响，我觉得不值得。</div>
            </div>
          </div>
        </div>

        <p className="text-slate-800 font-bold text-lg mb-6">
          现在你可以用练习来揭示那些曾经诱使你去用药的思维模式。这个练习可以帮助你和你的治疗人员了解你的复发是如何发生的，以及你可以做出哪些改变。
        </p>

        <div className="space-y-6">
          <TextArea
            label="触发情境:"
            value={data.triggerSituation}
            onChange={(e) => update('triggerSituation', e.target.value)}
            className="min-h-[100px]"
          />
          <TextArea
            label="预警想法:"
            value={data.warningThought}
            onChange={(e) => update('warningThought', e.target.value)}
            className="min-h-[100px] border-red-200 focus:ring-red-200"
          />
          <TextArea
            label="思维挑战时的问题:"
            value={data.challengeQuestion}
            onChange={(e) => update('challengeQuestion', e.target.value)}
            className="min-h-[100px] border-indigo-200 focus:ring-indigo-200"
          />
          <TextArea
            label="说明想法是非理性的证据:"
            value={data.evidence}
            onChange={(e) => update('evidence', e.target.value)}
            className="min-h-[100px] border-indigo-200 focus:ring-indigo-200"
          />
          <TextArea
            label="回应:"
            subLabel="(你要告诉自己什么才是有利于康复的思维方式)"
            value={data.rationalResponse}
            onChange={(e) => update('rationalResponse', e.target.value)}
            className="min-h-[120px] bg-green-50/50 border-green-200 focus:ring-green-200"
          />
        </div>

      </section>
    </div>
  );
};