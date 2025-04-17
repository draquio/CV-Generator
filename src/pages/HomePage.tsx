import { FeaturesSection } from "@/components/homesection/FeaturesSection";
import { HeroSection } from "@/components/homesection/HeroSection";
import { ImportSection } from "@/components/homesection/ImportSection";
import { QuestionSection } from "@/components/homesection/QuestionSection";

import React from "react";

const HomePage = () => {
  return (
    <>
    <HeroSection />
    <FeaturesSection />
    <QuestionSection />
    <ImportSection />
    </>
  );
};

export default HomePage;
