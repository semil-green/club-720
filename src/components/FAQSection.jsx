"use client";
import { useState } from "react";
import { ChartLine, ChevronRight } from "lucide-react";

export default function FAQSection() {
    const faqs = [
        { q: "What can the Down Payment Assistance (DPA) Programs be used for?", a: "DPA can be used toward closing costs, down payments, and other qualifying home purchase expenses." },
        { q: "What do you mean when you say the DPA comes with an “affordable mortgage”?", a: "It means the mortgage terms are structured to be manageable with reasonable rates." },
        { q: "I want to buy a home, where do I start?", a: "Start by learning eligibility requirements and applying for a pre-assessment to understand your options." },
        { q: "Can I bring my own lender?", a: "Yes, you can — as long as your lender participates in approved DPA programs." },
        { q: "How much down payment assistance do I qualify for?", a: "Your qualification amount depends on income, location, and DPA provider guidelines." },
    ];

    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section className="px-4 py-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

                {/* Left Section */}
                <div>
                    <p className="text-cyan-600 font-semibold flex items-center gap-2 text-lg">
                        <ChartLine className="w-6 h-6 text-cyan-500" />
                        FAQ
                    </p>

                    <h2 className="text-4xl font-bold text-slate-900 mt-2 leading-tight">
                        Helping <br /> Homebuyers
                    </h2>

                    <p className="text-slate-600 max-w-md mt-4 leading-relaxed">
                        Here are answers to common questions about down payment assistance.
                    </p>
                </div>

                {/* Right Section / FAQ Dropdown */}
                <div className="space-y-5">
                    {faqs.map((item, idx) => {
                        const open = openIndex === idx;
                        return (
                            <div
                                key={idx}
                                className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition"
                            >
                                <button
                                    onClick={() => setOpenIndex(open ? null : idx)}
                                    className="w-full flex justify-between items-center p-5 text-left"
                                >
                                    <span className="text-lg font-medium text-slate-900">
                                        {item.q}
                                    </span>
                                    <ChevronRight
                                        className={`w-6 h-6 text-slate-500 transition-transform duration-200 
                      ${open ? "rotate-90 text-cyan-500" : ""}`}
                                    />
                                </button>

                                {open && (
                                    <div className="px-5 pb-5 text-slate-600 border-t border-slate-200 leading-relaxed">
                                        {item.a}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
