import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { projectDetails } from '../mock';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectDetails[id];
  
  if (!project) {
    return (
      <div className="min-h-screen bg-navy flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-lightest-slate text-2xl mb-4">Project Not Found</h1>
          <button 
            onClick={() => navigate('/')}
            className="text-green hover:underline"
          >
            Go Back Home
          </button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-navy text-slate">
      <div className="max-w-4xl mx-auto px-6 py-20">
        {/* Back Button */}
        <button 
          onClick={() => navigate('/')}
          className="flex items-center text-green hover:text-light-slate transition-colors mb-8"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Portfolio
        </button>
        
        {/* Project Header */}
        <div className="space-y-4 mb-12">
          <h1 className="text-lightest-slate font-bold text-3xl md:text-4xl">
            {project.title}
            {project.status && (
              <span className="ml-3 text-green text-lg font-normal">({project.status})</span>
            )}
          </h1>
          <p className="text-green font-mono text-lg">{project.subtitle}</p>
          <p className="text-light-slate text-lg leading-relaxed">
            {project.description}
          </p>
        </div>
        
        {/* Technology Stack */}
        {project.techStack && (
          <section className="mb-12">
            <h2 className="text-lightest-slate font-bold text-xl mb-6 flex items-center">
              <span className="text-green mr-2">▹</span>
              Technology Stack
            </h2>
            <div className="bg-light-navy p-6 rounded-lg">
              <div className="grid gap-4">
                {Object.entries(project.techStack).map(([key, value]) => (
                  <div key={key}>
                    <span className="text-green font-mono capitalize">{key}:</span>
                    <span className="ml-2 text-light-slate">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
        
        {/* Outcomes */}
        {project.outcomes && (
          <section className="mb-12">
            <h2 className="text-lightest-slate font-bold text-xl mb-6 flex items-center">
              <span className="text-green mr-2">▹</span>
              Project Outcomes
            </h2>
            <div className="space-y-3">
              {project.outcomes.map((outcome, index) => (
                <div key={index} className="flex items-start">
                  <span className="text-green mr-3 mt-1.5 text-xs">▪</span>
                  <p className="text-light-slate leading-relaxed">{outcome}</p>
                </div>
              ))}
            </div>
          </section>
        )}
        
        {/* Problems Solved */}
        {project.problemsSolved && (
          <section className="mb-12">
            <h2 className="text-lightest-slate font-bold text-xl mb-6 flex items-center">
              <span className="text-green mr-2">▹</span>
              Problems Solved
            </h2>
            <div className="space-y-3">
              {project.problemsSolved.map((problem, index) => (
                <div key={index} className="flex items-start">
                  <span className="text-green mr-3 mt-1.5 text-xs">▪</span>
                  <p className="text-light-slate leading-relaxed">{problem}</p>
                </div>
              ))}
            </div>
          </section>
        )}
        
        {/* Methodology */}
        {project.methodology && (
          <section className="mb-12">
            <h2 className="text-lightest-slate font-bold text-xl mb-6 flex items-center">
              <span className="text-green mr-2">▹</span>
              Methodology
            </h2>
            <div className="bg-light-navy p-6 rounded-lg">
              {typeof project.methodology === 'object' ? (
                <div className="space-y-4">
                  {Object.entries(project.methodology).map(([key, value]) => (
                    <div key={key}>
                      <h4 className="text-green font-mono capitalize mb-2">
                        {key.replace(/([A-Z])/g, ' $1').toLowerCase()}:
                      </h4>
                      <p className="text-light-slate leading-relaxed ml-4">{value}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-light-slate leading-relaxed">{project.methodology}</p>
              )}
            </div>
          </section>
        )}
        
        {/* Usage */}
        {project.usage && (
          <section className="mb-12">
            <h2 className="text-lightest-slate font-bold text-xl mb-6 flex items-center">
              <span className="text-green mr-2">▹</span>
              Usage (How to Use)
            </h2>
            <div className="space-y-4">
              {project.usage.url && (
                <div>
                  <span className="text-green font-mono">Access URL:</span>
                  <a 
                    href={project.usage.url}
                    className="ml-2 text-light-slate hover:text-green transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.usage.url}
                  </a>
                </div>
              )}
              {project.usage.live && (
                <div>
                  <span className="text-green font-mono">Live Demo:</span>
                  <a 
                    href={project.usage.live}
                    className="ml-2 text-light-slate hover:text-green transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.usage.live}
                  </a>
                </div>
              )}
              {project.usage.dashboard && (
                <div>
                  <span className="text-green font-mono">Dashboard:</span>
                  <a 
                    href={project.usage.dashboard}
                    className="ml-2 text-light-slate hover:text-green transition-colors break-all"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.usage.dashboard}
                  </a>
                </div>
              )}
              {project.usage.features && (
                <div>
                  <h4 className="text-green font-mono mb-3">Features:</h4>
                  <div className="space-y-2 ml-4">
                    {project.usage.features.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <span className="text-green mr-3 mt-1.5 text-xs">▪</span>
                        <p className="text-light-slate">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {project.usage.workflow && (
                <div>
                  <h4 className="text-green font-mono mb-3">Workflow:</h4>
                  <div className="space-y-2 ml-4">
                    {project.usage.workflow.map((step, index) => (
                      <div key={index} className="flex items-start">
                        <span className="text-green mr-3 mt-1.5 text-xs">{index + 1}.</span>
                        <p className="text-light-slate">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        )}
        
        {/* Building Process */}
        {project.buildingProcess && (
          <section className="mb-12">
            <h2 className="text-lightest-slate font-bold text-xl mb-6 flex items-center">
              <span className="text-green mr-2">▹</span>
              Building Process
            </h2>
            <div className="bg-light-navy p-6 rounded-lg">
              <div className="space-y-3">
                {project.buildingProcess.map((step, index) => (
                  <div key={index} className="flex items-start">
                    <span className="text-green mr-3 mt-1 font-mono text-sm">{index + 1}.</span>
                    <code className="text-light-slate bg-navy px-2 py-1 rounded text-sm flex-1">
                      {step}
                    </code>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
        
        {/* Flowchart placeholder for future implementation */}
        <section className="mb-12">
          <h2 className="text-lightest-slate font-bold text-xl mb-6 flex items-center">
            <span className="text-green mr-2">▹</span>
            Architecture Flowchart
          </h2>
          <div className="bg-light-navy p-12 rounded-lg text-center">
            <div className="text-green text-4xl mb-4">📊</div>
            <p className="text-light-slate">Detailed architecture flowchart coming soon...</p>
          </div>
        </section>
        
        {/* Back to Projects */}
        <div className="text-center pt-8">
          <button 
            onClick={() => navigate('/')}
            className="inline-block border border-green text-green px-8 py-4 text-lg font-mono hover:bg-green/10 transition-all transform hover:-translate-y-1"
          >
            Back to All Projects
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;