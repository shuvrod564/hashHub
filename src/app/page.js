import AboutTools from "@/components/AboutTools";
import CallToActionSection from "@/components/CallToActionSection";
import FAQsSection from "@/components/FAQsSection";
import Features from "@/components/Features";
import HomeHeader from "@/components/HomeHeader";
import HowItWork from "@/components/HowItWork";
import Image from "next/image";

export default function Home() {
  return (
    <>
      
      {/* Header SECTION START */}
      <HomeHeader />
      {/* Header SECTION END */}

      {/* FEATURE SECTION START */}
      <Features />
      {/* FEATURE SECTION END */}

      {/* FEATURE SECTION START */}
      <HowItWork />
      {/* FEATURE SECTION END */}

      {/* ABOUT TOOLS SECTION START */}
      <AboutTools />
      {/* ABOUT TOOLS SECTION END */}

      {/* ABOUT TOOLS SECTION START */}
      <FAQsSection />
      {/* ABOUT TOOLS SECTION END */}

      {/* CALL TO ACTION SECTION START */}
      <CallToActionSection />
      {/* CALL TO ACTION SECTION END */}


    </>
  );
}
