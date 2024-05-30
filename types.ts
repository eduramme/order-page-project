export interface DiagnosticData {
  name: string;
  code: string;
}

export interface OTCMedicationData {
  name: string;
  type: string;
  dose: string;
  frequency: string;
}

export interface MiraCareOptionData {
  careType: string[];
  active: string[];
  description: string;
}

export interface DiagnosisData {
  diagnosis: string;
  probability: string;
  ICD10CMCode: string;
}

export interface RxRecommendationData {
  name: string;
  type: string;
  dose: string;
  instruction: string;
}

export interface MiraOSSummary {
  triageLevel: string[];
  chiefComplaint: string;
  dx: DiagnosisData[];
  reasonsForDx: string;
  conditionCategory: string;
  rxRecommendation: RxRecommendationData[];
  rxExplanation: string;
}

export interface VisitIntakeItemData {
  request?: string;
  title?: string;
  value?: string;
}

export interface OrderData {
  summary: string;
  diagnostic: DiagnosticData[];
  selfCareTips: string;
  OTC: OTCMedicationData[];
  miraCareOptions: MiraCareOptionData[];
  miraOSsummary: MiraOSSummary;
  visitIntake: VisitIntakeItemData[];
}
