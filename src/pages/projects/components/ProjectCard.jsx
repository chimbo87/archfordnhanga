import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-500/30 h-full flex flex-col group">
      <figure className="h-48 overflow-hidden relative">
        <img 
          src={project.image} 
          alt={project.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-800/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </figure>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-white text-xl font-semibold mb-4 group-hover:text-blue-300 transition-colors duration-300">
          {project.name}
        </h3>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech, index) => (
            <span
              key={index}
              className="text-xs font-medium py-1.5 px-3 rounded-full text-white/90 border transition-all duration-300 hover:scale-105"
              style={{ 
                backgroundColor: `${getTechColor(tech)}20`,
                borderColor: `${getTechColor(tech)}40`
              }}
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between items-center mt-auto gap-3">
          <a 
            href={project.liveLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-2.5 px-4 rounded-lg text-sm font-medium transition-all duration-300 hover:from-blue-600 hover:to-cyan-600 hover:shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-2 group/btn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover/btn:rotate-12 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
            </svg>
            Live Demo
          </a>
          
          <a 
            href={project.githubLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1 bg-slate-700/50 border border-slate-600 text-slate-300 py-2.5 px-4 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-slate-600/50 hover:text-white hover:border-slate-500 flex items-center justify-center gap-2 group/btn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="group-hover/btn:scale-110 transition-transform duration-300">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            Code
          </a>
        </div>
      </div>
    </div>
  );
};

// Helper function to assign colors to tech badges
function getTechColor(tech) {
  const colorMap = {
    'React': '#3b82f6',       // blue-500
    'Node.js': '#10b981',     // emerald-500
    'MongoDB': '#f59e0b',     // amber-500
    'Tailwind': '#8b5cf6',    // violet-500
    'Vue.js': '#ec4899',      // pink-500
    'Firebase': '#14b8a6',    // teal-500
    'CSS3': '#3b82f6',        // blue-500
    'JavaScript': '#f59e0b',  // amber-500
    'API': '#10b981',         // emerald-500
    'HTML5': '#ef4444',       // red-500
    'Chart.js': '#ec4899',    // pink-500
    'Express': '#8b5cf6',     // violet-500
    'React Native': '#3b82f6',// blue-500
    'Redux': '#8b5cf6',       // violet-500
    'Angular': '#ef4444',     // red-500
    'Spoonacular API': '#10b981', // emerald-500
    'Bootstrap': '#8b5cf6',   // violet-500
    'Next.js': '#000000',     // black
    'Mapbox': '#3b82f6',      // blue-500
    'Framer Motion': '#8b5cf6', // violet-500
    'PostgreSQL': '#336791',  // postgres blue
    'SQL': '#F29111',         // orange
    'Python': '#3776AB'       // python blue
  };
  
  return colorMap[tech] || '#64748b'; // Default to slate-500
}

export default ProjectCard;