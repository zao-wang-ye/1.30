import React from 'react';
import { Exercise2Data, WARNING_THOUGHTS } from '../types';
import { Checkbox, TextArea } from './InputGroup';

interface Props {
  data: Exercise2Data;
  update: (field: keyof Exercise2Data, value: any) => void;
}

export const Exercise2_WarningThoughts: React.FC<Props> = ({ data, update }) => {
  const toggleThought = (thought: string) => {
    const list = data.warningThoughts;
    if (list.includes(thought)) {
      update('warningThoughts', list.filter(t => t !== thought));
    } else {
      update('warningThoughts', [...list, thought]);
    }
  };

  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-5">二、识别预警想法</h2>
        <p className="text-slate-700 leading-relaxed mb-8 text-lg">
          预警想法与用药直接相关，那些你告诉自己的增加复发可能性的想法， 就是预警想法。这些为你在康复期间用药辩解的想法源自你的成瘾大脑。现在，你的任务是在这些想法出现的时候注意到它们并且理解它们，因为当我们遇到一个触发点或一个突发情况时，我们当时的想法决定了我们会采取什么应对策略。
        </p>

        <div className="bg-white p-6 rounded-xl border border-slate-200 mb-8">
           <p className="font-bold text-slate-800 text-lg mb-6">以下是一些常见的预警想法，在所有你曾经有过的想法前打钩，并写出你经历过还没有列出的想法。</p>
           
           <div className="space-y-4 mb-8">
             {WARNING_THOUGHTS.map(thought => (
               <Checkbox
                 key={thought}
                 label={thought}
                 checked={data.warningThoughts.includes(thought)}
                 onChange={() => toggleThought(thought)}
                 className="py-4"
               />
             ))}
           </div>

           <TextArea
              label="其他的预警想法:"
              value={data.otherWarningThoughts}
              onChange={(e) => update('otherWarningThoughts', e.target.value)}
              placeholder="在此写下其他想法..."
            />
        </div>

        <div className="text-lg text-slate-700 bg-slate-50 p-6 rounded-xl border border-slate-200 leading-relaxed">
          <p className="mb-4">在本次练习中你知道了自己的触发点，以及那些导致你用药的想法。练习后，你要尝试再次在触发点和具体的想法之间建立联系。我们将在下一次的练习中带你认识一些容易导致复发的非理性思维。</p>
        </div>
      </section>
    </div>
  );
};