import Link from "next/link";

export default function PersonalizedSupportSection() {
    const cards = [
        {
            title: "Down Payment Assistance",
            description:
                "Gain access to financial tools, loans, and resources to make homeownership more accessible and affordable.",
            icon: (
                <svg className="h-8 w-8 text-slate-900 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            ),
        },
        {
            title: "Financial Education & Workshops",
            description:
                "Learn secrets to budgeting, saving, and building wealth through our expert-led courses and workshops.",
            icon: (
                <svg className="h-8 w-8 text-slate-900 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
            ),
        },
        {
            title: "Homeownership Financial Tools",
            description:
                "Plan your financial future with calculators that help you determine home affordability, track wealth-building, estimate mortgage payments, and decide whether to buy or rent.",
            icon: (
                <svg className="h-8 w-8 text-slate-900 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
            ),
        },
        {
            title: "Personal Coaching & Mentoring",
            description:
                "Take advantage of our coaching services whether it's through a custom coaching report based on your current credit situation or one-on-one mentoring.",
            icon: (
                <svg className="h-8 w-8 text-slate-900 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
        },
    ];

    return (
        <section className="w-full py-12 md:py-24 bg-slate-50 dark:bg-zinc-900">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                    Personalized Support & Tools for Homeownership
                </h2>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className="group flex flex-col justify-between rounded-xl bg-white p-8 shadow-sm transition-all hover:shadow-md dark:bg-black"
                        >
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    {card.icon}
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                                        {card.title}
                                    </h3>
                                </div>
                                <p className="text-slate-600 dark:text-slate-300">
                                    {card.description}
                                </p>
                            </div>

                            <div className="mt-8">
                                <Link
                                    href="#"
                                    className="inline-flex items-center text-base font-bold text-slate-900 decoration-2 underline-offset-4 group-hover:underline dark:text-white"
                                >
                                    Learn More
                                    <span className="ml-2 inline-flex h-8 w-8 items-center justify-center rounded bg-cyan-400 text-white opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-2">
                                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
