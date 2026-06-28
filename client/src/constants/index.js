// Navigation links
export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

// Skills data
export const SKILLS = {
  frontend: [
    { name: 'React', level: 92, icon: 'SiReact' },
    { name: 'Next.js', level: 80, icon: 'SiNextdotjs' },
    { name: 'Tailwind CSS', level: 95, icon: 'SiTailwindcss' },
    { name: 'JavaScript', level: 90, icon: 'SiJavascript' },
    { name: 'TypeScript', level: 72, icon: 'SiTypescript' },
  ],
  backend: [
    { name: 'Node.js', level: 88, icon: 'SiNodedotjs' },
    { name: 'Express.js', level: 85, icon: 'SiExpress' },
  ],
  database: [
    { name: 'MongoDB', level: 85, icon: 'SiMongodb' },
    { name: 'MySQL', level: 70, icon: 'SiMysql' },
  ],
  tools: [
    { name: 'Git', level: 90, icon: 'SiGit' },
    { name: 'GitHub', level: 92, icon: 'SiGithub' },
    { name: 'VS Code', level: 95, icon: 'SiVisualstudiocode' },
    { name: 'Postman', level: 85, icon: 'SiPostman' },
  ],
}

// Services data
export const SERVICES = [
  {
    id: 1,
    title: 'Web Development',
    description: 'Modern, responsive websites built with the latest technologies. Pixel-perfect designs that perform flawlessly across all devices and browsers.',
    icon: 'HiCode',
    color: '#3B82F6',
    features: ['Responsive Design', 'Cross-browser Support', 'SEO Optimized'],
  },
  {
    id: 2,
    title: 'MERN Stack Applications',
    description: 'Complete full-stack solutions using MongoDB, Express, React, and Node.js. End-to-end development from database to user interface.',
    icon: 'HiServer',
    color: '#8B5CF6',
    features: ['REST APIs', 'Authentication', 'Real-time Features'],
  },
  {
    id: 3,
    title: 'API Development',
    description: 'Robust RESTful APIs and backend architecture that scale with your business. Clean, documented, and secure endpoints.',
    icon: 'HiCog',
    color: '#06B6D4',
    features: ['RESTful Design', 'API Documentation', 'Security & Auth'],
  },
  {
    id: 4,
    title: 'UI/UX Implementation',
    description: 'Bringing designs to life with pixel-perfect precision. Interactive interfaces with smooth animations and exceptional user experiences.',
    icon: 'HiSparkles',
    color: '#10B981',
    features: ['Framer Motion', 'Micro-interactions', 'Accessibility'],
  },
  {
    id: 5,
    title: 'Performance Optimization',
    description: 'Supercharge your existing web application. Reduce load times, optimize assets, and improve Core Web Vitals scores.',
    icon: 'HiLightningBolt',
    color: '#F59E0B',
    features: ['Code Splitting', 'Lazy Loading', 'Bundle Optimization'],
  },
  {
    id: 6,
    title: 'Website Maintenance',
    description: 'Keep your website running smoothly with regular updates, bug fixes, feature additions, and performance monitoring.',
    icon: 'HiShieldCheck',
    color: '#EF4444',
    features: ['Regular Updates', 'Bug Fixes', '24/7 Monitoring'],
  },
]

// Projects data
export const PROJECTS = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with product management, cart functionality, payment integration, and admin dashboard.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
    github: '#',
    demo: '#',
    featured: true,
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Collaborative project management tool with real-time updates, team collaboration, and drag-and-drop task boards.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&q=80',
    tags: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
    github: '#',
    demo: '#',
    featured: true,
  },
  {
    id: 3,
    title: 'Healthcare Dashboard',
    description: 'Patient management system with appointment scheduling, medical records, and analytics for healthcare providers.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&q=80',
    tags: ['React', 'TypeScript', 'Node.js', 'MySQL'],
    github: '#',
    demo: '#',
    featured: true,
  },
  {
    id: 4,
    title: 'Social Media API',
    description: 'RESTful API for a social media platform with authentication, post management, comments, likes, and user relationships.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&q=80',
    tags: ['Node.js', 'Express', 'MongoDB', 'JWT'],
    github: '#',
    demo: '#',
    featured: false,
  },
  {
    id: 5,
    title: 'Real Estate Platform',
    description: 'Property listing platform with advanced search, map integration, and virtual tour functionality.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80',
    tags: ['React', 'Next.js', 'Tailwind', 'MongoDB'],
    github: '#',
    demo: '#',
    featured: false,
  },
  {
    id: 6,
    title: 'Learning Management System',
    description: 'Online education platform with course creation, video streaming, progress tracking, and certificate generation.',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&q=80',
    tags: ['React', 'Node.js', 'MongoDB', 'AWS'],
    github: '#',
    demo: '#',
    featured: false,
  },
]

