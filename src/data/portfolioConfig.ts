/**
 * ============================================================================
 * CENTRALIZED PORTFOLIO CONFIGURATION
 * ============================================================================
 */

export type ProjectCategory = 'Web' | 'UI/UX' | 'Mobile';

export interface CaseStudyProcessStage {
  stage: 'Sketches' | 'Wireframes' | 'Final UI';
  detail: string;
}

export interface ProjectCaseStudy {
  role: string;
  timeline: string;
  problem: string;
  process: CaseStudyProcessStage[];
  result: string;
}

export interface ProjectItem {
  id: string;
  name: string;
  category: ProjectCategory;
  filterTags: ProjectCategory[];
  description: string;
  technologies: string[];
  /** Live deployed URL */
  liveUrl: string;
  /** Source code / GitHub URL */
  githubUrl: string;
  thumbnailUrl?: string;
  thumbnailVariant: 'finance' | 'ecommerce' | 'portfolio' | 'student' | 'restaurant' | 'mobile';
  isPlaceholder: boolean;
  caseStudy: ProjectCaseStudy;
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

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  status: string;
  detail: string;
}

export interface LearningNoteItem {
  id: string;
  topic: string;
  date: string;
  readTime: string;
  title: string;
  summary: string;
  takeaway: string;
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
  availability: 'Currently learning Level 4 SWD · Open to Internships & Freelance',
  tagline: 'I design and build beautiful, user-focused web experiences.',
  supportingText:
    'Passionate about turning ideas into intuitive, responsive, and visually engaging digital experiences through thoughtful design and clean frontend development.',
  /**
   * Put your portrait photo inside `public/images/profile.jpg` (or WebP)
   * and set `profilePhotoUrl: '/images/profile.jpg'`.
   * Leave empty ('') to show the architectural studio workspace visual + SN monogram.
   */
  profilePhotoUrl: '',
};

/* -------------------------------------------------------------------------- */
/* 2. CONTACT INFORMATION & SOCIAL LINKS                                      */
/* -------------------------------------------------------------------------- */
export const CONTACT_INFO = {
  phoneDisplay: '+250 792 831 574',
  phoneHref: 'tel:+250792831574',
  whatsappHref:
    'https://wa.me/250792831574?text=Hello%20Shingiro%20Nael%2C%20I%20viewed%20your%20portfolio%20and%20would%20like%20to%20connect.',
  email: 'naelshingiro@gmail.com',
  emailHref: 'mailto:naelshingiro@gmail.com',
  linkedinLabel: 'Shingiro Nael',
  linkedinUrl: 'https://www.linkedin.com/search/results/all/?keywords=Shingiro%20Nael',
  githubDisplay: 'https://github.com/naEl-design',
  githubUrl: 'https://github.com/naEl-design',
  instagramDisplay: 'https://www.instagram.com/_s.na3l_/',
  instagramUrl: 'https://www.instagram.com/_s.na3l_/',
  /** Optional external design showcase URLs (leave '' until created) */
  behanceUrl: '',
  dribbbleUrl: '',
  /** Optional Formspree endpoint (e.g. 'https://formspree.io/f/your-id'); defaults to built-in /api/contact */
  formspreeEndpoint: '',
};

/* -------------------------------------------------------------------------- */
/* 3. ABOUT ME                                                                */
/* -------------------------------------------------------------------------- */
export const ABOUT_CONTENT = {
  heading: 'Bridging thoughtful interface design with clean frontend code.',
  paragraphs: [
    'I am Shingiro Nael, a Frontend Developer, UI/UX Designer, and Level 4 Software Development student at Intango Technical School in Kigali, Rwanda. I started designing because I noticed how often useful tools feel confusing to everyday users when visual hierarchy and structure are overlooked.',
    'At Intango Technical School, I am building a strong foundation in programming, databases, system design, and frontend web engineering—while applying those lessons directly to real web interfaces.',
    'My goal on every project is to pair clear Figma wireframes and user-centered thinking with semantic HTML5, modern CSS3, and responsive JavaScript so websites feel fast, intuitive, and accessible on every screen.',
  ],
};

/* -------------------------------------------------------------------------- */
/* 4. SKILLS & TOOLS                                                          */
/* -------------------------------------------------------------------------- */
export interface ToolItem {
  name: string;
  level: 'Core' | 'Proficient' | 'Learning';
  detail: string;
}

