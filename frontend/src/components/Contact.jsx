import React from 'react';
import { personalInfo } from '../mock';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <div className="space-y-6">
          <p className="text-green font-mono text-base">
            <span className="mr-2">03.</span>
            What's Next?
          </p>
          
          <h2 className="text-lightest-slate font-bold text-3xl md:text-4xl">
            Get In Touch
          </h2>
          
          <p className="text-slate leading-relaxed max-w-lg mx-auto">
            I'm actively seeking a challenging software engineering internship for Summer 2026. 
            Whether you have an opportunity or just want to say hi, I'll do my best to get back to you!
          </p>
          
          <div className="pt-8">
            <a 
              href={`mailto:${personalInfo.email}`}
              className="inline-block border border-green text-green px-8 py-4 text-lg font-mono hover:bg-green/10 transition-all transform hover:-translate-y-1"
            >
              Say Hello
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;