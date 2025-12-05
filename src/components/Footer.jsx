import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full py-12 md:py-24 bg-gradient-to-br from-cyan-50 to-blue-50 mt-10">
            <div className="max-w-7xl mx-auto px-6 md:px-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

                    {/* Logo + Mission */}
                    <div>
                        <div className="flex items-center">
                            <Link href="/" className="flex items-center gap-2">
                                {/* Placeholder for Logo based on image */}
                                <div className="text-2xl font-bold text-cyan-400">
                                    <span className="border-b-2 border-l-2 border-cyan-400 pb-1 pl-1 inline-block leading-none" style={{ transform: 'skewX(-10deg)' }}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block stroke-current stroke-2">
                                            <path d="M22 2L11 13" />
                                            <path d="M22 2L15 22" />
                                            <path d="M2 22L11 13" />
                                        </svg>
                                    </span>
                                    <span className="ml-2 text-cyan-400">Club 720</span>
                                </div>
                            </Link>
                        </div>
                        <p className="text-slate-800 text-md font-medium mt-4 ">
                            Our Mission: Bridge housing and wealth gaps, one home at a time
                        </p>

                        <div className="flex gap-3 text-slate-900 text-2xl">
                            <i className="fa-brands fa-facebook cursor-pointer"></i>
                            <i className="fa-brands fa-instagram cursor-pointer"></i>
                            <i className="fa-brands fa-linkedin cursor-pointer"></i>
                        </div>
                    </div>

                    {/* Company Info */}
                    <div>
                        <h3 className="font-semibold text-xl text-slate-900 mb-3 border-b-2 border-cyan-600 inline-block">
                            Company Info
                        </h3>
                        <ul className="space-y-2 text-slate-800 font-medium">
                            <li>About</li>
                            <li>How It Works</li>
                            <li>Privacy Policy</li>
                            <li>Terms & Conditions</li>
                        </ul>
                    </div>

                    {/* Partner With Us */}
                    <div>
                        <h3 className="font-semibold text-xl text-slate-900 mb-3 border-b-2 border-cyan-600 inline-block">
                            Partner With Us
                        </h3>
                        <ul className="space-y-2 text-slate-800 font-medium">
                            <li>Lenders</li>
                            <li>Realtors</li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold text-xl text-slate-900 mb-3 border-b-2 border-cyan-600 inline-block">
                            Quick Links
                        </h3>
                        <ul className="space-y-2 text-slate-800 font-medium">
                            <li>Down Payment Assistance Programs</li>
                            <li>Trainings</li>
                            <li>Blog</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-semibold text-xl text-slate-900 mb-3 border-b-2 border-cyan-600 inline-block">
                            Contact
                        </h3>

                        <div className="flex items-center gap-2 mb-4">
                            <i className="fa-solid fa-envelope text-slate-900"></i>
                            <span className="text-slate-800 font-medium">support@club720.org</span>
                        </div>

                        <p className="text-slate-800 font-medium mb-3">
                            Scan & download the free mobile app.
                        </p>

                        <div className="flex gap-6">
                            <div>
                                <p className="text-xs font-medium text-slate-800 mb-1">For iOS:</p>
                                <img src="/qr.png" alt="iOS QR" className="h-20 w-20 rounded-md" />
                            </div>
                            <div>
                                <p className="text-xs font-medium text-slate-800 mb-1">For Android:</p>
                                <img src="/qr.png" alt="Android QR" className="h-20 w-20 rounded-md" />
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </footer>
    );
}
