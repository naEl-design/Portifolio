export interface TranslationDictionary {
  nav: {
    home: string;
    about: string;
    services: string;
    projects: string;
    experience: string;
    contact: string;
  };
  hero: {
    title: string;
    tagline: string;
    supportingText: string;
    viewWork: string;
    contactMe: string;
    photoPlaceholder: string;
    floatingUiTitle: string;
    floatingUiSub: string;
    floatingCodeTitle: string;
    floatingCodeSub: string;
    pillars: {
      title: string;
      detail: string;
    }[];
  };
  about: {
    eyebrow: string;
    heading: string;
    paragraphs: string[];
    focusLabel: string;
    focusValue: string;
    basedInLabel: string;
    uiPlusCode: string;
    wireframeTitle: string;
    codeSnippetTitle: string;
    codeReadyText: string;
    cards: {
      title: string;
      description: string;
    }[];
    pipeline: string[];
  };
  skills: {
    eyebrow: string;
    heading: string;
    frontendCategory: string;
    frontendSubtitle: string;
    frontendFocuses: string[];
    uiuxCategory: string;
    uiuxSubtitle: string;
    uiuxItems: {
      name: string;
      focus: string;
    }[];
    workflowCards: {
      title: string;
      detail: string;
    }[];
  };
  services: {
    eyebrow: string;
    heading: string;
    includesLabel: string;
    items: {
      title: string;
      description: string;
      deliverables: string[];
    }[];
  };
  projects: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    allTab: string;
    liveDemo: string;
    viewProject: string;
    items: {
      id: string;
      categoryLabel: string;
      name: string;
      description: string;
    }[];
    highlights: {
      title: string;
      description: string;
    }[];
  };
  experience: {
    eyebrow: string;
    heading: string;
    helperPrefix: string;
    items: {
      typeLabel: string;
      title: string;
      organization: string;
      period: string;
      description: string;
    }[];
  };
  process: {
    eyebrow: string;
    heading: string;
    stepLabel: string;
    focusLabel: string;
    outputLabel: string;
    steps: {
      title: string;
      description: string;
      focus: string;
      output: string;
    }[];
  };
  contact: {
    eyebrow: string;
    heading: string;
    supportingText: string;
    phoneLabel: string;
    emailLabel: string;
    linkedinLabel: string;
    githubLabel: string;
    instagramLabel: string;
    nameLabel: string;
    namePlaceholder: string;
    emailInputLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    frontendNote: string;
    sendButton: string;
    successTitlePrefix: string;
    successBody: string;
    openMailApp: string;
    resetForm: string;
    errName: string;
    errEmail: string;
    errEmailInvalid: string;
    errMessage: string;
  };
  footer: {
    copyright: string;
    credit: string;
  };
  languagePicker: {
    searchPlaceholder: string;
    instantGroup: string;
    worldGroup: string;
    translateCustomPrefix: string;
    translating: string;
    resetToEnglish: string;
    noMatches: string;
  };
}

export interface LanguageOption {
  code: string;
  name: string;
  nativeName: string;
  rtl?: boolean;
  builtin?: boolean;
}

export const WORLD_LANGUAGES: LanguageOption[] = [
  { code: 'en', name: 'English', nativeName: 'English', builtin: true },
  { code: 'rw', name: 'Kinyarwanda', nativeName: 'Ikinyarwanda', builtin: true },
  { code: 'fr', name: 'French', nativeName: 'Français', builtin: true },
  { code: 'sw', name: 'Swahili', nativeName: 'Kiswahili', builtin: true },
  { code: 'es', name: 'Spanish', nativeName: 'Español', builtin: true },
  { code: 'de', name: 'German', nativeName: 'Deutsch', builtin: true },
  { code: 'pt', name: 'Portuguese', nativeName: 'Português', builtin: true },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية', rtl: true, builtin: true },
  { code: 'zh', name: 'Chinese (Simplified)', nativeName: '简体中文' },
  { code: 'zh-TW', name: 'Chinese (Traditional)', nativeName: '繁體中文' },
  { code: 'ja', name: 'Japanese', nativeName: '日本語' },
  { code: 'ko', name: 'Korean', nativeName: '한국어' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी' },
  { code: 'it', name: 'Italian', nativeName: 'Italiano' },
  { code: 'nl', name: 'Dutch', nativeName: 'Nederlands' },
  { code: 'tr', name: 'Turkish', nativeName: 'Türkçe' },
  { code: 'ru', name: 'Russian', nativeName: 'Русский' },
  { code: 'pl', name: 'Polish', nativeName: 'Polski' },
  { code: 'sv', name: 'Swedish', nativeName: 'Svenska' },
  { code: 'no', name: 'Norwegian', nativeName: 'Norsk' },
  { code: 'da', name: 'Danish', nativeName: 'Dansk' },
  { code: 'fi', name: 'Finnish', nativeName: 'Suomi' },
  { code: 'el', name: 'Greek', nativeName: 'Ελληνικά' },
  { code: 'he', name: 'Hebrew', nativeName: 'עברית', rtl: true },
  { code: 'fa', name: 'Persian', nativeName: 'فارسی', rtl: true },
  { code: 'ur', name: 'Urdu', nativeName: 'اردو', rtl: true },
  { code: 'bn', name: 'Bengali', nativeName: 'বাংলা' },
  { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்' },
  { code: 'te', name: 'Telugu', nativeName: 'తెలుగు' },
  { code: 'th', name: 'Thai', nativeName: 'ไทย' },
  { code: 'vi', name: 'Vietnamese', nativeName: 'Tiếng Việt' },
  { code: 'id', name: 'Indonesian', nativeName: 'Bahasa Indonesia' },
  { code: 'ms', name: 'Malay', nativeName: 'Bahasa Melayu' },
  { code: 'tl', name: 'Filipino / Tagalog', nativeName: 'Tagalog' },
  { code: 'uk', name: 'Ukrainian', nativeName: 'Українська' },
  { code: 'ro', name: 'Romanian', nativeName: 'Română' },
  { code: 'cs', name: 'Czech', nativeName: 'Čeština' },
  { code: 'hu', name: 'Hungarian', nativeName: 'Magyar' },
  { code: 'am', name: 'Amharic', nativeName: 'አማርኛ' },
  { code: 'so', name: 'Somali', nativeName: 'Soomaali' },
  { code: 'lg', name: 'Luganda', nativeName: 'Luganda' },
  { code: 'ln', name: 'Lingala', nativeName: 'Lingála' },
  { code: 'ha', name: 'Hausa', nativeName: 'Hausa' },
  { code: 'yo', name: 'Yoruba', nativeName: 'Yorùbá' },
  { code: 'ig', name: 'Igbo', nativeName: 'Igbo' },
  { code: 'zu', name: 'Zulu', nativeName: 'isiZulu' },
  { code: 'xh', name: 'Xhosa', nativeName: 'isiXhosa' },
  { code: 'sn', name: 'Shona', nativeName: 'chiShona' },
  { code: 'af', name: 'Afrikaans', nativeName: 'Afrikaans' },
  { code: 'rn', name: 'Kirundi', nativeName: 'Ikirundi' },
];

export const EN_DICTIONARY: TranslationDictionary = {
  nav: {
    home: 'Home',
    about: 'About',
    services: 'Services',
    projects: 'Projects',
    experience: 'Experience',
    contact: 'Contact',
  },
  hero: {
    title: 'Frontend Developer & UI/UX Designer',
    tagline: 'I design and build beautiful, user-focused web experiences.',
    supportingText:
      'Passionate about turning ideas into intuitive, responsive, and visually engaging digital experiences through thoughtful design and clean frontend development.',
    viewWork: 'View My Work',
    contactMe: 'Contact Me',
    photoPlaceholder: 'Profile Photo Placeholder',
    floatingUiTitle: 'UI/UX Design',
    floatingUiSub: 'Figma & Flows',
    floatingCodeTitle: 'Frontend Code',
    floatingCodeSub: 'HTML, CSS & JS',
    pillars: [
      { title: 'UI/UX Design', detail: 'Wireframes, user flows & Figma prototypes' },
      { title: 'Frontend Code', detail: 'Semantic HTML, modern CSS & JavaScript' },
      { title: 'Responsive Systems', detail: 'Consistent experiences on mobile to desktop' },
    ],
  },
  about: {
    eyebrow: 'About Me',
    heading: 'Bridging thoughtful interface design with clean frontend code.',
    paragraphs: [
      'I am Shingiro Nael, a Frontend Developer and UI/UX Designer based in Kigali, Rwanda, focused on building digital products that feel clear, fast, and intuitive.',
      'My work sits where visual design meets implementation—translating user problems into structured wireframes, cohesive interfaces, and responsive code without losing craft along the way.',
      'I enjoy solving practical problems through technology and care deeply about typography, layout clarity, accessibility, and the everyday details that make web experiences enjoyable to use.',
    ],
    focusLabel: 'Focus',
    focusValue: 'UI/UX Design & Frontend Development',
    basedInLabel: 'Based In',
    uiPlusCode: 'UI + Code',
    wireframeTitle: 'Interface Wireframe',
    codeSnippetTitle: 'HTML · CSS · JavaScript',
    codeReadyText: 'Designed for clarity, built for real users.',
    pipeline: ['Research', 'Wireframe', 'Prototype', 'Development'],
    cards: [
      { title: 'User-First Thinking', description: 'Every layout begins by clarifying user goals and removing friction.' },
      { title: 'Semantic HTML5', description: 'Clean, accessible document structure built for readability and SEO.' },
      { title: 'Modern CSS Layouts', description: 'Flexible Grid and Flexbox architectures tailored across viewports.' },
      { title: 'Interactive JavaScript', description: 'Smooth DOM interactions, validation, and responsive UI behavior.' },
    ],
  },
  skills: {
    eyebrow: 'Skills & Toolkit',
    heading: 'Core technologies and design practices.',
    frontendCategory: 'Frontend Development',
    frontendSubtitle: 'Building structured, accessible, and responsive websites in core web languages.',
    frontendFocuses: [
      'Semantic markup, structure & accessibility',
      'Responsive layouts, Flexbox, Grid & styling',
      'Interactive DOM logic & modern ES6+ behavior',
    ],
    uiuxCategory: 'UI/UX Design',
    uiuxSubtitle: 'Designing intuitive flows from early exploration to interactive prototypes.',
    uiuxItems: [
      { name: 'Figma', focus: 'Component libraries & interface systems' },
      { name: 'Wireframing', focus: 'Information hierarchy & layout structure' },
      { name: 'Prototyping', focus: 'Interactive flows & usability testing' },
      { name: 'User Research', focus: 'Understanding needs & friction points' },
    ],
    workflowCards: [
      { title: 'Responsive Breakpoints', detail: 'Layouts tested cleanly across mobile, tablet, and desktop widths.' },
      { title: 'Visual Hierarchy', detail: 'Structured typography, spacing, and contrast for effortless scanning.' },
      { title: 'Interactive States', detail: 'Clear hover, focus, active, and validation feedback on controls.' },
      { title: 'Maintainable Code', detail: 'Organized HTML, CSS, and JavaScript modules that are easy to update.' },
    ],
  },
  services: {
    eyebrow: 'Services',
    heading: 'How I help bring digital products to life.',
    includesLabel: 'Key Focus',
    items: [
      {
        title: 'Frontend Development',
        description: 'Building responsive, interactive, and maintainable websites using HTML, CSS, and JavaScript.',
        deliverables: ['HTML', 'CSS', 'JavaScript'],
      },
      {
        title: 'UI/UX Design',
        description: 'Designing intuitive digital experiences from early concepts and wireframes to polished prototypes.',
        deliverables: ['Wireframes', 'User flows', 'Prototypes', 'UI design', 'User research'],
      },
      {
        title: 'Responsive Web Design',
        description: 'Creating websites that provide a smooth and consistent experience across mobile, tablet, and desktop devices.',
        deliverables: ['Mobile-first layouts', 'Fluid typography', 'Cross-browser QA', 'Accessibility'],
      },
    ],
  },
  projects: {
    eyebrow: 'Projects',
    heading: 'Selected work.',
    subtitle: 'Live deployed web projects built with HTML, CSS, and JavaScript.',
    allTab: 'All',
    liveDemo: 'Live Demo',
    viewProject: 'View Project',
    items: [
      {
        id: 'smartjob-website',
        categoryLabel: 'Web Design',
        name: 'SmartJob Website',
        description:
          'Live web project focused on structured job browsing, responsive layout hierarchy, and clear user navigation across devices.',
      },
      {
        id: 'pocket-app',
        categoryLabel: 'Frontend',
        name: 'Pocket',
        description:
          'Live web application crafted with clean interface structure, responsive styling, and interactive frontend behavior.',
      },
    ],
    highlights: [
      {
        title: 'Mobile-First Structure',
        description: 'Clean responsive breakpoints adapting cleanly from 320px phones to wide monitors.',
      },
      {
        title: 'Structured Layouts',
        description: 'Clear visual hierarchy, scannable sections, and balanced card spacing.',
      },
      {
        title: 'HTML, CSS & JavaScript',
        description: 'Semantic markup, modern styling, and interactive frontend behavior.',
      },
    ],
  },
  experience: {
    eyebrow: 'Experience & Education',
    heading: 'Background & academic foundation.',
    helperPrefix: 'Editable timeline entries. Update companies, institutions, years, and responsibilities in',
    items: [
      {
        typeLabel: 'Experience',
        title: 'Frontend Developer',
        organization: 'Company / Organization (Editable Placeholder)',
        period: 'Year – Year',
        description:
          'Add your responsibilities and achievements here—such as building responsive interfaces, collaborating on component libraries, and improving page usability.',
      },
      {
        typeLabel: 'Experience',
        title: 'UI/UX Designer',
        organization: 'Company / Organization (Editable Placeholder)',
        period: 'Year – Year',
        description:
          'Add your design work here—such as user research, wireframing user flows, creating interactive Figma prototypes, and partnering with developers.',
      },
      {
        typeLabel: 'Education',
        title: 'Software Development',
        organization: 'Institution Name (Editable Placeholder)',
        period: 'Year – Year',
        description:
          'Add your academic program, coursework focus, or key learning milestones in software development and interface design.',
      },
    ],
  },
  process: {
    eyebrow: 'Design Process',
    heading: 'From early discovery to polished implementation.',
    stepLabel: 'Step',
    focusLabel: 'Primary Focus',
    outputLabel: 'Deliverable Output',
    steps: [
      {
        title: 'Discover',
        description: 'Understand the problem, users, and project goals.',
        focus: 'Define the core user problem, target audience, and project scope.',
        output: 'Project brief, user goals & sitemap outline',
      },
      {
        title: 'Design',
        description: 'Create wireframes, user flows, and visual designs.',
        focus: 'Structure information flow, low-fidelity wireframes, and visual UI screens.',
        output: 'Wireframes, user flows & Figma prototype',
      },
      {
        title: 'Develop',
        description: 'Turn the approved design into responsive, functional code.',
        focus: 'Translate approved layouts into clean HTML, CSS, and interactive JavaScript.',
        output: 'Responsive web pages & interactive components',
      },
      {
        title: 'Improve',
        description: 'Test, refine, optimize, and improve the final experience.',
        focus: 'Test across screen sizes, refine spacing and contrast, and polish usability.',
        output: 'Accessible, tested & ready-to-launch experience',
      },
    ],
  },
  contact: {
    eyebrow: 'Contact',
    heading: "Let's build something great together.",
    supportingText: "Have a project, idea, or opportunity? I'd love to hear about it.",
    phoneLabel: 'Phone',
    emailLabel: 'Email',
    linkedinLabel: 'LinkedIn',
    githubLabel: 'GitHub',
    instagramLabel: 'Instagram',
    nameLabel: 'Name',
    namePlaceholder: 'Your full name',
    emailInputLabel: 'Email',
    emailPlaceholder: 'you@example.com',
    messageLabel: 'Message',
    messagePlaceholder: 'Tell me about your project or opportunity...',
    frontendNote: 'Frontend validation enabled · Ready to connect to an email service.',
    sendButton: 'Send Message',
    successTitlePrefix: 'Message validated,',
    successBody:
      'Your message passed frontend validation. Because this site is currently frontend-only without an email backend connected, click below to send it directly through your email app or reach out to',
    openMailApp: 'Open in Email App',
    resetForm: 'Reset Form',
    errName: 'Please enter your name.',
    errEmail: 'Please enter your email address.',
    errEmailInvalid: 'Please enter a valid email address.',
    errMessage: 'Please enter a short message.',
  },
  footer: {
    copyright: '© 2026 Shingiro Nael',
    credit: 'Designed & built by Shingiro Nael',
  },
  languagePicker: {
    searchPlaceholder: 'Search or type any language...',
    instantGroup: 'Instant Languages',
    worldGroup: 'All World Languages',
    translateCustomPrefix: 'Translate to',
    translating: 'Translating portfolio...',
    resetToEnglish: 'Reset to English',
    noMatches: 'Press Enter or click below to translate into this language.',
  },
};

export const BUILTIN_TRANSLATIONS: Record<string, TranslationDictionary> = {
  en: EN_DICTIONARY,
  rw: {
    nav: {
      home: 'Ahabanza',
      about: 'Ibyanjye',
      services: 'Serivisi',
      projects: 'Imishinga',
      experience: 'Uburambe',
      contact: 'Twandikire',
    },
    hero: {
      title: "Umukozi w'Imbuga n'Umushushanyi wa UI/UX",
      tagline: "Nshushanya kandi nkubaka imbuga za interineti nziza zishimisha abazikoresha.",
      supportingText:
        'Mfite ishyaka ryo guhindura ibitekerezo bikaba imbuga zoroshye gukoresha, zijyanye n’ibikoresho byose kandi zinoze binyuze mu gushushanya neza no gukora kode isukuye.',
      viewWork: 'Reba Imishinga Yanjye',
      contactMe: 'Mwandikire',
      photoPlaceholder: "Umwanya w'Ifoto",
      floatingUiTitle: 'Gushushanya UI/UX',
      floatingUiSub: 'Figma & Inyigo',
      floatingCodeTitle: 'Kode ya Frontend',
      floatingCodeSub: 'HTML, CSS & JS',
      pillars: [
        { title: 'Gushushanya UI/UX', detail: 'Ibishushanyo mbonera na porototayipu muri Figma' },
        { title: 'Kode ya Frontend', detail: 'HTML isukuye, CSS igezweho na JavaScript' },
        { title: 'Imbuga Zihinduka', detail: 'Zikora neza kuri telefoni, tableti na mudasobwa' },
      ],
    },
    about: {
      eyebrow: 'Ibyanjye',
      heading: 'Guhuza igishushanyo cyiza cya UI n’ubuhanga bwo gukora kode.',
      paragraphs: [
        'Nitwa Shingiro Nael, umukozi w’imbuga (Frontend Developer) n’umushushanyi wa UI/UX utuye i Kigali mu Rwanda, wibanda ku kubaka imbuga zisobanutse, zihuta kandi zoroshye gukoresha.',
        'Akazi kanjye gahuza igishushanyo n’ishyirwa mu bikorwa—mpindura ibibazo by’abakoresha mo ibishushanyo mbonera n’imbuga zinoze.',
        'Nkunda gukemura ibibazo nkoresheje ikoranabuhanga kandi nita cyane ku myandikire, imiterere y’urupapuro, no korohereza buri wese ukoresha urubuga.',
      ],
      focusLabel: 'Icyo nibandaho',
      focusValue: 'Gushushanya UI/UX no Kubaka Frontend',
      basedInLabel: 'Aho mperereye',
      uiPlusCode: 'UI + Kode',
      wireframeTitle: 'Igishushanyo Mbonera',
      codeSnippetTitle: 'HTML · CSS · JavaScript',
      codeReadyText: 'Byateguwe neza kugira ngo byorohereze abakoresha.',
      pipeline: ['Ubushakashatsi', 'Wireframe', 'Porototayipu', 'Gukora Kode'],
      cards: [
        { title: 'Kwita ku Mukoresha', description: 'Buri gishushanyo gitangirira ku gusobanukirwa ibyo umukoresha akeneye.' },
        { title: 'HTML5 Isukuye', description: 'Imiterere myiza ifasha abasoma n’ishakiro ry’imbuga.' },
        { title: 'CSS Igezweho', description: 'Imiterere ya Grid na Flexbox ikora ku bikoresho byose.' },
        { title: 'JavaScript Ikora', description: 'Ibikorwa byihuta kandi byorohereza umukoresha ku rubuga.' },
      ],
    },
    skills: {
      eyebrow: 'Ubumenyi n’Ibikoresho',
      heading: 'Ikoranabuhanga n’uburyo bwo gushushanya nkoresha.',
      frontendCategory: 'Kubaka Frontend',
      frontendSubtitle: 'Kubaka imbuga zisobanutse kandi zikora ku bikoresho byose.',
      frontendFocuses: [
        'Imiterere isobanutse kandi ifasha bose',
        'Imigaragarire ikoresha Flexbox na Grid',
        'Ibikorwa bya JavaScript na DOM',
      ],
      uiuxCategory: 'Gushushanya UI/UX',
      uiuxSubtitle: 'Gutegura inzira z’umukoresha kuva ku bitekerezo kugera ku gishushanyo cya nyuma.',
      uiuxItems: [
        { name: 'Figma', focus: 'Ibikoresho bya UI n’imiterere' },
        { name: 'Wireframing', focus: 'Gutondeka amakuru n’urupapuro' },
        { name: 'Prototyping', focus: 'Ibishushanyo byo kugerageza' },
        { name: 'User Research', focus: 'Gusobanukirwa ibikenewe n’abakoresha' },
      ],
      workflowCards: [
        { title: 'Ibipimo by’Imbuga', detail: 'Imbuga zikora neza kuri telefoni, tableti na mudasobwa.' },
        { title: 'Imiterere Isukuye', detail: 'Imyandikire n’amabara asobanutse bitavuna amaso.' },
        { title: 'Uko Buto Zikora', detail: 'Amakuru agaragara igihe umukoresha akanze cyangwa atunze.' },
        { title: 'Kode Yoroshye Kuvugurura', detail: 'HTML, CSS na JavaScript biteguye neza.' },
      ],
    },
    services: {
      eyebrow: 'Serivisi',
      heading: 'Uko mfasha kugaragaza ibitekerezo byawe ku rubuga.',
      includesLabel: 'Harimo',
      items: [
        {
          title: 'Kubaka Frontend',
          description: 'Kubaka imbuga zikora neza kandi zoroshye kuvugurura hakoreshejwe HTML, CSS na JavaScript.',
          deliverables: ['HTML', 'CSS', 'JavaScript'],
        },
        {
          title: 'Gushushanya UI/UX',
          description: 'Gushushanya imbuga zoroshye gukoresha kuva ku bishushanyo mbonera kugera kuri porototayipu.',
          deliverables: ['Wireframes', 'Inzira z’umukoresha', 'Porototayipu', 'Igishushanyo cya UI', 'Ubushakashatsi'],
        },
        {
          title: 'Imbuga Zikora ku Bikoresho Byose',
          description: 'Gutegura imbuga zitanga uburambe bumwe kuri telefoni, tableti na mudasobwa.',
          deliverables: ['Mobile-first', 'Imyandikire ihinduka', 'Isuzuma ry’imbuga', 'Ubushobozi kuri bose'],
        },
      ],
    },
    projects: {
      eyebrow: 'Imishinga',
      heading: 'Imirimo yatoranyijwe.',
      subtitle: 'Imbuga zikora kuri interineti zubatswe muri HTML, CSS na JavaScript.',
      allTab: 'Byose',
      liveDemo: 'Reba Urubuga',
      viewProject: 'Reba Umushinga',
      items: [
        {
          id: 'smartjob-website',
          categoryLabel: 'Web Design',
          name: 'SmartJob Website',
          description: 'Urubuga rufasha gushakisha akazi rufite imiterere isobanutse kandi rworoshye gukoresha ku bikoresho byose.',
        },
        {
          id: 'pocket-app',
          categoryLabel: 'Frontend',
          name: 'Pocket',
          description: 'Porogaramu yo ku rubuga yubatswe n’imiterere isukuye n’imikorere ya frontend yoroshye.',
        },
      ],
      highlights: [
        { title: 'Imiterere Ihera kuri Telefoni', description: 'Imbuga zikora neza kuva ku mubyimba muto wa telefoni kugera kuri mudasobwa.' },
        { title: 'Imiterere Isobanutse', description: 'Ibice bitondekanye neza kandi byoroshye gusoma.' },
        { title: 'HTML, CSS na JavaScript', description: 'Kode y’ibanze isukuye kandi itanga ibikorwa binoze.' },
      ],
    },
    experience: {
      eyebrow: 'Uburambe n’Amashuri',
      heading: 'Amateka y’akazi n’amasomo.',
      helperPrefix: 'Aya makuru ashobora guhindurwa mu buryo bworoshye muri',
      items: [
        {
          typeLabel: 'Uburambe',
          title: 'Frontend Developer',
          organization: 'Ikigo / Umuryango (Ushobora Kuhahindura)',
          period: 'Umwaka – Umwaka',
          description: 'Shyiramo inshingano n’ibikorwa wagezeho—nk’ukubaka imbuga zikora neza no kunoza imikorere yazo.',
        },
        {
          typeLabel: 'Uburambe',
          title: 'UI/UX Designer',
          organization: 'Ikigo / Umuryango (Ushobora Kuhahindura)',
          period: 'Umwaka – Umwaka',
          description: 'Shyiramo ibikorwa byo gushushanya—nk’ubushakashatsi ku bakoresha no gukora porototayipu muri Figma.',
        },
        {
          typeLabel: 'Amashuri',
          title: 'Software Development',
          organization: 'Izina ry’Ishuri (Ushobora Kuhahindura)',
          period: 'Umwaka – Umwaka',
          description: 'Shyiramo amasomo wize n’ibyo wibanzeho mu bijyanye no kubaka porogaramu n’imbuga.',
        },
      ],
    },
    process: {
      eyebrow: 'Uburyo bwo Gukora',
      heading: 'Kuva ku gushakashaka kugera ku rubuga rwuzuye.',
      stepLabel: 'Intambwe',
      focusLabel: 'Icyibandwaho',
      outputLabel: 'Ibisohoka',
      steps: [
        {
          title: 'Discover',
          description: 'Gusobanukirwa ikibazo, abakoresha n’intego z’umushinga.',
          focus: 'Kumenya ikibazo nyacyo cy’umukoresha n’icyo urubuga rugamije.',
          output: 'Incamake y’umushinga n’intego z’abakoresha',
        },
        {
          title: 'Design',
          description: 'Gukora ibishushanyo mbonera, inzira n’imiterere y’urubuga.',
          focus: 'Gutondeka ibice by’urubuga no gukora ibishushanyo muri Figma.',
          output: 'Ibishushanyo mbonera na porototayipu',
        },
        {
          title: 'Develop',
          description: 'Guhindura igishushanyo mo kode ikora ku bikoresho byose.',
          focus: 'Kwandika HTML, CSS na JavaScript zisukuye kandi zikora neza.',
          output: 'Urubuga rukora neza kuri buri gikoresho',
        },
        {
          title: 'Improve',
          description: 'Kugerageza, kunoza no kongerera ubwiza urubuga rwa nyuma.',
          focus: 'Gusuzuma imikorere, amabara n’uburyo rworoshye gukoresha.',
          output: 'Urubuga rwizewe kandi rwiteguye gukoreshwa',
        },
      ],
    },
    contact: {
      eyebrow: 'Twandikire',
      heading: 'Dufatanye kubaka ikintu cyiza.',
      supportingText: 'Ufite umushinga, igitekerezo cyangwa amahirwe y’akazi? Ndishimiye kubyumva.',
      phoneLabel: 'Telefoni',
      emailLabel: 'Imeyili',
      linkedinLabel: 'LinkedIn',
      githubLabel: 'GitHub',
      instagramLabel: 'Instagram',
      nameLabel: 'Izina',
      namePlaceholder: 'Amazina yawe yose',
      emailInputLabel: 'Imeyili',
      emailPlaceholder: 'wowe@urugero.com',
      messageLabel: 'Ubutumwa',
      messagePlaceholder: 'Mbwira ibyerekeye umushinga wawe cyangwa icyo wifuza...',
      frontendNote: 'Isuzuma rya frontend rirakora · Biteguye guhuzwa na serivisi ya imeyili.',
      sendButton: 'Ohereza Ubutumwa',
      successTitlePrefix: 'Ubutumwa bwemejwe,',
      successBody:
        'Ubutumwa bwawe bwasuzumwe neza. Kuko uru rubuga rudafite serivisi ya backend yohereza imeyili, kanda hasi ubohereze ukoresheje porogaramu yawe ya imeyili kuri',
      openMailApp: 'Fungura muri Porogaramu ya Imeyili',
      resetForm: 'Subiramo',
      errName: 'Nyamuneka andika izina ryawe.',
      errEmail: 'Nyamuneka andika aderesi yawe ya imeyili.',
      errEmailInvalid: 'Nyamuneka andika imeyili yemewe.',
      errMessage: 'Nyamuneka andika ubutumwa bugufi.',
    },
    footer: {
      copyright: '© 2026 Shingiro Nael',
      credit: 'Byashushanyijwe kandi byubakwa na Shingiro Nael',
    },
    languagePicker: {
      searchPlaceholder: 'Shakisha cyangwa wandike ururimi...',
      instantGroup: 'Indimi Zihita Zihindura',
      worldGroup: 'Indimi Zose z’Isi',
      translateCustomPrefix: 'Hindura mu rurimi rwa',
      translating: 'Iri guhindura urubuga...',
      resetToEnglish: 'Subiza mu Cyongereza',
      noMatches: 'Kanda Enter cyangwa buto iri hasi kugira ngo uhindure.',
    },
  },
  fr: {
    nav: {
      home: 'Accueil',
      about: 'À propos',
      services: 'Services',
      projects: 'Projets',
      experience: 'Expérience',
      contact: 'Contact',
    },
    hero: {
      title: 'Développeur Frontend & Designer UI/UX',
      tagline: 'Je conçois et développe des expériences web esthétiques et centrées sur l’utilisateur.',
      supportingText:
        'Passionné par la transformation d’idées en expériences numériques intuitives, réactives et visuellement soignées grâce à un design réfléchi et un développement frontend propre.',
      viewWork: 'Voir mes projets',
      contactMe: 'Me contacter',
      photoPlaceholder: 'Emplacement photo de profil',
      floatingUiTitle: 'Design UI/UX',
      floatingUiSub: 'Figma & Parcours',
      floatingCodeTitle: 'Code Frontend',
      floatingCodeSub: 'HTML, CSS & JS',
      pillars: [
        { title: 'Design UI/UX', detail: 'Maquettes filaires, parcours utilisateurs et prototypes Figma' },
        { title: 'Code Frontend', detail: 'HTML sémantique, CSS moderne et JavaScript' },
        { title: 'Design Réactif', detail: 'Expériences fluides du mobile au grand écran' },
      ],
    },
    about: {
      eyebrow: 'À propos',
      heading: 'Allier conception d’interface réfléchie et code frontend propre.',
      paragraphs: [
        'Je suis Shingiro Nael, développeur frontend et designer UI/UX basé à Kigali, au Rwanda, spécialisé dans la création de produits numériques clairs, rapides et intuitifs.',
        'Mon travail se situe à la croisée du design visuel et du développement : transformer les besoins utilisateurs en maquettes structurées, interfaces cohérentes et code réactif.',
        'J’aime résoudre des problèmes concrets grâce à la technologie et j’accorde une grande attention à la typographie, à la clarté des mises en page, à l’accessibilité et aux détails du quotidien.',
      ],
      focusLabel: 'Spécialité',
      focusValue: 'Design UI/UX & Développement Frontend',
      basedInLabel: 'Localisation',
      uiPlusCode: 'UI + Code',
      wireframeTitle: 'Maquette d’interface',
      codeSnippetTitle: 'HTML · CSS · JavaScript',
      codeReadyText: 'Conçu pour la clarté, développé pour de vrais utilisateurs.',
      pipeline: ['Recherche', 'Wireframe', 'Prototype', 'Développement'],
      cards: [
        { title: 'Approche Utilisateur', description: 'Chaque mise en page commence par clarifier les objectifs et réduire les frictions.' },
        { title: 'HTML5 Sémantique', description: 'Structure propre et accessible pensée pour la lisibilité et le SEO.' },
        { title: 'Mises en page CSS', description: 'Architectures Grid et Flexbox adaptées à chaque taille d’écran.' },
        { title: 'JavaScript Interactif', description: 'Interactions DOM fluides, validation et comportements dynamiques.' },
      ],
    },
    skills: {
      eyebrow: 'Compétences & Outils',
      heading: 'Technologies principales et pratiques de design.',
      frontendCategory: 'Développement Frontend',
      frontendSubtitle: 'Créer des sites structurés, accessibles et réactifs avec les langages web essentiels.',
      frontendFocuses: [
        'Balisage sémantique, structure et accessibilité',
        'Mises en page réactives, Flexbox et CSS Grid',
        'Logique DOM interactive et JavaScript moderne',
      ],
      uiuxCategory: 'Design UI/UX',
      uiuxSubtitle: 'Concevoir des parcours intuitifs de l’exploration initiale aux prototypes interactifs.',
      uiuxItems: [
        { name: 'Figma', focus: 'Bibliothèques de composants et systèmes d’interface' },
        { name: 'Wireframing', focus: 'Hiérarchie de l’information et structure' },
        { name: 'Prototypage', focus: 'Parcours interactifs et tests d’utilisabilité' },
        { name: 'Recherche Utilisateur', focus: 'Comprendre les besoins et points de friction' },
      ],
      workflowCards: [
        { title: 'Formats Réactifs', detail: 'Mises en page vérifiées sur mobile, tablette et ordinateur.' },
        { title: 'Hiérarchie Visuelle', detail: 'Typographie, espacements et contrastes pensés pour la lecture.' },
        { title: 'États Interactifs', detail: 'Retours clairs au survol, au focus et lors de la validation.' },
        { title: 'Code Maintenable', detail: 'Modules HTML, CSS et JavaScript organisés et évolutifs.' },
      ],
    },
    services: {
      eyebrow: 'Services',
      heading: 'Comment j’aide à donner vie à vos projets numériques.',
      includesLabel: 'Points clés',
      items: [
        {
          title: 'Développement Frontend',
          description: 'Création de sites web réactifs, interactifs et maintenables avec HTML, CSS et JavaScript.',
          deliverables: ['HTML', 'CSS', 'JavaScript'],
        },
        {
          title: 'Design UI/UX',
          description: 'Conception d’expériences numériques intuitives, des premiers croquis aux prototypes aboutis.',
          deliverables: ['Wireframes', 'Parcours utilisateurs', 'Prototypes', 'Design UI', 'Recherche utilisateur'],
        },
        {
          title: 'Web Design Réactif',
          description: 'Création de sites offrant une expérience fluide et cohérente sur mobile, tablette et bureau.',
          deliverables: ['Approche mobile-first', 'Typographie fluide', 'Tests multi-navigateurs', 'Accessibilité'],
        },
      ],
    },
    projects: {
      eyebrow: 'Projets',
      heading: 'Réalisations sélectionnées.',
      subtitle: 'Projets web en ligne construits avec HTML, CSS et JavaScript.',
      allTab: 'Tous',
      liveDemo: 'Voir le site',
      viewProject: 'Voir le projet',
      items: [
        {
          id: 'smartjob-website',
          categoryLabel: 'Web Design',
          name: 'SmartJob Website',
          description: 'Projet web en ligne dédié à la recherche d’emploi avec une hiérarchie claire et une navigation réactive.',
        },
        {
          id: 'pocket-app',
          categoryLabel: 'Frontend',
          name: 'Pocket',
          description: 'Application web en ligne conçue avec une structure épurée, un style réactif et des interactions fluides.',
        },
      ],
      highlights: [
        { title: 'Structure Mobile-First', description: 'Points de rupture adaptés des téléphones 320px aux grands écrans.' },
        { title: 'Mises en Page Structurées', description: 'Hiérarchie visuelle claire, sections lisibles et espacements équilibrés.' },
        { title: 'HTML, CSS & JavaScript', description: 'Balisage sémantique, styles modernes et comportement interactif.' },
      ],
    },
    experience: {
      eyebrow: 'Expérience & Formation',
      heading: 'Parcours & formation académique.',
      helperPrefix: 'Entrées modifiables de la chronologie. Mettez à jour ces informations dans',
      items: [
        {
          typeLabel: 'Expérience',
          title: 'Développeur Frontend',
          organization: 'Entreprise / Organisation (Modifiable)',
          period: 'Année – Année',
          description: 'Ajoutez ici vos responsabilités et réalisations : intégration réactive, composants et amélioration de l’ergonomie.',
        },
        {
          typeLabel: 'Expérience',
          title: 'Designer UI/UX',
          organization: 'Entreprise / Organisation (Modifiable)',
          period: 'Année – Année',
          description: 'Ajoutez ici vos projets de design : recherche utilisateur, maquettes, prototypes Figma et collaboration technique.',
        },
        {
          typeLabel: 'Formation',
          title: 'Développement Logiciel',
          organization: 'Établissement (Modifiable)',
          period: 'Année – Année',
          description: 'Ajoutez votre programme académique, spécialisation ou étapes clés en développement logiciel et design d’interface.',
        },
      ],
    },
    process: {
      eyebrow: 'Processus de Design',
      heading: 'De la découverte initiale à la mise en production.',
      stepLabel: 'Étape',
      focusLabel: 'Objectif principal',
      outputLabel: 'Livrable',
      steps: [
        {
          title: 'Découvrir',
          description: 'Comprendre le problème, les utilisateurs et les objectifs.',
          focus: 'Définir le besoin utilisateur principal, le public cible et le périmètre.',
          output: 'Cahier des charges, objectifs et arborescence',
        },
        {
          title: 'Concevoir',
          description: 'Créer des wireframes, parcours et maquettes visuelles.',
          focus: 'Structurer les écrans, flux de navigation et visuels sur Figma.',
          output: 'Maquettes filaires, parcours et prototype Figma',
        },
        {
          title: 'Développer',
          description: 'Transformer le design validé en code réactif et fonctionnel.',
          focus: 'Intégrer les interfaces en HTML, CSS et JavaScript propres.',
          output: 'Pages web réactives et interactions fonctionnelles',
        },
        {
          title: 'Améliorer',
          description: 'Tester, affiner, optimiser et perfectionner l’expérience finale.',
          focus: 'Vérifier le rendu sur tous les écrans, les contrastes et l’accessibilité.',
          output: 'Expérience testée, accessible et prête à être publiée',
        },
      ],
    },
    contact: {
      eyebrow: 'Contact',
      heading: 'Construisons quelque chose de grand ensemble.',
      supportingText: 'Vous avez un projet, une idée ou une opportunité ? Je serais ravi d’en discuter.',
      phoneLabel: 'Téléphone',
      emailLabel: 'E-mail',
      linkedinLabel: 'LinkedIn',
      githubLabel: 'GitHub',
      instagramLabel: 'Instagram',
      nameLabel: 'Nom',
      namePlaceholder: 'Votre nom complet',
      emailInputLabel: 'E-mail',
      emailPlaceholder: 'vous@exemple.com',
      messageLabel: 'Message',
      messagePlaceholder: 'Parlez-moi de votre projet ou opportunité...',
      frontendNote: 'Validation côté client activée · Prêt à être connecté à un service d’e-mail.',
      sendButton: 'Envoyer le message',
      successTitlePrefix: 'Message validé,',
      successBody:
        'Votre message a passé la validation frontend. Ce site fonctionnant actuellement sans serveur d’e-mail, cliquez ci-dessous pour l’envoyer via votre messagerie à',
      openMailApp: 'Ouvrir l’application e-mail',
      resetForm: 'Réinitialiser',
      errName: 'Veuillez entrer votre nom.',
      errEmail: 'Veuillez entrer votre adresse e-mail.',
      errEmailInvalid: 'Veuillez entrer une adresse e-mail valide.',
      errMessage: 'Veuillez écrire un court message.',
    },
    footer: {
      copyright: '© 2026 Shingiro Nael',
      credit: 'Conçu & développé par Shingiro Nael',
    },
    languagePicker: {
      searchPlaceholder: 'Rechercher ou saisir une langue...',
      instantGroup: 'Langues instantanées',
      worldGroup: 'Toutes les langues du monde',
      translateCustomPrefix: 'Traduire en',
      translating: 'Traduction en cours...',
      resetToEnglish: 'Revenir en anglais',
      noMatches: 'Appuyez sur Entrée ou cliquez ci-dessous pour traduire.',
    },
  },
  sw: {
    nav: {
      home: 'Nyumbani',
      about: 'Kuhusu',
      services: 'Huduma',
      projects: 'Miradi',
      experience: 'Uzoefu',
      contact: 'Wasiliana',
    },
    hero: {
      title: 'Msanidi wa Frontend & Mbunifu wa UI/UX',
      tagline: 'Ninabuni na kujenga tovuti nzuri zinazomlenga mtumiaji.',
      supportingText:
        'Nina shauku ya kubadilisha mawazo kuwa mifumo ya kidijitali rahisi kutumia, inayojibika vyema kwenye vifaa vyote, na yenye mvuto wa kipekee kupitia ubunifu makini na msimbo safi wa frontend.',
      viewWork: 'Tazama Kazi Zangu',
      contactMe: 'Wasiliana Nami',
      photoPlaceholder: 'Nafasi ya Picha ya Wasifu',
      floatingUiTitle: 'Ubunifu wa UI/UX',
      floatingUiSub: 'Figma & Mifumo',
      floatingCodeTitle: 'Msimbo wa Frontend',
      floatingCodeSub: 'HTML, CSS & JS',
      pillars: [
        { title: 'Ubunifu wa UI/UX', detail: 'Wireframes, mtiririko wa mtumiaji na mifano ya Figma' },
        { title: 'Msimbo wa Frontend', detail: 'HTML safi, CSS ya kisasa na JavaScript' },
        { title: 'Mifumo Inayojibika', detail: 'Uzoefu thabiti kuanzia simu hadi kompyuta' },
      ],
    },
    about: {
      eyebrow: 'Kuhusu Mimi',
      heading: 'Kuunganisha ubunifu wa kiolesura na msimbo safi wa frontend.',
      paragraphs: [
        'Mimi ni Shingiro Nael, Msanidi wa Frontend na Mbunifu wa UI/UX niliyeko Kigali, Rwanda, ninalenga kujenga bidhaa za kidijitali zilizo wazi, zenye kasi na rahisi kutumia.',
        'Kazi yangu iko pale ambapo ubunifu wa kuona unakutana na utekelezaji—nikibadilisha changamoto za watumiaji kuwa michoro ya msingi, violesura thabiti, na msimbo unaojibika.',
        'Ninapenda kutatua matatizo halisi kupitia teknolojia na ninajali sana mpangilio wa maandishi, uwazi wa kurasa, ufikiaji kwa wote, na maelezo madogo yanayofanya tovuti ifurahishe.',
      ],
      focusLabel: 'Mtazamo',
      focusValue: 'Ubunifu wa UI/UX & Usanidi wa Frontend',
      basedInLabel: 'Mahali',
      uiPlusCode: 'UI + Msimbo',
      wireframeTitle: 'Mchoro wa Kiolesura',
      codeSnippetTitle: 'HTML · CSS · JavaScript',
      codeReadyText: 'Imebuniwa kwa uwazi, imejengwa kwa watumiaji halisi.',
      pipeline: ['Utafiti', 'Wireframe', 'Mfano', 'Ujenzi wa Msimbo'],
      cards: [
        { title: 'Mtumiaji Kwanza', description: 'Kila mpangilio huanza kwa kufafanua malengo ya mtumiaji.' },
        { title: 'HTML5 Safi', description: 'Muundo bora wa kurasa unaorahisisha usomaji na SEO.' },
        { title: 'Mipangilio ya CSS', description: 'Grid na Flexbox zinazobadilika kulingana na skrini.' },
        { title: 'JavaScript Hai', description: 'Mwingiliano laini wa DOM na uthibitishaji wa fomu.' },
      ],
    },
    skills: {
      eyebrow: 'Ujuzi na Vifaa',
      heading: 'Teknolojia za msingi na mbinu za ubunifu.',
      frontendCategory: 'Usanidi wa Frontend',
      frontendSubtitle: 'Kujenga tovuti zilizopangwa vyema, zinazoweza kufikiwa na zenye muundo mzuri.',
      frontendFocuses: [
        'Muundo wa semantiki na ufikiaji bora',
        'Mipangilio inayojibika kwa Flexbox na CSS Grid',
        'Mantiki ya DOM na mwingiliano wa JavaScript',
      ],
      uiuxCategory: 'Ubunifu wa UI/UX',
      uiuxSubtitle: 'Kubuni mifumo rahisi kuanzia wazo la awali hadi mifano hai.',
      uiuxItems: [
        { name: 'Figma', focus: 'Maktaba za vipengele na mifumo ya UI' },
        { name: 'Wireframing', focus: 'Mpangilio wa taarifa na muundo wa ukurasa' },
        { name: 'Prototyping', focus: 'Mifano ya majaribio na mtiririko wa kazi' },
        { name: 'User Research', focus: 'Kuelewa mahitaji ya watumiaji' },
      ],
      workflowCards: [
        { title: 'Vipimo vya Skrini', detail: 'Kurasa zilizojaribiwa kwenye simu, tableti na kompyuta.' },
        { title: 'Uwazi wa Muonekano', detail: 'Fonti, nafasi na utofautishaji mzuri wa rangi.' },
        { title: 'Hali za Mwingiliano', detail: 'Mwitikio wazi mtumiaji anapobonyeza au kupita juu.' },
        { title: 'Msimbo Rahisi Kutunza', detail: 'Faili za HTML, CSS na JavaScript zilizopangwa vyema.' },
      ],
    },
    services: {
      eyebrow: 'Huduma',
      heading: 'Jinsi ninavyosaidia kufanikisha bidhaa za kidijitali.',
      includesLabel: 'Inajumuisha',
      items: [
        {
          title: 'Usanidi wa Frontend',
          description: 'Kujenga tovuti zinazojibika, zenye mwingiliano na zinazodumu kwa kutumia HTML, CSS na JavaScript.',
          deliverables: ['HTML', 'CSS', 'JavaScript'],
        },
        {
          title: 'Ubunifu wa UI/UX',
          description: 'Kubuni uzoefu mzuri wa kidijitali kuanzia dhana za mwanzo na michoro hadi mifano kamili.',
          deliverables: ['Wireframes', 'Mtiririko wa mtumiaji', 'Prototypes', 'Ubunifu wa UI', 'Utafiti'],
        },
        {
          title: 'Ubunifu wa Tovuti Inayojibika',
          description: 'Kuunda tovuti zinazotoa uzoefu laini na thabiti kwenye simu, tableti na kompyuta.',
          deliverables: ['Mobile-first', 'Maandishi yanayobadilika', 'Majaribio ya vivinjari', 'Ufikiaji'],
        },
      ],
    },
    projects: {
      eyebrow: 'Miradi',
      heading: 'Kazi zilizochaguliwa.',
      subtitle: 'Miradi ya wavuti inayofanya kazi iliyojengwa kwa HTML, CSS na JavaScript.',
      allTab: 'Yote',
      liveDemo: 'Fungua Tovuti',
      viewProject: 'Tazama Mradi',
      items: [
        {
          id: 'smartjob-website',
          categoryLabel: 'Web Design',
          name: 'SmartJob Website',
          description: 'Mradi wa tovuti unaolenga utafutaji wa ajira ukiwa na mpangilio mzuri na urambazaji wazi kwenye vifaa vyote.',
        },
        {
          id: 'pocket-app',
          categoryLabel: 'Frontend',
          name: 'Pocket',
          description: 'Programu ya wavuti iliyojengwa kwa muundo safi, mwonekano unaojibika, na mwingiliano wa frontend.',
        },
      ],
      highlights: [
        { title: 'Muundo wa Simu Kwanza', description: 'Mipangilio inayobadilika vyema kutoka simu ndogo za 320px hadi skrini kubwa.' },
        { title: 'Mpangilio Wenye Utaratibu', description: 'Uwazi wa taarifa, sehemu zinazosomeka haraka na nafasi linganifu.' },
        { title: 'HTML, CSS & JavaScript', description: 'Msimbo safi wa msingi, mitindo ya kisasa na mwingiliano bora.' },
      ],
    },
    experience: {
      eyebrow: 'Uzoefu na Elimu',
      heading: 'Historia ya kazi na msingi wa kitaaluma.',
      helperPrefix: 'Vipengele hivi vinaweza kuhaririwa kwa urahisi ndani ya',
      items: [
        {
          typeLabel: 'Uzoefu',
          title: 'Frontend Developer',
          organization: 'Kampuni / Shirika (Hariri Hapa)',
          period: 'Mwaka – Mwaka',
          description: 'Ongeza majukumu na mafanikio yako hapa—kama vile kujenga kurasa zinazojibika na kuboresha urahisi wa matumizi.',
        },
        {
          typeLabel: 'Uzoefu',
          title: 'UI/UX Designer',
          organization: 'Kampuni / Shirika (Hariri Hapa)',
          period: 'Mwaka – Mwaka',
          description: 'Ongeza kazi zako za ubunifu hapa—kama utafiti wa watumiaji, wireframes na mifano ya Figma.',
        },
        {
          typeLabel: 'Elimu',
          title: 'Software Development',
          organization: 'Jina la Chuo / Taasisi (Hariri Hapa)',
          period: 'Mwaka – Mwaka',
          description: 'Ongeza programu yako ya masomo au mafanikio muhimu katika usanidi wa programu na ubunifu wa kiolesura.',
        },
      ],
    },
    process: {
      eyebrow: 'Mchakato wa Ubunifu',
      heading: 'Kuanzia uchunguzi wa awali hadi utekelezaji kamili.',
      stepLabel: 'Hatua',
      focusLabel: 'Lengo Kuu',
      outputLabel: 'Matokeo',
      steps: [
        {
          title: 'Gundua',
          description: 'Kuelewa tatizo, watumiaji na malengo ya mradi.',
          focus: 'Kufafanua changamoto halisi ya mtumiaji na malengo ya tovuti.',
          output: 'Muhtasari wa mradi na malengo ya watumiaji',
        },
        {
          title: 'Buni',
          description: 'Kuunda wireframes, mtiririko na michoro ya kiolesura.',
          focus: 'Kupanga muundo wa kurasa, njia za mtumiaji na mifano ya Figma.',
          output: 'Michoro ya awali na mfano wa majaribio (Prototype)',
        },
        {
          title: 'Jenga',
          description: 'Kubadilisha ubunifu kuwa msimbo unaofanya kazi.',
          focus: 'Kuandika HTML, CSS na JavaScript safi kwa vifaa vyote.',
          output: 'Kurasa zinazojibika na vipengele vinavyofanya kazi',
        },
        {
          title: 'Boresha',
          description: 'Kujaribu, kurekebisha na kuboresha uzoefu wa mwisho.',
          focus: 'Kukagua muonekano kwenye skrini mbalimbali na ufikiaji bora.',
          output: 'Mfumo uliokaguliwa na uko tayari kuzinduliwa',
        },
      ],
    },
    contact: {
      eyebrow: 'Wasiliana',
      heading: 'Tujenge kitu kizuri pamoja.',
      supportingText: 'Una mradi, wazo, au fursa? Ningependa kusikia kutoka kwako.',
      phoneLabel: 'Simu',
      emailLabel: 'Barua pepe',
      linkedinLabel: 'LinkedIn',
      githubLabel: 'GitHub',
      instagramLabel: 'Instagram',
      nameLabel: 'Jina',
      namePlaceholder: 'Jina lako kamili',
      emailInputLabel: 'Barua pepe',
      emailPlaceholder: 'wewe@mfano.com',
      messageLabel: 'Ujumbe',
      messagePlaceholder: 'Niambie kuhusu mradi au fursa yako...',
      frontendNote: 'Uthibitishaji wa frontend umewashwa · Tayari kuunganishwa na huduma ya barua pepe.',
      sendButton: 'Tuma Ujumbe',
      successTitlePrefix: 'Ujumbe umethibitishwa,',
      successBody:
        'Ujumbe wako umepita uthibitishaji. Kwa kuwa tovuti hii haina seva ya barua pepe kwa sasa, bofya hapa chini kutuma kupitia programu yako ya barua pepe kwa',
      openMailApp: 'Fungua Programu ya Barua Pepe',
      resetForm: 'Weka Upya',
      errName: 'Tafadhali weka jina lako.',
      errEmail: 'Tafadhali weka barua pepe yako.',
      errEmailInvalid: 'Tafadhali weka barua pepe sahihi.',
      errMessage: 'Tafadhali andika ujumbe mfupi.',
    },
    footer: {
      copyright: '© 2026 Shingiro Nael',
      credit: 'Imebuniwa na kujengwa na Shingiro Nael',
    },
    languagePicker: {
      searchPlaceholder: 'Tafuta au andika lugha yoyote...',
      instantGroup: 'Lugha za Haraka',
      worldGroup: 'Lugha Zote za Dunia',
      translateCustomPrefix: 'Tafsiri kwenda',
      translating: 'Inatafsiri tovuti...',
      resetToEnglish: 'Rudisha Kiingereza',
      noMatches: 'Bonyeza Enter au kitufe hapa chini kutafsiri.',
    },
  },
  es: {
    nav: {
      home: 'Inicio',
      about: 'Sobre mí',
      services: 'Servicios',
      projects: 'Proyectos',
      experience: 'Experiencia',
      contact: 'Contacto',
    },
    hero: {
      title: 'Desarrollador Frontend y Diseñador UI/UX',
      tagline: 'Diseño y construyo experiencias web atractivas centradas en el usuario.',
      supportingText:
        'Apasionado por convertir ideas en experiencias digitales intuitivas, responsivas y visualmente cuidadas mediante un diseño reflexivo y código frontend limpio.',
      viewWork: 'Ver mis proyectos',
      contactMe: 'Contáctame',
      photoPlaceholder: 'Espacio para foto de perfil',
      floatingUiTitle: 'Diseño UI/UX',
      floatingUiSub: 'Figma y Flujos',
      floatingCodeTitle: 'Código Frontend',
      floatingCodeSub: 'HTML, CSS y JS',
      pillars: [
        { title: 'Diseño UI/UX', detail: 'Wireframes, flujos de usuario y prototipos en Figma' },
        { title: 'Código Frontend', detail: 'HTML semántico, CSS moderno y JavaScript' },
        { title: 'Diseño Responsivo', detail: 'Experiencias fluidas del móvil al escritorio' },
      ],
    },
    about: {
      eyebrow: 'Sobre mí',
      heading: 'Uniendo el diseño de interfaces con un código frontend limpio.',
      paragraphs: [
        'Soy Shingiro Nael, Desarrollador Frontend y Diseñador UI/UX en Kigali, Ruanda, enfocado en crear productos digitales claros, rápidos e intuitivos.',
        'Mi trabajo une el diseño visual con la implementación: transformo necesidades reales en wireframes estructurados, interfaces coherentes y código responsivo.',
        'Disfruto resolviendo problemas prácticos mediante la tecnología y cuido la tipografía, la claridad visual, la accesibilidad y cada detalle de uso.',
      ],
      focusLabel: 'Enfoque',
      focusValue: 'Diseño UI/UX y Desarrollo Frontend',
      basedInLabel: 'Ubicación',
      uiPlusCode: 'UI + Código',
      wireframeTitle: 'Wireframe de Interfaz',
      codeSnippetTitle: 'HTML · CSS · JavaScript',
      codeReadyText: 'Diseñado con claridad, creado para usuarios reales.',
      pipeline: ['Investigación', 'Wireframe', 'Prototipo', 'Desarrollo'],
      cards: [
        { title: 'Enfoque en el Usuario', description: 'Cada diseño comienza aclarando objetivos y reduciendo fricción.' },
        { title: 'HTML5 Semántico', description: 'Estructura limpia y accesible pensada para legibilidad y SEO.' },
        { title: 'CSS Moderno', description: 'Arquitecturas Grid y Flexbox adaptadas a cualquier pantalla.' },
        { title: 'JavaScript Interactivo', description: 'Interacciones fluidas del DOM, validación y dinamismo.' },
      ],
    },
    skills: {
      eyebrow: 'Habilidades y Herramientas',
      heading: 'Tecnologías clave y prácticas de diseño.',
      frontendCategory: 'Desarrollo Frontend',
      frontendSubtitle: 'Construcción de sitios estructurados, accesibles y responsivos.',
      frontendFocuses: [
        'Marcado semántico, estructura y accesibilidad',
        'Diseños responsivos con Flexbox y CSS Grid',
        'Lógica interactiva del DOM y JavaScript moderno',
      ],
      uiuxCategory: 'Diseño UI/UX',
      uiuxSubtitle: 'Creación de flujos intuitivos desde la exploración inicial hasta prototipos.',
      uiuxItems: [
        { name: 'Figma', focus: 'Bibliotecas de componentes y sistemas UI' },
        { name: 'Wireframing', focus: 'Jerarquía de información y estructura' },
        { name: 'Prototipado', focus: 'Flujos interactivos y pruebas de usabilidad' },
        { name: 'Investigación UX', focus: 'Comprensión de necesidades y fricciones' },
      ],
      workflowCards: [
        { title: 'Puntos de Ruptura', detail: 'Diseños probados en móvil, tableta y escritorio.' },
        { title: 'Jerarquía Visual', detail: 'Tipografía, espaciado y contraste pensados para leer fácil.' },
        { title: 'Estados Interactivos', detail: 'Respuesta clara en hover, foco y validación de formularios.' },
        { title: 'Código Mantenible', detail: 'Módulos HTML, CSS y JavaScript ordenados y claros.' },
      ],
    },
    services: {
      eyebrow: 'Servicios',
      heading: 'Cómo ayudo a hacer realidad tus productos digitales.',
      includesLabel: 'Incluye',
      items: [
        {
          title: 'Desarrollo Frontend',
          description: 'Creación de sitios web responsivos, interactivos y mantenibles con HTML, CSS y JavaScript.',
          deliverables: ['HTML', 'CSS', 'JavaScript'],
        },
        {
          title: 'Diseño UI/UX',
          description: 'Diseño de experiencias digitales intuitivas desde bocetos y wireframes hasta prototipos pulidos.',
          deliverables: ['Wireframes', 'Flujos de usuario', 'Prototipos', 'Diseño UI', 'Investigación'],
        },
        {
          title: 'Diseño Web Responsivo',
          description: 'Sitios web que brindan una experiencia fluida y consistente en móviles, tabletas y ordenadores.',
          deliverables: ['Mobile-first', 'Tipografía fluida', 'Pruebas en navegadores', 'Accesibilidad'],
        },
      ],
    },
    projects: {
      eyebrow: 'Proyectos',
      heading: 'Trabajo seleccionado.',
      subtitle: 'Proyectos web publicados construidos con HTML, CSS y JavaScript.',
      allTab: 'Todos',
      liveDemo: 'Ver Demo',
      viewProject: 'Ver Proyecto',
      items: [
        {
          id: 'smartjob-website',
          categoryLabel: 'Web Design',
          name: 'SmartJob Website',
          description: 'Proyecto web en vivo enfocado en búsqueda de empleo con diseño responsivo y navegación clara.',
        },
        {
          id: 'pocket-app',
          categoryLabel: 'Frontend',
          name: 'Pocket',
          description: 'Aplicación web publicada diseñada con estructura limpia, estilo responsivo e interacción frontend.',
        },
      ],
      highlights: [
        { title: 'Estructura Mobile-First', description: 'Puntos de ruptura limpios desde pantallas de 320px hasta monitores.' },
        { title: 'Diseños Estructurados', description: 'Jerarquía visual clara, secciones legibles y espaciado equilibrado.' },
        { title: 'HTML, CSS y JavaScript', description: 'Marcado semántico, estilo moderno y comportamiento interactivo.' },
      ],
    },
    experience: {
      eyebrow: 'Experiencia y Educación',
      heading: 'Trayectoria y base académica.',
      helperPrefix: 'Entradas editables de la línea de tiempo. Actualízalas en',
      items: [
        {
          typeLabel: 'Experiencia',
          title: 'Frontend Developer',
          organization: 'Empresa / Organización (Editable)',
          period: 'Año – Año',
          description: 'Agrega aquí tus responsabilidades y logros: interfaces responsivas, componentes y usabilidad.',
        },
        {
          typeLabel: 'Experiencia',
          title: 'UI/UX Designer',
          organization: 'Empresa / Organización (Editable)',
          period: 'Año – Año',
          description: 'Agrega aquí tu trabajo de diseño: investigación, wireframes y prototipos interactivos en Figma.',
        },
        {
          typeLabel: 'Educación',
          title: 'Software Development',
          organization: 'Institución (Editable)',
          period: 'Año – Año',
          description: 'Agrega aquí tu programa académico o hitos de aprendizaje en desarrollo de software y diseño.',
        },
      ],
    },
    process: {
      eyebrow: 'Proceso de Diseño',
      heading: 'Del descubrimiento inicial a la implementación final.',
      stepLabel: 'Paso',
      focusLabel: 'Enfoque Principal',
      outputLabel: 'Entregable',
      steps: [
        {
          title: 'Descubrir',
          description: 'Comprender el problema, los usuarios y los objetivos.',
          focus: 'Definir el problema principal del usuario, el público y el alcance.',
          output: 'Resumen del proyecto y mapa del sitio',
        },
        {
          title: 'Diseñar',
          description: 'Crear wireframes, flujos de usuario y diseños visuales.',
          focus: 'Estructurar pantallas, navegación y prototipos en Figma.',
          output: 'Wireframes, flujos y prototipo en Figma',
        },
        {
          title: 'Desarrollar',
          description: 'Convertir el diseño aprobado en código responsivo.',
          focus: 'Implementar los diseños en HTML, CSS y JavaScript limpios.',
          output: 'Páginas responsivas y componentes funcionales',
        },
        {
          title: 'Mejorar',
          description: 'Probar, refinar, optimizar y pulir la experiencia final.',
          focus: 'Validar tamaños de pantalla, contraste y usabilidad general.',
          output: 'Experiencia accesible, probada y lista para lanzar',
        },
      ],
    },
    contact: {
      eyebrow: 'Contacto',
      heading: 'Construyamos algo grandioso juntos.',
      supportingText: '¿Tienes un proyecto, idea u oportunidad? Me encantaría escucharte.',
      phoneLabel: 'Teléfono',
      emailLabel: 'Correo',
      linkedinLabel: 'LinkedIn',
      githubLabel: 'GitHub',
      instagramLabel: 'Instagram',
      nameLabel: 'Nombre',
      namePlaceholder: 'Tu nombre completo',
      emailInputLabel: 'Correo electrónico',
      emailPlaceholder: 'tu@ejemplo.com',
      messageLabel: 'Mensaje',
      messagePlaceholder: 'Cuéntame sobre tu proyecto u oportunidad...',
      frontendNote: 'Validación frontend activa · Listo para conectar un servicio de correo.',
      sendButton: 'Enviar Mensaje',
      successTitlePrefix: 'Mensaje validado,',
      successBody:
        'Tu mensaje pasó la validación. Como este sitio aún no tiene un servidor de correo conectado, haz clic abajo para enviarlo desde tu aplicación de correo a',
      openMailApp: 'Abrir App de Correo',
      resetForm: 'Reiniciar',
      errName: 'Por favor ingresa tu nombre.',
      errEmail: 'Por favor ingresa tu correo electrónico.',
      errEmailInvalid: 'Por favor ingresa un correo válido.',
      errMessage: 'Por favor escribe un breve mensaje.',
    },
    footer: {
      copyright: '© 2026 Shingiro Nael',
      credit: 'Diseñado y desarrollado por Shingiro Nael',
    },
    languagePicker: {
      searchPlaceholder: 'Busca o escribe cualquier idioma...',
      instantGroup: 'Idiomas Instantáneos',
      worldGroup: 'Todos los Idiomas',
      translateCustomPrefix: 'Traducir a',
      translating: 'Traduciendo portafolio...',
      resetToEnglish: 'Volver a inglés',
      noMatches: 'Presiona Enter o haz clic abajo para traducir.',
    },
  },
  de: {
    nav: {
      home: 'Start',
      about: 'Über mich',
      services: 'Leistungen',
      projects: 'Projekte',
      experience: 'Werdegang',
      contact: 'Kontakt',
    },
    hero: {
      title: 'Frontend-Entwickler & UI/UX-Designer',
      tagline: 'Ich gestalte und entwickle ansprechende, nutzerzentrierte Web-Erlebnisse.',
      supportingText:
        'Mit Leidenschaft verwandle ich Ideen durch durchdachtes Design und sauberen Frontend-Code in intuitive, responsive und visuell überzeugende digitale Produkte.',
      viewWork: 'Projekte ansehen',
      contactMe: 'Kontakt aufnehmen',
      photoPlaceholder: 'Platzhalter für Profilfoto',
      floatingUiTitle: 'UI/UX-Design',
      floatingUiSub: 'Figma & Flows',
      floatingCodeTitle: 'Frontend-Code',
      floatingCodeSub: 'HTML, CSS & JS',
      pillars: [
        { title: 'UI/UX-Design', detail: 'Wireframes, Nutzerflüsse & Figma-Prototypen' },
        { title: 'Frontend-Code', detail: 'Semantisches HTML, modernes CSS & JavaScript' },
        { title: 'Responsive Systeme', detail: 'Konsistente Erlebnisse vom Smartphone bis zum Desktop' },
      ],
    },
    about: {
      eyebrow: 'Über mich',
      heading: 'Durchdachtes Interface-Design trifft auf sauberen Frontend-Code.',
      paragraphs: [
        'Ich bin Shingiro Nael, Frontend-Entwickler und UI/UX-Designer aus Kigali, Ruanda, mit Fokus auf klare, schnelle und intuitive digitale Produkte.',
        'Meine Arbeit verbindet visuelles Design mit technischer Umsetzung – Nutzerbedürfnisse werden in strukturierte Wireframes, stimmige Oberflächen und responsiven Code übersetzt.',
        'Ich löse praktische Probleme gern mit Technologie und lege großen Wert auf Typografie, klare Layouts, Barrierefreiheit und durchdachte Details.',
      ],
      focusLabel: 'Schwerpunkt',
      focusValue: 'UI/UX-Design & Frontend-Entwicklung',
      basedInLabel: 'Standort',
      uiPlusCode: 'UI + Code',
      wireframeTitle: 'Interface-Wireframe',
      codeSnippetTitle: 'HTML · CSS · JavaScript',
      codeReadyText: 'Für Klarheit gestaltet, für echte Nutzer gebaut.',
      pipeline: ['Analyse', 'Wireframe', 'Prototyp', 'Entwicklung'],
      cards: [
        { title: 'Nutzerfokus', description: 'Jedes Layout beginnt mit klaren Nutzerzielen.' },
        { title: 'Semantisches HTML5', description: 'Saubere, zugängliche Struktur für Lesbarkeit und SEO.' },
        { title: 'Moderne CSS-Layouts', description: 'Flexible Grid- und Flexbox-Systeme für jedes Gerät.' },
        { title: 'Interaktives JavaScript', description: 'Flüssige DOM-Interaktionen und Formularvalidierung.' },
      ],
    },
    skills: {
      eyebrow: 'Fähigkeiten & Werkzeuge',
      heading: 'Kerntechnologien und Designmethoden.',
      frontendCategory: 'Frontend-Entwicklung',
      frontendSubtitle: 'Strukturierte, zugängliche und responsive Websites mit Web-Standards.',
      frontendFocuses: [
        'Semantisches Markup, Struktur & Barrierefreiheit',
        'Responsive Layouts mit Flexbox & CSS Grid',
        'Interaktive DOM-Logik & modernes JavaScript',
      ],
      uiuxCategory: 'UI/UX-Design',
      uiuxSubtitle: 'Intuitive Nutzerflüsse von ersten Skizzen bis zum interaktiven Prototyp.',
      uiuxItems: [
        { name: 'Figma', focus: 'Komponentenbibliotheken & UI-Systeme' },
        { name: 'Wireframing', focus: 'Informationshierarchie & Seitenstruktur' },
        { name: 'Prototyping', focus: 'Interaktive Abläufe & Usability-Tests' },
        { name: 'User Research', focus: 'Nutzerbedürfnisse verstehen' },
      ],
      workflowCards: [
        { title: 'Responsive Breakpoints', detail: 'Getestet auf Smartphone, Tablet und Desktop.' },
        { title: 'Visuelle Hierarchie', detail: 'Klare Typografie, Abstände und Kontraste.' },
        { title: 'Interaktive Zustände', detail: 'Klares Feedback bei Hover, Fokus und Eingaben.' },
        { title: 'Wartbarer Code', detail: 'Sauber gegliederte HTML-, CSS- und JS-Dateien.' },
      ],
    },
    services: {
      eyebrow: 'Leistungen',
      heading: 'Wie ich digitale Produkte zum Leben erwecke.',
      includesLabel: 'Fokus',
      items: [
        {
          title: 'Frontend-Entwicklung',
          description: 'Entwicklung responsiver, interaktiver und wartbarer Websites mit HTML, CSS und JavaScript.',
          deliverables: ['HTML', 'CSS', 'JavaScript'],
        },
        {
          title: 'UI/UX-Design',
          description: 'Gestaltung intuitiver digitaler Erlebnisse von ersten Konzepten über Wireframes bis zu Prototypen.',
          deliverables: ['Wireframes', 'Nutzerflüsse', 'Prototypen', 'UI-Design', 'Nutzerforschung'],
        },
        {
          title: 'Responsives Webdesign',
          description: 'Websites mit konsistenter Benutzerführung auf Smartphone, Tablet und Desktop.',
          deliverables: ['Mobile-First', 'Flüssige Typografie', 'Browser-Checks', 'Barrierefreiheit'],
        },
      ],
    },
    projects: {
      eyebrow: 'Projekte',
      heading: 'Ausgewählte Arbeiten.',
      subtitle: 'Live bereitgestellte Webprojekte mit HTML, CSS und JavaScript.',
      allTab: 'Alle',
      liveDemo: 'Live-Demo',
      viewProject: 'Projekt ansehen',
      items: [
        {
          id: 'smartjob-website',
          categoryLabel: 'Web Design',
          name: 'SmartJob Website',
          description: 'Live-Webprojekt für strukturierte Jobsuche mit responsivem Layout und klarer Navigation.',
        },
        {
          id: 'pocket-app',
          categoryLabel: 'Frontend',
          name: 'Pocket',
          description: 'Live-Webanwendung mit klarer Oberflächenstruktur, responsivem Styling und interaktivem Frontend.',
        },
      ],
      highlights: [
        { title: 'Mobile-First-Struktur', description: 'Saubere Breakpoints von 320px-Smartphones bis zu großen Monitoren.' },
        { title: 'Klare Layouts', description: 'Deutliche visuelle Hierarchie und ausgewogene Abstände.' },
        { title: 'HTML, CSS & JavaScript', description: 'Semantisches Markup, modernes Styling und Interaktivität.' },
      ],
    },
    experience: {
      eyebrow: 'Erfahrung & Ausbildung',
      heading: 'Werdegang & akademische Basis.',
      helperPrefix: 'Bearbeitbare Zeitleisten-Einträge. Aktualisierbar in',
      items: [
        {
          typeLabel: 'Erfahrung',
          title: 'Frontend Developer',
          organization: 'Unternehmen / Organisation (Bearbeitbar)',
          period: 'Jahr – Jahr',
          description: 'Ergänzen Sie hier Ihre Aufgaben und Erfolge – z. B. responsive Oberflächen und Komponenten.',
        },
        {
          typeLabel: 'Erfahrung',
          title: 'UI/UX Designer',
          organization: 'Unternehmen / Organisation (Bearbeitbar)',
          period: 'Jahr – Jahr',
          description: 'Ergänzen Sie hier Ihre Designprojekte – z. B. User Research, Wireframes und Figma-Prototypen.',
        },
        {
          typeLabel: 'Ausbildung',
          title: 'Software Development',
          organization: 'Bildungseinrichtung (Bearbeitbar)',
          period: 'Jahr – Jahr',
          description: 'Ergänzen Sie hier Ihr Studium oder Schwerpunkte in Softwareentwicklung und Design.',
        },
      ],
    },
    process: {
      eyebrow: 'Designprozess',
      heading: 'Von der ersten Analyse bis zur sauberen Umsetzung.',
      stepLabel: 'Schritt',
      focusLabel: 'Schwerpunkt',
      outputLabel: 'Ergebnis',
      steps: [
        {
          title: 'Entdecken',
          description: 'Problem, Nutzer und Projektziele verstehen.',
          focus: 'Kernproblem, Zielgruppe und Projektumfang definieren.',
          output: 'Projektbriefing und Seitenstruktur',
        },
        {
          title: 'Gestalten',
          description: 'Wireframes, Nutzerflüsse und visuelles Design erstellen.',
          focus: 'Bildschirmstruktur, Navigation und Figma-Prototypen ausarbeiten.',
          output: 'Wireframes, Flows & Figma-Prototyp',
        },
        {
          title: 'Entwickeln',
          description: 'Freigegebenes Design in responsiven Code umsetzen.',
          focus: 'Saubere Umsetzung in HTML, CSS und interaktivem JavaScript.',
          output: 'Responsive Webseiten & funktionierende Komponenten',
        },
        {
          title: 'Optimieren',
          description: 'Testen, verfeinern und das Endergebnis verbessern.',
          focus: 'Bildschirmgrößen, Kontraste und Benutzerfreundlichkeit prüfen.',
          output: 'Geprüftes, barrierearmes und startbereites Produkt',
        },
      ],
    },
    contact: {
      eyebrow: 'Kontakt',
      heading: 'Lassen Sie uns gemeinsam Großartiges bauen.',
      supportingText: 'Haben Sie ein Projekt, eine Idee oder eine Anfrage? Ich freue mich auf Ihre Nachricht.',
      phoneLabel: 'Telefon',
      emailLabel: 'E-Mail',
      linkedinLabel: 'LinkedIn',
      githubLabel: 'GitHub',
      instagramLabel: 'Instagram',
      nameLabel: 'Name',
      namePlaceholder: 'Ihr vollständiger Name',
      emailInputLabel: 'E-Mail',
      emailPlaceholder: 'sie@beispiel.com',
      messageLabel: 'Nachricht',
      messagePlaceholder: 'Erzählen Sie mir von Ihrem Projekt oder Anliegen...',
      frontendNote: 'Frontend-Validierung aktiv · Bereit für die Anbindung an einen E-Mail-Dienst.',
      sendButton: 'Nachricht senden',
      successTitlePrefix: 'Nachricht validiert,',
      successBody:
        'Ihre Nachricht wurde geprüft. Da diese Website aktuell ohne E-Mail-Backend läuft, klicken Sie unten, um sie direkt über Ihr E-Mail-Programm zu senden an',
      openMailApp: 'E-Mail-App öffnen',
      resetForm: 'Zurücksetzen',
      errName: 'Bitte geben Sie Ihren Namen ein.',
      errEmail: 'Bitte geben Sie Ihre E-Mail-Adresse ein.',
      errEmailInvalid: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.',
      errMessage: 'Bitte geben Sie eine kurze Nachricht ein.',
    },
    footer: {
      copyright: '© 2026 Shingiro Nael',
      credit: 'Gestaltet & entwickelt von Shingiro Nael',
    },
    languagePicker: {
      searchPlaceholder: 'Sprache suchen oder eingeben...',
      instantGroup: 'Sofort-Sprachen',
      worldGroup: 'Alle Weltsprachen',
      translateCustomPrefix: 'Übersetzen nach',
      translating: 'Portfolio wird übersetzt...',
      resetToEnglish: 'Auf Englisch zurücksetzen',
      noMatches: 'Enter drücken oder unten klicken zum Übersetzen.',
    },
  },
  pt: {
    nav: {
      home: 'Início',
      about: 'Sobre',
      services: 'Serviços',
      projects: 'Projetos',
      experience: 'Experiência',
      contact: 'Contato',
    },
    hero: {
      title: 'Desenvolvedor Frontend & Designer UI/UX',
      tagline: 'Eu projeto e construo experiências web bonitas e focadas no usuário.',
      supportingText:
        'Apaixonado por transformar ideias em experiências digitais intuitivas, responsivas e visualmente envolventes por meio de design cuidadoso e código frontend limpo.',
      viewWork: 'Ver Meu Trabalho',
      contactMe: 'Fale Comigo',
      photoPlaceholder: 'Espaço para Foto de Perfil',
      floatingUiTitle: 'Design UI/UX',
      floatingUiSub: 'Figma & Fluxos',
      floatingCodeTitle: 'Código Frontend',
      floatingCodeSub: 'HTML, CSS & JS',
      pillars: [
        { title: 'Design UI/UX', detail: 'Wireframes, fluxos de usuário e protótipos no Figma' },
        { title: 'Código Frontend', detail: 'HTML semântico, CSS moderno e JavaScript' },
        { title: 'Sistemas Responsivos', detail: 'Experiência consistente do celular ao desktop' },
      ],
    },
    about: {
      eyebrow: 'Sobre Mim',
      heading: 'Unindo design de interface cuidadoso com código frontend limpo.',
      paragraphs: [
        'Sou Shingiro Nael, Desenvolvedor Frontend e Designer UI/UX baseado em Kigali, Ruanda, focado em construir produtos digitais claros, rápidos e intuitivos.',
        'Meu trabalho une o design visual à implementação—traduzindo necessidades dos usuários em wireframes estruturados, interfaces coesas e código responsivo.',
        'Gosto de resolver problemas práticos com tecnologia e valorizo muito tipografia, clareza de layout, acessibilidade e os detalhes do dia a dia.',
      ],
      focusLabel: 'Foco',
      focusValue: 'Design UI/UX & Desenvolvimento Frontend',
      basedInLabel: 'Localização',
      uiPlusCode: 'UI + Código',
      wireframeTitle: 'Wireframe de Interface',
      codeSnippetTitle: 'HTML · CSS · JavaScript',
      codeReadyText: 'Projetado para clareza, construído para usuários reais.',
      pipeline: ['Pesquisa', 'Wireframe', 'Protótipo', 'Desenvolvimento'],
      cards: [
        { title: 'Foco no Usuário', description: 'Todo layout começa entendendo objetivos e reduzindo atritos.' },
        { title: 'HTML5 Semântico', description: 'Estrutura limpa e acessível para leitura e SEO.' },
        { title: 'Layouts CSS Modernos', description: 'Arquiteturas Grid e Flexbox adaptadas a todas as telas.' },
        { title: 'JavaScript Interativo', description: 'Interações fluidas no DOM e validação de formulários.' },
      ],
    },
    skills: {
      eyebrow: 'Habilidades & Ferramentas',
      heading: 'Tecnologias principais e práticas de design.',
      frontendCategory: 'Desenvolvimento Frontend',
      frontendSubtitle: 'Construção de sites estruturados, acessíveis e responsivos.',
      frontendFocuses: [
        'Marcação semântica, estrutura e acessibilidade',
        'Layouts responsivos com Flexbox e CSS Grid',
        'Lógica interativa no DOM e JavaScript moderno',
      ],
      uiuxCategory: 'Design UI/UX',
      uiuxSubtitle: 'Criação de fluxos intuitivos desde a exploração inicial até protótipos.',
      uiuxItems: [
        { name: 'Figma', focus: 'Bibliotecas de componentes e sistemas de UI' },
        { name: 'Wireframing', focus: 'Hierarquia de informação e estrutura' },
        { name: 'Prototipagem', focus: 'Fluxos interativos e testes de usabilidade' },
        { name: 'Pesquisa com Usuários', focus: 'Compreender necessidades e dificuldades' },
      ],
      workflowCards: [
        { title: 'Breakpoints Responsivos', detail: 'Layouts testados em celular, tablet e desktop.' },
        { title: 'Hierarquia Visual', detail: 'Tipografia, espaçamento e contraste equilibrados.' },
        { title: 'Estados Interativos', detail: 'Feedback claro em hover, foco e validação.' },
        { title: 'Código Sustentável', detail: 'Módulos HTML, CSS e JavaScript bem organizados.' },
      ],
    },
    services: {
      eyebrow: 'Serviços',
      heading: 'Como ajudo a dar vida a produtos digitais.',
      includesLabel: 'Inclui',
      items: [
        {
          title: 'Desenvolvimento Frontend',
          description: 'Construção de sites responsivos, interativos e sustentáveis com HTML, CSS e JavaScript.',
          deliverables: ['HTML', 'CSS', 'JavaScript'],
        },
        {
          title: 'Design UI/UX',
          description: 'Design de experiências digitais intuitivas dos primeiros rascunhos aos protótipos finais.',
          deliverables: ['Wireframes', 'Fluxos de usuário', 'Protótipos', 'Design UI', 'Pesquisa'],
        },
        {
          title: 'Web Design Responsivo',
          description: 'Criação de sites que oferecem uma experiência fluida em celulares, tablets e computadores.',
          deliverables: ['Mobile-first', 'Tipografia fluida', 'Testes multi-navegador', 'Acessibilidade'],
        },
      ],
    },
    projects: {
      eyebrow: 'Projetos',
      heading: 'Trabalhos selecionados.',
      subtitle: 'Projetos web publicados construídos com HTML, CSS e JavaScript.',
      allTab: 'Todos',
      liveDemo: 'Ver Projeto',
      viewProject: 'Ver Projeto',
      items: [
        {
          id: 'smartjob-website',
          categoryLabel: 'Web Design',
          name: 'SmartJob Website',
          description: 'Projeto web ativo focado em busca de vagas com layout responsivo e navegação clara.',
        },
        {
          id: 'pocket-app',
          categoryLabel: 'Frontend',
          name: 'Pocket',
          description: 'Aplicação web publicada com estrutura limpa, estilo responsivo e comportamento interativo.',
        },
      ],
      highlights: [
        { title: 'Estrutura Mobile-First', description: 'Breakpoints responsivos de celulares 320px até monitores amplos.' },
        { title: 'Layouts Estruturados', description: 'Hierarquia visual clara, seções legíveis e espaçamento equilibrado.' },
        { title: 'HTML, CSS & JavaScript', description: 'Marcação semântica, estilo moderno e comportamento interativo.' },
      ],
    },
    experience: {
      eyebrow: 'Experiência & Educação',
      heading: 'Histórico profissional e base acadêmica.',
      helperPrefix: 'Itens editáveis da linha do tempo. Atualize em',
      items: [
        {
          typeLabel: 'Experiência',
          title: 'Frontend Developer',
          organization: 'Empresa / Organização (Editável)',
          period: 'Ano – Ano',
          description: 'Adicione suas responsabilidades e conquistas aqui—como criar interfaces responsivas e melhorar a usabilidade.',
        },
        {
          typeLabel: 'Experiência',
          title: 'UI/UX Designer',
          organization: 'Empresa / Organização (Editável)',
          period: 'Ano – Ano',
          description: 'Adicione seu trabalho de design aqui—como pesquisa, wireframes e protótipos no Figma.',
        },
        {
          typeLabel: 'Educação',
          title: 'Software Development',
          organization: 'Instituição (Editável)',
          period: 'Ano – Ano',
          description: 'Adicione seu curso, foco de estudos ou marcos acadêmicos em desenvolvimento e design.',
        },
      ],
    },
    process: {
      eyebrow: 'Processo de Design',
      heading: 'Da descoberta inicial à implementação final.',
      stepLabel: 'Etapa',
      focusLabel: 'Foco Principal',
      outputLabel: 'Entrega',
      steps: [
        {
          title: 'Descobrir',
          description: 'Entender o problema, os usuários e os objetivos do projeto.',
          focus: 'Definir o problema central, público-alvo e escopo.',
          output: 'Briefing do projeto e mapa do site',
        },
        {
          title: 'Projetar',
          description: 'Criar wireframes, fluxos de usuário e designs visuais.',
          focus: 'Estruturar fluxos de tela e protótipos visuais no Figma.',
          output: 'Wireframes, fluxos e protótipo no Figma',
        },
        {
          title: 'Desenvolver',
          description: 'Transformar o design aprovado em código responsivo.',
          focus: 'Traduzir layouts em HTML, CSS e JavaScript limpos.',
          output: 'Páginas responsivas e componentes interativos',
        },
        {
          title: 'Melhorar',
          description: 'Testar, refinar, otimizar e aprimorar a experiência final.',
          focus: 'Testar tamanhos de tela, contraste e acessibilidade.',
          output: 'Experiência testada, acessível e pronta para o ar',
        },
      ],
    },
    contact: {
      eyebrow: 'Contato',
      heading: 'Vamos construir algo incrível juntos.',
      supportingText: 'Tem um projeto, ideia ou oportunidade? Adoraria saber mais.',
      phoneLabel: 'Telefone',
      emailLabel: 'E-mail',
      linkedinLabel: 'LinkedIn',
      githubLabel: 'GitHub',
      instagramLabel: 'Instagram',
      nameLabel: 'Nome',
      namePlaceholder: 'Seu nome completo',
      emailInputLabel: 'E-mail',
      emailPlaceholder: 'voce@exemplo.com',
      messageLabel: 'Mensagem',
      messagePlaceholder: 'Conte-me sobre seu projeto ou oportunidade...',
      frontendNote: 'Validação frontend ativada · Pronto para conectar a um serviço de e-mail.',
      sendButton: 'Enviar Mensagem',
      successTitlePrefix: 'Mensagem validada,',
      successBody:
        'Sua mensagem passou na validação. Como este site ainda é apenas frontend sem servidor de e-mail conectado, clique abaixo para enviar pelo seu aplicativo de e-mail para',
      openMailApp: 'Abrir App de E-mail',
      resetForm: 'Limpar',
      errName: 'Por favor, informe seu nome.',
      errEmail: 'Por favor, informe seu endereço de e-mail.',
      errEmailInvalid: 'Por favor, informe um e-mail válido.',
      errMessage: 'Por favor, escreva uma breve mensagem.',
    },
    footer: {
      copyright: '© 2026 Shingiro Nael',
      credit: 'Projetado e construído por Shingiro Nael',
    },
    languagePicker: {
      searchPlaceholder: 'Buscar ou digitar qualquer idioma...',
      instantGroup: 'Idiomas Instantâneos',
      worldGroup: 'Todos os Idiomas',
      translateCustomPrefix: 'Traduzir para',
      translating: 'Traduzindo portfólio...',
      resetToEnglish: 'Voltar ao inglês',
      noMatches: 'Pressione Enter ou clique abaixo para traduzir.',
    },
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      about: 'نبذة عني',
      services: 'الخدمات',
      projects: 'المشاريع',
      experience: 'الخبرة',
      contact: 'تواصل',
    },
    hero: {
      title: 'مطور واجهات أمامية ومصمم UI/UX',
      tagline: 'أصمم وأبني تجارب ويب جميلة تركز على المستخدم.',
      supportingText:
        'شغوف بتحويل الأفكار إلى تجارب رقمية بديهية ومتجاوبة وجذابة بصريًا من خلال التصميم المدروس وتطوير الواجهات الأمامية النظيف.',
      viewWork: 'استعرض أعمالي',
      contactMe: 'تواصل معي',
      photoPlaceholder: 'مساحة صورة الملف الشخصي',
      floatingUiTitle: 'تصميم UI/UX',
      floatingUiSub: 'Figma والتدفقات',
      floatingCodeTitle: 'كود الواجهة الأمامية',
      floatingCodeSub: 'HTML و CSS و JS',
      pillars: [
        { title: 'تصميم UI/UX', detail: 'مخططات أولية ومسارات مستخدم ونماذج Figma' },
        { title: 'كود الواجهة الأمامية', detail: 'HTML دلالي وCSS حديث وJavaScript' },
        { title: 'تصميم متجاوب', detail: 'تجربة متناسقة من الهاتف إلى سطح المكتب' },
      ],
    },
    about: {
      eyebrow: 'نبذة عني',
      heading: 'الربط بين تصميم الواجهات المدروس وكود الواجهة الأمامية النظيف.',
      paragraphs: [
        'أنا شينجيرو نائيل، مطور واجهات أمامية ومصمم UI/UX مقيم في كيغالي، رواندا، أركز على بناء منتجات رقمية واضحة وسريعة وسهلة الاستخدام.',
        'يجمع عملي بين التصميم البصري والتنفيذ البرمجي—حيث أحول احتياجات المستخدمين إلى مخططات منظمة وواجهات متناسقة وكود متجاوب.',
        'أستمتع بحل المشكلات العملية بالتقنية وأهتم بالخطوط ووضوح التخطيط وسهولة الوصول وأدق التفاصيل اليومية.',
      ],
      focusLabel: 'التركيز',
      focusValue: 'تصميم UI/UX وتطوير الواجهات الأمامية',
      basedInLabel: 'الموقع',
      uiPlusCode: 'تصميم + كود',
      wireframeTitle: 'مخطط الواجهة',
      codeSnippetTitle: 'HTML · CSS · JavaScript',
      codeReadyText: 'مصمم للوضوح، مبني للمستخدمين الحقيقيين.',
      pipeline: ['البحث', 'المخطط', 'النموذج', 'التطوير'],
      cards: [
        { title: 'المستخدم أولاً', description: 'يبدأ كل تصميم بفهم أهداف المستخدم وتقليل التعقيد.' },
        { title: 'HTML5 دلالي', description: 'بنية نظيفة وسهلة القراءة ومهيأة لمحركات البحث.' },
        { title: 'تنسيقات CSS الحديثة', description: 'شبكات Grid وFlexbox مرنة لكل أحجام الشاشات.' },
        { title: 'JavaScript تفاعلي', description: 'تفاعلات سلسة وتحقق فوري من المدخلات.' },
      ],
    },
    skills: {
      eyebrow: 'المهارات والأدوات',
      heading: 'التقنيات الأساسية وممارسات التصميم.',
      frontendCategory: 'تطوير الواجهات الأمامية',
      frontendSubtitle: 'بناء مواقع منظمة وسريعة الاستجابة بلغات الويب الأساسية.',
      frontendFocuses: [
        'كتابة بنية دلالية وسهلة الوصول',
        'تصميمات متجاوبة باستخدام Flexbox وCSS Grid',
        'منطق تفاعلي عبر DOM وJavaScript الحديث',
      ],
      uiuxCategory: 'تصميم UI/UX',
      uiuxSubtitle: 'تصميم مسارات بديهية من الاستكشاف الأولي إلى النماذج التفاعلية.',
      uiuxItems: [
        { name: 'Figma', focus: 'مكتبات المكونات وأنظمة الواجهات' },
        { name: 'Wireframing', focus: 'تسلسل المعلومات وبنية الصفحة' },
        { name: 'Prototyping', focus: 'نماذج تفاعلية واختبار قابلية الاستخدام' },
        { name: 'أبحاث المستخدمين', focus: 'فهم الاحتياجات ونقاط الصعوبة' },
      ],
      workflowCards: [
        { title: 'نقاط التجاوب', detail: 'اختبار التخطيطات على الهاتف واللوحي وسطح المكتب.' },
        { title: 'التسلسل البصري', detail: 'خطوط ومسافات وتباين مدروس لسهولة القراءة.' },
        { title: 'الحالات التفاعلية', detail: 'استجابة واضحة عند التمرير والتركيز والتحقق.' },
        { title: 'كود قابل للصيانة', detail: 'ملفات HTML وCSS وJavaScript منظمة وواضحة.' },
      ],
    },
    services: {
      eyebrow: 'الخدمات',
      heading: 'كيف أساعد في إخراج المنتجات الرقمية إلى النور.',
      includesLabel: 'يشمل',
      items: [
        {
          title: 'تطوير الواجهات الأمامية',
          description: 'بناء مواقع متجاوبة وتفاعلية وسهلة الصيانة باستخدام HTML وCSS وJavaScript.',
          deliverables: ['HTML', 'CSS', 'JavaScript'],
        },
        {
          title: 'تصميم UI/UX',
          description: 'تصميم تجارب رقمية بديهية من الأفكار والمخططات الأولية إلى النماذج المتقنة.',
          deliverables: ['مخططات أولية', 'مسارات المستخدم', 'نماذج تفاعلية', 'تصميم UI', 'أبحاث'],
        },
        {
          title: 'تصميم الويب المتجاوب',
          description: 'إنشاء مواقع توفر تجربة سلسة ومتناسقة عبر الهواتف والأجهزة اللوحية والحواسيب.',
          deliverables: ['أولوية الهاتف', 'خطوط مرنة', 'توافق المتصفحات', 'سهولة الوصول'],
        },
      ],
    },
    projects: {
      eyebrow: 'المشاريع',
      heading: 'أعمال مختارة.',
      subtitle: 'مشاريع ويب منشورة مبنية باستخدام HTML وCSS وJavaScript.',
      allTab: 'الكل',
      liveDemo: 'معاينة حية',
      viewProject: 'عرض المشروع',
      items: [
        {
          id: 'smartjob-website',
          categoryLabel: 'Web Design',
          name: 'SmartJob Website',
          description: 'مشروع ويب مباشر يركز على استعراض الوظائف بتصميم متجاوب وتنقل واضح عبر الأجهزة.',
        },
        {
          id: 'pocket-app',
          categoryLabel: 'Frontend',
          name: 'Pocket',
          description: 'تطبيق ويب منشور ببنية واجهة نظيفة وتصميم متجاوب وتفاعل سلس.',
        },
      ],
      highlights: [
        { title: 'بنية الهاتف أولاً', description: 'تجاوب دقيق من شاشات 320px إلى الشاشات الكبيرة.' },
        { title: 'تخطيطات منظمة', description: 'تسلسل بصري واضح وتباعد متوازن بين البطاقات.' },
        { title: 'HTML و CSS و JavaScript', description: 'كود دلالي، تنسيق حديث، وسلوك تفاعلي نظيف.' },
      ],
    },
    experience: {
      eyebrow: 'الخبرة والتعليم',
      heading: 'الخلفية المهنية والأساس الأكاديمي.',
      helperPrefix: 'عناصر قابلة للتعديل بسهولة في الملف',
      items: [
        {
          typeLabel: 'خبرة',
          title: 'Frontend Developer',
          organization: 'شركة / مؤسسة (قابل للتعديل)',
          period: 'سنة – سنة',
          description: 'أضف مسؤولياتك وإنجازاتك هنا مثل بناء الواجهات المتجاوبة وتحسين تجربة الاستخدام.',
        },
        {
          typeLabel: 'خبرة',
          title: 'UI/UX Designer',
          organization: 'شركة / مؤسسة (قابل للتعديل)',
          period: 'سنة – سنة',
          description: 'أضف أعمال التصميم هنا مثل أبحاث المستخدم والمخططات ونماذج Figma التفاعلية.',
        },
        {
          typeLabel: 'تعليم',
          title: 'Software Development',
          organization: 'اسم المؤسسة التعليمية (قابل للتعديل)',
          period: 'سنة – سنة',
          description: 'أضف برنامجك الدراسي أو المحطات الرئيسية في تطوير البرمجيات وتصميم الواجهات.',
        },
      ],
    },
    process: {
      eyebrow: 'منهجية التصميم',
      heading: 'من الاستكشاف الأولي إلى التنفيذ المتقن.',
      stepLabel: 'الخطوة',
      focusLabel: 'التركيز الأساسي',
      outputLabel: 'المخرجات',
      steps: [
        {
          title: 'الاستكشاف',
          description: 'فهم المشكلة والمستخدمين وأهداف المشروع.',
          focus: 'تحديد المشكلة الأساسية والجمهور المستهدف ونطاق العمل.',
          output: 'ملخص المشروع وهيكل الصفحات',
        },
        {
          title: 'التصميم',
          description: 'إنشاء المخططات الأولية ومسارات المستخدم والتصاميم.',
          focus: 'تنظيم الشاشات ومسارات التنقل وبناء النماذج في Figma.',
          output: 'مخططات أولية ونموذج Figma تفاعلي',
        },
        {
          title: 'التطوير',
          description: 'تحويل التصميم المعتمد إلى كود متجاوب وفعال.',
          focus: 'كتابة HTML وCSS وJavaScript نظيفة ومنظمة.',
          output: 'صفحات متجاوبة ومكونات تفاعلية',
        },
        {
          title: 'التحسين',
          description: 'الاختبار والتدقيق والتحسين للوصول إلى أفضل تجربة.',
          focus: 'مراجعة الأحجام المختلفة والتباين وسهولة الاستخدام.',
          output: 'تجربة مختبرة وسهلة الوصول وجاهزة للإطلاق',
        },
      ],
    },
    contact: {
      eyebrow: 'تواصل',
      heading: 'لنبني شيئًا رائعًا معًا.',
      supportingText: 'هل لديك مشروع أو فكرة أو فرصة عمل؟ يسعدني سماع ذلك.',
      phoneLabel: 'الهاتف',
      emailLabel: 'البريد الإلكتروني',
      linkedinLabel: 'LinkedIn',
      githubLabel: 'GitHub',
      instagramLabel: 'Instagram',
      nameLabel: 'الاسم',
      namePlaceholder: 'الاسم الكامل',
      emailInputLabel: 'البريد الإلكتروني',
      emailPlaceholder: 'you@example.com',
      messageLabel: 'الرسالة',
      messagePlaceholder: 'أخبرني عن مشروعك أو الفرصة المتاحة...',
      frontendNote: 'التحقق من الواجهة مفعل · جاهز للربط بخدمة بريد إلكتروني.',
      sendButton: 'إرسال الرسالة',
      successTitlePrefix: 'تم التحقق من الرسالة،',
      successBody:
        'اجتازت رسالتك التحقق بنجاح. وبما أن الموقع يعمل حالياً كواجهة أمامية فقط دون خادم بريد، اضغط أدناه لإرسالها مباشرة عبر تطبيق البريد إلى',
      openMailApp: 'فتح تطبيق البريد',
      resetForm: 'إعادة تعيين',
      errName: 'يرجى إدخال اسمك.',
      errEmail: 'يرجى إدخال بريدك الإلكتروني.',
      errEmailInvalid: 'يرجى إدخال بريد إلكتروني صحيح.',
      errMessage: 'يرجى كتابة رسالة قصيرة.',
    },
    footer: {
      copyright: '© 2026 شينجيرو نائيل',
      credit: 'تصميم وتطوير شينجيرو نائيل',
    },
    languagePicker: {
      searchPlaceholder: 'ابحث أو اكتب أي لغة...',
      instantGroup: 'لغات فورية',
      worldGroup: 'جميع لغات العالم',
      translateCustomPrefix: 'ترجم إلى',
      translating: 'جارٍ ترجمة الموقع...',
      resetToEnglish: 'العودة إلى الإنجليزية',
      noMatches: 'اضغط Enter أو الزر أدناه للترجمة.',
    },
  },
};
