export const siteContent = {
  name: 'Salim',
  copyrightName: 'Salim',
  copyrightYear: '2026',
  resume: {
    href: '/MahammadSalim.docx',
    downloadName: 'MahammadSalim.docx',
    label: 'Resume',
  },
}

export const contactDetails = {
  email: 'salimmohd5@gmail.com',
  phone: '9100592069',
  phoneHref: 'tel:+919100592069',
  location: 'Hyderabad, TG',
  github: 'https://github.com/salimmohd',
  linkedin: 'https://www.linkedin.com/in/salim-mahammad-73b39136',
}

export const socialLinks = [
  {
    label: 'GitHub',
    href: contactDetails.github,
  },
  {
    label: 'LinkedIn',
    href: contactDetails.linkedin,
  },
]

export const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Projects', path: '/projects' },
  { label: 'Contact', path: '/contact' },
]

export const homeHeroContent = {
  eyebrow: 'Welcome to my portfolio',
  titlePrefix: "Hi, I'm",
  highlightedName: 'Salim',
  subtitle: 'Senior Frontend Developer | React.js | TypeScript | UI Engineering Specialist',
  description:
    'Building scalable, responsive, and user-focused web applications with modern frontend technologies and enterprise-grade solutions.',
  actions: [
    { label: 'View Projects', to: '/projects', variant: 'primary' },
    { label: 'Contact Me', to: '/contact', variant: 'secondary' },
  ],
  focus: {
    eyebrow: 'Current Focus',
    title: 'Senior React Engineering',
    description:
      'Designing clean components, smooth layouts, and modern interfaces for engaging web experiences.',
    items: ['React & Redux', 'Material UI / Ant Design', 'TypeScript / JavaScript'],
  },
}

export const servicesContent = {
  eyebrow: 'What I Offer',
  title: 'Services I provide to bring your ideas to life',
  items: [
    {
      title: 'Frontend Development',
      description:
        'Build scalable, high-performance web applications using React.js, TypeScript, Redux, and modern frontend architectures focused on speed, usability, and maintainability.',
      icon: 'code',
    },
    {
      title: 'UI Engineering',
      description:
        'Transform complex business requirements into intuitive, pixel-perfect user interfaces with reusable components, responsive layouts, and accessibility best practices.',
      icon: 'squares',
    },
    {
      title: 'Quality Engineering',
      description:
        'Implement comprehensive testing strategies using RTL, Jest, and Playwright to ensure robust user experiences across browsers and devices.',
      icon: 'mobile',
    },
    {
      title: 'Collaboration',
      description:
        'Work with Git, GitHub, and team workflows to keep projects organized and maintainable.',
      icon: 'users',
    },
  ],
}

export const skillsContent = {
  eyebrow: 'Skills & Tools',
  title: 'Technologies I work with on a daily basis',
  activeSkill: 'React',
  items: [
    { label: 'React', color: 'blue' },
    { label: 'Next Js', color: 'slate' },
    { label: 'Redux', color: 'violet' },
    { label: 'TypeScript', color: 'blue' },
    { label: 'JavaScript', color: 'amber' },
    { label: 'Tailwind CSS', color: 'emerald' },
    { label: 'HTML5', color: 'orange' },
    { label: 'CSS3', color: 'blue' },
    { label: 'REST APIs', color: 'emerald' },
    { label: 'Git', color: 'rose' },
    { label: 'Figma', color: 'fuchsia' },
    { label: 'VS Code', color: 'blue' },
    { label: 'Adobe', color: 'red' },
    { label: 'Veeva', color: 'amber' },
  ],
}

export const projectsContent = {
  eyebrow: 'My Projects',
  title: 'A selection of recent work',
  items: [
    {
      title: 'Copilot Dashboard',
      description:
        'Developed an enterprise dashboard application featuring interactive data visualization, performance metrics, and analytics. Built reusable components and implemented automated testing to ensure reliability and scalability.',
      tags: ['React', 'TypeScript', 'Material UI', 'RTL', 'Playwright'],
    },
    {
      title: 'Employee Score Card',
      description:
        'A performance management platform designed to track employee goals, evaluations, and key performance indicators. Focused on reusable UI components, responsive design, and optimized application performance.',
      tags: ['React', 'Tailwind', 'Redux', 'Ant Design'],
    },
    {
      title: 'Healthcare E-Detailers',
      description:
        'Designed and developed highly interactive iPad presentations for pharmaceutical and healthcare brands. Delivered engaging digital experiences with animations, analytics tracking, and Veeva content publishing.',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Veeva CRM', 'CLM'],
    },
  ],
}

