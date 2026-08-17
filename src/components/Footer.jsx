import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logos/untether-studio-logo.svg';

export default function Footer() {
  return (
    <footer className="relative bg-dark text-primary pt-24 pb-12 px-8 md:px-16 rounded-t-[4rem] -mt-[60px] z-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-24">
        <div className="md:col-span-2 flex items-center gap-6">
          <img
            src={logo}
            alt="untether studio"
            className="h-24 lg:h-32 w-auto shrink-0"
          />
          <p className="font-mono text-sm text-primary/50 max-w-xs">
            Art + Tech experiences built and delivered to specification.
          </p>
        </div>
        
        <div>
          <h4 className="font-mono text-xs uppercase tracking-widest text-primary/40 mb-6">Navigation</h4>
          <ul className="space-y-4 font-sans font-medium text-sm">
            <li><a href="#services" className="hover:text-accent transition-colors">Services</a></li>
            <li><a href="#desire" className="hover:text-accent transition-colors">Desire</a></li>
            <li><a href="#about" className="hover:text-accent transition-colors">About</a></li>
            <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-mono text-xs uppercase tracking-widest text-primary/40 mb-6">Legal</h4>
          <ul className="space-y-4 font-sans font-medium text-sm">
            <li><Link to="/privacy-policy" className="hover:text-accent transition-colors">Privacy Policy</Link></li>
            <li><Link to="/terms-of-services" className="hover:text-accent transition-colors">Terms of Services</Link></li>
            <li><Link to="/terms-of-website" className="hover:text-accent transition-colors">Terms of Website</Link></li>
            <li><Link to="/cookie-manifest" className="hover:text-accent transition-colors">Cookie Manifest</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto border-t border-primary/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          <span className="font-mono text-[10px] uppercase text-primary/60 tracking-widest">System Operational</span>
        </div>
        <div className="font-mono text-[10px] uppercase text-primary/40 tracking-widest">
          &copy; {new Date().getFullYear()} untether. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
