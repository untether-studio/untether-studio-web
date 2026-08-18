import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import productionAnimationImg from '../assets/images/3d-production-animation.jpg';
import digitalPlatformsImg from '../assets/images/digital-platforms.jpg';
import immersiveInteractiveImg from '../assets/images/immersive-interactive.jpg';
import GeometricCircles from './GeometricCircles';
import DotGrid from './DotGrid';

const ShufflerCard = () => {
  const [cards, setCards] = useState([
    { id: 1, label: 'Creating Lifeforms', status: '...' },
    { id: 2, label: 'Environmental Design', status: '---' },
    { id: 3, label: 'Emotion Driven', status: '+++' }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCards(prev => {
        const newCards = [...prev];
        const last = newCards.pop();
        newCards.unshift(last);
        return newCards;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[560px] bg-surface border border-dark/10 rounded-[2rem] shadow-sm overflow-hidden flex flex-col">
      <div className="relative h-44 w-full shrink-0">
        <img
          src={productionAnimationImg}
          alt="3D Production & Animation"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="font-sans font-bold text-xl uppercase tracking-tighter text-primary">3D Production & Animation</h3>
          <p className="font-drama italic text-lg text-primary/90 mt-1">Bringing concepts to life.</p>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-1 min-h-0">
        <p className="font-mono text-xs text-dark/60">
          Elevate your projects with high-quality 3D art. Whether you need bespoke assets for a game or dynamic animations for a marketing campaign, we handle the entire visual pipeline.
        </p>
        <p className="font-mono text-[10px] uppercase tracking-widest text-accent font-bold mt-3">Key Deliverables</p>
        <ul className="mt-1.5 space-y-1 list-disc pl-4 marker:text-accent">
          <li className="font-mono text-xs text-dark/60">3D Modeling & Asset Creation</li>
          <li className="font-mono text-xs text-dark/60">Character & Object Animation</li>
          <li className="font-mono text-xs text-dark/60">Environment Design</li>
        </ul>
        <div className="relative h-28 w-full mt-auto">
          {cards.map((card, i) => (
            <div
              key={card.id}
              className="absolute left-0 right-0 p-4 border border-dark/10 rounded-xl bg-surface transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] flex justify-between items-center"
              style={{
                transform: `translateY(${i * 12}px) scale(${1 - i * 0.05})`,
                zIndex: 10 - i,
                opacity: 1 - i * 0.2,
                boxShadow: i === 0 ? '0 10px 20px -10px rgba(0,0,0,0.1)' : 'none'
              }}
            >
              <span className="font-mono text-xs font-bold">{card.label}</span>
              <span className="font-mono text-[10px] bg-dark text-primary px-2 py-1 rounded-full">{card.status}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const GeometricCard = () => {
  return (
    <div className="relative w-full h-[560px] bg-surface border border-dark/10 rounded-[2rem] shadow-sm overflow-hidden flex flex-col">
      <div className="relative h-44 w-full shrink-0">
        <img
          src={immersiveInteractiveImg}
          alt="Immersive & Interactive"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="font-sans font-bold text-xl uppercase tracking-tighter text-primary">Immersive & Interactive</h3>
          <p className="font-drama italic text-lg text-primary/90 mt-1">Engaging worlds and realities.</p>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-1 min-h-0">
        <p className="font-mono text-xs text-dark/60">
          Captivate your audience with interactive gameplay and cutting-edge virtual reality. We build immersive experiences that push the boundaries of user engagement and storytelling.
        </p>
        <p className="font-mono text-[10px] uppercase tracking-widest text-accent font-bold mt-3">Key Deliverables</p>
        <ul className="mt-1.5 space-y-1 list-disc pl-4 marker:text-accent">
          <li className="font-mono text-xs text-dark/60">Game Development (2D & 3D)</li>
          <li className="font-mono text-xs text-dark/60">Virtual Reality (VR) Experiences</li>
          <li className="font-mono text-xs text-dark/60">Interactive Prototyping</li>
        </ul>

        <div className="mt-auto flex justify-center pt-3">
          <GeometricCircles />
        </div>
      </div>
    </div>
  );
};

const GridCard = () => {
  return (
    <div className="relative w-full h-[560px] bg-surface border border-dark/10 rounded-[2rem] shadow-sm overflow-hidden flex flex-col">
      <div className="relative h-44 w-full shrink-0">
        <img
          src={digitalPlatformsImg}
          alt="Digital Platforms"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="font-sans font-bold text-xl uppercase tracking-tighter text-primary">Digital Platforms</h3>
          <p className="font-drama italic text-lg text-primary/90 mt-1">Seamless web and mobile solutions.</p>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-1 min-h-0">
        <p className="font-mono text-xs text-dark/60">
          From responsive websites to intuitive mobile applications, we engineer robust, user-centric digital products tailored to solve real-world problems and grow your brand.
        </p>
        <p className="font-mono text-[10px] uppercase tracking-widest text-accent font-bold mt-3">Key Deliverables</p>
        <ul className="mt-1.5 space-y-1 list-disc pl-4 marker:text-accent">
          <li className="font-mono text-xs text-dark/60">Full-Stack Web Development</li>
          <li className="font-mono text-xs text-dark/60">Mobile App Creation</li>
          <li className="font-mono text-xs text-dark/60">UI/UX Implementation</li>
        </ul>

        <div className="mt-auto flex justify-center pt-2">
          <DotGrid />
        </div>
      </div>
    </div>
  );
};

export default function Services() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.service-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out'
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="px-6 py-24 md:px-16 lg:px-24 bg-primary mx-auto max-w-[1400px]">
      <div className="mb-16">
        <h2 className="font-sans font-bold text-4xl md:text-5xl tracking-tighter uppercase">
          SERVICES
        </h2>
        <p className="font-mono text-sm mt-4 text-dark/60 max-w-md">
          Three systems drive the Untether experience: Interaction, software, and world building. Our artworks evolve and react to human presence, creating an immersive experience.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="service-card">
          <GeometricCard />
        </div>
        <div className="service-card">
          <GridCard />
        </div>
        <div className="service-card">
          <ShufflerCard />
        </div>
      </div>
    </section>
  );
}
