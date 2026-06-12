import project01 from "../../../assets/images/thread.png";
import gigbee from "../../../assets/images/gigbee.png";
import gigbee01 from "../../../assets/images/gigbee01.png";
import gigbee02 from "../../../assets/images/gigbee02.png";
import gigbee03 from "../../../assets/images/gigbee03.png";

import trots01 from "../../../assets/images/trots01.png";
import trots02 from "../../../assets/images/trots02.png";
import trots03 from "../../../assets/images/trots03.png";
import trots04 from "../../../assets/images/trots04.png";

import radid01 from "../../../assets/images/radid01.png";
import radid02 from "../../../assets/images/radid02.png";
import radid03 from "../../../assets/images/radid03.png";
import radid04 from "../../../assets/images/radid04.png";

import mara01 from "../../../assets/images/mara01.png";
import mara02 from "../../../assets/images/mara02.png";
import mara03 from "../../../assets/images/mara03.png";
import mara04 from "../../../assets/images/mara04.png";

import gol01 from "../../../assets/images/gol01.png";
import gol02 from "../../../assets/images/gol02.png";
import gol03 from "../../../assets/images/gol03.png";
import gol04 from "../../../assets/images/gol04.png";

import cake01 from "../../../assets/images/sta01.png";
import cake02 from "../../../assets/images/sta02.png";

import alter01 from "../../../assets/images/ater01.png";
import alter02 from "../../../assets/images/alter02.png";
import alter03 from "../../../assets/images/alter03.png";

import wed01 from "../../../assets/images/wed01.png";
import wed02 from "../../../assets/images/wed02.png";
import wed03 from "../../../assets/images/wed03.png";
import wed04 from "../../../assets/images/wed04.png";

import glow01 from "../../../assets/images/glow01.png";
import glow02 from "../../../assets/images/glow02.png";
import glow03 from "../../../assets/images/glow03.png";
import glow04 from "../../../assets/images/glow04.png";
import glow05 from "../../../assets/images/glow05.png";
import glow06 from "../../../assets/images/glow06.png";

import ada01 from "../../../assets/images/ada01.png";
import ada02 from "../../../assets/images/ada02.png";
import ada03 from "../../../assets/images/ada03.png";
import ada04 from "../../../assets/images/wed04.png";

