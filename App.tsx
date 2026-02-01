import React, { useState } from 'react';
import { 
  FormData, INITIAL_DATA, 
  Exercise2Data, INITIAL_DATA_EX2,
  Exercise3Data, INITIAL_DATA_EX3,
  Exercise4Data, INITIAL_DATA_EX4,
  Exercise5Data, INITIAL_DATA_EX5,
  Exercise6Data, INITIAL_DATA_EX6
} from './types';
import { Layout } from './components/Layout';
import { HomePage } from './components/HomePage';

// Exercise 1 Components
import { Step0_Welcome } from './components/Step0_Welcome';
import { Step1_Stages } from './components/Step1_Stages';
import { Step2_DecisionalBalance } from './components/Step2_DecisionalBalance';
import { Step3_DeepDive } from './components/Step3_DeepDive';
import { Step4_Review } from './components/Step4_Review';

// Exercise 2 Components
import { Exercise2_Welcome } from './components/Exercise2_Welcome';
import { Exercise2_Triggers } from './components/Exercise2_Triggers';
import { Exercise2_WarningThoughts } from './components/Exercise2_WarningThoughts';
import { Exercise2_Review } from './components/Exercise2_Review';

// Exercise 3 Components
import { Exercise3_Welcome } from './components/Exercise3_Welcome';
import { Exercise3_ThinkingErrors } from './components/Exercise3_ThinkingErrors';
import { Exercise3_Review } from './components/Exercise3_Review';

// Exercise 4 Components
import { Exercise4_Welcome } from './components/Exercise4_Welcome';
import { Exercise4_Challenge } from './components/Exercise4_Challenge';
import { Exercise4_CommonErrors } from './components/Exercise4_CommonErrors';
import { Exercise4_Review } from './components/Exercise4_Review';

// Exercise 5 Components
import { Exercise5_Welcome } from './components/Exercise5_Welcome';
import { Exercise5_Experience } from './components/Exercise5_Experience';
import { Exercise5_Triggers } from './components/Exercise5_Triggers';
import { Exercise5_Control } from './components/Exercise5_Control';
import { Exercise5_Review } from './components/Exercise5_Review';

// Exercise 6 Components
import { Exercise6_Welcome } from './components/Exercise6_Welcome';
import { Exercise6_Network } from './components/Exercise6_Network';
import { Exercise6_Boundaries } from './components/Exercise6_Boundaries';
import { Exercise6_Expansion } from './components/Exercise6_Expansion';
import { Exercise6_Review } from './components/Exercise6_Review';

import { Button } from './components/Button';

const STEPS_EX1 = [
  '欢迎',
  '增强动机',
  '矛盾心理',
  '提升动力',
  '总结'
];

const STEPS_EX2 = [
  '欢迎',
  '识别触发点',
  '预警想法',
  '总结'
];

const STEPS_EX3 = [
  '欢迎',
  '思维中的错误',
  '总结'
];

const STEPS_EX4 = [
  '欢迎',
  '思维挑战',
  '应对思维错误',
  '总结'
];

const STEPS_EX5 = [
  '欢迎',
  '愤怒体验',
  '愤怒触发点',
  '控制愤怒',
  '总结'
];

const STEPS_EX6 = [
  '欢迎',
  '审视社交网络',
  '处理危险关系',
  '扩展社交圈子',
  '总结'
];

type ViewState = 'home' | 'ex1' | 'ex2' | 'ex3' | 'ex4' | 'ex5' | 'ex6';

