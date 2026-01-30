import React from 'react';
import { FormData } from '../types';
import { Button } from './Button';

interface Props {
  data: FormData;
  update: (field: keyof FormData, value: string) => void;
  onNext: () => void;
}

export const Step0_Welcome: React.FC<Props> = ({ data, update, onNext }) => {
  const isValid = data.userName.trim().length > 0 && data.userNumber.trim().length > 0;

  return (
    <div className="flex flex-col h-full justify-center py-8">
      <div className="text-center mb-10">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>
        </div>
        <h2 className="text-3xl font-bold text-slate-900 mb-4">增强动机，投身改变</h2>
        <p className="text-slate-600 max-w-md mx-auto">
          欢迎开始本次干预练习。在开始之前，请先填写您的基本信息以便记录。
        </p>
      </div>

      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-4 max-w-sm mx-auto w-full">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">你的姓名</label>
          <input
            type="text"
            value={data.userName}
            onChange={(e) => update('userName', e.target.value)}
            className="w-full p-3 border border-slate-200 bg-white rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none shadow-sm placeholder:text-slate-400"
            placeholder="请输入姓名"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">你的编号</label>
          <input
            type="text"
            value={data.userNumber}
            onChange={(e) => update('userNumber', e.target.value)}
            className="w-full p-3 border border-slate-200 bg-white rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none shadow-sm placeholder:text-slate-400"
            placeholder="请输入编号"
          />
        </div>
      </div>

      <div className="mt-10 text-center">
        <Button onClick={onNext} disabled={!isValid} className="w-full max-w-xs">
          开始练习
        </Button>
      </div>
    </div>
  );
};