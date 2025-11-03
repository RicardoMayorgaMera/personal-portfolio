import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
} from "./ui/card";
import Image from "next/image";

export default function ProjectCard({
  imageUrl,
  title,
  description,
  imageDescription,
  organization,
}: {
  title: string;
  description: string;
  imageDescription: string;
  imageUrl: string;
  organization?: string;
}) {
  return (
    <a href="">
      <Card className="grid grid-cols-2 gap-0 p-0 cursor-pointer hover:bg-card bg-background border-none">
        <CardContent className="h-full w-full min-h-44 p-2">
          <figure className="h-full w-full relative">
            <Image
              src={imageUrl}
              alt={imageDescription}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover rounded grayscale"
            />
          </figure>
        </CardContent>
        <CardHeader className="self-center">
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
          {organization && <CardAction>{organization}</CardAction>}
        </CardHeader>
      </Card>
    </a>
  );
}
