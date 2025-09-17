import React, { useState } from 'react';

const ProjectDetails = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Hardcoded project data
  const project = {
    id: 1,
    name: "E-Commerce Platform",
    shortDescription: "A full-featured e-commerce platform built with modern web technologies",
    fullDescription: "This comprehensive e-commerce platform provides a complete shopping experience with advanced features like real-time inventory management, secure payment processing, and an intuitive admin dashboard. The application is built with scalability in mind, featuring microservices architecture and cloud deployment capabilities.",
    images: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
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
      { name: "Stripe API", category: "Payment", color: "#635BFF" },
      { name: "AWS S3", category: "Storage", color: "#FF9900" }
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
    liveLink: "https://ecommerce-demo.com",
    githubLink: "https://github.com/archford/ecommerce-platform",
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
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  const getTechCategoryColor = (category) => {
    const categoryColors = {
      'Frontend': 'from-blue-500 to-cyan-500',
      'Backend': 'from-green-500 to-emerald-500',
      'Database': 'from-orange-500 to-amber-500',
      'Styling': 'from-purple-500 to-violet-500',
      'Authentication': 'from-red-500 to-pink-500',
      'Payment': 'from-indigo-500 to-blue-500',
      'Storage': 'from-yellow-500 to-orange-500'
    };
    return categoryColors[category] || 'from-slate-500 to-slate-600';
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-gradient-to-r from-blue-500 to-blue-800 rounded-full opacity-20 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-gradient-to-r from-emerald-500 to-emerald-800 rounded-full opacity-20 blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-16">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-8">
            <a href="/" className="hover:text-blue-400 transition-colors">Home</a>
            <span>/</span>
            <a href="/projects" className="hover:text-blue-400 transition-colors">Projects</a>
            <span>/</span>
            <span className="text-white">{project.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Project Info */}
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-3 mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${project.status === 'Completed' ? 'from-green-500 to-emerald-500' : 'from-yellow-500 to-orange-500'} text-white`}>
                  {project.status}
                </span>
                <span className="text-slate-400">{project.duration} project</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                  {project.name}
                </span>
              </h1>

              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                {project.shortDescription}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a 
                  href={project.liveLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-4 px-6 rounded-lg font-medium transition-all duration-300 hover:from-blue-600 hover:to-cyan-600 hover:shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-3 group"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                  </svg>
                  View Live Demo
                </a>
                
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 bg-slate-800/50 border border-slate-700 text-slate-300 py-4 px-6 rounded-lg font-medium transition-all duration-300 hover:bg-slate-700/50 hover:text-white hover:border-slate-600 flex items-center justify-center gap-3 group"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="group-hover:scale-110 transition-transform duration-300">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  View Source Code
                </a>
              </div>

              {/* Project Meta */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-4">
                  <div className="text-slate-400 text-sm mb-1">Role</div>
                  <div className="text-white font-medium">{project.role}</div>
                </div>
                <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-4">
                  <div className="text-slate-400 text-sm mb-1">Duration</div>
                  <div className="text-white font-medium">{project.duration}</div>
                </div>
              </div>
            </div>

            {/* Project Images */}
            <div className="order-1 lg:order-2">
              <div className="relative group">
                <div className="relative w-full h-80 md:h-96 rounded-xl overflow-hidden bg-slate-800">
                  <img 
                    src={project.images[currentImageIndex]} 
                    alt={`${project.name} screenshot ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Navigation Arrows */}
                  <button 
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 backdrop-blur-sm text-white p-2 rounded-full hover:bg-black/70 transition-all duration-300 opacity-0 group-hover:opacity-100"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  
                  <button 
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 backdrop-blur-sm text-white p-2 rounded-full hover:bg-black/70 transition-all duration-300 opacity-0 group-hover:opacity-100"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>

                  {/* Image Counter */}
                  <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                    {currentImageIndex + 1} / {project.images.length}
                  </div>
                </div>

                {/* Thumbnail Navigation */}
                <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
                  {project.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                        index === currentImageIndex 
                          ? 'border-blue-500 opacity-100' 
                          : 'border-transparent opacity-50 hover:opacity-75'
                      }`}
                    >
                      <img 
                        src={image} 
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="container mx-auto px-4 py-16 space-y-16">
        {/* Description */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Project <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Overview</span>
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed text-center">
            {project.fullDescription}
          </p>
        </section>

        {/* Tech Stack */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">
            Technology <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Stack</span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {project.techStack.map((tech, index) => (
              <div 
                key={index}
                className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-4 text-center hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 group"
              >
                <div className={`w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-br ${getTechCategoryColor(tech.category)} flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300`}>
                  {tech.name.charAt(0)}
                </div>
                <h3 className="font-semibold text-white mb-1">{tech.name}</h3>
                <p className="text-xs text-slate-400">{tech.category}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">
            Key <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Features</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {project.features.map((feature, index) => (
              <div 
                key={index}
                className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-6 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 group"
              >
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Challenges & Learnings */}
        <section className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Challenges */}
            <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-2xl">⚡</span>
                <span className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">Challenges</span>
              </h3>
              <ul className="space-y-4">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-red-400 mt-2">•</span>
                    <span className="text-slate-300">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Learnings */}
            <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-2xl">🎯</span>
                <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Learnings</span>
              </h3>
              <ul className="space-y-4">
                {project.learnings.map((learning, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-green-400 mt-2">•</span>
                    <span className="text-slate-300">{learning}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">
            Interested in this <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">project?</span>
          </h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Feel free to explore the live demo or check out the source code. I'm always open to discussing the technical details and implementation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <a 
              href={project.liveLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-600 hover:to-cyan-600 transition-all duration-300"
            >
              Live Demo
            </a>
            <a 
              href={project.githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 bg-slate-800 border border-slate-700 text-slate-300 py-3 px-6 rounded-lg font-medium hover:bg-slate-700 hover:text-white transition-all duration-300"
            >
              Source Code
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProjectDetails;