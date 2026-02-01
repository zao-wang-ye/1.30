import React from 'react';
import { Exercise5Data } from '../types';
import { TextArea } from './InputGroup';

interface Props {
  data: Exercise5Data;
  update: (field: keyof Exercise5Data, value: any) => void;
}

export const Exercise5_Triggers: React.FC<Props> = ({ data, update }) => {
  return (
    <div className="space-y-12 animate-in fade-in duration-500">
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-5">二、愤怒触发点</h2>
        <p className="text-slate-700 leading-relaxed mb-6 text-lg">
          有效管理愤怒情绪的下一步是要弄清楚什么东西会触发它。找到自己的愤怒触发点。
        </p>
        
        <div className="bg-white border border-slate-200 rounded-xl p-6 mb-8 shadow-sm">
          <p className="font-bold text-slate-900 mb-4">通常， 愤怒触发点有以下五大类:</p>
          <ul className="list-disc list-inside space-y-3 text-slate-700">
            <li><strong>人物</strong> (如伴侣、孩子)</li>
            <li><strong>地点</strong> (如地铁、广场、厨房)</li>
            <li><strong>情绪</strong> (例如，感到被拒绝、被忽视、焦躁不安或不耐烦)</li>
            <li><strong>想法</strong> (例如，“排队的人怎么这么多， 我还赶着去别的地方呢!”)</li>
            <li><strong>身体感觉</strong> (例如，药物戒断引起的身体不适诱发的烦躁和愤怒)</li>
          </ul>
        </div>

        <p className="text-lg font-bold text-slate-800 mb-6">请填写你的愤怒触发点:</p>

        <div className="grid md:grid-cols-2 gap-6">
           <TextArea
             label="人物:"
             value={data.triggerPeople}
             onChange={(e) => update('triggerPeople', e.target.value)}
           />
           <TextArea
             label="地点:"
             value={data.triggerPlaces}
             onChange={(e) => update('triggerPlaces', e.target.value)}
           />
           <TextArea
             label="情绪:"
             value={data.triggerEmotions}
             onChange={(e) => update('triggerEmotions', e.target.value)}
           />
           <TextArea
             label="想法:"
             value={data.triggerThoughts}
             onChange={(e) => update('triggerThoughts', e.target.value)}
           />
           <TextArea
             label="身体感觉:"
             value={data.triggerPhysical}
             onChange={(e) => update('triggerPhysical', e.target.value)}
             className="md:col-span-2"
           />
        </div>
      </section>
    </div>
  );
};