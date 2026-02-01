import React from 'react';
import { Exercise4Data } from '../types';
import { Button } from './Button';

interface Props {
  data: Exercise4Data;
  update: (field: keyof Exercise4Data, value: any) => void;
  onNext: () => void;
}

export const Exercise4_Welcome: React.FC<Props> = ({ data, update, onNext }) => {
  const isValid = data.userName.trim().length > 0 && data.userNumber.trim().length > 0;

  return (
    <div className="flex flex-col h-full py-8">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-slate-900 mb-8">练习四</h1>
        
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
             在“智取”成瘾大脑的过程中，你将掌握的最强大的一项技能就是思维挑战，它可以将非理性思维转变为平衡的、现实的思维。你将学会用一种科学的方法纠正那些引诱你去用药的想法。
           </p>
           <p>
             这些技能不仅可以用于戒瘾，也可以用于解决其他由非理性思维导致的问题，如抑郁情绪、焦虑情绪及其他情绪问题。你将学习用科学且现实的态度来理解和改变你的行为。
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