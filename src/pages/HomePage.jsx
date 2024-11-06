import { React } from "react";
import HeroHomeSection from "../components/Hero/HeroHomeSection";
import ShopJourneySection from "../components/Hero/ShopJourneySection";
import IntroductionSection from "../components/Hero/IntroductionSection";
import FormWithValidation from "../components/Form/FormWithValidation";
export default function HomePage() {
  return (
    <>
      <FormWithValidation />
      <HeroHomeSection />
      <ShopJourneySection />
      <IntroductionSection />
    </>
  );
}
