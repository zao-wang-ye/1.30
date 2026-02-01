import React from 'react';
import { FormData } from '../types';
import { TextArea } from './InputGroup';

interface Props {
  data: FormData;
  update: (field: keyof FormData, value: string) => void;
}

export const Step3_DeepDive: React.FC<Props> = ({ data, update }) => {
  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-5">三、提升你的动力</h2>
        <p className="text-slate-700 mb-8 leading-relaxed text-lg">
          前面的练习，你评估了自己减少或戒掉用药的动机水平。你还思考了如何才能强化自己的动机，让评分至少提高一分。你还需要思考一些问题，这些问题会帮你更深入地理解你对用药的顾虑，对你现在及未来生活的影响，以及你对戒掉药物的信心。
        </p>

        <div className="space-y-12">
          {/* Question 1 */}
          <div className="space-y-6">
             <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 text-base text-slate-700">
                <h3 className="font-bold text-slate-900 mb-3 text-lg">1、认识到吸食毒品是一个问题</h3>
                <p className="mb-2 leading-relaxed">吸食毒品到底是不是一个问题?这个问题可能听起来很容易回答，但当你想做出改变却又存在矛盾心理时，你就会产生怀疑。下面是可能带来的问题：</p>
                <ul className="list-disc list-inside space-y-2 pl-2">
                  <li>它影响了我的心情</li>
                  <li>它增加了我的焦虑感</li>
                  <li>它干扰了我的注意力，影响了我的工作效率</li>
                  <li>它让我丧失了做平时喜欢的事情的动力，比如和朋友、家人共度时光</li>
                  <li>我怀疑它可能阻碍了我在职业上的进一步发展，如果我有更多的精力和动力，也许我在工作中会更积极主动</li>
                </ul>
             </div>
             <TextArea
                label="想一想:你有哪些问题和用药有关?"
                value={data.problemRecognition}
                onChange={(e) => update('problemRecognition', e.target.value)}
                placeholder="我的回答..."
              />
          </div>

          {/* Question 2 */}
          <div className="space-y-6">
             <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 text-base text-slate-700">
                <h3 className="font-bold text-slate-900 mb-3 text-lg">2、有关使用毒品的顾虑</h3>
                <p className="mb-2 leading-relaxed">你担心你的行为会对你的生活产生影响，这种促使你做出改变的力量比任何东西都要强大。现在体会你对吸食毒品的担忧，如果你在明年甚至在以后更长的一段时间内继续吸食毒品，会发生什么你不想看到的情境。换句话说，如果你不做任何改变， 会发生什么。以下是一些常见担忧:</p>
                <ul className="list-disc list-inside space-y-2 pl-2">
                  <li>我可能会更加抑郁和焦虑</li>
                  <li>我可能会变得非常孤僻</li>
                  <li>如果我继续像这样吸食了大量大麻去上班，我可能会在工作中出错，甚至遇到麻烦</li>
                  <li>我的体重会增加</li>
                </ul>
             </div>
             <TextArea
                label="想一想:你对用药的担忧有哪些? 你担心有什么不好的事会发生?请在此写下你的顾虑。"
                value={data.concerns}
                onChange={(e) => update('concerns', e.target.value)}
                placeholder="我的顾虑..."
              />
          </div>

          {/* Question 3 */}
          <div className="space-y-6">
             <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 text-base text-slate-700">
                <h3 className="font-bold text-slate-900 mb-3 text-lg">3、改变的意愿</h3>
                <p className="mb-2 leading-relaxed">意识到你有药物使用问题是一回事，但将这种认识转化为行动则是另外一回事。从意识到有了麻烦到下决心做出改变，要迈很大的一步，也是非常重要的一步。这个过程中，你下定决心要改变，并认清做出改变可以让你比现在过得更好。</p>
                <p className="mb-2 leading-relaxed">思考一下为什么有必要改变，如果成功改变，你的生活将有什么不同？</p>
                <ul className="list-disc list-inside space-y-2 pl-2">
                  <li>我要停止吸食大麻，才能看清是不是大麻阻碍了我的职业发展</li>
                  <li>我要停止吸食大麻，才能重拾自我。现在这个抑郁的、焦虑的人不是我认识的自己</li>
                  <li>如果能够戒掉大麻，我会更快乐、更有活力</li>
                  <li>如果能够戒掉大麻，我会升职</li>
                </ul>
             </div>
             <TextArea
                label="想一想:如果你成功地改变了药物的使用状况，而且事情按照你希望的方向发展，你的生活会有什么不同?"
                value={data.vision}
                onChange={(e) => update('vision', e.target.value)}
                placeholder="我的回答..."
              />
          </div>

          {/* Question 4 */}
          <div className="space-y-6">
             <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 text-base text-slate-700">
                <h3 className="font-bold text-slate-900 mb-3 text-lg">4、乐观心态，相信自己</h3>
                <p className="mb-2 leading-relaxed">你相信自己能改变药物的使用状况吗?这可能是最具挑战性的改变之一。不过，研究表明，如果你有充足的理由相信自己，相信自己具备赢得这场战争的能力，你成功的概率就会大大提高。这种自信就是自我效能感。</p>
                <p className="mb-2 leading-relaxed">请思考为什么相信自己有能力成功康复。以下是一些可能的理由:</p>
                <ul className="list-disc list-inside space-y-2 pl-2">
                  <li>我非常坚强。每当我决定做一件事时，我一定会坚持到底。</li>
                  <li>我会得到强有力的支持。我的朋友们会支持我，而且不吸食大麻的朋友看到我终于戒掉了大麻会非常开心。</li>
                  <li>我之前也做过其他看似难以完成的改变，比如戒烟，并且成功了。</li>
                </ul>
             </div>
             <TextArea
                label="想一想:让你相信自己能做出改变的原因是什么? 是什么激励你让你坚信改变对你来说是完全有可能的?"
                value={data.selfEfficacy}
                onChange={(e) => update('selfEfficacy', e.target.value)}
                placeholder="我的回答..."
              />
          </div>
        </div>
      </section>
    </div>
  );
};