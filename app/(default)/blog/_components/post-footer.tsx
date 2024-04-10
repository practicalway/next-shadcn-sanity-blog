import { formatDate } from "@/lib/date-format";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const PostFooter = ({
  author,
  authorImg,
  publishedAt,
}: {
  author: string;
  authorImg: string;
  publishedAt: string;
}) => (
  <div className="flex items-center space-x-4 mt-4">
    <Avatar>
      <AvatarImage src={authorImg} alt={author} />
      <AvatarFallback>
        {author
          .split(" ")
          .map((name: string) => name[0])
          .join("")}
      </AvatarFallback>
    </Avatar>
    <div>
      <p className="text-sm font-medium">{author}</p>
      <p className="text-xs text-muted-foreground">
        Published on {formatDate(publishedAt)}
      </p>
    </div>
  </div>
);
