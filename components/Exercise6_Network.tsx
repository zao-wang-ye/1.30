import React from 'react';
import { Exercise6Data } from '../types';
import { TextArea } from './InputGroup';

interface Props {
  data: Exercise6Data;
  update: (field: keyof Exercise6Data, value: any) => void;
}

export const Exercise6_Network: React.FC<Props> = ({ data, update }) => {
  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-5">一、审视你的社交网络</h2>
        <p className="text-slate-700 leading-relaxed mb-6 text-lg">
          首先审视你目前的社交网络，在你身边的人中找出能够给你提供社会支持的人，同时也要筛出那些可能触发你负面情绪或渴求的人。通常， 触发你的人要么会当着你的面用药， 要么会带来冲突或消极情绪，他们最终会导致你产生用药的冲动。
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-100">
             <h3 className="font-bold text-emerald-900 text-xl mb-3">安全防护网</h3>
             <p className="text-emerald-800 text-base leading-relaxed mb-4">
               指那些支持你康复的人，他们不会做任何阻碍你康复的事。例如，给你提供药物，做一些可能触发你负面情绪或渴求的事。
             </p>
             <TextArea
               label="我的安全防护网成员:"
               value={data.safetyNet}
               onChange={(e) => update('safetyNet', e.target.value)}
               className="bg-white border-emerald-200 focus:ring-emerald-300 h-48"
               placeholder="列出名字..."
             />
          </div>

          <div className="bg-rose-50 p-6 rounded-xl border border-rose-100">
             <h3 className="font-bold text-rose-900 text-xl mb-3">危险关系</h3>
             <p className="text-rose-800 text-base leading-relaxed mb-4">
               危险关系刚好相反，这些人通过自己用药或其他一些行为，引诱你使用药物。
             </p>
             <TextArea
               label="我的危险关系:"
               value={data.dangerousRelations}
               onChange={(e) => update('dangerousRelations', e.target.value)}
               className="bg-white border-rose-200 focus:ring-rose-300 h-48"
               placeholder="列出名字..."
             />
          </div>
        </div>

        <div className="text-lg text-slate-700 bg-slate-50 p-6 rounded-xl italic border-l-4 border-slate-400">
          <p>
            现在，看看这个清单，问问自己，你的坚固安全防护网成员有几个。当你经历了糟糕的一天，需要找人聊天时，他们在那里等你。如果没有，也不要绝望，第三节将介绍给你几个建立安全防护网的方法。
          </p>
        </div>
      </section>
    </div>
  );
};