import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectsGrid = () => {
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
      techStack: ["React", "Chart.js", "Express"],
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
      techStack: ["Next.js", "Mapbox", "Tailwind"],
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

  return (
    <section className="bg-slate-900 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;