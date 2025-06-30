
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
import { portfolioData } from "@/lib/portfolio-data";

export function ResumeSection() {
  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between">
        <div>
          <CardTitle className="text-2xl font-headline text-primary">Resume</CardTitle>
          <CardDescription>My professional experience and skills.</CardDescription>
        </div>
        <Button variant="ghost" size="lg" asChild className="shrink-0">
          <a href={portfolioData.resumeUrl} download>
            <Download className="mr-2 h-5 w-5" />
            <span className="hidden sm:inline">Download</span>
          </a>
        </Button>
      </CardHeader>
      <CardContent className="space-y-8">
        <div>
          <h3 className="mb-4 flex items-center text-xl font-semibold font-headline text-primary">
            <Briefcase className="mr-3 h-5 w-5" />
            Experience
          </h3>
          <div className="space-y-6 pl-4 md:pl-8">
            {portfolioData.experience.map((job, index) => (
              <div key={index} className="relative border-l border-border pl-4 md:pl-6">
                <div className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-primary"></div>
                <h4 className="font-bold">{job.title}</h4>
                <p className="text-sm text-muted-foreground">
                  {job.company} | {job.date}
                </p>
                <p className="mt-1">{job.description}</p>
              </div>
            ))}
          </div>
        </div>
        <Separator />
        <div>
          <h3 className="mb-4 flex items-center text-xl font-semibold font-headline text-primary">
            <GraduationCap className="mr-3 h-5 w-5" />
            Education
          </h3>
          <div className="space-y-4 pl-4 md:pl-8">
            {portfolioData.education.map((edu, index) => (
              <div key={index} className="relative border-l border-border pl-4 md:pl-6">
               <div className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-primary"></div>
                <h4 className="font-bold">{edu.degree}</h4>
                <p className="text-sm text-muted-foreground">
                  {edu.institution} | {edu.date}
                </p>
              </div>
            ))}
          </div>
        </div>
        <Separator />
        <div>
          <h3 className="mb-4 flex items-center text-xl font-semibold font-headline text-primary">
            <Star className="mr-3 h-5 w-5" />
            Skills
          </h3>
          <div className="flex flex-wrap gap-2 pl-4 md:pl-8">
            {portfolioData.skills.map((skill) => (
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
