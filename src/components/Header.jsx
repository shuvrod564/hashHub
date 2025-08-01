import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <>
            <header className="py-5 relative z-50">
                <div className="container mx-auto px-5 flex justify-between items-center">
                    <Link href="/" className="inline-block">
                        <Image
                            src={'/images/hashhub-logo.webp'}
                            alt='Hashhub Logo'
                            width={131}
                            height={48}
                            className="w-auto h-10 2xl:h-12"
                        /> 
                    </Link>
                    <nav className="hidden md:flex space-x-8">
                        <a href="#" className="text-text-color no-underline font-medium hover:text-light-grey transition-colors duration-300">About</a>
                        <a href="#" className="text-text-color no-underline font-medium hover:text-light-grey transition-colors duration-300">Features</a>
                        <a href="#" className="text-text-color no-underline font-medium hover:text-light-grey transition-colors duration-300">How it works</a>
                        <a href="#" className="text-text-color no-underline font-medium hover:text-light-grey transition-colors duration-300">Pricing</a>
                        <a href="#" className="text-text-color no-underline font-medium hover:text-light-grey transition-colors duration-300">Contact Us</a>
                    </nav>
                    <div className="flex items-center">
                        <button className="py-2 px-5 border border-white border-opacity-40 rounded-md font-semibold cursor-pointer text-text-color bg-transparent mr-2 hover:bg-white hover:bg-opacity-10 transition-colors duration-300">Login</button>
                        <button className="py-2 px-5 rounded-md font-semibold cursor-pointer bg-text-color text-primary-blue hover:bg-light-grey transition-colors duration-300">Sign In</button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header