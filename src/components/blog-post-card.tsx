
import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

type BlogPostCardProps = {
  title: string;
  description: string;
  imageUrl?: string;
  imageHint?: string;
  date: string;
  tags: string[];
  slug: string;
  basePath: string;
};

export function BlogPostCard({
  title,
  description,
  imageUrl,
  imageHint,
  date,
  tags,
  slug,
  basePath,
}: BlogPostCardProps) {
  const href = `${basePath}/${slug}`;

  return (
    <Card className="flex flex-col overflow-hidden">
      {imageUrl && (
        <CardHeader className="p-0">
          <Link href={href} className="block">
            <Image
              src={imageUrl}
              alt={title}
              width={800}
              height={400}
              className="h-auto w-full object-cover aspect-[2/1]"
              data-ai-hint={imageHint}
            />
          </Link>
        </CardHeader>
      )}
      <CardContent className="flex-grow p-6 space-y-3">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
        <CardTitle className="text-xl font-bold font-headline">
          <Link href={href}>{title}</Link>
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex justify-between items-center text-sm text-muted-foreground">
        <span>{date}</span>
        <Link
          href={href}
          className="flex items-center gap-1 text-primary hover:underline"
        >
          Read More <ArrowRight className="h-4 w-4" />
        </Link>
      </CardFooter>
    </Card>
  );
}
