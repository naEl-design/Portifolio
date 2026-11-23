/**
 * ============================================================================
 * CENTRALIZED PORTFOLIO CONFIGURATION
 * ============================================================================
 * Edit this file to customize:
 *   1. Personal Info & Profile Photo (`PERSONAL_INFO`)
 *   2. Contact Details & Social Links (`CONTACT_INFO`)
 *   3. About Bio (`ABOUT_CONTENT`)
 *   4. Skills (`SKILL_GROUPS`)
 *   5. Services (`SERVICES`)
 *   6. Projects (`PROJECTS`)
 *   7. Experience & Education (`TIMELINE_ITEMS`)
 *   8. Design Process (`DESIGN_PROCESS_STEPS`)
 * ============================================================================
 */

export type ProjectCategory = 'Frontend' | 'UI/UX' | 'Web Design';

export interface ProjectItem {
  id: string;
  name: string;
  category: ProjectCategory;
  description: string;
  technologies: string[];
  /** Replace '#' with your real deployed project URL */
  liveUrl: string;
  /** Replace '#' with your real GitHub repository URL */
  githubUrl: string;
  /** Optional: replace with a path to your real project screenshot (e.g., '/images/project-1.png') */
  thumbnailUrl?: string;
  /** Visual variant for the built-in architectural wireframe thumbnail when thumbnailUrl is empty */
  thumbnailVariant: 'finance' | 'ecommerce' | 'portfolio' | 'student' | 'restaurant' | 'mobile';
  isPlaceholder: boolean;
}

export interface TimelineEntry {
  id: string;
  type: 'Experience' | 'Education';
  title: string;
  organization: string;
  period: string;
  description: string;
  isPlaceholder: boolean;
}

/* -------------------------------------------------------------------------- */
/* 1. PERSONAL INFORMATION & PROFILE PHOTO                                    */
/* -------------------------------------------------------------------------- */
export const PERSONAL_INFO = {
  brandLogo: 'NAEL.dev',
  name: 'Shingiro Nael',
  initials: 'SN',
  title: 'Frontend Developer & UI/UX Designer',
  location: 'Kigali, Rwanda',
  tagline: 'I design and build beautiful, user-focused web experiences.',
  supportingText:
    'Passionate about turning ideas into intuitive, responsive, and visually engaging digital experiences through thoughtful design and clean frontend development.',
  /**
   * HOW TO ADD YOUR PROFILE PHOTO:
   * Put your photo inside `public/images/profile.jpg` (or paste an image URL)
   * and set `profilePhotoUrl: '/images/profile.jpg'`.
   * Leave empty ('') to display the elegant "SN" initials placeholder.
   */
  profilePhotoUrl: '',
};

/* -------------------------------------------------------------------------- */
/* 2. CONTACT INFORMATION & SOCIAL LINKS                                      */
/* -------------------------------------------------------------------------- */
export const CONTACT_INFO = {
  phoneDisplay: '+250 792 831 574',
  phoneHref: 'tel:+250792831574',
  email: 'naelshingiro@gmail.com',
  emailHref: 'mailto:naelshingiro@gmail.com',
  linkedinLabel: 'Shingiro Nael',
  /** Replace with your exact LinkedIn profile URL when ready */
  linkedinUrl: 'https://www.linkedin.com/search/results/all/?keywords=Shingiro%20Nael',
  githubDisplay: 'https://github.com/naEl-design',
  githubUrl: 'https://github.com/naEl-design',
  instagramDisplay: 'https://www.instagram.com/_s.na3l_/',
  instagramUrl: 'https://www.instagram.com/_s.na3l_/',
};

/* -------------------------------------------------------------------------- */
/* 3. ABOUT ME                                                                */
/* -------------------------------------------------------------------------- */
export const ABOUT_CONTENT = {
  heading: 'Bridging thoughtful interface design with clean frontend code.',
  paragraphs: [
    'I am Shingiro Nael, a Frontend Developer and UI/UX Designer based in Kigali, Rwanda, focused on building digital products that feel clear, fast, and intuitive.',
    'My work sits where visual design meets implementation—translating user problems into structured wireframes, cohesive interfaces, and responsive code without losing craft along the way.',
    'I enjoy solving practical problems through technology and care deeply about typography, layout clarity, accessibility, and the everyday details that make web experiences enjoyable to use.',
  ],
};

/* -------------------------------------------------------------------------- */
/* 4. SKILLS (No fabricated percentages)                                      */
/* -------------------------------------------------------------------------- */
export interface SkillGroup {
  id: string;
  category: string;
  subtitle: string;
  items: { name: string; focus: string }[];
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: 'frontend',
    category: 'Frontend Development',
    subtitle: 'Building structured, accessible, and responsive websites in core web languages.',
    items: [
      { name: 'HTML', focus: 'Semantic markup, structure & accessibility' },
      { name: 'CSS', focus: 'Responsive layouts, Flexbox, Grid & styling' },
      { name: 'JavaScript', focus: 'Interactive DOM logic & modern ES6+ behavior' },
    ],
  },
  {
    id: 'uiux',
    category: 'UI/UX Design',
    subtitle: 'Designing intuitive flows from early exploration to interactive prototypes.',
    items: [
      { name: 'Figma', focus: 'Component libraries & interface systems' },
      { name: 'Wireframing', focus: 'Information hierarchy & layout structure' },
      { name: 'Prototyping', focus: 'Interactive flows & usability testing' },
      { name: 'User Research', focus: 'Understanding needs & friction points' },
    ],
  },
];

/* -------------------------------------------------------------------------- */
/* 5. SERVICES                                                                */
/* -------------------------------------------------------------------------- */
export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  deliverables: string[];
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'frontend-dev',
    number: '01',
    title: 'Frontend Development',
    description:
      'Building responsive, interactive, and maintainable websites using HTML, CSS, and JavaScript.',
    deliverables: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 'ui-ux-design',
    number: '02',
    title: 'UI/UX Design',
    description:
      'Designing intuitive digital experiences from early concepts and wireframes to polished prototypes.',
    deliverables: ['Wireframes', 'User flows', 'Prototypes', 'UI design', 'User research'],
  },
  {
    id: 'responsive-web',
    number: '03',
    title: 'Responsive Web Design',
    description:
      'Creating websites that provide a smooth and consistent experience across mobile, tablet, and desktop devices.',
    deliverables: ['Mobile-first layouts', 'Fluid typography', 'Cross-browser QA', 'Accessibility'],
  },
];

/* -------------------------------------------------------------------------- */
/* 6. PROJECTS (Add more projects to this array anytime)                      */
/* -------------------------------------------------------------------------- */
export const PROJECTS: ProjectItem[] = [
  {
    id: 'smartjob-website',
    name: 'SmartJob Website',
    category: 'Web Design',
    description:
      'Live web project focused on structured job browsing, responsive layout hierarchy, and clear user navigation across devices.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://smartjobwebsite.netlify.app/',
    githubUrl: '#',
    thumbnailUrl: '',
    thumbnailVariant: 'portfolio',
    isPlaceholder: false,
  },
  {
    id: 'pocket-app',
    name: 'Pocket',
    category: 'Frontend',
    description:
      'Live web application crafted with clean interface structure, responsive styling, and interactive frontend behavior.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://pocket-9kgdhi4eb-nael-designs-projects.vercel.app/',
    githubUrl: '#',
    thumbnailUrl: '',
    thumbnailVariant: 'finance',
    isPlaceholder: false,
  },
];

/* -------------------------------------------------------------------------- */
/* 7. EXPERIENCE & EDUCATION (Editable Placeholders)                          */
/* -------------------------------------------------------------------------- */
export const TIMELINE_ITEMS: TimelineEntry[] = [
  {
    id: 'exp-frontend',
    type: 'Experience',
    title: 'Frontend Developer',
    organization: 'Company / Organization (Editable Placeholder)',
    period: 'Year – Year',
    description:
      'Add your responsibilities and achievements here—such as building responsive interfaces, collaborating on component libraries, and improving page usability.',
    isPlaceholder: true,
  },
  {
    id: 'exp-uiux',
    type: 'Experience',
    title: 'UI/UX Designer',
    organization: 'Company / Organization (Editable Placeholder)',
    period: 'Year – Year',
    description:
      'Add your design work here—such as user research, wireframing user flows, creating interactive Figma prototypes, and partnering with developers.',
    isPlaceholder: true,
  },
  {
    id: 'edu-software',
    type: 'Education',
    title: 'Software Development',
    organization: 'Institution Name (Editable Placeholder)',
    period: 'Year – Year',
    description:
      'Add your academic program, coursework focus, or key learning milestones in software development and interface design.',
    isPlaceholder: true,
  },
];

/* -------------------------------------------------------------------------- */
/* 8. DESIGN PROCESS                                                          */
/* -------------------------------------------------------------------------- */
export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export const DESIGN_PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Discover',
    description: 'Understand the problem, users, and project goals.',
  },
  {
    step: '02',
    title: 'Design',
    description: 'Create wireframes, user flows, and visual designs.',
  },
  {
    step: '03',
    title: 'Develop',
    description: 'Turn the approved design into responsive, functional code.',
  },
  {
    step: '04',
    title: 'Improve',
    description: 'Test, refine, optimize, and improve the final experience.',
  },
];
