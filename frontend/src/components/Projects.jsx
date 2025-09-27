import React from 'react';
import { projects } from '../mock';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Projects = () => {
  const navigate = useNavigate();
  
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-12">
          <h2 className="text-lightest-slate font-bold text-2xl md:text-3xl flex items-center">
            <span className="text-green font-mono text-lg md:text-xl mr-4">02.</span>
            Some Things I've Built
          </h2>
          <div className="flex-1 h-px bg-light-navy ml-8"></div>
        </div>
        
        <div className="space-y-20">
          {projects.map((project, index) => (
            <div key={project.id} className="relative group">
              <div className={`grid lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                {/* Project Image */}
                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative overflow-hidden rounded-lg bg-light-navy">
                    <div className="aspect-video bg-gradient-to-br from-green/20 to-green/5 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-green text-4xl mb-2">📱</div>
                        <p className="text-light-slate text-sm">{project.title} Preview</p>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-navy/70 group-hover:bg-navy/20 transition-colors"></div>
                  </div>
                </div>
                
                {/* Project Content */}
                <div className={`space-y-4 ${index % 2 === 1 ? 'lg:col-start-1 lg:text-right' : ''}`}>
                  <p className="text-green font-mono text-sm">Featured Project</p>
                  
                  <h3 className="text-lightest-slate font-bold text-xl md:text-2xl hover:text-green transition-colors cursor-pointer"
                      onClick={() => navigate(`/project/${project.id}`)}>
                    {project.title}
                    {project.status && (
                      <span className="ml-2 text-green text-sm font-normal">({project.status})</span>
                    )}
                  </h3>
                  
                  <div className={`bg-light-navy p-6 rounded-lg shadow-lg relative z-10 ${
                    index % 2 === 1 ? 'lg:-ml-8' : 'lg:-mr-8'
                  }`}>
                    <p className="text-light-slate leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className={`flex flex-wrap gap-3 ${index % 2 === 1 ? 'lg:justify-end' : ''}`}>
                    {project.tech.map((tech) => (
                      <span key={tech} className="text-light-slate font-mono text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className={`flex items-center gap-4 ${index % 2 === 1 ? 'lg:justify-end' : ''}`}>
                    <button 
                      onClick={() => navigate(`/project/${project.id}`)}
                      className="text-light-slate hover:text-green transition-colors flex items-center gap-1"
                    >
                      <span>Learn More</span>
                      <ArrowRight size={16} />
                    </button>
                    <a 
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-light-slate hover:text-green transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;