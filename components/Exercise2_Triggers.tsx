import React from 'react';
import { Exercise2Data, INTERNAL_TRIGGERS, EXTERNAL_TRIGGERS } from '../types';
import { Checkbox } from './InputGroup';

interface Props {
  data: Exercise2Data;
  update: (field: keyof Exercise2Data, value: any) => void;
}

export const Exercise2_Triggers: React.FC<Props> = ({ data, update }) => {
  const toggleTrigger = (list: string[], item: string, field: 'internalTriggers' | 'externalTriggers') => {
    if (list.includes(item)) {
      update(field, list.filter(i => i !== item));
    } else {
      update(field, [...list, item]);
    }
  };

  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-5">一、识别触发点</h2>
        <p className="text-slate-700 leading-relaxed mb-6 text-lg">
          康复中大多数人会在某个时刻对用药有强烈的渴求。心理上的冲动或渴求也一样会带来影响，有时甚至更强烈。由于触发点和物质使用之间的心理连接非常强大，被触发而不“动”使人产生身心的强烈不适。你经历的这种不适感就是渴求。研究表明，触发点可分为几种类别。
        </p>
        
        <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100 text-base text-slate-700 space-y-4 mb-8">
          <p className="font-bold text-slate-900">请思考以下哪些类别可能触发你，在这些情境中你应学会变得更有自我意识。</p>
          <div>
            <strong className="block text-slate-900 mb-1">1、消极的情绪状态:</strong>
            <p>焦虑、悲伤、无聊、孤独或愤怒时，有些人通过用药来“自我疗愈”。</p>
          </div>
          <div>
            <strong className="block text-slate-900 mb-1">2、人际冲突:</strong>
            <p>你用药物来应对过人际冲突吗?这是另一类触发点—有些人在与伴侣或家人争吵后喝酒或用药。还有些人被触发是因在工作、学校或家庭中遭到了拒绝或批评。</p>
          </div>
          <div>
            <strong className="block text-slate-900 mb-1">3、社交压力:</strong>
            <p>在人人都沉醉其中的社交场合，你是否觉得没办法拒绝用药?如果是，你并非特例。这对很多正在尝试戒药的人来说都是最具挑战性的。要克服这一挑战，你首先需要了解为什么这种情况你难以应对。对有的人来说，这是过度的自我批判造成的， 他们在意的是如果拒绝的话别人会怎么评价他们。这是非常自然的想法，但要康复就要跨过这道障碍。</p>
          </div>
           <div>
            <strong className="block text-slate-900 mb-1">4、积极情绪:</strong>
            <p>有的人饮酒和用药只是力了放大良好的感觉，而不是逃避或回避不适感。也许在庆祝活动或心情愉快时你会被触发用药的渴望。或者，某些东西让你想起了用药曾为你带来的积极情绪或感受，你想重温这种感觉，如放松、兴奋、自信或充满能量的感觉。</p>
          </div>
        </div>

        <p className="font-bold text-slate-800 text-lg mb-6">下面列出了几个触发点。请在你的触发点前的横线上打钩。</p>

        <div className="mb-10">
          <h3 className="font-bold text-primary text-xl mb-4 border-b border-primary/20 pb-2">内部触发点（就是你的内在情绪）：</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {INTERNAL_TRIGGERS.map(item => (
              <Checkbox
                key={item}
                label={item}
                checked={data.internalTriggers.includes(item)}
                onChange={() => toggleTrigger(data.internalTriggers, item, 'internalTriggers')}
              />
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <h3 className="font-bold text-primary text-xl mb-4 border-b border-primary/20 pb-2">外部触发点</h3>
          
          <div>
            <h4 className="font-bold text-slate-800 text-lg mb-3">1、人物：</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {EXTERNAL_TRIGGERS.people.map(item => (
                <Checkbox
                  key={item}
                  label={item}
                  checked={data.externalTriggers.includes(item)}
                  onChange={() => toggleTrigger(data.externalTriggers, item, 'externalTriggers')}
                />
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-800 text-lg mb-3">2、地点：</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {EXTERNAL_TRIGGERS.places.map(item => (
                <Checkbox
                  key={item}
                  label={item}
                  checked={data.externalTriggers.includes(item)}
                  onChange={() => toggleTrigger(data.externalTriggers, item, 'externalTriggers')}
                />
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-800 text-lg mb-3">3、情境或活动：</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {EXTERNAL_TRIGGERS.situations.map(item => (
                <Checkbox
                  key={item}
                  label={item}
                  checked={data.externalTriggers.includes(item)}
                  onChange={() => toggleTrigger(data.externalTriggers, item, 'externalTriggers')}
                />
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-800 text-lg mb-3">4、物品：</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {EXTERNAL_TRIGGERS.objects.map(item => (
                <Checkbox
                  key={item}
                  label={item}
                  checked={data.externalTriggers.includes(item)}
                  onChange={() => toggleTrigger(data.externalTriggers, item, 'externalTriggers')}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="text-lg text-slate-700 bg-amber-50 p-6 rounded-xl italic border-l-4 border-amber-400">
        既然现在你知道了自己的触发点，那么是时候采取行动了——揭示那些导致你饮酒或用药的想法。
      </div>
    </div>
  );
};