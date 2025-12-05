import React from 'react';

const PartnershipsSection = () => {
    // Helper function to generate distinct Picsum URLs for logo placeholders
    // We use different IDs to ensure they don't all look the same.
    const getLogoUrl = (id) => `https://picsum.photos/id/${id}/180/80?grayscale`;

    const partnerLogos = [
        { id: 10, alt: "Cook County Bureau" },
        { id: 20, alt: "Cook County Down Payment" },
        { id: 30, alt: "Amres" },
        { id: 40, alt: "Crosscountry Mortgage" },
        { id: 50, alt: "Fairway Mortgage" },
        { id: 60, alt: "Guild Mortgage" },
        { id: 70, alt: "Summit Mortgage" },
    ];

    return (
        <section className="w-full py-16 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-20">

                    {/* --- Left Column: Text Content --- */}
                    <div className="w-full lg:w-5/12 flex flex-col items-start">
                        {/* Label with Icon */}
                        <div className="flex items-center text-cyan-500 font-bold text-lg mb-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-6 h-6 mr-2"
                            >
                                <path fillRule="evenodd" d="M2.25 13.5a8.25 8.25 0 018.25-8.25.75.75 0 01.75.75v6.75H18a.75.75 0 01.75.75 8.25 8.25 0 01-16.5 0zm1.5 0v-4.5a6.75 6.75 0 016.75-6.75h3.75a.75.75 0 00.75-.75V1.5a.75.75 0 00-.75-.75H12a8.25 8.25 0 00-8.25 8.25v4.5a.75.75 0 00.75.75h2.25a.75.75 0 00.75-.75v-4.5zm16.5 0a6.75 6.75 0 00-6.75-6.75h-3.75a.75.75 0 01-.75.75V9a.75.75 0 01.75.75H18a8.25 8.25 0 018.25 8.25v4.5a.75.75 0 01-.75.75h-2.25a.75.75 0 01-.75-.75v-4.5z" clipRule="evenodd" />
                                <path d="M20.25 12a.75.75 0 01.75.75v4.5c0 .414-.336.75-.75.75h-2.25a.75.75 0 01-.75-.75v-4.5a.75.75 0 01.75-.75h2.25zM5.25 12a.75.75 0 01.75.75v4.5c0 .414-.336.75-.75.75H3a.75.75 0 01-.75-.75v-4.5a.75.75 0 01.75-.75h2.25zM12.75 12a.75.75 0 01.75.75v4.5c0 .414-.336.75-.75.75H10.5a.75.75 0 01-.75-.75v-4.5a.75.75 0 01.75-.75h2.25z" />
                                {/* Using a slightly different chart icon as a close approximation to the image's squiggle chart */}
                                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V21a3 3 0 01-3 3h-2.25C8.552 24 1.5 16.948 1.5 11.25V4.5z" clipRule="evenodd" className="hidden" />
                                <path d="M15 4.5a3 3 0 11-6 0 3 3 0 016 0z" className="hidden" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" stroke="currentColor" strokeWidth="2.5" fill="none" />
                            </svg>
                            Partnerships
                        </div>

                        {/* Main Heading */}
                        <h2 className="text-4xl md:text-3xl font-bold text-slate-900 mb-8 leading-tight">
                            Collaboration for Impact
                        </h2>

                        {/* Bullet Points */}
                        <ul className="space-y-4 mb-10">
                            <li className="text-xl md:text-2xl font-bold text-slate-700 flex items-start">
                                <span className="mr-2">+</span> Over 11,000 homebuyers served
                            </li>
                            <li className="text-xl md:text-2xl font-bold text-slate-700 flex items-start">
                                <span className="mr-2">+</span> Over $10M down payment assistance accessed
                            </li>
                            <li className="text-xl md:text-2xl font-bold text-slate-700 flex items-start">
                                <span className="mr-2">+</span> Partnered with 30+ housing entities
                            </li>
                        </ul>

                        {/* Call to Action Button */}
                        <button className="group bg-cyan-400 hover:bg-cyan-500 text-white text-lg font-bold py-4 px-8 rounded shadow-lg transition-all duration-300 flex items-center">
                            PARTNER WITH US
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                        </button>
                    </div>

                    {/* --- Right Column: Logo Grid (Picsum Placeholders) --- */}
                    <div className="w-full lg:w-6/12 mt-12 lg:mt-0">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12 items-center justify-items-center">
                            {partnerLogos.map((logo) => (
                                /* We use grayscale images to better mimic the professional look of logos */
                                <img
                                    key={logo.id}
                                    src={getLogoUrl(logo.id)}
                                    alt={logo.alt}
                                    className="max-h-[80px] w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300 mix-blend-multiply"
                                    loading="lazy"
                                />
                            ))}
                            {/* Add one extra slot for the "Guiding You Home" script text in the image */}
                            <div className="col-span-2 md:col-span-1 flex justify-center items-center">
                                <span className="font-cursive text-gray-400 text-2xl italic">Guiding You Home.</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default PartnershipsSection;