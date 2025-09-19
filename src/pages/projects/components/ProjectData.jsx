import project01 from "../../../assets/images/thread.png";
import project02 from "../../../assets/images/gigbee.png";
import project03 from "../../../assets/images/chats.png";
import project04 from "../../../assets/images/radid.png";
import project05 from "../../../assets/images/gold.png";
import project06 from "../../../assets/images/medical.png";
import project07 from "../../../assets/images/marangesi.png";
import project08 from "../../../assets/images/dolphine.png";
const projects = [
  {
    id: 1,
    name: "Job Freelance App",
    shortDescription: "A full-featured e-commerce platform built with modern web technologies",
    fullDescription: "This comprehensive e-commerce platform provides a complete shopping experience with advanced features like real-time inventory management, secure payment processing, and an intuitive admin dashboard. The application is built with scalability in mind, featuring microservices architecture and cloud deployment capabilities.",
    images: [
      project02,
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1556742111-a301076d9d18?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
    ],
    techStack: [
      { name: "React", category: "Frontend", color: "#61DAFB" },
      { name: "Node.js", category: "Backend", color: "#339933" },
      { name: "MongoDB", category: "Database", color: "#47A248" },
      { name: "Tailwind CSS", category: "Styling", color: "#38B2AC" },
      { name: "Express.js", category: "Backend", color: "#000000" },
      { name: "JWT", category: "Authentication", color: "#000000" },
      // { name: "Stripe API", category: "Payment", color: "#635BFF" },
      // { name: "AWS S3", category: "Storage", color: "#FF9900" }
    ],
    features: [
      {
        icon: "🛒",
        title: "Shopping Cart",
        description: "Advanced cart management with persistent storage and real-time updates"
      },
      {
        icon: "💳",
        title: "Secure Payments",
        description: "Integration with Stripe for secure and reliable payment processing"
      },
      {
        icon: "👥",
        title: "User Management",
        description: "Complete user authentication system with role-based access control"
      },
      {
        icon: "📊",
        title: "Admin Dashboard",
        description: "Comprehensive admin panel for managing products, orders, and users"
      },
      {
        icon: "📱",
        title: "Responsive Design",
        description: "Fully responsive design that works seamlessly across all devices"
      },
      {
        icon: "🔍",
        title: "Search & Filter",
        description: "Advanced search functionality with multiple filtering options"
      },
      {
        icon: "⭐",
        title: "Product Reviews",
        description: "Customer review and rating system with moderation capabilities"
      },
      {
        icon: "📧",
        title: "Email Integration",
        description: "Automated email notifications for orders, shipping, and promotions"
      }
    ],
    liveLink: "https://simba-2nc0.onrender.com/login",
    githubLink: "#",
    status: "Completed",
    duration: "3 months",
    role: "Full Stack Developer",
    challenges: [
      "Implementing real-time inventory updates across multiple product variants",
      "Optimizing database queries for large product catalogs",
      "Ensuring PCI compliance for payment processing",
      "Building a scalable microservices architecture"
    ],
    learnings: [
      "Advanced React patterns and state management with Redux Toolkit",
      "MongoDB aggregation pipelines for complex data operations",
      "AWS deployment and cloud infrastructure management",
      "Payment gateway integration and security best practices"
    ]
  },
  {
    id: 2,
    name: "Task Management App",
    shortDescription: "A collaborative project management tool with real-time updates and team features",
    fullDescription: "A comprehensive task management application designed for teams and individuals to streamline workflow and boost productivity. Features include real-time collaboration, advanced filtering, time tracking, and detailed analytics. Built with performance and scalability in mind to handle large teams and complex project structures.",
    images: [
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
    ],
    techStack: [
      { name: "Vue.js", category: "Frontend", color: "#4FC08D" },
      { name: "Laravel", category: "Backend", color: "#FF2D20" },
      { name: "PostgreSQL", category: "Database", color: "#336791" },
      { name: "Socket.io", category: "Real-time", color: "#010101" },
      { name: "Redis", category: "Caching", color: "#DC382D" },
      { name: "Docker", category: "DevOps", color: "#2496ED" },
      { name: "Pusher", category: "Real-time", color: "#300D4F" }
    ],
    features: [
      {
        icon: "✅",
        title: "Task Management",
        description: "Create, assign, and track tasks with priority levels and due dates"
      },
      {
        icon: "👥",
        title: "Team Collaboration",
        description: "Real-time collaboration with comments, mentions, and file sharing"
      },
      {
        icon: "📊",
        title: "Project Analytics",
        description: "Detailed insights into team productivity and project progress"
      },
      {
        icon: "⏱️",
        title: "Time Tracking",
        description: "Built-in time tracking with detailed reporting and invoicing"
      },
      {
        icon: "🔔",
        title: "Notifications",
        description: "Real-time notifications via email, browser, and mobile push"
      },
      {
        icon: "📱",
        title: "Mobile App",
        description: "Native mobile apps for iOS and Android with offline support"
      }
    ],
    liveLink: "https://taskmanager-demo.com",
    githubLink: "https://github.com/archford/task-manager",
    status: "Completed",
    duration: "4 months",
    role: "Lead Developer",
    challenges: [
      "Implementing real-time updates without performance degradation",
      "Building complex permission systems for team hierarchies",
      "Optimizing database queries for large datasets",
      "Creating intuitive drag-and-drop interfaces"
    ],
    learnings: [
      "Vue 3 Composition API and advanced reactivity patterns",
      "Laravel queues and job processing for background tasks",
      "WebSocket implementation for real-time features",
      "Mobile app development with React Native"
    ]
  },
  {
    id: 3,
    name: "AI-Powered Analytics Dashboard",
    shortDescription: "Advanced data visualization platform with machine learning insights",
    fullDescription: "A sophisticated analytics dashboard that leverages artificial intelligence to provide actionable business insights. The platform processes large datasets in real-time, generates predictive models, and presents complex data through intuitive visualizations. Built for enterprise clients requiring advanced data analysis capabilities.",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
    ],
    techStack: [
      { name: "React", category: "Frontend", color: "#61DAFB" },
      { name: "Python", category: "Backend", color: "#3776AB" },
      { name: "FastAPI", category: "Backend", color: "#009688" },
      { name: "TensorFlow", category: "AI/ML", color: "#FF6F00" },
      { name: "PostgreSQL", category: "Database", color: "#336791" },
      { name: "D3.js", category: "Visualization", color: "#F79E16" },
      { name: "Apache Kafka", category: "Streaming", color: "#231F20" },
      { name: "Kubernetes", category: "DevOps", color: "#326CE5" }
    ],
    features: [
      {
        icon: "🤖",
        title: "AI Insights",
        description: "Machine learning algorithms for predictive analytics and trend analysis"
      },
      {
        icon: "📊",
        title: "Interactive Charts",
        description: "Dynamic data visualizations with drill-down capabilities"
      },
      {
        icon: "⚡",
        title: "Real-time Processing",
        description: "Stream processing for live data updates and instant notifications"
      },
      {
        icon: "🎯",
        title: "Custom Metrics",
        description: "Create and track custom KPIs with automated threshold alerts"
      },
      {
        icon: "📱",
        title: "Mobile Dashboard",
        description: "Responsive design optimized for mobile executive dashboards"
      },
      {
        icon: "🔐",
        title: "Enterprise Security",
        description: "Advanced security features with SSO and role-based access control"
      }
    ],
    liveLink: "https://analytics-demo.com",
    githubLink: "https://github.com/archford/ai-analytics",
    status: "In Progress",
    duration: "6 months",
    role: "Senior Full Stack Developer",
    challenges: [
      "Processing and visualizing massive datasets efficiently",
      "Implementing complex ML models in production environment",
      "Creating intuitive interfaces for non-technical users",
      "Ensuring data privacy and compliance with regulations"
    ],
    learnings: [
      "Advanced Python data science libraries and frameworks",
      "Machine learning model deployment and monitoring",
      "Real-time data streaming with Apache Kafka",
      "Complex data visualization techniques with D3.js"
    ]
  },
  {
    id: 4,
    name: "Social Media Management Tool",
    shortDescription: "Comprehensive platform for managing multiple social media accounts",
    fullDescription: "A powerful social media management platform that enables businesses and agencies to manage multiple social media accounts from a single dashboard. Features include content scheduling, analytics reporting, team collaboration, and automated engagement tools. Designed to streamline social media workflows and improve engagement rates.",
    images: [
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1553484771-371a605b060b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
    ],
    techStack: [
      { name: "Angular", category: "Frontend", color: "#DD0031" },
      { name: "NestJS", category: "Backend", color: "#E0234E" },
      { name: "MongoDB", category: "Database", color: "#47A248" },
      { name: "Bull Queue", category: "Jobs", color: "#CC0000" },
      { name: "OAuth", category: "Authentication", color: "#4285F4" },
      { name: "AWS", category: "Cloud", color: "#FF9900" },
      { name: "GraphQL", category: "API", color: "#E10098" }
    ],
    features: [
      {
        icon: "📅",
        title: "Content Scheduler",
        description: "Schedule posts across multiple platforms with optimal timing suggestions"
      },
      {
        icon: "📈",
        title: "Analytics Reports",
        description: "Comprehensive analytics and reporting for all connected accounts"
      },
      {
        icon: "👥",
        title: "Team Management",
        description: "Collaborate with team members and manage client accounts"
      },
      {
        icon: "🎨",
        title: "Content Creation",
        description: "Built-in image editor and content templates for quick post creation"
      },
      {
        icon: "🤖",
        title: "Auto Engagement",
        description: "Automated likes, follows, and comments based on custom rules"
      },
      {
        icon: "📱",
        title: "Multi-Platform",
        description: "Support for Facebook, Instagram, Twitter, LinkedIn, and TikTok"
      }
    ],
    liveLink: "https://socialtool-demo.com",
    githubLink: "https://github.com/archford/social-media-tool",
    status: "Completed",
    duration: "5 months",
    role: "Full Stack Developer",
    challenges: [
      "Integrating with multiple social media APIs and handling rate limits",
      "Building a flexible scheduling system across different time zones",
      "Creating a user-friendly content creation interface",
      "Implementing secure OAuth flows for multiple platforms"
    ],
    learnings: [
      "Angular advanced patterns and reactive programming with RxJS",
      "NestJS decorators and dependency injection patterns",
      "OAuth 2.0 implementation and security best practices",
      "Queue management and background job processing"
    ]
  },
  {
    id: 5,
    name: "Blockchain Voting System",
    shortDescription: "Secure and transparent voting platform built on blockchain technology",
    fullDescription: "A revolutionary voting system that leverages blockchain technology to ensure transparency, security, and immutability of electoral processes. The platform provides end-to-end encryption, real-time vote counting, and complete audit trails. Designed for organizations, institutions, and governments seeking modernized voting solutions.",
    images: [
      "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
    ],
    techStack: [
      { name: "React", category: "Frontend", color: "#61DAFB" },
      { name: "Solidity", category: "Blockchain", color: "#363636" },
      { name: "Web3.js", category: "Blockchain", color: "#F16822" },
      { name: "Ethereum", category: "Blockchain", color: "#627EEA" },
      { name: "IPFS", category: "Storage", color: "#65C2CB" },
      { name: "MetaMask", category: "Wallet", color: "#F6851B" },
      { name: "Hardhat", category: "Development", color: "#FFF100" },
      { name: "Node.js", category: "Backend", color: "#339933" }
    ],
    features: [
      {
        icon: "🗳️",
        title: "Secure Voting",
        description: "Cryptographically secure voting with end-to-end encryption"
      },
      {
        icon: "🔍",
        title: "Transparent Auditing",
        description: "Complete transparency with public audit trails on blockchain"
      },
      {
        icon: "⚡",
        title: "Real-time Results",
        description: "Instant vote counting and real-time result updates"
      },
      {
        icon: "🔐",
        title: "Voter Authentication",
        description: "Multi-factor authentication ensuring eligible voter participation"
      },
      {
        icon: "📊",
        title: "Analytics Dashboard",
        description: "Comprehensive voting analytics and participation statistics"
      },
      {
        icon: "📱",
        title: "Mobile Voting",
        description: "Mobile-optimized interface for convenient voting access"
      }
    ],
    liveLink: "https://blockvote-demo.com",
    githubLink: "https://github.com/archford/blockchain-voting",
    status: "Completed",
    duration: "7 months",
    role: "Blockchain Developer",
    challenges: [
      "Ensuring voter privacy while maintaining transparency",
      "Optimizing smart contract gas costs for large-scale voting",
      "Creating intuitive interfaces for non-technical users",
      "Implementing robust security measures against various attack vectors"
    ],
    learnings: [
      "Advanced Solidity programming and smart contract security",
      "Ethereum blockchain development and deployment strategies",
      "Cryptographic principles and privacy-preserving techniques",
      "Web3 integration and decentralized application architecture"
    ]
  }
];

export default projects;