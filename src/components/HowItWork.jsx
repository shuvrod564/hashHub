'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const HowItWork = () => {
  const textRef = useRef(null);
  const stepsWrapperRef = useRef(null);
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(textRef);
      gsap.from(q('p, h2'), {
        opacity: 0,
        y: 40,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 80%',
        },
      }, textRef.current);

      // SET STEPS ANIMATED
      const steps = gsap.utils.selector(stepsWrapperRef)('div.steps');
      gsap.from(steps, {
        opacity: 0,
        x: 60,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: 'div.steps',
          start: 'top 80%',
        }
      })

      return () => ctx.revert();
    });
  }, []);



  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-5 max-w-5xl">
        {/* Section Header */}
        <div className="text-center mb-16" ref={textRef}>
          <p className="text-primary-blue text-sm font-semibold uppercase tracking-wider mb-2">HOW IT WORKS</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            A simple and better way to work
          </h2>
        </div>

        {/* Steps Grid */}
        <div ref={stepsWrapperRef} className="relative flex flex-col md:flex-row justify-between items-center md:items-start gap-12 md:gap-8">
          {/* Dashed line for desktop */}
          <div className="hidden md:block absolute top-[40px] left-1/2 transform -translate-x-1/2 w-[calc(100%-160px)] h-px border-t-2 border-dashed border-gray-300"></div>
          
          {/* Dashed line for mobile (vertical) */}
          <div className="md:hidden absolute left-1/2 transform -translate-x-1/2 h-[calc(100%-160px)] w-px border-l-2 border-dashed border-gray-300 top-[80px]"></div>


          {/* Step 1 */}
          <div className="steps flex flex-col items-center text-center relative z-10 bg-white pt-4 md:pt-0">
            <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mb-6 shadow-md">
              <span className="text-primary-blue text-4xl font-bold">1</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">First step</h3>
            <p className="text-gray-600 text-base max-w-xs">Sometimes how it works require a short description. This can be detailed description or just a short text.</p>
          </div>

          {/* Step 2 */}
          <div className="steps flex flex-col items-center text-center relative z-10 bg-white pt-4 md:pt-0">
            <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mb-6 shadow-md">
              <span className="text-primary-blue text-4xl font-bold">2</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Second step</h3>
            <p className="text-gray-600 text-base max-w-xs">Sometimes how it works require a short description. This can be detailed description or just a short text.</p>
          </div>

          {/* Step 3 */}
          <div className="steps flex flex-col items-center text-center relative z-10 bg-white pt-4 md:pt-0">
            <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mb-6 shadow-md">
              <span className="text-primary-blue text-4xl font-bold">3</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Third step</h3>
            <p className="text-gray-600 text-base max-w-xs">Sometimes how it works require a short description. This can be detailed description or just a short text.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWork;