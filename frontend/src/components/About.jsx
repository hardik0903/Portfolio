import React from 'react';
import { aboutMe } from '../mock';

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-12">
          <h2 className="text-lightest-slate font-bold text-2xl md:text-3xl flex items-center">
            <span className="text-green font-mono text-lg md:text-xl mr-4">01.</span>
            About Me
          </h2>
          <div className="flex-1 h-px bg-light-navy ml-8"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <div className="space-y-4 text-slate leading-relaxed">
              {aboutMe.description.split('\n\n').map((paragraph, index) => (
                <p key={index}>
                  {paragraph}
                </p>
              ))}
            </div>
            
            <div className="mt-8">
              <p className="text-slate mb-4">Here are a few activities that I love to do:</p>
              <div className="grid grid-cols-2 gap-2">
                {aboutMe.activities.map((activity, index) => (
                  <div key={index} className="flex items-center text-sm text-slate">
                    <span className="text-green mr-2">▹</span>
                    {activity}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative group">
              <div className="w-full aspect-square bg-light-navy border border-green rounded-lg overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-green/20 to-green/5 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-green text-6xl mb-4">
                      {/* Placeholder for profile photo */}
                      👨‍💻
                    </div>
                    <p className="text-light-slate text-sm">Profile Photo</p>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-green/10 rounded-lg transition-opacity group-hover:opacity-0"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;