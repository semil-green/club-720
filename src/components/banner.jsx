import React from 'react'
import Image from 'next/image'

const Banner = ({ title }) => {
    const backgroundImageUrl = "https://picsum.photos/1200/400?random=1";

    return (
        <div className="relative w-full h-64 sm:h-80 md:h-96 overflow-hidden">

            {/* 1. Background Image */}
            <Image
                src={backgroundImageUrl}
                alt="Background image showing housing and finance elements"
                layout="fill"
                objectFit="cover" // Ensure the image covers the entire container
                priority // Load this important banner image first
            />

            {/* 2. Dark Overlay for better text contrast (Matching the blurred, dark look) */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            {/* 3. Overlay Content (The "About Us" text) */}
            <div className="absolute inset-0 flex items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold text-white z-10">
                    {title}
                </h1>
            </div>
        </div>
    )
}

export default Banner