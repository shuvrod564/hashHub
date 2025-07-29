'use client'

import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ArrowRight, ArrowRightSmall } from './Icons'

const HomeHeader = () => {
    const headerRef = useRef(null)
    const textWrapperRef = useRef(null)
    const imageRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            const q = gsap.utils.selector(textWrapperRef)

            gsap.from(q('h1, p, div'), {
                opacity: 0,
                y: 40,
                duration: 1,
                stagger: 0.2,
                ease: 'power3.out',
            })

            gsap.from(imageRef.current, {
                opacity: 0,
                x: 60,
                duration: 1.2,
                delay: 0.6,
                ease: 'power3.out',
            })
        }, headerRef)

        return () => ctx.revert()
    }, [])


    return (
        <section className="p-5" ref={headerRef}>
            <div className="py-20 lg:py-24 bg-primary relative overflow-hidden flex items-center rounded-2xl">
                <div className="container flex flex-wrap items-center justify-between gap-10">
                    <div
                        className="flex-1 lg:min-w-[450px] lg:max-w-[600px] text-center lg:text-left"
                        ref={textWrapperRef}
                    >
                        <h1 className="lg:text-6xl md:text-4xl sm:text-3xl text-3xl font-bold leading-tighter text-white md:mb-6 mb-4">
                            All the tools you need for Social Media analytics
                        </h1>
                        <p className="text-lg leading-relaxed mb-9 max-w-lg lg:max-w-none mx-auto lg:mx-0 text-white text-opacity-80">
                            Prove the ROI of social media, plan more engaging content, and create automated white label analytics reports.
                        </p>
                        <div>
                            <button className="btn-white rounded-3xl !pr-5">
                                Get Started to free{' '}
                                <ArrowRightSmall className="size-6 ml-6" />
                            </button>
                        </div>
                        <p className="text-sm md:text-base lg:text-lg text-white text-opacity-60 mt-4">
                            No credit card required. Plans start at $0/mo.
                        </p>
                    </div>

                    <div
                        className="flex-1 flex justify-center lg:justify-end min-w-[350px] mt-10 lg:mt-0"
                        ref={imageRef}
                    >
                        <Image
                            src="/images/hero-thumbnail.png"
                            alt="Hero"
                            width={500}
                            height={500}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeHeader
