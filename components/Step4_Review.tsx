import React, { useState } from 'react';
import { FormData } from '../types';
import { MotivationSlider } from './InputGroup';
import { Button } from './Button';

interface Props {
  data: FormData;
  update: (field: keyof FormData, value: any) => void;
}

export const Step4_Review: React.FC<Props> = ({ data, update }) => {
  const [submitted, setSubmitted] = useState(false);
  const diff = data.motivationScore2 - data.motivationScore1;

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 animate-in zoom-in duration-300">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4 12 14.01l-3-3"/></svg>
        </div>
        <h2 className="text-2xl font-bold text-slate-900 mb-2">练习已完成</h2>
        <p className="text-slate-600 text-center max-w-sm mb-8">
          感谢您完成本次练习。您的回答已记录。请保持这份动力，继续前行。
        </p>
        <div className="bg-slate-50 p-6 rounded-lg w-full max-w-sm border border-slate-200">
          <div className="flex justify-between mb-2">
            <span className="text-slate-500">姓名</span>
            <span className="font-medium">{data.userName}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">编号</span>
            <span className="font-medium">{data.userNumber}</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <section>
        <h2 className="text-lg font-bold text-slate-900 mb-4">回顾你的动力</h2>
        <p className="text-slate-600 text-sm mb-6">
          现在你更深入地探讨了自己改变的动机。接下来让我们来回顾你之前的动机评分。
          你有多大动力去采取必要的步骤来改变你的用药状况?
        </p>

        <MotivationSlider
          value={data.motivationScore2}
          onChange={(val) => update('motivationScore2', val)}
          label="重新评估后的动机水平"
        />

        <div className="bg-indigo-50 border border-indigo-100 p-5 rounded-xl text-indigo-900 text-sm">
          <h4 className="font-bold mb-2">反馈</h4>
          {diff > 0 ? (
            <p>和开始相比，你的评分提高了 <strong>{diff}</strong> 分。这真是个好消息！哪怕只提高一分，也是增强了一分动力。</p>
          ) : diff < 0 ? (
            <p>你的评分有所下降。这没关系，改变是一个波动的过程。回顾刚才填写的“改变的代价”，思考是什么阻碍了你。</p>
          ) : (
            <p>你的评分没有变化。无论评分是否上升，你都应该毫不犹豫地鼓励自己。坚持思考改变的意义本身就是一种进步。</p>
          )}
        </div>
      </section>

      <section className="bg-white border-t border-slate-100 pt-8">
        <h3 className="font-bold text-slate-900 mb-4">最终确认</h3>
        <p className="text-slate-600 text-sm mb-4">请再次确认您的身份信息以完成本次问卷。</p>
        
        <div className="grid grid-cols-2 gap-4 mb-8">
           <div>
            <label className="block text-xs font-semibold text-slate-500 mb-1">姓名</label>
            <div className="p-3 bg-slate-50 border border-slate-200 rounded text-slate-700">{data.userName}</div>
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-500 mb-1">编号</label>
            <div className="p-3 bg-slate-50 border border-slate-200 rounded text-slate-700">{data.userNumber}</div>
          </div>
        </div>

        <Button fullWidth onClick={() => setSubmitted(true)}>
          提交练习
        </Button>
      </section>
    </div>
  );
};