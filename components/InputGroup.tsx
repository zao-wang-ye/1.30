import React from 'react';

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  subLabel?: string;
  description?: React.ReactNode;
}

export const TextArea: React.FC<TextAreaProps> = ({ label, subLabel, description, className = '', ...props }) => {
  return (
    <div className="mb-6">
      <label className="block text-lg font-bold text-slate-800 mb-2">
        {label}
      </label>
      {description && (
        <div className="text-base text-slate-600 mb-3 bg-slate-50 p-4 rounded-lg border border-slate-100">
          {description}
        </div>
      )}
      {subLabel && (
        <p className="text-sm text-slate-500 mb-2 leading-relaxed">{subLabel}</p>
      )}
      <textarea
        className={`w-full p-4 text-lg border border-slate-200 bg-white rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all min-h-[140px] text-slate-700 shadow-sm placeholder:text-slate-400 ${className}`}
        {...props}
      />
    </div>
  );
};

interface SliderProps {
  value: number;
  onChange: (val: number) => void;
  label?: string;
}

export const MotivationSlider: React.FC<SliderProps> = ({ value, onChange, label }) => {
  return (
    <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm my-8">
      {label && <h3 className="font-semibold text-slate-800 mb-6 text-center text-xl">{label}</h3>}
      
      <div className="relative mb-10 px-2">
        <input
          type="range"
          min="0"
          max="10"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer"
        />
        <div className="flex justify-between text-sm text-slate-400 mt-3 px-1 font-mono">
          <span>0</span>
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
          <span>6</span>
          <span>7</span>
          <span>8</span>
          <span>9</span>
          <span>10</span>
        </div>
      </div>

      <div className="grid grid-cols-4 text-center text-sm sm:text-base font-medium gap-2">
        <span className={`transition-colors ${value <= 2 ? 'text-primary font-bold' : 'text-slate-400'}`}>
          没有动力<br/>(0-2)
        </span>
        <span className={`transition-colors ${value >= 3 && value <= 5 ? 'text-primary font-bold' : 'text-slate-400'}`}>
          有些许动力<br/>(3-5)
        </span>
        <span className={`transition-colors ${value >= 6 && value <= 7 ? 'text-primary font-bold' : 'text-slate-400'}`}>
          有动力<br/>(6-7)
        </span>
        <span className={`transition-colors ${value >= 8 ? 'text-primary font-bold' : 'text-slate-400'}`}>
          有很大动力<br/>(8-10)
        </span>
      </div>

      <div className="mt-6 text-center">
        <span className="inline-block bg-primary/10 text-primary text-3xl font-bold px-6 py-3 rounded-xl">
          {value}
        </span>
      </div>
    </div>
  );
};

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  className?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onChange, className = '' }) => {
  return (
    <label className={`flex items-start p-3 rounded-lg border cursor-pointer transition-all ${checked ? 'border-primary bg-primary/5' : 'border-slate-200 hover:border-slate-300 bg-white'} ${className}`}>
      <div className="flex items-center h-6">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="w-5 h-5 text-primary border-slate-300 rounded focus:ring-primary"
        />
      </div>
      <div className="ml-3 text-lg text-slate-700">
        {label}
      </div>
    </label>
  );
};