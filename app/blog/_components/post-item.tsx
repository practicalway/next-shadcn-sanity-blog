import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export default function PostItem({ ...props }) {
  return (
    <div>
      <Card className="drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <div className="grid grid-cols-6 gap-4">
          <div>
            <div className="flex items-center justify-center p-6">
              {props.mainImage && (
                <div className="relative block overflow-hidden group">
                  <div
                    className="absolute top-0 right-0 px-2 py-1 text-white bg-yellow-500 rounded-tr-lg rounded-bl"
                    style={{ fontSize: "0.7rem" }}
                  >
                    {props.tags && props.tags.length > 0 && (
                      <div className="flex mb-2 space-x-2">
                        {props.tags.map((tag: any) => (
                          <span
                            key={tag.title}
                            className="px-2 py-1 text-white rounded-full"
                            style={{ backgroundColor: tag.color }}
                          >
                            {tag.title}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <Link href={`/blog/post/${props.slug}`}>
                    <img
                      className="rounded-lg w-full h-1/2 aspect-[16/9] md:aspect-[27/17] object-cover group-hover:scale-105 transition duration-700 ease-out"
                      src={props.mainImage}
                      width={100}
                      height={100}
                      alt={props.title}
                    />
                  </Link>
                </div>
              )}
            </div>
          </div>
          <div>
            <div className="flex items-center justify-center ">
              <CardHeader>
                <CardTitle className="flex item-center justify-between">
                  <Link href={`/blog/post/${props.slug}`}>
                    <p> {props.title}</p>
                  </Link>
                </CardTitle>
                <div>
                  <div className="flex items-center mt-4">
                    <div>
                      <div className="w-12 h-12 rounded-full overflow-hidden">
                        <Avatar>
                          <AvatarImage
                            src={props.authorImg}
                            alt={props.author}
                          />
                          <AvatarFallback>
                            {props.author
                              .split(" ")
                              .map((name: string) => name[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                      </div>
                    </div>
                    <div>
                      <HoverCard>
                        <HoverCardTrigger asChild>
                          <Button variant="link">{props.author}</Button>
                        </HoverCardTrigger>
                        <HoverCardContent className="w-80">
                          <div className="flex justify-between space-x-4">
                            <Avatar>
                              <AvatarImage
                                src={props.authorImg}
                                alt={props.author}
                              />
                              <AvatarFallback>VC</AvatarFallback>
                            </Avatar>
                            <div className="space-y-1 ml-4">
                              <h4 className="text-sm font-semibold">
                                {props.author}
                              </h4>
                              <div className="flex items-center pt-2">
                                <span className="text-xs text-muted-foreground">
                                  ⭐ {props.authorPosition}
                                </span>
                              </div>
                              <p className="text-sm">{props.authorShortBio}</p>
                            </div>
                          </div>
                        </HoverCardContent>
                      </HoverCard>
                    </div>
                  </div>
                </div>
                <CardDescription>{props.summary}</CardDescription>
              </CardHeader>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
