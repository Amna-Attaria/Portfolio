// ============ PERSONAL INFO ============
export const PERSONAL_INFO = {
  name: 'Amna Khan',
  roles: ['MERN Stack Developer', 'Full Stack Developer', 'React Specialist', 'APP Developer'],
  tagline: 'Crafting Fast, Scalable & Beautiful Web Experiences.',
  valueProposition: 'Helping startups, businesses, and entrepreneurs transform ideas into high-performance digital products through clean code and exceptional user experiences.',
  email: 'amna12khan26@gmail.com',
  github: 'https://github.com/Amna-Attaria',
  linkedin: 'https://www.linkedin.com/in/amna-khan6/',
  twitter: 'https://twtter.com/amnakhan',
  resumeUrl: '#',
}

// ============ NAVIGATION ============
export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

// ============ STATS ============
export const STATS = [
  { value: 20, suffix: '+', label: 'Projects Completed' },
  { value: 15, suffix: '+', label: 'Clients Served' },
  { value: 1.5, suffix: ' Yrs', label: 'Experience' },
  { value: 100, suffix: '%', label: 'Client Satisfaction' },
]

// ============ SKILLS ============
export const SKILLS = {
  frontend: [
    { name: 'React.js', level: 90 },
    { name: 'Next.js', level: 80 },
    { name: 'Tailwind CSS', level: 92 },
    { name: 'Bootstrap', level: 95 },
    { name: 'JavaScript', level: 88 },
    { name: 'TypeScript', level: 72 },
  ],
  backend: [
    { name: 'Node.js', level: 85 },
    { name: 'Express.js', level: 83 },
    {name: 'PHP', level: 70},
  ],
  database: [
    { name: 'MongoDB', level: 82 },
    { name: 'MySQL', level: 90 },
    { name: 'Sql Server', level: 87 },
  ],
  tools: [
    { name: 'Git & GitHub', level: 88 },
    { name: 'VS Code', level: 95 },
    { name: 'Postman', level: 85 },
  ],
}

// ============ SERVICES ============
export const SERVICES = [
  {
    id: 1,
    icon: '🌐',
    title: 'Web Development',
    description: 'Pixel-perfect, responsive websites built with modern frameworks that load fast and convert visitors into clients.',
    features: ['Responsive Design', 'SEO Optimized', 'Performance Tuned'],
    gradient: 'from-blue-500 to-blue-700',
  },
  {
    id: 2,
    icon: '⚡',
    title: 'MERN Stack Apps',
    description: 'Complete end-to-end web applications built with MongoDB, Express.js, React, and Node.js.',
    features: ['Full Stack Solution', 'REST APIs', 'MongoDB Database'],
    gradient: 'from-purple-500 to-purple-700',
  },
  {
    id: 3,
    icon: '🗄️',
    title: 'Database Management ',
    description: 'Designing and managing databases for web applications, ensuring data integrity, security, and scalability.',
    features: ['Database Design', 'Data Migration', 'Performance Tuning'],
    gradient: 'from-green-500 to-teal-600',
  },
  // {
  //   id: 4,
  //   icon: '🎨',
  //   title: 'UI/UX Implementation',
  //   description: 'Translating design mockups into pixel-perfect, interactive interfaces with smooth animations.',
  //   features: ['Design to Code', 'Framer Motion', 'Accessible UI'],
  //   gradient: 'from-pink-500 to-purple-600',
  // },
  // {
  //   id: 5,
  //   icon: '🚀',
  //   title: 'Performance Optimization',
  //   description: 'Audit and optimize existing apps for lightning-fast load times and exceptional Lighthouse scores.',
  //   features: ['Core Web Vitals', 'Code Splitting', 'Image Optimization'],
  //   gradient: 'from-orange-500 to-red-600',
  // },
  {
    id: 6,
    icon: '🛠',
    title: 'Website Maintenance',
    description: 'Ongoing support, updates, and feature additions to keep your digital product fresh and running smoothly.',
    features: ['Bug Fixes', 'Feature Additions', 'Monthly Reports'],
    gradient: 'from-green-500 to-teal-600',
  },
  {
    id: 7,
    icon: '📱',
    title: 'Mobile App Development',
    description: 'Building cross-platform mobile applications with React Native and Flutter for iOS and Android devices.',
    features: ['React Native', 'Flutter', 'Cross-Platform', 'App Store Deployment'],
    gradient: 'from-blue-500 to-indigo-600',
  },
  {
    id: 8,
    icon: '💡',
    title: 'Other Services',
    description: 'Have a unique project or requirement? I offer custom solutions tailored to your specific needs.',
    features: ['Custom Solutions', 'Consultation', 'Flexible Approach'],
    gradient: 'from-yellow-500 to-orange-600',
  }
]

