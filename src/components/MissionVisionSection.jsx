// components/MissionVisionSection.js

import React from 'react';
import { Rocket, Flag } from 'lucide-react'; // Using lucide-react for the icons

// Data for the cards to make the component dynamic
const cardData = [
    {
        icon: Rocket,
        title: "Our Mission:",
        description: "To make housing affordable while creating pathways to generational wealth through education, innovation, and community-focused solutions",
        iconRotation: 'rotate-45', // Rotate the rocket to match the visual tilt
        iconColor: 'text-sky-500'
    },
    {
        icon: Flag,
        title: "Our Vision:",
        description: "A world where every individual has the opportunity to build wealth through homeownership, as we strengthen communities and transform lives",
        iconRotation: '', // Flag is fine without rotation
        iconColor: 'text-cyan-500'
    }
];

const MissionVisionSection = () => {
    return (
        <div
            // Apply the requested gradient background and margin
            className="w-full pt-12 pb-24 md:pt-20 md:pb-32 
                 bg-gradient-to-br from-cyan-50 to-blue-50 mt-10"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header Section */}
                <div className="text-center mb-12 md:mb-16">
                    <div className="flex justify-center items-center text-cyan-400 mb-2">
                        <Rocket className="w-5 h-5 mr-1" />
                        <h3 className="text-4xl font-semibold tracking-tight">
                            Mission & Vision
                        </h3>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 tracking-tight leading-tight">
                        Closing the Homeownership Gap with Tech & Human Touch
                    </h2>
                </div>

                {/* Dynamic Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {cardData.map((card, index) => (
                        <div
                            key={index}
                            className="relative bg-white rounded-xl shadow-2xl p-6 md:p-10 transition duration-300 ease-in-out hover:shadow-cyan-400/50"
                        >
                            {/* Dynamic Icon/Background Shape */}
                            <div
                                className={`absolute top-0 left-0 w-full h-3/5 overflow-hidden rounded-tl-xl rounded-br-[100px] 
                            ${card.iconColor} opacity-5 -translate-x-1/2 -translate-y-1/2`}
                                style={{ clipPath: 'polygon(0 0, 100% 0, 100% 30%, 0% 100%)' }}
                            />

                            {/* The Styled Icon with the diagonal background strip */}
                            <div className="relative mb-6">
                                <div
                                    className={`absolute top-0 left-0 h-10 w-40 bg-cyan-100/70 
                              -rotate-6 translate-x-3 -translate-y-2`}
                                ></div>
                                <card.icon
                                    className={`w-12 h-12 relative z-10 text-cyan-400 ${card.iconRotation}`}
                                />
                            </div>

                            {/* Card Content */}
                            <h4 className="text-2xl font-bold text-gray-800 mb-4">
                                {card.title}
                            </h4>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                {card.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MissionVisionSection;