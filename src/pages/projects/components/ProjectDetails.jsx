import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import projects from './ProjectData';

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));
  const [activeTab, setActiveTab] = useState('overview');

  if (!project) {
    return (
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-3">Project Not Found</h1>
          <Link to="/" className="btn btn-primary btn-sm">Back to Projects</Link>
        </div>
      </div>
    );
  }

  const getTechCategoryColor = (category) => {
    const categoryColors = {
      'Frontend': 'badge-info',
      'Backend': 'badge-success',
      'Database': 'badge-warning',
      'Styling': 'badge-secondary',
      'Authentication': 'badge-error',
      'Payment': 'badge-primary',
      'Storage': 'badge-warning',
      'Real-time': 'badge-accent',
      'AI/ML': 'badge-error',
      'Visualization': 'badge-success',
      'API': 'badge-secondary',
      'Blockchain': 'badge-neutral',
      'Jobs': 'badge-error',
      'Cloud': 'badge-info',
      'Caching': 'badge-error',
      'DevOps': 'badge-info',
      'Streaming': 'badge-neutral',
      'Development': 'badge-warning',
      'Wallet': 'badge-warning'
    };
    return categoryColors[category] || 'badge-neutral';
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white py-6">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header with back button */}
        <div className="mb-6">
          <Link to="/" className="btn btn-ghost btn-sm px-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Projects
          </Link>
        </div>

        {/* Project header */}
        <div className="flex flex-col md:flex-row gap-6 mb-6">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-3">
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                project.status === 'Completed' 
                  ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                  : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
              }`}>
                {project.status}
              </span>
              <span className="text-slate-400 text-xs">Duration: {project.duration}</span>
              <span className="text-slate-400 text-xs">Role: {project.role}</span>
            </div>
            
            <h1 className="text-2xl md:text-3xl font-bold mb-3">{project.name}</h1>
            <p className="text-slate-300 text-sm mb-4">{project.fullDescription}</p>
            
            <div className="flex flex-wrap gap-2">
              <a 
                href={project.liveLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm gap-1"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                </svg>
                Live Demo
              </a>
              
              <a 
                href={project.githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-outline btn-sm gap-1"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                View Code
              </a>
            </div>
          </div>
          
          <div className="w-full md:w-80">
            <div className="carousel rounded-box h-40">
              {project.images.map((image, index) => (
                <div key={index} id={`item${index}`} className="carousel-item w-full">
                  <img 
                    src={image} 
                    alt={`${project.name} screenshot ${index + 1}`}
                    className="w-full h-40 object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-center w-full py-2 gap-1">
              {project.images.map((_, index) => (
                <a key={index} href={`#item${index}`} className="btn btn-xs">{index + 1}</a>
              ))}
            </div>
          </div>
        </div>

        {/* Tabs navigation */}
        <div className="tabs tabs-boxed bg-slate-800/50 mb-6 justify-start overflow-x-auto">
          <a 
            className={`tab tab-sm ${activeTab === 'overview' ? 'tab-active' : ''}`} 
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </a> 
          <a 
            className={`tab tab-sm ${activeTab === 'techstack' ? 'tab-active' : ''}`} 
            onClick={() => setActiveTab('techstack')}
          >
            Tech Stack
          </a> 
          <a 
            className={`tab tab-sm ${activeTab === 'features' ? 'tab-active' : ''}`} 
            onClick={() => setActiveTab('features')}
          >
            Features
          </a>
          <a 
            className={`tab tab-sm ${activeTab === 'challenges' ? 'tab-active' : ''}`} 
            onClick={() => setActiveTab('challenges')}
          >
            Challenges
          </a>
          <a 
            className={`tab tab-sm ${activeTab === 'learnings' ? 'tab-active' : ''}`} 
            onClick={() => setActiveTab('learnings')}
          >
            Learnings
          </a>
        </div>

        {/* Tab content */}
        <div className="bg-slate-800/30 rounded-box p-4 md:p-5 mb-8">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div>
              <h2 className="text-lg font-bold mb-4">Project Overview</h2>
              <p className="text-sm text-slate-300 mb-5">{project.fullDescription}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                <div className="bg-slate-700/30 rounded-box p-3">
                  <h3 className="font-semibold text-sm mb-2">Project Status</h3>
                  <p className="text-slate-300 text-sm">{project.status}</p>
                </div>
                <div className="bg-slate-700/30 rounded-box p-3">
                  <h3 className="font-semibold text-sm mb-2">Project Duration</h3>
                  <p className="text-slate-300 text-sm">{project.duration}</p>
                </div>
                <div className="bg-slate-700/30 rounded-box p-3">
                  <h3 className="font-semibold text-sm mb-2">My Role</h3>
                  <p className="text-slate-300 text-sm">{project.role}</p>
                </div>
                <div className="bg-slate-700/30 rounded-box p-3">
                  <h3 className="font-semibold text-sm mb-2">Key Technologies</h3>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {project.techStack.slice(0, 3).map((tech, index) => (
                      <span key={index} className="badge badge-xs">
                        {tech.name}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="badge badge-xs">
                        +{project.techStack.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="flex gap-2">
                <a 
                  href={project.liveLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm gap-1"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                  </svg>
                  Live Demo
                </a>
                
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-sm gap-1"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  View Code
                </a>
              </div>
            </div>
          )}

          {/* Tech Stack Tab */}
          {activeTab === 'techstack' && (
            <div>
              <h2 className="text-lg font-bold mb-4">Technology Stack</h2>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, index) => (
                  <div key={index} className={`badge ${getTechCategoryColor(tech.category)} gap-1 p-3`}>
                    <div 
                      className="w-2 h-2 rounded-full" 
                      style={{ backgroundColor: tech.color }}
                    ></div>
                    {tech.name}
                    <span className="text-slate-300 ml-1 text-xs">({tech.category})</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Features Tab */}
          {activeTab === 'features' && (
            <div>
              <h2 className="text-lg font-bold mb-4">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {project.features.map((feature, index) => (
                  <div key={index} className="bg-slate-700/30 rounded-box p-3">
                    <div className="flex items-start gap-2">
                      <span className="text-xl">{feature.icon}</span>
                      <div>
                        <h3 className="font-semibold text-sm">{feature.title}</h3>
                        <p className="text-slate-400 text-xs">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Challenges Tab */}
          {activeTab === 'challenges' && (
            <div>
              <h2 className="text-lg font-bold mb-4">Challenges & Solutions</h2>
              <ul className="space-y-3">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="bg-blue-500/20 p-1 rounded-lg mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Learnings Tab */}
          {activeTab === 'learnings' && (
            <div>
              <h2 className="text-lg font-bold mb-4">Key Learnings</h2>
              <ul className="space-y-3">
                {project.learnings.map((learning, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="bg-green-500/20 p-1 rounded-lg mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm">{learning}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-box p-5 text-center">
          <h2 className="text-lg font-bold mb-2">Interested in this project?</h2>
          <p className="text-slate-300 text-sm mb-4">
            I'm always open to discussing this project or potential new opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 justify-center">
            <a href="#contact" className="btn btn-primary btn-sm">Get In Touch</a>
            <Link to="/" className="btn btn-outline btn-sm">View All Projects</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;