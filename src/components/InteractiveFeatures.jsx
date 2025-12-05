// components/InteractiveFeatures.js
"use client";
import React, { useState } from 'react';
import { Home, Zap, Heart, Users } from 'lucide-react'; // Example icons

// Data for the icons and the content they reveal
const featureData = [
    {
        id: 'home',
        Icon: Home,
        title: 'Housing Solutions',
        description: "We provide sustainable and affordable housing options tailored to local needs, utilizing innovative construction and financing models.",
        details: 'Leverage our proprietary system to find homes that fit both your budget and your long-term wealth building goals.'
    },
    {
        id: 'tech',
        Icon: Zap,
        title: 'Tech Integration',
        description: "Our platform uses cutting-edge technology to streamline the home-buying process, from pre-qualification to closing.",
        details: 'Access personalized dashboards, instant document submission, and automated eligibility checks, all powered by secure, modern infrastructure.'
    },
    {
        id: 'support',
        Icon: Heart,
        title: 'Personalized Coaching',
        description: "Receive one-on-one financial and homeownership coaching to empower you with the knowledge needed for wealth creation.",
        details: 'Our certified coaches guide you through budgeting, credit repair, and equity management to ensure lasting financial success.'
    },
    {
        id: 'community',
        Icon: Users,
        title: 'Community Focus',
        description: "We partner with local governments and developers to create thriving, equitable communities.",
        details: 'Invest in neighborhoods that support generational wealth and community stability through local initiatives and strategic planning.'
    }
];

const InteractiveFeatures = () => {
    // State to track which icon is currently active/selected.
    // Initialize with the ID of the first item ('home').
    const [activeTab, setActiveTab] = useState(featureData[0].id);

    // Find the content object corresponding to the active tab
    const activeContent = featureData.find(item => item.id === activeTab);

    return (
        <div className="w-full py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header (Optional, but good practice) */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-extrabold text-gray-900 md:text-4xl">
                        Our Core Pillars
                    </h2>
                    <p className="mt-4 text-xl text-gray-600">
                        Click an icon below to learn how we bridge the gap.
                    </p>
                </div>

                {/* 1. Icon Selection Tabs (Top Row) */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                    {featureData.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => setActiveTab(item.id)}
                            className={`
                flex flex-col items-center p-4 rounded-xl transition duration-300 ease-in-out
                ${activeTab === item.id
                                    ? 'bg-white shadow-lg text-blue-600 ring-2 ring-blue-500' // Active style
                                    : 'bg-white text-gray-500 hover:text-blue-500 hover:shadow-md' // Inactive style
                                }
              `}
                        >
                            <item.Icon className="w-8 h-8 md:w-10 md:h-10 mb-2" />
                            <span className="text-sm font-semibold text-center mt-1">
                                {item.title}
                            </span>
                        </button>
                    ))}
                </div>

                {/* 2. Content Display Area (Bottom Section) */}
                <div className="bg-white p-6 md:p-10 rounded-xl shadow-2xl border-t-4 border-blue-500">
                    {activeContent && (
                        <div key={activeContent.id} className="transition-opacity duration-500 ease-in-out">
                            <h3 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
                                <activeContent.Icon className="w-7 h-7 mr-3 text-blue-600" />
                                {activeContent.title}
                            </h3>
                            <p className="text-xl text-gray-700 leading-relaxed mb-4">
                                {activeContent.description}
                            </p>
                            <p className="text-lg text-gray-500 italic">
                                {activeContent.details}
                            </p>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
};

export default InteractiveFeatures;