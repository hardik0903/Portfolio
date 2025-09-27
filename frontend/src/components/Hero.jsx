import React from 'react';
import { personalInfo } from '../mock';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl">
        <div className="space-y-6">
          <p className="text-green font-mono text-base md:text-lg">
            Hi, my name is
          </p>
          
          <h1 className="text-lightest-slate font-bold">
            <div className="text-4xl md:text-6xl lg:text-7xl mb-2">
              {personalInfo.name}.
            </div>
            <div className="text-3xl md:text-5xl lg:text-6xl text-slate">
              {personalInfo.subtitle}
            </div>
          </h1>
          
          <p className="text-slate max-w-2xl text-lg leading-relaxed">
            I'm a penultimate-year AI and Machine Learning student at VIT Bhopal, 
            passionate about building end-to-end solutions that solve real-world problems. 
            Currently co-founding <span className="text-green">Ascraa</span>, an AI-powered 
            platform revolutionizing student hiring.
          </p>
          
          <div className="pt-8">
            <a 
              href="#projects"
              className="inline-block border border-green text-green px-8 py-4 text-lg font-mono hover:bg-green/10 transition-all transform hover:-translate-y-1"
            >
              Check out my work!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;