'use client';
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  return (
    <div className="py-6 bg-white px-4 rounded-lg shadow transition-all duration-300 ease-in-out">
      <button
        className="flex justify-between items-center w-full text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-xl font-semibold text-gray-900">{question}</span>
        <span className="text-gray-500 text-3xl font-light transition-transform duration-300">
          {isOpen ? '-' : '+'}
        </span>
      </button>

      <div
        ref={contentRef}
        className={`overflow-hidden transition-all duration-500 ease-in-out`}
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : '0px',
          opacity: isOpen ? 1 : 0,
        }}
      >
        <p className="mt-4 text-gray-600 text-base leading-relaxed max-w-lg">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQsSection = () => {
  const faqRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(faqRef);
      gsap.from(q('h2, .faq-item'), {
        opacity: 0,
        y: 40,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: faqRef.current,
          start: 'top 80%',
        },
      });
    }, faqRef);

    return () => ctx.revert();
  }, []);

  const faqs = [
    {
      question: 'What mostly people want to ask no.1?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      question: 'What mostly people want to ask no.2?',
      answer:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      question: 'What mostly people want to ask no.3?',
      answer:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
    {
      question: 'What mostly people want to ask no.4?',
      answer:
        'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      question: 'What mostly people want to ask no.5?',
      answer:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
    },
    {
      question: 'What mostly people want to ask no.6?',
      answer:
        'Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
    },
    {
      question: 'What mostly people want to ask no.7?',
      answer:
        'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
    },
    {
      question: 'What mostly people want to ask no.8?',
      answer:
        'Et harum quidem rerum facilis est et expedita distinctio.',
    },
  ];

  return (
    <section className="px-3 md:px-5 pb-4">
      <div className="bg-light py-16 md:py-24 rounded-2xl"> 
        <div ref={faqRef} className="container mx-auto px-5 max-w-6xl">
          <h2 className="text-center text-5xl md:text-6xl font-bold text-gray-900 mb-16">
            FAQs
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-2 align-top">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <FAQItem question={faq.question} answer={faq.answer} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQsSection;
