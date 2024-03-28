import { formatDistanceToNow } from "date-fns";

export default function PostDate({ dateString }: { dateString: string }) {
  const date = new Date(dateString);
  const timeAgo = formatDistanceToNow(date, { addSuffix: true });

  return (
    <div className="text-white">
      <p>({timeAgo})</p>
    </div>
  );
}
