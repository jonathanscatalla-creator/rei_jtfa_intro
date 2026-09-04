import {
  ConsortiumPartner,
  StakeholderSector,
  FrictionPoint,
  CorePrinciple,
  FoundationalPillar,
  SpecificPrinciple,
  StructuralCommitment,
  PrototypeWorkstream,
  BreakoutTrack,
  SimulationCase,
  SimulationMetric,
  SlideMeta,
} from '../types';

export const SLIDES_META: SlideMeta[] = [
  {
    id: 1,
    slug: 'opening-dilemma',
    masthead: 'JUST TRANSITION FORUM ASIA 2026 · PHILIPPINE LAB',
    kicker: 'JUST TRANSITION FORUM ASIA 2026 · PHILIPPINE LAB',
    title: 'Not Just Rapid, But Responsible',
    subtitle: 'Shaping an Ecologically Safe, Socially Just Energy Transition in the Philippines',
    presenterNotes: {
      duration: '1.5 min',
      keyMessage: 'Speed is non-negotiable for the climate emergency, but rapid deployment without social and ecological justice reproduces legacy extraction.',
      talkingPoints: [
        'Welcome participants to the Philippine Lab session: "Assets of the Commons: Operationalizing Community Co-Ownership and Circularity in Asia\'s Energy Transition".',
        'Initiative Lead: Forum for the Future, collaborating alongside the Responsible Energy Initiative – Philippines (REI-PH) consortium.',
        'Frame the core inquiry: The Philippines targets 35% RE by 2030 and 50% by 2040. But as utility-scale clean energy accelerates, who bears the cost and who owns the future?',
        'Set up the narrative: Responsible Energy Initiative – Philippines (REI-PH) proposes a shift from extractive renewable energy to Net Positive Energy.'
      ],
      transitionCue: 'Advance to Slide 2 to examine the Philippine national clean energy targets alongside the 5 structural friction points on the ground.'
    }
  },
  {
    id: 2,
    slug: 'national-targets-friction',
    masthead: 'THE PHILIPPINE CONTEXT & CLEAN ENERGY TARGETS',
    kicker: 'THE IMPERATIVE FOR RESPONSIBLE ACCELERATION',
    title: 'Context, National Targets & Structural Friction',
    subtitle: 'Navigating aggressive generation targets while confronting structural friction across land, waters, institutions, capital, and lifecycle circularity.',
    presenterNotes: {
      duration: '1.5 min',
      keyMessage: 'Meeting 35% by 2030 and 50% by 2040 requires proactively solving land-use conflicts, spatial data blindspots, trust deficits, debt subordination, and RE waste circularity liabilities.',
      talkingPoints: [
        'Highlight national generation targets: 35% renewable energy by 2030 and 50% by 2040 in the Philippine power generation mix.',
        'Inspect the 5 Structural Friction Points: 1) Land & Sea Competition, 2) Data & Mapping Blindspots, 3) Community Trust Deficits, 4) Capital & Financing Gaps, and 5) RE Waste & Circularity Blindspots.',
        'Stress that traditional top-down Corporate Social Responsibility (CSR) and unbudgeted decommissioning liabilities leave host communities with toxic e-waste.',
        'Frame the solution: Grounding energy expansion in shared spatial intelligence, authentic equity co-ownership, and cradle-to-cradle Extended Producer Responsibility (EPR).'
      ],
      transitionCue: 'Transition to Slide 3 to meet the multi-stakeholder consortium behind REI Philippines.'
    }
  },
  {
    id: 3,
    slug: 'consortium-identity',
    masthead: 'MULTI-STAKEHOLDER GOVERNANCE & ORIGINS',
    kicker: 'WHO IS REI PHILIPPINES?',
    title: 'Genesis, Vision, Mission & The 7 Consortium Members',
    subtitle: 'An action-oriented multi-stakeholder collaborative driving systemic reform across the renewable energy value chain.',
    presenterNotes: {
      duration: '1.5 min',
      keyMessage: 'REI-PH was born in January 2024 as the second national chapter of the global Responsible Energy Initiative, uniting 7 steering partners.',
      talkingPoints: [
        'Origins: Second national chapter following REI India, launched in January 2024 following multi-sector consultations.',
        'Vision: An energy transition that is ecologically safe, socially just, and actively builds community resilience.',
        'Mission: Enabling investors, developers, and policymakers to institutionalize responsible standards through practical tools and prototypes.',
        'Introduce the 7 Steering Committee members: Forum for the Future, FES, CentRE, Oxfam Pilipinas, OEP, ICSC, and BHRC.'
      ],
      transitionCue: 'Move to Slide 4 to explore the 8 Operational Principles anchoring our systemic compass.'
    }
  },
  {
    id: 4,
    slug: 'core-principles',
    masthead: 'GUIDING ETHOS & NORMATIVE BENCHMARKS',
    kicker: 'OUR SYSTEMIC COMPASS',
    title: 'Principles of the Responsible Energy Initiative',
    subtitle: 'Moving from transactional CSR compliance to structural risk mitigation that protects project bankability, rights, and community trust.',
    presenterNotes: {
      duration: '1.5 min',
      keyMessage: 'REI principles establish 8 actionable operational standards spanning ecology, community sovereignty, labor justice, and circular hardware lifecycles.',
      talkingPoints: [
        'Principle 01 (Holistic) & 02 (Nature-Positive): Interconnected social-ecological planning that actively regenerates habitats and carrying capacity.',
        'Principle 03 (People-Centered) & 04 (Rights-Respecting): Shifting from static FPIC checkboxes to continuous Living Consent and participatory governance.',
        'Principle 05 (Equity & Inclusion) & 06 (Dignified Work): Democratic dividend distribution, gender balance, living wages, and accredited local green jobs.',
        'Principle 07 (Circular Economy) & 08 (Strong Governance): Cradle-to-cradle hardware lifecycles with decommissioning escrows and transparent open spatial data.',
        'Emphasize how these 8 principles provide concrete, auditable guidelines for developers, lenders, and regulators.'
      ],
      transitionCue: 'Next, unpack the Six Action Labs & Systemic Prototypes, starting with Part 1 on Slide 5.'
    }
  },
  {
    id: 5,
    slug: 'prototypes-part-1',
    masthead: 'ACTION LABS & SYSTEMIC PROTOTYPES · PART 1',
    kicker: 'ACTION LABS & SYSTEMIC PROTOTYPES',
    title: 'Prototypes 1–3: Siting, Innovation & Co-Ownership',
    subtitle: 'Pioneering proactive spatial intelligence, shared-use agro-marine hubs, and direct community equity architectures.',
    presenterNotes: {
      duration: '2.0 min',
      keyMessage: 'Part 1 focuses on proactive spatial planning and legal-financial community ownership before breaking ground.',
      talkingPoints: [
        'Prototype 1: RE Compass — Integrated with the Philippine Geoportal (GeoPH) under the National Mapping and Resource Information Authority (NAMRIA - Philippine central mapping agency).',
        'Prototype 2: Regenerative RE Hub — Co-designing agrivoltaics, floating solar + aquaculture, and offshore wind with Local Government Units (LGUs).',
        'Prototype 3: Co-Own Energy Futures (#co-own) — Structuring community equity trusts, cooperative shares, and board voting governance.'
      ],
      transitionCue: 'Continue to Slide 6 for Part 2 of the systemic prototypes, focusing on rural banking, catalytic capital, and circular lifecycles.'
    }
  },
  {
    id: 6,
    slug: 'prototypes-part-2',
    masthead: 'ACTION LABS & SYSTEMIC PROTOTYPES · PART 2',
    kicker: 'ACTION LABS & SYSTEMIC PROTOTYPES',
    title: 'Prototypes 4–6: Finance & Circular Futures',
    subtitle: 'Upskilling rural lenders, orchestrating regenerative capital, and institutionalizing circular hardware lifecycles.',
    presenterNotes: {
      duration: '2.0 min',
      keyMessage: 'Part 2 establishes financial enablers and cradle-to-grave circular hardware policies.',
      talkingPoints: [
        'Prototype 4: RE Collab / ESG Mentorship for Rural Banks — Upskilling regional banks with Environmental, Social, and Governance (ESG) frameworks to fund local RE.',
        'Prototype 5: Just and Regenerative Capital Orchestrator — Aggregating blended and concessional capital to de-risk high-integrity community tranches.',
        'Prototype 6: Circular RE Futures — Institutionalizing Extended Producer Responsibility (EPR), PV recycling logistics, and decommissioning escrow accounts.'
      ],
      transitionCue: 'Advance to Slide 7 for the deep-dive focus areas and an open invitation to collaborate with REI Philippines.'
    }
  },
  {
    id: 7,
    slug: 'deep-dive-transition',
    masthead: 'COLLABORATION, DEEP DIVES & INVITATION',
    kicker: 'COLLABORATIVE INVITATION & DEEP DIVES',
    title: 'From Overview to Deep Dives & Action',
    subtitle: 'Exploring Co-Ownership and Circularity, with an open invitation to partner, pilot, and institutionalize systemic prototypes.',
    presenterNotes: {
      duration: '1.5 min',
      keyMessage: 'We now transition from the macro overview to focused deep dives on Co-Ownership and Circularity, alongside an open invitation to partner.',
      talkingPoints: [
        'Framing: While all six prototypes are vital, our immediate deep-dive focus is on Co-Own Energy Futures and Circular RE Futures.',
        'Deep Dive 1: Co-Ownership Models — Navigating 25-year lifecycle governance, community equity trusts, and cooperative dividend structures.',
        'Deep Dive 2: Circular RE Futures — Institutionalizing Extended Producer Responsibility (EPR), tropical durability, and decommissioning escrows.',
        'Open Invitation: Invite attendees and partners to reach out directly to Jonathan Catalla at j.catalla@forumforthefuture.org to co-design pilots, test tools, or join the steering inquiry.',
        'Thank participants and open the floor for deep-dive discussions and partnership inquiries.'
      ],
      transitionCue: 'Conclude the presentation deck and open for partnership inquiries and discussions!'
    }
  }
];

