
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

type ProfileCardProps = {
  name: string;
  bio: string;
  avatarUrl: string;
};

export function ProfileCard({ name, bio, avatarUrl }: ProfileCardProps) {
  return (
    <Card className="border-none bg-transparent shadow-none md:border md:bg-card md:shadow-sm">
      <CardContent className="p-6">
        <div className="flex flex-col items-center gap-6 text-center md:flex-row md:text-left">
          <Avatar className="h-28 w-28">
            <AvatarImage
              src={avatarUrl}
              alt={name}
            />
            <AvatarFallback>{name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="space-y-1.5">
            <h2 className="text-3xl font-bold font-headline text-primary">{name}</h2>
            <p className="text-lg text-muted-foreground">{bio}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
