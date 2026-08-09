import { HeroSection } from "@/components/home/HeroSection";
import { ArrivalsSection } from "@/components/home/ArrivalsSection";
import { CampaignSection } from "@/components/home/CampaignSection";
import { CategoriesSection } from "@/components/home/CategoriesSection";
import { BestSection } from "@/components/home/BestSection";
import { BoldSection } from "@/components/home/BoldSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ArrivalsSection />
      <CampaignSection />
      <CategoriesSection />
      <BestSection />
      <BoldSection />
    </>
  );
}
