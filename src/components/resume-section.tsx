import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Briefcase, GraduationCap, Star } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

export function ResumeSection() {
  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between">
        <div>
          <CardTitle className="text-2xl text-primary">Resume</CardTitle>
          <CardDescription>My professional experience and skills.</CardDescription>
        </div>
        <Button variant="ghost" size="lg" asChild className="shrink-0">
          <a href="/placeholder-resume.pdf" download>
            <Download className="mr-2 h-5 w-5" />
            <span className="hidden sm:inline">Download</span>
          </a>
        </Button>
      </CardHeader>
      <CardContent className="space-y-8">
        <div>
          <h3 className="mb-4 flex items-center text-xl font-semibold text-primary">
            <Briefcase className="mr-3 h-5 w-5" />
            Experience
          </h3>
          <div className="space-y-6 pl-8">
            <div className="relative border-l border-border pl-6">
              <div className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-primary"></div>
              <h4 className="font-bold">Senior Software Engineer</h4>
              <p className="text-sm text-muted-foreground">
                Tech Corp Inc. | 2020 - Present
              </p>
              <p className="mt-1">
                Leading development of scalable web applications using React,
                Next.js, and TypeScript.
              </p>
            </div>
            <div className="relative border-l border-border pl-6">
              <div className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-primary"></div>
              <h4 className="font-bold">Software Engineer</h4>
              <p className="text-sm text-muted-foreground">
                Innovate LLC | 2018 - 2020
              </p>
              <p className="mt-1">
                Developed and maintained features for a large-scale e-commerce
                platform.
              </p>
            </div>
          </div>
        </div>
        <Separator />
        <div>
          <h3 className="mb-4 flex items-center text-xl font-semibold text-primary">
            <GraduationCap className="mr-3 h-5 w-5" />
            Education
          </h3>
          <div className="space-y-4 pl-8">
            <div className="relative border-l border-border pl-6">
             <div className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-primary"></div>
              <h4 className="font-bold">B.S. in Computer Science</h4>
              <p className="text-sm text-muted-foreground">
                University of Technology | 2014 - 2018
              </p>
            </div>
          </div>
        </div>
        <Separator />
        <div>
          <h3 className="mb-4 flex items-center text-xl font-semibold text-primary">
            <Star className="mr-3 h-5 w-5" />
            Skills
          </h3>
          <div className="flex flex-wrap gap-2 pl-8">
            {[
              "React",
              "Next.js",
              "TypeScript",
              "Node.js",
              "Tailwind CSS",
              "Firebase",
              "GenAI",
            ].map((skill) => (
              <Badge key={skill} variant="secondary">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
