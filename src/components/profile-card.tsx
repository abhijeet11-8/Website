
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

type ProfileCardProps = {
  name: string;
  bio: string;
  avatarUrl: string;
};

export function ProfileCard({ name, bio, avatarUrl }: ProfileCardProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-row items-center gap-4 text-left md:gap-6">
          <Avatar className="h-20 w-20 shrink-0 md:h-28 md:w-28">
            <AvatarImage
              src={avatarUrl}
              alt={name}
            />
            <AvatarFallback>{name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="space-y-1.5">
            <h2 className="text-2xl font-bold font-headline bg-gradient-to-r from-chart-2 via-chart-4 to-chart-5 bg-clip-text text-transparent md:text-3xl">{name}</h2>
            <p className="text-base text-muted-foreground md:text-lg">{bio}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
