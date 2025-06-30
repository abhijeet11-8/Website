
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin } from "lucide-react";
import { portfolioData } from "@/lib/portfolio-data";

export function ContactLinks() {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      <Button variant="outline" asChild>
        <a href={`mailto:${portfolioData.contact.email}`}>
          <Mail className="mr-2 h-4 w-4" /> Email
        </a>
      </Button>
      <Button variant="outline" asChild>
        <a
          href={portfolioData.contact.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github className="mr-2 h-4 w-4" /> GitHub
        </a>
      </Button>
      <Button variant="outline" asChild>
        <a
          href={portfolioData.contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
        </a>
      </Button>
    </div>
  );
}
