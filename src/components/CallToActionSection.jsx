import React from 'react';

const CallToActionSection = () => {
    return (
        <section className="md:px-5 px-3">
            <div className="bg-gray-900 py-16 md:py-20 text-white rounded-xl">
                <div className="container mx-auto px-5 max-w-4xl text-center">
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
                        Ready to make something amazing together?
                    </h2>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-10 text-lg">
                        <span className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                            </svg>
                            Free 14-day trial
                        </span>
                        <span className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                            </svg>
                            No credit card required
                        </span>
                        <span className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                            </svg>
                            Cancel at any time
                        </span>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <input
                            type="email"
                            placeholder="Your work email"
                            className="flex-1 min-w-[280px] sm:max-w-md p-4 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-blue"
                        />
                        <button className="bg-primary-blue text-white font-semibold py-4 px-8 rounded-lg hover:bg-dark-blue transition-colors duration-300">
                            Get Started
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CallToActionSection;