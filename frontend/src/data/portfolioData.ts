export const personalInfo = {
  name: 'Ashish Kumar',
  firstName: 'Ashish',
  lastName: 'Kumar',
  title: 'Full Stack Developer',
  tagline: 'Building scalable web applications with modern technologies',
  bio: 'Passionate full-stack developer with 2+ years of experience crafting high-performance web applications. I specialize in React, Node.js, NestJS, and cloud technologies — delivering solutions that combine elegant design with robust engineering. I love open source, clean architecture, and shipping products people love.',
  location: 'Bangalore, India',
  email: 'ak946417@gmail.com',
  phone: '+91 7781855388',
  github: 'https://github.com/Ashish-github05',
  linkedin: 'https://www.linkedin.com/in/ashish-kumar05/',
  twitter: 'https://twitter.com/',
  resume: 'https://drive.google.com/file/d/17Pu1TyPxrTzAHbUblmH6eIOq_yZGW6LJ/view?usp=sharing',
}

export const stats = [
  { value: '2+', label: 'Years Experience', color: 'text-blue-400' },
  { value: '15+', label: 'Projects Delivered', color: 'text-purple-400' },
  { value: '20+', label: 'Happy Clients', color: 'text-green-400' },
  { value: '20+', label: 'Technologies', color: 'text-pink-400' },
]

export const skillCategories = [
  {
    category: 'Frontend',
    icon: 'monitor',
    gradient: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'React', level: 85 },
      { name: 'TypeScript', level: 75 },
      { name: 'JavaScript', level: 85 },
      { name: 'HTML / CSS', level: 90 },
      { name: 'Tailwind CSS', level: 80 },
      { name: 'Next.js', level: 80 },
    ],
  },
  {
    category: 'Backend',
    icon: 'server',
    gradient: 'from-green-500 to-emerald-500',
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'NestJS', level: 85 },
      { name: 'PHP', level: 75 },
      { name: 'CakePHP', level: 70 },
      { name: 'Express.js', level: 85 },
      { name: 'REST APIs', level: 92 },
    ],
  },
  {
    category: 'Database',
    icon: 'database',
    gradient: 'from-orange-500 to-red-500',
    skills: [
      { name: 'MySQL', level: 88 },
      { name: 'MongoDB', level: 82 },
      { name: 'PostgreSQL', level: 78 },
      { name: 'Redis', level: 72 },
    ],
  },
  {
    category: 'Tools & DevOps',
    icon: 'tool',
    gradient: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'Git & GitHub', level: 85 },
      { name: 'Docker', level: 75 },
      { name: 'AWS', level: 75 },
      { name: 'CI/CD', level: 70 },
      { name: 'Linux', level: 65 },
      { name: 'Nginx', level: 65 },
    ],
  },
]

export const experience = [
  {
    id: 1,
    company: 'AHAsolar Technologies Pvt. Ltd.',
    role: 'Full Stack Developer',
    duration: '2024 – Present',
    location: 'Bangalore, India',
    type: 'Full-time',
    logo: 'TC',
    gradient: 'from-blue-600 to-indigo-600',
    responsibilities: [
      'Led development of microservices architecture serving 100K+ daily users',
      'Built and maintained React-based frontend applications with TypeScript',
      'Implemented CI/CD pipelines using GitHub Actions, cutting deploy time by 60%'
    ],
    achievements: [
      'Reduced application load time by 40% through code splitting & caching',
      'Migrated legacy PHP monolith to NestJS microservices',
      'Achieved 85%+ code coverage with automated test suites',
    ],
    tech: ['React', 'Node.js', 'MySQL', 'Redis', 'Git', 'TypeScript', 'Docker', 'AWS',],
  },
  {
    id: 2,
    company: 'AHAsolar Technologies Pvt. Ltd.',
    role: 'Software Developer Intern',
    duration: '2023 – 2024',
    location: 'Bangalore, India',
    type: 'Internship',
    logo: 'IT',
    gradient: 'from-purple-600 to-pink-600',
    responsibilities: [
      'Built RESTful APIs with Node.js and Express serving 20K+ users',
      'Developed responsive web apps with React and Redux',
      'Managed MySQL databases and wrote complex queries & stored procedures',
      'Collaborated with UI/UX team to deliver pixel-perfect interfaces',
    ],
    achievements: [
      'Delivered 15+ projects on time with zero critical post-launch bugs',
      'Improved DB query performance by 50% through indexing strategies',
      'Built WebSocket chat feature supporting 10K+ concurrent connections',
    ],
    tech: ['React', 'Node.js', 'MySQL', 'Redis', 'Git', 'TypeScript'],
  }
]

