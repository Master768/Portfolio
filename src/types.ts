export interface ArchitectureStep {
  name: string;
  role: string;
  tech?: string;
  description: string;
}

export interface CaseStudyDecision {
  title: string;
  decision: string;
  tradeOff: string;
}

export interface Project {
  id: string;
  title: string;
  shortTitle?: string;
  category: string;
  categoryType: 'ai-data-science' | 'engineering';
  highlightTag?: string;
  shortDescription: string;
  fullDescription: string;
  
  // Consistent Case Study Narrative Schema
  contextAndRole: string;
  problemAndConstraints: string;
  processAndKeyDecisions: CaseStudyDecision[];
  outcomeAndReflection: {
    measurableResults: string[];
    reflection: string;
  };

  // Optional fields for modal compatibility
  keyFeatures?: string[];
  problemStatement?: string;
  solution?: string;
  engineeringChallenges?: {
    challenge: string;
    solution: string;
  }[];

  techStack: string[];
  architectureSteps: ArchitectureStep[];
  architectureDiagramNote?: string;
  githubUrl: string;
  liveDemoUrl?: string;
  stats?: {
    label: string;
    value: string;
  }[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    context: string;
    highlight?: boolean;
  }[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
  status: string;
  description: string;
  coursework: string[];
  certifications?: string[];
  achievements?: string[];
}
