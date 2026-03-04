import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { FeaturedProperties } from "@/components/sections/FeaturedProperties";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTASection } from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <Layout>
      <HeroSection />
      <StatsSection />
      <FeaturedProperties />
      <WhyChooseUs />
      <Testimonials />
      <CTASection />
    </Layout>
  );
}
