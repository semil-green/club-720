"use client";
import { TrendingUp, Star } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function Testimonials() {

    const testimonials = [
        {
            id: 1,
            quote: "Thank you for all your help! I reached out to my lender yesterday. This has been a great experience.",
            author: "Debra",
            year: 2025,
            rating: 5
        },
        {
            id: 2,
            quote: "Club 720 helped me improve my credit score and finally get approved for my dream home. The process was smooth and the team was incredibly supportive.",
            author: "Michael",
            year: 2025,
            rating: 5
        },
        {
            id: 3,
            quote: "I never thought I could qualify for a mortgage, but Club 720 guided me every step of the way. Now I'm a proud homeowner!",
            author: "Sarah",
            year: 2024,
            rating: 5
        },
        {
            id: 4,
            quote: "The expertise and dedication of the Club 720 team made all the difference. They turned my homeownership dream into reality.",
            author: "James",
            year: 2024,
            rating: 5
        }
    ];
    return (
        <div className=" w-full py-12 md:py-24  overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100 ">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12 sm:mb-16">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7 text-cyan-400" strokeWidth={2.5} />
                        <span className="text-cyan-400 font-semibold text-lg sm:text-xl">
                            Testimonials
                        </span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
                        Club 720: Success Stories
                    </h1>

                    <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed px-4">
                        Find out how we've helped individuals and families achieve the dream of homeownership!
                    </p>
                </div>

                <div className="relative ">
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        pagination={{
                            clickable: true,
                            bulletActiveClass: 'swiper-pagination-bullet-active-custom',
                        }}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        className="testimonials-swiper w-full"
                    >
                        {testimonials.map((testimonial) => (
                            <SwiperSlide key={testimonial.id}>
                                <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10 md:p-12 w-full mb-12">
                                    <div className="flex gap-1 mb-6">
                                        {[...Array(testimonial.rating)].map((_, index) => (
                                            <Star
                                                key={index}
                                                className="w-6 h-6 sm:w-7 sm:h-7 fill-yellow-400 text-yellow-400"
                                            />
                                        ))}
                                    </div>

                                    <blockquote className="text-gray-700 text-lg sm:text-xl md:text-2xl leading-relaxed mb-6 sm:mb-8">
                                        "{testimonial.quote}"
                                    </blockquote>

                                    <p className="text-gray-900 font-semibold text-base sm:text-lg">
                                        {testimonial.author}, {testimonial.year}
                                    </p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

            </div>

        </div>
    );
}

export default Testimonials;
