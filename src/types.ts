export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  category: 'estudos' | 'assessoria' | 'restauracao';
  features: string[];
  legislationUrl?: string;
  benefits: string[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
}

export interface ValueCard {
  title: string;
  description: string;
  iconName: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  location: string;
  description: string;
  impactMetrics: string[];
  imageUrl: string;
}

// Strategic Diagnostic Types
export interface DiagnosticQuestion {
  id: string;
  text: string;
  description?: string;
  options: DiagnosticOption[];
}

export interface DiagnosticOption {
  value: string;
  text: string;
  subtext?: string;
  nextStepTrigger?: string;
}

export interface DiagnosticResponse {
  sector: string;
  size: string;
  stage: string;
  painPoints: string[];
}

export interface RecommendedAction {
  title: string;
  description: string;
  priority: 'Baixo' | 'Médio' | 'Alto' | 'Mandatório';
  studyId?: string;
}

export interface DiagnosticReportResult {
  id: string;
  title: string;
  overview: string;
  recommendedActions: RecommendedAction[];
  primaryLicenses: string[];
  complianceScore: number; // 0 to 100
  potentialRisks: string[];
}
