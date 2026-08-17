import React from 'react';
import { Linkedin } from 'lucide-react';

export default function CTA() {
  return (
    <section id="contact" className="relative z-10 bg-orange-500 px-6 py-24 md:py-32 lg:py-48 flex items-center justify-center">
      <div className="bg-surface border border-dark/10 rounded-[3rem] p-12 md:p-24 max-w-5xl w-full text-center shadow-sm">
        <h2 className="font-sans font-bold text-5xl md:text-7xl lg:text-8xl tracking-tighter uppercase mb-6">
          Reach out
        </h2>
        <p className="font-mono text-sm md:text-base text-dark/70 max-w-xl mx-auto mb-12 uppercase tracking-wide">
          Have a project in mind?
        </p>
        <a
          href="https://linkedin.com/in/g"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 mb-12 font-mono text-sm md:text-base text-dark/70 hover:text-accent transition-colors"
        >
          <Linkedin className="w-5 h-5 text-accent" strokeWidth={2} />
          <span>LinkedIn: <span className="font-bold text-dark group-hover:text-accent transition-colors">Gareth Griffiths</span></span>
        </a>
        <p className="mb-12"><a href="mailto:hello@untether.studio" className="text-dark/70 hover:text-accent underline">hello@untether.studio</a></p>
        <a href="mailto:hello@untether.studio" className="magnetic-btn magnetic-btn-accent text-lg px-12 py-6">
          
          <span>Contact Us &rarr;</span>
        </a>
      </div>
    </section>
  );
}
