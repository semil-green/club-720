"use client";
import { useState } from "react";
import { PieChart, Users, BadgeDollarSign, Home, HandCoins } from "lucide-react";

export default function WealthCircleSection() {
    const [activeItem, setActiveItem] = useState(null);

    const circleItems = [
        {
            id: 1,
            icon: <Home className="w-10 h-10 text-white" />,
            title: "Homeownership",
            desc: "We guide you toward achieving sustainable homeownership with tailored support.",
        },
        {
            id: 2,
            icon: <HandCoins className="w-10 h-10 text-white" />,
            title: "Financial Coaching",
            desc: "Personalized financial coaching to help you prepare for long-term stability.",
        },
        {
            id: 3,
            icon: <Users className="w-10 h-10 text-white" />,
            title: "Community Support",
            desc: "Access a community that supports your homeownership and financial journey.",
        },
        {
            id: 4,
            icon: <BadgeDollarSign className="w-10 h-10 text-white" />,
            title: "Wealth Building",
            desc: "Convert homeownership into generational wealth through smart strategies.",
        },
    ];

    return (
        <section className="max-w-7xl mx-auto px-4 py-20 grid lg:grid-cols-2 gap-14 items-center">
            {/* Left Section Text */}
            <div>
                <h3 className="text-cyan-500 font-semibold  mb-3 text-3xl flex items-center gap-2">
                    <PieChart className="w-6 h-6" />

                    H.O.M.E. Method
                </h3>

                <h1 className="text-4xl font-bold text-slate-900 mb-5">
                    Bridging the Wealth Gap
                </h1>

                <p className="text-slate-600 leading-relaxed mb-4">
                    The H.O.M.E. Method (Housing Optimization through Market Empowerment) is our unique framework
                    designed to simplify the path to homeownership.
                </p>

                <p className="text-slate-600 leading-relaxed">
                    We help build wealth by transforming housing into a strategic asset that supports long-term
                    generational success.
                </p>
            </div>

            {/* Right Circular Graphic */}
            <div className="relative flex items-center justify-center">
                <div className="relative w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] rounded-full bg-gradient-to-br from-cyan-400 to-sky-500 opacity-90 grid place-items-center">
                    {/* inner circle */}
                    <div className="absolute w-[55%] h-[55%] rounded-full bg-white flex items-center justify-center">
                        <PieChart className="w-16 h-16 text-cyan-500" />
                    </div>

                    {/* 4 clickable segments */}
                    {circleItems.map((item, i) => {
                        const positions = [
                            "top-[4%] left-1/2 -translate-x-1/2", // top
                            "right-[4%] top-1/2 -translate-y-1/2", // right
                            "bottom-[4%] left-1/2 -translate-x-1/2", // bottom
                            "left-[4%] top-1/2 -translate-y-1/2", // left
                        ];

                        return (
                            <button
                                key={item.id}
                                onClick={() => setActiveItem(item)}
                                className={`absolute ${positions[i]} p-5 bg-cyan-500 hover:bg-cyan-600 rounded-full shadow-lg transition-all`}
                            >
                                {item.icon}
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Modal */}
            {activeItem && (
                <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-xl max-w-md w-full p-6 text-center animate-fadeIn relative">
                        <h2 className="text-2xl font-bold text-slate-900 mb-3">{activeItem.title}</h2>
                        <p className="text-slate-600 mb-6">{activeItem.desc}</p>

                        <button
                            onClick={() => setActiveItem(null)}
                            className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-semibold transition-all"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}