const projects = [
  {
    id: 1,
    name: "Job Freelance App",
    shortDescription: "A comprehensive freelance marketplace connecting clients with skilled professionals",
    fullDescription: "This freelance platform enables seamless collaboration between clients and freelancers with features like real-time messaging, project management tools, secure payment processing, and portfolio showcasing. The application includes advanced job matching algorithms, review systems, and a user-friendly dashboard for managing projects, proposals, and earnings.",
    images: [
      gigbee,
      gigbee01,
      gigbee02,
      gigbee03
    ],
    techStack: [
      { name: "React", category: "Frontend", color: "#61DAFB" },
      { name: "Node.js", category: "Backend", color: "#339933" },
      { name: "MongoDB", category: "Database", color: "#47A248" },
      { name: "Tailwind CSS", category: "Styling", color: "#38B2AC" },
      { name: "Express.js", category: "Backend", color: "#000000" },
      { name: "JWT", category: "Authentication", color: "#000000" },
      { name: "Socket.io", category: "Real-time", color: "#010101" },
      { name: "Cloudinary", category: "Media Storage", color: "#3448C5" }
    ],
    features: [
      {
        icon: "👤",
        title: "User Authentication",
        description: "Secure registration and login system with role-based access for clients and freelancers"
      },
      {
        icon: "💬",
        title: "Real-time Chat",
        description: "Instant messaging system for seamless communication between clients and freelancers"
      },
      {
        icon: "📋",
        title: "Project Management",
        description: "Complete project tracking with milestones, deadlines, and progress monitoring"
      },
      {
        icon: "💰",
        title: "Secure Payments",
        description: "Escrow payment system with secure transactions and dispute resolution"
      },
      {
        icon: "⭐",
        title: "Rating System",
        description: "Comprehensive review and rating system to build trust and reputation"
      },
      {
        icon: "🔍",
        title: "Smart Job Matching",
        description: "AI-powered job recommendations based on skills and preferences"
      },
      {
        icon: "📄",
        title: "Resume Builder",
        description: "Professional resume generator with customizable templates"
      },
      {
        icon: "📊",
        title: "Dashboard Analytics",
        description: "Detailed earnings reports and performance analytics for freelancers"
      }
    ],
    liveLink: "https://www.gigbee.work/",
    githubLink: "#",
    status: "Inprogress",
    duration: "3 months",
    role: "Full Stack Developer",
    challenges: [
      "Implementing real-time notifications and chat functionality",
      "Building secure payment escrow system with refund capabilities",
      "Developing efficient job matching algorithms",
      "Ensuring data privacy and security for user information"
    ],
    learnings: [
      "Real-time communication implementation with Socket.io",
      "Payment gateway integration and financial transaction security",
      "Advanced MongoDB queries for complex data relationships",
      "User experience optimization for multi-role platforms"
    ]
  },

  {
    id: 9,
    name: "GlowIt (GrowIt)",
    shortDescription: "A next-gen marketplace where users earn by sharing products, services, or adverts. Features a unique affiliate model, dark/light mode, and a responsive design — currently in active development.",
    fullDescription: "GlowIt (branded as GrowIt) is an innovative marketplace platform that redefines e-commerce by combining shopping with an affiliate earning system. Users can post products, services, or adverts, while others can share any listing to earn commissions. The platform features a dual earning path: sellers pay a flat fee or commission, while affiliates earn per view or sale. Built as a work-in-progress MVP, the site already showcases key metrics (50K+ users, $250K+ earnings), a transparent commission structure, and a modern UI with dark/light mode toggling. The goal is to create an ecosystem where everyone — from businesses to casual users — wins by participating.",
    images: [
      // Replace with actual screenshots of GlowIt
      glow01,
      glow02,
      glow03,
      glow04,
      glow05,
      glow06
    ],
    techStack: [
      { name: "React", category: "Frontend", color: "#61DAFB" },
      { name: "Tailwind CSS", category: "Styling", color: "#38B2AC" },
      { name: "Radix UI", category: "Component Library", color: "#6E56CF" },
      { name: "Dark/Light Mode", category: "Feature", color: "#FBBF24" },
      { name: "Vercel", category: "Hosting", color: "#000000" },
      { name: "React Router", category: "Routing", color: "#CA4245" },
      { name: "Framer Motion", category: "Animations", color: "#0055FF" } // optional, if used
    ],
    features: [
      {
        icon: "🛒",
        title: "Dual Marketplace",
        description: "Post adverts ($10 flat), products (5% fee), or services (5% booking fee). Affiliates share any listing."
      },
      {
        icon: "💰",
        title: "Share & Earn Model",
        description: "Affiliates earn $0.30 per advert view, 2-5% on product sales, 3-5% on service bookings, and $0.50 per referral."
      },
      {
        icon: "🌓",
        title: "Dark / Light Mode",
        description: "Fully implemented theme toggle using Tailwind CSS and Radix UI components for a seamless user preference experience."
      },
      {
        icon: "📊",
        title: "Real-Time Stats Dashboard",
        description: "Displays live platform metrics: 50K+ active users, $250K+ earnings paid, 10K+ listings, 100K+ shares."
      },
      {
        icon: "💵",
        title: "Instant Payout System",
        description: "Users can withdraw earnings via bank transfer, mobile airtime, or card instantly."
      },
      {
        icon: "📱",
        title: "Fully Responsive",
        description: "Mobile-first design ensures seamless experience across all devices — crucial for sharing on social media."
      }
    ],
    liveLink: "https://glowit-flax.vercel.app/",
    githubLink: "#", // Add your GitHub link if available
    status: "Work in Progress (MVP Live)",
    duration: "Ongoing — initial MVP ~ 4-6 weeks",
    role: "Frontend Developer & UI Designer",
    challenges: [
      "Designing a clear, trust-building UI for a complex earning model (different fees per listing type).",
      "Implementing dark/light mode consistently across all components without visual glitches.",
      "Creating a responsive layout that handles data-heavy tables (commission structure) on mobile.",
      "Balancing feature richness with performance for the MVP launch.",
      "Designing an intuitive user flow for both 'sellers' and 'sharers' with minimal onboarding friction."
    ],
    learnings: [
      "Deepened expertise in Tailwind CSS theming for dark/light mode with persistent user preferences.",
      "Gained experience using Radix UI primitives for accessible, unstyled components that integrate with Tailwind.",
      "Learned to present multi-tiered commission structures in a clean, scannable table format.",
      "Improved skills in building responsive layouts for marketplace-style dashboards and stat cards.",
      "Understood MVP trade-offs — focusing on core earning loops before adding complex backend features."
    ]
  }
  ,

{
  id: 3,
  name: "Radid Construction",
  shortDescription: "A modern, responsive website for a construction company showcasing their portfolio and services.",
  fullDescription: "A sleek and professional website designed for EliteBuild Construction to establish a strong online presence. The site effectively communicates the company's expertise, showcases their high-quality projects through an interactive gallery, and provides an easy way for potential clients to get in touch. I developed the entire frontend, focusing on a clean design, smooth animations, and a fully responsive layout that looks impeccable on all devices.",
  images: [
    radid01,
    radid02,
    radid03,
    radid04
  ],
  techStack: [
    { name: "React", category: "Frontend", color: "#61DAFB" },
    { name: "Tailwind CSS", category: "Styling", color: "#38B2AC" },
    { name: "DaisyUI", category: "Component Library", color: "#5A0FC8" },
    { name: "Framer Motion", category: "Animation", color: "#000000" },
    { name: "React Hook Form", category: "Forms", color: "#EC5990" },
    { name: "React Icons", category: "Icons", color: "#E91E63" }
  ],
  features: [
    {
      icon: "🏗️",
      title: "Service Showcase",
      description: "A dedicated section to highlight the company's core construction and renovation services."
    },
    {
      icon: "🖼️",
      title: "Project Gallery",
      description: "An interactive, filterable gallery to showcase completed construction projects with high-quality images."
    },
    {
      icon: "📱",
      title: "Fully Responsive",
      description: "A flawlessly responsive design that ensures a perfect experience on desktop, tablet, and mobile."
    },
    {
      icon: "✨",
      title: "Smooth Animations",
      description: "Engaging and polished page transitions and micro-interactions using Framer Motion."
    },
    {
      icon: "📧",
      title: "Contact Form",
      description: "A user-friendly contact form with validation for generating new client leads."
    },
    {
      icon: "⚡",
      title: "Fast Performance",
      description: "Optimized for speed and SEO, ensuring quick load times and better search engine visibility."
    }
  ],
  liveLink: "https://www.radid.co.zw/",
  githubLink: "#",
  status: "Completed",
  duration: "2 Weeks",
  role: "Frontend Developer",
  challenges: [
    "Designing and implementing a responsive image gallery that maintains aspect ratios across different screen sizes.",
    "Creating meaningful and performant animations with Framer Motion without compromising site speed.",
    "Utilizing DaisyUI's component classes effectively alongside custom Tailwind CSS styling for a unique design.",
    "Ensuring the website conveys strength and professionalism while remaining modern and approachable."
  ],
  learnings: [
    "Advanced techniques for combining Tailwind CSS with component libraries like DaisyUI.",
    "Mastering Framer Motion for creating complex animations and gesture-based interactions.",
    "Best practices for image optimization and responsive design in a media-heavy website.",
    "Improving SEO and accessibility for business websites to reach a wider audience."
  ]
},
{
  id: 4,
  name: "E-commerce store",
  shortDescription: "A custom-built e-commerce platform for handmade goods, facilitating sales through WhatsApp.",
  fullDescription: "A bespoke e-commerce website developed for a client specializing in handmade crafts. The platform features a clean, product-focused design with a grid display, advanced filtering, and a fully functional cart. The unique checkout process is handled directly via WhatsApp, where users can send their cart to discuss customizations and get price quotations. I was responsible for the full design, frontend development, and deployment, creating a seamless bridge between browsing products and initiating a personalized conversation with the business owner.",
  images: [
    mara01,
    mara02,
    mara03,
    mara04
  ],
  techStack: [
    { name: "React", category: "Frontend", color: "#61DAFB" },
    { name: "JavaScript (ES6+)", category: "Frontend", color: "#F7DF1E" },
    { name: "Tailwind CSS", category: "Styling", color: "#38B2AC" },
    { name: "Neon Postgres", category: "Database", color: "#336791" },
    { name: "Vercel", category: "Deployment", color: "#000000" },
    { name: "WhatsApp API", category: "Integration", color: "#25D366" }
  ],
  features: [
    {
      icon: "🛍️",
      title: "Product Catalog",
      description: "Beautiful grid layout showcasing products with high-quality images and detailed descriptions."
    },
    {
      icon: "🛒",
      title: "Add to Cart",
      description: "Full cart functionality allowing users to add, remove, and update quantities of items."
    },
    {
      icon: "🔍",
      title: "Search & Filters",
      description: "Advanced filtering by category, price, and other attributes to easily find products."
    },
    {
      icon: "💬",
      title: "WhatsApp Checkout",
      description: "Directly send the cart contents via WhatsApp to get a quote and complete the purchase."
    },
    {
      icon: "📱",
      title: "Fully Responsive",
      description: "A seamless shopping experience on any device, from desktop to mobile."
    },
    {
      icon: "⚡",
      title: "Fast Performance",
      description: "Optimized and deployed on Vercel for lightning-fast load times and a smooth user experience."
    }
  ],
  liveLink: "https://www.marangasei-market.co.za/",
  githubLink: "#",
  status: "Completed",
  duration: "1 months",
  role: "Full Stack Developer",
  challenges: [
    "Designing an intuitive user flow that seamlessly transitions from the website to a WhatsApp conversation.",
    "Managing complex client-side state for the shopping cart without a dedicated state management library.",
    "Ensuring the product data from the Neon Postgres database was efficiently fetched and displayed.",
    "Creating a responsive product grid that adapts beautifully to all screen sizes."
  ],
  learnings: [
    "Advanced React hooks for state and effect management in a real-world application.",
    "Integration of third-party APIs (WhatsApp) to create unique user workflows.",
    "Deployment and serverless database management using Vercel and Neon Postgres.",
    "Client communication and project customization based on specific requirements and feedback."
  ]
},
{
  id: 5,
  name: "Gold4africa",
  shortDescription: "An elegant and luxurious website for a gold investment firm, designed to build trust and capture user interest.",
  fullDescription: "A premium, high-converting website for a gold trading and investment company. The design emphasizes luxury, stability, and trust through a sophisticated color palette, smooth animations, and a polished user experience. The 7-page site effectively communicates the value proposition of investing in gold, showcases market insights, and provides easy pathways for potential clients to engage. I developed the entire frontend, focusing on performance, visual appeal, and creating a seamless journey from visitor to lead.",
  images: [
    gol01,
    gol02,
    gol03,
    gol04
  ],
  techStack: [
    { name: "React", category: "Frontend", color: "#61DAFB" },
    { name: "JavaScript (ES6+)", category: "Frontend", color: "#F7DF1E" },
    { name: "Tailwind CSS", category: "Styling", color: "#38B2AC" },
    { name: "Framer Motion", category: "Animation", color: "#000000" },
    { name: "React Router", category: "Routing", color: "#CA4245" },
    { name: "React Icons", category: "Icons", color: "#E91E63" }
  ],
  features: [
    {
      icon: "✨",
      title: "Immersive Animations",
      description: "Subtle and elegant page transitions and scroll-triggered animations using Framer Motion to enhance user engagement."
    },
    {
      icon: "🏛️",
      title: "Multi-page Layout",
      description: "A comprehensive 7-page structure including Home, About, Services, Market, Gallery, Blog, and Contact."
    },
    {
      icon: "📊",
      title: "Live Gold Price Ticker",
      description: "A dynamic display of real-time (or daily) gold prices to provide immediate value to visitors."
    },
    {
      icon: "📱",
      title: "Fully Responsive",
      description: "A flawless experience across all devices, ensuring accessibility for all potential clients."
    },
    {
      icon: "✉️",
      title: "Lead Capture Forms",
      description: "Strategically placed contact forms and call-to-actions to convert visitors into qualified leads."
    },
    {
      icon: "⚡",
      title: "Optimized Performance",
      description: "Fast-loading pages and smooth interactions, crucial for maintaining a premium user experience."
    }
  ],
  liveLink: "https://www.gold4africa.com/",
  githubLink: "#",
  status: "Completed",
  duration: "1 week",
  role: "Frontend Developer",
  challenges: [
    "Creating a visual identity that conveys luxury and trustworthiness through UI and animations.",
    "Managing complex page transitions and animation sequences across 7 different pages without performance loss.",
    "Designing a responsive layout that maintains its elegance and impact on both mobile and desktop views.",
    "Integrating dynamic content, like a price ticker, in a way that feels seamless and professional."
  ],
  learnings: [
    "Advanced animation choreography and timing with Framer Motion to create a premium feel.",
    "Best practices for multi-page React application structure and routing.",
    "Techniques for optimizing website performance and load times for image-heavy, animated sites.",
    "UI/UX principles for designing high-stakes financial or investment websites that require building user trust."
  ]
},
{
  id: 6,
  name: "Stanely Cakes n Doughnuts",
  shortDescription: "A sweet and delightful e-commerce website for a confectionery business, enabling customers to browse treats and place orders seamlessly.",
  fullDescription: "A fully-functional e-commerce platform for a cakes and doughnuts business built with modern web technologies. The website features an appealing, appetite-stimulating design with smooth user interactions. Customers can browse delicious products, add items to cart, and complete purchases through an intuitive checkout process. The backend integrates with a PostgreSQL database via Neon DB for reliable data management. I developed the entire application, focusing on creating an engaging shopping experience, secure user authentication, and efficient order management system.",
  images: [
    // Replace with your actual image imports/variables
    cake01,
    cake02
  ],
  techStack: [
    { name: "React", category: "Frontend", color: "#61DAFB" },
    { name: "JavaScript (ES6+)", category: "Frontend", color: "#F7DF1E" },
    { name: "Tailwind CSS", category: "Styling", color: "#38B2AC" },
    { name: "React Router", category: "Routing", color: "#CA4245" },
    { name: "Neon DB", category: "Database", color: "#336791" },
    { name: "PostgreSQL", category: "Database", color: "#336791" },
    { name: "React Icons", category: "Icons", color: "#E91E63" },
    { name: "Context API", category: "State Management", color: "#FF6B6B" }
  ],
  features: [
    {
      icon: "🛒",
      title: "Product Catalog",
      description: "Beautifully displayed cakes and doughnuts with categories, filters, and detailed product pages."
    },
    {
      icon: "🧺",
      title: "Shopping Cart",
      description: "Persistent cart functionality allowing users to add, remove, and update quantities of items."
    },
    {
      icon: "🔐",
      title: "User Authentication",
      description: "Secure user registration, login, and profile management for personalized shopping experiences."
    },
    {
      icon: "💳",
      title: "Checkout System",
      description: "Streamlined checkout process with order summary, shipping details, and payment integration."
    },
    {
      icon: "📱",
      title: "Fully Responsive",
      description: "Perfect shopping experience across all devices, from mobile phones to desktop computers."
    },
    {
      icon: "📊",
      title: "Admin Dashboard",
      description: "Backend interface for managing products, orders, and customer information."
    }
  ],
  liveLink: "https://www.stanelycakesanddoughnuts.co.zw/", // Replace with your actual link
  githubLink: "#", // Add your GitHub link
  status: "Completed",
  duration: "2-3 weeks", // Adjust based on actual duration
  role: "Full Stack Developer",
  challenges: [
    "Designing an appealing UI that showcases food items in an appetizing way while maintaining fast load times.",
    "Implementing a robust shopping cart that persists across sessions without compromising performance.",
    "Integrating backend database operations with a responsive frontend for real-time inventory management.",
    "Creating a secure user authentication system and protecting sensitive customer data.",
    "Developing an intuitive admin interface for non-technical business owners to manage their store."
  ],
  learnings: [
    "Full-stack development with React frontend and PostgreSQL database integration via Neon DB.",
    "E-commerce best practices including cart management, user flow optimization, and secure transactions.",
    "Database schema design for managing products, users, orders, and inventory.",
    "Performance optimization techniques for media-rich e-commerce sites.",
    "State management patterns for complex applications using React Context API."
  ]
},
{
  id: 7,
  name: "Alketaal Timbers",
  shortDescription: "A SAZ-certified forestry and timber treatment business — supplying Creosote poles, CCA poles, mining timber, and more to Zimbabwe and Botswana at competitive prices.",
  fullDescription: "A professional web platform for Alketaal Timbers, a SAZ-certified supplier of treated timber products. The website showcases their range of Creosote poles, CCA-treated poles, mining timber, and construction lumber. It provides clear product categories, technical specifications, and an inquiry system for bulk orders. Built with modern web technologies, the site emphasizes reliability, industrial-grade presentation, and easy contact methods for B2B customers in Zimbabwe and Botswana.",
  images: [
    // Replace with your actual timber product images
    alter01,
    alter02,
    alter03
  ],
  techStack: [
    { name: "React", category: "Frontend", color: "#61DAFB" },
    { name: "JavaScript (ES6+)", category: "Frontend", color: "#F7DF1E" },
    { name: "Tailwind CSS", category: "Styling", color: "#38B2AC" },
    { name: "React Router", category: "Routing", color: "#CA4245" },
    { name: "EmailJS / Formspree", category: "Backend", color: "#E65C00" },
    { name: "Leaflet / Mapbox", category: "Mapping", color: "#3B82F6" },
    { name: "React Icons", category: "Icons", color: "#E91E63" }
  ],
  features: [
    {
      icon: "🌲",
      title: "Product Showcase",
      description: "Displays treated poles (Creosote, CCA), mining timber, and construction lumber with technical specs."
    },
    {
      icon: "📄",
      title: "SAZ Certification Badge",
      description: "Highlights SAZ certification for quality and compliance in timber treatment."
    },
    {
      icon: "📞",
      title: "Bulk Inquiry System",
      description: "Contact form and quote request system tailored for B2B timber buyers."
    },
    {
      icon: "🌍",
      title: "Regional Focus",
      description: "Clear emphasis on serving Zimbabwe and Botswana with competitive pricing."
    },
    {
      icon: "📱",
      title: "Fully Responsive",
      description: "Works seamlessly on mobile, tablet, and desktop for contractors and procurement teams."
    },
    {
      icon: "📊",
      title: "Product Categories",
      description: "Easy navigation between Creosote poles, CCA poles, mining timber, and general construction timber."
    }
  ],
  liveLink: "https://alketaaltimber.co.zw/",
  githubLink: "#", // Add your GitHub link if applicable
  status: "Completed",
  duration: "2-3 weeks",
  role: "Frontend & Content Developer",
  challenges: [
    "Presenting technical timber specifications in a clean, non-technical way for procurement managers.",
    "Building a fast-loading site with multiple high-quality product images.",
    "Creating an inquiry system that captures bulk order details without complex backend authentication.",
    "Designing a layout that feels industrial and trustworthy yet modern."
  ],
  learnings: [
    "Organizing industrial/B2B product catalogs for clarity and ease of use.",
    "Building lead generation tools (quote request forms) for non-e-commerce businesses.",
    "Integrating maps and location services to highlight service regions.",
    "Optimizing performance for image-heavy industrial product galleries."
  ]
},
{
  id: 8,
  name: "Bridal Innovations",
  shortDescription: "Luxury wedding and event planning specialists — offering bespoke decor, floral arrangements, styling, and full-service coordination for weddings, bridal showers, and corporate events in Zimbabwe.",
  fullDescription: "An elegant, inspiration-driven website for Bridal Innovations, a premium event planning and wedding decor company. The site showcases their portfolio of styled weddings, decor setups, floral designs, and event concepts. Visitors can explore service packages, view real wedding galleries, request quotes, and connect with the team for consultations. Built with a romantic yet modern aesthetic, the website emphasizes visual storytelling, seamless navigation, and a strong emotional connection with brides-to-be and event hosts.",
  images: [
    // Replace with actual wedding/event decor images
    wed01,
    wed02,
    wed03,
    wed04
  ],
  techStack: [
    { name: "React", category: "Frontend", color: "#61DAFB" },
    { name: "JavaScript (ES6+)", category: "Frontend", color: "#F7DF1E" },
    { name: "Tailwind CSS", category: "Styling", color: "#38B2AC" },
    { name: "Framer Motion", category: "Animations", color: "#0055FF" },
    { name: "React Router", category: "Routing", color: "#CA4245" },
    { name: "EmailJS", category: "Contact & Quotes", color: "#E65C00" },
    { name: "React Hook Form", category: "Forms", color: "#EC5990" },
    { name: "React Lightbox", category: "Gallery", color: "#7C3AED" }
  ],
  features: [
    {
      icon: "💍",
      title: "Portfolio Gallery",
      description: "Stunning image galleries showcasing real weddings, decor setups, floral arrangements, and themed events."
    },
    {
      icon: "📋",
      title: "Service Packages",
      description: "Clear presentation of decor packages — from intimate ceremonies to grand receptions — with pricing options."
    },
    {
      icon: "💐",
      title: "Custom Quote Request",
      description: "Interactive form for brides and event hosts to request personalized quotes based on guest count, theme, and budget."
    },
    {
      icon: "📅",
      title: "Consultation Booking",
      description: "Easy scheduling system for free initial consultations with the planning team."
    },
    {
      icon: "⭐",
      title: "Testimonials & Real Brides",
      description: "Social proof section featuring reviews and real wedding stories from past clients."
    },
    {
      icon: "📱",
      title: "Fully Responsive & Romantic Design",
      description: "Soft, elegant UI that looks stunning on mobile, tablet, and desktop — perfect for browsing inspiration anywhere."
    }
  ],
  liveLink: "https://www.bridalinnovations.co.zw/",
  githubLink: "#", // Add your GitHub link if applicable
  status: "Completed",
  duration: "3-4 weeks",
  role: "Frontend Developer & UI Designer",
  challenges: [
    "Optimizing high-resolution wedding photography for fast loading without sacrificing image quality.",
    "Creating a romantic yet professional brand identity that appeals to both brides and corporate event planners.",
    "Building a quote request system that captures detailed event requirements (guest count, venue type, color themes, etc.).",
    "Designing a gallery that feels curated and emotional, not cluttered, while still showing range of work.",
    "Ensuring mobile-first navigation for brides browsing on phones during wedding planning."
  ],
  learnings: [
    "Balancing visual-heavy content with performance optimization (lazy loading, image compression, lightbox galleries).",
    "Designing for emotional connection — using colors, typography, and layout to evoke trust and romance.",
    "Building complex form logic for custom quotes without backend infrastructure.",
    "Creating reusable portfolio card components that maintain consistency across different event types (weddings, bridal showers, corporate).",
    "Implementing smooth scroll-triggered animations to enhance the storytelling experience."
  ]
},

{
  id: 10,
  name: "Business Marketing App",
  shortDescription: "A dynamic marketing platform for businesses to list services, post adverts, and engage with their community.",
  fullDescription: "Trotsbasket is a comprehensive marketing and community engagement platform designed to bridge the gap between businesses and customers. Businesses can create detailed listings, publish promotional adverts, and gain valuable insights through customer reviews and ratings. The platform fosters community interaction via a built-in blog and enhances business visibility through a searchable public directory. I was responsible for architecting and developing the entire responsive frontend, ensuring an intuitive and seamless user experience across all devices.",
  images: [
    trots01,
    trots02,
    trots03,
    trots04
  ],
  techStack: [
    { name: "React", category: "Frontend", color: "#61DAFB" },
    { name: "TypeScript", category: "Frontend", color: "#3178C6" },
    { name: "Context API", category: "State Management", color: "#6D31C6" },
    { name: "React Query", category: "Data Fetching", color: "#FF4154" },
    { name: "Tailwind CSS", category: "Styling", color: "#38B2AC" },
    { name: "React Hook Form", category: "Forms", color: "#EC5990" },
    { name: "Framer Motion", category: "Animation", color: "#000000" }
  ],
  features: [
    {
      icon: "🏢",
      title: "Business Listings",
      description: "Businesses can create and manage detailed public profiles with services, hours, and contact info."
    },
    {
      icon: "📢",
      title: "Advert Management",
      description: "Create, schedule, and publish targeted promotional campaigns to reach a wider audience."
    },
    {
      icon: "⭐",
      title: "Reviews & Ratings",
      description: "Customers can leave feedback and ratings, providing social proof and valuable insights for businesses."
    },
    {
      icon: "📈",
      title: "Insights Dashboard",
      description: "Businesses get analytics on advert performance, customer engagement, and review trends."
    },
    {
      icon: "📝",
      title: "Community Blog",
      description: "Publish articles and updates to engage the community and improve SEO visibility."
    },
    {
      icon: "📱",
      title: "Fully Responsive",
      description: "A seamless experience on desktops, tablets, and mobile devices, built with a mobile-first approach."
    }
  ],
  liveLink: "https://trotsbasket.com/",
  githubLink: "#",
  status: "Inprogess",
  duration: "2 months",
  role: "Frontend Developer",
  challenges: [
    "Designing and implementing a complex, multi-step form for business listings and advert creation.",
    "Ensuring a consistent and responsive layout across a wide variety of device screen sizes.",
    "Managing complex state for user data, business profiles, and advert campaigns efficiently.",
    "Optimizing frontend performance for fast loading times and smooth interactions."
  ],
  learnings: [
    "Advanced state management patterns using React Context and hooks for a large-scale application.",
    "Mastering responsive design principles and CSS frameworks (Tailwind CSS) to build fluid layouts.",
    "Implementing efficient data fetching, caching, and synchronization with React Query.",
    "Enhancing user experience with modern UI/UX practices and subtle animations using Framer Motion."
  ]
},
{
  id: 11,
  name: "Alden Advisory (Alden Business Consultancy)",
  shortDescription: "A London-based firm of qualified accountants offering audit, tax planning, VAT, payroll, and business consultancy services — with fixed-fee pricing and cloud accounting expertise.",
  fullDescription: "A professional, trust-driven website for Alden Business Consultancy, a firm of certified accountants serving UK businesses and individuals. The site presents a comprehensive range of financial services including bookkeeping, accounting, tax planning, VAT compliance, payroll, self-assessment, financial planning, and business advisory. Key features include clear service categorization (with pricing indicators like 'From £150'), client testimonials, an FAQ section, and a strong emphasis on compliance (HMRC, MTD, GDPR). The design balances informational density with a clean, corporate aesthetic — ideal for building credibility with SMEs, startups, and freelancers.",
  images: [
    // Replace with actual screenshots of Alden Advisory
    ada01,
    ada02,
    ada03
  ],
  techStack: [
    { name: "React", category: "Frontend", color: "#61DAFB" },
    { name: "Tailwind CSS", category: "Styling", color: "#38B2AC" },
    { name: "Radix UI", category: "Component Library", color: "#6E56CF" },
    { name: "React Router", category: "Routing", color: "#CA4245" },
    { name: "Framer Motion", category: "Animations", color: "#0055FF" },
    { name: "EmailJS / Contact Form", category: "Lead Capture", color: "#E65C00" },
    { name: "React Hook Form", category: "Forms", color: "#EC5990" }
  ],
  features: [
    {
      icon: "📊",
      title: "Service Showcase",
      description: "Eight core service areas (Bookkeeping, Accounting, Tax, VAT, Payroll, Planning, Self-Assessment, Advisory) with pricing indicators and HMRC compliance badges."
    },
    {
      icon: "⭐",
      title: "Trust Signals",
      description: "Client testimonials, satisfaction metrics (4.9/5, 99% retention), years of experience (10+), and partner logos (Xero, QuickBooks, Sage)."
    },
    {
      icon: "📞",
      title: "Consultation Booking",
      description: "Clear CTAs for free consultations, with phone, email, and a contact form for inquiries."
    },
    {
      icon: "📰",
      title: "Industry Insights & FAQ",
      description: "A blog/news section for tax updates and a detailed FAQ accordion for common accounting questions."
    },
    {
      icon: "📱",
      title: "Fully Responsive",
      description: "Mobile-friendly layout that presents complex service tables and pricing clearly on all devices."
    },
    {
      icon: "🔒",
      title: "Compliance Badges",
      description: "Visual indicators for HMRC compliance, Making Tax Digital (MTD), GDPR, and secure data protection."
    }
  ],
  liveLink: "https://www.aldenadvisory.co.uk/",
  githubLink: "#", // Add your GitHub link if applicable
  status: "Completed",
  duration: "3-4 weeks",
  role: "Frontend Developer & UI Designer",
  challenges: [
    "Organizing a wide range of accounting services (8+ categories) into a scannable, non-overwhelming layout.",
    "Presenting pricing information ('Fixed fee', 'From £150', 'Per employee') without making the site feel like a price list.",
    "Building trust through UI — using certifications, client counts, and testimonials effectively without clutter.",
    "Creating a responsive accordion FAQ that handles long-form accounting questions cleanly on mobile.",
    "Designing a professional color scheme that feels corporate but not cold, approachable but not casual."
  ],
  learnings: [
    "Structuring service-based B2B content for maximum lead conversion (clear CTAs, trust signals, low friction contact).",
    "Using Radix UI primitives to build accessible accordions and tabs for the FAQ and service categories.",
    "Implementing a dark/light mode toggle that maintains readability for financial data and tables.",
    "Balancing visual design with informational density — critical for professional services websites.",
    "Integrating form validation and submission handling for consultation requests without a full backend."
  ]
}
];

export default projects;