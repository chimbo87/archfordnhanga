import React from "react";
import { useNavigate } from "react-router-dom"; 
const ProjectsHero = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-slate-800 py-16 relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-blue-500/10 to-transparent -translate-y-1/3 -translate-x-1/3 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold text-slate-50 mb-6">
            My <span className="text-blue-500">Projects</span>
          </h1>
          <p className="text-slate-300 text-xl mb-8">
            A collection of my work that showcases my skills and passion for
            development
          </p>
          <div className="flex justify-center gap-4">
            {/* <button className="bg-gradient-to-r from-blue-500 to-green-500 text-white block px-3 py-2 rounded-md text-base font-medium text-center mt-4 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300">
              View All Projects
            </button> */}
            <button className="bg-gradient-to-r from-blue-500 to-green-500 text-white block px-3 py-2 rounded-md text-base font-medium text-center mt-4 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"   onClick={() => navigate("/contacts")}>
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsHero;
