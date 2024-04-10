import HeroSection from "@/components/hero-section";
import { siteConfig } from "@/config/site";

export default function Home() {
  return (
    <HeroSection
      title={siteConfig.title}
      description={siteConfig.description}
    />
  );
}