export const projects = [
  {
    id: 1,
    title: 'PM Surya Ghar Muft Bijli Yojana',
    description:
      'Government rooftop solar scheme portal enabling citizens to apply for free electricity under the PM Surya Ghar initiative. Features application tracking, document upload, subsidy calculation, and admin approval workflows.',
    tech: ['React', 'Node.js', 'MySQL', 'REST API', 'Chart.js'],
    demo: 'https://pmsuryaghar.gov.in/',
    category: 'Full Stack',
    tags: ['Full Stack', 'Backend'],
    gradient: 'from-yellow-500 to-orange-500',
    featured: true,
  },
  {
    id: 2,
    title: 'BSES Rajdhani Power Portal',
    description:
      'Power distribution management portal for BSES Rajdhani (Delhi). Includes consumer billing, outage management, connection request handling, and real-time power load dashboards.',
    tech: ['React', 'Node.js', 'MySQL', 'REST API', 'Material UI'],
    demo: 'https://rts.bsesdelhi.com/',
    category: 'Full Stack',
    tags: ['Full Stack', 'Backend'],
    gradient: 'from-blue-500 to-indigo-500',
    featured: true,
  },
  {
    id: 3,
    title: 'PMT 2.0',
    description:
      'Project Management Tool v2.0 — a comprehensive platform for tracking tasks, milestones, team assignments, and project progress with interactive Gantt charts and reporting.',
    tech: ['React', 'NestJS', 'TypeScript', 'MySQL'],
    demo: 'https://ahasolar.in/',
    category: 'Full Stack',
    tags: ['Full Stack', 'Backend'],
    gradient: 'from-purple-500 to-pink-500',
    featured: true,
  },
  {
    id: 4,
    title: 'Generation Monitoring – Ahasolar',
    description:
      'Real-time solar energy generation monitoring system for Ahasolar. Tracks live plant output, performance ratios, energy yield, fault alerts, and historical generation analytics across multiple sites.',
    tech: ['React', 'Node.js', 'MySQL', 'WebSocket', 'Chart.js'],
    demo: 'https://sgms.ahasolar.co.in/',
    category: 'Frontend',
    tags: ['Frontend'],
    gradient: 'from-green-500 to-emerald-500',
    featured: false,
  },
  {
    id: 5,
    title: 'GEDA EV Portal',
    description:
      'Gujarat Energy Development Agency (GEDA) Electric Vehicle portal for managing EV subsidy applications, dealer registrations, vehicle approvals, and state-level EV adoption reporting.',
    tech: ['React', 'NestJS', 'TypeScript', 'MySQL'],
    demo: 'https://gedaev.in/',
    category: 'Frontend',
    tags: ['Frontend'],
    gradient: 'from-teal-500 to-cyan-500',
    featured: false,
  },
]

export const achievements = [
  {
    id: 1,
    title: 'AWS Certified Solutions Architect',
    org: 'Amazon Web Services',
    year: '2023',
    type: 'Certification',
    gradient: 'from-orange-400 to-yellow-400',
    description: 'Professional-level cert for designing highly available, fault-tolerant systems on AWS.',
  },
  {
    id: 2,
    title: 'Google Cloud Professional Developer',
    org: 'Google Cloud',
    year: '2022',
    type: 'Certification',
    gradient: 'from-blue-400 to-green-400',
    description: 'Certified to build and deploy scalable applications on Google Cloud Platform.',
  },
  {
    id: 3,
    title: 'Meta React Developer Certificate',
    org: 'Meta (Facebook)',
    year: '2022',
    type: 'Certification',
    gradient: 'from-blue-600 to-blue-400',
    description: 'Advanced React skills: hooks, performance optimization, and testing best practices.',
  },
  {
    id: 4,
    title: 'Hackathon Winner – TechFest 2023',
    org: 'TechFest Annual Competition',
    year: '2023',
    type: 'Award',
    gradient: 'from-yellow-400 to-orange-400',
    description: '1st place among 200+ teams building an AI-powered health monitoring application.',
  },
  {
    id: 5,
    title: 'Docker Certified Associate',
    org: 'Docker Inc.',
    year: '2021',
    type: 'Certification',
    gradient: 'from-blue-400 to-cyan-400',
    description: 'Expertise in containerization, Docker Swarm, Kubernetes, and container security.',
  },
  {
    id: 6,
    title: 'Top Open Source Contributor',
    org: 'GitHub',
    year: '2020 – Present',
    type: 'Achievement',
    gradient: 'from-gray-500 to-slate-400',
    description: '500+ commits across 10+ OSS projects with a combined 5K+ GitHub stars.',
  },
]

export const testimonials = [
  {
    id: 1,
    name: 'Sweety Patel',
    role: 'Sr. Software Engineer',
    company: 'AHAsolar Technologies',
    initials: 'SP',
    avatarGradient: 'from-pink-500 to-rose-500',
    text: "Ashish is an exceptional developer who consistently delivers high-quality work. Their ability to translate complex requirements into elegant, performant solutions is outstanding. An absolute asset to any engineering team.",
    rating: 5,
  },
  {
    id: 2,
    name: 'Garvit Sharma',
    role: 'Software Engineer',
    company: 'AHAsolar Technologies',
    initials: 'GS',
    avatarGradient: 'from-blue-500 to-indigo-500',
    text: "Working with Ashish was a true game-changer. They brought innovative architectural thinking to our hardest problems and consistently went above and beyond what was asked. I'd hire them again in a heartbeat.",
    rating: 5,
  },
  {
    id: 3,
    name: 'Shubham Raj',
    role: 'Sr. Software Engineer',
    company: 'Valuefy Technologies',
    initials: 'SR',
    avatarGradient: 'from-purple-500 to-violet-500',
    text: "Ashish has a rare gift — deep technical expertise paired with sharp design sensibility. They understood our vision immediately, collaborated beautifully with the team, and delivered a product that exceeded every expectation.",
    rating: 5,
  },
]
