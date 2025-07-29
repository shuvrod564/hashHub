'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const data = [
  {
    title: 'First feature',
    description: 'Sometimes features require a short description. This can be detailed description or just a short text.',
    icon: '✔️',
  },
  {
    title: 'Second feature',
    description: 'Sometimes features require a short description. This can be detailed description or just a short text.',
    icon: '🌍',
  },
  {
    title: 'Third feature',
    description: 'Sometimes features require a short description. This can be detailed description or just a short text.',
    icon: '📊',
  },
  {
    title: 'Fourth feature',
    description: 'Sometimes features require a short description. This can be detailed description or just a short text.',
    icon: '💻',
  },
  {
    title: 'Fifth feature',
    description: 'Sometimes features require a short description. This can be detailed description or just a short text.',
    icon: '📈',
  },
  {
    title: 'Sixth feature',
    description: 'Sometimes features require a short description. This can be detailed description or just a short text.',
    icon: '📅',
  },
];

const Features = () => {
  const featureRef = useRef(null);
  const textWrapperRef = useRef(null);
  const cardWrapperRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Animate header texts
      const q = gsap.utils.selector(textWrapperRef);
      gsap.from(q('p, h2'), {
        opacity: 0,
        y: 90,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: featureRef.current,
          start: 'top 80%',
        },
      });

      // Animate feature cards
      const cards = gsap.utils.selector(cardWrapperRef)('div.feature-card');
      gsap.from(cards, {
        opacity: 0,
        y: 60,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: cardWrapperRef.current,
          start: 'top 85%',
        },
      });
    }, featureRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-white py-16 md:py-24" ref={featureRef}>
      <div className="container mx-auto px-5 max-w-6xl">
        {/* Section Header */}
        <div ref={textWrapperRef} className="text-center md:text-left mb-12">
          <p className="feature text-primary-blue text-sm font-semibold uppercase tracking-wider mb-2">
            OUR FEATURES
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-dark leading-tight">
            The tools you need to win <br className="hidden md:inline" /> and keep more clients
          </h2>
        </div>

        {/* Features Grid */}
        <div
          ref={cardWrapperRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {data.map((feature, index) => (
            <div
              key={index}
              className="feature-card bg-white rounded-lg shadow p-6 border border-gray-100 flex flex-col items-start text-left hover:bg-light hover:!c_shadow"
            >
              <div className="w-12 h-12 bg-blue-100 text-primary-blue rounded-full flex items-center justify-center mb-4">
                <span className="text-xl">{feature.icon}</span>
              </div>
              <h3 className="text-xl font-semibold text-dark mb-2">{feature.title}</h3>
              <p className="text-gray-500 text-base">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
