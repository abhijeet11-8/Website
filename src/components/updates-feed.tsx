
"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { portfolioData } from "@/lib/portfolio-data";

const initialUpdates = portfolioData.initialUpdates.map((update) => ({
  ...update,
  author: portfolioData.name,
}));

export function UpdatesFeed() {
  return (
    <div className="space-y-8">
      <div className="space-y-6">
        <h2 className="text-2xl font-bold font-headline text-primary">Recent Updates</h2>
        {initialUpdates.map((update) => (
          <Card key={update.id}>
            <CardContent className="p-6 space-y-4">
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
                  <p className="text-sm text-muted-foreground">{update.date}</p>
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
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