// ============ PROJECTS ============
export const PROJECTS = [
  {
    id: 1,
    title: 'Animated Game ',
    description: 'using Javascript, HTML, and CSS. A fun and interactive game that demonstrates advanced DOM manipulation and animation techniques.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    tags: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Amna-Attaria/Animation-Game',
    live: 'https://animation-game-hazel.vercel.app/',
    featured: true,
  },
  {
    id: 2,
    title: 'TaskFlow — Project Manager',
    description: 'Kanban-style project management app with real-time collaboration, drag & drop, team invites, and deadline tracking.',
    image: 'https://images.unsplash.com/photo-1611224885990-ab7363d7f2a9?w=600&h=400&fit=crop',
    tags: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    github: 'https://github.com/amnakhan',
    live: '#',
    featured: true,
  },
  {
    id: 3,
    title: 'MedCare — Healthcare Portal',
    description: 'Doctor appointment booking system with patient records, video consultations, and admin panel.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop',
    tags: ['React', 'Express', 'MongoDB', 'JWT'],
    github: 'https://github.com/amnakhan',
    live: '#',
    featured: false,
  },
  {
    id: 4,
    title: 'BrandKit — SaaS Dashboard',
    description: 'Marketing analytics dashboard with real-time data visualization, reports, and multi-workspace support.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    tags: ['React', 'TypeScript', 'Node.js', 'Chart.js'],
    github: 'https://github.com/amnakhan',
    live: '#',
    featured: false,
  },
  {
    id: 5,
    title: 'LearnHub — EdTech Platform',
    description: 'Online learning platform with course management, video lessons, quizzes, certificates, and payment integration.',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop',
    tags: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
    github: 'https://github.com/amnakhan',
    live: '#',
    featured: false,
  },
  {
    id: 6,
    title: 'FoodDash — Restaurant App',
    description: 'Multi-restaurant food ordering app with real-time order tracking, reviews, and vendor dashboard.',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=400&fit=crop',
    tags: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    github: 'https://github.com/amnakhan',
    live: '#',
    featured: false,
  },
]

// ============ EXPERIENCE ============
export const EXPERIENCE = [
  {
    id: 1,
    type: 'work',
    title: 'Full Stack Developer',
    company: 'Smart Medics',
    period: '2023 — Present',
    duration: '1 Year',
    description: 'Built and maintained healthcare web applications, developed RESTful APIs for patient management systems, and implemented responsive UI components for the patient portal.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
  },
  {
    id: 2,
    type: 'freelance',
    title: 'Freelance MERN Developer',
    company: 'Self-Employed',
    period: '2022 — Present',
    duration: '1.5 Years',
    description: 'Delivered 20+ projects for international clients including e-commerce platforms, SaaS dashboards, booking systems, and landing pages with high conversion rates.',
    tags: ['MERN Stack', 'Next.js', 'Tailwind', 'APIs'],
  },
]

export const ACHIEVEMENTS = [
  {
    id: 1,
    icon: '🏆',
    title: 'Aptech Vision 2025',
    subtitle: 'Winner — Global Competition',
    description: 'Won first place at Aptech\'s international student competition for building an innovative healthcare web application.',
  },
  {
    id: 2,
    icon: '⭐',
    title: 'Student Of The Month',
    subtitle: 'Awarded Three Times',
    description: 'Recognized as top-performing student multiple times for academic excellence and project quality.',
  },
]