export const TOOLS_AND_LEARNING: ToolItem[] = [
  {
    name: 'Git & GitHub',
    level: 'Proficient',
    detail: 'Version control, branching, commits & public repositories',
  },
  {
    name: 'VS Code',
    level: 'Core',
    detail: 'Daily editor workflow, extensions, formatting & debugging',
  },
  {
    name: 'React',
    level: 'Learning',
    detail: 'Component architecture, props, hooks & interactive state',
  },
  {
    name: 'Tailwind CSS',
    level: 'Learning',
    detail: 'Utility-first styling, design tokens & responsive layouts',
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
      'Building responsive, interactive, and maintainable websites using HTML5, CSS3, and JavaScript.',
    deliverables: ['Semantic HTML5', 'Modern CSS3', 'Interactive JS', 'Clean structure'],
  },
  {
    id: 'ui-ux-design',
    number: '02',
    title: 'UI/UX Design',
    description:
      'Designing intuitive digital experiences from early concepts and wireframes to polished Figma prototypes.',
    deliverables: ['Wireframes', 'User flows', 'Figma prototypes', 'Visual hierarchy'],
  },
  {
    id: 'responsive-web',
    number: '03',
    title: 'Landing Pages & Responsive Sites',
    description:
      'Creating fast landing pages and multi-device websites tailored for mobile, tablet, and desktop.',
    deliverables: ['Mobile-first layout', 'Cross-browser QA', 'Accessibility', 'Fast loading'],
  },
];

/* -------------------------------------------------------------------------- */
/* 6. PROJECTS & CASE STUDIES (SmartJob Website & Pocket)                     */
/* -------------------------------------------------------------------------- */
export const PROJECTS: ProjectItem[] = [
  {
    id: 'smartjob-website',
    name: 'SmartJob Website',
    category: 'Web',
    filterTags: ['Web', 'UI/UX', 'Mobile'],
    description:
      'Live job discovery web platform focused on structured listings, scannable hierarchy, and effortless mobile navigation.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Figma'],
    liveUrl: 'https://smartjobwebsite.netlify.app/',
    githubUrl: 'https://github.com/naEl-design',
    thumbnailUrl: '',
    thumbnailVariant: 'portfolio',
    isPlaceholder: false,
    caseStudy: {
      role: 'UI/UX Designer & Frontend Developer',
      timeline: 'Concept, Design & Live Deployment',
      problem:
        'Job seekers browsing on phones often face cluttered job boards with dense text, unclear role details, and slow navigation between search and application steps.',
      process: [
        {
          stage: 'Sketches',
          detail:
            'Mapped the core seeker journey on paper—focusing on how quickly a visitor can scan job title, location, and category above the fold.',
        },
        {
          stage: 'Wireframes',
          detail:
            'Structured low-fidelity cards and filter groupings so listings collapse cleanly from desktop grids into thumb-friendly mobile stacks.',
        },
        {
          stage: 'Final UI',
          detail:
            'Built the live interface with semantic HTML5, responsive CSS Flexbox/Grid, clear typography contrast, and interactive JavaScript navigation.',
        },
      ],
      result:
        'Deployed live on Netlify with a responsive multi-device layout, faster visual scanning across job cards, and clear navigation from discovery to details.',
    },
  },
  {
    id: 'pocket-app',
    name: 'Pocket',
    category: 'UI/UX',
    filterTags: ['Web', 'UI/UX', 'Mobile'],
    description:
      'Live web application crafted with clean visual structure, responsive card layouts, and interactive JavaScript behavior.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'UI/UX'],
    liveUrl: 'https://pocket-9kgdhi4eb-nael-designs-projects.vercel.app/',
    githubUrl: 'https://github.com/naEl-design',
    thumbnailUrl: '',
    thumbnailVariant: 'finance',
    isPlaceholder: false,
    caseStudy: {
      role: 'Product Designer & Frontend Developer',
      timeline: 'Design System & Web Implementation',
      problem:
        'Everyday web utilities often overwhelm users with crowded panels and inconsistent spacing, making routine checks feel tedious on smaller screens.',
      process: [
        {
          stage: 'Sketches',
          detail:
            'Explored compact card layouts and quick-glance summary blocks designed to surface key numbers and actions without clutter.',
        },
        {
          stage: 'Wireframes',
          detail:
            'Defined spacing rules, interactive controls, and mobile breakpoints in Figma before writing code so visual hierarchy stayed consistent.',
        },
        {
          stage: 'Final UI',
          detail:
            'Implemented interactive DOM behavior in JavaScript alongside responsive CSS styling and balanced card contrast, then shipped on Vercel.',
        },
      ],
      result:
        'Shipped live on Vercel as a focused, lightweight interface that stays readable and responsive across mobile phones, tablets, and desktop monitors.',
    },
  },
];

/* -------------------------------------------------------------------------- */
/* 7. EXPERIENCE, EDUCATION & CERTIFICATES                                    */
/* -------------------------------------------------------------------------- */
export const TIMELINE_ITEMS: TimelineEntry[] = [
  {
    id: 'edu-intango',
    type: 'Education',
    title: 'Software Development (SWD)',
    organization: 'Intango Technical School',
    period: 'Level 4 | S5',
    description:
      'Pursuing Level 4 in Software Development in Kigali, Rwanda—building a strong foundation in frontend development, programming, databases, system design, and problem-solving.',
    isPlaceholder: false,
  },
  {
    id: 'exp-frontend-uiux',
    type: 'Experience',
    title: 'Frontend Development & UI/UX Craft',
    organization: 'Academic Studies & Personal Projects',
    period: 'Kigali, Rwanda',
    description:
      'Combining clean HTML5, CSS3, and JavaScript code with thoughtful Figma wireframing and responsive design to create websites that are responsive, intuitive, and user-friendly.',
    isPlaceholder: false,
  },
];

export const CERTIFICATES: CertificateItem[] = [
  {
    id: 'cert-swd-l4',
    title: 'TVET Level 4 — Software Development (SWD)',
    issuer: 'Intango Technical School · Kigali, Rwanda',
    status: 'In Progress (S5)',
    detail:
      'Core curriculum covering web development, programming fundamentals, databases, system design, and practical software problem-solving.',
  },
  {
    id: 'cert-web-foundations',
    title: 'Frontend Web Foundations (HTML5, CSS3 & JS)',
    issuer: 'Academic & Project Portfolio Practice',
    status: 'Applied in Live Builds',
    detail:
      'Demonstrated semantic structure, Flexbox/Grid responsiveness, and interactive DOM behavior across deployed web projects.',
  },
  {
    id: 'cert-uiux-figma',
    title: 'UI/UX Wireframing & Interactive Prototyping',
    issuer: 'Self-Directed & Studio Practice (Figma)',
    status: 'Portfolio Track',
    detail:
      'User-centered layout planning, component organization, mobile-first breakpoints, and usability-focused interface flows.',
  },
];

/* -------------------------------------------------------------------------- */
/* 8. LEARNING NOTES                                                          */
/* -------------------------------------------------------------------------- */
export const LEARNING_NOTES: LearningNoteItem[] = [
  {
    id: 'note-semantic-html',
    topic: 'HTML5 & Accessibility',
    date: 'Level 4 Study Note',
    readTime: '2 min read',
    title: 'Why semantic HTML comes before styling',
    summary:
      'Using landmarks like <header>, <main>, <section>, and proper heading levels makes pages immediately easier for keyboards, screen readers, and search engines to understand.',
    takeaway:
      'At Intango Technical School, building clean document structure first also makes CSS layout rules simpler and easier to maintain.',
  },
  {
    id: 'note-figma-to-css',
    topic: 'UI/UX to Code',
    date: 'Workflow Note',
    readTime: '3 min read',
    title: 'Translating Figma spacing into CSS Grid & Flexbox',
    summary:
      'Consistent spacing scales in Figma (8px, 16px, 24px) translate directly into predictable CSS Grid gaps and Flexbox padding without guesswork.',
    takeaway:
      'Sketching mobile stacks before desktop grids prevents cramped cards and horizontal scrolling on small phones.',
  },
  {
    id: 'note-learning-react',
    topic: 'Currently Learning',
    date: 'Next Step',
    readTime: '2 min read',
    title: 'Moving from vanilla JavaScript to React & Tailwind',
    summary:
      'Understanding DOM manipulation and state in plain JavaScript makes React components and Tailwind utility classes click much faster.',
    takeaway:
      'Strong HTML, CSS, and JavaScript fundamentals remain the backbone of every modern framework.',
  },
];

/* -------------------------------------------------------------------------- */
/* 9. DESIGN PROCESS                                                          */
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
