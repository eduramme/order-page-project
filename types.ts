export interface Diagnostic {
  name: string;
  code: string;
}

export interface OTCMedication {
  name: string;
  type: string;
  dose: string;
  frequency: string;
}

export interface MiraCareOption {
  careType: string[];
  active: string[];
  description: string;
}

export interface Diagnosis {
  diagnosis: string;
  probability: string;
  ICD10CMCode: string;
}

export interface RxRecommendation {
  name: string;
  type: string;
  dose: string;
  instruction: string;
}

export interface MiraOSSummary {
  triageLevel: string[];
  chiefComplaint: string;
  dx: Diagnosis[];
  reasonsForDx: string;
  conditionCategory: string;
  rxRecommendation: RxRecommendation[];
  rxExplanation: string;
}

export interface VisitIntakeItem {
  request?: string;
  title?: string;
  value?: string;
}

export interface OrderData {
  summary: string;
  diagnostic: Diagnostic[];
  selfCareTips: string;
  OTC: OTCMedication[];
  miraCareOptions: MiraCareOption[];
  miraOSsummary: MiraOSSummary;
  visitIntake: VisitIntakeItem[];
}
