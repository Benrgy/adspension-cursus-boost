import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhatIsAmazonFBA from "@/components/WhatIsAmazonFBA";
import WhatYouWillLearn from "@/components/WhatYouWillLearn";
import FounderBio from "@/components/FounderBio";
import CourseContents from "@/components/CourseContents";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <WhatIsAmazonFBA />
      <WhatYouWillLearn />
      <FounderBio />
      <CourseContents />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Index;
