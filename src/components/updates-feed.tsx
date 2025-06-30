
"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Send, ImagePlus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { portfolioData } from "@/lib/portfolio-data";

type Update = {
  id: number;
  author: string;
  date: string;
  text: string;
  imageUrl?: string;
  imageHint?: string;
};

const initialUpdates: Update[] = portfolioData.initialUpdates.map((update) => ({
  ...update,
  author: portfolioData.name,
}));

export function UpdatesFeed() {
  const [updates, setUpdates] = useState<Update[]>(initialUpdates);
  const [updateText, setUpdateText] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handlePostUpdate = () => {
    if (updateText.trim() === "") return;
    const newUpdate: Update = {
      id: Date.now(),
      author: portfolioData.name,
      date: "Just now",
      text: updateText,
    };
    setUpdates([newUpdate, ...updates]);
    setUpdateText("");
    setIsDialogOpen(false);
  };

  return (
    <div className="space-y-8">
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <Card className="hover:bg-muted transition-colors cursor-pointer">
            <CardContent className="p-4 flex items-center gap-4">
              <Avatar>
                <AvatarImage
                  src={portfolioData.avatarUrl}
                  alt={portfolioData.name}
                  data-ai-hint="professional portrait"
                />
                <AvatarFallback>{portfolioData.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <span className="flex-grow text-muted-foreground">
                Start a post
              </span>
              <Button
                variant="ghost"
                size="icon"
                className="pointer-events-none text-muted-foreground"
              >
                <ImagePlus />
              </Button>
            </CardContent>
          </Card>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[525px]">
          <DialogHeader>
            <DialogTitle>Create a post</DialogTitle>
            <DialogDescription>
              Share your latest work or project progress.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <Textarea
              name="updateText"
              placeholder="What have you been working on?"
              value={updateText}
              onChange={(e) => setUpdateText(e.target.value)}
              rows={6}
              className="bg-background"
            />
          </div>
          <DialogFooter>
            <div className="flex flex-wrap justify-between items-center gap-2 w-full">
              <div className="flex gap-2">
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                >
                  <ImagePlus />
                  <span className="sr-only">Add Image</span>
                </Button>
              </div>
              <Button
                type="button"
                onClick={handlePostUpdate}
                disabled={updateText.trim() === ""}
              >
                <Send className="mr-2 h-4 w-4" />
                Post Update
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-primary">Recent Updates</h2>
        {updates.map((update) => (
          <Card key={update.id}>
            <CardContent className="p-6 space-y-4">
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
