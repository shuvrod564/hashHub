'use client';
import React, { useEffect, useRef } from 'react';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowLeft, ArrowRight } from './Icons';

const data = [
    {
        id: 1,
        text: 'Designspace has consistently delivered above and beyond my expectations! Brilliant design work, incredible response time and a really friendly team - I strongly recommend them.',
        author: 'Shawn Steele',
        designation: 'CEO of Designspace',
        image: '/images/user-1.png',
    },
    {
        id: 2,
        text: 'We’ve worked with Designspace on multiple projects, and every time they have amazed us with their creativity and professionalism. A top-tier team!',
        author: 'Amanda Chen',
        designation: 'Product Manager at Flowbit',
        image: '/images/user-2.png',
    },
    {
        id: 3,
        text: 'Fast, reliable, and creatively unmatched. Designspace brought our brand to life with stunning visuals and clean UI/UX.',
        author: 'Daniel Torres',
        designation: 'Marketing Director at NovaCore',
        image: '/images/user-3.png',
    },
    {
        id: 4,
        text: 'From branding to web design, every aspect was handled with care and precision. Highly recommend working with them!',
        author: 'Elena Hart',
        designation: 'Founder of StartupNest',
        image: '/images/user-4.png',
    },
    {
        id: 5,
        text: 'Designspace didn’t just give us a website—they gave us a digital identity. Extremely pleased with their professionalism.',
        author: 'Robert Lin',
        designation: 'CTO at MetricLabs',
        image: '/images/user-5.png',
    },
    {
        id: 6,
        text: 'A great team with deep design knowledge and incredible responsiveness. Working with them was smooth and productive.',
        author: 'Priya Kapoor',
        designation: 'Head of Ops at Finology',
        image: '/images/user-6.png',
    },
];

const brands = [
    { logo: '/images/amazon.png' },
    { logo: '/images/creative.png' },
    { logo: '/images/shopify.png' },
    { logo: '/images/Airbnb.png' },
    { logo: '/images/Dropbox.webp' },
    { logo: '/images/Google.webp' },
    { logo: '/images/Microsoft.webp' },
    { logo: '/images/Meta.png' },
];

const AboutTools = () => {
    const textWrapperRef = useRef(null);
    const sliderWrapperRef = useRef(null);
    const brandSliderRef = useRef(null);
    const sectionRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            const q = gsap.utils.selector(textWrapperRef);

            // Animate heading
            gsap.from(q('p, h2'), {
                opacity: 0,
                x: -60,
                duration: 1,
                stagger: 0.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: textWrapperRef.current,
                    start: 'top 80%',
                },
            });

            // Animate testimonial cards
            const slides = gsap.utils.selector(sliderWrapperRef)('.keen-slider__slide');
            gsap.from(slides, {
                opacity: 0,
                y: 50,
                duration: 1,
                stagger: 0.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sliderWrapperRef.current,
                    start: 'top 85%',
                },
            });

            // ✅ Animate brand logos
            const logos = gsap.utils.selector(brandSliderRef)('.keen-slider__slide');
            gsap.from(logos, {
                opacity: 0,
                scale: 0.8,
                duration: 1,
                stagger: 0.15,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: brandSliderRef.current,
                    start: 'top 90%',
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const [sliderRef, instanceRef] = useKeenSlider({
        slides: {
            perView: 1,
            spacing: 10,
        },
        breakpoints: {
            '(min-width: 768px)': {
                slides: {
                    perView: 2,
                    spacing: 10,
                },
            },
        },
        slideChanged(slider) {
            console.log('Slide changed to', slider.track.details.rel);
        },
    });

    const [brandSliderRefKeen] = useKeenSlider({
        loop: true,
        autoplay: true,
        mode: 'free-snap',
        autoplayTime: 3000,
        slides: {
            perView: 2,
            spacing: 10,
        },
        breakpoints: {
            '(min-width: 768px)': {
                slides: {
                    perView: 5,
                    spacing: 10,
                },
            },
            '(min-width: 1200px)': {
                slides: {
                    perView: 6,
                    spacing: 20,
                },
            },
        },
    });

    const prevSlide = () => instanceRef.current?.prev();
    const nextSlide = () => instanceRef.current?.next();

    return (
        <section className="bg-gray-50 py-16 md:py-20" ref={sectionRef}>
            <div className="container mx-auto px-5 max-w-6xl">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
                    <div className="mb-8 md:mb-0 max-w-lg" ref={textWrapperRef}>
                        <p className="text-primary-blue text-sm font-semibold uppercase tracking-wider mb-2">TESTIMONIALS</p>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                            What experts think <br className="hidden md:inline" /> about Generix tools
                        </h2>
                    </div>
                    <div className="flex space-x-4">
                        <button onClick={prevSlide} className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors duration-300">
                            <ArrowLeft className="size-8" />
                        </button>
                        <button onClick={nextSlide} className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors duration-300">
                            <ArrowRight className="size-8" />
                        </button>
                    </div>
                </div>

                {/* Testimonials */}
                <div
                    ref={(el) => {
                        sliderRef(el);
                        sliderWrapperRef.current = el;
                    }}
                    className="keen-slider"
                >
                    {data.map((item, index) => (
                        <div className="keen-slider__slide p-3" key={index}>
                            <div className="bg-white rounded-lg shadow-md p-8 border border-gray-100 h-full flex flex-col justify-between">
                                <p className="text-gray-900 text-lg font-medium leading-relaxed mb-6">{item.text}</p>
                                <div className="flex items-center">
                                    <Image
                                        src={item.image}
                                        alt={item.author}
                                        className="w-12 h-12 rounded-full mr-4 object-cover"
                                        width={50}
                                        height={50}
                                    />
                                    <div>
                                        <p className="text-gray-900 font-semibold text-base">{item.author}</p>
                                        <p className="text-gray-500 text-sm">{item.designation}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Brand Logos */}
                <div
                    ref={(el) => {
                        brandSliderRefKeen(el); // 👈 Attach keen slider ref
                        brandSliderRef.current = el; // 👈 Attach GSAP animation ref
                    }}
                    className="keen-slider mt-16">
                    {brands.map((brand, index) => (
                        <div className="keen-slider__slide text-center" key={index}>
                            <img
                                src={brand.logo}
                                alt={`Brand ${index}`}
                                className="h-8 md:h-12 w-auto grayscale-100 object-contain object-center mx-auto"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutTools;
