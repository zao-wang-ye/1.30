import React from 'react';

interface Props {
  onSelectExercise: (ex: 'ex1' | 'ex2' | 'ex3' | 'ex4' | 'ex5' | 'ex6') => void;
}

export const HomePage: React.FC<Props> = ({ onSelectExercise }) => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 font-sans">
      
      {/* Header Section */}
      <div className="text-center mb-12 max-w-2xl">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-teal-50 mb-6 animate-in fade-in zoom-in duration-700">
          {/* Compass Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal-600">
            <circle cx="12" cy="12" r="10"/>
            <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
          </svg>
        </div>
        <h1 className="text-3xl sm:text-4xl font-serif font-medium text-slate-900 mb-4 tracking-tight">
          欢迎开启心灵之旅
        </h1>
        <p className="text-slate-500 text-base sm:text-lg">
          请选择今天的练习内容
        </p>
      </div>
      
      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl w-full">
        
        {/* Card 1: Motivation - Solid Teal Style */}
        <div 
          onClick={() => onSelectExercise('ex1')}
          className="group bg-white rounded-[1.5rem] p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer border border-slate-100 flex flex-col h-full"
        >
          <div className="w-12 h-12 rounded-xl bg-teal-600 flex items-center justify-center mb-5 shadow-teal-200 shadow-lg group-hover:scale-110 transition-transform duration-300">
            {/* Eye/Focus Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
              <circle cx="12" cy="12" r="10"/>
              <circle cx="12" cy="12" r="4"/>
              <line x1="21.17" x2="12" y1="8" y2="8"/>
              <line x1="3.95" x2="8.54" y1="6.06" y2="14"/>
              <line x1="10.88" x2="15.46" y1="21.94" y2="14"/>
            </svg>
          </div>
          <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-teal-600 transition-colors">
            练习一：增强动机
          </h2>
          <p className="text-slate-500 leading-relaxed text-sm">
            学会觉察想法，了解行为改变理论，评估当前阶段与动机水平，投身改变。
          </p>
        </div>

        {/* Card 2: Triggers - Soft Amber Style */}
        <div 
          onClick={() => onSelectExercise('ex2')}
          className="group bg-white rounded-[1.5rem] p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer border border-slate-100 flex flex-col h-full"
        >
          <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
            {/* Heart/Shield Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-600">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              <path d="M12 8v4"/>
              <path d="M12 16h.01"/>
            </svg>
          </div>
          <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">
            练习二：识别触发点
          </h2>
          <p className="text-slate-500 leading-relaxed text-sm">
            积极接纳个人体验，探索导致渴求的内部与外部因素，识别预警想法。
          </p>
        </div>

        {/* Card 3: Thinking Errors - Soft Rose Style */}
        <div 
          onClick={() => onSelectExercise('ex3')}
          className="group bg-white rounded-[1.5rem] p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer border border-slate-100 flex flex-col h-full"
        >
          <div className="w-12 h-12 rounded-xl bg-rose-100 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
             {/* Hand/Brain/Stop Icon */}
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-rose-600">
              <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/>
              <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/>
            </svg>
          </div>
          <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-rose-600 transition-colors">
            练习三：思维中的错误
          </h2>
          <p className="text-slate-500 leading-relaxed text-sm">
            练习灵活注意，用全新的眼光观察思维中的错误，找回注意力的选择权。
          </p>
        </div>

        {/* Card 4: Thinking Challenge - Soft Indigo Style */}
        <div 
          onClick={() => onSelectExercise('ex4')}
          className="group bg-white rounded-[1.5rem] p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer border border-slate-100 flex flex-col h-full"
        >
          <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
             {/* Lightbulb/Puzzle Icon */}
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-600">
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
              <path d="M19 3v4"/>
              <path d="M21 5h-4"/>
            </svg>
          </div>
          <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
            练习四：思维挑战
          </h2>
          <p className="text-slate-500 leading-relaxed text-sm">
            智取成瘾大脑，学习3T法，将非理性思维转变为平衡的、现实的思维。
          </p>
        </div>

         {/* Card 5: Managing Anger - Soft Orange Style */}
         <div 
          onClick={() => onSelectExercise('ex5')}
          className="group bg-white rounded-[1.5rem] p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer border border-slate-100 flex flex-col h-full"
        >
          <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
             {/* Fire/Calm Icon */}
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-600">
              <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.1.2-2.2.6-3.2.7 1.4 1.9 2.7 2.9 3.2Z"/>
            </svg>
          </div>
          <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">
            练习五：管理愤怒情绪
          </h2>
          <p className="text-slate-500 leading-relaxed text-sm">
            识别愤怒带给你的感受与触发点，学习健康的应对工具和发泄渠道。
          </p>
        </div>

        {/* Card 6: Social Support - Soft Sky Style */}
        <div 
          onClick={() => onSelectExercise('ex6')}
          className="group bg-white rounded-[1.5rem] p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer border border-slate-100 flex flex-col h-full"
        >
          <div className="w-12 h-12 rounded-xl bg-sky-100 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
             {/* Users/Network Icon */}
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-600">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
          </div>
          <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-sky-600 transition-colors">
            练习六：社会支持网络
          </h2>
          <p className="text-slate-500 leading-relaxed text-sm">
            审视社交网络，处理危险关系，建立安全防护网，构建你的社会支持系统。
          </p>
        </div>

      </div>
    </div>
  );
};