import React from 'react';
import { personalInfo } from '../mock';
import { Mail, Github, Linkedin, ExternalLink, FileText } from 'lucide-react';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-navy text-slate">
      {/* Fixed Social Links - Left Side */}
      <div className="fixed left-0 bottom-0 z-50 hidden lg:flex flex-col items-center space-y-6 p-6">
        <div className="flex flex-col items-center space-y-4">
          <a 
            href={`mailto:${personalInfo.email}`}
            className="text-light-slate hover:text-green transition-colors p-2"
          >
            <Mail size={20} />
          </a>
          <a 
            href={personalInfo.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-light-slate hover:text-green transition-colors p-2"
          >
            <Github size={20} />
          </a>
          <a 
            href={personalInfo.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-light-slate hover:text-green transition-colors p-2"
          >
            <Linkedin size={20} />
          </a>
          <a 
            href={personalInfo.socialLinks.codolio}
            target="_blank"
            rel="noopener noreferrer"
            className="text-light-slate hover:text-green transition-colors p-2"
          >
            <ExternalLink size={20} />
          </a>
          <a 
            href={personalInfo.socialLinks.medium}
            target="_blank"
            rel="noopener noreferrer"
            className="text-light-slate hover:text-green transition-colors p-2"
          >
            <FileText size={20} />
          </a>
        </div>
        <div className="w-px h-24 bg-light-slate"></div>
      </div>

      {/* Fixed Email - Right Side */}
      <div className="fixed right-0 bottom-0 z-50 hidden lg:flex flex-col items-center space-y-6 p-6">
        <a 
          href={`mailto:${personalInfo.email}`}
          className="text-light-slate hover:text-green transition-colors vertical-text"
          style={{ writingMode: 'vertical-rl' }}
        >
          {personalInfo.email}
        </a>
        <div className="w-px h-24 bg-light-slate"></div>
      </div>

      {/* Header/Navigation */}
      <header className="fixed top-0 w-full bg-navy/95 backdrop-blur-sm z-40 border-b border-light-navy">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-green font-mono text-lg font-bold">HP</div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="nav-link">
              <span className="text-green font-mono text-sm">01.</span> About
            </a>
            <a href="#projects" className="nav-link">
              <span className="text-green font-mono text-sm">02.</span> Projects
            </a>
            <a href="#contact" className="nav-link">
              <span className="text-green font-mono text-sm">03.</span> Contact
            </a>
            <a 
              href={personalInfo.resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-green text-green px-4 py-2 text-sm font-mono hover:bg-green/10 transition-colors"
            >
              Resume
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-green">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12h18m-9-9h9m-9 18h9"/>
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="pt-20">
        {children}
      </main>
    </div>
  );
};

export default Layout;