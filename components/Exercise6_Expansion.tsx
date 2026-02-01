import React from 'react';
import { Exercise6Data, EXERCISE6_QUALITIES } from '../types';
import { Checkbox } from './InputGroup';

interface Props {
  data: Exercise6Data;
  update: (field: keyof Exercise6Data, value: any) => void;
}

export const Exercise6_Expansion: React.FC<Props> = ({ data, update }) => {
  const toggleQuality = (item: string) => {
    const list = data.desiredQualities;
    if (list.includes(item)) {
      update('desiredQualities', list.filter(i => i !== item));
    } else {
      update('desiredQualities', [...list, item]);
    }
  };

  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-5">四、扩展你的社交圈子</h2>
        <p className="text-slate-700 leading-relaxed mb-6 text-lg">
          在最后我们将重点介绍如何建立你的社会支持网络，拥有可以依靠的安全防护网，帮你渡过康复期间痛苦的时刻。
        </p>
        <p className="text-slate-700 leading-relaxed mb-6 text-lg">
          首先，请记住，不同类型的人际关系都可以成为你的安全防护网。你的家人包括孩子、父母和其他亲属，都可以是安全防护网的一部分。自助小组或其他社区组织、专业咨询师、朋友、伴侣也可以成为你的安全防护网人选。在决定你的安全防护网人选时，首先要注意的就是药物在这个人的生活中扮演什么角色。他是否大量用药?是否会在你面前用药? 理想情况下，你的安全防护网人选应该是那些不会或很少用药，或能在你面前不碰药的人。
        </p>
        
        <div className="bg-sky-50 border border-sky-100 rounded-xl p-6 mb-8">
           <h3 className="font-bold text-sky-900 mb-4 text-xl">那么，做你的安全防护网的人需要具备什么品质?</h3>
           <p className="text-sky-800 mb-6">下面的练习可帮你找出这些品质。标出符合你的期望的所有选项:</p>
           
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
             {EXERCISE6_QUALITIES.map(item => (
               <Checkbox
                 key={item}
                 label={item}
                 checked={data.desiredQualities.includes(item)}
                 onChange={() => toggleQuality(item)}
                 className="bg-white border-sky-200"
               />
             ))}
           </div>
        </div>
        
        <div className="text-lg text-slate-700 bg-slate-50 p-6 rounded-xl italic border-l-4 border-slate-400">
          <p>
            如果目前你没有建立安全防护网，那你的首要任务是扩展支持网络。一旦需要，有更多人可伸出援手，这一点在康复的任何阶段都非常重要。
          </p>
        </div>
      </section>
    </div>
  );
};