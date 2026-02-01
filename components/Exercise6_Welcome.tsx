import React from 'react';
import { Exercise6Data } from '../types';
import { Button } from './Button';

interface Props {
  data: Exercise6Data;
  update: (field: keyof Exercise6Data, value: any) => void;
  onNext: () => void;
}

export const Exercise6_Welcome: React.FC<Props> = ({ data, update, onNext }) => {
  const isValid = data.userName.trim().length > 0 && data.userNumber.trim().length > 0;

  return (
    <div className="flex flex-col h-full py-8">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-slate-900 mb-8">练习六</h1>
        
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
           <h2 className="text-xl font-bold text-slate-900 mb-2">构建你的社会支持网络</h2>
           <p>
             研究表明，社会支持对你在康复中保持清醒、坚持不用药有很大的作用。这意味着，如果与支持你戒药的人建立高质量的人际关系，你就有可能长期保持清醒状态。
           </p>
           <p>
             你生活中可能这几种人都有，但无论你的支持系统目前怎么样，我们都可用以下方法对它做进一步的构建和调整。
           </p>
           <ul className="list-disc list-inside pl-4 space-y-1 bg-sky-50 p-4 rounded-xl border border-sky-100 mt-4 text-sky-900">
             <li>结交正在康复中的新朋友。</li>
             <li>减少或切断联络触发你负面情绪或渴求的朋友。</li>
             <li>多接触那些能帮助你、懂你的朋友和家人。</li>
             <li>用坚定自信的沟通方式与想要帮助你但不知道如何帮助的人交流。</li>
             <li>接受婚姻或家庭咨询治疗。</li>
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