"use client";
import { UserPlus, Wrench, UsersRound } from "lucide-react";

export default function SimpleProcess() {
    const steps = [
        {
            id: 1,
            img: "https://picsum.photos/1200/400?random=1",
            icon: <UserPlus className="w-7 h-7 text-cyan-500" />,
            title: "Sign Up & Create Your Profile",
            desc: `Download the free Club 720 app or click the ‘Get Started’ button.
      Complete your profile and set your financial and home ownership goals.`,
            extra: `What You’ll Get: Users will be given full access to our powerful suite of tools.`,
        },
        {
            id: 2,
            img: "https://picsum.photos/1200/400?random=1",
            icon: <Wrench className="w-7 h-7 text-cyan-500" />,
            title: "Explore Our Tools",
            desc: `Use our virtual coach to find opportunities to improve your credit score or increase savings.`,
            extra: `Why This Matters: Our tools and recommendations are tailored to your needs.`,
        },
        {
            id: 3,
            img: "https://picsum.photos/1200/400?random=1",
            icon: <UsersRound className="w-7 h-7 text-cyan-500" />,
            title: "Connect With Experts & Coaches",
            desc: `Get matched with a Club 720 Coach and access exclusive Club 720 services.`,
            extra: `The Difference: We connect you with trusted partners who guide you every step of the way.`,
        },
        {
            id: 4,
            img: "https://picsum.photos/1200/400?random=1",
            icon: <UsersRound className="w-7 h-7 text-cyan-500" />,
            title: "Connect With Experts & Coaches",
            desc: `Get matched with a Club 720 Coach and access exclusive Club 720 services.`,
            extra: `The Difference: We connect you with trusted partners who guide you every step of the way.`,
        },
        {
            id: 5,
            img: "https://picsum.photos/1200/400?random=1",
            icon: <UsersRound className="w-7 h-7 text-cyan-500" />,
            title: "Connect With Experts & Coaches",
            desc: `Get matched with a Club 720 Coach and access exclusive Club 720 services.`,
            extra: `The Difference: We connect you with trusted partners who guide you every step of the way.`,
        },
    ];

    return (
        <section className="bg-cyan-50 py-20 px-4">
            <div className="max-w-7xl mx-auto text-center mb-14">
                <p className="text-cyan-500 font-semibold text-lg flex justify-center items-center gap-2 mb-2">
                    <span>📈</span> Step-By-Step Guide
                </p>
                <h2 className="text-4xl font-bold text-slate-900">
                    Follow Our Simple Process
                </h2>
            </div>

            {/* Responsive card grid */}
            <div className="flex flex-wrap justify-center gap-10">
                {steps.map((step) => (
                    <div
                        key={step.id}
                        className="relative bg-white w-full sm:w-[430px] md:w-[410px] lg:w-[390px] xl:w-[360px] 
            rounded-2xl shadow-[0_8px_20px_rgba(0,0,0,0.08)] p-6 hover:shadow-lg transition-all"
                    >
                        {/* Step image + number */}
                        <div className="flex justify-center -mt-20 mb-4">
                            <div className="relative">
                                <img
                                    src={step.img}
                                    className="w-40 h-40 object-cover rounded-full border-[6px] border-white shadow-md"
                                    alt=""
                                />
                                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white w-12 h-12 rounded-full shadow text-lg
                font-bold flex items-center justify-center border border-gray-100">
                                    {step.id}
                                </div>
                            </div>
                        </div>

                        {/* Text */}
                        <div className="text-left px-2">
                            {step.icon}
                            <h3 className="text-lg font-semibold text-slate-900 mt-2 mb-3">
                                {step.title}
                            </h3>
                            <p className="text-slate-600 leading-relaxed mb-3">{step.desc}</p>
                            <p className="text-slate-600 leading-relaxed font-medium">
                                {step.extra}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