// Experience timeline
export const EXPERIENCES = [
  {
    id: 1,
    title: 'Full Stack Developer',
    company: 'Smart Medics',
    type: 'Full-time',
    duration: '1 Year',
    period: '2023 – 2024',
    description: 'Built and maintained healthcare web applications using MERN stack. Developed patient management systems, appointment scheduling features, and RESTful APIs.',
    skills: ['React', 'Node.js', 'MongoDB', 'Express', 'REST APIs'],
  },
  {
    id: 2,
    title: 'Freelance MERN Stack Developer',
    company: 'Self-Employed',
    type: 'Freelance',
    duration: '1.5 Years',
    period: '2023 – Present',
    description: 'Delivering custom web solutions for clients globally. Specializing in React frontends, Node.js backends, and MongoDB databases for startups and small businesses.',
    skills: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Next.js'],
  },
]

// Achievements
export const ACHIEVEMENTS = [
  {
    id: 1,
    title: 'Winner – Aptech Vision 2025',
    description: 'Winner of Global Competition',
    icon: 'HiTrophy',
    color: '#F59E0B',
  },
  {
    id: 2,
    title: 'Student of the Month',
    description: 'Awarded three consecutive times',
    icon: 'HiStar',
    color: '#3B82F6',
  },
]

// Testimonials
export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Sarah Johnson',
    position: 'CEO, TechStart Inc.',
    avatar: 'SJ',
    review: "Amna delivered an exceptional e-commerce platform that exceeded our expectations. Her attention to detail, clean code, and proactive communication made the entire process smooth. The final product was delivered on time and has significantly boosted our sales.",
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Chen',
    position: 'Product Manager, DigitalFlow',
    avatar: 'MC',
    review: "Working with Amna was a fantastic experience. She built our task management application with incredible precision. The UI animations are buttery smooth and the performance is outstanding. Highly recommend her for any MERN stack projects.",
    rating: 5,
  },
  {
    id: 3,
    name: 'Aisha Malik',
    position: 'Founder, HealthTech Solutions',
    avatar: 'AM',
    review: "Amna transformed our outdated system into a modern, scalable healthcare platform. Her technical expertise in both frontend and backend development is impressive. She understood our requirements perfectly and delivered beyond expectations.",
    rating: 5,
  },
  {
    id: 4,
    name: 'David Williams',
    position: 'CTO, LaunchPad Agency',
    avatar: 'DW',
    review: "I've worked with many developers, but Amna stands out for her problem-solving ability and code quality. She built a complex real estate platform for us with advanced features. The codebase is clean, scalable, and well-documented.",
    rating: 5,
  },
  {
    id: 5,
    name: 'Fatima Hassan',
    position: 'Startup Founder, EduLearn',
    avatar: 'FH',
    review: "Amna built our learning management system from scratch. Her ability to handle both design implementation and backend logic is rare. She's not just a developer — she's a true digital partner who cares about your product's success.",
    rating: 5,
  },
]

// Education
export const EDUCATION = [
  {
    id: 1,
    degree: 'Bachelor of Science in Software Engineering (BSSE)',
    institution: 'Virtual University of Pakistan',
    period: '2023 – Present',
    description: 'Pursuing a comprehensive computer science education with focus on software engineering principles, data structures, algorithms, and modern development practices.',
    icon: 'HiAcademicCap',
    color: '#3B82F6',
  },
  {
    id: 2,
    degree: 'Advanced Diploma in Software Engineering (ADSE)',
    institution: 'Aptech Pakistan',
    period: '2022 – 2023',
    description: 'Intensive practical training in software development, web technologies, and modern programming paradigms with hands-on project experience.',
    icon: 'HiCode',
    color: '#8B5CF6',
  },
  {
    id: 3,
    degree: 'Intermediate in Science (Pre-Engineering)',
    institution: 'Board of Intermediate Education, Pakistan',
    period: '2020 – 2022',
    description: 'Completed intermediate education with science subjects, building a strong foundation in mathematics and logical reasoning.',
    icon: 'HiBookOpen',
    color: '#10B981',
  },
]

