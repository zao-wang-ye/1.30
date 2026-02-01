import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
  currentStep: number;
  totalSteps: number;
  title: string;
  onBack?: () => void;
  // Optional prop if you want to pass exercise title, though currently we can infer or pass it. 
  // For now, I will keep it simple and maybe hardcode logic or just remove the subtitle "练习一" if not generic.
  // Actually, let's make it generic or infer it from the parent context if needed, but for now I'll just remove the hardcoded "练习一" or make it a prop.
  exerciseLabel?: string;
}

export const Layout: React.FC<LayoutProps> = ({ children, currentStep, totalSteps, title, onBack, exerciseLabel }) => {
  const progress = ((currentStep + 1) / totalSteps) * 100;

  // Derive exercise label from title or pass it. 
  // Since title is like "欢迎", "增强动机" etc, we can use a prop.
  // I'll default to checking the title or just use a generic header if not provided.
  // However, simpler is just to not show the "练习一" subtitle here or pass it.
  
  return (
    <div className="min-h-screen flex flex-col max-w-4xl mx-auto w-full bg-white sm:shadow-xl sm:my-8 sm:rounded-2xl overflow-hidden">
      {/* Header */}
      <header className="bg-white border-b border-slate-100 p-6 sm:p-8 sticky top-0 z-10">
        <div className="flex items-center gap-5">
          {onBack && (
            <button 
              onClick={onBack}
              className="p-2 -ml-2 text-slate-400 hover:text-slate-700 hover:bg-slate-50 rounded-full transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            </button>
          )}
          <div className="flex-1">
            <div className="text-sm font-bold text-primary tracking-wider uppercase mb-1">
              {exerciseLabel || '行为改变干预'}
            </div>
            <h1 className="text-2xl font-bold text-slate-900 leading-tight">{title}</h1>
          </div>
          <div className="text-base font-medium text-slate-400">
            {currentStep + 1} / {totalSteps}
          </div>
        </div>
        {/* Progress Bar */}
        <div className="mt-5 h-2 w-full bg-slate-100 rounded-full overflow-hidden">
          <div 
            className="h-full bg-primary transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </header>

      {/* Content Scrollable Area */}
      <main className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-10">
        {children}
      </main>
    </div>
  );
};