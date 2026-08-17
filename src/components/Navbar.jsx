
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logotype from '../assets/logos/untether-studio-logotype.svg';

export default function Navbar() {

  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const handleMobileMenuToggle = () => setMobileMenuOpen((open) => !open);
  const handleMobileMenuClose = () => setMobileMenuOpen(false);

  return (
    <>
      {/* Desktop Contact button in top right */}
      <div className="hidden md:block fixed top-6 right-8 z-[110]">
        <a
          href="#contact"
          className="magnetic-btn magnetic-btn-accent px-4 py-1 text-xs flex items-center justify-center"
          onClick={e => {
            e.preventDefault();
            if (location.pathname !== "/") {
              sessionStorage.setItem('scrollToHash', '#contact');
              window.location.href = '/';
            } else {
              window.location.hash = '#contact';
            }
          }}
        >
          <span>Contact</span>
        </a>
      </div>
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-[600px]">
        <div 
          className={`flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] gap-x-6 ${
            scrolled 
              ? 'glass-nav text-dark' 
              : 'bg-transparent text-primary'
          }`}
        >
          <img
            src={logotype}
            alt="untether studio"
            className="h-4 w-auto shrink-0"
          />
          <div className="hidden md:flex items-center space-x-8 text-sm font-sans font-medium">
            <Link
              to="/"
              className="hover:text-accent transition-colors"
              onClick={e => {
                if (location.pathname === "/") {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
            >
              Home
            </Link>
            <a
              href="#services"
              className="hover:text-accent transition-colors"
              onClick={e => {
                e.preventDefault();
                if (location.pathname !== "/") {
                  sessionStorage.setItem('scrollToHash', '#services');
                  window.location.href = '/';
                } else {
                  window.location.hash = '#services';
                }
              }}
            >Services</a>
            <a
              href="#desire"
              className="hover:text-accent transition-colors"
              onClick={e => {
                e.preventDefault();
                if (location.pathname !== "/") {
                  sessionStorage.setItem('scrollToHash', '#desire');
                  window.location.href = '/';
                } else {
                  window.location.hash = '#desire';
                }
              }}
            >Desire</a>
            <a
              href="#about"
              className="hover:text-accent transition-colors"
              onClick={e => {
                e.preventDefault();
                if (location.pathname !== "/") {
                  sessionStorage.setItem('scrollToHash', '#about');
                  window.location.href = '/';
                } else {
                  window.location.hash = '#about';
                }
              }}
            >About</a>
          </div>
          {/* Contact button moved to top right, so removed from here */}
          <button className="md:hidden p-2" onClick={handleMobileMenuToggle} aria-label="Open menu">
            {mobileMenuOpen ? (
              <X size={24} className={scrolled ? 'text-dark' : 'text-primary'} />
            ) : (
              <Menu size={20} className={scrolled ? 'text-dark' : 'text-primary'} />
            )}
          </button>
        </div>
      </nav>

      {/* Backdrop — closes menu when tapping outside */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-[90] md:hidden"
          onClick={handleMobileMenuClose}
        />
      )}

      {/* Mobile dropdown — sits below the capsule, sized to content */}
      {mobileMenuOpen && (
        <div
          className="fixed left-1/2 -translate-x-1/2 top-[4.75rem] z-[95] w-[90%] max-w-[600px] md:hidden"
          onClick={e => e.stopPropagation()}
        >
          <div className="bg-white rounded-2xl shadow-xl flex flex-col px-6 py-4 gap-1">
            <Link
              to="/"
              className="text-base font-sans font-bold text-dark hover:text-accent transition-colors py-2"
              onClick={e => {
                handleMobileMenuClose();
                if (location.pathname === "/") {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
            >
              Home
            </Link>
            <a
              href="#services"
              className="text-base font-sans font-bold text-dark hover:text-accent transition-colors py-2"
              onClick={e => {
                e.preventDefault();
                handleMobileMenuClose();
                if (location.pathname !== "/") {
                  sessionStorage.setItem('scrollToHash', '#services');
                  window.location.href = '/';
                } else {
                  window.location.hash = '#services';
                }
              }}
            >Services</a>
            <a
              href="#desire"
              className="text-base font-sans font-bold text-dark hover:text-accent transition-colors py-2"
              onClick={e => {
                e.preventDefault();
                handleMobileMenuClose();
                if (location.pathname !== "/") {
                  sessionStorage.setItem('scrollToHash', '#desire');
                  window.location.href = '/';
                } else {
                  window.location.hash = '#desire';
                }
              }}
            >Desire</a>
            <a
              href="#about"
              className="text-base font-sans font-bold text-dark hover:text-accent transition-colors py-2"
              onClick={e => {
                e.preventDefault();
                handleMobileMenuClose();
                if (location.pathname !== "/") {
                  sessionStorage.setItem('scrollToHash', '#about');
                  window.location.href = '/';
                } else {
                  window.location.hash = '#about';
                }
              }}
            >About</a>
            <a
              href="#contact"
              className="mt-2 magnetic-btn magnetic-btn-accent px-4 py-2 text-sm flex items-center justify-center"
              onClick={e => {
                e.preventDefault();
                handleMobileMenuClose();
                if (location.pathname !== "/") {
                  sessionStorage.setItem('scrollToHash', '#contact');
                  window.location.href = '/';
                } else {
                  window.location.hash = '#contact';
                }
              }}
            >
              <span>Contact</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