// Certifications
export const CERTIFICATIONS = [
  {
    id: 1,
    title: 'Web & Mobile App Development',
    institute: 'Saylani Mass IT Training',
    year: '2023',
    description: 'Comprehensive certification covering full-stack web development, mobile app development, and modern JavaScript frameworks.',
    color: '#3B82F6',
  },
  {
    id: 2,
    title: 'Student of the Month',
    institute: 'Aptech Pakistan',
    year: '2023',
    description: 'Recognized for outstanding academic performance and contributions to the learning community.',
    color: '#8B5CF6',
  },
  {
    id: 3,
    title: 'Participation in Data Base Management Competition',
    institute: 'Aptech Pakistan',
    year: '2023',
    description: 'Participated in a competitive event focused on database management skills, showcasing proficiency in SQL and data modeling.',
    color: '#10B981',
  },
  {
    id: 4,
    title: "Winner of 'Aptech Vision 2025' Global Competition",
    institute: 'Aptech Pakistan',
    year: '2025',
    description: 'Achieved first place in a global competition, demonstrating exceptional skills in software development and problem-solving.',
    color: '#F59E0B',
  }
]

// Stats
export const STATS = [
  { label: 'Projects Completed', value: 20, suffix: '+', icon: 'HiCode' },
  { label: 'Clients Served', value: 15, suffix: '+', icon: 'HiUsers' },
  { label: 'Years Experience', value: 1.5, suffix: '', icon: 'HiCalendar' },
  { label: 'Satisfaction Rate', value: 100, suffix: '%', icon: 'HiStar' },
]

// About highlight cards
export const ABOUT_HIGHLIGHTS = [
  {
    icon: 'HiLightBulb',
    title: 'Problem Solver',
    desc: 'Turning complex ideas into practical, elegant solutions.',
    color: '#F59E0B',
  },
  {
    icon: 'HiCode',
    title: 'Full Stack Developer',
    desc: 'Building complete applications end-to-end.',
    color: '#3B82F6',
  },
  {
    icon: 'HiBriefcase',
    title: 'Freelancer',
    desc: 'Delivering client-focused digital experiences.',
    color: '#8B5CF6',
  },
  {
    icon: 'HiSparkles',
    title: 'Clean Code',
    desc: 'Scalable, maintainable and optimized code.',
    color: '#10B981',
  },
]

// Blog posts (placeholder)
export const BLOG_POSTS = [
  {
    id: 1,
    title: 'Building Scalable MERN Applications in 2024',
    excerpt: 'Explore the best practices, folder structures, and architecture patterns for building production-ready MERN stack applications.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80',
    date: 'Mar 15, 2024',
    readTime: '8 min read',
    category: 'Development',
  },
  {
    id: 2,
    title: 'Mastering Framer Motion: Advanced Animation Techniques',
    excerpt: 'Deep dive into Framer Motion\'s advanced features to create stunning, performant animations that elevate your React applications.',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&q=80',
    date: 'Feb 28, 2024',
    readTime: '6 min read',
    category: 'Animations',
  },
  {
    id: 3,
    title: 'Why Tailwind CSS is a Game-Changer for Developers',
    excerpt: 'How utility-first CSS transformed my development workflow, increased productivity, and helped me ship better designs faster.',
    image: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=600&q=80',
    date: 'Feb 10, 2024',
    readTime: '5 min read',
    category: 'CSS',
  },
]

// Social links
export const SOCIAL_LINKS = [
  { label: 'GitHub', icon: 'FiGithub', url: 'https://github.com/amnakhan' },
  { label: 'LinkedIn', icon: 'FiLinkedin', url: 'https://linkedin.com/in/amnakhan' },
  { label: 'Twitter', icon: 'FiTwitter', url: 'https://twitter.com/amnakhan' },
  { label: 'Email', icon: 'FiMail', url: 'mailto:hello@amnakhan.dev' },
]

// Services dropdown
export const SERVICE_OPTIONS = [
  'Web Development',
  'MERN Stack Application',
  'API Development',
  'UI/UX Implementation',
  'Performance Optimization',
  'Website Maintenance',
  'Other',
]
