import React from 'react';
import { FormData } from '../types';
import { TextArea } from './InputGroup';

interface Props {
  data: FormData;
  update: (field: keyof FormData, value: string) => void;
}

export const Step3_DeepDive: React.FC<Props> = ({ data, update }) => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <section>
        <h2 className="text-lg font-bold text-slate-900 mb-4">三、提升你的动力</h2>
        <p className="text-slate-600 text-sm mb-6">
          请用自己的语言来描述你进行改变的动力。思考以下问题将帮你更坚定决心。
        </p>

        <div className="space-y-6">
          <TextArea
            label="1. 认识问题"
            subLabel="想一想：你有哪些问题和用药有关？(如：影响心情、增加焦虑、干扰注意力...)"
            value={data.problemRecognition}
            onChange={(e) => update('problemRecognition', e.target.value)}
            placeholder="我的回答..."
          />

          <TextArea
            label="2. 表达顾虑"
            subLabel="想一想：你对用药的担忧有哪些？如果你不做任何改变，会发生什么不好的事？"
            value={data.concerns}
            onChange={(e) => update('concerns', e.target.value)}
            placeholder="我担心..."
          />

          <TextArea
            label="3. 展望未来"
            subLabel="想一想：如果你成功地改变了药物的使用状况，你的生活会有什么不同？(如：更快乐、升职、重拾自我...)"
            value={data.vision}
            onChange={(e) => update('vision', e.target.value)}
            placeholder="如果成功，我会..."
          />

          <TextArea
            label="4. 相信自己"
            subLabel="想一想：让你相信自己能做出改变的原因是什么？(如：我性格坚强、有朋友支持、之前成功戒过烟...)"
            value={data.selfEfficacy}
            onChange={(e) => update('selfEfficacy', e.target.value)}
            placeholder="我相信自己，因为..."
          />
        </div>
      </section>
    </div>
  );
};