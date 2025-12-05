import Banner from '@/components/banner'
import FeatureSection from '@/components/FeatureCard'
import MissionVisionSection from '@/components/MissionVisionSection'
import NewsletterSignup from '@/components/NewsLetterSignUp'
import OurStorySection from '@/components/OurStorySection'
import PartnershipsSection from '@/components/Partnership'
import Testimonials from '@/components/Testimonials'
import WealthCircleSection from '@/components/WealthCircleSection'
import React from 'react'

const page = () => {
    return (
        <>
            <Banner title="About us" />
            <FeatureSection />
            <MissionVisionSection />
            <WealthCircleSection />
            <OurStorySection />
            <PartnershipsSection />
            <div className="flex min-h-screen flex-col items-center justify-between">
                <Testimonials />
                <NewsletterSignup />
            </div>
        </>
    )
}

export default page