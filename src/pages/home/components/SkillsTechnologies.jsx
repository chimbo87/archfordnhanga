import React, { useState } from 'react';

const SkillsTechnologies = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillCategories = [
    {
      id: 'frontend',
      name: 'Frontend',
      icon: '⚛️',
      description: 'Creating responsive and interactive user interfaces'
    },
    {
      id: 'backend',
      name: 'Backend',
      icon: '🖥️',
      description: 'Building robust server-side applications and APIs'
    },
    {
      id: 'database',
      name: 'Database',
      icon: '🗄️',
      description: 'Designing and managing data storage solutions'
    },
    {
      id: 'tools',
      name: 'Tools & DevOps',
      icon: '🛠️',
      description: 'Development tools and deployment workflows'
    }
  ];

  const skillsData = {
    frontend: [
      { name: 'React', icon: '⚛️', color: '#61DAFB', level: 'Expert' },
      { name: 'JavaScript', icon: '🟨', color: '#F7DF1E', level: 'Expert' },
      { name: 'TypeScript', icon: '🔷', color: '#3178C6', level: 'Advanced' },
      { name: 'Next.js', icon: '▲', color: '#000000', level: 'Advanced' },
      { name: 'Tailwind CSS', icon: '💨', color: '#06B6D4', level: 'Advanced' },
      { name: 'Vue.js', icon: '💚', color: '#4FC08D', level: 'Intermediate' }
    ],
    backend: [
      { name: 'Node.js', icon: '🟢', color: '#339933', level: 'Expert' },
      { name: 'Express.js', icon: '🚀', color: '#000000', level: 'Advanced' },
      { name: 'Python', icon: '🐍', color: '#3776AB', level: 'Advanced' },
      { name: 'FastAPI', icon: '⚡', color: '#009688', level: 'Intermediate' },
      { name: 'GraphQL', icon: '📊', color: '#E10098', level: 'Intermediate' },
      { name: 'REST APIs', icon: '🔌', color: '#FF6B35', level: 'Expert' }
    ],
    database: [
      { name: 'MongoDB', icon: '🍃', color: '#47A248', level: 'Advanced' },
      { name: 'PostgreSQL', icon: '🐘', color: '#336791', level: 'Advanced' },
      { name: 'MySQL', icon: '🗄️', color: '#4479A1', level: 'Intermediate' },
      { name: 'Redis', icon: '🔴', color: '#DC382D', level: 'Intermediate' },
      { name: 'Firebase', icon: '🔥', color: '#FFCA28', level: 'Intermediate' }
    ],
    tools: [
      { name: 'Git/GitHub', icon: '🐙', color: '#F05032', level: 'Expert' },
      { name: 'Docker', icon: '🐳', color: '#2496ED', level: 'Advanced' },
      { name: 'AWS', icon: '☁️', color: '#FF9900', level: 'Intermediate' },
      { name: 'Vercel', icon: '▲', color: '#000000', level: 'Advanced' },
      { name: 'Jest', icon: '🃏', color: '#C21325', level: 'Advanced' }
    ]
  };

  const getLevelColor = (level) => {
    switch (level) {
      case 'Expert': return 'bg-emerald-500';
      case 'Advanced': return 'bg-blue-500';
      case 'Intermediate': return 'bg-amber-500';
      default: return 'bg-slate-500';
    }
  };

  const getLevelTextColor = (level) => {
    switch (level) {
      case 'Expert': return 'text-emerald-400';
      case 'Advanced': return 'text-blue-400';
      case 'Intermediate': return 'text-amber-400';
      default: return 'text-slate-400';
    }
  };

  return (
    <section className="py-16 bg-slate-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-emerald-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
            <span className="text-blue-400 text-sm font-semibold">TECHNICAL EXPERTISE</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-500">Technologies</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Technologies I work with to create amazing digital experiences
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-3 px-6 py-3 rounded-xl border transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-blue-500/20 to-emerald-500/20 border-blue-500/50 text-white shadow-lg shadow-blue-500/20'
                  : 'bg-slate-800/50 border-slate-700 text-slate-300 hover:border-blue-400/50 hover:text-white'
              }`}
            >
              <span className="text-xl">{category.icon}</span>
              <span className="font-semibold">{category.name}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {skillsData[activeCategory].map((skill, index) => (
            <div
              key={index}
              className="group bg-slate-800/50 border border-slate-700 rounded-xl p-5 backdrop-blur-sm 
                         transition-all duration-300 hover:border-blue-500/50 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-lg"
                    style={{ backgroundColor: `${skill.color}20` }}
                  >
                    {skill.icon}
                  </div>
                  <h3 className="text-white font-semibold">{skill.name}</h3>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getLevelTextColor(skill.level)}`}>
                  {skill.level}
                </span>
              </div>
              
              {/* Level indicator dots */}
              <div className="flex gap-1 mb-4">
                {[1, 2, 3].map((dot) => (
                  <div
                    key={dot}
                    className={`h-2 rounded-full flex-1 ${
                      dot <= (skill.level === 'Expert' ? 3 : skill.level === 'Advanced' ? 2 : 1)
                        ? getLevelColor(skill.level)
                        : 'bg-slate-700'
                    }`}
                  />
                ))}
              </div>

              {/* Experience tags */}
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-md">
                  {skill.level} Level
                </span>
                <span className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-md">
                  Production Ready
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-t border-b border-slate-700/50">
          {[
            { number: '5+', label: 'Years Experience' },
            { number: '50+', label: 'Projects' },
            { number: '20+', label: 'Technologies' },
            { number: '100%', label: 'Dedication' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-500 mb-2">
                {stat.number}
              </div>
              <div className="text-slate-400 text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <p className="text-slate-300 text-lg mb-6">
            Ready to bring your ideas to life with cutting-edge technology?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-emerald-500 
                       text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/30 
                       transition-all duration-300 hover:-translate-y-0.5"
          >
            Start a Project
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SkillsTechnologies;