import React from 'react';

const RotatingCircles = () => (
  <svg viewBox="0 0 200 200" className="w-64 h-64 opacity-80 mix-blend-screen">
    <g className="origin-center animate-[spin_20s_linear_infinite]">
      <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
      <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="10 10" />
      <rect x="85" y="85" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1" className="origin-center animate-[spin_10s_linear_infinite_reverse]" />
    </g>
  </svg>
);

export default function About() {
  return (
    <section id="about" className="relative w-full bg-dark text-primary">
      <div className="h-screen w-full flex items-center justify-center p-8 md:p-16 bg-dark border-b border-primary/10 overflow-hidden">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="font-mono text-xl text-accent block mb-4">01</span>
            <h2 className="font-sans font-bold text-5xl md:text-7xl tracking-tighter uppercase mb-6">Initialize</h2>
            <p className="font-mono text-sm text-primary/70 max-w-md leading-relaxed">
              Establishing base layer connection. Begin mind sync to map parameters. Understand the foundation of art space. Commence design of unique VR/AR/MR/XR experience.
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
            <RotatingCircles />
          </div>
        </div>
      </div>
    </section>
  );
}
