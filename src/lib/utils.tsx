import { clsx, type ClassValue } from "clsx";
import React from "react";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function wrapTitleWithViewTransitionNames(
  title: string,
  path: string = "unknown"
) {
  const safePath = path.split("/").pop();

  const wordCounts: { [key: string]: number } = {};
  return title.split(" ").map((origWord) => {
    // remove special characters
    const word = origWord.toLocaleLowerCase().replace(/[^a-z0-9\s-_]/g, "");

    const count = wordCounts[word] ?? 0;
    wordCounts[word] = (wordCounts[word] ?? 0) + 1;

    const uniqueName =
      "_" + safePath + "________" + word + (count > 0 ? "___" + count : "");

    return (
      <React.Fragment key={uniqueName}>
        <span
          key={uniqueName}
          style={{
            viewTransitionName: uniqueName,
          }}
        >
          {origWord}
        </span>{" "}
      </React.Fragment>
    );
  });
}
