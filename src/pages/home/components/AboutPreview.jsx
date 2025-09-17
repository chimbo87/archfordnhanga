import React from 'react';
import profilepic from '../../../assets/images/archford.jpg';

const AboutPreview = () => {
  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden" id="about-preview">
      {/* Background decorations */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-xl"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium mb-4 border border-blue-500/30">
              Get To Know Me
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-500">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto rounded-full"></div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Visual Section */}
            <div className="order-2 lg:order-1 flex justify-center">
              <div className="relative">
                {/* Experience Badge - Moved to top */}
                <div className="absolute -top-6 -right-6 bg-gradient-to-r from-blue-500 to-emerald-500 text-white p-4 rounded-2xl shadow-lg z-20">
                  <div className="text-center">
                    <div className="text-2xl font-bold mb-1">5+</div>
                    <div className="text-xs font-medium opacity-90">Years Experience</div>
                  </div>
                </div>

                {/* Main Image Container */}
                <div className="relative w-72 h-72 sm:w-80 sm:h-80">
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-emerald-400 rounded-2xl transform rotate-6 opacity-20 animate-pulse"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-blue-400 rounded-2xl transform -rotate-6 opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
                  
                  {/* Image container */}
                  <div className="relative z-10 w-full h-full bg-slate-800 rounded-2xl shadow-2xl overflow-hidden border-4 border-slate-700">
                    <img 
                      src={profilepic} 
                      alt="Archford Nhanga" 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="order-1 lg:order-2 space-y-8">
              <p className="text-lg leading-relaxed text-slate-300">
                I'm a passionate Full Stack Developer with expertise in modern web technologies. 
                With a strong foundation in computer science and hands-on experience in building 
                scalable applications, I bring ideas to life with clean, efficient code.
              </p>
              
              {/* Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Full Stack Development',
                  'Responsive Design', 
                  'Problem Solving',
                  'UI/UX Focus'
                ].map((skill, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-6 h-6 bg-emerald-500/20 rounded-full flex items-center justify-center">
                        <svg width="14" height="14" fill="#10b981" viewBox="0 0 24 24">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                        </svg>
                      </div>
                    </div>
                    <span className="text-slate-200 font-medium text-sm">{skill}</span>
                  </div>
                ))}
              </div>

              {/* Learn More Button */}
              <div className="pt-4">
                <a 
                  href="/about" 
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-emerald-500 hover:from-blue-600 hover:to-emerald-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 group"
                >
                  <span>Learn More</span>
                  <svg 
                    width="16" 
                    height="16" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                    className="group-hover:translate-x-1 transition-transform duration-300"
                  >
                    <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;