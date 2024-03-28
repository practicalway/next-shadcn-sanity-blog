import HeroSection from "@/components/hero-section";
import { SiteFooter } from "@/components/layout/footer";

export default function Home() {
  return (
    <main className="min-h-screen antialiased">
      <HeroSection />
      <SiteFooter />
    </main>
  );
}