export const NATIONAL_TARGETS = [
  {
    year: '2030',
    target: '35%',
    label: 'Target RE Share by 2030',
    description: 'Mandated clean energy share in Philippine power generation mix under the National Renewable Energy Program (NREP).',
    detail: '~15,000 MW of new solar, wind, hydro, and biomass required.'
  },
  {
    year: '2040',
    target: '50%',
    label: 'Target RE Share by 2040',
    description: 'Aspirational milestone transitioning the national grid toward clean base-load and distributed resilience.',
    detail: 'Demands deep integration of offshore wind, long-duration storage, and local equity.'
  }
];

export const FRICTION_POINTS: FrictionPoint[] = [
  {
    id: 'land-sea-competition',
    title: 'Land & Sea Competition',
    subtitle: 'Siting competition across food baskets, municipal waters, and ancestral domains.',
    iconName: 'MapPin',
    tag: 'Land & Marine',
    categoryTag: 'Land & Marine',
    groundTension: 'Laguna de Bay Floating Solar Moratorium',
    detail: 'Utility-scale floating solar, wind farms, and agro-solar projects increasingly collide with artisanal fishing lanes, prime food crops, and Certificate of Ancestral Domain Title (CADT) lands.',
    phCase: 'In Laguna de Bay, proposed 2,000+ hectare floating solar arrays overlap with traditional fishing waters supporting over 13,000 artisanal fisherfolk families and local duck raising.',
    systemicFix: 'Early spatial screening via RE Compass prioritizing multi-use zoning, brownfields, and agro-marine co-existence protocols.',
    systemicBottlenecks: 'Single-purpose land and water concessions awarded without prior spatial reconciliation across municipal fisheries, DA Strategic Agriculture and Fisheries Development Zones (SAFDZ), and NCIP ancestral domain mapping.',
    bankabilityRisks: 'Litigation, permit halts, court injunctions, and community blockades escalate financing costs, jeopardize PPAs, and risk stranded assets.',
    impactOnSocialLicense: 'Perception of clean energy as a hostile spatial land/water grab displacing rural livelihoods for urban electricity supply.'
  },
  {
    id: 'data-mapping-blindspots',
    title: 'Spatial Data Silos',
    subtitle: 'Lack of integrated spatial data overlaying generation yield with ecological and social constraints.',
    iconName: 'Layers',
    tag: 'Spatial Data',
    categoryTag: 'Spatial Data',
    groundTension: 'Unaligned Agency Permitting Layers',
    detail: 'Developers evaluate project viability using commercial resource yields (solar irradiance/wind speed) while lacking integrated geospatial layers on biodiversity corridors, typhoons, and indigenous cultural lands.',
    phCase: 'Wind and solar concessions overlapping protected migratory bird flyways, critical watersheds, and ancestral domain boundaries due to fragmented agency GIS datasets.',
    systemicFix: 'Integration with Philippine Geoportal (GeoPH) under NAMRIA for unified multi-criteria zoning and transparent sensitivity overlays.',
    systemicBottlenecks: 'Data silos between DOE (energy concessions), DENR-BMB (biodiversity & protected areas), NCIP (ancestral domains), and LGUs (Comprehensive Land Use Plans - CLUP).',
    bankabilityRisks: 'Late discovery of ecological and social red flags during EIA causing costly route redesigns, delayed commercial operation dates (COD), or project cancellation.',
    impactOnSocialLicense: 'Erosion of institutional credibility when developers claim ignorance of long-established indigenous territories or key biodiversity habitats.'
  },
  {
    id: 'community-trust-deficits',
    title: 'Community Trust Deficits',
    subtitle: 'Superficial public hearings and transactional CSR that leave local communities disenfranchised.',
    iconName: 'Users',
    tag: 'Trust Deficits',
    categoryTag: 'Trust Deficits',
    groundTension: 'Procedural FPIC vs. Living Consent',
    detail: 'Standard practice reduces community engagement to statutory Energy Regulations 1-94 charity handouts, while 100% of dividends flow to external capital without local governance representation.',
    phCase: 'Host communities receiving token streetlights and occasional relief packs while bearing grid disruption, inflated local tariffs, and zero voting voice on corporate boards.',
    systemicFix: 'Bayanihan Co-Ownership: Community equity trusts, carried shares, and voting seats on project Special Purpose Vehicle (SPV) boards.',
    systemicBottlenecks: 'Extractive development paradigm treating host populations as passive recipients of regulatory CSR mitigation rather than co-investors and primary rights-holders.',
    bankabilityRisks: 'Local ordinance moratoria, civil society campaigns, protracted legal challenges under IPRA, and physical project blockades.',
    impactOnSocialLicense: 'Persistent skepticism toward RE developers, breeding adversarial community relations that last across the 25-year operational lifecycle.'
  },
  {
    id: 'capital-financing-gaps',
    title: 'Capital Barriers',
    subtitle: 'Commercial debt terms that subordinate community equity and overlook ecological restoration costs.',
    iconName: 'Coins',
    tag: 'Capital Flows',
    categoryTag: 'Capital Flows',
    groundTension: 'Sub-10MW Rural Bank Underwriting Gap',
    detail: 'Commercial project finance models prioritize single-bottom-line investor returns, imposing aggressive debt service coverage ratios that squeeze out community equity participation and post-decommissioning restoration budgets.',
    phCase: 'Local cooperatives and municipal energy trusts unable to meet 20% commercial upfront equity hurdles for distributed renewable energy microgrids and community solar.',
    systemicFix: 'Just & Regenerative Capital Orchestrator: Blended first-loss concessional capital de-risking community stakes and enabling local bank lending.',
    systemicBottlenecks: 'Domestic commercial and rural banks lack tailored ESG underwriting frameworks for community-owned assets and demand rigid corporate parent guarantees.',
    bankabilityRisks: 'High cost of capital for community-aligned models forces developers into extractive, non-participatory project structures, creating single-point financial failure.',
    impactOnSocialLicense: 'Capital concentration in large conglomerates reinforces economic inequality in rural provinces while blocking local wealth retention.'
  },
  {
    id: 're-waste-circularity',
    title: 'RE Waste Circularity',
    subtitle: 'Absence of domestic PV/battery recycling, decommissioning escrows, and Extended Producer Responsibility (EPR).',
    iconName: 'RefreshCw',
    tag: 'Circularity',
    categoryTag: 'Circularity',
    groundTension: 'Impending PV/BESS Landfill Surge',
    detail: 'Gigawatt-scale deployment of solar PV, wind turbine blades, and battery storage (BESS) is accelerating without mandatory take-back infrastructure, certified e-waste recyclers, or ring-fenced decommissioning funds.',
    phCase: 'Over 200,000+ metric tons of decommissioned solar panels and toxic battery chemistry projected to reach Philippine municipal landfills by 2040 without domestic recovery facilities.',
    systemicFix: 'Circular RE Futures: Institutionalizing national EPR frameworks (RA 11898), digital component passports, and mandatory decommissioning escrows at financial close.',
    systemicBottlenecks: 'Zero domestic certified PV/battery recycling facilities, lack of EPR enforcement for clean tech hardware importers, and absent DENR circularity standards for RE assets.',
    bankabilityRisks: 'Unfunded end-of-life liabilities, toxic environmental contamination penalties, expensive repowering delays, and international ESG investor downgrades.',
    impactOnSocialLicense: 'Rural host LGUs and agricultural communities left to manage hazardous toxic hardware waste decades after commercial energy contracts expire.'
  }
];

