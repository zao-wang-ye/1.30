import React, { useState } from 'react';
import { FormData, INITIAL_DATA } from './types';
import { Layout } from './components/Layout';
import { Step0_Welcome } from './components/Step0_Welcome';
import { Step1_Stages } from './components/Step1_Stages';
import { Step2_DecisionalBalance } from './components/Step2_DecisionalBalance';
import { Step3_DeepDive } from './components/Step3_DeepDive';
import { Step4_Review } from './components/Step4_Review';
import { Button } from './components/Button';

const STEPS = [
  '欢迎',
  '增强动机',
  '矛盾心理',
  '提升动力',
  '总结'
];

export default function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>(INITIAL_DATA);

  const updateField = (field: keyof FormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (currentStep < STEPS.length - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  // Render specific step content
  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <Step0_Welcome data={formData} update={updateField} onNext={handleNext} />;
      case 1:
        return <Step1_Stages data={formData} update={updateField} />;
      case 2:
        return <Step2_DecisionalBalance data={formData} update={updateField} />;
      case 3:
        return <Step3_DeepDive data={formData} update={updateField} />;
      case 4:
        return <Step4_Review data={formData} update={updateField} />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen p-4 sm:p-6 font-sans">
      <Layout 
        currentStep={currentStep} 
        totalSteps={STEPS.length}
        title={STEPS[currentStep]}
        onBack={currentStep > 0 && currentStep < 4 ? handleBack : undefined} // Hide back on first and last(success) steps
      >
        {renderStep()}

        {/* Navigation Footer for Steps 1, 2, 3 */}
        {currentStep > 0 && currentStep < 4 && (
          <div className="flex justify-between items-center pt-6 border-t border-slate-100 mt-4">
            <Button variant="secondary" onClick={handleBack}>
              上一步
            </Button>
            <Button onClick={handleNext}>
              下一步
            </Button>
          </div>
        )}
      </Layout>
    </div>
  );
}