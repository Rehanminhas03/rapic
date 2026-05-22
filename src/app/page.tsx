import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturedProperties } from "@/components/sections/FeaturedProperties";
import { BlueAreaShowcase } from "@/components/sections/BlueAreaShowcase";
import { AboutMission } from "@/components/sections/AboutMission";
import { WhyChooseRapic } from "@/components/sections/WhyChooseRapic";
import { VideoShowcase } from "@/components/sections/VideoShowcase";
import { SectorsShowcase } from "@/components/sections/SectorsShowcase";
import { TrustedLandlords } from "@/components/sections/TrustedLandlords";
import { RentalTipsPreview } from "@/components/sections/RentalTipsPreview";
import { MobileAppComingSoon } from "@/components/sections/MobileAppComingSoon";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedProperties />
      <BlueAreaShowcase />
      <AboutMission />
      <WhyChooseRapic />
      <VideoShowcase />
      <SectorsShowcase />
      <TrustedLandlords />
      <RentalTipsPreview />
      <MobileAppComingSoon />
      <ContactSection />
    </>
  );
}
