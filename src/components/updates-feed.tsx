
"use client";

import { useState, useTransition } from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Sparkles,
  Send,
  Loader2,
  ImagePlus,
  User,
  Calendar,
} from "lucide-react";
import { getSummaryAction } from "@/app/actions";
import { useToast } from "@/hooks/use-toast";
import { Separator } from "./ui/separator";

type Update = {
  id: number;
  author: string;
  date: string;
  text: string;
  imageUrl?: string;
  imageHint?: string;
};

const initialUpdates: Update[] = [
  {
    id: 1,
    author: "Alex Doe",
    date: "2 days ago",
    text: "Just deployed a new version of the project website with improved performance and a refreshed UI. Exciting to see the positive feedback from users already!",
    imageUrl: "https://placehold.co/800x450.png",
    imageHint: "project dashboard",
  },
];

export function UpdatesFeed() {
  const [updates, setUpdates] = useState<Update[]>(initialUpdates);
  const [updateText, setUpdateText] = useState("");
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const handleSummarize = () => {
    startTransition(async () => {
      const result = await getSummaryAction(updateText);
      if (result.error) {
        toast({
          variant: "destructive",
          title: "Error",
          description: result.error,
        });
      } else if (result.summary) {
        setUpdateText(result.summary);
        toast({
          title: "Success!",
          description: "Your update has been summarized.",
        });
      }
    });
  };

  const handlePostUpdate = () => {
    if (updateText.trim() === "") return;
    const newUpdate: Update = {
      id: Date.now(),
      author: "Alex Doe",
      date: "Just now",
      text: updateText,
      // In a real app, you'd handle image uploads
    };
    setUpdates([newUpdate, ...updates]);
    setUpdateText("");
  };

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="font-headline text-2xl">
            Post an Update
          </CardTitle>
          <CardDescription>
            Share your latest work or project progress.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Textarea
              name="updateText"
              placeholder="What have you been working on?"
              value={updateText}
              onChange={(e) => setUpdateText(e.target.value)}
              rows={4}
              className="bg-background"
            />
            <div className="flex flex-wrap justify-between items-center gap-2">
              <div className="flex gap-2">
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  disabled={isPending}
                >
                  <ImagePlus />
                  <span className="sr-only">Add Image</span>
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleSummarize}
                  disabled={isPending || updateText.length < 20}
                >
                  {isPending ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <Sparkles className="mr-2 h-4 w-4" />
                  )}
                  Summarize
                </Button>
              </div>
              <Button
                type="button"
                onClick={handlePostUpdate}
                disabled={isPending || updateText.trim() === ""}
              >
                <Send className="mr-2 h-4 w-4" />
                Post Update
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-6">
        <h2 className="text-2xl font-headline font-semibold">Recent Updates</h2>
        {updates.map((update) => (
          <Card key={update.id}>
            <CardContent className="p-6">
              <div className="mb-4 flex items-center gap-3 text-sm">
                <User className="h-4 w-4 text-muted-foreground" />
                <span className="font-semibold">{update.author}</span>
                <Separator orientation="vertical" className="h-4" />
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">{update.date}</span>
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