export const STAKEHOLDER_SECTORS: StakeholderSector[] = [
  {
    id: 'civil-society',
    name: 'Civil Society & Host Communities',
    shortLabel: 'CSO & Communities',
    role: 'Rights, Equity & Community Voice',
    description: 'Grassroots organizations, indigenous federations, fisherfolk associations, and labor unions advocating for human rights, ecological integrity, and democratic governance.',
    systemicRole: 'Stewards Free, Prior and Informed Consent (FPIC), monitors supply chain human rights, facilitates community organizing, and advocates for democratic benefit-sharing.',
    keyPriorities: [
      'Institutionalizing Living Consent protocols across ancestral domains and fishing grounds',
      'Protecting critical biodiversity corridors and local food security systems',
      'Enforcing decent work standards, local hiring, and fair labor transitions',
      'Securing democratic governance seats on project boards and community equity trusts'
    ],
    collaborationOpportunity: 'Co-designing community equity structures, grievance mechanisms, and participatory spatial monitoring frameworks with developers and financiers.',
    iconName: 'UsersRound',
    badgeColor: 'border-[#F4BE3E] text-[#F4BE3E] bg-[#F4BE3E]/10'
  },
  {
    id: 're-developers',
    name: 'RE Developers & IPPs',
    shortLabel: 'Developers & IPPs',
    role: 'Project Origination & Clean Power Generation',
    description: 'Renewable energy developers, engineering contractors, and independent power producers (IPPs) deploying utility-scale solar, onshore/offshore wind, hydro, and battery systems.',
    systemicRole: 'Adopts responsible spatial siting, embeds circular procurement standards, implements multi-use designs (agro-solar, floating PV), and operationalizes community partnership models.',
    keyPriorities: [
      'De-risking project permitting through early spatial conflict screening',
      'Building durable social license that prevents legal delays and community blockades',
      'Implementing high-durability hardware suited for tropical Philippine climates',
      'Establishing predictable 25-year operational partnerships with host LGUs and landowners'
    ],
    collaborationOpportunity: 'Piloting the Responsible Energy Compass, multi-use zoning archetypes, and early community co-ownership agreements.',
    iconName: 'Zap',
    badgeColor: 'border-[#0055FF] text-[#0055FF] bg-[#0055FF]/10'
  },
  {
    id: 'finance-investors',
    name: 'Finance & Capital Providers',
    shortLabel: 'Banks & Financiers',
    role: 'Capital Allocation & Project Bankability',
    description: 'Commercial banks, development finance institutions (DFIs), sovereign funds, and impact investors underwriting clean energy assets and grid infrastructure.',
    systemicRole: 'Integrates rigorous ESG and human rights due diligence into underwriting, standardizes first-loss de-risking tranches, and finances community equity participation.',
    keyPriorities: [
      'Protecting project bankability and debt service coverage ratios (DSCR)',
      'Developing blended and concessional first-loss capital facilities for high-integrity projects',
      'Mitigating regulatory and social license risks across multi-decade loan lifecycles',
      'Demanding verifiable ESG metrics and ring-fenced post-decommissioning escrows'
    ],
    collaborationOpportunity: 'Structuring blended capital facilities, community equity loan guarantees, and ring-fenced decommissioning escrow funds.',
    iconName: 'Coins',
    badgeColor: 'border-[#059669] text-[#059669] bg-[#059669]/10'
  },
  {
    id: 'academe',
    name: 'Academe & Research',
    shortLabel: 'Research & Academe',
    role: 'Evidence, Modeling & Capacity Building',
    description: 'Universities, think tanks, research institutes, and technical training centers providing independent scientific evidence, geospatial analysis, and workforce development.',
    systemicRole: 'Provides objective data on tropical hardware degradation, grid integration dynamics, marine ecosystem impacts, and equitable economic multiplier effects.',
    keyPriorities: [
      'Publishing open-access geospatial datasets integrated with NAMRIA / GeoPH',
      'Conducting Lifecycle Assessments (LCA) for tropical solar and wind degradation',
      'Developing localized green-collar technical curricula for clean energy technicians',
      'Providing independent socio-economic baseline studies for host communities'
    ],
    collaborationOpportunity: 'Joint spatial mapping with Philippine Geoportal (GeoPH), circularity testing for humid tropical climates, and policy briefs.',
    iconName: 'GraduationCap',
    badgeColor: 'border-[#8B5CF6] text-[#8B5CF6] bg-[#8B5CF6]/10'
  },
  {
    id: 'government',
    name: 'Government & Regulators',
    shortLabel: 'Regulators & LGUs',
    role: 'Policy, Permitting & Public Interest',
    description: 'National regulatory agencies (DOE, DENR, NCIP, ERC, DA) and Local Government Units (LGUs) governing energy concessions, land use, and regulatory compliance.',
    systemicRole: 'Harmonizes inter-agency permitting, enforces Extended Producer Responsibility (EPR), aligns Comprehensive Land Use Plans (CLUP), and safeguards public interest in the energy commons.',
    keyPriorities: [
      'Accelerating responsible permitting without bypassing environmental and social safeguards',
      'Enforcing Extended Producer Responsibility (EPR) and clean-tech waste recycling standards',
      'Maximizing local economic benefits via ER 1-94 funds, local taxes, and livelihood programs',
      'Aligning spatial concessions with national food security and protected area networks'
    ],
    collaborationOpportunity: 'Institutionalizing responsible RE guidelines into national concession bidding, LGU Comprehensive Land Use Plans (CLUP), and e-waste policies.',
    iconName: 'Landmark',
    badgeColor: 'border-[#D97706] text-[#D97706] bg-[#D97706]/10'
  }
];

export const CONSORTIUM_PARTNERS: ConsortiumPartner[] = [
  {
    id: 'forum',
    name: 'Forum for the Future',
    acronym: 'Forum',
    fullName: 'Forum for the Future',
    role: 'Initiative Lead & Systems Facilitation',
    thematicDomain: 'Systems Thinking & Governance Lead',
    description: 'International sustainability non-profit convening transformative transitions and steering the global Responsible Energy Initiative across Asia.',
    domain: 'Futures Architecture & Systems Convening',
    badgeColor: 'border-[#0055FF] text-[#0055FF] bg-[#F8FAFC]',
    logo: '/logos/forum.svg',
    isSecretariatLead: true,
    strategicContribution: 'Convenes the cross-sector coalition, anchors systems-change methodologies, and stewards the development of generative business models and systemic prototypes.',
    leadArena: 'Systemic Governance & Net Positive Transition Frameworks',
    keyDeliverables: [
      'Global REI methodology adaptation for Philippine socio-ecological realities',
      'Systemic inquiry roundtables bridging developers, financiers, and civil society',
      'Orchestrator for the Regenerative RE Hub & Capital Alignment prototypes'
    ]
  },
  {
    id: 'fes',
    name: 'FES Philippines',
    acronym: 'FES',
    fullName: 'Friedrich-Ebert-Stiftung (FES)',
    role: 'Labor Rights & Social Democracy',
    thematicDomain: 'Labor Rights & Just Transition (Forum Host & SC Partner)',
    description: 'Promoting social justice, labor rights, and trade union empowerment in the energy transition to ensure dignified livelihoods.',
    domain: 'Labor Standards & Just Transition Policy',
    badgeColor: 'border-[#F6AD55] text-[#F6AD55] bg-[#F6AD55]/10',
    logo: '/logos/fes.svg',
    strategicContribution: 'Champions labor union participation, collective bargaining agreements, green job quality certification, and social protection for transition-affected workers.',
    leadArena: 'Decent Work Benchmarks, Trade Union Dialogue & Social Protection',
    keyDeliverables: [
      'Decent Work Standards for utility-scale solar and wind construction/O&M',
      'Just Transition Bargaining Toolkits for energy sector labor unions',
      'Reskilling and social protection policy proposals for fossil workers'
    ]
  },
  {
    id: 'centre',
    name: 'The CentRE',
    acronym: 'CentRE',
    fullName: 'Center for Empowerment, Innovation and Training on Renewable Energy (The CentRE)',
    role: 'National Secretariat Co-Anchor & Technical Lead',
    thematicDomain: 'Community Energy Transitions & Technical Co-Anchor',
    description: 'Premier Philippine energy democracy coalition driving spatial mapping, community energy models, and subnational renewable energy policy.',
    domain: 'Policy Reform & RE Compass Spatial Modeling',
    badgeColor: 'border-[#0055FF] text-[#0055FF] bg-[#F8FAFC]',
    logo: '/logos/centre.svg',
    isSecretariatCoAnchor: true,
    strategicContribution: 'Leads spatial data integration with NAMRIA / GeoPH for RE Compass and pilots community co-ownership mechanisms across rural off-grid and grid-tied systems.',
    leadArena: 'Spatial Siting Intelligence, NAMRIA Integration & Energy Democracy',
    keyDeliverables: [
      'RE Compass Multi-Criteria Geospatial Decision Support Tool',
      'Technical guidelines for Agrivoltaic and Floating Solar co-existence',
      'Policy advocacy on municipal net-metering and cooperative energy licensing'
    ]
  },
  {
    id: 'oxfam',
    name: 'Oxfam Pilipinas',
    acronym: 'Oxfam',
    fullName: 'Oxfam Pilipinas',
    role: 'Community Rights & Social Justice',
    thematicDomain: 'Human Rights, Gender Equity & Living Consent',
    description: 'Advancing women’s leadership, indigenous self-determination, and Free, Prior, and Informed Consent (FPIC) across vulnerable frontlines.',
    domain: 'Community Rights & Living Consent Guardrails',
    badgeColor: 'border-[#68D391] text-[#68D391] bg-[#68D391]/10',
    logo: '/logos/oxfam.svg',
    strategicContribution: 'Safeguards human rights, indigenous sovereignty over ancestral domains, gender equality, and participatory FPIC protocols across all project stages.',
    leadArena: 'FPIC Protocols, Gender-Inclusive Energy & Community Rights Advocacy',
    keyDeliverables: [
      'Living Consent Framework moving beyond transactional checkbox compliance',
      'Gender-responsive impact assessment toolkits for RE host communities',
      'Frontline community legal defense and grievance mechanism design'
    ]
  },
  {
    id: 'oep',
    name: 'Ocean Energy Pathway',
    acronym: 'OEP',
    fullName: 'Ocean Energy Pathway (OEP)',
    role: 'Offshore Wind & Marine Governance',
    thematicDomain: 'Marine Spatial Planning & OSW Siting',
    description: 'Global non-profit dedicated to accelerating sustainable, equitable offshore wind and marine energy in coastal ecosystems.',
    domain: 'Offshore Wind Siting & Marine Spatial Co-Existence',
    badgeColor: 'border-[#4FD1C5] text-[#4FD1C5] bg-[#4FD1C5]/10',
    logo: '/logos/oep.svg',
    strategicContribution: 'Guides marine spatial planning, offshore wind concession boundaries, port infrastructure readiness, and coastal community co-existence models.',
    leadArena: 'Marine Spatial Planning, OSW Environmental Standards & Fisherfolk Equity',
    keyDeliverables: [
      'Philippine Offshore Wind Marine Co-Existence Best Practice Protocols',
      'Coastal Community & Artisanal Fisherfolk Benefit Agreement Templates',
      'Environmental baseline standards for subsea transmission and turbine anchoring'
    ]
  },
  {
    id: 'icsc',
    name: 'ICSC',
    acronym: 'ICSC',
    fullName: 'Institute for Climate and Sustainable Cities (ICSC)',
    role: 'Climate Policy & Power System Analytics',
    thematicDomain: 'Grid Analytics & Energy Economics',
    description: 'Manila-based international climate and energy policy think-tank advancing fair energy transitions and grid reliability modeling.',
    domain: 'Power System Analytics & Just Transition Economics',
    badgeColor: 'border-[#63B3ED] text-[#63B3ED] bg-[#63B3ED]/10',
    logo: '/logos/icsc.svg',
    strategicContribution: 'Delivers rigorous power system flexibility modeling, grid dispatch analytics, and macroeconomic arguments for decentralized clean energy.',
    leadArena: 'Grid Integration Modeling, Tariff Analytics & Macro Transition Policy',
    keyDeliverables: [
      'Philippine Power Sector Flexibility & RE Absorption Studies',
      'Rural Bank ESG Mentorship and Concessional Finance Frameworks',
      'Just Transition economic roadmaps for coal-dependent provincial workforces'
    ]
  },
  {
    id: 'bhrc',
    name: 'BHRC',
    acronym: 'BHRC',
    fullName: 'Business & Human Rights Centre (BHRC)',
    role: 'Human Rights & Corporate Accountability',
    thematicDomain: 'Corporate Accountability & Supply Chains',
    description: 'Tracking corporate human rights performance and supply chain transparency across renewable energy supply chains globally.',
    domain: 'Corporate Accountability & Supply Chain Justice',
    badgeColor: 'border-[#FC8181] text-[#FC8181] bg-[#FC8181]/10',
    logo: '/logos/bhrc.svg',
    strategicContribution: 'Monitors corporate human rights due diligence (HRDD), supply chain labor standards, and transparent grievance mechanisms across RE developers and financiers.',
    leadArena: 'Supply Chain Transparency, Human Rights Due Diligence & ESG Benchmarks',
    keyDeliverables: [
      'Renewable Energy Human Rights Benchmark tracking Philippine developers',
      'Responsible Mineral Sourcing & Hardware Supply Chain Due Diligence Guide',
      'Escalation protocols for human rights and environmental defender security'
    ]
  }
];

export const FOUNDATIONAL_PILLARS: FoundationalPillar[] = [
  {
    id: 'ecological-security',
    number: '01',
    name: 'Ecological Security',
    subtitle: 'Systemic Regeneration',
    tagline: 'Operating within planetary boundaries & restoring ecosystems',
    icon: 'Leaf',
    color: '#68D391',
    summary: 'Operating within planetary boundaries; moving beyond "zero harm" to actively restore ecosystems, soil, and water.',
    description: 'Ensuring renewable energy infrastructure avoids, protects, restores, and enhances terrestrial, freshwater, and marine biodiversity throughout design and operations.',
    systemicRationale: 'Renewable energy deployment must never cause net ecological degradation. Infrastructure logic must shift from "least-cost" engineering to a regenerative "most-benefit" paradigm that replenishes host watersheds and enriches local ecosystems.',
    paradigmShift: {
      from: 'Minimizing negative Environmental Impact Assessment (EIA) damage and regulatory fines.',
      to: 'Net Positive biodiversity renewal, watershed stewardship, and soil/marine regeneration.'
    },
    standards: [
      'Strict Avoid–Protect–Restore–Enhance mitigation hierarchy applied before concession demarcation',
      'Zero development in Category 1 Protected Areas and designated Key Biodiversity Areas (KBAs)',
      'Mandatory ecological baseline tracking for avian, bat, and marine mammal populations',
      'Dual-use agrivoltaic and agro-marine layouts maintaining at least 80% baseline agricultural or fishery yield'
    ],
    groundImperative: 'Prevents mega-projects from compromising Philippine biodiversity hotspots, critical coral reefs, and prime agricultural food sheds.'
  },
  {
    id: 'social-justice',
    number: '02',
    name: 'Social Justice',
    subtitle: 'Participatory Rights',
    tagline: 'Treating host communities as sovereign rights-holders',
    icon: 'Scale',
    color: '#F4BE3E',
    summary: 'Treating host communities as sovereign rights-holders; respecting land tenure, cultural heritage, and human rights.',
    description: 'Embedding human rights, gender equity, and Indigenous self-determination—evolving from checklist compliance to dynamic, perpetual Living Consent.',
    systemicRationale: 'Clean energy projects built on unconsented land or contested waters are fundamentally illegitimate and bankability-compromised. Social justice elevates communities from passive stakeholders into co-decision makers with binding veto and equity rights.',
    paradigmShift: {
      from: 'One-off transactional FPIC hearings and token Corporate Social Responsibility (CSR) handouts.',
      to: 'Continuous Living Consent, legal co-ownership trusts, and transparent dispute mechanisms.'
    },
    standards: [
      'Continuous "Living Consent" protocols active throughout construction, 25-year operations, and repowering',
      'Independent, community-managed grievance and dispute resolution mechanisms with zero retaliation',
      'Gender-differentiated impact assessments ensuring women’s direct participation in governing bodies',
      'Legally enforceable Benefit Sharing Agreements (BSAs) established prior to financial close'
    ],
    groundImperative: 'Protects Certificate of Ancestral Domain Title (CADT) holders and artisanal fisherfolk from involuntary displacement and unconsulted concessions.'
  },
  {
    id: 'resilience',
    number: '03',
    name: 'Resilience',
    subtitle: 'Intergenerational Reciprocity',
    tagline: 'Building energy systems that endure climate shocks & share value',
    icon: 'Shield',
    color: '#63B3ED',
    summary: 'Building energy systems that endure climate shocks, secure local economies, and share value across generations.',
    description: 'Engineering energy assets, transmission networks, and microgrids to withstand super-typhoons, seismic shocks, and climate volatility while securing local power supply.',
    systemicRationale: 'As the world’s most disaster-exposed nation to tropical cyclones, Philippine clean energy systems must serve as frontline disaster shelters and economic stabilizers, creating permanent multi-generational resilience.',
    paradigmShift: {
      from: 'Fragile centralized export-only power plants susceptible to grid collapse and local blackouts.',
      to: 'Disaster-hardened, community-backed lifeline microgrids and enduring municipal wealth.'
    },
    standards: [
      'Structural engineering certified for 280+ km/h sustained typhoon wind loads and storm surges',
      'Microgrid islanding capability providing continuous backup power to host barangay emergency centers',
      'Decentralized battery energy storage systems (BESS) co-located with local municipal loads',
      'Perpetual community equity structures ensuring steady dividend flows across multiple generations'
    ],
    groundImperative: 'Shields Philippine archipelagic communities from prolonged multi-week blackouts during annual extreme typhoon seasons.'
  }
];

export const SPECIFIC_PRINCIPLES: SpecificPrinciple[] = [
  {
    id: 'holistic',
    number: 1,
    name: 'Holistic Planning',
    shortDefinition: 'Interdependence of natural and community systems',
    fullDefinition: 'Energy systems must be planned and operated as interconnected ecological and human ecosystems, recognizing that water, soil, food, and culture are inextricably linked.',
    icon: 'Layers',
    tag: 'ECOLOGICAL',
    color: '#059669',
    downstreamEngine: 'RE Compass Engine',
    statutoryAnchors: ['PENCAS Act', 'EIA Technical Guidelines'],
    developerGuideline: 'Conduct integrated social-ecological carrying capacity and cumulative impact assessments across the entire watershed before demarcating concession perimeters.',
    operationalStandard: 'Cross-sector cumulative impact modeling integrating local hydrology, ancestral land boundaries, and municipal food sheds into project design.',
    indicators: [
      'Multi-factor baseline impact assessments completed before spatial demarcation',
      'Formally documented coordination with regional river basin and agricultural authorities'
    ]
  },
  {
    id: 'nature-positive',
    number: 2,
    name: 'Nature-Positive',
    shortDefinition: 'Restorative infrastructure operating within ecological carrying capacity',
    fullDefinition: 'Moving decisively beyond "zero harm" to actively regenerate degraded habitats, enrich topsoil, restore mangrove buffers, and enhance biodiversity.',
    icon: 'Sprout',
    tag: 'ECOLOGICAL',
    color: '#059669',
    downstreamEngine: 'Circular RE Futures',
    statutoryAnchors: ['ENIPAS Act', 'Joint Agri-Energy Guidelines'],
    developerGuideline: 'Prioritize brownfield sites, non-productive agricultural lands, and multi-use agro-marine platforms over pristine Key Biodiversity Areas (KBAs).',
    operationalStandard: 'Net Positive Biodiversity Restoration Plan backed by ring-fenced financial escrows, featuring native revegetation and wildlife monitoring.',
    indicators: [
      'Zero development footprint in IUCN Category 1 Protected Areas and designated KBAs',
      'Verified net positive gain in local species richness over a 10-year monitoring timeframe'
    ]
  },
  {
    id: 'people-centered',
    number: 3,
    name: 'People-Centered',
    shortDefinition: 'Valuing local and Indigenous wisdom; shared decision-making',
    fullDefinition: 'Placing host communities, smallholder farmers, artisanal fisherfolk, and Indigenous Peoples at the center of planning, technology choice, and governance.',
    icon: 'Users',
    tag: 'RIGHTS & SOCIAL',
    color: '#0055FF',
    downstreamEngine: 'RE Compass Spatial Protocols',
    statutoryAnchors: ['IPRA', 'Revised FPIC Guidelines'],
    developerGuideline: 'Integrate Traditional Ecological Knowledge (TEK) and community-led spatial preferences directly into project blueprints and operational rules.',
    operationalStandard: 'Participatory co-design workshops, permanent community liaison offices staffed by residents, and local community board representation.',
    indicators: [
      'Direct integration of community-identified culturally sensitive zones in spatial layouts',
      'Documented quarterly multi-stakeholder governance forums with binding inputs'
    ]
  },
  {
    id: 'rights-respecting',
    number: 4,
    name: 'Rights-Respecting',
    shortDefinition: 'Advancing from static FPIC checkboxes to continuous "Living Consent"',
    fullDefinition: 'Upholding the UN Declaration on the Rights of Indigenous Peoples (UNDRIP) and the Indigenous Peoples\' Rights Act (IPRA) through ongoing, dynamic dialogue and rights protection.',
    icon: 'ShieldCheck',
    tag: 'RIGHTS & SOCIAL',
    color: '#0055FF',
    downstreamEngine: 'Co-Own Energy Futures',
    statutoryAnchors: ['IPRA', 'UN Guiding Principles (UNGPs)'],
    developerGuideline: 'Transition from single-event FPIC certifications to continuous Living Consent frameworks with mandatory periodic renegotiations and non-retaliation protocols.',
    operationalStandard: 'Legally binding Benefit Sharing Agreements (BSAs), independent human rights due diligence (HRDD), and accessible dispute mediation mechanisms.',
    indicators: [
      'Zero unconsented land acquisitions or forced displacement across all supply chain tiers',
      'Independent third-party verification of FPIC compliance and grievance resolution'
    ]
  },
  {
    id: 'equity-inclusion',
    number: 5,
    name: 'Equity & Inclusion',
    shortDefinition: 'Democratizing outcomes; fair benefit-sharing for women and Indigenous Peoples',
    fullDefinition: 'Ensuring that marginalized groups, women, rural youth, and vulnerable frontline sectors receive equitable power, economic returns, and access to clean energy.',
    icon: 'HeartHandshake',
    tag: 'LABOR & GOVERNANCE',
    color: '#0284C7',
    downstreamEngine: 'RE Hub Just Skills Labs',
    statutoryAnchors: ['RE Act (Sec. 31)', 'ER 1-94 Guidelines'],
    developerGuideline: 'Structure direct community equity shares, subsidized local electricity tariffs, and dedicated capacity-building programs for women and youth.',
    operationalStandard: 'Minimum 30% women representation on community oversight bodies and direct allocation of project revenues to municipal trust funds.',
    indicators: [
      'Annual audited dividend distributions delivered directly to local community trusts',
      'Gender-balanced leadership representation across community energy management committees'
    ]
  },
  {
    id: 'dignified-work',
    number: 6,
    name: 'Dignified Work',
    shortDefinition: 'Safe working conditions, living wages, and equitable green job creation',
    fullDefinition: 'Guaranteeing occupational health and safety, freedom of association, collective bargaining, and accredited green skill training for local workforces.',
    icon: 'Briefcase',
    tag: 'LABOR & GOVERNANCE',
    color: '#0284C7',
    downstreamEngine: 'NAMRIA GeoPH Thematic Node',
    statutoryAnchors: ['OSH Standards', 'Green TVET Framework'],
    developerGuideline: 'Mandate ILO Core Labor Standards, living wage minimums, and local hiring quotas across all engineering, procurement, and construction (EPC) contracts.',
    operationalStandard: 'DOLE-certified safety protocols, accredited TESDA technical apprenticeships, and binding collective bargaining agreements with trade unions.',
    indicators: [
      'Minimum 50% local hiring quota achieved for construction and long-term O&M roles',
      '100% of primary contractors certified for living wage compliance and safety standards'
    ]
  },
  {
    id: 'circular-economy',
    number: 7,
    name: 'Circular Economy',
    shortDefinition: 'Lifecycle governance for solar PV, wind, and batteries to avoid future toxic liabilities',
    fullDefinition: 'Embedding cradle-to-cradle principles, material traceability, design for disassembly, and certified recycling infrastructure across clean energy hardware.',
    icon: 'RefreshCw',
    tag: 'CAPITAL & CIRCULARITY',
    color: '#D97706',
    downstreamEngine: 'Capital Orchestrator & RE Collab',
    statutoryAnchors: ['EPR Act of 2022', 'Toxic & Hazardous Wastes Act'],
    developerGuideline: 'Institute Extended Producer Responsibility (EPR) contracts and ring-fence decommissioning escrow accounts upon commercial project kickoff.',
    operationalStandard: 'Digital hardware Bill of Materials (BOM) logging, non-hazardous component procurement, and certified e-waste recycling partnerships.',
    indicators: [
      'Dedicated decommissioning escrow fund fully provisioned starting from Year 1',
      'Target 90%+ material recovery rate for solar glass, aluminum frames, and critical minerals'
    ]
  },
  {
    id: 'strong-governance',
    number: 8,
    name: 'Spatial Multi-Use',
    shortDefinition: 'Multi-directional data sharing, participatory monitoring, and public accountability',
    fullDefinition: 'Establishing transparent, multi-stakeholder institutional architectures with open spatial data, public ESG reporting, and legal recourse.',
    icon: 'Building2',
    tag: 'CAPITAL & CIRCULARITY',
    color: '#D97706',
    downstreamEngine: 'Regenerative RE Hub (Agri/Aquavoltaics)',
    statutoryAnchors: ['Sustainable Finance Framework', 'PENCAS Act'],
    developerGuideline: 'Publish spatial mapping, environmental monitoring data, and compliance audits on public platforms such as the NAMRIA Philippine Geoportal (GeoPH).',
    operationalStandard: 'Tripartite project advisory committees (LGU, community, developer) with publicly disclosed performance scorecards and whistleblowing protections.',
    indicators: [
      'Open-access project environmental baseline data published on national portals',
      'Publicly auditable grievance logs with mandatory 30-day resolution windows'
    ]
  }
];

