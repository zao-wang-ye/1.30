import React from 'react';

export const Exercise4_CommonErrors: React.FC = () => {
  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-5">二、应对常见的思维错误</h2>
        <p className="text-slate-700 leading-relaxed mb-6 text-lg">
          我们学习了六种导致预警想法的思维错误，并进行了思维挑战。请阅读下表列出的建议，这些建议可帮你回应最常见的思维错误。一旦发现自己有以下思维错误，你首先要做的便是就这件事和自己对话，让自己意识到它，并用3T法和下表右侧“回应” 栏中的内容来应对。
        </p>

        <div className="border border-slate-200 rounded-xl overflow-hidden shadow-sm bg-white">
          <div className="hidden md:grid md:grid-cols-12 bg-slate-100 border-b border-slate-200 text-slate-900 font-bold">
            <div className="p-4 col-span-2">思维错误</div>
            <div className="p-4 col-span-4 border-l border-slate-200">预警想法</div>
            <div className="p-4 col-span-6 border-l border-slate-200">回应</div>
          </div>

          <div className="divide-y divide-slate-100">
            {/* Row 1 */}
            <div className="flex flex-col md:grid md:grid-cols-12">
              <div className="p-4 md:col-span-2 bg-slate-50 md:bg-white font-bold text-slate-800">非黑即白思维</div>
              <div className="p-4 md:col-span-4 text-rose-700 md:border-l border-slate-100">
                <span className="md:hidden font-bold text-slate-500 text-xs uppercase mb-1 block">预警想法</span>
                反正我都搞砸了，不如嗑药算了。
              </div>
              <div className="p-4 md:col-span-6 text-emerald-700 md:border-l border-slate-100">
                <span className="md:hidden font-bold text-slate-500 text-xs uppercase mb-1 block">回应</span>
                我并没有搞砸所有的事情。每个人都会犯这样那样的错误。嗑药解决不了问题， 只会让事情更糟。
              </div>
            </div>

            {/* Row 2 */}
            <div className="flex flex-col md:grid md:grid-cols-12">
              <div className="p-4 md:col-span-2 bg-slate-50 md:bg-white font-bold text-slate-800">给好事打折</div>
              <div className="p-4 md:col-span-4 text-rose-700 md:border-l border-slate-100">
                <span className="md:hidden font-bold text-slate-500 text-xs uppercase mb-1 block">预警想法</span>
                老板对我说那些好听的话都是他同情我。我很可悲。吸毒就吸毒吧，反正我也没有什么好失去的了。
              </div>
              <div className="p-4 md:col-span-6 text-emerald-700 md:border-l border-slate-100">
                <span className="md:hidden font-bold text-slate-500 text-xs uppercase mb-1 block">回应</span>
                我的确在工作中犯了这个错误，但这并不意味着老板表扬我的话不是真的。要是吸毒的话，我会失去很多东西，给我的工作带来更大麻烦。
              </div>
            </div>

            {/* Row 3 */}
            <div className="flex flex-col md:grid md:grid-cols-12">
              <div className="p-4 md:col-span-2 bg-slate-50 md:bg-white font-bold text-slate-800">妄下结论</div>
              <div className="p-4 md:col-span-4 text-rose-700 md:border-l border-slate-100">
                <span className="md:hidden font-bold text-slate-500 text-xs uppercase mb-1 block">预警想法</span>
                我运气一向不好，治疗对我起不了作用。我永远也没法远离药物保持清醒了，根本没有必要去尝试。
              </div>
              <div className="p-4 md:col-span-6 text-emerald-700 md:border-l border-slate-100">
                <span className="md:hidden font-bold text-slate-500 text-xs uppercase mb-1 block">回应</span>
                除非我去尝试并找到证据，不然我永远也不可能知道治疗是否能帮到我。如果我试了发现治疗对我无效，我再去想别的办法。
              </div>
            </div>

            {/* Row 4 */}
            <div className="flex flex-col md:grid md:grid-cols-12">
              <div className="p-4 md:col-span-2 bg-slate-50 md:bg-white font-bold text-slate-800">太把感受当真</div>
              <div className="p-4 md:col-span-4 text-rose-700 md:border-l border-slate-100">
                <span className="md:hidden font-bold text-slate-500 text-xs uppercase mb-1 block">预警想法</span>
                我太绝望了，我的生活毫无希望。既然如此，不妨嗑药算了。
              </div>
              <div className="p-4 md:col-span-6 text-emerald-700 md:border-l border-slate-100">
                <span className="md:hidden font-bold text-slate-500 text-xs uppercase mb-1 block">回应</span>
                我有这种感觉并不意味着现实就是如此。感受可以改变，也总会改变的。用药不能改善我的生活状况，但是改变自己是可以改善生活状况的。
              </div>
            </div>

            {/* Row 5 */}
            <div className="flex flex-col md:grid md:grid-cols-12">
              <div className="p-4 md:col-span-2 bg-slate-50 md:bg-white font-bold text-slate-800">自我责备</div>
              <div className="p-4 md:col-span-4 text-rose-700 md:border-l border-slate-100">
                <span className="md:hidden font-bold text-slate-500 text-xs uppercase mb-1 block">预警想法</span>
                我吸太多了，这都是我的错。我毁了我的生活。
              </div>
              <div className="p-4 md:col-span-6 text-emerald-700 md:border-l border-slate-100">
                <span className="md:hidden font-bold text-slate-500 text-xs uppercase mb-1 block">回应</span>
                我生病了，但我在积极寻求康复。康复无法一蹴而就，但如果我远离毒品保持清醒，事情会好起来的。
              </div>
            </div>

            {/* Row 6 */}
            <div className="flex flex-col md:grid md:grid-cols-12">
              <div className="p-4 md:col-span-2 bg-slate-50 md:bg-white font-bold text-slate-800">给自己贴标签</div>
              <div className="p-4 md:col-span-4 text-rose-700 md:border-l border-slate-100">
                <span className="md:hidden font-bold text-slate-500 text-xs uppercase mb-1 block">预警想法</span>
                我吸太多了，我就是一个失败者。
              </div>
              <div className="p-4 md:col-span-6 text-emerald-700 md:border-l border-slate-100">
                <span className="md:hidden font-bold text-slate-500 text-xs uppercase mb-1 block">回应</span>
                身患疾病并不意味着我是一个失败者。如果我好好照顾自己，并留意自己的健康状况，我一定能康复。
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};