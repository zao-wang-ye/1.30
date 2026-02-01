import React, { useState } from 'react';
import { FormData } from '../types';
import { MotivationSlider } from './InputGroup';
import { Button } from './Button';

interface Props {
  data: FormData;
  update: (field: keyof FormData, value: any) => void;
  onHome: () => void;
}

export const Step4_Review: React.FC<Props> = ({ data, update, onHome }) => {
  const [submitted, setSubmitted] = useState(false);
  const diff = data.motivationScore2 - data.motivationScore1;

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-20 animate-in zoom-in duration-300 text-center">
        <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-8">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4 12 14.01l-3-3"/></svg>
        </div>
        <h2 className="text-3xl font-bold text-slate-900 mb-8">感谢您的参与</h2>
        <div className="bg-slate-50 p-8 rounded-xl w-full max-w-md border border-slate-200 text-left mb-8">
           <p className="text-slate-700 mb-4 text-lg"><strong>姓名：</strong> {data.userName}</p>
           <p className="text-slate-700 mb-8 text-lg"><strong>编号：</strong> {data.userNumber}</p>
           <p className="text-slate-500 text-base italic">您的练习记录已提交。</p>
        </div>
        <Button onClick={onHome} variant="outline" className="w-full max-w-xs">
          返回主页
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      <section>
        <p className="text-slate-700 leading-relaxed mb-8 text-lg">
          现在你更深入地探讨了自己改变的动机，接下来让我们来回顾你之前的动机评分。你有多大动机去去采取必要的步骤来改变你的用药状况?<br/>
          0 代表完全没动力，10代表有最强的动力，请根据你的情况，从0到10，圈出你的动机水平等级:
        </p>

        <MotivationSlider
          value={data.motivationScore2}
          onChange={(val) => update('motivationScore2', val)}
          label=""
        />

        <div className="bg-indigo-50 border border-indigo-100 p-6 rounded-xl text-indigo-900 text-base mb-10">
          <h4 className="font-bold mb-3 text-lg">反馈</h4>
          {diff > 0 ? (
            <p className="mb-3">和以前相比，你的评分提高了 <strong>{diff}</strong> 分。那真是个好消息!</p>
          ) : (
            <p className="mb-3">和以前相比，你的评分没有变化也没有关系。</p>
          )}
          <p className="mt-2 font-medium">无论评分是否上升，你都应该毫不犹豫地鼓励自己更进一步。提高一分，就增强一分动力。</p>
        </div>
        
        <div className="pt-6 border-t border-slate-100">
          <Button fullWidth onClick={() => setSubmitted(true)} className="text-lg py-4">
            提交练习
          </Button>
        </div>
      </section>
    </div>
  );
};