import React from 'react';
import { FormData } from '../types';
import { TextArea } from './InputGroup';

interface Props {
  data: FormData;
  update: (field: keyof FormData, value: string) => void;
}

export const Step2_DecisionalBalance: React.FC<Props> = ({ data, update }) => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <section>
        <h2 className="text-lg font-bold text-slate-900 mb-2">二、矛盾心理：康复中的正常现象</h2>
        <p className="text-slate-600 text-sm leading-relaxed mb-6">
          对于改变药物使用行为，你的心情可能复杂矛盾。请认真想一想，如果停止用药，你会得到什么好处，你会怀念什么。
          通过填写下面的表格，你对这些复杂感觉了解得越透彻，就越有把握说服自己压制对用药的渴求。
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Positive Change */}
          <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-100">
            <div className="flex items-center gap-2 mb-2 text-emerald-800 font-bold">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20v-6M6 20V10M18 20V4"/></svg>
              <h3>改变的益处</h3>
            </div>
            <TextArea
              label="减少或戒掉用药的好处"
              subLabel="例如：身体更舒服、情绪更稳定、省钱、人际关系改善..."
              value={data.benefitsQuitting}
              onChange={(e) => update('benefitsQuitting', e.target.value)}
              className="bg-white"
              placeholder="请在此列出好处..."
            />
          </div>

          {/* Negative Change */}
          <div className="bg-rose-50 p-4 rounded-xl border border-rose-100">
            <div className="flex items-center gap-2 mb-2 text-rose-800 font-bold">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 12-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L12 9"/><path d="M17.64 15 22 10.64"/><path d="m20.91 11.7-1.25-1.25c-.6-.6-.93-1.4-.93-2.25V7.86c0-.55-.45-1-1-1H16.4c-.84 0-1.65-.33-2.25-.93L12.9 4.68"/></svg>
              <h3>改变的代价</h3>
            </div>
            <TextArea
              label="减少或戒掉用药的“坏处”"
              subLabel="例如：没有立竿见影的快乐、失去某些酒肉朋友、应对压力的旧方法没了..."
              value={data.costsQuitting}
              onChange={(e) => update('costsQuitting', e.target.value)}
              className="bg-white"
              placeholder="请在此列出坏处..."
            />
          </div>

          {/* Positive Status Quo */}
          <div className="bg-amber-50 p-4 rounded-xl border border-amber-100">
             <div className="flex items-center gap-2 mb-2 text-amber-800 font-bold">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 10v12"/><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"/></svg>
              <h3>维持现状的好处</h3>
            </div>
            <TextArea
              label="继续用药的好处"
              subLabel="例如：缓解焦虑、帮我放松、带给我乐趣、逃避困难..."
              value={data.benefitsUsing}
              onChange={(e) => update('benefitsUsing', e.target.value)}
              className="bg-white"
              placeholder="为什么想继续..."
            />
          </div>

          {/* Negative Status Quo */}
          <div className="bg-slate-100 p-4 rounded-xl border border-slate-200">
             <div className="flex items-center gap-2 mb-2 text-slate-800 font-bold">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0-4 0"/><path d="M15.54 5.93 18 3.5"/><path d="M12 2v2"/><path d="m5.5 3.5 2.46 2.43"/><path d="M2 12h2"/><path d="m5.5 20.5 2.46-2.43"/><path d="M12 20v2"/><path d="m15.54 18.07 2.46 2.43"/><path d="M20 12h2"/></svg>
              <h3>维持现状的坏处</h3>
            </div>
            <TextArea
              label="继续用药的坏处"
              subLabel="例如：健康问题、财务问题、人际关系破裂、工作受影响..."
              value={data.costsUsing}
              onChange={(e) => update('costsUsing', e.target.value)}
              className="bg-white"
              placeholder="负面影响有哪些..."
            />
          </div>
        </div>

        <div className="text-xs text-slate-500 bg-slate-50 p-4 rounded-lg italic">
          💡 小贴士：康复期间这个表格很重要。渴求来临时，查看这个清单，提醒自己能从康复中获得什么，一旦复发你会失去什么。
        </div>
      </section>
    </div>
  );
};