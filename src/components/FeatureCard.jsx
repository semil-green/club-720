// components/FeatureSection.js

import React from 'react';
import Image from 'next/image';
import { LineChart } from 'lucide-react';

const FeatureSection = () => {

    return (
        <div className="w-full py-12 md:py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">

                    <div className="order-2 lg:order-1 mb-8 lg:mb-0">
                        <div className="relative aspect-[3/2] rounded-xl overflow-hidden shadow-2xl">
                            <Image
                                src="https://picsum.photos/400/400?random=1"
                                alt="Modern residential building"
                                layout="fill"
                                objectFit="cover"
                                className="hover:scale-105 transition duration-500 ease-in-out"
                            />
                            <div className="absolute bottom-2 left-4 text-white text-xs font-semibold">
                                Club 720
                            </div>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2">

                        <div className="flex items-center text-teal-600 mb-4">
                            <LineChart className="w-6 h-6 mr-2" />
                            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                                Bridging Gaps, One Home At A Time
                            </h2>
                        </div>

                        {/* Main Description */}
                        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                            At Club 720, we've created a revolutionary approach to addressing the
                            housing crisis and wealth gap through efficient housing production
                            systems. Our platform combines technology, strategic partnerships, and
                            innovative financing models to empower local governments, developers,
                            and communities to build sustainable housing solutions that meet today's
                            growing demand.
                        </p>

                        {/* Secondary/Motivator Description */}
                        <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                            All of this is motivated by connecting prospective homebuyers to
                            homeownership through tools, coaches, and financial assistance to
                            empower wealth through home equity.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FeatureSection;