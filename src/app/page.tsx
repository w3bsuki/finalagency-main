import { HeroSection } from "@/components/shared/sections/hero";
import { AiOverview } from "@/components/shared/sections/ai-overview";
import { AgentsPreview } from "@/components/shared/sections/agents-preview";
import { Solutions } from "@/components/shared/sections/solutions";
import { ContactSection } from "@/components/shared/sections/contact";
import { MarqueeSection } from "@/components/shared/sections/marquee-section";

export default function Page() {
  return (
    <main className="relative w-full">
      <HeroSection />
      <AiOverview />
      <Solutions />
      <AgentsPreview />
      <MarqueeSection />
      <ContactSection />
    </main>
  );
}
