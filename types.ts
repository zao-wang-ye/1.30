
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

export interface Exercise2Data {
  userName: string;
  userNumber: string;
  internalTriggers: string[];
  externalTriggers: string[];
  warningThoughts: string[];
  otherWarningThoughts: string;
}

export const INITIAL_DATA_EX2: Exercise2Data = {
  userName: '',
  userNumber: '',
  internalTriggers: [],
  externalTriggers: [],
  warningThoughts: [],
  otherWarningThoughts: '',
};

export interface Exercise3Data {
  userName: string;
  userNumber: string;
  
  // 1. Black and White
  blackWhiteThought: string;
  blackWhiteWarning: string;
  
  // 2. Discounting Positive
  discountingThought: string;
  discountingWarning: string;

  // 3. Jumping to Conclusions
  jumpingThought: string;
  jumpingWarning: string;

  // 4. Emotional Reasoning
  emotionalThought: string;
  emotionalWarning: string;

  // 5. Self Blame
  blamingThought: string;
  blamingWarning: string;

  // 6. Labeling
  labelingThought: string;
  labelingWarning: string;
}

export const INITIAL_DATA_EX3: Exercise3Data = {
  userName: '',
  userNumber: '',
  blackWhiteThought: '',
  blackWhiteWarning: '',
  discountingThought: '',
  discountingWarning: '',
  jumpingThought: '',
  jumpingWarning: '',
  emotionalThought: '',
  emotionalWarning: '',
  blamingThought: '',
  blamingWarning: '',
  labelingThought: '',
  labelingWarning: '',
};

export interface Exercise4Data {
  userName: string;
  userNumber: string;
  
  // 3T Method Inputs
  triggerSituation: string;
  warningThought: string;
  challengeQuestion: string;
  evidence: string;
  rationalResponse: string;
}

export const INITIAL_DATA_EX4: Exercise4Data = {
  userName: '',
  userNumber: '',
  triggerSituation: '',
  warningThought: '',
  challengeQuestion: '',
  evidence: '',
  rationalResponse: '',
};

export interface Exercise5Data {
  userName: string;
  userNumber: string;

  // Part 1: Experience
  bodySensations: string;
  angryThoughts: string;
  angryActions: string;

  // Part 2: Triggers
  triggerPeople: string;
  triggerPlaces: string;
  triggerEmotions: string;
  triggerThoughts: string;
  triggerPhysical: string;

  // Part 3: Control & Reflection
  scenarioTrigger: string;
  scenarioThoughts: string;
  scenarioUnhealthy: string;
  scenarioHealthy: string;

  // Part 4: Motivation
  motivationScore: number;
}

export const INITIAL_DATA_EX5: Exercise5Data = {
  userName: '',
  userNumber: '',
  bodySensations: '',
  angryThoughts: '',
  angryActions: '',
  triggerPeople: '',
  triggerPlaces: '',
  triggerEmotions: '',
  triggerThoughts: '',
  triggerPhysical: '',
  scenarioTrigger: '',
  scenarioThoughts: '',
  scenarioUnhealthy: '',
  scenarioHealthy: '',
  motivationScore: 5,
};

export interface Exercise6Data {
  userName: string;
  userNumber: string;

  // Part 1: Network
  safetyNet: string;
  dangerousRelations: string;

  // Part 2: Boundaries Practice
  boundaryPerson: string;
  boundaryNeed: string;
  boundaryStatement: string;

  // Part 3: Qualities
  desiredQualities: string[];
}

export const INITIAL_DATA_EX6: Exercise6Data = {
  userName: '',
  userNumber: '',
  safetyNet: '',
  dangerousRelations: '',
  boundaryPerson: '',
  boundaryNeed: '',
  boundaryStatement: '',
  desiredQualities: [],
};

export const EXERCISE6_QUALITIES = [
  "现阶段不用药",
  "善于倾听",
  "了解或愿意学习关于成瘾的知识",
  "尊重我",
  "不评判我",
  "值得信任",
  "善良",
  "关爱我",
  "有耐心",
  "愿意力我腾出时间",
  "可靠",
  "真诚",
  "愿意分享想法、观点、主意",
  "愿意为我及我的康复保驾护航"
];

export enum StageType {
  PRECONTEMPLATION = '懵懂期',
  CONTEMPLATION = '沉思期',
  PREPARATION = '准备期',
  ACTION = '行动期',
  MAINTENANCE = '维系期',
}

// Exercise 2 Constants
export const INTERNAL_TRIGGERS = [
  "抑郁情绪", "孤独感", "幸福感", "兴奋感", 
  "压力", "烦躁", "焦头烂额", "嫉妒", 
  "焦虑", "无聊", "愤怒", "被拒绝", 
  "沮丧", "愧疚感或耻辱感", "能量耗尽", "戒断症状"
];

export const EXTERNAL_TRIGGERS = {
  people: ["朋友", "配偶或其他重要的人", "家庭成员", "同事或老板"],
  places: ["酒吧或夜店", "朋友家", "工作单位", "马路或街道"],
  situations: ["聚会", "节日", "独自在家时", "出去吃饭时", "早上醒来时", "下班后"],
  objects: ["藏在家里的药物", "用药相关用品（针头等）"]
};

export const WARNING_THOUGHTS = [
  "没有人会知道，我现在我必须要吸一点。",
  "如果我用药了，也没那么严重。",
  "我可以控制自己。",
  "今天过得真糟糕，我不妨吸一点。",
  "今天情况特殊!明天再戒吧。"
];
