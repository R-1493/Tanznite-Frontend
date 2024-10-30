import { React } from "react";
import HeroHomeSection from "../components/Hero/HeroHomeSection";
import ShopJourneySection from "../components/Hero/ShopJourneySection";
import IntroductionSection from "../components/Hero/IntroductionSection";
export default function HomePage() {
  return (
    <>
      <HeroHomeSection />
      <ShopJourneySection />
      <IntroductionSection />
    </>
  );
}
