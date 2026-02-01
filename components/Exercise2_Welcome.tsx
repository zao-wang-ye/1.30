import React from 'react';
import { Exercise2Data } from '../types';
import { Button } from './Button';

interface Props {
  data: Exercise2Data;
  update: (field: keyof Exercise2Data, value: any) => void;
  onNext: () => void;
}

export const Exercise2_Welcome: React.FC<Props> = ({ data, update, onNext }) => {
  const isValid = data.userName.trim().length > 0 && data.userNumber.trim().length > 0;

  return (
    <div className="flex flex-col h-full py-8">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-slate-900 mb-8">练习二</h1>
        
        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 space-y-6 max-w-md mx-auto w-full mb-10 text-left">
          <div>
            <label className="block text-base font-bold text-slate-700 mb-2">你的姓名：</label>
            <input
              type="text"
              value={data.userName}
              onChange={(e) => update('userName', e.target.value)}
              className="w-full p-4 text-lg border border-slate-200 bg-white rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none shadow-sm placeholder:text-slate-400"
              placeholder=""
            />
          </div>
          <div>
            <label className="block text-base font-bold text-slate-700 mb-2">你的编号：</label>
            <input
              type="text"
              value={data.userNumber}
              onChange={(e) => update('userNumber', e.target.value)}
              className="w-full p-4 text-lg border border-slate-200 bg-white rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none shadow-sm placeholder:text-slate-400"
              placeholder=""
            />
          </div>
        </div>

        <div className="text-left text-slate-700 space-y-4 leading-relaxed bg-white p-2 text-lg">
           <p>
             本练习将帮助你识别康复过程中的触发点和预警想法，增强自我意识，从而更好地应对渴求。
           </p>
        </div>
      </div>

      <div className="mt-auto text-center">
        <Button onClick={onNext} disabled={!isValid} className="w-full max-w-sm text-lg py-4">
          开始练习
        </Button>
      </div>
    </div>
  );
};