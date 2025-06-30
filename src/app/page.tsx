
import { ProfileCard } from "@/components/profile-card";
import { ResumeSection } from "@/components/resume-section";
import { UpdatesFeed } from "@/components/updates-feed";
import { ContactLinks } from "@/components/contact-links";
import { portfolioData } from "@/lib/portfolio-data";

export default function Home() {
  return (
    <div className="space-y-12">
      <div className="space-y-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold font-headline text-primary">
            About Me
          </h1>
          <p className="mt-2 text-lg text-muted-foreground">
            A brief summary of my work.
          </p>
        </div>
        <ProfileCard
          name={portfolioData.name}
          bio={portfolioData.bio}
          avatarUrl={portfolioData.avatarUrl}
        />
      </div>

      <UpdatesFeed />

      <ResumeSection />

      <section id="contact" className="text-center py-8">
        <h2 className="text-2xl font-bold font-headline mb-6 text-primary">
          Get In Touch
        </h2>
        <ContactLinks />
      </section>
    </div>
  );
}
