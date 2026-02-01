import React, { useState } from 'react';
import { Exercise6Data } from '../types';
import { Button } from './Button';

interface Props {
  data: Exercise6Data;
  update: (field: keyof Exercise6Data, value: any) => void;
  onHome: () => void;
}

export const Exercise6_Review: React.FC<Props> = ({ data, update, onHome }) => {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-20 animate-in zoom-in duration-300 text-center">
        <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-8">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4 12 14.01l-3-3"/></svg>
        </div>
        <h2 className="text-3xl font-bold text-slate-900 mb-8">练习已完成</h2>
        <div className="bg-slate-50 p-8 rounded-xl w-full max-w-md border border-slate-200 text-left mb-8">
           <p className="text-slate-700 mb-4 text-lg"><strong>姓名：</strong> {data.userName}</p>
           <p className="text-slate-700 mb-8 text-lg"><strong>编号：</strong> {data.userNumber}</p>
           <p className="text-slate-500 text-base italic">您的记录已保存。</p>
        </div>
        <Button onClick={onHome} variant="outline" className="w-full max-w-xs">
          返回主页
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      <section className="bg-white pt-10">
        
        <div className="bg-teal-50 border border-teal-100 p-8 rounded-2xl mb-12 text-center shadow-sm">
           <div className="inline-block p-3 rounded-full bg-teal-100 text-teal-600 mb-4">
             <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2h-4a4 4 0 0 0-8 0H2"/><path d="M10 2c0 .55.45 1 1 1h2a1 1 0 0 0 1-1"/></svg>
           </div>
           <h3 className="font-bold text-teal-900 mb-4 text-2xl">祝贺你！</h3>
           <p className="text-teal-800 text-lg leading-relaxed mb-4">
             你凭借自己的努力和坚持完成了本次干预。你掌握了很多关于成瘾科学的新信息，也尝试了多种不同类型的应对技巧。在这个过程中，你为自己稳定的康复进程打好了重要的基础。
           </p>
           <p className="text-teal-800 text-lg leading-relaxed">
             现在，你可以运用一系列用于成瘾治疗的循证治疗技术，根据自己总结的复发预防计划灵活使用。你为过上平衡有序的幸福生活迈出了一大步。继续努力!你正在重新建立没有药物的快乐人生，所有的努力都是值得的。
           </p>
        </div>

        <h3 className="font-bold text-slate-900 mb-5 text-xl">最终确认</h3>
        <p className="text-slate-600 text-base mb-8 leading-relaxed">
          恭喜你完成了第六次练习，现在请您再次填写自己的姓名及编号，并完成以下问卷。在作答时尽量放松，根据您真实的感受和实际情况作答。
        </p>
        
        <div className="space-y-6 mb-10 bg-slate-50 p-8 rounded-xl border border-slate-100">
           <div>
            <label className="block text-base font-bold text-slate-700 mb-2">你的姓名：</label>
            <input 
              type="text" 
              value={data.userName} 
              readOnly
              className="w-full p-4 text-lg border border-slate-200 bg-slate-100 rounded text-slate-500"
            />
          </div>
          <div>
            <label className="block text-base font-bold text-slate-700 mb-2">你的编号：</label>
            <input 
              type="text" 
              value={data.userNumber} 
              readOnly
              className="w-full p-4 text-lg border border-slate-200 bg-slate-100 rounded text-slate-500"
            />
          </div>
        </div>

        <Button fullWidth onClick={() => setSubmitted(true)} className="text-lg py-4">
          提交练习
        </Button>
      </section>
    </div>
  );
};