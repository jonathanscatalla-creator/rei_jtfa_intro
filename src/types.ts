export interface SlideMeta {
  id: number;
  slug: string;
  masthead: string;
  kicker: string;
  title: string;
  subtitle?: string;
  presenterNotes: {
    duration: string;
    keyMessage: string;
    talkingPoints: string[];
    transitionCue: string;
  };
}

export interface FrictionPoint {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  tag: string;
  categoryTag?: string;
  groundTension: string;
  detail: string;
  phCase: string;
  systemicFix: string;
  systemicBottlenecks?: string;
  bankabilityRisks: string;
  impactOnSocialLicense: string;
}

export interface StakeholderSector {
  id: string;
  name: string;
  shortLabel: string;
  role: string;
  description: string;
  systemicRole: string;
  keyPriorities: string[];
  collaborationOpportunity: string;
  iconName: string;
  badgeColor: string;
}

export interface ConsortiumPartner {
  id: string;
  name: string;
  acronym: string;
  fullName: string;
  role: string;
  description: string;
  domain: string;
  thematicDomain: string;
  badgeColor: string;
  logo?: string;
  isSecretariatLead?: boolean;
  isSecretariatCoAnchor?: boolean;
  strategicContribution?: string;
  leadArena?: string;
  keyDeliverables?: string[];
}

export interface CorePrinciple {
  id: string;
  number: string;
  name: string;
  tagline: string;
  icon: string;
  color: string;
  description: string;
  pillars: string[];
  philippineImperative: string;
  systemicRationale?: string;
  actionableStandards?: string[];
  successIndicators?: string[];
}

export interface FoundationalPillar {
  id: string;
  number: string;
  name: string;
  subtitle: string;
  tagline: string;
  icon: string;
  color: string;
  summary: string;
  description: string;
  systemicRationale: string;
  paradigmShift: {
    from: string;
    to: string;
  };
  standards: string[];
  groundImperative: string;
}

export interface SpecificPrinciple {
  id: string;
  number: number;
  name: string;
  shortDefinition: string;
  fullDefinition: string;
  icon: string;
  tag: string;
  color: string;
  downstreamEngine: string;
  statutoryAnchors: string[];
  developerGuideline: string;
  operationalStandard: string;
  indicators: string[];
}

export interface StructuralCommitment {
  id: string;
  number: string;
  title: string;
  icon: string;
  tag: string;
  color: string;
  summary: string;
  mandate: string;
  linkedPrototypes: string[];
  partnerPractice: string;
  coreDeliverables: string[];
}

export interface PrototypeWorkstream {
  id: string;
  number: string;
  title: string;
  leadIcon: string;
  shortTag: string;
  institutionalArtifact: string;
  tableAssignment?: string;
  leadAgency: string;
  leadLogos?: string[];
  mandate: string;
  keyOutputs: string[];
  focusAreas: string[];
  philippineImpact: string;
  technicalMechanism?: string;
  targetStakeholders?: string[];
  systemicOutcome?: string;
}

export interface BreakoutTrack {
  id: string;
  trackNumber: string;
  title: string;
  subtitle: string;
  iconName: string;
  badge: string;
  overview: string;
  tableAssignment: string;
  simulationFocus: string[];
  interactiveDemoId?: string;
}

export interface SimulationCase {
  id: string;
  title: string;
  technology: string;
  location: string;
  scale: string;
  context: string;
  coreDilemma: string;
  coOwnershipModel: string;
  avatarIcon: string;
}

export interface SimulationMetric {
  id: string;
  name: string;
  unit: string;
  target: string;
  description: string;
  icon: string;
}

