import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin } from "lucide-react";

export function ContactLinks() {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      <Button variant="outline" asChild>
        <a href="mailto:your-email@example.com">
          <Mail className="mr-2 h-4 w-4" /> Email
        </a>
      </Button>
      <Button variant="outline" asChild>
        <a
          href="https://github.com/your-username"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github className="mr-2 h-4 w-4" /> GitHub
        </a>
      </Button>
      <Button variant="outline" asChild>
        <a
          href="https://linkedin.com/in/your-username"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
        </a>
      </Button>
    </div>
  );
}
