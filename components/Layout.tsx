import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
  currentStep: number;
  totalSteps: number;
  title: string;
  onBack?: () => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, currentStep, totalSteps, title, onBack }) => {
  const progress = ((currentStep + 1) / totalSteps) * 100;

  return (
    <div className="min-h-screen flex flex-col max-w-3xl mx-auto w-full bg-white sm:shadow-xl sm:my-8 sm:rounded-2xl overflow-hidden">
      {/* Header */}
      <header className="bg-white border-b border-slate-100 p-4 sm:p-6 sticky top-0 z-10">
        <div className="flex items-center gap-4">
          {onBack && (
            <button 
              onClick={onBack}
              className="p-2 -ml-2 text-slate-400 hover:text-slate-700 hover:bg-slate-50 rounded-full transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            </button>
          )}
          <div className="flex-1">
            <div className="text-xs font-bold text-primary tracking-wider uppercase mb-1">
              练习一
            </div>
            <h1 className="text-xl font-bold text-slate-900 leading-tight">{title}</h1>
          </div>
          <div className="text-sm font-medium text-slate-400">
            {currentStep + 1} / {totalSteps}
          </div>
        </div>
        {/* Progress Bar */}
        <div className="mt-4 h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
          <div 
            className="h-full bg-primary transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </header>

      {/* Content Scrollable Area */}
      <main className="flex-1 overflow-y-auto p-4 sm:p-8 space-y-8">
        {children}
      </main>
    </div>
  );
};