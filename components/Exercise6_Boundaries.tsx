import React from 'react';
import { Exercise6Data } from '../types';
import { TextArea } from './InputGroup';

interface Props {
  data: Exercise6Data;
  update: (field: keyof Exercise6Data, value: any) => void;
}

export const Exercise6_Boundaries: React.FC<Props> = ({ data, update }) => {
  return (
    <div className="space-y-12 animate-in fade-in duration-500">
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-5">二、处理你的危险关系</h2>
        <p className="text-slate-700 leading-relaxed mb-6 text-lg">
          你也可以花点时间来思考如何处理你的危险关系。根据他们的身份以及你与他们关系的远近，可采取以下几种处理方法。
        </p>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
            <h3 className="font-bold text-slate-900 mb-2">（一）回避</h3>
            <p className="text-sm text-slate-600">有些危险的关系你需要彻底回避。那些和你的友情主要建立在一起用药上的朋友，那些曾经力你提供药物的人。你和他们在一起的风险过大，你应该回避。</p>
          </div>
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
            <h3 className="font-bold text-slate-900 mb-2">（二）减少接触</h3>
            <p className="text-sm text-slate-600">你可能没办法完全回避一些危险的关系，比如曾经下班后和你一起用药的同事，但你可以少和他们接触。</p>
          </div>
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
            <h3 className="font-bold text-slate-900 mb-2">（三）设定界限</h3>
            <p className="text-sm text-slate-600">有些人会经常触发你的负面情绪或渴求，但是你不能或者不想和他们彻底断联。处理这种关系的关键就是要设定界限。</p>
          </div>
        </div>

        <h3 className="font-bold text-xl text-slate-900 mb-4">设定界限的方式：</h3>
        
        <div className="mb-8">
          <h4 className="font-bold text-lg text-slate-800 mb-3">1、坚定自信的沟通方式</h4>
          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-left text-sm text-slate-700">
              <thead className="bg-slate-100 text-slate-900 font-bold">
                <tr>
                  <th className="p-4 w-1/3">被动沟通</th>
                  <th className="p-4 w-1/3 border-l border-slate-200">侵略型的沟通</th>
                  <th className="p-4 w-1/3 border-l border-slate-200 bg-sky-50 text-sky-900">坚定自信的沟通</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                <tr>
                  <td className="p-4 align-top">把感受放在心里，不表露出来</td>
                  <td className="p-4 align-top border-l border-slate-100">提出要求</td>
                  <td className="p-4 align-top border-l border-slate-100 bg-sky-50/30">以恰当的方式表达自己，而不是把情绪和感受憋在心里</td>
                </tr>
                <tr>
                  <td className="p-4 align-top">避免向他人提出请求</td>
                  <td className="p-4 align-top border-l border-slate-100">利用他人</td>
                  <td className="p-4 align-top border-l border-slate-100 bg-sky-50/30">向他人提出请求，但不会过分苛求</td>
                </tr>
                <tr>
                  <td className="p-4 align-top">不表达自己的愿望和需要</td>
                  <td className="p-4 align-top border-l border-slate-100">用具有敌意、粗鲁或愤怒的语气进行沟通</td>
                  <td className="p-4 align-top border-l border-slate-100 bg-sky-50/30">以一种让人愉悦的方式说出你的想法</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-600 text-sm mt-3 italic">
            坚定自信的沟通介于两者之间，这种沟通方式可帮助你在康复过程中有效地表达你的需求。
          </p>
        </div>

        <div className="mb-8 bg-slate-50 p-6 rounded-xl border border-slate-100">
           <h4 className="font-bold text-lg text-slate-800 mb-3">2、认真聆听</h4>
           <p className="mb-2 text-slate-700">认真聆听有助于加强你和交流对象之间的联系。</p>
           <div className="grid md:grid-cols-2 gap-6 mt-4">
             <div>
               <strong className="block text-slate-900 mb-2">语言表达技巧：</strong>
               <ul className="list-disc list-inside text-slate-700 space-y-1 text-sm">
                 <li>提出问题以透彻理解对方的话 ("为什么?")</li>
                 <li>总结/重述你所理解的内容 ("如果我没听错的话...")</li>
                 <li>做出最终回应时，使用“我”句式。</li>
               </ul>
             </div>
             <div>
               <strong className="block text-slate-900 mb-2">非语言技巧：</strong>
               <ul className="list-disc list-inside text-slate-700 space-y-1 text-sm">
                 <li>眼神交流</li>
                 <li>用面部动作和表情来表达兴趣（点头、微笑）</li>
                 <li>上身前倾，表示关注</li>
                 <li>谈话时远离让你分心的东西（如手机）</li>
               </ul>
             </div>
           </div>
        </div>

        <div className="mb-10">
           <h4 className="font-bold text-lg text-slate-800 mb-3">3、提出你的需求</h4>
           <p className="mb-4 text-slate-700">你正在全神贯注地倾听对方说话，此时如果有什么需求，可以用尊重对方的方式提出来。其中一种方法是表达感受，因为感受与你的要求是相关的。</p>
           <div className="bg-sky-100 p-6 rounded-xl border-l-4 border-sky-500 text-sky-900 font-medium text-lg text-center">
             一个万能的句式:<br/>
             “当 <span className="underline decoration-dotted"> (情境) </span> 时，我感到 <span className="underline decoration-dotted"> (感受) </span>，我需要 <span className="underline decoration-dotted"> (需求) </span>。”
           </div>
        </div>

        <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm">
          <p className="font-bold text-slate-900 mb-6 text-lg">
            接下来请你根据今天学到的进行练习，请列出在你的康复生活中你需要和哪些人设置界限，需要提出哪些要求。你不妨用坚定自信的沟通方式来表达你的需求，最好先写下来。
          </p>
          <div className="space-y-6">
            <TextArea
              label="人物:"
              value={data.boundaryPerson}
              onChange={(e) => update('boundaryPerson', e.target.value)}
            />
            <TextArea
              label="我需要这个人做什么:"
              value={data.boundaryNeed}
              onChange={(e) => update('boundaryNeed', e.target.value)}
            />
            <TextArea
              label="我会坚定自信地说:"
              subLabel="参考句式：当...时，我感到...，我需要..."
              value={data.boundaryStatement}
              onChange={(e) => update('boundaryStatement', e.target.value)}
              className="bg-sky-50 border-sky-200 focus:ring-sky-300 min-h-[100px]"
            />
          </div>
        </div>

      </section>
    </div>
  );
};