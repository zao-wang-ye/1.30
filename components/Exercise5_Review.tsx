import React, { useState } from 'react';
import { Exercise5Data } from '../types';
import { Button } from './Button';

interface Props {
  data: Exercise5Data;
  update: (field: keyof Exercise5Data, value: any) => void;
  onHome: () => void;
}

export const Exercise5_Review: React.FC<Props> = ({ data, update, onHome }) => {
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
        <h3 className="font-bold text-slate-900 mb-5 text-xl">最终确认</h3>
        <p className="text-slate-600 text-base mb-8 leading-relaxed">
          恭喜你完成了第五次练习，现在请您再次填写自己的姓名及编号，并完成以下问卷。在作答时尽量放松，根据您真实的感受和实际情况作答。
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