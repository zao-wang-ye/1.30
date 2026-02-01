import React from 'react';
import { FormData } from '../types';
import { TextArea } from './InputGroup';

interface Props {
  data: FormData;
  update: (field: keyof FormData, value: string) => void;
}

export const Step2_DecisionalBalance: React.FC<Props> = ({ data, update }) => {
  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-5">二、矛盾心理:康复中的正常现象</h2>
        <p className="text-slate-700 leading-relaxed mb-8 text-lg">
          对于改变药物使用行为，你的心情复杂矛盾。请认真想一想，如果停止用药，你会得到什么好处，你会怀念什么。在本练习中，你将用四种不同的方式来思考这些问题。
        </p>

        <div className="space-y-8 mb-10 text-base text-slate-700">
          <div className="bg-amber-50 p-6 rounded-xl border border-amber-100">
            <h3 className="font-bold text-amber-800 mb-3 text-lg">第一步，想一想自己为什么用药——它的积极影响。</h3>
            <p className="mb-2">以下是人们用药的一些起因：</p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>它帮我缓解焦虑</li>
              <li>它帮我放松</li>
              <li>它让我逃避困难</li>
              <li>它带给我乐趣</li>
              <li>它帮我缓解社交中的尴尬</li>
            </ul>
          </div>

          <div className="bg-slate-100 p-6 rounded-xl border border-slate-200">
            <h3 className="font-bold text-slate-800 mb-3 text-lg">第二步，想一想你用药时，特别是在你产生强烈的渴求时发生的一些负面事件。</h3>
            <p className="mb-2">下面是用药带给你的一些负面影响：</p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>健康问题，包括药效消退后的身体不适、生病，某些药物还可能造成长期影响，如肝脏损伤、心脏病、口腔健康问题</li>
              <li>导致或加重心理症状或心理疾病，如焦虑和抑郁症状</li>
              <li>财务问题</li>
              <li>人际关系问题</li>
              <li>在工作、学习或家庭中难以履行应尽的义务</li>
            </ul>
          </div>

          <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-100">
            <h3 className="font-bold text-emerald-800 mb-3 text-lg">第三步，列出减少或戒掉用药的好处。</h3>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>身体更舒服</li>
              <li>情绪更稳定可控</li>
              <li>做事更高效</li>
              <li>人际关系得到改善</li>
              <li>自我感觉更好</li>
              <li>省钱</li>
            </ul>
          </div>

          <div className="bg-rose-50 p-6 rounded-xl border border-rose-100">
            <h3 className="font-bold text-rose-800 mb-3 text-lg">第四步，想一想减少或戒掉用药的一些“坏处”。</h3>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>对情绪或做事效率没有立竿见影的作用</li>
              <li>失去或远离个别朋友，因为他可能会诱使你用药</li>
              <li>减少了社交活动或工作项目</li>
              <li>不能再依靠药物来应对压力或其他问题</li>
            </ul>
          </div>
        </div>

        <div className="bg-white p-1 rounded-xl">
          <p className="font-bold text-slate-900 mb-6 text-lg">
            现在，将你的答案填到下面的表格中，请尽可能开诚布公。因为你对这些复杂感觉产生的来源了解得越透彻，就越有把握说服自己压制对用药的渴求。
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <TextArea
              label="减少或戒掉用药的好处:"
              value={data.benefitsQuitting}
              onChange={(e) => update('benefitsQuitting', e.target.value)}
              className="bg-emerald-50/50 border-emerald-100 focus:ring-emerald-500"
            />

            <TextArea
              label="减少或戒掉用药的坏处:"
              value={data.costsQuitting}
              onChange={(e) => update('costsQuitting', e.target.value)}
              className="bg-rose-50/50 border-rose-100 focus:ring-rose-500"
            />

            <TextArea
              label="继续用药的好处:"
              value={data.benefitsUsing}
              onChange={(e) => update('benefitsUsing', e.target.value)}
              className="bg-amber-50/50 border-amber-100 focus:ring-amber-500"
            />

            <TextArea
              label="继续用药的坏处:"
              value={data.costsUsing}
              onChange={(e) => update('costsUsing', e.target.value)}
              className="bg-slate-50 border-slate-200 focus:ring-slate-500"
            />
          </div>
        </div>

        <div className="text-base text-slate-700 bg-slate-50 p-6 rounded-xl italic border-l-4 border-primary leading-relaxed">
          康复期间这个表格很重要，渴求来临时，可以查看这个清单， 提醒自己能从康复中获得什么，一旦复发你会失去什么。不过，如果你在决定是否用药之前反复提醒自己，大脑就更加理性，助你克服渴求，远离复发。
        </div>
      </section>
    </div>
  );
};