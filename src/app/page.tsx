
import { ProfileCard } from "@/components/profile-card";
import { ResumeSection } from "@/components/resume-section";
import { UpdatesFeed } from "@/components/updates-feed";
import { ContactLinks } from "@/components/contact-links";
import { portfolioData } from "@/lib/portfolio-data";

export default function Home() {
  return (
    <div className="space-y-12">
      <ProfileCard
        name={portfolioData.name}
        bio={portfolioData.bio}
        avatarUrl={portfolioData.avatarUrl}
      />

      <UpdatesFeed />

      <ResumeSection />

      <section id="contact" className="text-center py-8">
        <h2 className="text-2xl font-bold font-headline mb-6 text-primary">Get In Touch</h2>
        <ContactLinks />
      </section>
    </div>
  );
}
