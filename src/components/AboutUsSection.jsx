import Image from "next/image";
import Link from "next/link";

export default function AboutUsSection() {
    return (
        <section className="w-full py-12 md:py-24 bg-cyan-50/50 dark:bg-zinc-900/50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col-reverse gap-12 lg:flex-row lg:items-center lg:gap-16">

                    {/* Text Content - Left on Desktop, Bottom on Mobile */}
                    <div className="flex-1 space-y-6">
                        <div className="flex items-center gap-2 text-cyan-400 font-bold text-lg">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg>
                            About Us
                        </div>

                        <h2 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                            Club 720: Who We Are
                        </h2>

                        <div className="space-y-4 text-lg text-slate-600 dark:text-slate-300">
                            <p>
                                At Club 720, we believe homeownership and financial empowerment
                                should be accessible for everyone. As a cutting-edge fintech (the use of
                                technology to deliver financial services and products to consumers)
                                platform, we connect prospective homebuyers with banks, lenders, and
                                education coaches via one seamless marketplace.
                            </p>
                            <p>
                                We believe in a world where every individual has the opportunity to build
                                wealth through homeownership that will strengthen communities and
                                transform lives.
                            </p>
                            <p>
                                Download the Club 720 app today and start building your future!
                            </p>
                        </div>

                        <div className="pt-4">
                            <Link
                                href="#"
                                className="inline-flex items-center gap-2 rounded bg-cyan-400 px-8 py-3.5 text-sm font-bold text-white transition-all hover:bg-cyan-500 hover:shadow-lg hover:shadow-cyan-400/30"
                            >
                                DISCOVER MORE
                                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </Link>
                        </div>
                    </div>

                    {/* Image Collage - Right on Desktop, Top on Mobile */}
                    <div className="relative w-full h-[400px] sm:h-[500px] lg:flex-1 lg:h-[600px]">
                        {/* Image 1: Top Right */}
                        <div className="absolute top-0 right-0 w-[70%] h-[65%] rounded-3xl overflow-hidden shadow-xl z-10">
                            <Image
                                src="https://picsum.photos/600/400?random=10"
                                alt="Couple moving boxes"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Image 2: Bottom Left */}
                        <div className="absolute bottom-0 left-0 w-[70%] h-[65%] rounded-3xl overflow-hidden shadow-xl z-20 border-8 border-white dark:border-zinc-900">
                            <Image
                                src="https://picsum.photos/600/400?random=11"
                                alt="Couple sitting on floor"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