export default function App() {
  const [view, setView] = useState<ViewState>('home');
  const [currentStep, setCurrentStep] = useState(0);
  
  // Data State
  const [ex1Data, setEx1Data] = useState<FormData>(INITIAL_DATA);
  const [ex2Data, setEx2Data] = useState<Exercise2Data>(INITIAL_DATA_EX2);
  const [ex3Data, setEx3Data] = useState<Exercise3Data>(INITIAL_DATA_EX3);
  const [ex4Data, setEx4Data] = useState<Exercise4Data>(INITIAL_DATA_EX4);
  const [ex5Data, setEx5Data] = useState<Exercise5Data>(INITIAL_DATA_EX5);
  const [ex6Data, setEx6Data] = useState<Exercise6Data>(INITIAL_DATA_EX6);

  const resetAndNavigate = (newView: ViewState) => {
    setView(newView);
    setCurrentStep(0);
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  const updateEx1 = (field: keyof FormData, value: any) => {
    setEx1Data(prev => ({ ...prev, [field]: value }));
  };

  const updateEx2 = (field: keyof Exercise2Data, value: any) => {
    setEx2Data(prev => ({ ...prev, [field]: value }));
  };

  const updateEx3 = (field: keyof Exercise3Data, value: any) => {
    setEx3Data(prev => ({ ...prev, [field]: value }));
  };

  const updateEx4 = (field: keyof Exercise4Data, value: any) => {
    setEx4Data(prev => ({ ...prev, [field]: value }));
  };

  const updateEx5 = (field: keyof Exercise5Data, value: any) => {
    setEx5Data(prev => ({ ...prev, [field]: value }));
  };

  const updateEx6 = (field: keyof Exercise6Data, value: any) => {
    setEx6Data(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    let totalSteps = 0;
    if (view === 'ex1') totalSteps = STEPS_EX1.length;
    else if (view === 'ex2') totalSteps = STEPS_EX2.length;
    else if (view === 'ex3') totalSteps = STEPS_EX3.length;
    else if (view === 'ex4') totalSteps = STEPS_EX4.length;
    else if (view === 'ex5') totalSteps = STEPS_EX5.length;
    else if (view === 'ex6') totalSteps = STEPS_EX6.length;

    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (currentStep < totalSteps - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleBackToHome = () => {
    resetAndNavigate('home');
  };

  if (view === 'home') {
    return <HomePage onSelectExercise={resetAndNavigate} />;
  }

  // Determine current context
  let steps = STEPS_EX1;
  let title = '';
  let exerciseLabel = '练习一';
  
  if (view === 'ex1') { 
    steps = STEPS_EX1; 
    title = steps[currentStep]; 
    exerciseLabel = '练习一';
  } else if (view === 'ex2') { 
    steps = STEPS_EX2; 
    title = steps[currentStep]; 
    exerciseLabel = '练习二';
  } else if (view === 'ex3') { 
    steps = STEPS_EX3; 
    title = steps[currentStep]; 
    exerciseLabel = '练习三';
  } else if (view === 'ex4') { 
    steps = STEPS_EX4; 
    title = steps[currentStep]; 
    exerciseLabel = '练习四';
  } else if (view === 'ex5') { 
    steps = STEPS_EX5; 
    title = steps[currentStep]; 
    exerciseLabel = '练习五';
  } else if (view === 'ex6') { 
    steps = STEPS_EX6; 
    title = steps[currentStep]; 
    exerciseLabel = '练习六';
  }

  const renderContent = () => {
    if (view === 'ex1') {
      switch (currentStep) {
        case 0: return <Step0_Welcome data={ex1Data} update={updateEx1} onNext={handleNext} />;
        case 1: return <Step1_Stages data={ex1Data} update={updateEx1} />;
        case 2: return <Step2_DecisionalBalance data={ex1Data} update={updateEx1} />;
        case 3: return <Step3_DeepDive data={ex1Data} update={updateEx1} />;
        case 4: return <Step4_Review data={ex1Data} update={updateEx1} />; 
        default: return null;
      }
    } else if (view === 'ex2') {
      switch (currentStep) {
        case 0: return <Exercise2_Welcome data={ex2Data} update={updateEx2} onNext={handleNext} />;
        case 1: return <Exercise2_Triggers data={ex2Data} update={updateEx2} />;
        case 2: return <Exercise2_WarningThoughts data={ex2Data} update={updateEx2} />;
        case 3: return <Exercise2_Review data={ex2Data} update={updateEx2} onHome={handleBackToHome} />;
        default: return null;
      }
    } else if (view === 'ex3') {
      switch (currentStep) {
        case 0: return <Exercise3_Welcome data={ex3Data} update={updateEx3} onNext={handleNext} />;
        case 1: return <Exercise3_ThinkingErrors data={ex3Data} update={updateEx3} />;
        case 2: return <Exercise3_Review data={ex3Data} update={updateEx3} onHome={handleBackToHome} />;
        default: return null;
      }
    } else if (view === 'ex4') {
      switch (currentStep) {
        case 0: return <Exercise4_Welcome data={ex4Data} update={updateEx4} onNext={handleNext} />;
        case 1: return <Exercise4_Challenge data={ex4Data} update={updateEx4} />;
        case 2: return <Exercise4_CommonErrors />;
        case 3: return <Exercise4_Review data={ex4Data} update={updateEx4} onHome={handleBackToHome} />;
        default: return null;
      }
    } else if (view === 'ex5') {
      switch (currentStep) {
        case 0: return <Exercise5_Welcome data={ex5Data} update={updateEx5} onNext={handleNext} />;
        case 1: return <Exercise5_Experience data={ex5Data} update={updateEx5} />;
        case 2: return <Exercise5_Triggers data={ex5Data} update={updateEx5} />;
        case 3: return <Exercise5_Control data={ex5Data} update={updateEx5} />;
        case 4: return <Exercise5_Review data={ex5Data} update={updateEx5} onHome={handleBackToHome} />;
        default: return null;
      }
    } else if (view === 'ex6') {
      switch (currentStep) {
        case 0: return <Exercise6_Welcome data={ex6Data} update={updateEx6} onNext={handleNext} />;
        case 1: return <Exercise6_Network data={ex6Data} update={updateEx6} />;
        case 2: return <Exercise6_Boundaries data={ex6Data} update={updateEx6} />;
        case 3: return <Exercise6_Expansion data={ex6Data} update={updateEx6} />;
        case 4: return <Exercise6_Review data={ex6Data} update={updateEx6} onHome={handleBackToHome} />;
        default: return null;
      }
    }
    return null;
  };

  const isLastStep = currentStep === steps.length - 1;
  const isWelcomeStep = currentStep === 0;
  const showNav = !isWelcomeStep && !isLastStep;

  const handleLayoutBack = () => {
    if (currentStep > 0) {
      handleBack();
    } else {
      handleBackToHome();
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen p-4 sm:p-6 font-sans">
      <Layout 
        currentStep={currentStep} 
        totalSteps={steps.length}
        title={title}
        onBack={handleLayoutBack}
        exerciseLabel={exerciseLabel}
      >
        {renderContent()}

        {showNav && (
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