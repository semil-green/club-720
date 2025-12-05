import React from 'react';

const OurStorySection = () => {
    return (
        <section className="bg-[#F0FAFC] py-16 px-4 md:px-0">
            <div className="max-w-3xl mx-auto text-center">
                {/* Top Icon and Label */}
                <div className="flex items-center justify-center mb-4 text-cyan-400 font-semibold ">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-6 h-6 mr-2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                        />
                    </svg>
                    <span className='text-3xl'>Our Story</span>
                </div>

                {/* Main Heading */}
                <h2 className="text-5xl md:text-4xl font-bold text-slate-900 mb-8">
                    Our Founder's Vision for Your Future
                </h2>

                {/* Body Paragraph */}
                <p className="text-slate-600 leading-relaxed text-md md:text-lg font-light">
                    Club 720 was created to rethink how we solve the housing crisis and
                    close the wealth gap in America. After decades in housing and community
                    development, our founder, Heather Presley-Cowen, witnessed firsthand
                    the barriers that families face when trying to access affordable
                    housing and build wealth. Motivated by these challenges, she developed
                    the H.O.M.E. Method (Housing Optimization through Market Empowerment),
                    a system designed to empower individuals and create sustainable
                    housing solutions. Today, Club 720 brings that vision to life by
                    blending innovative technology with community-based strategies, helping
                    individuals across the country turn homeownership dreams into reality.
                </p>
            </div>
        </section>
    );
};

export default OurStorySection;