export const aboutPageContent = {
  hero: {
    eyebrow: 'About Me',
    imageAlt: 'Mahammad Salim',
    titlePrefix: 'Building Modern Digital',
    highlightedTitle: 'Experiences',
    titleSuffix: 'with Precision',
    paragraphs: [
      [
        { text: "I'm " },
        { text: 'Mahammad Salim', strong: true },
        { text: ', a Senior Frontend Developer with over ' },
        { text: '8 years of experience', strong: true },
        {
          text: ' designing and building scalable web applications. I specialize in ',
        },
        { text: 'React.js, TypeScript, Redux, and modern UI technologies', strong: true },
        {
          text: ', creating fast, responsive, and user-focused digital experiences.',
        },
      ],
      [
        { text: 'Throughout my career at ' },
        { text: 'Synechron, Nisum, and Tech Mahindra', strong: true },
        {
          text: ", I've delivered enterprise solutions across banking, healthcare, and business domains. My expertise includes developing reusable component architectures, interactive dashboards, responsive interfaces, and automated testing solutions that enhance performance and reliability.",
        },
      ],
    ],
  },
  experienceSection: {
    title: 'Work Experience',
    subtitle: 'My professional journey so far',
    items: [
      {
        role: 'Lead Technology',
        company: 'Synechron Technologies Pvt. Ltd.',
        date: 'Sep 2024 - Apr 2025',
        summary:
          'Leading frontend development for enterprise applications using React.js, TypeScript, and Material UI. Building interactive dashboards, implementing automated testing with React Testing Library and Playwright, and delivering scalable solutions that enhance user experience and business efficiency.',
      },
      {
        role: 'Software Engineer',
        company: 'Nisum Technologies',
        date: 'Mar 2024 - Aug 2024',
        summary:
          'Developed and maintained enterprise-grade applications with React.js, TypeScript, Redux, Ant Design, and Tailwind CSS. Contributed to the Employee Score Card platform, focusing on reusable components, performance optimization, and modern frontend architecture.',
      },
      {
        role: 'Subject Matter Expert',
        company: 'Tech Mahindra Limited',
        date: 'May 2017 - Jan 2024',
        summary:
          'Worked extensively on healthcare and pharmaceutical digital solutions, developing interactive web applications, iPad E-Detailers, email campaigns, and analytics platforms. Collaborated with global clients to deliver engaging digital experiences and managed content publishing through Veeva CRM and CLM.',
      },
    ],
  },
  educationSection: {
    title: 'Education',
    subtitle: 'My academic background',
    items: [
      {
        degree: 'Bachelor of Science (B.Sc. - MPC)',
        institution: 'Dr. B.R. Ambedkar University',
        years: '2012 - 2015',
        detail: 'Completed a science degree with a strong foundation in analytical thinking.',
      },
      {
        degree: 'Higher Secondary',
        institution: 'Govt Jounior College, Vemulawada',
        years: '2005 - 2007',
        detail: 'Completed higher secondary education in Telangana.',
      },
      {
        degree: 'Secondary School Certificate (SSC)',
        institution: 'ZPHS Engal',
        years: '2004 - 2005',
        detail: 'Completed secondary education with strong academic performance.',
      },
    ],
  },
  servicesSection: {
    title: 'What I Do',
    subtitle: 'Services I deliver',
    items: [
      {
        title: 'UI/UX Design',
        description:
          'Crafting polished, usable interfaces with clarity and brand consistency.',
      },
      {
        title: 'Frontend Development',
        description:
          'Building responsive React applications using Tailwind, Vite, and modern tooling.',
      },
      {
        title: 'Design Systems',
        description:
          'Creating scalable component systems that maintain quality across products.',
      },
      {
        title: 'Performance',
        description:
          'Optimizing load speed and interactivity for real-world web experiences.',
      },
      {
        title: 'Collaboration',
        description:
          'Working with designers and product teams to deliver polished results quickly.',
      },
    ],
  },
}

export const contactPageContent = {
  hero: {
    eyebrow: 'Contact',
    titlePrefix: 'Get In',
    highlightedTitle: 'Touch',
    description: "Have a project in mind? Let's work together.",
  },
  cards: {
    emailLabel: 'Email',
    mobileLabel: 'Mobile',
    locationLabel: 'Location',
    socialLabel: 'Social',
  },
  form: {
    fields: {
      name: {
        label: 'Name',
        placeholder: 'Your name',
      },
      email: {
        label: 'Email',
        placeholder: 'Your email',
      },
      subject: {
        label: 'Subject',
        placeholder: 'Project inquiry',
      },
      message: {
        label: 'Message',
        placeholder: 'Tell me about your project...',
      },
    },
    submitLabel: 'Send Message',
    submittingLabel: 'Sending...',
    messages: {
      loading: 'Sending your message...',
      success: 'Thank you for reaching out. I will get back to you soon.',
      invalid: 'Please fix the highlighted fields before sending.',
      fallbackError: 'Message could not be sent. Please try again.',
    },
  },
}

export const footerContent = {
  cta: 'Ready to build something together?',
  emailButton: 'Email Me',
}
