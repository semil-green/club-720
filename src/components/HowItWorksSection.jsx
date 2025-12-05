import Image from "next/image";
import Link from "next/link";

export default function HowItWorksSection() {
    return (
        <section className="w-full py-12 md:py-24 bg-white dark:bg-black">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 space-y-4">
                    <div className="flex items-center justify-center gap-2 text-cyan-400 font-bold text-lg">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                        Work Process
                    </div>
                    <h2 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                        How Club 720 Works
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                        We simplify how prospective homebuyers achieve homeownership and financial empowerment.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">

                    {/* Left Column: Cards 1 & 2 */}
                    <div className="flex-1 w-full space-y-8">
                        {/* Card 1 */}
                        <div className="group relative bg-white dark:bg-zinc-900 rounded-xl p-8 shadow-sm border border-transparent transition-all hover:shadow-lg hover:border-cyan-400">
                            <div className="flex gap-6">
                                <div className="flex-shrink-0">
                                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-50 text-3xl font-bold text-cyan-400 dark:bg-cyan-900/20">
                                        1
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                                        Register & Sign In
                                    </h3>
                                    <p className="text-slate-600 dark:text-slate-300">
                                        Download our free app or click the blue 'Get Started' button at the top of the screen.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="group relative bg-white dark:bg-zinc-900 rounded-xl p-8 shadow-sm border border-transparent transition-all hover:shadow-lg hover:border-cyan-400">
                            <div className="flex gap-6">
                                <div className="flex-shrink-0">
                                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-50 text-3xl font-bold text-cyan-400 dark:bg-cyan-900/20">
                                        2
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                                        Check Eligibility for Available Programs
                                    </h3>
                                    <p className="text-slate-600 dark:text-slate-300">
                                        Decide which programs you may be eligible for based on information you share.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Center Column: Image */}
                    <div className="flex-1 w-full flex justify-center order-last lg:order-none py-8 lg:py-0">
                        <div className="relative w-[300px] h-[400px] sm:w-[350px] sm:h-[450px]">
                            <Image
                                src="https://picsum.photos/400/600?random=20"
                                alt="Person using app"
                                fill
                                className="object-cover rounded-full"
                            />
                        </div>
                    </div>

                    {/* Right Column: Cards 3 & 4 */}
                    <div className="flex-1 w-full space-y-8">
                        {/* Card 3 */}
                        <div className="group relative bg-white dark:bg-zinc-900 rounded-xl p-8 shadow-sm border border-transparent transition-all hover:shadow-lg hover:border-cyan-400">
                            <div className="flex gap-6">
                                <div className="flex-shrink-0">
                                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-50 text-3xl font-bold text-cyan-400 dark:bg-cyan-900/20">
                                        3
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                                        Coaching & Education
                                    </h3>
                                    <p className="text-slate-600 dark:text-slate-300">
                                        Take advantage of our free calculators, courses, workshops, and coaching services.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="group relative bg-white dark:bg-zinc-900 rounded-xl p-8 shadow-sm border border-transparent transition-all hover:shadow-lg hover:border-cyan-400">
                            <div className="flex gap-6">
                                <div className="flex-shrink-0">
                                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-50 text-3xl font-bold text-cyan-400 dark:bg-cyan-900/20">
                                        4
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                                        Connect with Experts
                                    </h3>
                                    <p className="text-slate-600 dark:text-slate-300">
                                        Work with our trusted program partners, including lenders and coaches, to achieve your goals.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="mt-16 text-center">
                    <Link
                        href="#"
                        className="inline-flex items-center gap-2 rounded bg-cyan-400 px-8 py-4 text-sm font-bold text-white transition-all hover:bg-cyan-500 hover:shadow-lg hover:shadow-cyan-400/30"
                    >
                        START YOUR JOURNEY
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
}
