import Image from "next/image";
import HomeownershipSection from "@/components/HomeownershipSection";
import PersonalizedSupportSection from "@/components/PersonalizedSupportSection";
import AboutUsSection from "@/components/AboutUsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import Testimonials from "@/components/Testimonials";
import WhyChoseUs from "@/components/WhyChoseUs";
import NewsletterSignup from "@/components/NewsLetterSignUp";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HomeownershipSection />
      <PersonalizedSupportSection />
      <AboutUsSection />
      <HowItWorksSection />
      <WhyChoseUs />
      <Testimonials />
      <NewsletterSignup />
    </main>
  );
}
