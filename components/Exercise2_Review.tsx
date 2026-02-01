import React, { useState } from 'react';
import { Exercise2Data } from '../types';
import { Button } from './Button';

interface Props {
  data: Exercise2Data;
  update: (field: keyof Exercise2Data, value: any) => void;
  onHome: () => void;
}

export const Exercise2_Review: React.FC<Props> = ({ data, update, onHome }) => {
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
      <section className="bg-white pt-10 text-center">
        <h3 className="font-bold text-slate-900 mb-5 text-2xl">准备提交</h3>
        <p className="text-slate-600 text-lg mb-10 leading-relaxed max-w-lg mx-auto">
          恭喜你完成了第二次练习！点击下方按钮提交您的练习记录。
        </p>
        
        <Button fullWidth onClick={() => setSubmitted(true)} className="text-lg py-4 max-w-md mx-auto">
          提交练习
        </Button>
      </section>
    </div>
  );
};