export interface FormData {
  // Step 0: ID
  userName: string;
  userNumber: string;

  // Step 1: Stages & Motivation
  stage: string;
  motivationScore1: number; // 0-10

  // Step 2: Decisional Balance
  benefitsQuitting: string;
  costsQuitting: string;
  benefitsUsing: string;
  costsUsing: string;

  // Step 3: Deep Dive
  problemRecognition: string;
  concerns: string;
  vision: string;
  selfEfficacy: string;

  // Step 4: Re-assessment
  motivationScore2: number; // 0-10
}

export const INITIAL_DATA: FormData = {
  userName: '',
  userNumber: '',
  stage: '',
  motivationScore1: 5,
  benefitsQuitting: '',
  costsQuitting: '',
  benefitsUsing: '',
  costsUsing: '',
  problemRecognition: '',
  concerns: '',
  vision: '',
  selfEfficacy: '',
  motivationScore2: 5,
};

export enum StageType {
  PRECONTEMPLATION = '懵懂期',
  CONTEMPLATION = '沉思期',
  PREPARATION = '准备期',
  ACTION = '行动期',
  MAINTENANCE = '维系期',
}