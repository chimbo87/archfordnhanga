import React, { useState, useEffect } from "react";
import project01 from "../../../assets/images/marangesi.png";
import project02 from "../../../assets/images/gigbee.png";
import project03 from "../../../assets/images/radid.png";
import { useNavigate } from "react-router-dom";
const FeaturedProjects = () => {
  const [activeProject, setActiveProject] = useState(0);
  const navigate = useNavigate();
  // Replace with your actual project images
  const projectImages = {
    project1: project01,
    project2: project02,
    project3: project03,
  };

  // Featured projects data
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A modern, responsive e-commerce platform built with React and Node.js. Features include user authentication, product management, shopping cart, and admin dashboard.",
      image: projectImages.project1,
      category: "Full Stack",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Express",
        "Vercel, Neon-postgres",
      ],
      githubUrl: "#",
      liveUrl: "https://www.marangasei-market.co.za",
      highlights: [
        "Real-time inventory management",
        "Linked with Whatsapp",
        "Responsive design",
        "Admin analytics dashboard",
      ],
    },
    {
      id: 2,
      title: "Job Freelance App",
      description:
        "A freelancing platform connecting clients with skilled professionals. Features job posting, applications, real-time chat, and secure payments.",
      image: projectImages.project2,
      category: "Full Stack",
      technologies: [
        "React",
        "TypeScript",
        "Socket.io",
        "MongoDB",
        "Node JS",
        "Express",
        "Socket IO",
      ],
      githubUrl: "#",
      liveUrl: "https://simba-2nc0.onrender.com/login",
      highlights: [
        "Real-time messaging system",
        "User authentication with Google signup",
        "Job posting and application management",
        "Analytics dashboard for freelancers",
      ],
    },
    {
      id: 3,
      title: "Construction Website",
      description:
        "A modern, responsive website for a construction company showcasing services, projects, and client testimonials with an elegant UI/UX design.",
      image: projectImages.project3,
      category: "Frontend",
      technologies: ["React", "Tailwind CSS"],
      githubUrl: "#",
      liveUrl: "https://radid-constructions.vercel.app/",
      highlights: [
        "Fully responsive design",
        "Modern and professional UI",
        "Project portfolio showcase",
        "Fast loading performance",
      ],
    },
  ];

  // Auto-rotate projects every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProject((prev) => (prev + 1) % projects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [projects.length]);

  const handleProjectChange = (index) => {
    setActiveProject(index);
  };

  const handleExternalLink = (url) => {
    window.open(url, "_blank", "noopener noreferrer");
  };

  return (
    <section
      className="py-20 bg-slate-900 relative overflow-hidden"
      id="projects"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium mb-4 border border-blue-500/20">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Featured{" "}
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Showcasing my best work in web development, from concept to
            deployment
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Project Navigation */}
          <div className="lg:col-span-4 space-y-4">
            {projects.map((project, index) => (
              <button
                key={project.id}
                className={`w-full p-4 rounded-xl border transition-all duration-300 text-left group hover:bg-slate-800/50 ${
                  activeProject === index
                    ? "bg-slate-800/50 border-blue-500/50 shadow-lg"
                    : "bg-slate-800/20 border-slate-700/50 hover:border-slate-600"
                }`}
                onClick={() => handleProjectChange(index)}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`text-2xl font-bold transition-colors duration-300 ${
                      activeProject === index
                        ? "text-blue-400"
                        : "text-slate-500"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="flex-1">
                    <h4
                      className={`font-semibold mb-1 transition-colors duration-300 ${
                        activeProject === index
                          ? "text-white"
                          : "text-slate-300"
                      }`}
                    >
                      {project.title}
                    </h4>
                    <span
                      className={`text-sm transition-colors duration-300 ${
                        activeProject === index
                          ? "text-blue-400"
                          : "text-slate-500"
                      }`}
                    >
                      {project.category}
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Project Display */}
          <div className="lg:col-span-8">
            <div className="bg-slate-800/30 rounded-2xl border border-slate-700/50 overflow-hidden backdrop-blur-sm">
              {/* Project Image */}
              <div className="relative group">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={projects[activeProject].image}
                    alt={projects[activeProject].title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-purple-900/80 to-blue-900/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4 backdrop-blur-sm rounded-lg">
                  <button
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-lg shadow-lg hover:shadow-blue-500/30 hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-0.5 border border-blue-400/30"
                    onClick={() =>
                      handleExternalLink(projects[activeProject].liveUrl)
                    }
                  >
                    <svg
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
                    </svg>
                    Live Demo
                  </button>
                  <button
                    className="flex items-center gap-2 px-4 py-2 bg-transparent text-slate-200 font-medium rounded-lg shadow-lg hover:shadow-slate-500/20 transition-all duration-300 transform hover:-translate-y-0.5 border border-slate-500/40 hover:border-slate-300/60 hover:bg-slate-800/60 backdrop-blur-sm"
                    onClick={() =>
                      handleExternalLink(projects[activeProject].githubUrl)
                    }
                  >
                    <svg
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
                    </svg>
                    Source Code
                  </button>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 space-y-6">
                {/* Project Header */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="badge badge-primary bg-blue-500/20 text-blue-400 border-blue-500/30">
                      {projects[activeProject].category}
                    </div>
                    <span className="text-slate-500 text-sm">
                      {String(activeProject + 1).padStart(2, "0")} /{" "}
                      {String(projects.length).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {projects[activeProject].title}
                  </h3>
                </div>

                <p className="text-slate-300 leading-relaxed">
                  {projects[activeProject].description}
                </p>

                {/* Technologies */}
                <div>
                  <h4 className="text-white font-semibold mb-3">
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {projects[activeProject].technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-sm border border-slate-600/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                <div>
                  <h4 className="text-white font-semibold mb-3">
                    Key Features:
                  </h4>
                  <ul className="space-y-2">
                    {projects[activeProject].highlights.map(
                      (highlight, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-3 text-slate-300"
                        >
                          <div className="w-5 h-5 bg-emerald-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                            <svg
                              width="12"
                              height="12"
                              fill="#10b981"
                              viewBox="0 0 24 24"
                            >
                              <path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z" />
                            </svg>
                          </div>
                          {highlight}
                        </li>
                      )
                    )}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
  <button
    className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-lg shadow-lg hover:shadow-blue-500/30 hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-0.5 border border-blue-400/30 flex-1 group"
    onClick={() => handleExternalLink(projects[activeProject].liveUrl)}
  >
    <svg
      width="18"
      height="18"
      fill="currentColor"
      viewBox="0 0 24 24"
      className="group-hover:scale-110 transition-transform duration-300"
    >
      <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
    </svg>
    <span className="group-hover:tracking-wide transition-all duration-300">View Live Demo</span>
  </button>
  <button
    className="flex items-center justify-center gap-2 px-6 py-3 bg-transparent text-slate-200 font-medium rounded-lg shadow-lg hover:shadow-slate-500/20 transition-all duration-300 transform hover:-translate-y-0.5 border border-slate-600 hover:border-slate-400/60 hover:bg-slate-800/60 backdrop-blur-sm flex-1 group"
    onClick={() => handleExternalLink(projects[activeProject].githubUrl)}
  >
    <svg
      width="18"
      height="18"
      fill="currentColor"
      viewBox="0 0 24 24"
      className="group-hover:scale-110 transition-transform duration-300"
    >
      <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
    </svg>
    <span className="group-hover:tracking-wide transition-all duration-300">Source Code</span>
  </button>
</div>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center gap-3 mt-12">
          {projects.map((_, index) => (
            <button
              key={index}
              className={`w-12 h-2 rounded-full transition-all duration-300 ${
                activeProject === index
                  ? "bg-blue-500 scale-110"
                  : "bg-slate-700 hover:bg-slate-600"
              }`}
              onClick={() => handleProjectChange(index)}
              aria-label={`View project ${index + 1}`}
            >
              <div
                className={`h-full rounded-full transition-all duration-5000 ${
                  activeProject === index ? "bg-emerald-400 animate-pulse" : ""
                }`}
              ></div>
            </button>
          ))}
        </div>

        {/* View All Projects Link */}
        <div className="text-center mt-16">
          <button
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold transition-colors duration-300 group"
            onClick={() => navigate("/projects")}>
            <span>View All Projects</span>
            <svg
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="group-hover:translate-x-1 transition-transform duration-300"
            >
              <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