export const STRUCTURAL_COMMITMENTS: StructuralCommitment[] = [
  {
    id: 'people-centered-commitment',
    number: '01',
    title: 'People-Centered & Rights-Respecting Approach',
    icon: 'Users',
    tag: 'COMMUNITY SOVEREIGNTY',
    color: '#F4BE3E',
    summary: 'Codified via Co-Own Energy Futures (#co-own) and Living Consent protocols.',
    mandate: 'Elevating communities from passive neighbors to equity shareholders with voting rights, dividend distributions, and continuous consent protocols.',
    linkedPrototypes: ['Prototype 03: Co-Own Energy Futures', 'Prototype 01: RE Compass (Spatial Screening)'],
    partnerPractice: 'Oxfam Pilipinas and ICSC lead the development of community trust legal charters, gender-responsive impact toolkits, and Indigenous FPIC monitoring.',
    coreDeliverables: [
      'Model Community Equity Trust Agreement templates under Philippine corporate and cooperative law',
      'Living Consent Framework for continuous monitoring throughout 25-year asset operations',
      'Frontline human rights defender security and grievance escalation mechanisms'
    ]
  },
  {
    id: 'restorative-circular-commitment',
    number: '02',
    title: 'Restorative & Circular Innovation',
    icon: 'RefreshCw',
    tag: 'ECOLOGICAL REGENERATION',
    color: '#68D391',
    summary: 'Codified via Circular RE Futures and Regenerative RE Hub.',
    mandate: 'Mandating agrivoltaics and aquavoltaics dual-use layouts alongside cradle-to-cradle Extended Producer Responsibility (EPR) hardware recycling escrows.',
    linkedPrototypes: ['Prototype 02: Regenerative RE Hub', 'Prototype 06: Circular RE Futures'],
    partnerPractice: 'CentRE and Ocean Energy Pathway (OEP) pioneer spatial dual-use engineering guidelines, marine co-existence charters, and solar PV recycling frameworks.',
    coreDeliverables: [
      'Philippine Extended Producer Responsibility (EPR) Solar PV & Battery Policy Roadmap',
      'Agrivoltaic Crop & Solar Yield Engineering Handbook for tropical smallholders',
      'Marine Spatial Co-Existence protocols for coastal artisanal fisherfolk'
    ]
  },
  {
    id: 'life-centered-governance-commitment',
    number: '03',
    title: 'Life-Centered Accountability & Strong Governance',
    icon: 'Building2',
    tag: 'TRANSPARENT INSTITUTIONS',
    color: '#63B3ED',
    summary: 'Codified via RE Compass (NAMRIA GeoPH) and Open ESG Data Portals.',
    mandate: 'Democratizing spatial planning, cumulative impact modeling, and open compliance tracking across national agencies, local governments, and civil society.',
    linkedPrototypes: ['Prototype 01: RE Compass', 'Prototype 04: Rural Bank ESG Mentorship'],
    partnerPractice: 'Forum for the Future and CentRE integrate national spatial data layers with NAMRIA GeoPH to enable proactive, conflict-free project siting.',
    coreDeliverables: [
      'National Multi-Criteria RE Spatial Decision-Support Engine on NAMRIA GeoPH',
      'Open-Source ESG Siting & Sourcing Screening Matrix for developers and financiers',
      'Tripartite local governance committee charters for host municipalities'
    ]
  },
  {
    id: 'dignified-work-commitment',
    number: '04',
    title: 'Dignified Work & Equitable Economics',
    icon: 'Briefcase',
    tag: 'SHARED WEALTH',
    color: '#F6AD55',
    summary: 'Codified via Just Capital Orchestrator and Decent Work Standards.',
    mandate: 'Channeling blended concessional capital to de-risk high-integrity community projects while guaranteeing union-protected living wages and local wealth retention.',
    linkedPrototypes: ['Prototype 05: Just Capital Orchestrator', 'Prototype 04: ESG Mentorship for Rural Banks'],
    partnerPractice: 'Friedrich-Ebert-Stiftung (FES) and BHRC establish decent work benchmarks, union collective bargaining toolkits, and supply chain human rights due diligence.',
    coreDeliverables: [
      'Blended Finance First-Loss Guarantee Structure for high-integrity community energy',
      'Decent Work & Green Job Quality Benchmark for utility-scale solar/wind construction and O&M',
      'Rural Bank ESG Underwriting and Subordinated Debt Toolkit'
    ]
  }
];

export const CORE_PRINCIPLES: CorePrinciple[] = [
  {
    id: 'ecological-security',
    number: '01',
    name: 'Ecological Security',
    tagline: 'Safeguarding ecosystems & biodiversity',
    icon: 'Leaf',
    color: '#68D391',
    description: 'Ensuring renewable energy infrastructure avoids, protects, restores, and enhances terrestrial, freshwater, and marine biodiversity throughout design and operations.',
    pillars: [
      'Strict Avoid–Protect–Restore–Enhance mitigation hierarchy',
      'Protection of Key Biodiversity Areas (KBAs) & wildlife corridors',
      'Agrivoltaic soil regeneration & marine co-existence design'
    ],
    philippineImperative: 'Prevents mega-projects from compromising Philippine biodiversity hotspots, critical coral reefs, and prime agricultural food sheds.',
    systemicRationale: 'Renewable energy deployment must never cause net ecological degradation. Siting and operational practices must actively contribute to habitat regeneration, watershed protection, and soil biodiversity.',
    actionableStandards: [
      'Zero development in Category 1 Protected Areas and designated Key Biodiversity Areas (KBAs)',
      'Mandatory ecological baseline tracking for avian, bat, and marine mammal populations',
      'Net Positive biodiversity restoration plan with ring-fenced escrow financing',
      'Agrivoltaic dual-use layouts maintaining at least 80% agricultural or fishery productivity'
    ],
    successIndicators: [
      '100% of newly commissioned projects located outside critical biodiversity corridors',
      'Verified zero net loss—and measurable net gain—in local species richness over 10-year monitoring',
      'Formal adoption of agrivoltaic and agro-marine co-use standards by national regulators'
    ]
  },
  {
    id: 'social-justice',
    number: '02',
    name: 'Social Justice',
    tagline: 'Upholding rights & living consent',
    icon: 'Scale',
    color: '#F4BE3E',
    description: 'Embedding human rights, gender equity, and Indigenous self-determination—evolving from checklist compliance to dynamic, perpetual Living Consent.',
    pillars: [
      'Rigorous Free, Prior, and Informed Consent (FPIC) on ancestral domains',
      'Meaningful stakeholder participation & transparent benefit agreements',
      'Zero tolerance for intimidation or displacement of land/sea defenders'
    ],
    philippineImperative: 'Protects Certificate of Ancestral Domain Title (CADT) holders and artisanal fisherfolk from involuntary displacement and unconsulted concessions.',
    systemicRationale: 'Energy infrastructure built on unconsented land or waters is fundamentally illegitimate. Social justice transforms host communities from passive neighbors into sovereign rights-holders with binding veto and co-design authority.',
    actionableStandards: [
      'Continuous "Living Consent" protocols throughout project construction, operation, and repowering',
      'Independent, community-managed grievance and dispute resolution mechanisms',
      'Gender-differentiated impact assessments ensuring women’s direct participation in governance',
      'Strict non-retaliation policies and protocols protecting environmental defenders'
    ],
    successIndicators: [
      'Zero rights violations or unconsented land conversions across consortium-screened sites',
      '100% of host ancestral domain communities having legally binding Benefit Sharing Agreements (BSAs)',
      'Documented, regular community feedback loops active throughout 25-year asset operations'
    ]
  },
  {
    id: 'resilience',
    number: '03',
    name: 'Resilience',
    tagline: 'Climate-proofing & local reliability',
    icon: 'Shield',
    color: '#63B3ED',
    description: 'Engineering energy assets, transmission networks, and microgrids to withstand super-typhoons, seismic shocks, and climate volatility while securing local power supply.',
    pillars: [
      'Category 5 typhoon-resilient structural mounting & floating platforms',
      'Island microgrids with decentralized battery storage resilience',
      'Rapid disaster restoration protocols for vulnerable coastal areas'
    ],
    philippineImperative: 'Shields Philippine archipelagic communities from prolonged multi-week blackouts during annual extreme typhoon seasons.',
    systemicRationale: 'The Philippines is the world’s most disaster-prone country to tropical cyclones. Clean energy systems must be designed as frontline climate shelters and lifeline power sources, rather than fragile centralized assets.',
    actionableStandards: [
      'Structural engineering certified for 280+ km/h sustained wind loads and storm surges',
      'Microgrid islanding capability providing continuous backup power to host barangay emergency centers',
      'Decentralized battery energy storage systems (BESS) co-located with local municipal loads',
      'Pre-negotiated rapid disaster replacement supply agreements with certified regional technicians'
    ],
    successIndicators: [
      'Less than 24-hour restoration time for local community lifeline circuits following extreme weather',
      'Zero structural failures of utility-scale racking or floating mooring systems during typhoons',
      'Measurable reduction in provincial diesel generator dependency across off-grid islands'
    ]
  },
  {
    id: 'dignified-work',
    number: '04',
    name: 'Dignified Work & Equitable Economics',
    tagline: 'Fair livelihoods & retained wealth',
    icon: 'HeartHandshake',
    color: '#F6AD55',
    description: 'Creating safe, unionized, and certified green jobs with living wages, gender equity, and business models that keep wealth permanently within host localities.',
    pillars: [
      'Decent, union-protected jobs with local hiring preferences',
      'Community equity co-ownership trusts & cooperative dividend distribution',
      'Fair supply chain procurement & worker upskilling programs'
    ],
    philippineImperative: 'Breaks the cycle of extractive energy enclaves by distributing direct equity dividends and technical training to local youth and workers.',
    systemicRationale: 'Clean electrons alone do not create a just society. The economic surplus generated by harnessing the Philippine sun, wind, and water must circulate locally, building intergenerational wealth and decent livelihoods.',
    actionableStandards: [
      'Living wage floors and full occupational safety certifications across construction and O&M',
      'Minimum 50% local workforce quotas backed by accredited technical apprenticeship programs',
      'Establishment of perpetual Community Equity Trusts holding voting shares and dividend rights',
      'Fair procurement guidelines prioritizing regional suppliers and cooperative maintenance contracts'
    ],
    successIndicators: [
      'Direct equity dividends paid annually to host community cooperatives and municipal trust funds',
      'Over 70% of long-term operational and technical jobs filled by local community members',
      '100% of construction and operations contractors bound by collective bargaining and safety standards'
    ]
  }
];

