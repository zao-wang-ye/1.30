import React from 'react';

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  subLabel?: string;
}

export const TextArea: React.FC<TextAreaProps> = ({ label, subLabel, className = '', ...props }) => {
  return (
    <div className="mb-6">
      <label className="block text-sm font-semibold text-slate-800 mb-1">
        {label}
      </label>
      {subLabel && (
        <p className="text-xs text-slate-500 mb-2 leading-relaxed">{subLabel}</p>
      )}
      <textarea
        className={`w-full p-3 border border-slate-200 bg-white rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all min-h-[120px] text-slate-700 shadow-sm placeholder:text-slate-400 ${className}`}
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
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm my-6">
      {label && <h3 className="font-semibold text-slate-800 mb-4 text-center">{label}</h3>}
      
      <div className="relative mb-8 px-2">
        <input
          type="range"
          min="0"
          max="10"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
        />
        <div className="flex justify-between text-xs text-slate-400 mt-2 px-1 font-mono">
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

      <div className="flex justify-between items-center text-sm font-medium">
        <span className={`transition-colors ${value <= 3 ? 'text-primary' : 'text-slate-400'}`}>没有动力 (0-3)</span>
        <span className={`transition-colors ${value > 3 && value <= 6 ? 'text-primary' : 'text-slate-400'}`}>有些许动力 (4-6)</span>
        <span className={`transition-colors ${value > 6 && value <= 8 ? 'text-primary' : 'text-slate-400'}`}>有动力 (7-8)</span>
        <span className={`transition-colors ${value > 8 ? 'text-primary' : 'text-slate-400'}`}>有很大动力 (9-10)</span>
      </div>

      <div className="mt-4 text-center">
        <span className="inline-block bg-primary/10 text-primary text-2xl font-bold px-4 py-2 rounded-lg">
          {value}
        </span>
      </div>
    </div>
  );
};