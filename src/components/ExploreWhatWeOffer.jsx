"use client";
import { BarChart3 } from "lucide-react";

export default function ExploreWhatWeOffer() {
    const items = [
        {
            id: 1,
            title: "AI-Powered Tools",
            desc: "Access smart tools that analyze your financial situation and suggest actionable steps.",
        },
        {
            id: 2,
            title: "Personalized Coaching",
            desc: "Work with real experts who care about your success.",
        },
        {
            id: 3,
            title: "Seamless Connections",
            desc: "From lenders to down payment programs, everything you need is in one place.",
        },
    ];

    return (
        <section className="py-20 px-4">
            {/* Header */}
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div>
                    <p className="text-cyan-500 font-semibold flex items-center gap-2 text-lg">
                        📈 Unique Tools Just For You
                    </p>
                    <h2 className="text-4xl font-bold text-slate-900 mt-2">
                        Explore What We Offer
                    </h2>
                    <p className="text-slate-600 max-w-2xl mt-3 leading-relaxed">
                        Club 720 offers a range of innovative tools and resources to help you
                        succeed on your path to homeownership.
                    </p>
                </div>

                <button
                    className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-7 py-3 rounded-lg shadow 
          transition-all flex items-center gap-2 self-start lg:self-auto"
                >
                    GET PERSONALIZED SUPPORT →
                </button>
            </div>

            {/* Card Grid */}
            <div className="mt-14 flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
                {items.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white rounded-2xl shadow-[0_8px_18px_rgba(0,0,0,0.08)] p-6 w-full sm:w-[420px] lg:w-[500px] 
            flex gap-5 items-start hover:shadow-lg transition-all"
                    >
                        <div className="bg-cyan-100 rounded-xl p-3">
                            <BarChart3 className="w-8 h-8 text-cyan-500" />
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-slate-900 mb-1">
                                {item.title}
                            </h3>
                            <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