export const PROTOTYPES_PART_1: PrototypeWorkstream[] = [
  {
    id: 're-compass',
    number: '01',
    title: 'RE Compass (Spatial Governance)',
    leadIcon: 'Compass',
    shortTag: 'SPATIAL GOVERNANCE',
    institutionalArtifact: 'NAMRIA GeoPH Thematic Node',
    tableAssignment: 'Lab Table 1 (Spatial Screening)',
    leadAgency: 'FES · Forum · OEP',
    leadLogos: ['/logos/fes.svg', '/logos/forum.svg', '/logos/oep.svg'],
    mandate: 'Integrated with the Philippine Geoportal (GeoPH) under the National Mapping and Resource Information Authority (NAMRIA - Philippine central mapping agency). An interactive spatial decision-support platform overlaying solar/wind potential against biodiversity corridors, ancestral domains (CADT), natural hazards, and food systems to guide proactive siting.',
    keyOutputs: [
      'Philippine Geoportal (GeoPH) Integrated Spatial Layer',
      'Ancestral Domain (CADT) & KBA Sensitivity Overlay',
      'Marine Protected Area & Artisanal Fishing Co-Use Matrix'
    ],
    focusAreas: ['NAMRIA Integration', 'Brownfield Prioritization', 'FPIC Safeguards'],
    philippineImpact: 'Prevents spatial friction and costly court injunctions by routing projects toward low-conflict zones before commercial bidding.',
    technicalMechanism: 'Combines multi-spectral satellite imagery, LiDAR elevation models, and agency GIS datasets into an open multi-criteria evaluation engine. Generates composite sensitivity scores that flag spatial red zones (KBAs, CADT, fault lines) and highlights green zones (degraded lands, mine rehabilitation sites, dual-use agrivoltaics).',
    targetStakeholders: [
      'Department of Energy (DOE Renewable Energy Management Bureau)',
      'National Mapping and Resource Information Authority (NAMRIA)',
      'National Commission on Indigenous Peoples (NCIP)',
      'Commercial RE Developers and Provincial Planning Offices (PPDO)'
    ],
    systemicOutcome: 'De-risks upstream project development, eliminates blindspot concession bidding, and establishes transparent national spatial baselines accessible to LGUs and civil society.'
  },
  {
    id: 'regen-re-hub',
    number: '02',
    title: 'Regenerative RE Hub',
    leadIcon: 'Sprout',
    shortTag: 'AGRO-MARINE INNOVATION',
    institutionalArtifact: 'Agri/Aquavoltaic LGU Guidelines',
    tableAssignment: 'Lab Table 2 (Multi-Use Sites)',
    leadAgency: 'Forum',
    leadLogos: ['/logos/forum.svg'],
    mandate: 'A pre-competitive collaboration platform where renewable energy developers, Local Government Units (LGUs), and communities co-design shared-use marine and land spatial prototypes—demonstrating agrivoltaics, floating solar with aquaculture, and offshore wind co-designed with marine protected areas.',
    keyOutputs: [
      'Agrivoltaic Crop & Shade Yield Operational Guidelines',
      'Floating Solar & Inland Fisheries Aeration Blueprint',
      'LGU Model Joint-Use Siting Framework & Permitting SOP'
    ],
    focusAreas: ['Agrivoltaics', 'Aquaculture Co-Existence', 'LGU Model Ordinances'],
    philippineImpact: 'Proves clean energy can boost food security and artisanal fishery yields rather than displacing rural farming livelihoods.',
    technicalMechanism: 'Deploys multi-tier elevated mounting structures and adjustable-tilt bifacial solar modules allowing tractor access and optimal photosynthetically active radiation (PAR) for shade-tolerant crops. In aquatic environments, integrates submerged artificial reef structures and micro-bubble aeration systems beneath floating PV arrays.',
    targetStakeholders: [
      'Department of Agriculture (DA) & Bureau of Fisheries and Aquatic Resources (BFAR)',
      'Provincial & Municipal Local Government Units (LGUs)',
      'Farmer and Fisherfolk Cooperatives (Agrarian Reform Beneficiaries)',
      'Renewable Energy EPC and Operations & Maintenance contractors'
    ],
    systemicOutcome: 'Transforms solar and wind from single-purpose land/water competitors into regenerative infrastructure hubs that enhance agricultural productivity and preserve coastal ecosystems.'
  },
  {
    id: 'co-own',
    number: '03',
    title: 'Co-Own Energy Futures (#co-own)',
    leadIcon: 'UsersRound',
    shortTag: 'EQUITY & GOVERNANCE',
    institutionalArtifact: 'Standardized Equity / SPV Templates',
    tableAssignment: 'Lab Table 3 (Community Equity)',
    leadAgency: 'CentRE · Oxfam',
    leadLogos: ['/logos/centre.svg', '/logos/oxfam.svg'],
    mandate: 'A legal and financial framework establishing direct community equity ownership and democratic governance in utility-scale RE projects, transforming host populations from passive neighbors into long-term equity partners with board representation.',
    keyOutputs: [
      'Bayanihan Power Guidebook & Financial Structuring Toolkit',
      'Community Trust Articles of Incorporation & Shareholder Agreements',
      'Model LGU & Cooperative Equity Term Sheets'
    ],
    focusAreas: ['Voting Board Seats', 'Co-op Dividend Distribution', 'Sweat Equity Valuation'],
    philippineImpact: 'Shifts community benefits from token CSR charity into legally protected dividend income and direct decision-making power.',
    technicalMechanism: 'Structures a Special Purpose Vehicle (SPV) where a Community Trust or Local Cooperative holds 5% to 20% equity shares. Incorporates blended capital concessional debt or sweat equity (land leasing rights) to finance the community tranche, with statutory board voting seats and priority dividend waterfall allocations.',
    targetStakeholders: [
      'Host Barangay and Municipal Cooperatives',
      'Indigenous Cultural Communities (ICCs) and Tribal Councils',
      'Institutional Investors, Commercial Developers & Impact Funds',
      'Securities and Exchange Commission (SEC) & Cooperative Development Authority (CDA)'
    ],
    systemicOutcome: 'Unlocks rock-solid social license, eliminates project delays, aligns developer and community incentives for 25+ years, and creates sustainable provincial endowment wealth.'
  }
];

export const PROTOTYPES_PART_2: PrototypeWorkstream[] = [
  {
    id: 're-collab-esg',
    number: '04',
    title: 'RE Collab / ESG Mentorship for Rural Banks',
    leadIcon: 'GraduationCap',
    shortTag: 'RURAL FINANCE & ESG',
    institutionalArtifact: 'Rural Bank (RBAP) ESG Toolkits',
    tableAssignment: 'Lab Table 4 (Rural ESG Finance)',
    leadAgency: 'Oxfam',
    leadLogos: ['/logos/oxfam.svg'],
    mandate: 'Upskilling regional lenders and rural financial institutions with standardized Environmental, Social, and Governance (ESG) risk-assessment toolkits to unlock local capital and lower financing hurdles for community-centered renewable energy projects.',
    keyOutputs: [
      'Rural Bank ESG Due Diligence & Risk Rating Toolkit',
      'Community Energy Concessional Credit Appraisal Guide',
      'Training Modules for Provincial Loan Underwriters'
    ],
    focusAreas: ['ESG Risk Toolkits', 'Rural Credit Allocation', 'Local Bank Mentorship'],
    philippineImpact: 'Mobilizes domestic provincial capital to fund decentralized, community-owned renewable microgrids and rooftop solar.',
    technicalMechanism: 'Provides tailored credit scoring models and ESG risk matrixes calibrated for rural Philippine contexts under BSP Circulars 1085 and 1128. Enables rural banks and thrift institutions to underwrite small-to-midscale distributed RE projects without requiring prohibitive corporate parent balance sheet guarantees.',
    targetStakeholders: [
      'Rural Bankers Association of the Philippines (RBAP)',
      'Bangko Sentral ng Pilipinas (BSP - Central Bank Sustainable Finance Directorate)',
      'Agricultural Credit Policy Council (ACPC)',
      'Municipal Micro-Enterprises and Energy Cooperatives'
    ],
    systemicOutcome: 'Democratizes renewable energy financing by shifting reliance away from Metro Manila commercial conglomerates and activating rural savings for local clean energy infrastructure.'
  },
  {
    id: 'capital-orchestrator',
    number: '05',
    title: 'Just and Regenerative Capital Orchestrator',
    leadIcon: 'Coins',
    shortTag: 'BLENDED & CONCESSIONAL',
    institutionalArtifact: 'Blended First-Loss Facility',
    tableAssignment: 'Lab Table 5 (Blended Finance)',
    leadAgency: 'Forum',
    leadLogos: ['/logos/forum.svg'],
    mandate: 'A financial mechanism aggregating blended, concessional, and patient capital to de-risk high-integrity projects, provide first-loss guarantees, and insulate community equity tranches from commercial debt covenants.',
    keyOutputs: [
      'Blended First-Loss Facility Structuring Architecture',
      'Patient Equity Aggregation Mechanism for Cooperatives',
      'Impact Yield & Just Transition Metrics Verification Protocol'
    ],
    focusAreas: ['First-Loss De-Risking', 'Concessional Blending', 'Community Equity Insulation'],
    philippineImpact: 'Enables high-integrity projects with community equity to achieve competitive bankability without predatory interest rates.',
    technicalMechanism: 'Aggregates philanthropic grants, development finance institution (DFI) concessional debt, and sovereign climate funds into a unified first-loss capital stack. Subordinates institutional risk to guarantee community dividend distributions during initial debt amortization periods.',
    targetStakeholders: [
      'Asian Development Bank (ADB), World Bank / IFC, and Global Climate Funds',
      'Philanthropic Climate Foundations and Family Offices',
      'Domestic Commercial Banks (BPI, BDO, LandBank, DBP)',
      'Community Equity Trustees and Project SPVs'
    ],
    systemicOutcome: 'Proves the investment viability of community co-owned clean energy and establishes a scalable replicable template for blended finance across Southeast Asia.'
  },
  {
    id: 'circular-re',
    number: '06',
    title: 'Circular RE Futures',
    leadIcon: 'RefreshCw',
    shortTag: 'CIRCULARITY & HARDWARE',
    institutionalArtifact: 'EPR Take-Back Protocol (RA 11898)',
    tableAssignment: 'Lab Table 6 (Circularity & EPR)',
    leadAgency: 'Forum',
    leadLogos: ['/logos/forum.svg'],
    mandate: 'Driving policy and industry frameworks for the full hardware lifecycle—establishing Extended Producer Responsibility (EPR), circular decommissioning guidelines, and regional recycling logistics for solar PV panels, wind turbines, and battery energy storage systems.',
    keyOutputs: [
      'Tropical PV Durability & PID Mitigation Protocol',
      'Model Decommissioning Escrow Agreement for LGUs',
      'Extended Producer Responsibility (EPR) Policy Roadmap for Solar/BESS'
    ],
    focusAreas: ['Extended Producer Responsibility (EPR)', 'Decommissioning Escrow', 'Regional PV Recycling Hubs'],
    philippineImpact: 'Prevents thousands of tons of degraded solar panels and battery waste from overwhelming municipal landfills in vulnerable island ecosystems.',
    technicalMechanism: 'Mandates upstream equipment traceability (digital hardware passports) under RA 11898 and requires developers to contribute to ring-fenced Decommissioning Escrow Funds. Establishes reverse-logistics supply chains and certified regional e-waste refurbishing/recycling facilities.',
    targetStakeholders: [
      'Department of Environment and Natural Resources (DENR-EMB)',
      'Board of Investments (BOI) & Department of Trade and Industry (DTI)',
      'Renewable Energy Equipment Manufacturers and Importers',
      'Local Government Solid Waste Management Boards'
    ],
    systemicOutcome: 'Institutes cradle-to-cradle material stewardship, prevents toxic leaching in tropical island settings, and positions the Philippines as an ASEAN leader in circular clean tech.'
  }
];

export const BREAKOUT_TRACKS: BreakoutTrack[] = [
  {
    id: 'track-co-own',
    trackNumber: 'Arena 01',
    title: 'Community Co-Ownership & Shared Wealth (#co-own)',
    subtitle: 'Navigating equity trusts, governance & benefit-sharing across 25-year lifecycles',
    iconName: 'UsersRound',
    badge: 'Co-Ownership Deep Dive',
    tableAssignment: 'Workshop Focus · Tables 1–4',
    overview: 'Exploring how community equity stakes, board governance representation, and dividend waterfall policies de-risk investments, protect project bankability, and foster deep social license across Philippine socio-ecological archetypes.',
    simulationFocus: [
      'Balancing 4 Core Metrics: Financial IRR, Social License, Ecological Health, and System Resilience',
      'Structuring Community Equity Trusts, carried shares, and cooperative board voting rights',
      'Deploying Living Consent guardrails across ancestral domains and municipal fishing waters',
      'Testing 25-year lifecycle resilience against climate shocks and refinancing headwinds'
    ],
    interactiveDemoId: 'case-laguna'
  },
  {
    id: 'track-circularity',
    trackNumber: 'Arena 02',
    title: 'Circular RE Futures & Lifecycle Stewardship',
    subtitle: 'Managing hardware durability, supply chain traceability & end-of-life escrows',
    iconName: 'RefreshCw',
    badge: 'Circularity Deep Dive',
    tableAssignment: 'Workshop Focus · Tables 5–8',
    overview: 'Exploring how Extended Producer Responsibility (EPR), high-humidity tropical durability protocols, and ring-fenced decommissioning escrow accounts transform the lifecycle economics and eliminate toxic waste liabilities.',
    simulationFocus: [
      'Mitigating Potential Induced Degradation (PID) and salt-mist corrosion in tropical coastal settings',
      'Structuring LGU Decommissioning Escrow Accounts funded from Year 1 of commercial operations',
      'Designing reverse-logistics networks for high-value silver, silicon, and copper recovery',
      'Institutionalizing national EPR compliance standards (RA 11898) and preventing toxic landfill disposal'
    ],
    interactiveDemoId: 'case-mindoro'
  }
];

export const SIMULATION_METRICS: SimulationMetric[] = [
  {
    id: 'irr',
    name: 'Financial Return (IRR)',
    unit: '%',
    target: '12 - 16%',
    description: 'Commercial bankability and developer equity yield ensuring access to competitive debt financing.',
    icon: 'TrendingUp'
  },
  {
    id: 'social-license',
    name: 'Social License Index',
    unit: '/ 100',
    target: '85+',
    description: 'Community trust, active consent, and host population satisfaction with dividend equity distribution.',
    icon: 'Users'
  },
  {
    id: 'ecological-health',
    name: 'Ecological Health Score',
    unit: '/ 100',
    target: '90+',
    description: 'Biodiversity integrity, soil regeneration, and aquatic co-existence performance across the site.',
    icon: 'Leaf'
  },
  {
    id: 'resilience-rating',
    name: 'Resilience Rating',
    unit: 'Cat',
    target: 'Cat 5 Safe',
    description: 'Structural ability to withstand super-typhoon winds, storm surges, and deliver backup microgrid power.',
    icon: 'ShieldCheck'
  }
];

export const SIMULATION_CASES: SimulationCase[] = [
  {
    id: 'case-laguna',
    title: 'Case 01: Laguna de Bay Floating Solar Commons',
    technology: 'Floating Solar PV (100 MW)',
    location: 'Laguna de Bay (Luzon)',
    scale: '100 MW · 120 Hectares Water Surface',
    context: 'Dense multi-stakeholder lake supporting over 13,000 artisanal fisherfolk families, duck farming, open-water aquaculture, and drinking water extraction for Metro Manila.',
    coreDilemma: 'How to install utility-scale floating arrays without blocking traditional artisanal navigation channels, reducing lake dissolved oxygen, or destroying local capture fisheries.',
    coOwnershipModel: '10% carried equity held in trust by the Municipal Fisherfolk Cooperative Federation, funded via concessional green debt, with quarterly dividend distribution and joint lake-water monitoring.',
    avatarIcon: 'Anchor'
  },
  {
    id: 'case-cordillera',
    title: 'Case 02: Cordillera Ancestral Domain Hydro & Solar',
    technology: 'Run-of-River Hydro + Solar (35 MW)',
    location: 'Cordillera Administrative Region (CAR)',
    scale: '35 MW Hybrid Micro-Catchment',
    context: 'Mountainous ancestral domain territory governed by Indigenous Cultural Communities under Certificate of Ancestral Domain Title (CADT) and customary Bodong / Council of Elders laws.',
    coreDilemma: 'Traditional energy concessions treat Free, Prior, and Informed Consent (FPIC) as a one-time transactional permit, ignoring indigenous water rights and customary river management.',
    coOwnershipModel: '15% sweat-equity ownership granted to the Indigenous Tribal Council in exchange for 25-year customary water rights, with perpetual seats on the project executive committee.',
    avatarIcon: 'Mountain'
  },
  {
    id: 'case-mindoro',
    title: 'Case 03: Mindoro Island Agro-Microgrid',
    technology: 'Agrivoltaics + Battery Storage (20 MW / 40 MWh)',
    location: 'Occidental Mindoro',
    scale: '20 MWp Solar + 40 MWh Lithium-Iron BESS',
    context: 'Off-grid island province suffering from chronic 8-hour daily rotating brownouts, high retail electricity costs, and reliance on subsidized diesel barge generation.',
    coreDilemma: 'Farming communities fear ground-mounted solar panels will permanently remove prime irrigated rice and onion fields from cultivation.',
    coOwnershipModel: 'Dual-use agrivoltaic design with shade-tolerant garlic and onion crops beneath 3.5m elevated trackers. Electric cooperative members hold 20% equity funded through a blended concessional facility.',
    avatarIcon: 'Sprout'
  },
  {
    id: 'case-guimaras',
    title: 'Case 04: Guimaras Coastal Wind & Eco-Tourism',
    technology: 'Coastal Wind Farm (54 MW)',
    location: 'Guimaras Island (Visayas)',
    scale: '54 MW · 27 Turbines',
    context: 'Renowned mango-producing and coastal tourism island with critical migratory bird corridors and artisanal fishing sanctuaries.',
    coreDilemma: 'Balancing wind turbine siting to avoid avian collisions and coastal eco-tourism disruption while maximizing local economic retention.',
    coOwnershipModel: 'Municipal LGU and provincial tourism cooperative co-invest in 8% preferred shares, directing dividend streams into local typhoon-shelter resilience and mango farmer subsidies.',
    avatarIcon: 'Wind'
  }
];
