import React from 'react';
import { Exercise5Data } from '../types';
import { Button } from './Button';

interface Props {
  data: Exercise5Data;
  update: (field: keyof Exercise5Data, value: any) => void;
  onNext: () => void;
}

export const Exercise5_Welcome: React.FC<Props> = ({ data, update, onNext }) => {
  const isValid = data.userName.trim().length > 0 && data.userNumber.trim().length > 0;

  return (
    <div className="flex flex-col h-full py-8">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-slate-900 mb-8">练习五</h1>
        
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
           <h2 className="text-xl font-bold text-slate-900 mb-2">管理愤怒情绪</h2>
           <p>
             你在怒气冲冲时是否无法保持冷静?大多数人都是这样。如果这种情况经常发生，而愤怒情绪又恰好是一个可能的复发触发点，那么在康复中你就需要掌握一些健康的应对工具和发泄渠道。
           </p>
           <p className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500 text-orange-900 font-medium my-4">
             一定要记住:发火除了让你感到糟糕、带来复发风险，还有诸多坏处。
           </p>
           <p>如果你因愤怒提高音量或用其他有攻击性的方式发脾气时:</p>
           <ul className="list-disc list-inside space-y-1 pl-2">
             <li>你看起来就像是失去控制了</li>
             <li>人们不会尊重或认真对待你要表达的内容</li>
             <li>你得不到自己需要的东西</li>
             <li>你还会失去自尊</li>
           </ul>
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