// ============ EDUCATION ============
export const EDUCATION = [
  {
    id: 1,
    degree: 'BSSE — Bachelor of Software Engineering',
    institution: 'Virtual University of Pakistan',
    period: '2025 — Present',
    status: 'In Progress',
    description: 'Studying core computer science fundamentals, software engineering, data structures, databases, and advanced web development.',
  },
  {
    id: 2,
    degree: 'ADSE — Advanced Diploma in Software Engineering',
    institution: 'Aptech Pakistan',
    period: '2023-2026',
    status: 'Completed',
    description: 'Comprehensive training in full-stack development, OOP, database design, and professional software practices.',
  },
  {
    id: 3,
    degree: 'Intermediate in Science ',
    institution: 'Board of Intermediate Education',
    period: '2023 — 2025',
    status: 'Completed',
    description: 'Foundation in mathematics and sciences with distinction, which built strong analytical and problem-solving skills.',
  },
]

// ============ CERTIFICATIONS ============
export const CERTIFICATIONS = [
  {
    id: 1,
    title: 'Web & Mobile App Development',
    institute: 'Saylani Mass IT Training (SMIT)',
    period: '2022',
    description: 'Intensive full-stack MERN development course covering React, Node.js, Express, and MongoDB.',
    badge: '🎓',
  },

  {
    id: 2,
    title: 'Student of the Month',
    institute: 'Aptech Pakistan',
    period: '2023',
    description: 'Recognized for outstanding academic performance and contributions to the learning community.',
    badge: '🏅',
  },
  {
    id: 3,
    title: 'Participation in Data Base Management Competition',
    institute: 'Aptech Pakistan',
    period: '2023',
    description: 'Participated in a competitive event focused on database management skills, showcasing proficiency in SQL and data modeling.',
    badge: '🏆',
  },
  {
    id: 4,
    title: "Winner of 'Aptech Vision 2025' Global Competition",
    institute: 'Aptech Pakistan',
    period: '2025',
    description: 'Achieved first place in a global competition, demonstrating exceptional skills in software development and problem-solving.',
    badge: '🥇',
  },
  {
    id: 5,
    title: 'Participation In MERN Hackathon',
    institute: 'Saylani Mass IT Training (SMIT)',
    period: '2023',
    description: 'Participated in a hackathon focused on building full-stack applications using the MERN stack.',
    badge: '💻',
  },
  {
    id: 6,
    title : 'certified by punctual and dedicated student',
    institute: 'Aptech Pakistan',
    period: '2024',
    description: 'Recognized for consistent dedication and punctuality in completing coursework and projects.',
    badge: '📜',
  }
]

// ============ TESTIMONIALS ============
export const TESTIMONIALS = [
  {
    id: 1,
    name: 'James Harrison',
    role: 'Founder, LaunchPad Startup',
    avatar: 'JH',
    review: 'Amna delivered our MVP in record time with exceptional quality. The code was clean, the UI was stunning, and she was always one step ahead. Absolutely would hire again.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Sarah Mitchell',
    role: 'CEO, DigitalWave Agency',
    avatar: 'SM',
    review: 'Working with Amna was a game changer. She understood our vision immediately and built exactly what we needed. The animations and attention to detail really impressed our clients.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Khalid Rahman',
    role: 'CTO, MedTech Solutions',
    avatar: 'KR',
    review: 'Exceptional backend work. The API architecture Amna designed was robust, well-documented, and scaled perfectly as we grew from 100 to 10,000 users.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Emily Chen',
    role: 'Product Manager, SaaSify',
    avatar: 'EC',
    review: 'Amna is a rare full-stack developer who genuinely cares about the product. She flagged issues proactively and always delivered on time. Top-tier professional.',
    rating: 5,
  },
]

// ============ BLOG ============
export const BLOG_POSTS = [
  {
    id: 1,
    title: 'Building Scalable APIs with Node.js and Express',
    excerpt: 'A deep dive into structuring production-ready REST APIs with proper error handling, validation, and authentication patterns.',
    category: 'Backend',
    date: 'May 2025',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=600&h=400&fit=crop',
  },
  {
    id: 2,
    title: 'Advanced Framer Motion: Creating Cinematic UI',
    excerpt: 'Learn how to create premium, award-worthy animations with Framer Motion — from scroll effects to page transitions.',
    category: 'Frontend',
    date: 'April 2025',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop',
  },
  {
    id: 3,
    title: 'MongoDB Performance Optimization Techniques',
    excerpt: 'Indexing strategies, aggregation pipelines, and schema design tips that transformed our app from slow to blazing fast.',
    category: 'Database',
    date: 'March 2025',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&h=400&fit=crop',
  },
]
