import { ProfileCard } from "@/components/profile-card";
import { ResumeSection } from "@/components/resume-section";
import { UpdatesFeed } from "@/components/updates-feed";
import { ContactLinks } from "@/components/contact-links";

export default function Home() {
  return (
    <div className="space-y-12">
      <ProfileCard
        name="Alex Doe"
        bio="Senior Software Engineer specializing in Next.js, AI, and creating beautiful user experiences."
        avatarUrl="https://placehold.co/150x150.png"
      />

      <UpdatesFeed />

      <ResumeSection />

      <section id="contact" className="text-center py-8">
        <h2 className="text-2xl font-bold mb-6 text-primary">Get In Touch</h2>
        <ContactLinks />
      </section>
    </div>
  );
}
