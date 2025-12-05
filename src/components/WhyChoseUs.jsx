import React from 'react'
import { TrendingUp, HandCoins, Building2, ClipboardCheck } from 'lucide-react';

const WhyChoseUs = () => {
    return (

        <div className=" w-full py-12 md:py-24  overflow-hidden bg-gradient-to-br from-cyan-50 to-blue-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16 lg:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-start max-w-7xl mx-auto">
                    <div className="space-y-6 lg:space-y-8">
                        <div className="flex items-center gap-2 text-cyan-500">
                            <TrendingUp className="w-6 h-6" />
                            <span className="text-lg font-medium">Join The Club</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                            Why Club 720?
                        </h1>

                        <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl">
                            Club 720 was created to rethink how we solve the housing crisis and close the
                            wealth gap in America. After decades in housing and community development, our
                            founder, Heather Presley-Cowen, witnessed firsthand the barriers families face
                            when trying to access affordable housing and build lasting wealth.
                        </p>

                        <button className="group bg-cyan-400 hover:bg-cyan-500 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                            MISSION & VISION
                            <svg
                                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </button>
                    </div>

                    <div className="space-y-6 lg:space-y-8">
                        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-cyan-100 rounded-xl flex items-center justify-center">
                                    <HandCoins className="w-6 h-6 sm:w-7 sm:h-7 text-cyan-500" />
                                </div>
                                <div>
                                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                                        Real-time financial insights
                                    </h3>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-cyan-100 rounded-xl flex items-center justify-center">
                                    <Building2 className="w-6 h-6 sm:w-7 sm:h-7 text-cyan-500" />
                                </div>
                                <div>
                                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                                        Access to exclusive grants & programs
                                    </h3>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-cyan-100 rounded-xl flex items-center justify-center">
                                    <ClipboardCheck className="w-6 h-6 sm:w-7 sm:h-7 text-cyan-500" />
                                </div>
                                <div>
                                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                                        Community-first approach that place your goals first
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyChoseUs