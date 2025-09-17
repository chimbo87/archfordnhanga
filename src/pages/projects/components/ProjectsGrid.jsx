import React, { useState } from 'react';
import ProjectCard from './ProjectCard';

const ProjectsGrid = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');

  // Sample project data
  const projects = [
    {
      id: 1,
      name: "E-Commerce Platform",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      techStack: ["React", "Node.js", "MongoDB", "Tailwind"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      id: 2,
      name: "Task Management App",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1139&q=80",
      techStack: ["Vue.js", "Firebase", "CSS3"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      id: 3,
      name: "Weather Dashboard",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1165&q=80",
      techStack: ["JavaScript", "API", "HTML5"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      id: 4,
      name: "Social Media Analytics",
      image: "https://images.unsplash.com/photo-1611605698335-8b1569810432?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      techStack: ["React", "Chart.js", "Express", "PostgreSQL"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      id: 5,
      name: "Fitness Tracker",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      techStack: ["React Native", "Redux", "MongoDB"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      id: 6,
      name: "Recipe Finder App",
      image: "https://images.unsplash.com/photo-1495521821757-a1efb6729352?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1326&q=80",
      techStack: ["Angular", "Spoonacular API", "Bootstrap"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      id: 7,
      name: "Real Estate Listings",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80",
      techStack: ["Next.js", "Mapbox", "Tailwind", "PostgreSQL"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      id: 8,
      name: "Portfolio Website",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80",
      techStack: ["React", "Tailwind", "Framer Motion"],
      liveLink: "#",
      githubLink: "#"
    }
  ];

  // Get unique technologies from all projects
  const getAllTechnologies = () => {
    const allTechs = projects.flatMap(project => project.techStack);
    const uniqueTechs = [...new Set(allTechs)];
    return ['All', ...uniqueTechs];
  };

  // Filter projects based on selected technology
  const getFilteredProjects = () => {
    if (selectedFilter === 'All') {
      return projects;
    }
    return projects.filter(project => 
      project.techStack.includes(selectedFilter)
    );
  };

  const technologies = getAllTechnologies();
  const filteredProjects = getFilteredProjects();

  return (
    <section className="bg-slate-900 py-16" id="projects">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Featured <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Explore my latest work and projects that showcase my skills in full-stack development
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="mb-12">
          <div className="flex items-center gap-3 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-slate-800">
            <div className="flex gap-3 min-w-max px-4 sm:px-0">
              {technologies.map((tech) => (
                <button
                  key={tech}
                  onClick={() => setSelectedFilter(tech)}
                  className={`px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                    selectedFilter === tech
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/25 transform scale-105'
                      : 'bg-slate-800/50 text-slate-300 border border-slate-700/50 hover:bg-slate-700/50 hover:text-white hover:border-slate-600 hover:scale-105'
                  }`}
                >
                  {tech}
                  {tech !== 'All' && (
                    <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                      selectedFilter === tech 
                        ? 'bg-white/20 text-white' 
                        : 'bg-slate-700 text-slate-400'
                    }`}>
                      {projects.filter(p => p.techStack.includes(tech)).length}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Count */}
        <div className="mb-8">
          <p className="text-slate-400 text-center">
            Showing <span className="text-blue-400 font-semibold">{filteredProjects.length}</span> of <span className="text-blue-400 font-semibold">{projects.length}</span> projects
            {selectedFilter !== 'All' && (
              <span className="ml-2">
                filtered by <span className="text-cyan-400 font-semibold">{selectedFilter}</span>
              </span>
            )}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="opacity-0 animate-fade-in"
              style={{
                animation: `fadeInUp 0.6s ease-out forwards`,
                animationDelay: `${(project.id % 4) * 0.1}s`
              }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* No projects found message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <div className="text-slate-500 text-6xl mb-4">🔍</div>
            <h3 className="text-xl text-slate-300 mb-2">No projects found</h3>
            <p className="text-slate-500">Try selecting a different technology filter</p>
            <button
              onClick={() => setSelectedFilter('All')}
              className="mt-4 px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full text-sm font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
            >
              Show All Projects
            </button>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .scrollbar-thin {
          scrollbar-width: thin;
        }

        .scrollbar-thumb-slate-600::-webkit-scrollbar {
          height: 6px;
        }

        .scrollbar-thumb-slate-600::-webkit-scrollbar-track {
          background: #1e293b;
          border-radius: 3px;
        }

        .scrollbar-thumb-slate-600::-webkit-scrollbar-thumb {
          background: #475569;
          border-radius: 3px;
        }

        .scrollbar-thumb-slate-600::-webkit-scrollbar-thumb:hover {
          background: #64748b;
        }
      `}</style>
    </section>
  );
};

export default ProjectsGrid;