import Banner from '@/components/banner'
import ExploreWhatWeOffer from '@/components/ExploreWhatWeOffer'
import FAQSection from '@/components/FAQSection'
import FeatureSection from '@/components/FeatureCard'
import NewsletterSignup from '@/components/NewsLetterSignUp'
import SimpleProcess from '@/components/SimpleProcess'
import React from 'react'

const page = () => {
    return (
        <div>
            <Banner title="How it works" />
            <FeatureSection />
            <SimpleProcess />
            <ExploreWhatWeOffer />
            <FAQSection />
            <NewsletterSignup />
        </div>
    )
}

export default page