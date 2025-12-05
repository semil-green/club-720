import Image from "next/image";

export default function HomeownershipSection() {
    return (
        <section className="w-full py-12 md:py-24 bg-white dark:bg-black overflow-hidden">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col-reverse gap-12 lg:flex-row lg:items-center lg:gap-16">

                    {/* Text Content - Left on Desktop, Bottom on Mobile */}
                    <div className="flex-1 space-y-8 text-center lg:text-left flex flex-col items-center lg:items-start">
                        <div className="space-y-4">
                            <h2 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
                                Your Path to Homeownership
                            </h2>
                            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl">
                                Club 720 connects prospective homebuyers to homeownership through
                                tools, coaches, and financial assistance to empower wealth through
                                home equity.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 w-full max-w-2xl lg:max-w-none">
                            <div className="flex flex-col items-center sm:flex-row sm:items-start gap-4">
                                <div className="rounded-lg bg-cyan-50 p-3 dark:bg-cyan-900/20">
                                    <svg className="h-8 w-8 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                {/* <div>
                                    <div className="text-3xl font-bold text-slate-900 dark:text-white">11000</div>
                                    <div className="text-sm font-medium text-slate-500 dark:text-slate-400">Served</div>
                                </div> */}
                                <div>
                                    <div className="text-3xl font-bold text-slate-900 dark:text-white counter-11000"></div>
                                    <div className="text-sm font-medium text-slate-500 dark:text-slate-400">Served</div>
                                </div>

                            </div>
                            <div className="flex flex-col items-center sm:flex-row sm:items-start gap-4">
                                <div className="rounded-lg bg-cyan-50 p-3 dark:bg-cyan-900/20">
                                    <svg className="h-8 w-8 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                {/* <div>
                                    <div className="text-3xl font-bold text-slate-900 dark:text-white">100 %</div>
                                    <div className="text-sm font-medium text-slate-500 dark:text-slate-400">Educational Support</div>
                                </div> */}
                                <div>
                                    <div className="text-3xl font-bold text-slate-900 dark:text-white counter-100"></div>
                                    <div className="text-sm font-medium text-slate-500 dark:text-slate-400">Educational Support</div>
                                </div>

                            </div>
                        </div>

                        <div>
                            <button className="inline-flex items-center gap-2 rounded bg-cyan-400 px-8 py-4 text-sm font-bold text-white transition-all hover:bg-cyan-500 hover:shadow-lg hover:shadow-cyan-400/30">
                                EXPLORE CLUB 720
                                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Image Collage - Right on Desktop, Top on Mobile */}
                    <div className="flex-1 flex justify-center items-center">
                        <div className="relative w-full max-w-[500px] aspect-square">
                            <div className="grid grid-cols-2 gap-2 w-full h-full">
                                {/* Top Left */}
                                <div className="relative overflow-hidden rounded-tl-full border-2 border-cyan-400 w-full h-full group">
                                    <Image
                                        src="https://picsum.photos/400/400?random=1"
                                        alt="Homeowner"
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                                {/* Top Right */}
                                <div className="relative overflow-hidden rounded-tr-full border-2 border-cyan-400 w-full h-full group">
                                    <Image
                                        src="https://picsum.photos/400/400?random=2"
                                        alt="Family home"
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                                {/* Bottom Left */}
                                <div className="relative overflow-hidden rounded-bl-full border-2 border-cyan-400 w-full h-full group">
                                    <Image
                                        src="https://picsum.photos/400/400?random=3"
                                        alt="Keys"
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                                {/* Bottom Right */}
                                <div className="relative overflow-hidden rounded-br-full border-2 border-cyan-400 w-full h-full group">
                                    <Image
                                        src="https://picsum.photos/400/400?random=4"
                                        alt="Couple"
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                            </div>

                            {/* Center Logo */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-lg ring-4 ring-white dark:bg-zinc-900 dark:ring-zinc-900">
                                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-cyan-400 text-white">
                                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="stroke-current stroke-2">
                                            <path d="M22 2L11 13" />
                                            <path d="M22 2L15 22" />
                                            <path d="M2 22L11 13" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
