
"use client";

import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { portfolioData } from "@/lib/portfolio-data";

const initialUpdates = portfolioData.initialUpdates.map((update) => ({
  ...update,
  author: portfolioData.name,
}));

export function UpdatesFeed() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-headline bg-gradient-to-r from-chart-2 to-chart-4 bg-clip-text text-transparent">
          Recent Updates
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-6">
          {initialUpdates.map((update, index) => (
            <div key={update.id}>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage
                      src={portfolioData.avatarUrl}
                      alt={update.author}
                    />
                    <AvatarFallback>{update.author.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{update.author}</p>
                    <p className="text-sm text-muted-foreground">
                      {update.date}
                    </p>
                  </div>
                </div>
                <p className="whitespace-pre-wrap text-foreground/90">
                  {update.text}
                </p>
                {update.imageUrl && (
                  <div className="mt-4 overflow-hidden rounded-lg border border-border">
                    <Image
                      src={update.imageUrl}
                      alt="Update image"
                      width={800}
                      height={450}
                      className="h-auto w-full object-cover"
                      data-ai-hint={update.imageHint}
                    />
                  </div>
                )}
              </div>
              {index < initialUpdates.length - 1 && (
                <Separator className="mt-6" />
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
