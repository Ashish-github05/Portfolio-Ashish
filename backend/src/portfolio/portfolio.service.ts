import { Injectable } from '@nestjs/common';

@Injectable()
export class PortfolioService {
  getPersonalInfo() {
    return {
      name: 'Ashish Kumar',
      title: 'Full Stack Developer',
      subtitle: 'Software Engineer & Problem Solver',
      tagline: 'Building scalable web applications with modern technologies',
      bio: 'Passionate full-stack developer with 2+ years of experience crafting high-performance web applications. I specialize in React, Node.js, NestJS, and cloud technologies — delivering solutions that combine elegant design with robust engineering.',
      location: 'Bangalore, India',
      email: 'ak946417@gmail.com',
      phone: '+91 7781855388',
      github: 'https://github.com/Ashish-github05',
      linkedin: 'https://www.linkedin.com/in/ashish-kumar05/',
      twitter: 'https://twitter.com/ashishkumar',
      stats: [
        { label: 'Years Experience', value: '2+' },
        { label: 'Projects Completed', value: '5+' },
        { label: 'Happy Clients', value: '20+' },
        { label: 'Technologies', value: '20+' },
      ],
    };
  }

  getSkills() {
    return [
      {
        category: 'Frontend',
        icon: 'monitor',
        color: 'from-blue-500 to-cyan-500',
        items: [
          { name: 'React', level: 95 },
          { name: 'TypeScript', level: 90 },
          { name: 'JavaScript', level: 95 },
          { name: 'HTML / CSS', level: 92 },
          { name: 'Tailwind CSS', level: 88 },
          { name: 'Next.js', level: 80 },
        ],
      },
      {
        category: 'Backend',
        icon: 'server',
        color: 'from-green-500 to-emerald-500',
        items: [
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
        color: 'from-orange-500 to-red-500',
        items: [
          { name: 'MySQL', level: 88 },
          { name: 'MongoDB', level: 82 },
          { name: 'PostgreSQL', level: 78 },
          { name: 'Redis', level: 72 },
        ],
      },
      {
        category: 'Tools & DevOps',
        icon: 'tool',
        color: 'from-purple-500 to-pink-500',
        items: [
          { name: 'Git & GitHub', level: 95 },
          { name: 'Docker', level: 82 },
          { name: 'AWS', level: 76 },
          { name: 'CI/CD', level: 78 },
          { name: 'Linux', level: 80 },
          { name: 'Nginx', level: 72 },
        ],
      },
    ];
  }

  getExperience() {
    return [
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
    ];
  }

  getProjects() {
    return [
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
        tech: ['React', 'PHP', 'MySQL', 'CakePHP', 'Bootstrap'],
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
        tech: ['React', 'NestJS', 'TypeScript', 'MySQL', 'Chart.js'],
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
        tech: ['React', 'PHP', 'CakePHP', 'MySQL', 'REST API'],
        demo: 'https://gedaev.in/',
        category: 'Frontend',
        tags: ['Frontend'],
        gradient: 'from-teal-500 to-cyan-500',
        featured: false,
      },
    ];
  }

  getAchievements() {
    return [
      {
        id: 1,
        title: 'AWS Certified Solutions Architect',
        organization: 'Amazon Web Services',
        year: '2023',
        type: 'certification',
        color: 'from-orange-400 to-yellow-400',
        description: 'Professional-level certification for designing highly available, fault-tolerant systems on AWS',
      },
      {
        id: 2,
        title: 'Google Cloud Professional Developer',
        organization: 'Google Cloud',
        year: '2022',
        type: 'certification',
        color: 'from-blue-400 to-green-400',
        description: 'Certification for building and deploying scalable applications on Google Cloud Platform',
      },
      {
        id: 3,
        title: 'Meta React Developer Certificate',
        organization: 'Meta (Facebook)',
        year: '2022',
        type: 'certification',
        color: 'from-blue-600 to-blue-400',
        description: 'Advanced React development skills, hooks, performance optimization, and testing best practices',
      },
      {
        id: 4,
        title: 'Hackathon Winner – TechFest 2023',
        organization: 'TechFest Annual Competition',
        year: '2023',
        type: 'award',
        color: 'from-yellow-400 to-orange-400',
        description: 'First place in 48-hour hackathon building an AI-powered health monitoring app with 200+ participants',
      },
      {
        id: 5,
        title: 'Docker Certified Associate',
        organization: 'Docker Inc.',
        year: '2021',
        type: 'certification',
        color: 'from-blue-400 to-cyan-400',
        description: 'Expertise in containerization, Docker Swarm, Kubernetes, and container security best practices',
      },
      {
        id: 6,
        title: 'Top Open Source Contributor',
        organization: 'GitHub',
        year: '2020 – Present',
        type: 'achievement',
        color: 'from-gray-500 to-gray-400',
        description: '500+ contributions across 10+ popular open source projects with combined 5K+ GitHub stars',
      },
    ];
  }

  getTestimonials() {
    return [
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
    ];
  }

  getAllData() {
    return {
      personal: this.getPersonalInfo(),
      skills: this.getSkills(),
      experience: this.getExperience(),
      projects: this.getProjects(),
      achievements: this.getAchievements(),
      testimonials: this.getTestimonials(),
    };
  }
}
