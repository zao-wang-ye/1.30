import React from 'react';
import { Exercise5Data } from '../types';
import { TextArea } from './InputGroup';

interface Props {
  data: Exercise5Data;
  update: (field: keyof Exercise5Data, value: any) => void;
}

export const Exercise5_Experience: React.FC<Props> = ({ data, update }) => {
  return (
    <div className="space-y-12 animate-in fade-in duration-500">
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-5">一、愤怒带给你的感受</h2>
        <p className="text-slate-700 leading-relaxed mb-6 text-lg">
          控制愤怒情绪的第一步就是要明白愤怒带给你的感受。回忆一下你愤怒时的感受。身体的哪些部位感受到了愤怒?你产生了什么想法?把它们记录下来。
        </p>

        <div className="bg-orange-50 border border-orange-100 rounded-xl p-6 mb-8">
           <h3 className="font-bold text-orange-900 mb-6 text-lg">当我生气时</h3>
           
           <div className="space-y-6">
             <TextArea
               label="我经历过的身体感受:"
               value={data.bodySensations}
               onChange={(e) => update('bodySensations', e.target.value)}
               className="border-orange-200 focus:ring-orange-300"
             />
             <TextArea
               label="我经常产生的想法:"
               value={data.angryThoughts}
               onChange={(e) => update('angryThoughts', e.target.value)}
               className="border-orange-200 focus:ring-orange-300"
             />
             <TextArea
               label="当愤怒情绪无法控制时，我用这些方法来表达:"
               value={data.angryActions}
               onChange={(e) => update('angryActions', e.target.value)}
               className="border-orange-200 focus:ring-orange-300"
             />
           </div>
        </div>
      </section>
    </div>
  );
};