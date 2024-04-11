import HeroSection from "@/components/hero-section";
import Newsletter from "@/components/ui/newsletter";
import { siteConfig } from "@/config/site";

export default function Home() {
  return (
    <>
      <HeroSection
        title={siteConfig.title}
        description={siteConfig.description}
      />
      <Newsletter />
    </>
  );
}
